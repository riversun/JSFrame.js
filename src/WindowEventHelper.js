'use strict';

function WindowEventHelper(frame) {

    this.frame = frame;
    this.hideFrameBorder = true;
    this.hideTitleBar = true;

    //ウィンドウを最大化した状態のときにユーザーがウィンドウサイズを変更してもウィンドウサイズを追従させるための処理を行う
    this.resizeListener = this.onResize.bind(this);
}

WindowEventHelper.prototype.doMinimize = function () {
    var me = this;
    var frame = me.frame;

    //ウィンドウサイズを最大化する前の情報を記憶しておく
    me.saveWindowStats();

    frame.hideFrameComponent('minimizeButton');
    frame.showFrameComponent('deminimizeButton');
    frame.setResizable(false);

    me.renderMinimizedMode();

};
WindowEventHelper.prototype.renderMinimizedMode = function () {
    var me = this;
    var frame = me.frame;
    var ri = frame.extra.__restore_info;
    var forceSetSize = true;
    frame.setSize(frame.getWidth(), ri.titleBarHeight, forceSetSize);
};

WindowEventHelper.prototype.doDeminimize = function () {
    var me = this;
    var frame = me.frame;
    frame.showFrameComponent('minimizeButton');
    frame.hideFrameComponent('deminimizeButton');

    me.doRestore({restorePosition: false});
};

WindowEventHelper.prototype.saveWindowStats = function () {
    var me = this;
    var frame = me.frame;

    //ウィンドウの状態として保存するデータを取得する
    var __titleBarHeight = parseInt(frame.titleBar.style.height, 10);
    var __frameBorderWidthDefault = frame.frameBorderWidthDefault;// parseInt(frame.htmlElement.style.borderWidth, 10);
    var __frameBorderWidthFocused = frame.frameBorderWidthFocused;
    var __left = frame.getLeft();
    var __top = frame.getTop();
    var __width = frame.getWidth();
    var __height = frame.getHeight();
    var __resizable = frame.resizable;
    var __movable = frame.movable;

    frame.extra.__restore_info = {
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

WindowEventHelper.prototype.onResize = function () {
    var me = this;
    me.renderFullScreen();
};


/**
 * フルスクリーン状態のときの状態を描画する
 */
WindowEventHelper.prototype.renderFullScreen = function () {
    var me = this;
    var frame = me.frame;
    var ri = frame.extra.__restore_info;

    if (me.hideTitleBar) {
        frame.setPosition(0, -ri.titleBarHeight);
    } else {
        frame.setPosition(0, 0);
    }

    if (me.hideFrameBorder) {
        //ウィンドウをクリックしたときにボーダーが元に戻ってしまうので、以下の２つの変数も０にする
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

WindowEventHelper.prototype.doMaximize = function () {
    var me = this;
    var frame = me.frame;

    window.addEventListener('resize', me.resizeListener);

    //ウィンドウサイズを最大化する前の情報を記憶しておく
    me.saveWindowStats();

    //最大化に必要な処理
    frame.hideFrameComponent('maximizeButton');
    frame.showFrameComponent('restoreButton');
    frame.setMovable(false);
    frame.setResizable(false);

    //最大化そのものの処理
    me.renderFullScreen();

};

WindowEventHelper.prototype.doRestore = function (model) {
    var me = this;
    var frame = me.frame;

    var ri = frame.extra.__restore_info;

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

    frame.showFrameComponent('maximizeButton');
    frame.hideFrameComponent('restoreButton');

};

module.exports = WindowEventHelper;