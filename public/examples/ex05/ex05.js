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


var frame01 = jsFrame.createFrame(20, 40, 320, 100, getOriginalStyle_ex05_01(jsFrame.createFrameAppearance()));
frame01.setTitleBarClassName('ex05title_default','ex05title_focused');

frame01.setTitle("").getFrameView().innerHTML =
    '<div style="overflow:hidden;padding:15px;color:gray;font-size: 10px;top: 40%; margin-top: -1em;">' +
    'Welcome to JsFrame.This is an example of JsFrame library.<br/>' +
    'It consists of a thin title bar and a closing button on the edge.<br/>' +
    '<a href="#" onclick="closeFrame01();return false;" style="color:#0077c9">Click to close</a></div>';

frame01.show();

//example for iframe
var frame02 = jsFrame.createFrame(360, 40, 320, 100, getOriginalStyle_ex05_02(jsFrame.createFrameAppearance().setUseIFrame(true)));
frame02.setTitle("");
frame02.setUrl('ex05_inner.html');
frame02.show();


frame01.requestFocus();

function closeFrame01() {
    frame01.closeFrame();
}

function closeFrame02() {
    frame02.closeFrame();
}
