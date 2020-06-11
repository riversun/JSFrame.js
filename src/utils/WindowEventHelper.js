'use strict';

var CSimpleLayoutAnimator = require('./CSimpleLayoutAnimator.js');
var CALIGN = require('../CCommon.js');
var mergeDeeply = require('merge-deeply');
var EventListenerHelper = require('event-listener-helper');

function WindowEventHelper(model) {

  this.eventListenerHelper = new EventListenerHelper();
  this.windowMode = 'default';
  this.styleDisplay = 'flex';
  this.horizontalAlign = 'left';
  this.verticalAlign = 'top';

  this.keyListener = null;

  this.minimizeButton = null;
  this.maximizeButton = null;
  this.demaximizeButton = null;
  this.deminimizeButton = null;

  this.opts = model;

  this.isWindowManagerFixed = model.frame.jsFrame.isWindowManagerFixed;

  if (model.styleDisplay) {
    this.styleDisplay = model.styleDisplay;
  }
  if (model.minimizeButton) {
    this.minimizeButton = model.minimizeButton;
  }
  if (model.deminimizeButton) {
    this.deminimizeButton = model.deminimizeButton;
  }
  if (model.maximizeButton) {
    this.maximizeButton = model.maximizeButton;
  }
  if (model.demaximizeButton) {
    this.demaximizeButton = model.demaximizeButton;
  }

  if (model.hideButton) {
    this.hideButton = model.hideButton;
  }
  if (model.hideButtons) {
    this.hideButtons = model.hideButtons;
  }

  this.maximizeParam = model.maximizeParam;
  this.demaximizeParam = model.demaximizeParam;
  this.minimizeParam = model.minimizeParam;
  this.deminimizeParam = model.deminimizeParam;
  this.hideParam = model.hideParam;
  this.dehideParam = model.dehideParam;


  if (model.horizontalAlign) {
    this.horizontalAlign = model.horizontalAlign;
  }
  if (model.verticalAlign) {
    this.verticalAlign = model.verticalAlign;
  }


  this.animationEnabled = false;
  this.animationDuration = 100;
  this.frame = model.frame;
  this.hideFrameBorder = true;
  this.hideTitleBar = true;

  this.restoreKey = null;
  this.restoreDuration = null;
  this.restoreCallback = null;

  this.statsStore = {};

  if (model.animation) {
    this.animationEnabled = model.animation;
  }
  if (model.animationDuration) {
    this.animationDuration = model.animationDuration;
  }
  this.eventListeners = {};


  //If the user changes the window size when the window is maximized state,
  // adjust the size so that window looks maximized.
  this.resizeListener = this.handleOnResize.bind(this);

  if (this.maximizeParam && this.maximizeParam.matchParent) {
    this.resizeListener = this.handleOnVirtualResize.bind(this);
  }


}

WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR = '__jsframe-mp-marker';

WindowEventHelper.prototype.on = function(eventType, callback) {
  var me = this;
  me.eventListeners[eventType] = callback;
};

