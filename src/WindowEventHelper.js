'use strict';

var CSimpleLayoutAnimator = require('./CSimpleLayoutAnimator.js');


function WindowEventHelper(model) {

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

    this.animationEnabled = true;
    this.frame = model.frame;
    this.hideFrameBorder = true;
    this.hideTitleBar = true;
    this.statsStore = {};

    //If the user changes the window size when the window is maximized state,
    // adjust the size so that window looks maximized.
    this.resizeListener = this.handleOnResize.bind(this);
}


WindowEventHelper.prototype.doMaximize = function () {
    var me = this;
    var frame = me.frame;

    //set onresize listener
    window.addEventListener('resize', me.resizeListener);

    //Remember the status of the window before maximizing the window size
    me.saveWindowStats('maximize_mode');

    //Process required for maximization
    if (me.maximizeButton) {
        frame.hideFrameComponent(me.maximizeButton);
    }
    if (me.demaximizeButton) {
        frame.showFrameComponent(me.demaximizeButton);
    }


    frame.setMovable(false);
    frame.setResizable(false);


    //Render maximization itself
    me.renderMaximizedMode({
        animation: me.animationEnabled
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

    //render position and size[begin]
    var funcDoRender = function () {

        frame.setPosition(0, _toY);

        if (me.hideFrameBorder) {
            frame.frameBorderWidthDefault = 0;
            frame.frameBorderWidthFocused = 0;
            frame.htmlElement.style.borderWidth = '0px';
        }
        frame.setSize(_toWidth, _toHeight, true);
    };


    if (model && model.animation) {
        //TODO from(left,top,width,height)とtop(left,top,width,height)を入力したら自動的にアニメできるようにする
        me.animateFrame({
            frame: frame,
            from: from,
            to: {
                left: _toX,
                top: _toY,
                width: _toWidth,
                height: _toHeight
            },
            callback: funcDoRender
        });


    } else {
        funcDoRender();
    }
    //render position and size[end]
};


WindowEventHelper.prototype.animateFrame = function (model) {
    var needRequestFocusAfterAnimation = false;

    var from = model.from;
    var to = model.to;

    var animator = new CSimpleLayoutAnimator();
    animator.set(model.frame)
        .setDuration(100)
        .fromPosition(from.left, from.top, 'LEFT_TOP')
        .toPosition(to.left, to.top, 'LEFT_TOP')
        .fromWidth(from.width)
        .fromHeight(from.height)
        .toWidth(to.width)
        .toHeight(to.height)
        .fromAlpha(1.0)
        .toAlpha(1.0)
        .start(0, needRequestFocusAfterAnimation)
        .then(function (animatorObj) {
            model['callback']();
        });
}

/**
 * Restore window from maximized mode
 */
WindowEventHelper.prototype.doDemaximize = function () {
    var me = this;
    var frame = me.frame;

    if (me.maximizeButton) {
        frame.showFrameComponent(me.maximizeButton);
    }
    if (me.demaximizeButton) {
        frame.hideFrameComponent(me.demaximizeButton);
    }

    me.restoreWindow({
        restorePosition: true,
        restoreMode: 'maximize_mode',
        animation: true
    });
};


/**
 * Called when changing the window size by user operation in maximized mode
 */
WindowEventHelper.prototype.handleOnResize = function () {
    var me = this;
    me.renderMaximizedMode();
};

/**
 * Make window minimized mode
 */
WindowEventHelper.prototype.doMinimize = function () {

    var me = this;
    var frame = me.frame;

    //Remember the stats of the window before maximizing the window
    me.saveWindowStats('minimize_mode');

    if (me.minimizeButton) {
        frame.hideFrameComponent(me.minimizeButton);
    }

    if (me.deminimizeButton) {
        frame.showFrameComponent(me.deminimizeButton);
    }
    frame.setResizable(false);


        me.renderMinimizedMode();
    


};


/**
 * Render window as minimized mode
 */
WindowEventHelper.prototype.renderMinimizedMode = function () {
    var me = this;
    var frame = me.frame;
    var ri = me.loadWindowStats('minimize_mode');


    var from=me.getWindowStats();
    var to=me.getWindowStats();

    to.height  = ri.titleBarHeight;

    var funcDoRender = function () {
        var forceSetSize = true;
        frame.setSize(to.width,to.height, forceSetSize);
    }

    //
    me.animateFrame({
        frame: frame,
        from: from,
        to:to,
        callback: funcDoRender
    });


};


/**
 * Restore window from minimized mode
 */
WindowEventHelper.prototype.doDeminimize = function () {
    var me = this;
    var frame = me.frame;

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
            animation: true
        });
};


WindowEventHelper.prototype.loadWindowStats = function (storeKeyName) {
    var me = this;
    return me.statsStore[storeKeyName];
};
/**
 * Remember the status of the window before maximizing or minimizing the window size
 */
WindowEventHelper.prototype.saveWindowStats = function (storeKeyName) {
    var me = this;
    // var frame = me.frame;
    //
    // //Acquire window's stats
    // var __titleBarHeight = parseInt(frame.titleBar.style.height, 10);
    // var __frameBorderWidthDefault = frame.frameBorderWidthDefault;// parseInt(frame.htmlElement.style.borderWidth, 10);
    // var __frameBorderWidthFocused = frame.frameBorderWidthFocused;
    // var __left = frame.getLeft();
    // var __top = frame.getTop();
    // var __width = frame.getWidth();
    // var __height = frame.getHeight();
    // var __resizable = frame.resizable;
    // var __movable = frame.movable;


    me.statsStore[storeKeyName] = me.getWindowStats();

};

WindowEventHelper.prototype.getWindowStats = function () {
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
    me.saveWindowStats('temp');
    var crr = me.loadWindowStats('temp');


    var funcDoRender = function () {
        frame.frameBorderWidthDefault = to.frameBorderWidthDefault;
        frame.frameBorderWidthFocused = to.frameBorderWidthFocused;
        frame.htmlElement.style.borderWidth = frame.frameBorderWidthFocused;

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
    }


    if (model && model.animation) {
        me.animateFrame({
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

module.exports = WindowEventHelper;