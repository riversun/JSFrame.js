'use strict';

var CSimpleLayoutAnimator = require('./CSimpleLayoutAnimator.js');
var CALIGN = require('./CCommon.js');

function WindowEventHelper(model) {

    this.windowMode = 'default';

    this.horizontalAlign = 'left';
    this.verticalAlign = 'top';

    this.keyListener = null;

    this.minimizeButton = null;
    this.maximizeButton = null;
    this.demaximizeButton = null;
    this.deminimizeButton = null;

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


    //If the user changes the window size when the window is maximized state,
    // adjust the size so that window looks maximized.
    this.resizeListener = this.handleOnResize.bind(this);

    this.eventListeners = {};
}

WindowEventHelper.prototype.on = function (eventType, callback) {
    var me = this;
    me.eventListeners[eventType] = callback;
};

//---------------------------------------------------------------------------------------------------------------------
WindowEventHelper.prototype.doMaximize = function (model) {
    var me = this;
    var frame = me.frame;

    //set onresize listener
    window.addEventListener('resize', me.resizeListener);

    //Remember the status of the window before maximizing the window size
    me.saveCurrentWindowStats('maximize_mode');

    me.hideTitleBar = model ? model.hideTitleBar : false;

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
            frame.showFrameComponent(me.demaximizeButton);
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
    });
};

/**
 * Render window as a maximized mode( full screen )
 */
