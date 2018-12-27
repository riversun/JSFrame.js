/**
 * JSFrame Examples
 *
 * Copyright 2007- Tom Misawa, riversun.org@gmail.com
 * Copyright 2007- web2driver.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in the
 * Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 *  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
var jsFrame = new JSFrame();


function handleMaximizeWindow(e) {

    var frame = this.parentObject;
    var maximizeButtonEle = this;

    frame._window_restoreInfo = {};
    frame._window_restoreInfo.left = frame.getLeft();
    frame._window_restoreInfo.top = frame.getTop();
    frame._window_restoreInfo.width = frame.getWidth();
    frame._window_restoreInfo.height = frame.getHeight();

    maximizeButtonEle.style.visibility = 'hidden';

    var restoreButtonEle = frame.getFrameComponentElement('restoreButton');
    restoreButtonEle.style.visibility = 'visible';


    frame.setPosition(0, 0);
    frame.setSize(window.innerWidth, window.innerHeight);

    frame.setMovable(false);
    frame.setResizable(false);

}

function handleRestoreWindow(e) {

    var frame = this.parentObject;
    var restoreButtonEle = this;

    restoreButtonEle.style.visibility = 'hidden';

    var maximizeButton = frame.getFrameComponentElement('maximizeButton');
    maximizeButton.style.visibility = 'visible';

    frame.setMovable(true);
    frame.setResizable(true);

    frame.setPosition(frame._window_restoreInfo.left, frame._window_restoreInfo.top);
    frame.setSize(frame._window_restoreInfo.width, frame._window_restoreInfo.height);


}

var frame01 = jsFrame.createFrame(20, 40, 320, 240, getOriginalStyle_ex04_win10_style(jsFrame.createFrameAppearance()));

frame01.setTitle("My Window 1").getFrameView().innerHTML =
    '<div style="padding:5px;font-size:10px;color:dimgray;">Win64 Style<br/>Click Maximize button to maximize me.</div>';
frame01.setTitleBarClassName('ex04title_default','ex04title_focused');
frame01.show();

frame01.getFrameComponentElement('maximizeButton').onclick = handleMaximizeWindow;
frame01.getFrameComponentElement('restoreButton').onclick = handleRestoreWindow;

var frame02 = jsFrame.createFrame(360, 40, 320, 240, getOriginalStyle_ex04_win10_style(jsFrame.createFrameAppearance()));

frame02.setTitle("My Window 2").getFrameView().innerHTML =
    '<div style="padding:5px;font-size:10px;color:dimgray;">Win64 Style<br/>Click Maximize button to maximize me.</div>';
frame02.setTitleBarClassName('ex04title_default','ex04title_focused');
frame02.show();

frame02.getFrameComponentElement('maximizeButton').onclick = handleMaximizeWindow;
frame02.getFrameComponentElement('restoreButton').onclick = handleRestoreWindow;

frame01.requestFocus();
