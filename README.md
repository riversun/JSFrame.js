# Overview

###  What is '**JsFrame.js**' like?
It is an independent and lightweight multi-window library for javascript.

- You can create various floating windows (called **frame**) and popup windows.
- You can create a [modal window](https://riversun.github.io/jsframe/examples/v150/modal.html).
- You can create a [toast](https://riversun.github.io/jsframe/examples/v150/toast.html).
- You can create [multi-window](https://riversun.github.io/jsframe/examples/v150/preset_win10.html) apps.

# DEMO
https://riversun.github.io/jsframe/examples/v150/preset_yosemite_auto.html
https://riversun.github.io/jsframe/examples/v150/preset_material.html
https://riversun.github.io/jsframe/examples/v150/preset_win10.html
https://riversun.github.io/jsframe/examples/v150/chatbot_ui.html


[![ex00](https://riversun.github.io/jsframe/capture/img_01_yosemite.png)](https://riversun.github.io/jsframe/examples/ex00/index.html)


It is licensed under [MIT](https://opensource.org/licenses/MIT) license.

# install

**using npm**

```shell
npm install jsframe.js
```

**use as below**

```html
<script src="https://riversun.github.io/jsframe/jsframe.js"></script>
```

# Quick Start
## Create window

Here's is basic example of JSFrame.js to show a simple window.

- Call the ```JSFrame.create``` method with initialization parameter to show a window
- Set html as a content of the window.Content could simply be some text or html.
- ```frame.show``` to show the window

```js
const jsFrame = new JSFrame();
//Create window
const frame = jsFrame.create({
    title: 'Window',
    left: 20, top: 20, width: 320, height: 220,
    movable: true,//Enable to be moved by mouse
    resizable: true,//Enable to be resized by mouse
    html: '<div id="my_element" style="padding:10px;font-size:12px;color:darkgray;">Contents of window</div>'
});
```

**DEMO**  
https://riversun.github.io/jsframe/examples/v150/simple.html

[![ex00](https://riversun.github.io/jsframe/capture/ex00.png)](https://riversun.github.io/jsframe/examples/v150/simple.html)

**Tips**
- You can also get DOM element from contents that you set as html.Call ```frame.$([selector])```.For example, you can get the element which id is 'my_element' by calling ```frame.$('#my_element')```

## Show specified URL as content of window

- Set ```url``` to the initialization parameter.
- The window contents will be shown as iframe.
- Set callback function which is called after loading a page as ```urlLoaded```

```js
const frame01 = jsFrame.create({
    title: 'Window1',
    left: 20, top: 20, width: 320, height: 160,
    url: 'iframe_content01.html',//URL to display in iframe
    //urlLoaded:Callback function called after loading iframe
    urlLoaded: (frame) => {
      //Called when the url finishes loading
    }
});
frame01.show();
```

**DEMO**  
https://riversun.github.io/jsframe/examples/v150/iframe.html

[![ifrmae](https://riversun.github.io/jsframe/capture/img_03_iframe.png)](https://riversun.github.io/jsframe/examples/v150/iframe.html)

**Tips**
- You can also get DOM element in the page shown as window's content area specified by url(iframe) ,You can call like ```frame.$('#my_element')```.


## Show window as a modal window

- Call ```frame.showModal``` to show the window as a modal window.
- By specifying like ```showModal(callbackFunc)``` you can receive a callback when the modal window is closed.

```js
const modalFrame = jsFrame.create({
      title: 'modal window',
      left: 0, top: 0, width: 320, height: 220,
      html: 'something'
  });
  //Show as a modal window
  modalFrame.showModal(_frame => {
  //Callback when modal window is closed.
  });
```

**DEMO**  
https://riversun.github.io/jsframe/examples/v150/modal.html

[![ifrmae](https://riversun.github.io/jsframe/capture/img_04_modal.png)](https://riversun.github.io/jsframe/examples/v150/modal.html)

## Styling

- JSFrame.js has the option where you can design the window appearance or apply style to certain elements and then apply styles to them as you want.
- You can specify style from preset or design it yourself.
- Set ```appearanceName``` to initialization parameter to select the window design called ```appearance```.
- Or if you want to design appearance from scratch, you can set ```appearance``` to initialization parameter.

**Style from preset**

```javascript
const frame01 = jsFrame.create({
    title: 'Yosemite style',
    left: 20, top: 20, width: 320, height: 220,
    appearanceName: 'yosemite',//Now preset is selectable from  'yosemite','redstone','popup'
    style: {
        backgroundColor: 'rgba(255,255,255,0.9)',
    },
    html: '<div style="padding:10px;">Preset is selected by preset name</div>'
}).show();
```

**DEMO**  
https://riversun.github.io/jsframe/examples/v150/styling.html

[![styling](https://riversun.github.io/jsframe/capture/img_05_styling.gif)](https://riversun.github.io/jsframe/examples/v150/styling.html)


## Event handling
- You can set an event handler (callback function) for the DOM element in the content specified by html or url.
- You can also set an event handler for buttons on the title bar.
- Call like ```frame.on(selector,'click',(_frame,event)=>{});``` to set click event handler functions.

```javascript
//Set click handler for DOM element specified as html or url in the initialization parameters.
frame.on('#bt_cancel', 'click', (_frame, evt) => {
});

//Event handler for buttons on the title bar.
frame.on('minimizeButton', 'click', (_frame, evt) => {
});

```  

**DEMO**  
https://riversun.github.io/jsframe/examples/v150/event_handling.html

[![styling](https://riversun.github.io/jsframe/capture/img_05_event.png)](https://riversun.github.io/jsframe/examples/v150/event_handling.html
)

## Show toast messages.

- A toast provides simple message about an operation in a small popup. Toasts automatically disappear after the time specified by ```duration```.
- Call ```JSFrame.showToast``` to show a toast.
- You can customize the appearance and something.

**Simple toast**

```js
const jsFrame = new JSFrame();
  jsFrame.showToast({
      html: 'Default toast'
  });
```

[![toast](https://riversun.github.io/jsframe/capture/toastd.gif)](https://riversun.github.io/jsframe/examples/v150/toast.html)

**Specify the position**

```js
jsFrame.showToast({
    align: 'center', html: 'Toast displayed in the center'
});
```

You can specify the position with ```align``` like below.

**align:'top'** =>Toast displayed at the top  
**align:'center'** =>Toast displayed in the center  
**align:'bottom'** =>Toast displayed at the bottom(default)  

**Customize toast**

```js
jsFrame.showToast(
    {
        width: 260,
        height: 100,
        duration: 2000,//Duration(millis)
        align: 'center',// alignment from 'top'/'center'/'bottom'(default)
        style: {
            borderRadius: '2px',
            backgroundColor: 'rgba(0,124,255,0.8)',
        },
        html: '<span style="color:white;">Custom toast</span>',
        closeButton: true,//Show close button
        closeButtonColor: 'white'//Color of close button
    });

```

**DEMO**  
https://riversun.github.io/jsframe/examples/v150/toast.html

[![toast](https://riversun.github.io/jsframe/capture/toastc.gif)](https://riversun.github.io/jsframe/examples/v150/toast.html)

## Window operation

**Close window**

```js
frame.closeFrame();
```

**Hide Window**

```js
frame.hide();
```

**Focus window (and pull up to the front)**

```js
frame.requestFocus();
```

**Get window by name**

```js
var frame = jsFrame.getWindowByName('my-window');
```

# Examples
All examples are included in the project. You can modify,customize example after cloning the project

```
git clone https://github.com/riversun/JSFrame.js.git
```

## Window initialization parameters

```js
const frame = jsFrame.create(
    {
        name: 'my-window-name',//Window name.Unique name is required.
        title: 'Window0',//Window title
        left: 20,//x coordinate of the upper left corner of the window
        top: 20,//y coordinate of the upper left corner of the window
        width: 320,//width of the window
        height: 220,//height of the window
        minWidth: 160,//The minimum width of the window
        minHeight: 100,//The minimum height of the window
        movable: true,//true:You can move the window with mouse
        resizable: true,//true:You can resize the window with mouse
        appearance: appearanceObj,//Appearance object
        appearanceName: 'yosemite',//Preset name of appearance(Not with 'appearance')
        style: {//Style of the content.Can be specified just like inline style attribute.
            backgroundColor: 'rgba(220,220,220,0.8)',//Ex.Background color of content(Opacity can be specified)
            overflow: 'auto',//Ex.What to do when the drawing extends beyond the content area
        },
        html: 'Contents',//HTML shown in the content(Not with 'url')
        url: 'content01.html',//The URL for contents.To be shown in iframe.
        urlLoaded: (frame) = {}//Callback function when url is finished loading.

    });
```    

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

### V1.00 Examples (available for latest version)


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

### All assets moved from mysvn