//---------------------------------------------------------------------------------------------------------------------
WindowEventHelper.prototype.doMaximize = function(model) {
  var me = this;

  if (me.windowMode === 'hid') {
    throw Error('[JSrame] It is not possible to change directly from the hid state to the maximized state');
    return;
  }


  if (me.windowMode === 'maximized' || me.windowMode === 'maximizing') {
    // If it's already 'maximized' status, it doesn't do anything.
    return;
  }

  me.windowMode = 'maximizing';


  var frame = me.frame;

  if (model && model.matchParent) {
    // The div element does not issue the resize event. Furthermore,
    // div is specified as 100%, so style.width is always 100%.
    // So I want to get the clientWidth but I can't get it with mutationObserver.
    // Therefore, we adopt a mechanism to catch the parent window
    // resize event and change the attribute of the parent window content
    // by differentiation to catch it.
    var windowManager = frame.getWindowManager();
    var parentElement = windowManager.getParentElement();

    if (!me.matchParentResizeObserver) {
      var matchParentResizeObserver = new MutationObserver(function() {
        // console.log("on virtual resize");
        me.resizeListener();
      });
      matchParentResizeObserver.observe(parentElement, {
        attributeFilter: [WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR],
        attributes: true
      });
      me.matchParentResizeObserver = matchParentResizeObserver;
    }
  }
    //set onresize listener
  //window.addEventListener('resize', me.resizeListener);
  else if (!me.eventListenerHelper.hasEventListener(window, 'resize', 'window-resize-listener')) {
    me.eventListenerHelper.addEventListener(window, 'resize', me.resizeListener,
      { listenerName: 'window-resize-listener' });
  }

  //Remember the status of the window before maximizing the window size
  me.saveCurrentWindowStats('maximize_mode');

  me.hideTitleBar = model ? model.fullScreen : false;

  if (me.hideTitleBar) {

    //Hide only the currently visible FrameComponent
    //ウィンドウのモードを変更する前の今の状態で可視状態にあるフレームコンポーネント（閉じるボタン類）を不可視にする
    //(タイトルバー非表示の場合には最大化するときのアニメーションでフレームコンポーネントを見せないようにする)
    frame.hideAllVisibleFrameComponents();

    //またhideAllVisibleFrameComponentを実施するときに、個別のhideFrameComponentやshowFrameComponentを実行すると
    //管理ステートが破綻するため、タイトルバー非表示の場合はどうせ操作できないということもあり
    //hideFrameComponent や showFrameComponentは実行しない

  } else {

    //Process required for maximization
    if (me.maximizeButton) {
      frame.hideFrameComponent(me.maximizeButton);
    }
    if (me.demaximizeButton) {
      frame.showFrameComponent(me.demaximizeButton, me.styleDisplay);
    }
  }


  frame.setMovable(false);
  frame.setResizable(false);


  if (model && model.restoreKey) {
    me.restoreKey = model.restoreKey;
  }
  if (model && model.restoreDuration) {
    me.restoreDuration = model.restoreDuration;
  }
  if (model && model.restoreCallback) {
    me.restoreCallback = model.restoreCallback;
  }
  //Render maximization itself
  me.renderMaximizedMode({
    animation: me.animationEnabled,
    callback: (model && model.callback) ? model.callback : null, //set maximized finished callback
    duration: (model && model.duration) ? model.duration : null,
    matchParent: (model && model.matchParent) ? model.matchParent : false,
  });
};


/**
 * Render window as a maximized mode( full screen )
 */
WindowEventHelper.prototype.renderMaximizedMode = function(model) {
  var me = this;
  var frame = me.frame;
  var from = me.loadWindowStats('maximize_mode');

  var _toX = 0;
  var _toY = 0;
  var _toWidth = 0;
  var _toHeight = 0;

  //compute position and size[begin]
  if (me.hideTitleBar) {
    _toX = 0;
    _toY = -from.titleBarHeight;
  }

  var parentWidth = window.innerWidth;
  var parentHeight = window.innerHeight;

  if (model.matchParent) {
    // If matchParent is specified
    // When maximizing, use the size of parentElement specified at initialization
    // ParentlElement is often used only for adjusting the display order.
    // Therefore, only if matchParent is specified, match the size of parentElement
    var windowManager = frame.getWindowManager();
    var parentElement = windowManager.getParentElement();
    parentWidth = parentElement.clientWidth;
    parentHeight = parentElement.clientHeight;
  }

  if (me.hideFrameBorder) {
    _toWidth = parentWidth;
    _toHeight = parentHeight + (me.hideTitleBar ? from.titleBarHeight : 0);
  } else {
    _toWidth = parentWidth - from.frameBorderWidthDefault * 2;
    _toHeight = parentHeight - from.frameBorderWidthDefault * 2 + (me.hideTitleBar ? from.titleBarHeight : 0);
  }
  //compute position and size[end]

  if (me.horizontalAlign == 'right') {
    _toX = -_toWidth;
  }
  if (me.verticalAlign == 'bottom') {
    _toY = -_toHeight;
  }


  //render position and size[begin]
  var funcDoRender = function(opt) {

    var disableCallback = opt && opt.disableCallback;

    frame.setPosition(_toX, _toY);

    if (me.hideFrameBorder) {
      frame.frameBorderWidthDefault = 0;
      frame.frameBorderWidthFocused = 0;
      frame.htmlElement.style.borderWidth = '0px';
    }
    frame.setSize(_toWidth, _toHeight, true);

    if (disableCallback) {
      return;
    }

    if (me.hideTitleBar) {
      // when full screen mode(means hidden title bar)

      if (me.restoreKey) {
        me.keyListener = function(event) {
          if (event.code === me.restoreKey) {
            me.doCommand('restore');
          }
        };
      }
      window.addEventListener('keydown', me.keyListener);

      //add keylistener for inside the iframe
      if (frame.iframe) {
        frame.iframe.contentWindow.addEventListener('keydown', me.keyListener);
      }
    }

    me.windowMode = 'maximized';


    if (model && model.callback) {
      model.callback(me.frame, { eventType: 'maximized' });
    }
    if (me.eventListeners['maximized']) {
      me.eventListeners['maximized'](me.frame, { eventType: 'maximized' });
    }

  };// end of funcDoRender


  if (model && model.animation) {


    me.animateFrame({
      frame: frame,
      from: from,
      to: {
        left: _toX,
        top: _toY,
        width: _toWidth,
        height: _toHeight
      },
      duration: model.duration ? model.duration : me.animationDuration,
      callback: funcDoRender
    });
  } else {
    if (model && model.caller === 'handleOnResize') {
      funcDoRender({ disableCallback: true });
    } else {
      funcDoRender();
    }
  }
  //render position and size[end]
};

