# Overview

###  What is '**JsFrame.js**' like?
It is an independent lightweight multi-window library.  
- You can create various popup windows.
- You can styling the appearance flexibly.

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
frame01.show();```
**DEMO**  
https://riversun.github.io/jsframe/examples/ex00/index.html  
[![ex00](https://riversun.github.io/jsframe/capture/ex00.png)][1]
[1]: https://riversun.github.io/jsframe/examples/ex00/index.html


# Examples
## Example:OS X style

**DEMO**  
https://riversun.github.io/jsframe/examples/ex03/index.html  

[![ex00](https://riversun.github.io/jsframe/capture/ex03.png)][1]
[1]: https://riversun.github.io/jsframe/examples/ex03/index.html

## Example:Win style

**DEMO**  
https://riversun.github.io/jsframe/examples/ex04/index.html  

[![ex00](https://riversun.github.io/jsframe/capture/ex04.png)][1]
[1]: https://riversun.github.io/jsframe/examples/ex04/index.html

### Example:Basic
**DEMO**  
https://riversun.github.io/jsframe/examples/ex01/index.html  

[![ex00](https://riversun.github.io/jsframe/capture/ex01.png)][1]
[1]: https://riversun.github.io/jsframe/examples/ex01/index.html

### Example:Window with Iframe contents
**DEMO**  
https://riversun.github.io/jsframe/examples/ex02/index.html  

[![ex00](https://riversun.github.io/jsframe/capture/ex02.png)][1]
[1]: https://riversun.github.io/jsframe/examples/ex02/index.html
