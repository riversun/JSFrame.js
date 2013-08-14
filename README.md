# Overview

###  What is '**JsFrame.js**' like?
It is an independent lightweight multi-window library for javascript.
- Create various popup windows.
- Styling the appearance flexibly.


[Click to open DEMO](https://riversun.github.io/jsframe/examples/ex03/index.html)  

[![ex00](https://riversun.github.io/jsframe/capture/ex03.png)](https://riversun.github.io/jsframe/examples/ex03/index.html)


It is licensed under [MIT](https://opensource.org/licenses/MIT) license.


# Quick Start
## Show Popup Window
- Resizable
- Draggable (Movable)

**SCRIPT**
```js
var jsFrame = new org.riversun.JSFrame();

var frmStyle1 = jsFrame.createFrameAppearance();//create appearance(kind of frame design)

var frame01 = jsFrame.createFrame(20, 40, 320, 220, frmStyle1)//create frame (left,top,width,height)
        .setTitle("Example")//window title
        .setResizable(true)//if true,you can resize the window
        .setMovable(true)//if true,you can drag and move the window
        .setTitleBarClassName('style_default', 'style_focused');//set titlebar style

var viewOfFrm01 = frame01.getFrameView();

//set content
viewOfFrm01.innerHTML = '<div style="padding:10px;font-size:12px;color:darkgray;">Hello world!</div>';

//show window
frame01.show();
```

**DEMO**  
https://riversun.github.io/jsframe/examples/ex00/index.html  
[![ex00](https://riversun.github.io/jsframe/capture/ex00.png)](https://riversun.github.io/jsframe/examples/ex00/index.html)


# Examples
All examples are included in the project. You can modify,customize example after cloning the project

```
git clone https://github.com/riversun/JSFrame.js.git
```


## Example:Basic
**DEMO**  
https://riversun.github.io/jsframe/examples/ex01/index.html  

[![ex00](https://riversun.github.io/jsframe/capture/ex01.png)](https://riversun.github.io/jsframe/examples/ex01/index.html)

## Example:Window with Iframe contents
**DEMO**  
https://riversun.github.io/jsframe/examples/ex02/index.html  

[![ex00](https://riversun.github.io/jsframe/capture/ex02.png)](https://riversun.github.io/jsframe/examples/ex02/index.html)

## Example:OS X style

**DEMO**  
https://riversun.github.io/jsframe/examples/ex03/index.html  

[![ex00](https://riversun.github.io/jsframe/capture/ex03.png)](https://riversun.github.io/jsframe/examples/ex03/index.html)

## Example:Win style

**DEMO**  
https://riversun.github.io/jsframe/examples/ex04/index.html  

[![ex00](https://riversun.github.io/jsframe/capture/ex04.png)](https://riversun.github.io/jsframe/examples/ex04/index.html)


## Example:Various styles
**DEMO**  
https://riversun.github.io/jsframe/examples/ex05/index.html  

[![ex00](https://riversun.github.io/jsframe/capture/ex05.png)](https://riversun.github.io/jsframe/examples/ex05/index.html)


## Example:Animations #1
**DEMO**  
https://riversun.github.io/jsframe/examples/ex06/index.html  

[![ex00](https://riversun.github.io/jsframe/capture/ex06.png)](https://riversun.github.io/jsframe/examples/ex06/index.html)


# Classese and Methods/Members
### org.riversun.JSFrame class
#### JSFrame is a frame builder and management class.

|Methods|Details|
|---|---|
|**CIfFrame** createFrame(left, top, width, height, **CFrameAppearance**)|create **CIFFrame** instance.CIfFrame is a kind of 'window' called frame.|
|**CFrameAppearance** createFrameAppearance()|create **CFrameAppearance** instance.<br>**CFrameAppearance** is a class for frame appearance.You can modify frame's looking as you like.|

<hr>

### CIfFrame class
#### CIfFrame is like a window.It's draggable and movable.You can design it.

|Methods|Details|
|---|---|
|CIfFrame setTitle(str)|Set caption in the title bar|  
|CIfFrame setResizable(boolean)|Set whether the window can be resized|  
|CIfFrame setMovable(boolean)|Set whether the window can be moved|
|CIfFrame setTitleBarClassName(classNameForDefault, classNameForFocused)|Set title bar style class name|
|Object getFrameView()|Get window content element.<br>It's just a 'div' element.So you can handle it as a 'div' element.<br>ex)<br>**frame.getFrameView().innerHTML='xxxx';**|
|Promise setUrl(url)|Open a page specified as *url* in the IFrame mode.<br>It returns Promise.If you want to execute something at the timing of opening url,use 'then' .<br>ex)<br>**frame.setUrl('http://something').then(function(){frame.show();});**|
|CIfFrame show()|Show frame|
|CIfFrame requestFocus()|Requests that this frame gets the focus.<br>Focus and the window comes to the forefront|
|CIfFrame setSize(width,height)|set size of frame|
|CIfFrame setPosition(x,y,anchor)|anchor is optional.<br>Default anchor is 'LEFT_TOP'<br>You can set followings for anchor.<br>'LEFT_TOP',<br>'CENTER_TOP',<br>'RIGHT_TOP',<br>'LEFT_CENTER',<br>'CENTER_CENTER',<br>'RIGHT_CENTER',<br>'LEFT_BOTTOM',<br>'CENTER_BOTTOM',<br>'RIGHT_BOTTOM'|

<hr>


### CFrameAppearance class
#### CFrameAppearance is a class for frame appearance.You can modify frame's looking as you like.

|Methods|Details|
|---|---|
|CFrameAppearance setUseIFrame(boolean)|If 'true' ,You can set CIfFrame 'IFrame mode' and you can use CIfFrame#setUrl method for opening specified url.|
|void onInitialize()|Since this callback method is called at frame initialization,Initialization processing such as adding frameComponent should be written here.|

|Members|Details|
|---|---|
|showTitleBar|true or false|
|showCloseButton|true or false<br>|
|titleBarCaptionFontSize|ex)'12px'|
|titleBarCaptionFontWeight|ex)'bold'|
|titleBarHeight|ex)'24px'|
|titleBarCaptionLeftMargin|ex)'10px'|
|titleBarColorDefault|Color for not focused state.<br>ex)'#dddddd'|
|titleBarColorFocused|Color for focused state.<br>ex)'white'|
|titleBarCaptionColorDefault|Color for not focused state.<br>ex)'black'|
|titleBarCaptionColorFocused|Color for focused state.<br>ex)'red'|
|titleBarBorderBottomDefault|Style for bottom of the title bar.<br>ex)'1px solid rgba(0,0,0,0.2)'|
|titleBarBorderBottomFocused|If null,'titleBarBorderBottomDefault' will be applied.|
|frameBorderRadius|Corner radius of the window.<br>ex)'6px'|
|frameBorderWidthDefault|Width of border line in the not focused state.<br>ex)'1px'|
|frameBorderWidthFocused|Width of border line in the focused state.<br>ex)'1px'|
|frameBorderColorDefault|Color of border line in the not focused state.<br>ex)'rgba(1, 1, 1, 0.2)'|
|frameBorderColorFocused|Color of border line in the focused state.<br>ex)'rgba(1, 1, 1, 0.2)'|
|frameBorderStyle|Border line style<br>ex)solid|
|frameBoxShadow|Shadow style of the frame<br>ex) '5px 5px 10px  rgba(0, 0, 0, 0.3)'|
|frameBackgroundColor|Background color of the frame<br>ex)'white'|

<hr>


### All assets moved from mysvn