WindowEventHelper.prototype.getWindowMode = function() {
  return this.windowMode;
};
/**
 * Restore window from maximized mode
 */
WindowEventHelper.prototype.doDemaximize = function(model) {
  var me = this;
  var frame = me.frame;

  if (me.windowMode === 'hid') {
    //console.error('demaximize(=recovery from maximized) cannot be performed in hid state.');
    throw Error('[JSFrame] demaximize(=recovery from maximized) cannot be performed in hid state.');
    return;
  }

  if (!me.hasWindowStats('maximize_mode')) {
    return;
  }

  if (me.hideTitleBar) {

  } else {
    if (me.maximizeButton) {
      frame.showFrameComponent(me.maximizeButton, me.styleDisplay);
    }
    if (me.demaximizeButton) {
      frame.hideFrameComponent(me.demaximizeButton);
    }
  }

  me.restoreWindow({
    restorePosition: true,
    restoreMode: 'maximize_mode',
    animation: me.animationEnabled,
    callback: (model && model.callback) ? model.callback : null,
    forceShowFrameComponents: (me.animationEnabled && me.hideTitleBar),
    duration: (model && model.duration) ? model.duration : null,
    eventType: 'demaximized'
  });
};


/**
 * Called when changing the window size by user operation in maximized mode
 */
WindowEventHelper.prototype.handleOnResize = function() {
  var me = this;
  me.renderMaximizedMode({
    caller: 'handleOnResize',
    //matchParent: true
  });
};
WindowEventHelper.prototype.handleOnVirtualResize = function() {
  var me = this;
  me.renderMaximizedMode({
    caller: 'handleOnResize',
    matchParent: true
  });
};

//---------------------------------------------------------------------------------------------------------------------

/**
 * Make window minimized mode
 */
WindowEventHelper.prototype.doMinimize = function(model) {
  var me = this;

  if (me.windowMode === 'minimized' || me.windowMode === 'minimizing') {
    // If it's already 'minimized' status, it doesn't do anything.
    return;
  }

  me.windowMode = 'minimizing';


  var frame = me.frame;

  //Remember the stats of the window before maximizing the window
  me.saveCurrentWindowStats('minimize_mode');


  frame.setResizable(false);

  me.renderMinimizedMode({
    animation: me.animationEnabled,
    callback: (model && model.callback) ? model.callback : null,
    duration: (model && model.duration) ? model.duration : null,
    toWidth: (model && model.toWidth) ? model.toWidth : null,
  });
};


/**
 * Render window as minimized mode
 */
