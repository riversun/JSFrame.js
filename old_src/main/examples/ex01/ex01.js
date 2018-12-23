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

//frame1

//create appearance(kind of frame design)
var frmStyle1 = jsFrame.createFrameAppearance();

//create frame (left,top,width,height)
var frame01 = jsFrame.createFrame(20, 40, 320, 220, frmStyle1)
    .setTitle("My Window1")
    //if true,you can resize the window
    .setResizable(true)
    //if true,you can drag and move the window
    .setMovable(true);

var viewOfFrm01 = frame01.getFrameView();

viewOfFrm01.innerHTML = '<div style="padding:10px;font-size:12px;color:darkgray">Contents of window01</div>';

//show window
frame01.show();


//frame2
var frmStyle2 = jsFrame.createFrameAppearance();


var frame02 = jsFrame.createFrame(360, 40, 320, 220, frmStyle2)
    .setTitle("My Window2")
    .setResizable(true)
    .setMovable(true);

frame02.getFrameView().innerHTML =
    '<div style="padding:10px;font-size:12px;color:darkgray">Contents of window02</div>';
frame02.show();









