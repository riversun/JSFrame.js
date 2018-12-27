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

var frame01 = jsFrame.createFrame(20, 40, 240, 150, getOriginalStyle_ex03_yosemite_style(jsFrame.createFrameAppearance()));

//(classNameForDefault, classNameForFocused)
frame01.setTitleBarClassName('ex03title_yosemite_style_default', 'ex03title_yosemite_style_focused');
frame01.setTitle('My Window 1');
frame01.getFrameView().style.backgroundColor = "rgba(255,255,255,0.9)";
frame01.getFrameView().innerHTML = '<div style="padding:10px;font-size:16px;color:dimgray;">Yosemite Style</div>';

frame01.show();

//Set callback for frameComponent
frame01.getFrameComponentElement('minimizeButton').onclick = function (e) {
    //[TIPS]
    //You know the object 'frame01' and 'this.parentObject' point the same object.
    //But using 'this.parentObject' like below is strongly recommended instead of using 'frame01'
    var frame = this.parentObject;
    frame.setSize(200, 125);
};
frame01.getFrameComponentElement('zoomButton').onclick = function (e) {
    var frame = this.parentObject;
    frame.setSize(240, 150);
};

if (true) {
    var frame02 = jsFrame.createFrame(300, 40, 240, 150, getOriginalStyle_ex03_yosemite_style(jsFrame.createFrameAppearance()));

//(classNameForDefault, classNameForFocused)
    frame02.setTitleBarClassName('ex03title_yosemite_style_default', 'ex03title_yosemite_style_focused');
    frame02.setTitle('My Window 2');
    frame02.getFrameView().style.backgroundColor = "rgba(255,255,255,0.9)";
    frame02.getFrameView().innerHTML = '<div style="padding:10px;font-size:16px;color:dimgray;">Yosemite Style</div>';
    frame02.show();

//Set callback for frameComponent
    frame02.getFrameComponentElement('minimizeButton').onclick = function (e) {
        var frame = this.parentObject;
        frame.setSize(200, 125);
    };
    frame02.getFrameComponentElement('zoomButton').onclick = function (e) {
        var frame = this.parentObject;
        frame.setSize(240, 150);
    };


    var frame03 = jsFrame.createFrame(20, 220, 520, 200, getOriginalStyle_ex03_yosemite_style(jsFrame.createFrameAppearance()));

//(classNameForDefault, classNameForFocused)
    frame03.setTitleBarClassName('ex03title_yosemite_style_default', 'ex03title_yosemite_style_focused');
    frame03.setTitle('My Window 3');
    frame03.getFrameView().style.backgroundColor = "rgba(255,255,255,0.9)";
    frame03.getFrameView().innerHTML = '<div style="padding:10px;font-size:16px;color:dimgray;">Yosemite Style</div>';
    frame03.show();

//Set callback for frameComponent
    frame03.getFrameComponentElement('minimizeButton').onclick = function (e) {
        var frame = this.parentObject;
        frame.setSize(200, 125);
    };
    frame03.getFrameComponentElement('zoomButton').onclick = function (e) {
        var frame = this.parentObject;
        frame.setSize(520, 200);
    };
}
//focus on frame01
frame01.requestFocus();