WindowEventHelper.prototype.renderMinimizedMode = function(model) {
  var me = this;
  var frame = me.frame;
  var ri = me.loadWindowStats('minimize_mode');

  var from = me.getCurrentWindowStats();
  var to = me.getCurrentWindowStats();

  to.height = ri.titleBarHeight;
  if (model && model.toWidth) {
    to.width = model.toWidth
  }

  var funcDoRender = function() {
    var forceSetSize = true;
    frame.setSize(to.width, to.height, forceSetSize);

    me.windowMode = 'minimized';

    if (me.minimizeButton) {
      frame.hideFrameComponent(me.minimizeButton);
    }

    if (me.deminimizeButton) {
      frame.showFrameComponent(me.deminimizeButton, me.styleDisplay);
    }

    if (model.callback) {
      model.callback(me.frame, { eventType: 'minimized' });
    }
    if (me.eventListeners['minimized']) {
      me.eventListeners['minimized'](me.frame, { eventType: 'minimized' });
    }
  };

  if (model && model.animation) {
    me.animateFrame({
      toAlpha: 1.0,
      duration: model.duration ? model.duration : me.animationDuration,
      frame: frame,
      from: from,
      to: to,
      callback: funcDoRender
    });
  } else {
    funcDoRender();
  }


};


/**
 * Restore window from minimized mode
 */
WindowEventHelper.prototype.doDeminimize = function(model) {
  var me = this;

  var frame = me.frame;

  if (!me.hasWindowStats('minimize_mode')) {
    return;
  }

  if (me.minimizeButton) {
    frame.showFrameComponent(me.minimizeButton, me.styleDisplay);
  }
  if (me.deminimizeButton) {
    frame.hideFrameComponent(me.deminimizeButton);
  }

  me.restoreWindow(
    {
      restorePosition: false,
      restoreMode: 'minimize_mode',
      animation: me.animationEnabled,
      duration: (model && model.duration) ? model.duration : null,
      callback: (model && model.callback) ? model.callback : null,
      eventType: 'deminimized'
    });
};

//---------------------------------------------------------------------------------------------------------------------
/**
 * Make window hidden mode
 */
WindowEventHelper.prototype.doHide = function(model) {

  var me = this;

  if (me.windowMode === 'hid' || me.windowMode === 'hiding') {
    // If it's already 'hid' status, it doesn't do anything.
    return;
  }

  me.windowMode = 'hiding';

  var frame = me.frame;

  //Remember the stats of the window before maximizing the window
  me.saveCurrentWindowStats('hide_mode');


  frame.setResizable(false);


  var arg = {
//    silent: model.silent,
    animation: me.animationEnabled,
    // duration: (model && model.duration) ? model.duration : null,
    // callback: (model && model.callback) ? model.callback : null,
    // align: (model && model.align) ? model.align : null,
    // offset: (model && model.align) ? model.offset : null,
  };
  if (model) {
    mergeDeeply({ op: 'overwrite-merge', object1: arg, object2: model });
  }
  me.renderHideMode(arg);
};


/**
 * Render window as hidden mode
 */
WindowEventHelper.prototype.renderHideMode = function(model) {
  var me = this;
  var frame = me.frame;
  var ri = me.loadWindowStats('hide_mode');

  var from = me.getCurrentWindowStats();

  var offset = { x: 0, y: 0 };
  var toElement = model.toElement;

  if (model.offset) {
    offset = model.offset;
  }

  var left = 0;
  var top = 0;
  {
    var align = (model && model.align) ? model.align : 'LEFT_TOP';


    if (!align || CALIGN.LEFT_TOP == align) {
      left = from.left;
      top = from.top;
    } else if (CALIGN.HCENTER_TOP == align) {
      left = from.left + from.width / 2;
      top = from.top;
    } else if (CALIGN.RIGHT_TOP == align) {
      left = from.left + from.width;
      top = from.top;
    } else if (CALIGN.LEFT_VCENTER == align) {
      left = from.left;
      top = from.top + from.height / 2;
    } else if (CALIGN.HCENTER_VCENTER == align) {
      left = from.left + from.width / 2;
      top = from.top + from.height / 2;
    } else if (CALIGN.RIGHT_VCENTER == align) {
      left = from.left + from.width;
      top = from.top + from.height / 2;
    } else if (CALIGN.LEFT_BOTTOM == align) {
      left = from.left;
      top = from.top + from.height;
    } else if (CALIGN.HCENTER_BOTTOM == align) {
      left = from.left + from.width / 2;
      top = from.top + from.height;
    } else if (CALIGN.RIGHT_BOTTOM == align) {
      left = from.left + from.width;
      top = from.top + from.height;

    } else if ('ABSOLUTE' == align) {
      if (toElement) {
        var elementRect = toElement.getBoundingClientRect();
        if (me.isWindowManagerFixed) {
          left = elementRect.left;
          top = elementRect.top;
        } else {
          left = elementRect.left + window.pageXOffset;
          top = elementRect.top + window.pageYOffset;
        }
      } else {
        left = offset.x;
        top = offset.y;
      }
    }

  }

  var to = {
    left: left,
    top: top,
    width: 0,
    //minimum height must be titleBarHeight
    height: ri.titleBarHeight
  };

  var funcDoRender = function() {
    var forceSetSize = true;
    frame.setSize(to.width, to.height, forceSetSize);
    //frame.hide();

    me.windowMode = 'hid';

    if (model && model.callback) {
      model.callback(me.frame, { eventType: 'hid' });
    }
    if (me.eventListeners['hid']) {
      me.eventListeners['hid'](me.frame, { eventType: 'hid' });
    }
  };

  //Hide only the currently visible FrameComponent
  frame.hideAllVisibleFrameComponents();

  if (model && model.animation) {
    me.animateFrame({
      fromAlpha: model.silent ? 0 : 1.0,
      toAlpha: 0,
      ease: true,
      duration: model.duration ? model.duration : me.animationDuration,
      frame: frame,
      from: from,
      to: to,
      callback: funcDoRender
    });
  } else {
    funcDoRender();
  }


};