WindowEventHelper.prototype.renderMaximizedMode = function (model) {
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

    if (me.hideFrameBorder) {
        _toWidth = window.innerWidth;
        _toHeight = window.innerHeight + (me.hideTitleBar ? from.titleBarHeight : 0);
    } else {
        _toWidth = window.innerWidth - from.frameBorderWidthDefault * 2;
        _toHeight = window.innerHeight - from.frameBorderWidthDefault * 2 + (me.hideTitleBar ? from.titleBarHeight : 0);
    }
    //compute position and size[end]

    if (me.horizontalAlign == 'right') {
        _toX = -_toWidth;
    }
    if (me.verticalAlign == 'bottom') {
        _toY = -_toHeight;
    }


    //render position and size[begin]
    var funcDoRender = function () {

        frame.setPosition(_toX, _toY);

        if (me.hideFrameBorder) {
            frame.frameBorderWidthDefault = 0;
            frame.frameBorderWidthFocused = 0;
            frame.htmlElement.style.borderWidth = '0px';
        }
        frame.setSize(_toWidth, _toHeight, true);

        if (me.hideTitleBar) {

            if (me.restoreKey) {
                me.keyListener = function (event) {
                    if (event.key === me.restoreKey) {
                        me.doDemaximize({
                            duration: me.restoreDuration ? me.restoreDuration : null,
                            callback: me.restoreCallback ? me.restoreCallback : null
                        });
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
            model.callback(me.frame, {eventType: 'maximized'});
        }
        if (me.eventListeners['maximized']) {
            me.eventListeners['maximized'](me.frame, {eventType: 'maximized'});
        }
    };


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
        funcDoRender();
    }
    //render position and size[end]
};


/**
 * Restore window from maximized mode
 */
WindowEventHelper.prototype.doDemaximize = function (model) {
    var me = this;
    var frame = me.frame;

    if (!me.hasWindowStats('maximize_mode')) {
        return;
    }

    if (me.hideTitleBar) {

    } else {
        if (me.maximizeButton) {
            frame.showFrameComponent(me.maximizeButton);
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
WindowEventHelper.prototype.handleOnResize = function () {
    var me = this;
    me.renderMaximizedMode();
};

//---------------------------------------------------------------------------------------------------------------------

/**
 * Make window minimized mode
 */
WindowEventHelper.prototype.doMinimize = function (model) {

    var me = this;
    var frame = me.frame;

    //Remember the stats of the window before maximizing the window
    me.saveCurrentWindowStats('minimize_mode');


    frame.setResizable(false);

    me.renderMinimizedMode({
        animation: me.animationEnabled,
        callback: (model && model.callback) ? model.callback : null,
        duration: (model && model.duration) ? model.duration : null
    });
};


/**
 * Render window as minimized mode
 */
WindowEventHelper.prototype.renderMinimizedMode = function (model) {
    var me = this;
    var frame = me.frame;
    var ri = me.loadWindowStats('minimize_mode');

    var from = me.getCurrentWindowStats();
    var to = me.getCurrentWindowStats();

    to.height = ri.titleBarHeight;

    var funcDoRender = function () {
        var forceSetSize = true;
        frame.setSize(to.width, to.height, forceSetSize);

        me.windowMode = 'minimized';

        if (me.minimizeButton) {
            frame.hideFrameComponent(me.minimizeButton);
        }

        if (me.deminimizeButton) {
            frame.showFrameComponent(me.deminimizeButton);
        }

        if (model.callback) {
            model.callback(me.frame, {eventType: 'minimized'});
        }
        if (me.eventListeners['minimized']) {
            me.eventListeners['minimized'](me.frame, {eventType: 'minimized'});
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
WindowEventHelper.prototype.doDeminimize = function (model) {
    var me = this;
    var frame = me.frame;

    if (!me.hasWindowStats('minimize_mode')) {
        return;
    }

    if (me.minimizeButton) {
        frame.showFrameComponent(me.minimizeButton);
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
WindowEventHelper.prototype.doHide = function (model) {

    var me = this;
    var frame = me.frame;

    //Remember the stats of the window before maximizing the window
    me.saveCurrentWindowStats('hide_mode');

    frame.setResizable(false);

    me.renderHideMode({
        animation: me.animationEnabled,
        duration: (model && model.duration) ? model.duration : null,
        callback: (model && model.callback) ? model.callback : null,
        align: (model && model.align) ? model.align : null
    });
};


/**
 * Render window as hidden mode
 */
WindowEventHelper.prototype.renderHideMode = function (model) {
    var me = this;
    var frame = me.frame;
    var ri = me.loadWindowStats('hide_mode');

    var from = me.getCurrentWindowStats();


    var left = 0;
    var top = 0;
    {
        var align = (model && model.align) ? model.align : 'LEFT_TOP';


        if (!align || CALIGN.LEFT_TOP == align) {
            left = from.left;
            top = from.top;
        }
        else if (CALIGN.HCENTER_TOP == align) {
            left = from.left + from.width / 2;
            top = from.top;
        }
        else if (CALIGN.RIGHT_TOP == align) {
            left = from.left + from.width;
            top = from.top;
        }
        else if (CALIGN.LEFT_VCENTER == align) {
            left = from.left;
            top = from.top + from.height / 2;
        }
        else if (CALIGN.HCENTER_VCENTER == align) {
            left = from.left + from.width / 2;
            top = from.top + from.height / 2;
        }
        else if (CALIGN.RIGHT_VCENTER == align) {
            left = from.left + from.width;
            top = from.top + from.height / 2;
        }
        else if (CALIGN.LEFT_BOTTOM == align) {
            left = from.left;
            top = from.top + from.height;
        }
        else if (CALIGN.HCENTER_BOTTOM == align) {
            left = from.left + from.width / 2;
            top = from.top + from.height;
        }
        else if (CALIGN.RIGHT_BOTTOM == align) {
            left = from.left + from.width;
            top = from.top + from.height;
        }

    }

    var to = {
        left: left,
        top: top,
        width: 0,
        height: ri.titleBarHeight
    };

    var funcDoRender = function () {
        var forceSetSize = true;
        frame.setSize(to.width, to.height, forceSetSize);
        frame.hide();

        me.windowMode = 'hid';

        if (model && model.callback) {
            model.callback(me.frame, {eventType: 'hid'});
        }
        if (me.eventListeners['hid']) {
            me.eventListeners['hid'](me.frame, {eventType: 'hid'});
        }
    };

    //Hide only the currently visible FrameComponent
    frame.hideAllVisibleFrameComponents();

    if (model && model.animation) {
        me.animateFrame({
            toAlpha: 0,
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
WindowEventHelper.prototype.doDehide = function (model) {
    var me = this;
    var frame = me.frame;

    if (!me.hasWindowStats('hide_mode')) {
        return;
    }

    me.restoreWindow(
        {
            restorePosition: true,
            restoreMode: 'hide_mode',
            animation: me.animationEnabled,
            forceShowFrameComponents: true,
            callback: (model && model.callback) ? model.callback : null,
            eventType: 'dehided'
        });
};
//---------------------------------------------------------------------------------------------------------------------
WindowEventHelper.prototype.loadWindowStats = function (storeKeyName) {
    var me = this;
    return me.statsStore[storeKeyName];
};

/**
 * Remember the status of the window before maximizing or minimizing the window size
 */
WindowEventHelper.prototype.saveCurrentWindowStats = function (storeKeyName) {
    var me = this;
    me.statsStore[storeKeyName] = me.getCurrentWindowStats();
};

WindowEventHelper.prototype.clearWindowStats = function (storeKeyName) {
    var me = this;
    me.statsStore[storeKeyName] = null;
};

WindowEventHelper.prototype.hasWindowStats = function (storeKeyName) {
    var me = this;
    return me.statsStore[storeKeyName];
};

WindowEventHelper.prototype.getCurrentWindowStats = function () {
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
WindowEventHelper.prototype.restoreWindow = function (model) {
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

    var funcDoRender = function () {


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

        //リストアしたらデータはクリアする
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
                me.frame, {eventType: eventType});
        }
        if (me.eventListeners[eventType]) {
            me.eventListeners[eventType](me.frame, {eventType: eventType});
        }
    };


    if (model && model.animation) {
        me.animateFrame({
            duration: model.duration ? model.duration : me.animationDuration,
            frame: frame,
            from: crr,
            to: to,
            callback: funcDoRender
        });
    } else {

        funcDoRender();
    }


    window.removeEventListener('resize', me.resizeListener);
};


WindowEventHelper.prototype.animateFrame = function (model) {
    var me = this;
    var needRequestFocusAfterAnimation = false;

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
        .fromAlpha(1.0)
        .toAlpha((model.toAlpha == 0) ? 0 : 1.0)
        .start(0, needRequestFocusAfterAnimation)
        .then(function (animatorObj) {
            model['callback']();
        });
};
//----------------------------------------------------------------------------------------------------------------------
WindowEventHelper.prototype.setupDefaultEvents = function (model) {
    var me = this;


    if (me.maximizeButton) {
        //イベントはオーバーライドされる
        me.frame.on(me.maximizeButton, 'click', (_frame, evt) => {
            //ウィンドウを最大化する
            _frame.control.doMaximize({
                //true:最大化したときにタイトルバーを隠す
                hideTitleBar: (model.maximizeWithoutTitleBar === true) ? true : false,
                //最大化するときのアニメーション時間
                duration: 100,
                //タイトルバーを隠すときはボタンで復帰できないので変わりにキー入力を使いたい場合はキーを指定できる
                restoreKey: model.restoreKey ? model.restoreKey : 'Escape',
                //最大化から復帰するまでのアニメーション時間（タイトルバーを隠すときはここで指定可能)
                restoreDuration: 100,
                //ウィンドウを最大化終了を受け取るコールバック関数
                callback: (frame, info) => {
                },
                //最大化から戻ったときに呼び出されるコールバック(タイトルバーが無い場合)
                restoreCallback: (frame, info) => {
                    jsFrame.showToast({
                        text: frame.getName() + ' ' + info.eventType
                    });
                },
            });
        });
    }


    if (me.demaximizeButton) {
        me.frame.on(me.demaximizeButton, 'click', (_frame, evt) => {
            //ウィンドウを最大化状態から復帰する
            _frame.control.doDemaximize(
                {
                    // duration: 100,
                    // callback: (frame, info) => {}
                });
        });
    }

    if (me.minimizeButton) {
        me.frame.on(me.minimizeButton, 'click', (_frame, evt) => {

            //'minimizeButton'が押されたときに、最小化したい場合
            _frame.control.doMinimize({
                // duration: 100,
                // callback: (frame, info) => {}
            });

        });
    }

    if (me.deminimizeButton) {
        me.frame.on(me.deminimizeButton, 'click', (_frame, evt) => {
            _frame.control.doDeminimize({
                // duration: 100,
                // callback: (frame, info) => {}
            });
        });
    }
    if (me.hideButton) {
        me.frame.on(me.hideButton, 'click', (_frame, evt) => {
            _frame.control.doHide({
                align: 'CENTER_BOTTOM'
            });
        });
    }

};

WindowEventHelper.prototype.method = function () {

};
module.exports = WindowEventHelper;