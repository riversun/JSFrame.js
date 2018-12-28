'use strict';

function WindowEventHelper(model) {

    this.minimizeButton = '';
    this.maximizeButton = '';
    this.demaximizeButton = '';
    this.deminimizeButton = '';

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
    frame.hideFrameComponent(me.maximizeButton);
    frame.showFrameComponent(me.demaximizeButton);
    frame.setMovable(false);
    frame.setResizable(false);

    //Render maximization itself
    me.renderMaximizedMode();

};


/**
 * Render window as a maximized mode( full screen )
 */
WindowEventHelper.prototype.renderMaximizedMode = function () {
    var me = this;
    var frame = me.frame;
    var ri = me.statsStore['maximize_mode'];

    if (me.hideTitleBar) {
        frame.setPosition(0, -ri.titleBarHeight);
    } else {
        frame.setPosition(0, 0);
    }

    if (me.hideFrameBorder) {
        //Since the border will be restored when clicking the window, also set the following two variables to 0
        frame.frameBorderWidthDefault = 0;
        frame.frameBorderWidthFocused = 0;
        frame.htmlElement.style.borderWidth = '0px';
        frame.setSize(
            window.innerWidth,
            window.innerHeight + (me.hideTitleBar ? ri.titleBarHeight : 0), true);
    } else {
        frame.setSize(
            window.innerWidth - ri.frameBorderWidthDefault * 2,
            window.innerHeight - ri.frameBorderWidthDefault * 2 + (me.hideTitleBar ? ri.titleBarHeight : 0), true);
    }
};

/**
 * Restore window from maximized mode
 */
WindowEventHelper.prototype.doDemaximize = function () {
    var me = this;
    var frame = me.frame;
    frame.showFrameComponent(me.maximizeButton);
    frame.hideFrameComponent(me.demaximizeButton);

    me.restoreWindowStats({restorePosition: true, restoreMode: 'maximize_mode'});
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

    frame.hideFrameComponent(me.minimizeButton);
    frame.showFrameComponent(me.deminimizeButton);
    frame.setResizable(false);

    me.renderMinimizedMode();
};


/**
 * Render window as minimized mode
 */
WindowEventHelper.prototype.renderMinimizedMode = function () {
    var me = this;
    var frame = me.frame;
    var ri = me.statsStore['minimize_mode'];

    var forceSetSize = true;
    frame.setSize(frame.getWidth(), ri.titleBarHeight, forceSetSize);
};


/**
 * Restore window from minimized mode
 */
WindowEventHelper.prototype.doDeminimize = function () {
    var me = this;
    var frame = me.frame;

    frame.showFrameComponent(me.minimizeButton);
    frame.hideFrameComponent(me.deminimizeButton);

    me.restoreWindowStats(
        {
            restorePosition: false,
            restoreMode: 'minimize_mode'
        });
};


/**
 * Remember the status of the window before maximizing or minimizing the window size
 */
WindowEventHelper.prototype.saveWindowStats = function (keyName) {
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

    me.statsStore[keyName] = {
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
WindowEventHelper.prototype.restoreWindowStats = function (model) {
    var me = this;
    var frame = me.frame;
    var ri = me.statsStore[model.restoreMode];

    window.removeEventListener('resize', me.resizeListener);

    frame.frameBorderWidthDefault = ri.frameBorderWidthDefault;
    frame.frameBorderWidthFocused = ri.frameBorderWidthFocused;
    frame.htmlElement.style.borderWidth = frame.frameBorderWidthFocused;

    if (model && model.restorePosition == false) {

    } else {
        frame.setPosition(ri.left, ri.top);
    }

    var force = true;
    frame.setSize(ri.width, ri.height, force);

    frame.setResizable(ri.resizable);
    frame.setMovable(ri.movable);


};

module.exports = WindowEventHelper;