/**
 * Restore window from hided mode
 */
WindowEventHelper.prototype.doDehide = function(model) {
  var me = this;
  var frame = me.frame;

  if (!me.hasWindowStats('hide_mode')) {
    return;
  }

  me.restoreWindow(
    {
      duration: (model && model.duration) ? model.duration : null,
      restorePosition: true,
      restoreMode: 'hide_mode',
      animation: me.animationEnabled,
      forceShowFrameComponents: true,
      callback: (model && model.callback) ? model.callback : null,
      eventType: 'dehided'
    });
};
//---------------------------------------------------------------------------------------------------------------------
WindowEventHelper.prototype.loadWindowStats = function(storeKeyName) {
  var me = this;
  return me.statsStore[storeKeyName];
};


/**
 * Remember the status of the window before maximizing or minimizing the window size
 * @param storeKeyName
 * @returns {boolean} Returns true if the status of the window has been updated or is a new status.
 * Returns false if the status has not been updated.
 */
WindowEventHelper.prototype.saveCurrentWindowStats = function(storeKeyName) {
  var me = this;

  var crrWindowStats = me.getCurrentWindowStats();

  if (me.hasWindowStats(storeKeyName)) {

    var storedStats = me.loadWindowStats(storeKeyName);
    var isWindowStatsUpdated = !me.windowStatsEquals(crrWindowStats, storedStats);

    if (isWindowStatsUpdated) {
      me.statsStore[storeKeyName] = crrWindowStats;
    }

    return isWindowStatsUpdated;

  } else {
    me.statsStore[storeKeyName] = crrWindowStats;
    return true;
  }


};

WindowEventHelper.prototype.windowStatsEquals = function(windowStats1, windowStats2) {

  if (windowStats1 && windowStats2) {
    var result = JSON.stringify(windowStats1) === JSON.stringify(windowStats2);
    return result;
  } else {
    return false;
  }

};

WindowEventHelper.prototype.clearWindowStats = function(storeKeyName) {
  var me = this;
  me.statsStore[storeKeyName] = null;
};

WindowEventHelper.prototype.hasWindowStats = function(storeKeyName) {
  var me = this;
  return me.statsStore[storeKeyName];
};

WindowEventHelper.prototype.getCurrentWindowStats = function() {
  var me = this;
  var frame = me.frame;

  //Acquire window's stats
  var __titleBarHeight = parseInt(frame.titleBar.style.height, 10);
  var __frameBorderWidthDefault = frame.frameBorderWidthDefault;// parseInt(frame.htmlElement.style.borderWidth, 10);
  var __frameBorderWidthFocused = frame.frameBorderWidthFocused;
  var __left = frame.getLeft();
  var __top = frame.getTop();
  var __width = frame.getWidth();
  var __height = frame.getHeight();
  var __resizable = frame.resizable;
  var __movable = frame.movable;


  return {
    left: __left,
    top: __top,
    width: __width,
    height: __height,
    titleBarHeight: __titleBarHeight,
    frameBorderWidthDefault: __frameBorderWidthDefault,
    frameBorderWidthFocused: __frameBorderWidthFocused,
    resizable: __resizable,
    movable: __movable,
  };
};


