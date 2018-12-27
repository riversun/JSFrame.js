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

//frame 1
var frmStyle1 = jsFrame.createFrameAppearance().setUseIFrame(true);//useIframe as content view;

//apply(override frame appearance) original style
frmStyle1 = getOriginalStyle01(frmStyle1);

var frame01 = jsFrame.createFrame(20, 40, 240, 150, frmStyle1);

//set title bar style specific class name of CSS([className for default],[className for focused])
frame01.setTitleBarClassName('ex02title', 'ex02title_focused');
frame01.setTitle("My Window1");


//frame 2
var frmStyle2 = jsFrame.createFrameAppearance().setUseIFrame(true);//useIframe as content view;
frmStyle2 = getOriginalStyle01(frmStyle2);

var frame02 = jsFrame.createFrame(300, 40, 240, 150, frmStyle2);

frame02.setTitleBarClassName('ex02title', 'ex02title_focused');
frame02.setTitle("My Window2");


//frame 3
var frmStyle3 = jsFrame.createFrameAppearance().setUseIFrame(true);//useIframe as content view;
frmStyle3 = getOriginalStyle01(frmStyle3);

var frame03 = jsFrame.createFrame(20, 230, 240, 150, frmStyle3);

frame03.setTitleBarClassName('ex02title', 'ex02title_focused');
frame03.setTitle("My Window3");

//frame 4
var frmStyle4 = jsFrame.createFrameAppearance().setUseIFrame(true);//useIframe as content view;
frmStyle4 = getOriginalStyle01(frmStyle4);

var frame04 = jsFrame.createFrame(300, 230, 240, 150, frmStyle4);

frame04.setTitleBarClassName('ex02title', 'ex02title_focused');
frame04.setTitle("My Window4");


var urls = [
    frame01.setUrl('ex02_inner01.html'),
    frame02.setUrl('ex02_inner02.html'),
    frame03.setUrl('ex02_inner03.html'),
    frame04.setUrl('ex02_inner04.html')
];

//Load urls.Wait until the content of iframe is loaded.
Promise.all(urls)
    .then(function () {
        //When All iframe pages loaded,show frame
        frame01.show();
        frame02.show();
        frame03.show();
        frame04.show();

        //focus on frame01
        frame01.requestFocus();
    });