/**
 * Restore the state of the window
 * @param model
 */
WindowEventHelper.prototype.restoreWindow = function(model) {
  var me = this;
  var frame = me.frame;
  var to = me.loadWindowStats(model.restoreMode);
  //現在の状態を一時保存する
  //me.saveCurrentWindowStats('temp');
  var crr = me.getCurrentWindowStats();//loadWindowStats('temp');


  //以下の3つは、ボーダーを太さを変更するためのものだが
  // funcDoRender内で処理してしまうとアニメーション中にはボーダーが描かれなくなる
  //アニメーション中にはボーダーは復活していたほうが自然なのでfuncDoRender外で実行する
  frame.frameBorderWidthDefault = to.frameBorderWidthDefault;
  frame.frameBorderWidthFocused = to.frameBorderWidthFocused;
  frame.htmlElement.style.borderWidth = frame.frameBorderWidthFocused;

  var funcDoRender = function() {


    if (model && model.restorePosition == false) {
      //位置の移動を伴わない場合（最小化から戻すときなど)
      to.left = crr.left;
      to.top = crr.top;
    }

    frame.setPosition(to.left, to.top);

    var force = true;
    frame.setSize(to.width, to.height, force);

    frame.setResizable(to.resizable);
    frame.setMovable(to.movable);

    me.clearWindowStats(model.restoreMode);

    if (me.keyListener) {
      //タイトルバー無し最大化状態から戻すためのキーリスナーは削除する

      window.removeEventListener('keydown', me.keyListener);
      if (frame.iframe) {
        frame.iframe.contentWindow.removeEventListener('keydown', me.keyListener);
      }
      me.keyListener = null;
    }

    me.windowMode = 'default';

    if (model && model.forceShowFrameComponents) {
      //ウィンドウのモード変更前に可視状態にあったフレームコンポーネント（閉じるボタン類）を可視状態にする
      frame.showAllVisibleFrameComponents();
    }

    frame.show();

    var eventType = 'restored';
    if (model && model.eventType) {
      eventType = model.eventType;
    }

    if (model && model.callback) {
      model.callback(
        me.frame, { eventType: eventType });
    }
    if (me.eventListeners[eventType]) {
      me.eventListeners[eventType](me.frame, { eventType: eventType });
    }
  };


  if (model && model.animation) {
    me.animateFrame({
      duration: model.duration ? model.duration : me.animationDuration,
      frame: frame,
      fromAlpha: 0,
      toAlpha: 1,
      from: crr,
      to: to,
      callback: funcDoRender
    });
  } else {

    funcDoRender();
  }

  //window.removeEventListener('resize', me.resizeListener);
  me.eventListenerHelper.removeEventListener(window, 'resize', me.resizeListener);
  if (me.matchParentResizeObserver) {
    me.matchParentResizeObserver.disconnect();
    me.matchParentResizeObserver = null;
  }

};


WindowEventHelper.prototype.animateFrame = function(model) {
  var me = this;
  var needRequestFocusAfterAnimation = false;


  var fromAlpha = !isNaN(model.fromAlpha) ? model.fromAlpha : 1.0;

  var from = model.from;
  var to = model.to;

  var animator = new CSimpleLayoutAnimator();

  animator.set(model.frame)
    .setDuration(model.duration ? model.duration : me.animationDuration)
    .fromPosition(from.left, from.top, 'LEFT_TOP')
    .toPosition(to.left, to.top, 'LEFT_TOP')
    .fromWidth(from.width)
    .fromHeight(from.height)
    .toWidth(to.width)
    .toHeight(to.height)
    .fromAlpha(fromAlpha)
    .toAlpha((model.toAlpha == 0) ? 0 : 1.0)
    .ease(model.ease)
    .start(0, needRequestFocusAfterAnimation)
    .then(function(animatorObj) {
      model['callback']();
    });
};

/**
 * Perform complex windowing with simple commands
 * @param cmd
 * @param opt
 */
WindowEventHelper.prototype.doCommand = function(cmd, opt) {
  var me = this;


  if (cmd === 'maximize') {
    me._defaultFunctionMaximize(me.frame);
  }
  if (cmd === 'demaximize') {
    me._defaultFunctionDemaximize(me.frame);
  }
  if (cmd === 'restore') {
    me._defaultFunctionRestoreFromFullscreen(me.frame)
  }
  if (cmd === 'minimize') {
    me._defaultFunctionMinimize(me.frame);
  }
  if (cmd === 'deminimize') {
    me._defaultFunctionDeminimize(me.frame);
  }
  if (cmd === 'hide') {
    me._defaultFunctionHide(me.frame);
  }
  if (cmd === 'dehide') {
    me._defaultFunctionDehide(me.frame);
  }
}

WindowEventHelper.prototype._defaultFunctionMaximize = function(_frame, evt) {
  var me = this;
  var model = me.opts;

  var param = {
    // DEPRECATED: maximizeWithoutTitleBar is deprecated
    // USE maximizeParam.fullScreen
    fullScreen: (model.maximizeWithoutTitleBar === true) ? true : false,

    // DEPRECATED: model.restoreKey is deprecated
    // USE maximizeParam.restoreKey

    // If you want to use the key input instead of the title bar,
    // you can specify the key because it is not possible
    // to recover with the button when hiding the title bar.
    restoreKey: model.restoreKey ? model.restoreKey : 'Escape',

    // DEPRECATED: model.restoreDuration is deprecated
    // USE maximizeParam.restoreDuration
    restoreDuration: model.restoreDuration,
  };

  if (this.maximizeParam) {
    // write maximizeParam into param
    mergeDeeply({ op: 'overwrite-merge', object1: param, object2: this.maximizeParam });
  }

  //ウィンドウを最大化する
  _frame.control.doMaximize(param);
};

WindowEventHelper.prototype._defaultFunctionDemaximize = function(_frame, evt) {
  _frame.control.doDemaximize(
    {});
};

WindowEventHelper.prototype._defaultFunctionRestoreFromFullscreen = function(_frame, evt) {
  var me = this;
  _frame.control.doDemaximize({
    duration: me.restoreDuration ? me.restoreDuration : null,
    callback: me.restoreCallback ? me.restoreCallback : null
  });
};

WindowEventHelper.prototype._defaultFunctionMinimize = function(_frame, evt) {

  //'minimizeButton'が押されたときに、最小化したい場合
  _frame.control.doMinimize(this.minimizeParam);

};

WindowEventHelper.prototype._defaultFunctionDeminimize = function(_frame, evt) {
  _frame.control.doDeminimize(this.deminimizeParam);
};

WindowEventHelper.prototype._defaultFunctionHide = function(_frame, evt) {

  var param = {
    align: 'CENTER_BOTTOM'
  };
  if (this.hideParam) {
    param = this.hideParam;
  }
  _frame.control.doHide(param);

};

WindowEventHelper.prototype._defaultFunctionDehide = function(_frame, evt) {
  var me = this;
  _frame.control.doDehide(me.dehideParam);
};

WindowEventHelper.prototype.setupDefaultEvents = function() {
  var me = this;

  if (me.maximizeButton) {
    //イベントはオーバーライドされる
    me.frame.on(me.maximizeButton, 'click', me._defaultFunctionMaximize.bind(me));
  }

  if (me.demaximizeButton) {
    me.frame.on(me.demaximizeButton, 'click', me._defaultFunctionDemaximize.bind(me));
  }

  if (me.minimizeButton) {
    me.frame.on(me.minimizeButton, 'click', me._defaultFunctionMinimize.bind(me));
  }

  if (me.deminimizeButton) {
    me.frame.on(me.deminimizeButton, 'click', me._defaultFunctionDeminimize.bind(me));
  }

  if (me.hideButton) {
    me.frame.on(me.hideButton, 'click', me._defaultFunctionHide.bind(me));
  }

  if (me.hideButtons) {
    for (var key in me.hideButtons) {
      var hideButton = me.hideButtons[key];
      if (hideButton) {
        me.frame.on(hideButton, 'click', me._defaultFunctionHide.bind(me));
      }
    }
  }

};

module.exports = WindowEventHelper;
