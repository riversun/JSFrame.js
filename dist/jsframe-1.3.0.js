(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/jsframe.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/jsframe.js":
/*!************************!*\
  !*** ./src/jsframe.js ***!
  \************************/
/*! exports provided: JSFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSFrame", function() { return JSFrame; });
/**
 * JSFrame ver.1.2.0 - A javascript floating window library
 *
 * Copyright 2007-2017 Tom Misawa, riversun.org@gmail.com
 * Copyright 2007-2017 web2driver.com
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




var DEF = {},
    CALIGN = {};

CALIGN.LEFT_TOP = 'LEFT_TOP';
CALIGN.HCENTER_TOP = 'CENTER_TOP';
CALIGN.RIGHT_TOP = 'RIGHT_TOP';
CALIGN.LEFT_VCENTER = 'LEFT_CENTER';
CALIGN.HCENTER_VCENTER = 'CENTER_CENTER';
CALIGN.CENTER = CALIGN.HCENTER_VCENTER;
CALIGN.RIGHT_VCENTER = 'RIGHT_CENTER';
CALIGN.LEFT_BOTTOM = 'LEFT_BOTTOM';
CALIGN.HCENTER_BOTTOM = 'CENTER_BOTTOM';
CALIGN.RIGHT_BOTTOM = 'RIGHT_BOTTOM';


/**
 * CFrameAppearance class<br>
 * Appearance Model Class for Frame
 *
 */
function CFrameAppearance() {

    var me = this;

    this.showTitleBar = true;
    this.showCloseButton = true;
    this.titleBarCaption = '';
    this.titleBarCaptionFontSize = '12px';
    this.titleBarCaptionFontWeight = 'bold';
    this.titleBarHeight = '24px';

    this.useIframe = false;
    this.useFrame = true;

    this.setUseIFrame = function (value) {
        me.useIframe = value;
        me.useFrame = !value;
        return me;
    };


    /**
     * The position from the left side of the caption. If this value is null, caption will be centered.
     */
    this.titleBarCaptionLeftMargin = '5px';

    this.titleBarColorDefault = 'lightgray';
    this.titleBarColorFocused = '#d3e1ee';
    this.titleBarCaptionColorDefault = '';
    this.titleBarCaptionColorFocused = '';

    this.titleBarBorderBottomDefault = '1px solid rgba(0,0,0,0.2)';
    this.titleBarBorderBottomFocused = null;

    this.frameBorderRadius = '6px';

    this.frameBorderWidthDefault = '1px';
    this.frameBorderWidthFocused = this.frameBorderWidthDefault;

    this.frameBorderColorDefault = 'rgba(1, 1, 1, 0.2)';
    this.frameBorderColorFocused = this.frameBorderColorDefault;

    this.frameBorderStyle = 'solid';
    this.frameBoxShadow = '2px 3px 16px rgba(0,0,0,.6)';
    this.frameBackgroundColor = 'transparent';

    this._partsBuilder = null;


    this.frameComponents = [];

    this.frameHeightAdjust = 1;

    this.getFrameInnerBorderRadius = function (ref, hasFocus) {

        if (!ref) {
            return;
        }
        if (hasFocus) {
            return (parseInt(ref.frameBorderRadius, 10) - parseInt(ref.frameBorderWidthFocused, 10)) + 'px';
        }
        return (parseInt(ref.frameBorderRadius, 10) - parseInt(ref.frameBorderWidthDefault, 10)) + 'px';
    };


    this.onInitialize = function () {

        //Add close button if needed
        if (me.showCloseButton) {
            var partsBuilder = me.getPartsBuilder(),
                crossMark0 = '\u274c',
                crossMark1 = '\u2716',
                crossMark2 = '\u274e';


            var btnAppearance = partsBuilder.buildTextButtonAppearance();

            btnAppearance.size = 14;
            btnAppearance.captionShiftYpx = 0;
            btnAppearance.captionFontRatio = 1.0;
            btnAppearance.borderRadius = 2;
            btnAppearance.backgroundColorPressed = 'transparent';
            btnAppearance.backgroundColorDefault = 'transparent';
            btnAppearance.caption = crossMark1;

            btnAppearance.captionColorDefault = 'gray';
            btnAppearance.captionColorFocused = 'gray';
            btnAppearance.captionColorHovered = 'silver';
            btnAppearance.captionColorPressed = 'black';

            btnAppearance.borderWidth = 0;
            btnAppearance.borderColorDefault = '#aaaaaa';
            btnAppearance.borderStyle = 'solid';

            var closeBtnEle = partsBuilder.buildTextButton(btnAppearance);
            var eleLeft = -10;
            var eleTop = -20;
            var eleAlign = 'RIGHT_TOP';

            //closeButton is a special name
            var frameComponent = me.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);
        }
    };

}


CFrameAppearance.prototype.getPartsBuilder = function () {
    var me = this;
    if (me._partsBuilder === null) {
        me._partsBuilder = new CDomPartsBuilder();
    }
    return me._partsBuilder;
};
CFrameAppearance.prototype.initialize = function () {
    var me = this;
    me.onInitialize();
};

/**
 *  Add FrameComponent into frame
 *  FrameComponent is attached to Frame and it moves with Frame.
 *
 * @param id
 * @param myDomElement DOM element.
 * @param x  Relative x coodinate from the snap position specified by alignment
 * @param y  Relative y coodinate from the snap position specified by alignment
 * @param align 'LEFT_TOP' 'CENTER_TOP' 'RIGHT_TOP' 'LEFT_CENTER' 'CENTER_CENTER' 'RIGHT_CENTER' 'LEFT_BOTTOM' 'CENTER_BOTTOM' 'RIGHT_BOTTOM'
 * @returns {CFrameComponent}
 *
 */
CFrameAppearance.prototype.addFrameComponent = function (id, myDomElement, x, y, align) {

    //(id, frame, htmlElement, x, y, align)
    var frameComponent = new CFrameComponent(id, myDomElement, x, y, align);

    if (myDomElement._onTakeFocus && myDomElement._onReleaseFocus) {
        //if this DOM element has special method for focus
        //set focus callback
        frameComponent.setFocusCallback(myDomElement._onTakeFocus, myDomElement._onReleaseFocus);
    }

    this.frameComponents.push(frameComponent);

    return frameComponent;
};

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 *  End of CFrameAppearance class
 */

/**
 * Inheritance function
 *
 * @param subClass
 * @param baseClass
 */
function inherit(subClass, baseClass) {

    function clazz() {
    }

    clazz.prototype = baseClass.prototype;
    subClass.prototype = new clazz();

    subClass.prototype.constructor = subClass;
    subClass.superConstructor = baseClass;
    subClass.superClass = baseClass.prototype;

}

/**
 * End of inheritance function
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * DEFINITIONS
 */
DEF.CBEAN = {};
DEF.CBEAN.HTML_ELEMENT = 'span';
DEF.CBEAN.HTML_ELEMENT_ID_PREFIX = 'htmlElement_';
DEF.CBEAN.TYPE_NAME = 'bean';


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


/**
 * CBeanFrame Class<p>
 * The smallest window. It is responsible for basic processing only.
 *
 * @param beanId id of this small window
 * @param left
 * @param top
 * @param width
 * @param height
 * @param zindex
 * @constructor
 */
function CBeanFrame(beanId, left, top, width, height, zindex) {

    var me = this;

    //fields
    me.id = beanId;
    me.property = {};

    me.parentCanvas = null;
    me.htmlElement = null;


    //initialize
    me.htmlElement = document.createElement(DEF.CBEAN.HTML_ELEMENT);
    me.htmlElement.id = DEF.CBEAN.HTML_ELEMENT_ID_PREFIX + beanId;
    me.htmlElement.style.position = 'absolute';
    me.htmlElement.style.left = parseInt(left, 10) + 'px';
    me.htmlElement.style.top = parseInt(top, 10) + 'px';
    me.htmlElement.style.width = parseInt(width, 10) + 'px';
    me.htmlElement.style.height = parseInt(height, 10) + 'px';


    //Zindex may become 'undefined' in some cases.
    if (zindex !== null) {
        me.htmlElement.style.zIndex = zindex;
    }
    me.htmlElement.style.borderColor = '#000000';

    //If I set a larger font size, width and height of window will be affected....
    me.htmlElement.style.fontSize = '1px';

    //Refer parents to each other.(sougo-sansho)
    me.htmlElement.parent = me;

    //Note that 'mouseDown' is mapped to 'onmousedown' of htmlElement,
    //so when 'onmouseDown' fires ,the 'this' will indicate 'htmlElement'
    me.htmlElement.onmousedown = me.onmouseDown;

    //Type name of this class
    me.htmlElement.typeName = DEF.CBEAN.TYPE_NAME;

    //Special field indicating usage of this class
    me.htmlElement.usage = 'nothing';

    //Whether it can move outside the frame(waku).
    me.htmlElement.isRangeLimited = false;

    //Movement magnification in the X direction
    //(If it is 0, it can not move in the X direction.)
    me.htmlElement.argX = 1;

    //Movement magnification in Y direction
    // (If it is 0, it can not move in Y direction)
    me.htmlElement.argY = 1;
    me.externalAreaClickedListener = null;
}

/**
 * Set whether the frame can be moved while dragging with the mouse
 * @param enabled
 */
CBeanFrame.prototype.setMovable = function (enabled) {
    var me = this;

    if (enabled) {
        me.htmlElement.argX = 1;
        me.htmlElement.argY = 1;
    } else {
        me.htmlElement.argX = 0;
        me.htmlElement.argY = 0;
    }
    return me;
};


CBeanFrame.prototype.setParentCanvas = function (parentCanvas) {
    var me = this;
    me.parentCanvas = parentCanvas;
    me.htmlElement.parentCanvas = me.parentCanvas;
};
CBeanFrame.prototype.setOnExternalAreaClickedListener = function (listener) {
    var me = this;
    me.externalAreaClickedListener = listener;
};
CBeanFrame.prototype.onBodyClicked = function (e) {

    var me = this;
    var clickX = e.pageX;
    var clickY = e.pageY;

    var left = parseInt(me.htmlElement.style.left);
    var top = parseInt(me.htmlElement.style.top);
    var width = parseInt(me.htmlElement.style.width);
    var height = parseInt(me.htmlElement.style.height);

    if (left < clickX && clickX < (left + width) && top < clickY && (clickY < top + height)) {
        //- clicked internal area of this frame
    } else {
        //- clicked external area of this frame
        if (me.externalAreaClickedListener) {
            me.externalAreaClickedListener();
        }

    }


};
CBeanFrame.prototype.onmouseDown = function (e) {

    //This 'this' means a htmlElement
    var refHtmlElement = this;


    //Retrieve CBeanFrame
    var refCBeanFrame = refHtmlElement.parent;

    if (e.button == 0) {
        refHtmlElement.parentCanvas.currentObject = refHtmlElement;

        //Bring the current bean to the top
        refHtmlElement.parentCanvas.pullUp(refCBeanFrame.id);

    }
    else if (e.button == 2) {
        return false;
    }

    refHtmlElement.parentCanvas.offsetX = e.pageX - parseInt(refHtmlElement.parentCanvas.currentObject.style.left, 10);
    refHtmlElement.parentCanvas.offsetY = e.pageY - parseInt(refHtmlElement.parentCanvas.currentObject.style.top, 10);


    return false;
};
/**
 * End of CBeanFrame Class <p>
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


DEF.CANVAS = {};
DEF.CANVAS.HTML_ELEMENT = 'div';
DEF.CANVAS.WIDTH_ADJUST_20180722 = 2;
DEF.CANVAS.HEIGHT_ADJUST_20180722 = 3;

/**
 * CCanvas class
 * A canvas is a place where windows are arranged, where you can drag and move freely.
 *
 * @param parentElement
 * @param canvasId
 * @param left
 * @param top
 * @param width
 * @param height
 * @constructor
 */
function CCanvas(parentElement, canvasId, left, top, width, height) {

    //Event data to be transmitted
    function EventData() {
        this.x = 0;
        this.y = 0;
        this.screenX = 0;
        this.screenY = 0;
        this.deltaX = 0;
        this.deltaY = 0;
        this.isMoved = false;
        this.targetTypeName = null;
        this.targetUsage = null;
        this.targetObject = null;
    }

    var me = this;

    me.currentObject = null;
    me.onTopObject = null;
    me.offsetX = 0;
    me.offsetY = 0;


    //Object which generated 'mouseDown' event at the very beginning(ichiban-saisho)
    me.mouseDownSource = null;

    me.id = canvasId;
    me.canvasElement = null;
    me.parentElement = parentElement;
    me.beanList = new Array();

    //20180724[start]
    me.beanIdName = {};//key:beanId value:beanName
    me.beanNameId = {};//key:beanName value:beanId
    //20180724[end]

    me.eventData = new EventData();


    me.baseZIndex = 0;
    me.setBaseZIndex = function (baseZIndex) {
        me.baseZIndex = baseZIndex;
    };
    me.getBaseZIndex = function () {
        return me.baseZIndex;
    };


    me.canvasElement = document.createElement(DEF.CANVAS.HTML_ELEMENT);
    //Added 2018/7/16
    me.canvasElement.style.zIndex = 2000;
    me.canvasElement.id = me.id;
    me.canvasElement.style.boxSizing = "border-box";
    me.canvasElement.style.position = 'absolute';
    me.canvasElement.style.left = parseInt(left) + 'px';
    me.canvasElement.style.top = parseInt(top) + 'px';
    //20180722(画面の下に透明部分ができてしまうので、調整値をいれた)
    me.canvasElement.style.width = (parseInt(width) + DEF.CANVAS.WIDTH_ADJUST_20180722) + 'px';
    me.canvasElement.style.height = (parseInt(height) + DEF.CANVAS.HEIGHT_ADJUST_20180722) + 'px';
    me.canvasElement.style.backgroundColor = 'transparent';
    me.canvasElement.style.borderStyle = 'none';
    me.canvasElement.style.margin = '0px';
    me.canvasElement.style.borderWidth = '0px';
    me.canvasElement.style.borderColor = "transparent";

    //Add the Canvas's html element into the canvas's parent html element
    me.parentElement.appendChild(me.canvasElement);

}


CCanvas.prototype.mouseMove = function (e) {

    var me = this;


    if (me.currentObject) {

        //eventData.isMoved=true;The presence of event data means that it has moved.
        me.eventData.targetTypeName = me.currentObject.typeName;
        me.eventData.targetUsage = me.currentObject.usage;
        me.eventData.targetObject = me.currentObject;

        //Even when obj is not being dragged, mouse coordinates are used here because they are needed.
        var newObjLeftPx = e.pageX - me.offsetX;
        var newObjTopPx = e.pageY - me.offsetY;

        var absoluteMouseX = e.pageX;
        var absoluteMouseY = e.pageY;


        //Take the snapshot before updating the location.
        var oldObjLeftPx = me.currentObject.style.left;
        var oldObjTopPx = me.currentObject.style.top;

        //When the mouse cursor goes out of range,
        //the addition in the X direction and Y direction (delta X, delta Y) is set to zero.
        //this.left=Cavas's left side edge, this.top=Canvas's top side edge.
        var tmpLeft = parseInt(newObjLeftPx, 10);
        var tmpTop = parseInt(newObjTopPx, 10);

        var tmpRight = tmpLeft + parseInt(me.currentObject.style.width, 10);
        var tmpBottom = tmpTop + parseInt(me.currentObject.style.height, 10);

        var styleWidth = parseInt(me.canvasElement.style.width, 10);
        var styleHeight = parseInt(me.canvasElement.style.height, 10);

        var deltaX = 0;
        var deltaY = 0;

        if (me.currentObject.isRangeLimited == true &&
            (tmpLeft <= 0 || tmpRight > styleWidth || tmpTop <= 0 || tmpBottom > styleHeight)
        ) {
            deltaX = 0;
            deltaY = 0;
        }
        else {
            deltaX = (parseInt(newObjLeftPx, 10) - parseInt(oldObjLeftPx, 10));
            deltaY = (parseInt(newObjTopPx, 10) - parseInt(oldObjTopPx, 10));
            me.currentObject.style.left = (parseInt(me.currentObject.style.left) + deltaX * me.currentObject.argX) + 'px';
            me.currentObject.style.top = (parseInt(me.currentObject.style.top) + deltaY * me.currentObject.argY) + 'px';
        }

        me.eventData.deltaX = deltaX;
        me.eventData.deltaY = deltaY;

        return me.eventData;

    }
    //Returns null if none of the objects are clicked and the only mouse just moves.
    return null;
};


CCanvas.prototype.mouseUp = function (e) {
    var me = this;

    me.currentObject = null;
    me.mouseDownSource = null;
};


//Bring the object in front
CCanvas.prototype.pullUp = function (targetBeanId) {

    var me = this;

    var tmpBeanArray = [];

    var beanList = me.beanList;

    for (var i in   beanList) {
        tmpBeanArray.push(beanList[i]);
    }

    //Bring the target object in front and set zindex to 1.
    var targetBean = beanList[targetBeanId];

    me.pullUpSort(targetBean, tmpBeanArray, me.baseZIndex);


    //Remember the top object
    me.onTopObject = targetBean;


};

//Calculate the front / back information of the window accurately.
CCanvas.prototype.pullUpSort = function (pullupObject, objectArray, baseIndex) {
    var me = this;

    //Increase the index number of the target object
    pullupObject.htmlElement.style.zIndex = objectArray.length + baseIndex;

    //sort by index
    objectArray.sort(function (b, a) {
        return -parseInt(b.htmlElement.style.zIndex, 10) + parseInt(a.htmlElement.style.zIndex, 10);
    });

    //Redefine number of the index
    for (var i in objectArray) {
        objectArray[i].htmlElement.style.zIndex = (objectArray.length - 1) - i + baseIndex;
    }

};


/**
 * remove the bean object
 * @param beanId
 */
CCanvas.prototype.removeBean = function (beanId) {

    var me = this;

    //Retrieve the target beanFrame
    var beanList = me.beanList;
    var targetBean = beanList[beanId];

    //Remove bean's htmlElement from canvasElement
    me.canvasElement.removeChild(targetBean.htmlElement);

    //Delete the bean object in the associative array.
    delete beanList[beanId];


};


/**
 * Add bean into this canvas
 * @param bean
 */
CCanvas.prototype.addBean = function (bean) {

    var me = this;

    var beanList = me.beanList;

    //20180724[start]
    var beanIdName = me.beanIdName;//key:beanId value:beanName
    var beanNameId = me.beanNameId; //key:beanName value:beanId
    //20180724[end]

    beanList[bean.id] = bean;

    //20180724[start]
    if (bean.property.name) {
        beanNameId[bean.property.name] = bean.id;
        beanIdName[bean.id] = bean.property.name;
    }
    //20180724[end]


    //In this usage case the 'length' property is invalid ..
    var num = 0;

    for (var j in beanList) {
        num++;
    }

    //Set zIndex so that what you add later will come up.
    bean.htmlElement.style.zIndex = num + me.baseZIndex;

    //On the bean side, specify the parent of the bean to me.
    bean.setParentCanvas(me);


    this.canvasElement.appendChild(bean.htmlElement);
};
/**
 * End of canvas class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


DEF.CFRAME = {};
DEF.CFRAME.CANVAS_ELEMENT_BGCOLOR = 'transparent';
DEF.CFRAME.TITLE_BAR_CLASS_DEFAULT = 'jsFrame.titlebar';
DEF.CFRAME.TITLE_BAR_CLASS_FOCUSED = 'jsFrame.titlebar.focused';

inherit(CFrame, CBeanFrame);


/**
 * CFrame class
 * <p>
 * This class represents a window whose size can be changed ,
 * can move freely on the screen,
 * can have a title bar,
 *
 * @param windowId
 * @param w_left
 * @param w_top
 * @param w_width
 * @param w_height
 * @param zindex
 * @param w_border_width
 * @param appearance
 * @constructor
 */
function CFrame(windowId, w_left, w_top, w_width, w_height, zindex, w_border_width, appearance) {

    var me = this;

    //call constructor of superclass
    CFrame.superConstructor.call(this, windowId, w_left, w_top, w_width, w_height, zindex);


    me.anchor = CALIGN.LEFT_TOP;

    me.showTitleBar = appearance.showTitleBar;

    me.canvasNetHeight = null;
    me.canvasNetWidth = null;
    me.frameHeightAdjust = appearance.frameHeightAdjust;

    me.frameComponentMap = {};


    //initialize the field
    me.canvas = null;

    //canvas id
    me.myCanvasId = null;

    //Buttons to be placed on the screen (positioning same as the close button)
    me.floatingButton = null;

    me.titleBarClassNameDefault = DEF.CFRAME.TITLE_BAR_CLASS_DEFAULT;
    me.titleBarClassNameFocused = DEF.CFRAME.TITLE_BAR_CLASS_FOCUSED;


    //height of titlebar
    me.titleBarHeight = appearance.titleBarHeight;

    me.titleBarCaption = appearance.titleBarCaption;
    me.titleBarCaptionLeftMargin = appearance.titleBarCaptionLeftMargin;
    me.titleBarCaptionFontSize = appearance.titleBarCaptionFontSize;
    me.titleBarCaptionFontWeight = appearance.titleBarCaptionFontWeight;
    me.titleBarBorderBottomDefault = appearance.titleBarBorderBottomDefault;
    me.titleBarBorderBottomFocused = appearance.titleBarBorderBottomFocused;
    //Title bar width adjustment value
    me.titleAdjustWidth = 2;

    me.windowId = windowId;

    me.exBorderWidth = 0;


    me.myCanvasId = windowId + '_canvas';


    //img element for icon placed on the left-top
    var appIcon = document.createElement('img');
    //		appIcon.src='img/ico_app_file16.gif';

    //url of icon image
    appIcon.src = '';
    appIcon.style.position = 'absolute';
    appIcon.style.left = '2px';
    appIcon.style.top = '2px';
    appIcon.style.width = '16px';
    appIcon.style.height = '16px';
    appIcon.style.visibility = 'hidden';


    //The title bar must be on the front of the canvas.
    me.titleBar = document.createElement('div');

    me.titleBar.className = 'jsframetitlebar';

    if (me.showTitleBar) {

        me.titleBar.id = windowId + '_title';
        me.titleBar.style.position = 'absolute';
        me.titleBar.style.boxSizing = 'border-box';
        me.titleBar.style.top = '0px';
        me.titleBar.style.left = '0px';
        //20180722
        //20180722(画面の右と下に透明部分ができてしまうので、調整値をいれた)
        me.titleBar.style.width = (w_width - me.titleAdjustWidth + DEF.CANVAS.WIDTH_ADJUST_20180722) + 'px';
        me.titleBar.style.userSelect = 'none';


        if (me.titleBarHeight) {

            var titleBarAdjust = 0;

            if (me.titleBarBorderBottomDefault) {
                //titleBarAdjust = -1;
                //タイトルバーがずれてしまう
                titleBarAdjust = 0;
            }


            me.titleBar.style.height = (parseInt(me.titleBarHeight, 10) + 0) + 'px';
        }

        me.titleBar.style.backgroundColor = me.titleBarColorDefault;
        me.titleBar.style.zIndex = 0;

        me.titleBar.style.color = me.titleBarCaptionColorDefault;
        me.titleBar.style.fontSize = me.titleBarCaptionFontSize;
        me.titleBar.style.fontWeight = me.titleBarCaptionFontWeight;
        me.titleBar.style.textShadow = "0 1px 0 rgba(255,255,255,.7)";
        me.titleBar.style.textAlign = 'center';
        me.titleBar.style.lineHeight = me.titleBar.style.height;


        me.titleBar.style.borderBottom = me.titleBarBorderBottomDefault;
        //me.titleBar.style.boxShadow = '0 1px 0 rgba(255,255,255,0.5)';


        //Set not to display overflow character string
        me.titleBar.style.overflow = 'hidden';


        var titleBarText = document.createTextNode('');

        //'span' to store text
        var titleBarTextSpan = document.createElement('span');

        titleBarTextSpan.id = me.id + '_titleBarText';
        if (me.titleBarCaptionLeftMargin != null) {
            titleBarTextSpan.style.position = 'absolute';
            titleBarTextSpan.style.left = parseInt(me.titleBarCaptionLeftMargin, 10) + 'px';
        } else {
            titleBarTextSpan.style.position = 'absolute';
            titleBarTextSpan.style.left = '0px';
            titleBarTextSpan.style.right = '0px';
        }
        titleBarTextSpan.style.top = '0px';
        titleBarTextSpan.appendChild(titleBarText);
        me.titleBar.appendChild(titleBarTextSpan);

        //Discontinue appicon(20061011)
        //me.titleBar.appendChild(appIcon);
    }

    me.htmlElement.appendChild(me.titleBar);


    //Set Canvas throughout the window

    //parseInt(me.titleBar.style.height);//me.titleBarHeight);
    var canvasMoreHeight = parseInt(me.titleBarHeight, 10) - titleBarAdjust;
    var canvasMoreSpacing = parseInt(me.titleAdjustWidth, 10);

    if (me.showTitleBar) {


    } else {
        canvasMoreHeight = 0;
        canvasMoreSpacing = 0;
        titleBarAdjust = 0;
    }


    me.canvasNetWidth = w_width - canvasMoreSpacing;
    me.canvasNetHeight = w_height - canvasMoreHeight - canvasMoreSpacing - 1 - titleBarAdjust + me.frameHeightAdjust;


    //Change the style of htmlElement of CFrame (CBean).
    me.htmlElement.style.cursor = 'move';


    //Create a canvas
    me.canvas = new CCanvas(me.htmlElement, me.myCanvasId, 0, canvasMoreHeight, w_width - canvasMoreSpacing, w_height - canvasMoreHeight - canvasMoreSpacing);

    me.canvas.canvasElement.style.backgroundColor = DEF.CFRAME.CANVAS_ELEMENT_BGCOLOR;
    me.canvas.canvasElement.style.cursor = 'default';

    //Handling the omousedown event that occurred in Canvas which is a child element of CFrame
    me.canvas.canvasElement.onmousedown = me.canvasMouseDown;

    //Set the canvas as a reference to the parent of the canvas html element canvasElement.
    me.canvas.canvasElement.parentCFrame = me;


    var tmpCanvasWidth = parseInt(me.canvas.canvasElement.style.width, 10);
    var tmpCanvasHeight = parseInt(me.canvas.canvasElement.style.height, 10);

    var markerWidth = 16;
    var markerHeight = 16;

    //Offset from marker edge
    var edgeMargin = 16;

    //Lower right(R-D)
    var markerRD = new CMarkerWindow(
        me.myCanvasId + '_RD',
        tmpCanvasWidth - markerWidth + edgeMargin,
        tmpCanvasHeight - markerHeight + edgeMargin,
        markerWidth,
        markerHeight,
        0,
        'RD');

    markerRD.htmlElement.style.cursor = 'se-resize';//nw-resize';

    //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
    // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
    markerRD.htmlElement.argX = 0;
    markerRD.htmlElement.argY = 0;


    //Bottom(D-D)
    var markerDD = new CMarkerWindow(
        me.myCanvasId + '_DD',
        0,
        tmpCanvasHeight - markerHeight + edgeMargin,
        tmpCanvasWidth - markerWidth + edgeMargin,
        markerHeight,
        0,
        'DD');

    markerDD.htmlElement.style.cursor = 'n-resize';

    //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
    // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
    markerDD.htmlElement.argX = 0;
    markerDD.htmlElement.argY = 0;

    //Right(R-R)
    var markerRR = new CMarkerWindow(
        me.myCanvasId + '_RR',
        tmpCanvasWidth - markerWidth + edgeMargin,
        0,
        markerWidth,
        tmpCanvasHeight - markerHeight + edgeMargin,
        0,
        'RR');

    markerRR.htmlElement.style.cursor = 'w-resize';

    //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
    // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
    markerRR.htmlElement.argY = 0;
    markerRR.htmlElement.argX = 0;

    //Add size change marker to canvas.
    me.canvas.addBean(markerRD);
    me.canvas.addBean(markerDD);
    me.canvas.addBean(markerRR);

    //Method to remove size change marker (can not resize)
    me.removeMarkers = function () {
        me.canvas.removeBean(markerRD.id);
        me.canvas.removeBean(markerDD.id);
        me.canvas.removeBean(markerRR.id);
        me.htmlElement.style.cursor = 'default';
    };


    me.removeMarkers2 = function () {
        me.canvas.removeBean(markerRD.id);
        me.canvas.removeBean(markerDD.id);
        me.canvas.removeBean(markerRR.id);
    };


    //add frameComponents[begin]
    for (var idx in appearance.frameComponents) {

        var frameComponent = appearance.frameComponents[idx];

        frameComponent.setFrame(me);

        //if frameComponent has special name 'closeButton', it will act as a close button.
        if ('closeButton' == frameComponent.id) {
            frameComponent.htmlElement.onclick = me.close;
        }

        me.addFrameComponent(frameComponent);
    }
    //add frameComponents[end]

    //override the field
    me.htmlElement.style.backgroundColor = 'transparent';

    me.htmlElement.oncontextmenu = this.contextMenu;


    //The policy of Border drawing seems to be different between IE and FF.
    var caribVal = 0;


    me.caribValue = caribVal;

    me.htmlElement.style.borderWidth = me.exBorderWidth + 'px';

    me.htmlElement.style.width = (parseInt(me.htmlElement.style.width, 10) - caribVal) + 'px';
    me.htmlElement.style.height = (parseInt(me.htmlElement.style.height, 10) - caribVal + 1) + 'px';
    me.htmlElement.typeName = 'cwindow';
    me.htmlElement.overflow = 'auto';
    me.htmlElement.style.boxSizing = 'content-box';


    if (appearance.frameBorderStyle) {
        me.htmlElement.style.borderStyle = appearance.frameBorderStyle;
    }

    if (appearance.frameBoxShadow) {
        me.htmlElement.style.boxShadow = appearance.frameBoxShadow;
    }

    //TODO deprecation(because CIfFrame is extended this operation)
    if (parseInt(appearance.frameBorderWidthDefault, 10) > 0) {
        me.htmlElement.style.borderWidth = appearance.frameBorderWidthDefault;
        me.htmlElement.style.borderColor = appearance.frameBorderColorDefault;

    }
    if (parseInt(appearance.frameBorderRadius, 10) > 0) {
        me.htmlElement.style.borderRadius = appearance.frameBorderRadius;
    }

    me.onCloseFrameListener = null;

}


CFrame.prototype.setTitleBarClassName = function (classNameForDefault, classNameForFocused) {
    var me = this;
    if (classNameForDefault) {
        me.titleBarClassNameDefault = classNameForDefault;
        me.titleBarClassNameFocused = classNameForDefault;
    }
    if (classNameForFocused) {
        me.titleBarClassNameFocused = classNameForFocused;
    }
    return me;
};
/**
 * Add frameComponent(Wrapped DOM element like 'div' to display above the frame) to frame
 * @param frameComponent
 */
CFrame.prototype.addFrameComponent = function (frameComponent) {
    var me = this;

    me.frameComponentMap[frameComponent.id] = frameComponent;
    me.canvas.canvasElement.appendChild(frameComponent.htmlElement);
    return me;
};

/**
 * Get stored frame component by id
 * @param frameComponent
 */
CFrame.prototype.getFrameComponentElement = function (id) {
    var me = this;
    return me.frameComponentMap[id].htmlElement;
};

CFrame.prototype.removeFrameComponentById = function (frameComponentId) {
    var me = this;

    var frameComponent = me.frameComponentMap[frameComponentId];

    me.canvas.canvasElement.removeChild(frameComponent.htmlElement);
    delete me.frameComponentMap[frameComponentId];
};
CFrame.prototype.setTitle = function (str) {
    var me = this;
    if (me.showTitleBar) {

        var textNode = document.createTextNode(str);
        //firstChildのfirstChildがspan
        me.titleBar.firstChild.replaceChild(textNode, me.titleBar.firstChild.firstChild);
    }
    return me;
};

CFrame.prototype.resize = function (deltaLeft, deltaTop, deltaWidth, deltaHeight) {
    var me = this;

    var tmpLeft = parseInt(me.htmlElement.style.left, 10);
    var tmpTop = parseInt(me.htmlElement.style.top, 10);
    var tmpWidth = parseInt(me.htmlElement.style.width, 10);
    var tmpHeight = parseInt(me.htmlElement.style.height, 10);

    me.htmlElement.style.left = parseInt(tmpLeft + deltaLeft, 10) + 'px';
    me.htmlElement.style.top = parseInt(tmpTop + deltaTop, 10) + 'px';

    me.htmlElement.style.width = parseInt(tmpWidth + deltaWidth, 10) + 'px';
    me.htmlElement.style.height = parseInt(tmpHeight + deltaHeight, 10) + 'px';

    var tmpCanvasWidth = parseInt(me.canvas.canvasElement.style.width, 10);
    var tmpCanvasHeight = parseInt(me.canvas.canvasElement.style.height, 10);

    //Since canvasElement is a (0, 0) relative coordinate with respect to the parent element,
    // so it is not necessary to change left and top.
    me.canvas.canvasElement.style.width = (tmpCanvasWidth + deltaWidth) + 'px';
    me.canvas.canvasElement.style.height = (tmpCanvasHeight + deltaHeight) + 'px';

    if (me.showTitleBar) {

        //Change the size of the title bar. TitleAdjustWidth etc.
        //The reason why you do not have to use titleAdjustWidth is because
        // these scaling are done with differences (deltaX, deltaY).
        //Therefore, if you adjust with the titleAdjustWidth as
        // the initial value, the other will stretch relative.
        //You do not think you can use ifDelta
        me.titleBar.style.width = (tmpCanvasWidth + deltaWidth) + 'px';

    } else {


    }


    for (var beanName in me.canvas.beanList) {
        var tmpBean = me.canvas.beanList[beanName];

        if (tmpBean.htmlElement.typeName == 'cmarkerwindow') {
            if (tmpBean.htmlElement.usage == 'RD') {
                //Move the size change lower right(RD) marker according to the amount of movement.
                tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left, 10) + deltaWidth) + 'px';
                tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top, 10) + deltaHeight) + 'px';
            }
            else if (tmpBean.htmlElement.usage == 'DD') {
                //Move the size change lower marker according to the movement amount.
                // Do not move left.Only the width wil increase or decrease.
                tmpBean.htmlElement.style.width = (parseInt(tmpBean.htmlElement.style.width, 10) + deltaWidth) + 'px';
                tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top, 10) + deltaHeight) + 'px';
            }
            else if (tmpBean.htmlElement.usage == 'RR') {
                //Move the size change right marker according to the movement amount
                //Do not move top,Only the height will increase or decrease.
                tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left, 10) + deltaWidth) + 'px';
                tmpBean.htmlElement.style.height = (parseInt(tmpBean.htmlElement.style.height, 10) + deltaHeight) + 'px';
            }

        }
    }
};


CFrame.prototype.canvasMouseDown = function (e) {
    var me = this;

    //Mousedown processing of CFrame.canvas

    //'This' in this method indicates 'Cwindow.canvas.canvasElement'.
    if (this.parentCFrame.parentCanvas.mouseDownSource == null) {
        this.parentCFrame.parentCanvas.mouseDownSource = 'childcanvas';
    }


};
CFrame.prototype.mouseUp = function (e) {
    this.canvas.mouseUp(e);
};

CFrame.prototype.close = function (e) {
    //Close processing of CFrame from CloseButton
    this.parentObject.parentCanvas.removeBean(this.parentObject.id);
};

CFrame.prototype.closeFrame = function (e) {
    //Close processing of CFrame
    var me = this;

    this.parentCanvas.removeBean(me.windowId);
    if (me.onCloseFrameListener) {
        me.onCloseFrameListener(me);
    }
};

CFrame.prototype.setOnCloseFrameListener = function (listener) {
    var me = this;
    me.onCloseFrameListener = listener;

};

CFrame.prototype.contextMenu = function () {
    //If you issue the right-click menu in the window, set the source to CFrame.
    var contextMenuSource = 'CFrame';
    return false;
};


CFrame.prototype.setTitleBarTextColor = function (str) {
    var me = this;
    me.titleBar.style.color = str;
};

CFrame.prototype.setPosition = function (x, y, anchor) {
    var me = this;

    var frameWidth = me.getWidth();
    var frameHeight = me.getHeight();

    me._setPositionInternally(x, y, anchor, frameWidth, frameHeight);

    return me;
};
CFrame.prototype._setPositionInternally = function (x, y, anchor, frameWidth, frameHeight) {
    var me = this;

    if (anchor) {
        me.anchor = anchor;
    }

    if (!anchor || CALIGN.LEFT_TOP == anchor) {
        me.htmlElement.style.left = x + 'px';
        me.htmlElement.style.top = y + 'px';
    }
    else if (CALIGN.HCENTER_TOP == anchor) {
        me.htmlElement.style.left = (-frameWidth / 2 + x) + 'px';
        me.htmlElement.style.top = y + 'px';
    }
    else if (CALIGN.RIGHT_TOP == anchor) {
        me.htmlElement.style.left = (-frameWidth + x) + 'px';
        me.htmlElement.style.top = y + 'px';
    }
    else if (CALIGN.LEFT_VCENTER == anchor) {
        me.htmlElement.style.left = x + 'px';
        me.htmlElement.style.top = (-frameHeight / 2 + y) + 'px';
    }
    else if (CALIGN.HCENTER_VCENTER == anchor) {
        me.htmlElement.style.left = (-frameWidth / 2 + x) + 'px';
        me.htmlElement.style.top = (-frameHeight / 2 + y) + 'px';
    }
    else if (CALIGN.RIGHT_VCENTER == anchor) {
        me.htmlElement.style.left = (-frameWidth + x) + 'px';
        me.htmlElement.style.top = (-frameHeight / 2 + y) + 'px';
    }
    else if (CALIGN.LEFT_BOTTOM == anchor) {
        me.htmlElement.style.left = x + 'px';
        me.htmlElement.style.top = (-frameHeight + y) + 'px';
    }
    else if (CALIGN.HCENTER_BOTTOM == anchor) {
        me.htmlElement.style.left = (-frameWidth / 2 + x) + 'px';
        me.htmlElement.style.top = (-frameHeight + y) + 'px';
    }
    else if (CALIGN.RIGHT_BOTTOM == anchor) {
        me.htmlElement.style.left = (-frameWidth + x) + 'px';
        me.htmlElement.style.top = (-frameHeight + y) + 'px';
    }
};

/**
 * Returns relative position with anchor
 * @returns {{x: *, y: *, anchor: *}}
 */
CFrame.prototype.getPosition = function () {
    var me = this;
    var frameWidth = me.getWidth();
    var frameHeight = me.getHeight();
    var x;
    var y;
    var anchor = me.anchor;
    if (!anchor || CALIGN.LEFT_TOP == anchor) {
        x = parseInt(me.htmlElement.style.left, 10);
        y = parseInt(me.htmlElement.style.top, 10);
    }
    else if (CALIGN.HCENTER_TOP == anchor) {
        x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
        y = parseInt(me.htmlElement.style.top, 10);
    }
    else if (CALIGN.RIGHT_TOP == anchor) {
        x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
        y = parseInt(me.htmlElement.style.top, 10);
    }
    else if (CALIGN.LEFT_VCENTER == anchor) {
        x = parseInt(me.htmlElement.style.left, 10);
        y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
    }
    else if (CALIGN.HCENTER_VCENTER == anchor) {
        x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
        y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
    }
    else if (CALIGN.RIGHT_VCENTER == anchor) {
        x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
        y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
    }
    else if (CALIGN.LEFT_BOTTOM == anchor) {
        x = parseInt(me.htmlElement.style.left, 10);
        y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
    }
    else if (CALIGN.HCENTER_BOTTOM == anchor) {
        x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
        y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
    }
    else if (CALIGN.RIGHT_BOTTOM == anchor) {
        x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
        y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
    }
    return {x: x, y: y, anchor: anchor};
};

CFrame.prototype.getLeft = function () {
    var me = this;
    return parseInt(me.htmlElement.style.left, 10);
};


CFrame.prototype.getTop = function () {
    var me = this;
    return parseInt(me.htmlElement.style.top, 10);
};
CFrame.prototype.getWidth = function () {
    var me = this;
    return parseInt(me.htmlElement.style.width, 10);
};
CFrame.prototype.getHeight = function () {
    var me = this;
    return parseInt(me.htmlElement.style.height, 10);
};

CFrame.prototype.setSize = function (width, height) {
    var me = this;

    me.resize(0, 0, width - me.getWidth(), height - me.getHeight(), true);
    return me;
};

CFrame.prototype.getWindowId = function () {
    var me = this;
    return me.windowId
};

CFrame.prototype.getName = function () {
    var me = this;
    return me.property.name;
};

CFrame.prototype.setName = function (name) {
    var me = this;
    me.property.name = name;
};
/**
 * end of CFrame class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


inherit(CIfFrame, CFrame);

/**
 * CIfFrame class
 * Extension class with contents frame of CFrame as iframe
 * @param windowId
 * @param appearance
 * @constructor
 */
function CIfFrame(windowId, left, top, width, height, appearance) {


    var wleft = left;
    var wtop = top;
    var wwidth = width;
    var wheight = height;
    var zindex = appearance.zindex;
    var wborderwidth = null;


    var me = this;


    this.minFrameWidth = 128;
    this.minWindowHeight = 32;

    /**
     * If this value is true, the focus will move when tapping the iframe area,
     * but if the window do not have the focus, you can not click on the element in the iframe.
     */
    this.overrayTransparentScreenEnabled = false;

    /**
     *  Only in the case of resizing a transparent screen can be displayed on the iframe
     *  and the size can be adjusted smoothly.
     *  true is recommended.
     */
    this.overrayTransparentScreenOnResize = true;


    this.titleBarColorFocused = appearance.titleBarColorFocused;
    this.titleBarColorDefault = appearance.titleBarColorDefault;

    this.titleBarCaptionColorDefault = appearance.titleBarCaptionColorDefault;
    this.titleBarCaptionColorFocused = appearance.titleBarCaptionColorFocused;

    //call super constructor
    CIfFrame.superConstructor.call(me, windowId, wleft, wtop, wwidth, wheight, zindex, wborderwidth, appearance);

    //border color
    me.frameBorderColorDefault = appearance.frameBorderColorDefault;
    me.frameBorderColorFocused = appearance.frameBorderColorFocused;

    //border width
    me.frameBorderWidthDefault = appearance.frameBorderWidthDefault;
    me.frameBorderWidthFocused = appearance.frameBorderWidthFocused;


    me.iframe = null;


    //Offset value for width adjustment of iframe
    me.ifDelta = 0;

    me.resizable = true;


    me.onMouseMoveOnIframe = null;
    me.onMouseUpOnIframe = null;

    me._hasFocus = false;
    me._hasFocusTime = 0;


    me.htmlElement.typeName = 'cifwindow';

    //name of iframe
    var exIframeName = 'riversun_' + windowId;


    me.dframe = document.createElement('div');


    me.iframe = document.createElement('iframe');


    me.iframe.name = exIframeName;

    me.iframe.id = exIframeName;

    me.iframe.frameBorder = '0';
    me.iframe.scrolling = 'no';

    me.iframe.zIndex = -1;

    //Allow transparent of iframe background.
    me.iframe.allowTransparency = 'true';
    me.iframe.width = me.canvasNetWidth - me.ifDelta + 0;
    me.iframe.height = me.canvasNetHeight - me.ifDelta + 0;

    me.showTitleBar = appearance.showTitleBar;

    me.getFrameInnerBorderRadius = appearance.getFrameInnerBorderRadius;

    me.frameBorderRadius = appearance.frameBorderRadius;


    me.adjustFrameBorderRadius();

    me.useIframe = false;


    me.canvas.canvasElement.appendChild(me.iframe);

    me.canvas.canvasElement.appendChild(me.dframe);


    this.setUseIframe = function (useIframe) {
        me.useIframe = useIframe;
        me.iframe.style.visibility = 'hidden';
        me.iframe.style.position = 'absolute';
        me.iframe.style.left = '0px';
        me.iframe.style.top = '0px';
        me.iframe.style.width = '100%';
        me.iframe.style.height = '100%';

        me.dframe.style.visibility = 'hidden';
        me.dframe.style.position = 'absolute';
        me.dframe.style.left = '0px';
        me.dframe.style.boxSizing = "content-box";

        me.dframe.style.top = '0px';
        me.dframe.style.width = '100%';
        me.dframe.style.height = '100%';
        //me.dframe.style.borderStyle="solid";
        me.dframe.style.backgroundColor = "white";


        if (useIframe) {
            me.iframe.style.visibility = 'visible';
            me.dframe.style.visibility = 'hidden';
        } else {


            me.iframe.style.visibility = 'hidden';
            me.dframe.style.visibility = 'visible';
        }
    };

    me.setUseIframe(appearance.useIframe);

    //If it is IE, set the canvasElement of the canvas which is the parent of the iframe to transparent.

    if (me.overrayTransparentScreenEnabled || me.overrayTransparentScreenOnResize) {
        //Create a transparent screen.
        me.transparence = document.createElement('span');
        //me.transparence.style.backgroundImage = 'url(img/img_baron_tp.gif)';

        me.transparence.style.position = 'absolute';
        me.transparence.style.left = '0px';
        me.transparence.style.top = '0px';

        //Transparent screen is 0px when creating window
        me.transparence.style.width = '0px';
        me.transparence.style.height = '0px';

        me.transparence.style.zIndex = 4;
        me.transparence.style.borderWidth = '0px';
        me.transparence.style.borderColor = '#ff00ee';
        //this.transparence.style.borderStyle='none';
        me.transparence.style.cursor = 'default';

        me.canvas.canvasElement.style.backgroundColor = appearance.frameBackgroundColor;


        me.canvas.canvasElement.appendChild(me.transparence);
    }

}


CIfFrame.prototype.getFrameView = function () {
    var me = this;
    return me.dframe;
};


CIfFrame.prototype.setHTML = function (html) {
    var me = this;
    me.dframe.innerHTML = html;
};

/**
 * find DOM Element in the frame by querySelector<br>
 *  Examples<br>
 *      frame.$("#my_id_name");
 *      frame.$(".my_class_name");
 *      frame.$("div>img");
 *      frame.$("input[type='submit]");
 * @param q
 * @returns {Node}
 */
CIfFrame.prototype.$ = function (q) {
    var me = this;

    if (me.useIframe) {
        var docInIframe = me.iframe.contentWindow.document;
        return docInIframe.querySelector(q);

    } else {

        return me.dframe.querySelector(q);

    }
};


CIfFrame.prototype.adjustFrameBorderRadius = function () {
    var me = this;

    if (parseInt(me.frameBorderRadius, 10) > 0) {

        var innerBorderRadius = me.getFrameInnerBorderRadius(me, me._hasFocus);

        if (me.showTitleBar) {

            //title bar exists
            me.canvas.canvasElement.style.borderBottomRightRadius = innerBorderRadius;
            me.canvas.canvasElement.style.borderBottomLeftRadius = innerBorderRadius;
            me.iframe.style.borderBottomRightRadius = innerBorderRadius;
            me.iframe.style.borderBottomLeftRadius = innerBorderRadius;

            me.titleBar.style.borderTopLeftRadius = innerBorderRadius;
            me.titleBar.style.borderTopRightRadius = innerBorderRadius;


        } else {

            //title bar not exits
            me.canvas.canvasElement.style.borderRadius = innerBorderRadius;
            me.iframe.style.borderRadius = innerBorderRadius;

        }

        if (me.dframe) {
            me.dframe.style.borderBottomRightRadius = innerBorderRadius;
            me.dframe.style.borderBottomLeftRadius = innerBorderRadius;
        }


    }
};

CIfFrame.prototype.handleReleasingFocus = function (e) {
    var me = this;
    me._hasFocus = false;

    me.titleBar.style.backgroundColor = me.titleBarColorDefault;
    me.titleBar.style.color = me.titleBarCaptionColorDefault;

    //border color
    if (me.frameBorderColorDefault) {
        me.htmlElement.style.borderColor = me.frameBorderColorDefault;
    }

    //border width
    if (me.frameBorderWidthDefault) {
        me.htmlElement.style.borderWidth = me.frameBorderWidthDefault;
        me.adjustFrameBorderRadius();
    }

    if (me.htmlElement.typeName == 'cifwindow') {
        if (me.overrayTransparentScreenEnabled) {
            me.transparence.style.width = parseInt(me.iframe.width, 10) + 'px';
            me.transparence.style.height = parseInt(me.iframe.height, 10) + 'px';
        }
    }

    //handling for child frameComponents
    for (var frameComponentId in me.frameComponentMap) {
        var frameComponent = me.frameComponentMap[frameComponentId];
        frameComponent.handleReleasingFocus()
    }

    //border bottom
    if (me.titleBarBorderBottomDefault) {
        me.titleBar.style.borderBottom = me.titleBarBorderBottomDefault;
    }


    //update style class
    me.titleBar.className = me.titleBarClassNameDefault;

    return me;
};

CIfFrame.prototype.handleTakingFocus = function (e) {
    var me = this;
    me._hasFocus = true;
    me._hasFocus = Date.now();

    if (me.overrayTransparentScreenEnabled) {
        //close transparence screen
        me.transparence.style.width = '0px';
        me.transparence.style.height = '0px';
    }

    me.titleBar.style.backgroundColor = me.titleBarColorFocused;
    me.titleBar.style.color = me.titleBarCaptionColorFocused;


    //border color
    if (me.frameBorderColorFocused) {
        me.htmlElement.style.borderColor = me.frameBorderColorFocused;
    }

    //border width
    if (me.frameBorderWidthFocused) {
        me.htmlElement.style.borderWidth = me.frameBorderWidthFocused;
        me.adjustFrameBorderRadius();
    }

    //border bottom
    if (me.titleBarBorderBottomFocused) {
        me.titleBar.style.borderBottom = me.titleBarBorderBottomFocused;
    }

    //handling for child frameComponents
    for (var frameComponentId in me.frameComponentMap) {
        var frameComponent = me.frameComponentMap[frameComponentId];
        frameComponent.handleTakingFocus()
    }


    //update style class
    me.titleBar.className = me.titleBarClassNameFocused;
    return me;
};


CIfFrame.prototype.show = function () {
    var me = this;
    me.htmlElement.style.visibility = 'visible';
    me.requestFocus();
    return me;
};

CIfFrame.prototype.hide = function () {
    var me = this;
    me.htmlElement.style.visibility = 'hidden';
    return me;
};

//Overriding CBeanFrame.prototype.onmouseDown
CIfFrame.prototype.onmouseDown = function (e) {

    var refHtmlElement = this;

    //Do not select it when dragging by the mouse.
    document.body.ondrag = function () {
        return false;
    };
    // document.body.onselectstart = function () {
    //     return false;
    // };


    //Override decorator with onmouseDown of parent class
    refHtmlElement.decorator = CFrame.prototype.onmouseDown;
    refHtmlElement.decorator(e);

    //Deploy a transparent screen.
    // Since mouseDown is pointed to this.htmlElement.onmousedown in the CBean class,
    // this 'this' will indicate this.htmlElement.
    //In other words,
    //if you want to refer 'CIfFrame',you need to specify 'this.parent.'
    //See CBeanFrame class, you can find 'this.htmlElement.parent = this'
    var refCIfFrame = refHtmlElement.parent;


    var refCWindowManager = refHtmlElement.parentCanvas;

    //When somewhere window(CFrame,CIfFrame) fires 'mouseDown',
    // Close all transparency screens so that the mouse cursor can pass over any iFrame
    for (var windowId in refCWindowManager.beanList) {
        var objCIfFrame = refCWindowManager.beanList[windowId];
        if (windowId == refCIfFrame.getWindowId()) {
            //skip
        } else {
            objCIfFrame.handleReleasingFocus();
        }
    }

    refCIfFrame.handleTakingFocus();

};

CIfFrame.prototype.mouseUp = function (e) {
    var refCIfFrame = this;


    if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
        if (refCIfFrame.parentCanvas.onTopObject == refCIfFrame) {
            //Minimize the window at the front.
            refCIfFrame.transparence.style.width = '0px';
            refCIfFrame.transparence.style.height = '0px';
        } else {
            //The window which is not the at the front expands the screen so that it can respond to clicks.

            if (refCIfFrame.overrayTransparentScreenEnabled) {
                refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + 'px';
                refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + 'px';
            }
        }
    }

    refCIfFrame.decorator = CFrame.prototype.mouseUp;
    refCIfFrame.decorator(e);


    //Cancel selecting "Do not select when dragging mouse while releasing button" is canceled
    document.body.ondrag = null;
    document.body.onselectstart = null;

};

CIfFrame.prototype.setMinFrameSize = function (width, height) {
    var me = this;
    me.minFrameWidth = width;
    me.minWindowHeight = height;
};

CIfFrame.prototype.resize = function (deltaLeft, deltaTop, deltaWidth, deltaHeight, byUser) {

    var refCIfFrame = this;


    if (!refCIfFrame.resizable) {
        return null;
    }


    //Resize processing should be overridden directly rather than adopting a decorator pattern because it has better performance.
    var tmpLeft = parseInt(refCIfFrame.htmlElement.style.left, 10);
    var tmpTop = parseInt(refCIfFrame.htmlElement.style.top, 10);
    var tmpWidth = parseInt(refCIfFrame.htmlElement.style.width, 10);
    var tmpHeight = parseInt(refCIfFrame.htmlElement.style.height, 10);

    //Important logic to handle the minimum of Window well
    if (byUser && (tmpWidth + deltaWidth < refCIfFrame.minFrameWidth & deltaWidth < 0)) {
        //Minimum adjustment of width
        refCIfFrame.htmlElement.style.width = tmpWidth + 'px';
        deltaWidth = 0;
    }

    if (byUser && (tmpHeight + deltaHeight < refCIfFrame.minWindowHeight & deltaHeight < 0)) {
        //Minimum adjustment of height
        refCIfFrame.htmlElement.style.height = tmpHeight;
        deltaHeight = 0;
    }
    refCIfFrame.htmlElement.style.left = (tmpLeft + deltaLeft) + 'px';
    refCIfFrame.htmlElement.style.top = (tmpTop + deltaTop) + 'px';
    refCIfFrame.htmlElement.style.width = (tmpWidth + deltaWidth) + 'px';
    refCIfFrame.htmlElement.style.height = (tmpHeight + deltaHeight) + 'px';


    var tmpCanvasWidth = parseInt(refCIfFrame.canvas.canvasElement.style.width, 10);
    var tmpCanvasHeight = parseInt(refCIfFrame.canvas.canvasElement.style.height, 10);

    //Since canvasElement is a (0, 0) relative coordinate with respect
    // to the parent element, it is not necessary to change left and top.
    refCIfFrame.canvas.canvasElement.style.width = (tmpCanvasWidth + deltaWidth) + 'px';
    refCIfFrame.canvas.canvasElement.style.height = (tmpCanvasHeight + deltaHeight) + 'px';

    //Change the size of the title bar. TitleAdjustWidth etc.
    // The reason why you do not have to use titleAdjustWidth is
    // because these scaling are done with differences (deltaX, deltaY).
    //Therefore, if you adjust with the titleAdjustWidth
    // as the initial value, the other will stretch relative.
    refCIfFrame.titleBar.style.width = (tmpCanvasWidth - refCIfFrame.ifDelta + deltaWidth + 0) + 'px';

    //Image resizing for iframe that is the child element of canvas
    refCIfFrame.iframe.width = (tmpCanvasWidth - refCIfFrame.ifDelta + deltaWidth + 0) + 'px';
    refCIfFrame.iframe.height = (tmpCanvasHeight - refCIfFrame.ifDelta + deltaHeight + refCIfFrame.frameHeightAdjust) + 'px';


    if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
        //Deploy a transparent screen.
        refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + 'px';
        refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + 'px';
    }

    //move frameComponent(like closeButton) corresponding to moving window edge for resize
    for (var frameComponentId in refCIfFrame.frameComponentMap) {
        var frameComponent = refCIfFrame.frameComponentMap[frameComponentId];
        //update alignment of frameComponent corresponding to moving window edge for resize
        frameComponent.updateAlign()
    }


    for (var beanName in refCIfFrame.canvas.beanList) {
        var tmpBean = refCIfFrame.canvas.beanList[beanName];

        if (tmpBean.htmlElement.typeName == 'cmarkerwindow') {

            if (tmpBean.htmlElement.usage == 'RD') {
                tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left) + deltaWidth) + 'px';
                tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top) + deltaHeight) + 'px';
            }
            else if (tmpBean.htmlElement.usage == 'DD') {
                tmpBean.htmlElement.style.width = (parseInt(tmpBean.htmlElement.style.width) + deltaWidth) + 'px';
                tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top) + deltaHeight) + 'px';
            }
            else if (tmpBean.htmlElement.usage == 'RR') {
                tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left) + deltaWidth) + 'px';
                tmpBean.htmlElement.style.height = (parseInt(tmpBean.htmlElement.style.height) + deltaHeight) + 'px';
            }
        }
    }
};//resize

CIfFrame.prototype.resizeDirect = function (width, height, byUser) {

    var refCIfFrame = this;


    if (!refCIfFrame.resizable) {
        return null;
    }

    refCIfFrame.htmlElement.style.width = width + 'px';
    refCIfFrame.htmlElement.style.height = height + 'px';


    var tmpCanvasWidth = parseInt(refCIfFrame.canvas.canvasElement.style.width);
    var tmpCanvasHeight = parseInt(refCIfFrame.canvas.canvasElement.style.height);

    //Since canvasElement is a (0, 0) relative coordinate with respect
    // to the parent element, it is not necessary to change left and top.
    refCIfFrame.canvas.canvasElement.style.width = width + 'px';
    refCIfFrame.canvas.canvasElement.style.height = (height - refCIfFrame.titleBar.style.height) + 'px';

    //Change the size of the title bar. TitleAdjustWidth etc.
    // The reason why you do not have to use titleAdjustWidth is
    // because these scaling are done with differences (deltaX, deltaY).
    //Therefore, if you adjust with the titleAdjustWidth
    // as the initial value, the other will stretch relative.
    refCIfFrame.titleBar.style.width = (width - refCIfFrame.ifDelta) + 'px';

    //Image resizing for iframe that is the child element of canvas
    refCIfFrame.iframe.width = width - refCIfFrame.ifDelta + 'px';
    refCIfFrame.iframe.height = height - refCIfFrame.ifDelta + refCIfFrame.frameHeightAdjust + 'px';


    if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
        //Deploy a transparent screen.
        refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + 'px';
        refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + 'px';
    }

    //move frameComponent(like closeButton) corresponding to moving window edge for resize
    for (var frameComponentId in refCIfFrame.frameComponentMap) {
        var frameComponent = refCIfFrame.frameComponentMap[frameComponentId];
        //update alignment of frameComponent corresponding to moving window edge for resize
        frameComponent.updateAlign()
    }


    for (var beanName in refCIfFrame.canvas.beanList) {
        var tmpBean = refCIfFrame.canvas.beanList[beanName];

        if (tmpBean.htmlElement.typeName == 'cmarkerwindow') {

            if (tmpBean.htmlElement.usage == 'RD') {
                tmpBean.htmlElement.style.left = width + 'px';// parseInt(tmpBean.htmlElement.style.left) + deltaWidth + 'px';
                tmpBean.htmlElement.style.top = height + 'px';//parseInt(tmpBean.htmlElement.style.top) + deltaHeight + 'px';
            }
            else if (tmpBean.htmlElement.usage == 'DD') {
                tmpBean.htmlElement.style.width = width + 'px';
                tmpBean.htmlElement.style.top = height + 'px';//heightparseInt(tmpBean.htmlElement.style.top) + deltaHeight + 'px';
            }
            else if (tmpBean.htmlElement.usage == 'RR') {
                tmpBean.htmlElement.style.left = width + 'px';//+parseInt(tmpBean.htmlElement.style.left) + deltaWidth + 'px';
                tmpBean.htmlElement.style.height = height + 'px';
            }
        }
    }
};//resize

/**
 * Focus on this frame
 */
CIfFrame.prototype.requestFocus = function () {


    var me = this;

    var beanList = me.parentCanvas.beanList;

    for (var windowId in beanList) {

        var tmpIfWindow = beanList[windowId];

        //If it's my own window, minimize the transparent screen and change the color of the title bar.
        if (windowId == me.getWindowId()) {

            //if this frame is a target frame
            tmpIfWindow.handleTakingFocus();
        }
        else {

            //if this frame is NOT a target frame
            tmpIfWindow.handleReleasingFocus();
        }
    }

    me.parentCanvas.pullUp(me.id);

};

/**
 * URL for iframe
 * @param url
 */
CIfFrame.prototype.setUrl = function (url) {

    var me = this;

    return new Promise(function (resolve, reject) {


        if (url) {
            me.setUseIframe(true);
        } else {
            me.setUseIframe(false);
            resolve();
        }


        me.iframe.src = url;

        me.iframe.onload = function () {

            //mouse move
            me.iframe.contentWindow.document.onmousemove = function (e) {
                var frameLeft = me.getLeft();
                var frameTop = me.getTop();

                var eventFromIframe = document.createEvent('MouseEvents');
                eventFromIframe.initMouseEvent('mousemove', true, false, window, e.detail, e.screenX, e.screenY, (e.pageX + frameLeft), (e.pageY + frameTop),
                    e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null);

                //smooth dragging during iframe mode
                me.parentCanvas.windowMouseMove(eventFromIframe);

                if (me.onMouseMoveOnIframe) {
                    me.onMouseMoveOnIframe(eventFromIframe);
                }
            };

            //mouse up
            me.iframe.contentWindow.document.onmouseup = function (e) {
                var frameLeft = me.getLeft();
                var frameTop = me.getTop();

                var eventFromIframe = document.createEvent('MouseEvents');
                eventFromIframe.initMouseEvent('mouseup', true, false, window, e.detail, e.screenX, e.screenY, (e.pageX + frameLeft), (e.pageY + frameTop),
                    e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null);

                //smooth dragging during iframe mode
                me.parentCanvas.windowMouseUp(eventFromIframe);

                if (me.onMouseUpOnIframe) {
                    me.onMouseUpOnIframe(eventFromIframe);
                }

            };


            resolve(me.iframe.contentWindow.document);
        };


    });


};


/**
 * Returns DOM-document of iframe
 * @returns {*|HTMLDocument}
 */
CIfFrame.prototype.getIfDocument = function () {
    var me = this;
    return me.iframe.contentWindow.document;
};

CIfFrame.prototype.setScrolling = function (str) {
    var me = this;
    me.iframe.scrolling = str;
};

CIfFrame.prototype.getScrolling = function (str) {
    var me = this;
    return me.iframe.scrolling
};


CIfFrame.prototype.setResizable = function (enabled) {
    var me = this;

    me.resizable = enabled;
    if (!enabled) {
        me.removeMarkers2();
    }
    return me;
};
/**
 * end of CIFrame class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


inherit(CWindowManager, CCanvas);

/**
 * CWindowManager class
 * <p>
 * A canvas class that displays multiple frames. Handle events on the window to coordinate multiple windows<br>
 *
 * @param parentElement
 * @param canvasId
 * @param left
 * @param top
 * @param width
 * @param height
 * @constructor
 */
function CWindowManager(parentElement, canvasId, left, top, width, height) {
    CWindowManager.superConstructor.call(this, parentElement, canvasId, left, top, width, height);
    var me = this;

    document.body.addEventListener("click", function (evt) {
        for (var windowId in me.beanList) {
            var beanFrame = me.beanList[windowId];
            beanFrame.onBodyClicked(evt)
        }

    });
}

CWindowManager.prototype.getWindow = function (windowId) {
    var me = this;
    return me.beanList[windowId];
};

//Wrapping the 'addBean' of the parent class
CWindowManager.prototype.addWindow = function (window) {
    var me = this;

    //20180724
    var windowId = window.getWindowId();
    var name = window.getName();
    me.beanIdName[windowId] = name;
    me.beanNameId[name] = windowId;

    me.addBean(window);
};

//20180724 if contains window named specified name
CWindowManager.prototype.containsWindowName = function (name) {
    var me = this;


    var windowId = me.beanNameId[name];

    if (windowId) {
        return true;
    }
};

//20180724
CWindowManager.prototype.getWindowByName = function (name) {
    var me = this;
    var windowId = me.beanNameId[name];

    if (windowId) {
        return me.getWindow(windowId);
    } else {
        return null;
    }
};

//Wrapping the 'mouseMove' method of the parent class
CWindowManager.prototype.windowMouseMove = function (e) {
    var me = this;
    if (me.currentObject == null) {

        return null;
    }

    var childWindowMoved = false;

    //Loop processing of each CWindow held by CWindowManager
    var beanList = me.beanList;

    for (var windowId in  beanList) {

        var targetWindow = beanList[windowId];


        //Since this 'mouseMove' is canvas of CWindow's 'mouseMove',so do move CBeanFrames in the canvas.
        var eventData = targetWindow.canvas.mouseMove(e);

        //Whether any one of the beans in the Canvas has moved or not.
        //Yes.(When it moves), eventData is set.
        //NO. If it does not move it is set to null.
        childWindowMoved = childWindowMoved | (eventData != null);
        if (eventData != null) {

            //If it is the marker for resizing
            if (eventData.targetTypeName == 'cmarkerwindow') {

                var targetObject = eventData.targetObject;

                if (targetObject.usage == 'RD') {
                    targetWindow.resize(0, 0, eventData.deltaX, eventData.deltaY, true);
                }

                else if (targetObject.usage == 'DD') {
                    targetWindow.resize(0, 0, 0, eventData.deltaY, true);
                }

                else if (targetObject.usage == 'RR') {
                    targetWindow.resize(0, 0, eventData.deltaX, 0, true);
                }

            }
        }
    }

    //If any one of the beans in the Canvas has moved.Do not do 'Cwindow's mouseMove'
    if (!childWindowMoved && this.mouseDownSource != 'childcanvas') {

        //Moving logic for CWindow which is holded by CWindowManager as a child window.
        me.mouseMove(e);
    }

};

//Wrapping the method 'mouseUp' of the parent class
CWindowManager.prototype.windowMouseUp = function (e) {
    var me = this;

    //run 'mouseUp' of parent class
    me.mouseUp(e);

    var beanList = me.beanList;

    for (var windowId in  beanList) {

        var objWindow = beanList[windowId];

        //run CWindow's 'mouseUp'(it's child window).
        objWindow.mouseUp(e);
    }

};

/**
 * (override CCanvas.removeBean)
 * @param windowId
 */
CWindowManager.prototype.removeBean = function (windowId) {


    var me = this;

    //Retrieve the target beanFrame
    var beanList = me.beanList;
    var targetBean = beanList[windowId];

    if (targetBean == null) {
        return;
    }

    var removeTargetBeanHasFocus = targetBean._hasFocus;


    //Remove bean's htmlElement from canvasElement
    me.canvasElement.removeChild(targetBean.htmlElement);

    //Delete the bean object in the associative array.
    delete beanList[windowId];

    //20180724[start]
    var beanName = me.beanIdName[windowId];
    if (beanName) {
        //-if bean name exist
        delete me.beanIdName[windowId];
        delete me.beanNameId[beanName];
    }
    //20180724[end]


    //focus on last focused window after removing
    var maxFocusTime = 0;
    var lastFocusedFrame = null;

    if (removeTargetBeanHasFocus) {
        for (var windowId in beanList) {
            var frame = beanList[windowId];
            if (maxFocusTime <= frame._hasFocusTime) {
                maxFocusTime = frame._hasFocusTime;
                lastFocusedFrame = frame;
            }
        }
        if (lastFocusedFrame) {
            lastFocusedFrame.requestFocus();
        }
    }
};
/**
 * end of CWindowManager class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

inherit(CMarkerWindow, CBeanFrame);

/**
 * CMarkerWindow class
 * @param windowId
 * @param left
 * @param top
 * @param width
 * @param height
 * @param zindex
 * @param usage
 * @constructor
 */
function CMarkerWindow(windowId, left, top, width, height, zindex, usage) {

    var me = this;

    CMarkerWindow.superConstructor.call(this, windowId, left, top, width, height, zindex, usage);

    me.htmlElement.typeName = 'cmarkerwindow';
    me.htmlElement.usage = usage;
    me.htmlElement.isRangeLimited = false;
    me.htmlElement.style.borderStyle = 'none';
    me.htmlElement.style.zIndex = 1;

}

/**
 * End of CMarkerWindow class
 * @constructor
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * FrameManager class
 * @constructor
 */
function JSFrame(parentElement) {

    var me = this;


    document.onmouseup = mouseUp;
    document.onmousemove = mouseMove;

    if (!parentElement) {
        parentElement = document.body;
    }


    me.windowManager = new CWindowManager(parentElement, 'windowManager_' + me.generateUUID(), 0, 0, 0, 0);
    //me.windowManager = new CWindowManager(document.body, 'windowManager_' + me.generateUUID(), 0, 0, 0, 0);
    me.domPartsBuilder = null;


    function mouseUp(e) {
        me.windowManager.windowMouseUp(e);
    }

    function mouseMove(e) {
        me.windowManager.windowMouseMove(e);
        var globalMouseX = e.pageX;
        var globalMouseY = e.pageY;
    }


}

JSFrame.prototype.getDomPartsBuilder = function () {
    var me = this;

    if (!me.domPartsBuilder) {
        me.domPartsBuilder = new CDomPartsBuilder();
    }
    return me.domPartsBuilder;
};


/**
 * Create a new window
 *
 * @returns {CIfFrame}
 */
JSFrame.prototype.createFrame = function (left, top, width, height, appearance, properties) {
    var me = this;

    if (!appearance) {
        appearance = me.createFrameAppearance();
    }

    appearance.initialize();

    var windowId = 'window_' + me.generateUUID();

    var frame = new CIfFrame(windowId, left, top, width, height, appearance);

    if (properties && properties.windowName) {
        frame.setName(properties.windowName);
    }
    frame.hide();

    me.windowManager.addWindow(frame);


    return frame;

};

//20180724 just Wrapped windowmanager#containsWindowName
JSFrame.prototype.containsWindowName = function (windowName) {
    var me = this;
    return me.windowManager.containsWindowName(windowName);
};
//20180724 just Wrapped windowmanager#getWindowByName
JSFrame.prototype.getWindowByName = function (windowName) {
    var me = this;
    return me.windowManager.getWindowByName(windowName);
};

JSFrame.prototype.generateUUID = function () {

    var unixTime = Date.now();

    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (unixTime + Math.random() * 16) % 16 | 0;
        unixTime = Math.floor(unixTime / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;

};

JSFrame.prototype.createFrameAppearance = function () {
    return new CFrameAppearance();
};

JSFrame.prototype.createAnimator = function () {

    return new CSimpleLayoutAnimator();
};
/**
 * end of FrameManager class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * CFrameComponent class
 * <p>
 * Wrapped DOM element like 'div' to display above the frame<br>
 *
 * ex.An object such as closeButton
 *
 * @param id
 * @param frame
 * @param htmlElement DOM-element
 * @param x relative x-position in the frame respect to align
 * @param y relative y-position in the frame respect to align
 * @param align relative alignment in the frame
 * @constructor
 */
function CFrameComponent(id, htmlElement, x, y, align) {
    var me = this;

    me.id = id;
    me.x = x;
    me.y = y;
    me.frame = null;

    me._focusTakingCallabck = null;
    me._focusReleasingCallabck = null;

    if (align) {
        me.frameComponentAlign = align;
    } else {
        me.frameComponentAlign = CALIGN.LEFT_TOP;
    }

    me.htmlElement = htmlElement;
    me.htmlElement.style.zIndex = 50;

}

CFrameComponent.prototype.setFocusCallback = function (focusTakingCallback, focusReleasingCallback) {
    var me = this;
    me._focusTakingCallabck = focusTakingCallback;
    me._focusReleasingCallabck = focusReleasingCallback;
};

/**
 * Set parent frame of this frameComponent
 * @param frame
 */
CFrameComponent.prototype.setFrame = function (frame) {
    var me = this;

    me.frame = frame;
    me.htmlElement.parentObject = frame;
    me.updateAlign();
};

/**
 * Place the FrameComponent relative to the parent's frame.
 * Relocate relative to parent frame when window resize event occurs
 */
CFrameComponent.prototype.updateAlign = function () {

    var me = this;

    var frameComponentAlign = me.frameComponentAlign;

    var frame = me.frame;
    var eleStyle = me.htmlElement.style;
    eleStyle.userSelect = 'none';

    var x = me.x;
    var y = me.y;

    var frameWidth = frame.getWidth();
    var frameHeight = frame.getHeight();
    var eleStyleWidth = eleStyle.width;
    var eleStyleHeight = eleStyle.height;

    if (CALIGN.LEFT_TOP == frameComponentAlign) {
        eleStyle.left = x + 'px';
        eleStyle.top = y + 'px';
    }
    else if (CALIGN.HCENTER_TOP == frameComponentAlign) {
        eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
        eleStyle.top = y + 'px';
    }
    else if (CALIGN.RIGHT_TOP == frameComponentAlign) {
        eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
        eleStyle.top = y + 'px';
    }
    else if (CALIGN.LEFT_VCENTER == frameComponentAlign) {
        eleStyle.left = x + 'px';
        eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
    }
    else if (CALIGN.HCENTER_VCENTER == frameComponentAlign) {
        eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
        eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
    }
    else if (CALIGN.RIGHT_VCENTER == frameComponentAlign) {
        eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
        eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
    }
    else if (CALIGN.LEFT_BOTTOM == frameComponentAlign) {
        eleStyle.left = x + 'px';
        eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
    }
    else if (CALIGN.HCENTER_BOTTOM == frameComponentAlign) {
        eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
        eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
    }
    else if (CALIGN.RIGHT_BOTTOM == frameComponentAlign) {
        eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
        eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
    }
};

CFrameComponent.prototype.handleTakingFocus = function () {
    var me = this;
    if (me._focusTakingCallabck) {
        me._focusTakingCallabck();
    }
};

CFrameComponent.prototype.handleReleasingFocus = function () {
    var me = this;
    if (me._focusReleasingCallabck) {
        me._focusReleasingCallabck();
    }
};

/**
 * end of CFrameComponent class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


/**
 * CDomPartsBuilder class
 * Easy to build a beautiful or typical dom parts(htmlElement)
 * @constructor
 */
function CDomPartsBuilder() {
}

CDomPartsBuilder.prototype.buildTextButtonAppearance = function () {
    return new CTextButtonAppearance();
};

CDomPartsBuilder.prototype.buildButton = function (btnAppearance) {
    var me = this;
    return me.buildTextButton(btnAppearance);
}
/**
 *
 * @param size
 * @returns {HTMLElement}
 */
CDomPartsBuilder.prototype.buildButton = function (btnAppearance) {

    var size = btnAppearance.size;
    var width = size;
    var height = size;

    if (btnAppearance.width != null) {
        width = btnAppearance.width;
    }

    if (btnAppearance.height != null) {
        height = btnAppearance.height;
    }


    var divElement = document.createElement('div');

    //border
    var borderWidth = btnAppearance.borderWidth;
    var borderRadius = btnAppearance.borderRadius;

    var borderColorDefault = btnAppearance.borderColorDefault;
    var borderColorFocused = btnAppearance.borderColorFocused;
    var borderColorHovered = btnAppearance.borderColorHovered;
    var borderColorPressed = btnAppearance.borderColorPressed;

    var borderStyleDefault = btnAppearance.borderStyleDefault;
    var borderStyleFocused = btnAppearance.borderStyleFocused;
    var borderStyleHovered = btnAppearance.borderStyleHovered;
    var borderStylePressed = btnAppearance.borderStylePressed;

    //background
    var backgroundColorDefault = btnAppearance.backgroundColorDefault;
    var backgroundColorFocused = btnAppearance.backgroundColorFocused;
    var backgroundColorHovered = btnAppearance.backgroundColorHovered;
    var backgroundColorPressed = btnAppearance.backgroundColorPressed;

    var backgroundBoxShadow = btnAppearance.backgroundBoxShadow;


    //caption
    var caption = btnAppearance.caption;
    var btnImageDefault = btnAppearance.imageDefault;
    var btnImageFocused = btnAppearance.imageFocused;
    var btnImageHovered = btnAppearance.imageHovered;
    var btnImagePressed = btnAppearance.imagePressed;

    //prevent to catch mouse events
    if (btnImageDefault) {
        btnImageDefault.style.pointerEvents = 'none';
    }
    if (btnImageFocused) {
        btnImageFocused.style.pointerEvents = 'none';
    }
    if (btnImageHovered) {
        btnImageHovered.style.pointerEvents = 'none';
    }
    if (btnImagePressed) {
        btnImagePressed.style.pointerEvents = 'none';
    }

    var _captionColorDefault = btnAppearance.captionColorDefault;
    var captionColorFocused = btnAppearance.captionColorFocused;
    var captionColorHovered = btnAppearance.captionColorHovered;
    var captionColorPressed = btnAppearance.captionColorPressed;

    var captionShiftYpx = btnAppearance.captionShiftYpx;
    var captionFontRatio = btnAppearance.captionFontRatio;

    //Set whether parent frame has focus or not internally
    divElement._hasFrameFocus = false;

    //Set whether mouse is pressing or not internally.
    divElement._isMouseDown = false;

    divElement.style.position = 'absolute';

    divElement.style.top = '0px';
    divElement.style.left = '0px';
    divElement.style.width = (width) + 'px';
    divElement.style.height = (height) + 'px';
    divElement.style.cursor = 'pointer';

    divElement.onmousedown = function (e) {

        divElement._isMouseDown = true;
        divElement._handleFocusDrawing('onmousedown');
    };

    divElement.onmouseout = function (e) {
        divElement._isMouseDown = false;
        divElement._handleFocusDrawing('onmouseout');
    };
    divElement.onmouseover = function (e) {

        divElement._handleHoverDrawing();
    };

    divElement.onmouseup = function (e) {

        divElement._isMouseDown = false;
        divElement._handleFocusDrawing('onmouseup');
    };


    /**
     * The parent notifies that the parent's frame got focus
     */
    divElement._onTakeFocus = function () {

        divElement._hasFrameFocus = true;
        divElement._handleFocusDrawing('_onTakeFocus');
    };

    /**
     * The parent notifies that the parent's frame has lost focus
     */
    divElement._onReleaseFocus = function () {

        divElement._hasFrameFocus = false;
        divElement._handleFocusDrawing('_onReleaseFocus');
    };

    /**
     *  To handle 2x2 matrix.
     *  (_hasFrameFocus true/false x _isMouseDown true/false)
     */
    divElement._handleFocusDrawing = function (evtName) {


        if (divElement._hasFrameFocus) {
            //When this element has focus

            if (divElement._isMouseDown) {
                //border
                divElement.style.borderColor = borderColorPressed;
                divElement.style.borderStyle = borderStylePressed;

                //background
                divElement.style.backgroundColor = backgroundColorPressed;

                //caption
                divElement.style.color = captionColorPressed;


                if (btnImagePressed) {
                    divElement.innerHTML = '';
                    divElement.appendChild(btnImagePressed);

                    if (evtName == 'onmousedown' && divElement.onclick) {
                        //divElement.onclick();
                    }
                }

            } else {
                //border
                divElement.style.borderColor = borderColorFocused;
                divElement.style.borderStyle = borderStyleFocused;

                //background
                divElement.style.backgroundColor = backgroundColorFocused;

                //caption
                divElement.style.color = captionColorFocused;

                if (btnImageFocused) {
                    divElement.innerHTML = '';
                    divElement.appendChild(btnImageFocused);
                }
            }

        } else {
            //When this element doesn't have focus
            if (divElement._isMouseDown) {
                //border
                divElement.style.borderColor = borderColorPressed;
                divElement.style.borderStyle = borderStylePressed;

                //background
                divElement.style.backgroundColor = backgroundColorPressed;

                //caption
                divElement.style.color = captionColorPressed;

                if (btnImagePressed) {
                    divElement.innerHTML = '';
                    divElement.appendChild(btnImagePressed);


                }

            } else {

                //border
                divElement.style.borderColor = borderColorDefault;
                divElement.style.borderStyle = borderStyleDefault;

                //background
                divElement.style.backgroundColor = backgroundColorDefault;

                //caption
                divElement.style.color = _captionColorDefault;

                if (btnImageDefault) {
                    divElement.innerHTML = '';
                    divElement.appendChild(btnImageDefault);

                }
            }
        }
    };

    divElement._handleHoverDrawing = function () {

        if (divElement._hasFrameFocus) {
            //When this element has focus
        } else {
            //When this element doesn't have focus
        }
        //border
        if (borderColorHovered) {
            divElement.style.borderColor = borderColorHovered;
        }
        if (borderStyleHovered) {
            divElement.style.borderStyle = borderStyleHovered;
        }

        //background
        if (backgroundColorHovered) {
            divElement.style.backgroundColor = backgroundColorHovered;
        }

        if (captionColorHovered) {
            //caption
            divElement.style.color = captionColorHovered;
        }
        if (btnImageHovered) {
            divElement.innerHTML = '';
            divElement.appendChild(btnImageHovered);

        }
    };


    divElement.style.textAlign = 'center';
    divElement.style.fontSize = (height * captionFontRatio) + 'px';

    divElement.style.lineHeight = (height) + 'px';

    divElement.style.borderWidth = '1px';

    if (borderWidth != null) {
        divElement.style.borderWidth = borderWidth + 'px';
    }

    if (backgroundBoxShadow != null) {
        divElement.style.boxShadow = backgroundBoxShadow;
    }

    divElement.style.borderRadius = (borderRadius + parseInt(divElement.style.borderWidth)) + 'px';

    var childMode = true;

    if (childMode && btnImageDefault) {
        divElement.innerHTML = '';
        divElement.appendChild(btnImageDefault);
    }
    else if (childMode && caption) {
        var span = document.createElement('span');
        //span.style.position='absolute';
        span.style.width = '100%';

        span.style.marginTop = captionShiftYpx + 'px';
        span.style.display = 'inline-block';
        span.style.textAlign = 'center';

        span.style.fontFamily = "sans-serif";


        span.appendChild(document.createTextNode(caption));

        divElement.appendChild(span);
    } else if (!childMode && caption) {
        divElement.style.paddingTop = captionShiftYpx + "px";
        divElement.appendChild(document.createTextNode(caption));
    }

    divElement._handleFocusDrawing();
    return divElement;

};

function CTextButtonAppearance() {

    var crossMark0 = '\u274c';

    this.size = 14;
    this.width = null;
    this.height = null;

    //border
    this.borderRadius = 2;
    this.borderWidth = 0;
    this.borderColorDefault = '#aaaaaa';
    this.borderColorFocused = this.borderColorDefault;
    this.borderColorHovered = null;
    this.borderColorPressed = this.borderColorDefault;

    this.borderStyleDefault = 'solid';
    this.borderStyleFocused = this.borderStyleDefault;
    this.borderStyleHovered = null;
    this.borderStylePressed = this.borderStyleDefault;

    this.backgroundBoxShadow = null;


    //background
    this.backgroundColorDefault = 'transparent';
    this.backgroundColorFocused = this.backgroundColorDefault;
    this.backgroundColorHovered = null;
    this.backgroundColorPressed = this.backgroundColorDefault;

    //caption
    this.caption = crossMark0;
    this.captionColorDefault = 'white';
    this.captionColorFocused = this.captionColorDefault;
    this.captionColorHovered = null;
    this.captionColorPressed = this.captionColorDefault;
    this.captionShiftYpx = 0;
    this.captionFontRatio = 1.0;


}

/**
 * end of CDomPartsBuilder class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * CSimpleLayoutAnimator class
 * Class for moving animation · scaling animation of frame.
 * <p>
 * @constructor
 */
function CSimpleLayoutAnimator() {

    this.fps = 30;
    this.durationMillis = 200;
    this.targetFrame = null;

    //current width/height
    this._crrWidth = 0;
    this._crrHeight = 0;
    this._toWidth = 0;
    this._toHeight = 0;

    //current position(x,y)
    //this._crrX = 0;
    //this._crrY = 0;
    this._toX = 0;
    this._toY = 0;


    this.pinnedAnimationEnabled = false;
    this._pinX = 0;
    this._pinY = 0;
    this._pinAnchor = null;

}

/**
 * Set CIFrame object to be resized
 * @param ciframe
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.set = function (ciframe) {
    var me = this;
    me.targetFrame = ciframe;


    me.fromWidth(ciframe.getWidth());
    me.fromHeight(ciframe.getHeight());

    me.toWidth(ciframe.getWidth());
    me.toHeight(ciframe.getHeight());

    var crrPos = ciframe.getPosition();
    me.fromPosition(crrPos.x, crrPos.y, crrPos.anchor);


    return me;

};

/**
 * Get CIFrame object
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.get = function () {
    var me = this;
    return me.targetFrame;
};
/**
 * Set animation duration time millis
 * @param durationMillis
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.setDuration = function (durationMillis) {
    var me = this;
    me.durationMillis = durationMillis;
    return me;
};

/**
 * Set expected FPS
 * @param fps
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.setFPS = function (fps) {
    var me = this;
    me.fps = fps;
    return me;
};

/**
 * Set PIN position
 * @param x
 * @param y
 * @param anchor Position where animation starts from.Expected parameters as follows.
 'LEFT_TOP':Default.Specify the position starting from the upper left.
 'CENTER_TOP'
 'RIGHT_TOP'
 'LEFT_CENTER'
 'CENTER_CENTER'
 'RIGHT_CENTER'
 'LEFT_BOTTOM'
 'CENTER_BOTTOM'
 'RIGHT_BOTTOM'
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromPosition = function (x, y, anchor) {
    var me = this;
    me.pinnedAnimationEnabled = true;

    me._pinX = x;
    me._pinY = y;

    me.toPosition(x, y);

    if (anchor) {
        me._pinAnchor = anchor;
    }
    return me;
};
/**
 * Set resizeFrom width
 * @param fromWidth
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromWidth = function (fromWidth) {
    var me = this;
    me._crrWidth = fromWidth;

    return me;
};

/**
 * Set resizeFrom height
 * @param fromHeight
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromHeight = function (fromHeight) {
    var me = this;
    me._crrHeight = fromHeight;

    return me;
};

/**
 * Set resizeTo width
 * @param toWidth
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toWidth = function (toWidth) {
    var me = this;
    me._toWidth = toWidth;

    return me;
};

/**
 * Set resizeTo height
 * @param toHeight
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toHeight = function (toHeight) {
    var me = this;
    me._toHeight = toHeight;
    return me;
};

/**
 * Set move to position
 * @param x
 * @param y
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toPosition = function (x, y) {
    var me = this;
    me._toX = x;
    me._toY = y;
    return me;
};

/**
 * Set move to x
 * @param x
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toX = function (x) {
    var me = this;
    me._toX = x;
    return me;
};

/**
 * Set move to y
 * @param t
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toY = function (t) {
    var me = this;
    me._toY = t;
    return me;
};


CSimpleLayoutAnimator.prototype.start = function (waitMillis) {


    var me = this;

    var fromWidth = me._crrWidth;
    var fromHeight = me._crrHeight;

    var fromX = me._pinX;
    var fromY = me._pinY;


    return new Promise(function (resolve, reject) {


        var numOfSteps = parseInt(me.fps * (me.durationMillis / 1000));


        var deltaWidth = (me._toWidth - fromWidth) / numOfSteps;
        var deltaHeight = (me._toHeight - fromHeight) / numOfSteps;

        var deltaX = (me._toX - fromX) / numOfSteps;
        var deltaY = (me._toY - fromY) / numOfSteps;


        var unitMillis = me.durationMillis / numOfSteps;

        var idx = 0;


        function loop() {
            var timer = new CTimer();

            timer.setIntervalMillis(unitMillis);

            timer.setCallback(function (timer) {

                if (idx == numOfSteps) {

                    var _width = me._toWidth;
                    var _height = me._toHeight;

                    var _x = fromX + deltaX * idx;
                    var _y = fromY + deltaY * idx;

                    if (me.pinnedAnimationEnabled) {
                        //me.targetFrame._setPositionInternally(me._pinX, me._pinY, me._pinAnchor, _width, _height);

                        me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
                    }

                    me.targetFrame.resizeDirect(_width, _height);

                    me._crrWidth = _width;
                    me._crrHeight = _height;

                    me._pinX = _x;
                    me._pinY = _y;
                }

                if (idx == (numOfSteps + 1)) {
                    //Stop timer after last draw update.
                    timer.stopTimer();
                    resolve(me);
                    return;
                }


                var _width = fromWidth + deltaWidth * idx;
                var _height = fromHeight + deltaHeight * idx;

                var _x = fromX + deltaX * idx;
                var _y = fromY + deltaY * idx;

                if (me.pinnedAnimationEnabled) {
                    //me.targetFrame._setPositionInternally(me._pinX, me._pinY, me._pinAnchor, _width, _height);
                    me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
                }

                me.targetFrame.resizeDirect(_width, _height);

                if (idx == 0) {
                    me.targetFrame.show();
                }

                idx++;
            });


            timer.startTimer();
        }

        if (waitMillis) {

            var waiter = new CTimer();
            waiter.setIntervalMillis(waitMillis);
            waiter.setCallback(function (_timer) {
                _timer.stopTimer();

                loop();
            });
            waiter.startTimer();
        } else {
            loop();
        }


    });

};//start

/**
 * end of CSimpleLayoutAnimator class
 */
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
/**
 * CTimer class<br>
 * Copyright 2007- Tom Misawa, riversun.org@gmail.com
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
 * How to use:
 *  var timer = new CTimer();
 *    var value = 0;
 *
 *    timer.setCallback(function (timerObj) {
 *        value++;
 *        console.log(value);
 *        if (value == 100) {
 *            timerObj.stopTimer();
 *        }
 *    });
 *    timer.setIntervalMillis(100);
 *    timer.startTimer();
 *
 * @author Tom Misawa (riversun.org@gmail.com)
 */

var CTimer =
    (function () {
        function CTimer() {
            var me = this;

            me._timerId = null;
            me._isRunning = false;
            me._timerInterval = 0;

            me._internalCallback = _internalCallback;
            me._timerMethod = null;


            function _internalCallback() {
                if (me._timerMethod) {
                    me._timerMethod(me);
                }
                if (me._isRunning) {
                    clearTimeout(me._timerId);
                    me._timerId = setTimeout(me._internalCallback, me._timerInterval);
                }
            }
        }

        CTimer.prototype.setCallback = function (callback_func) {
            var me = this;
            me._timerMethod = callback_func;
            return me;
        };

        CTimer.prototype.setIntervalMillis = function (interval) {
            var me = this;
            me._timerInterval = interval;
            return me;
        };

        CTimer.prototype.stopTimer = function () {
            var me = this;
            me._isRunning = false;
            return me;
        };

        CTimer.prototype.startTimer = function () {
            var me = this;
            if (me._timerInterval > 0) {
                me._timerId = setTimeout(me._internalCallback, me._timerInterval);
                me._isRunning = true;

            }
            return me;
        };


        return CTimer;
    })();
/**
 * end of CTimer class
 */
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
Object.freeze(DEF);

    

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvanNmcmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHYTs7QUFFYixZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qjs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTs7QUFFQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUEseUNBQXlDO0FBQ3pDO0FBQ0E7O0FBRUE7OztBQUdBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOzs7QUFHTDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOERBQThEO0FBQzlELDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0EsS0FBSzs7O0FBR0w7OztBQUdBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7O0FBR0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOzs7QUFHYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUwsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzZnJhbWUtMS4zLjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qc2ZyYW1lLmpzXCIpO1xuIiwiLyoqXG4gKiBKU0ZyYW1lIHZlci4xLjIuMCAtIEEgamF2YXNjcmlwdCBmbG9hdGluZyB3aW5kb3cgbGlicmFyeVxuICpcbiAqIENvcHlyaWdodCAyMDA3LTIwMTcgVG9tIE1pc2F3YSwgcml2ZXJzdW4ub3JnQGdtYWlsLmNvbVxuICogQ29weXJpZ2h0IDIwMDctMjAxNyB3ZWIyZHJpdmVyLmNvbVxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbiAqIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlXG4gKiBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZVxuICogU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELFxuICogIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBXG4gKiBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1JcbiAqIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAqIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1JcbiAqIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICovXG5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgREVGID0ge30sXG4gICAgQ0FMSUdOID0ge307XG5cbkNBTElHTi5MRUZUX1RPUCA9ICdMRUZUX1RPUCc7XG5DQUxJR04uSENFTlRFUl9UT1AgPSAnQ0VOVEVSX1RPUCc7XG5DQUxJR04uUklHSFRfVE9QID0gJ1JJR0hUX1RPUCc7XG5DQUxJR04uTEVGVF9WQ0VOVEVSID0gJ0xFRlRfQ0VOVEVSJztcbkNBTElHTi5IQ0VOVEVSX1ZDRU5URVIgPSAnQ0VOVEVSX0NFTlRFUic7XG5DQUxJR04uQ0VOVEVSID0gQ0FMSUdOLkhDRU5URVJfVkNFTlRFUjtcbkNBTElHTi5SSUdIVF9WQ0VOVEVSID0gJ1JJR0hUX0NFTlRFUic7XG5DQUxJR04uTEVGVF9CT1RUT00gPSAnTEVGVF9CT1RUT00nO1xuQ0FMSUdOLkhDRU5URVJfQk9UVE9NID0gJ0NFTlRFUl9CT1RUT00nO1xuQ0FMSUdOLlJJR0hUX0JPVFRPTSA9ICdSSUdIVF9CT1RUT00nO1xuXG5cbi8qKlxuICogQ0ZyYW1lQXBwZWFyYW5jZSBjbGFzczxicj5cbiAqIEFwcGVhcmFuY2UgTW9kZWwgQ2xhc3MgZm9yIEZyYW1lXG4gKlxuICovXG5mdW5jdGlvbiBDRnJhbWVBcHBlYXJhbmNlKCkge1xuXG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIHRoaXMuc2hvd1RpdGxlQmFyID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dDbG9zZUJ1dHRvbiA9IHRydWU7XG4gICAgdGhpcy50aXRsZUJhckNhcHRpb24gPSAnJztcbiAgICB0aGlzLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplID0gJzEycHgnO1xuICAgIHRoaXMudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodCA9ICdib2xkJztcbiAgICB0aGlzLnRpdGxlQmFySGVpZ2h0ID0gJzI0cHgnO1xuXG4gICAgdGhpcy51c2VJZnJhbWUgPSBmYWxzZTtcbiAgICB0aGlzLnVzZUZyYW1lID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0VXNlSUZyYW1lID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIG1lLnVzZUlmcmFtZSA9IHZhbHVlO1xuICAgICAgICBtZS51c2VGcmFtZSA9ICF2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG1lO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiBmcm9tIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIGNhcHRpb24uIElmIHRoaXMgdmFsdWUgaXMgbnVsbCwgY2FwdGlvbiB3aWxsIGJlIGNlbnRlcmVkLlxuICAgICAqL1xuICAgIHRoaXMudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbiA9ICc1cHgnO1xuXG4gICAgdGhpcy50aXRsZUJhckNvbG9yRGVmYXVsdCA9ICdsaWdodGdyYXknO1xuICAgIHRoaXMudGl0bGVCYXJDb2xvckZvY3VzZWQgPSAnI2QzZTFlZSc7XG4gICAgdGhpcy50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQgPSAnJztcbiAgICB0aGlzLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRm9jdXNlZCA9ICcnO1xuXG4gICAgdGhpcy50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQgPSAnMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKSc7XG4gICAgdGhpcy50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQgPSBudWxsO1xuXG4gICAgdGhpcy5mcmFtZUJvcmRlclJhZGl1cyA9ICc2cHgnO1xuXG4gICAgdGhpcy5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCA9ICcxcHgnO1xuICAgIHRoaXMuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQgPSB0aGlzLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0O1xuXG4gICAgdGhpcy5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdCA9ICdyZ2JhKDEsIDEsIDEsIDAuMiknO1xuICAgIHRoaXMuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQgPSB0aGlzLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0O1xuXG4gICAgdGhpcy5mcmFtZUJvcmRlclN0eWxlID0gJ3NvbGlkJztcbiAgICB0aGlzLmZyYW1lQm94U2hhZG93ID0gJzJweCAzcHggMTZweCByZ2JhKDAsMCwwLC42KSc7XG4gICAgdGhpcy5mcmFtZUJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cbiAgICB0aGlzLl9wYXJ0c0J1aWxkZXIgPSBudWxsO1xuXG5cbiAgICB0aGlzLmZyYW1lQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgdGhpcy5mcmFtZUhlaWdodEFkanVzdCA9IDE7XG5cbiAgICB0aGlzLmdldEZyYW1lSW5uZXJCb3JkZXJSYWRpdXMgPSBmdW5jdGlvbiAocmVmLCBoYXNGb2N1cykge1xuXG4gICAgICAgIGlmICghcmVmKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0ZvY3VzKSB7XG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KHJlZi5mcmFtZUJvcmRlclJhZGl1cywgMTApIC0gcGFyc2VJbnQocmVmLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkLCAxMCkpICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHBhcnNlSW50KHJlZi5mcmFtZUJvcmRlclJhZGl1cywgMTApIC0gcGFyc2VJbnQocmVmLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0LCAxMCkpICsgJ3B4JztcbiAgICB9O1xuXG5cbiAgICB0aGlzLm9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvL0FkZCBjbG9zZSBidXR0b24gaWYgbmVlZGVkXG4gICAgICAgIGlmIChtZS5zaG93Q2xvc2VCdXR0b24pIHtcbiAgICAgICAgICAgIHZhciBwYXJ0c0J1aWxkZXIgPSBtZS5nZXRQYXJ0c0J1aWxkZXIoKSxcbiAgICAgICAgICAgICAgICBjcm9zc01hcmswID0gJ1xcdTI3NGMnLFxuICAgICAgICAgICAgICAgIGNyb3NzTWFyazEgPSAnXFx1MjcxNicsXG4gICAgICAgICAgICAgICAgY3Jvc3NNYXJrMiA9ICdcXHUyNzRlJztcblxuXG4gICAgICAgICAgICB2YXIgYnRuQXBwZWFyYW5jZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7XG5cbiAgICAgICAgICAgIGJ0bkFwcGVhcmFuY2Uuc2l6ZSA9IDE0O1xuICAgICAgICAgICAgYnRuQXBwZWFyYW5jZS5jYXB0aW9uU2hpZnRZcHggPSAwO1xuICAgICAgICAgICAgYnRuQXBwZWFyYW5jZS5jYXB0aW9uRm9udFJhdGlvID0gMS4wO1xuICAgICAgICAgICAgYnRuQXBwZWFyYW5jZS5ib3JkZXJSYWRpdXMgPSAyO1xuICAgICAgICAgICAgYnRuQXBwZWFyYW5jZS5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIGJ0bkFwcGVhcmFuY2UuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICBidG5BcHBlYXJhbmNlLmNhcHRpb24gPSBjcm9zc01hcmsxO1xuXG4gICAgICAgICAgICBidG5BcHBlYXJhbmNlLmNhcHRpb25Db2xvckRlZmF1bHQgPSAnZ3JheSc7XG4gICAgICAgICAgICBidG5BcHBlYXJhbmNlLmNhcHRpb25Db2xvckZvY3VzZWQgPSAnZ3JheSc7XG4gICAgICAgICAgICBidG5BcHBlYXJhbmNlLmNhcHRpb25Db2xvckhvdmVyZWQgPSAnc2lsdmVyJztcbiAgICAgICAgICAgIGJ0bkFwcGVhcmFuY2UuY2FwdGlvbkNvbG9yUHJlc3NlZCA9ICdibGFjayc7XG5cbiAgICAgICAgICAgIGJ0bkFwcGVhcmFuY2UuYm9yZGVyV2lkdGggPSAwO1xuICAgICAgICAgICAgYnRuQXBwZWFyYW5jZS5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2FhYWFhYSc7XG4gICAgICAgICAgICBidG5BcHBlYXJhbmNlLmJvcmRlclN0eWxlID0gJ3NvbGlkJztcblxuICAgICAgICAgICAgdmFyIGNsb3NlQnRuRWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbihidG5BcHBlYXJhbmNlKTtcbiAgICAgICAgICAgIHZhciBlbGVMZWZ0ID0gLTEwO1xuICAgICAgICAgICAgdmFyIGVsZVRvcCA9IC0yMDtcbiAgICAgICAgICAgIHZhciBlbGVBbGlnbiA9ICdSSUdIVF9UT1AnO1xuXG4gICAgICAgICAgICAvL2Nsb3NlQnV0dG9uIGlzIGEgc3BlY2lhbCBuYW1lXG4gICAgICAgICAgICB2YXIgZnJhbWVDb21wb25lbnQgPSBtZS5hZGRGcmFtZUNvbXBvbmVudCgnY2xvc2VCdXR0b24nLCBjbG9zZUJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG59XG5cblxuQ0ZyYW1lQXBwZWFyYW5jZS5wcm90b3R5cGUuZ2V0UGFydHNCdWlsZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgaWYgKG1lLl9wYXJ0c0J1aWxkZXIgPT09IG51bGwpIHtcbiAgICAgICAgbWUuX3BhcnRzQnVpbGRlciA9IG5ldyBDRG9tUGFydHNCdWlsZGVyKCk7XG4gICAgfVxuICAgIHJldHVybiBtZS5fcGFydHNCdWlsZGVyO1xufTtcbkNGcmFtZUFwcGVhcmFuY2UucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5vbkluaXRpYWxpemUoKTtcbn07XG5cbi8qKlxuICogIEFkZCBGcmFtZUNvbXBvbmVudCBpbnRvIGZyYW1lXG4gKiAgRnJhbWVDb21wb25lbnQgaXMgYXR0YWNoZWQgdG8gRnJhbWUgYW5kIGl0IG1vdmVzIHdpdGggRnJhbWUuXG4gKlxuICogQHBhcmFtIGlkXG4gKiBAcGFyYW0gbXlEb21FbGVtZW50IERPTSBlbGVtZW50LlxuICogQHBhcmFtIHggIFJlbGF0aXZlIHggY29vZGluYXRlIGZyb20gdGhlIHNuYXAgcG9zaXRpb24gc3BlY2lmaWVkIGJ5IGFsaWdubWVudFxuICogQHBhcmFtIHkgIFJlbGF0aXZlIHkgY29vZGluYXRlIGZyb20gdGhlIHNuYXAgcG9zaXRpb24gc3BlY2lmaWVkIGJ5IGFsaWdubWVudFxuICogQHBhcmFtIGFsaWduICdMRUZUX1RPUCcgJ0NFTlRFUl9UT1AnICdSSUdIVF9UT1AnICdMRUZUX0NFTlRFUicgJ0NFTlRFUl9DRU5URVInICdSSUdIVF9DRU5URVInICdMRUZUX0JPVFRPTScgJ0NFTlRFUl9CT1RUT00nICdSSUdIVF9CT1RUT00nXG4gKiBAcmV0dXJucyB7Q0ZyYW1lQ29tcG9uZW50fVxuICpcbiAqL1xuQ0ZyYW1lQXBwZWFyYW5jZS5wcm90b3R5cGUuYWRkRnJhbWVDb21wb25lbnQgPSBmdW5jdGlvbiAoaWQsIG15RG9tRWxlbWVudCwgeCwgeSwgYWxpZ24pIHtcblxuICAgIC8vKGlkLCBmcmFtZSwgaHRtbEVsZW1lbnQsIHgsIHksIGFsaWduKVxuICAgIHZhciBmcmFtZUNvbXBvbmVudCA9IG5ldyBDRnJhbWVDb21wb25lbnQoaWQsIG15RG9tRWxlbWVudCwgeCwgeSwgYWxpZ24pO1xuXG4gICAgaWYgKG15RG9tRWxlbWVudC5fb25UYWtlRm9jdXMgJiYgbXlEb21FbGVtZW50Ll9vblJlbGVhc2VGb2N1cykge1xuICAgICAgICAvL2lmIHRoaXMgRE9NIGVsZW1lbnQgaGFzIHNwZWNpYWwgbWV0aG9kIGZvciBmb2N1c1xuICAgICAgICAvL3NldCBmb2N1cyBjYWxsYmFja1xuICAgICAgICBmcmFtZUNvbXBvbmVudC5zZXRGb2N1c0NhbGxiYWNrKG15RG9tRWxlbWVudC5fb25UYWtlRm9jdXMsIG15RG9tRWxlbWVudC5fb25SZWxlYXNlRm9jdXMpO1xuICAgIH1cblxuICAgIHRoaXMuZnJhbWVDb21wb25lbnRzLnB1c2goZnJhbWVDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIGZyYW1lQ29tcG9uZW50O1xufTtcblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cbi8qKlxuICogIEVuZCBvZiBDRnJhbWVBcHBlYXJhbmNlIGNsYXNzXG4gKi9cblxuLyoqXG4gKiBJbmhlcml0YW5jZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSBzdWJDbGFzc1xuICogQHBhcmFtIGJhc2VDbGFzc1xuICovXG5mdW5jdGlvbiBpbmhlcml0KHN1YkNsYXNzLCBiYXNlQ2xhc3MpIHtcblxuICAgIGZ1bmN0aW9uIGNsYXp6KCkge1xuICAgIH1cblxuICAgIGNsYXp6LnByb3RvdHlwZSA9IGJhc2VDbGFzcy5wcm90b3R5cGU7XG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gbmV3IGNsYXp6KCk7XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgICBzdWJDbGFzcy5zdXBlckNvbnN0cnVjdG9yID0gYmFzZUNsYXNzO1xuICAgIHN1YkNsYXNzLnN1cGVyQ2xhc3MgPSBiYXNlQ2xhc3MucHJvdG90eXBlO1xuXG59XG5cbi8qKlxuICogRW5kIG9mIGluaGVyaXRhbmNlIGZ1bmN0aW9uXG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cbi8qKlxuICogREVGSU5JVElPTlNcbiAqL1xuREVGLkNCRUFOID0ge307XG5ERUYuQ0JFQU4uSFRNTF9FTEVNRU5UID0gJ3NwYW4nO1xuREVGLkNCRUFOLkhUTUxfRUxFTUVOVF9JRF9QUkVGSVggPSAnaHRtbEVsZW1lbnRfJztcbkRFRi5DQkVBTi5UWVBFX05BTUUgPSAnYmVhbic7XG5cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cblxuLyoqXG4gKiBDQmVhbkZyYW1lIENsYXNzPHA+XG4gKiBUaGUgc21hbGxlc3Qgd2luZG93LiBJdCBpcyByZXNwb25zaWJsZSBmb3IgYmFzaWMgcHJvY2Vzc2luZyBvbmx5LlxuICpcbiAqIEBwYXJhbSBiZWFuSWQgaWQgb2YgdGhpcyBzbWFsbCB3aW5kb3dcbiAqIEBwYXJhbSBsZWZ0XG4gKiBAcGFyYW0gdG9wXG4gKiBAcGFyYW0gd2lkdGhcbiAqIEBwYXJhbSBoZWlnaHRcbiAqIEBwYXJhbSB6aW5kZXhcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDQmVhbkZyYW1lKGJlYW5JZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCB6aW5kZXgpIHtcblxuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICAvL2ZpZWxkc1xuICAgIG1lLmlkID0gYmVhbklkO1xuICAgIG1lLnByb3BlcnR5ID0ge307XG5cbiAgICBtZS5wYXJlbnRDYW52YXMgPSBudWxsO1xuICAgIG1lLmh0bWxFbGVtZW50ID0gbnVsbDtcblxuXG4gICAgLy9pbml0aWFsaXplXG4gICAgbWUuaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KERFRi5DQkVBTi5IVE1MX0VMRU1FTlQpO1xuICAgIG1lLmh0bWxFbGVtZW50LmlkID0gREVGLkNCRUFOLkhUTUxfRUxFTUVOVF9JRF9QUkVGSVggKyBiZWFuSWQ7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSBwYXJzZUludChsZWZ0LCAxMCkgKyAncHgnO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IHBhcnNlSW50KHRvcCwgMTApICsgJ3B4JztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHdpZHRoLCAxMCkgKyAncHgnO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IHBhcnNlSW50KGhlaWdodCwgMTApICsgJ3B4JztcblxuXG4gICAgLy9aaW5kZXggbWF5IGJlY29tZSAndW5kZWZpbmVkJyBpbiBzb21lIGNhc2VzLlxuICAgIGlmICh6aW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4ID0gemluZGV4O1xuICAgIH1cbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjMDAwMDAwJztcblxuICAgIC8vSWYgSSBzZXQgYSBsYXJnZXIgZm9udCBzaXplLCB3aWR0aCBhbmQgaGVpZ2h0IG9mIHdpbmRvdyB3aWxsIGJlIGFmZmVjdGVkLi4uLlxuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gJzFweCc7XG5cbiAgICAvL1JlZmVyIHBhcmVudHMgdG8gZWFjaCBvdGhlci4oc291Z28tc2Fuc2hvKVxuICAgIG1lLmh0bWxFbGVtZW50LnBhcmVudCA9IG1lO1xuXG4gICAgLy9Ob3RlIHRoYXQgJ21vdXNlRG93bicgaXMgbWFwcGVkIHRvICdvbm1vdXNlZG93bicgb2YgaHRtbEVsZW1lbnQsXG4gICAgLy9zbyB3aGVuICdvbm1vdXNlRG93bicgZmlyZXMgLHRoZSAndGhpcycgd2lsbCBpbmRpY2F0ZSAnaHRtbEVsZW1lbnQnXG4gICAgbWUuaHRtbEVsZW1lbnQub25tb3VzZWRvd24gPSBtZS5vbm1vdXNlRG93bjtcblxuICAgIC8vVHlwZSBuYW1lIG9mIHRoaXMgY2xhc3NcbiAgICBtZS5odG1sRWxlbWVudC50eXBlTmFtZSA9IERFRi5DQkVBTi5UWVBFX05BTUU7XG5cbiAgICAvL1NwZWNpYWwgZmllbGQgaW5kaWNhdGluZyB1c2FnZSBvZiB0aGlzIGNsYXNzXG4gICAgbWUuaHRtbEVsZW1lbnQudXNhZ2UgPSAnbm90aGluZyc7XG5cbiAgICAvL1doZXRoZXIgaXQgY2FuIG1vdmUgb3V0c2lkZSB0aGUgZnJhbWUod2FrdSkuXG4gICAgbWUuaHRtbEVsZW1lbnQuaXNSYW5nZUxpbWl0ZWQgPSBmYWxzZTtcblxuICAgIC8vTW92ZW1lbnQgbWFnbmlmaWNhdGlvbiBpbiB0aGUgWCBkaXJlY3Rpb25cbiAgICAvLyhJZiBpdCBpcyAwLCBpdCBjYW4gbm90IG1vdmUgaW4gdGhlIFggZGlyZWN0aW9uLilcbiAgICBtZS5odG1sRWxlbWVudC5hcmdYID0gMTtcblxuICAgIC8vTW92ZW1lbnQgbWFnbmlmaWNhdGlvbiBpbiBZIGRpcmVjdGlvblxuICAgIC8vIChJZiBpdCBpcyAwLCBpdCBjYW4gbm90IG1vdmUgaW4gWSBkaXJlY3Rpb24pXG4gICAgbWUuaHRtbEVsZW1lbnQuYXJnWSA9IDE7XG4gICAgbWUuZXh0ZXJuYWxBcmVhQ2xpY2tlZExpc3RlbmVyID0gbnVsbDtcbn1cblxuLyoqXG4gKiBTZXQgd2hldGhlciB0aGUgZnJhbWUgY2FuIGJlIG1vdmVkIHdoaWxlIGRyYWdnaW5nIHdpdGggdGhlIG1vdXNlXG4gKiBAcGFyYW0gZW5hYmxlZFxuICovXG5DQmVhbkZyYW1lLnByb3RvdHlwZS5zZXRNb3ZhYmxlID0gZnVuY3Rpb24gKGVuYWJsZWQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuYXJnWCA9IDE7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LmFyZ1kgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LmFyZ1ggPSAwO1xuICAgICAgICBtZS5odG1sRWxlbWVudC5hcmdZID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1lO1xufTtcblxuXG5DQmVhbkZyYW1lLnByb3RvdHlwZS5zZXRQYXJlbnRDYW52YXMgPSBmdW5jdGlvbiAocGFyZW50Q2FudmFzKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5wYXJlbnRDYW52YXMgPSBwYXJlbnRDYW52YXM7XG4gICAgbWUuaHRtbEVsZW1lbnQucGFyZW50Q2FudmFzID0gbWUucGFyZW50Q2FudmFzO1xufTtcbkNCZWFuRnJhbWUucHJvdG90eXBlLnNldE9uRXh0ZXJuYWxBcmVhQ2xpY2tlZExpc3RlbmVyID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5leHRlcm5hbEFyZWFDbGlja2VkTGlzdGVuZXIgPSBsaXN0ZW5lcjtcbn07XG5DQmVhbkZyYW1lLnByb3RvdHlwZS5vbkJvZHlDbGlja2VkID0gZnVuY3Rpb24gKGUpIHtcblxuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIGNsaWNrWCA9IGUucGFnZVg7XG4gICAgdmFyIGNsaWNrWSA9IGUucGFnZVk7XG5cbiAgICB2YXIgbGVmdCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQpO1xuICAgIHZhciB0b3AgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3ApO1xuICAgIHZhciB3aWR0aCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoKTtcbiAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0KTtcblxuICAgIGlmIChsZWZ0IDwgY2xpY2tYICYmIGNsaWNrWCA8IChsZWZ0ICsgd2lkdGgpICYmIHRvcCA8IGNsaWNrWSAmJiAoY2xpY2tZIDwgdG9wICsgaGVpZ2h0KSkge1xuICAgICAgICAvLy0gY2xpY2tlZCBpbnRlcm5hbCBhcmVhIG9mIHRoaXMgZnJhbWVcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLy0gY2xpY2tlZCBleHRlcm5hbCBhcmVhIG9mIHRoaXMgZnJhbWVcbiAgICAgICAgaWYgKG1lLmV4dGVybmFsQXJlYUNsaWNrZWRMaXN0ZW5lcikge1xuICAgICAgICAgICAgbWUuZXh0ZXJuYWxBcmVhQ2xpY2tlZExpc3RlbmVyKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG59O1xuQ0JlYW5GcmFtZS5wcm90b3R5cGUub25tb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgLy9UaGlzICd0aGlzJyBtZWFucyBhIGh0bWxFbGVtZW50XG4gICAgdmFyIHJlZkh0bWxFbGVtZW50ID0gdGhpcztcblxuXG4gICAgLy9SZXRyaWV2ZSBDQmVhbkZyYW1lXG4gICAgdmFyIHJlZkNCZWFuRnJhbWUgPSByZWZIdG1sRWxlbWVudC5wYXJlbnQ7XG5cbiAgICBpZiAoZS5idXR0b24gPT0gMCkge1xuICAgICAgICByZWZIdG1sRWxlbWVudC5wYXJlbnRDYW52YXMuY3VycmVudE9iamVjdCA9IHJlZkh0bWxFbGVtZW50O1xuXG4gICAgICAgIC8vQnJpbmcgdGhlIGN1cnJlbnQgYmVhbiB0byB0aGUgdG9wXG4gICAgICAgIHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcy5wdWxsVXAocmVmQ0JlYW5GcmFtZS5pZCk7XG5cbiAgICB9XG4gICAgZWxzZSBpZiAoZS5idXR0b24gPT0gMikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzLm9mZnNldFggPSBlLnBhZ2VYIC0gcGFyc2VJbnQocmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzLmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdCwgMTApO1xuICAgIHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcy5vZmZzZXRZID0gZS5wYWdlWSAtIHBhcnNlSW50KHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcy5jdXJyZW50T2JqZWN0LnN0eWxlLnRvcCwgMTApO1xuXG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuLyoqXG4gKiBFbmQgb2YgQ0JlYW5GcmFtZSBDbGFzcyA8cD5cbiAqL1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuXG5ERUYuQ0FOVkFTID0ge307XG5ERUYuQ0FOVkFTLkhUTUxfRUxFTUVOVCA9ICdkaXYnO1xuREVGLkNBTlZBUy5XSURUSF9BREpVU1RfMjAxODA3MjIgPSAyO1xuREVGLkNBTlZBUy5IRUlHSFRfQURKVVNUXzIwMTgwNzIyID0gMztcblxuLyoqXG4gKiBDQ2FudmFzIGNsYXNzXG4gKiBBIGNhbnZhcyBpcyBhIHBsYWNlIHdoZXJlIHdpbmRvd3MgYXJlIGFycmFuZ2VkLCB3aGVyZSB5b3UgY2FuIGRyYWcgYW5kIG1vdmUgZnJlZWx5LlxuICpcbiAqIEBwYXJhbSBwYXJlbnRFbGVtZW50XG4gKiBAcGFyYW0gY2FudmFzSWRcbiAqIEBwYXJhbSBsZWZ0XG4gKiBAcGFyYW0gdG9wXG4gKiBAcGFyYW0gd2lkdGhcbiAqIEBwYXJhbSBoZWlnaHRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDQ2FudmFzKHBhcmVudEVsZW1lbnQsIGNhbnZhc0lkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpIHtcblxuICAgIC8vRXZlbnQgZGF0YSB0byBiZSB0cmFuc21pdHRlZFxuICAgIGZ1bmN0aW9uIEV2ZW50RGF0YSgpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy5zY3JlZW5YID0gMDtcbiAgICAgICAgdGhpcy5zY3JlZW5ZID0gMDtcbiAgICAgICAgdGhpcy5kZWx0YVggPSAwO1xuICAgICAgICB0aGlzLmRlbHRhWSA9IDA7XG4gICAgICAgIHRoaXMuaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRhcmdldFR5cGVOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy50YXJnZXRVc2FnZSA9IG51bGw7XG4gICAgICAgIHRoaXMudGFyZ2V0T2JqZWN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgbWUuY3VycmVudE9iamVjdCA9IG51bGw7XG4gICAgbWUub25Ub3BPYmplY3QgPSBudWxsO1xuICAgIG1lLm9mZnNldFggPSAwO1xuICAgIG1lLm9mZnNldFkgPSAwO1xuXG5cbiAgICAvL09iamVjdCB3aGljaCBnZW5lcmF0ZWQgJ21vdXNlRG93bicgZXZlbnQgYXQgdGhlIHZlcnkgYmVnaW5uaW5nKGljaGliYW4tc2Fpc2hvKVxuICAgIG1lLm1vdXNlRG93blNvdXJjZSA9IG51bGw7XG5cbiAgICBtZS5pZCA9IGNhbnZhc0lkO1xuICAgIG1lLmNhbnZhc0VsZW1lbnQgPSBudWxsO1xuICAgIG1lLnBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50O1xuICAgIG1lLmJlYW5MaXN0ID0gbmV3IEFycmF5KCk7XG5cbiAgICAvLzIwMTgwNzI0W3N0YXJ0XVxuICAgIG1lLmJlYW5JZE5hbWUgPSB7fTsvL2tleTpiZWFuSWQgdmFsdWU6YmVhbk5hbWVcbiAgICBtZS5iZWFuTmFtZUlkID0ge307Ly9rZXk6YmVhbk5hbWUgdmFsdWU6YmVhbklkXG4gICAgLy8yMDE4MDcyNFtlbmRdXG5cbiAgICBtZS5ldmVudERhdGEgPSBuZXcgRXZlbnREYXRhKCk7XG5cblxuICAgIG1lLmJhc2VaSW5kZXggPSAwO1xuICAgIG1lLnNldEJhc2VaSW5kZXggPSBmdW5jdGlvbiAoYmFzZVpJbmRleCkge1xuICAgICAgICBtZS5iYXNlWkluZGV4ID0gYmFzZVpJbmRleDtcbiAgICB9O1xuICAgIG1lLmdldEJhc2VaSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtZS5iYXNlWkluZGV4O1xuICAgIH07XG5cblxuICAgIG1lLmNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KERFRi5DQU5WQVMuSFRNTF9FTEVNRU5UKTtcbiAgICAvL0FkZGVkIDIwMTgvNy8xNlxuICAgIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUuekluZGV4ID0gMjAwMDtcbiAgICBtZS5jYW52YXNFbGVtZW50LmlkID0gbWUuaWQ7XG4gICAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLmxlZnQgPSBwYXJzZUludChsZWZ0KSArICdweCc7XG4gICAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS50b3AgPSBwYXJzZUludCh0b3ApICsgJ3B4JztcbiAgICAvLzIwMTgwNzIyKOeUu+mdouOBruS4i+OBq+mAj+aYjumDqOWIhuOBjOOBp+OBjeOBpuOBl+OBvuOBhuOBruOBp+OAgeiqv+aVtOWApOOCkuOBhOOCjOOBnylcbiAgICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoID0gKHBhcnNlSW50KHdpZHRoKSArIERFRi5DQU5WQVMuV0lEVEhfQURKVVNUXzIwMTgwNzIyKSArICdweCc7XG4gICAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAocGFyc2VJbnQoaGVpZ2h0KSArIERFRi5DQU5WQVMuSEVJR0hUX0FESlVTVF8yMDE4MDcyMikgKyAncHgnO1xuICAgIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gJ25vbmUnO1xuICAgIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUubWFyZ2luID0gJzBweCc7XG4gICAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9ICcwcHgnO1xuICAgIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cbiAgICAvL0FkZCB0aGUgQ2FudmFzJ3MgaHRtbCBlbGVtZW50IGludG8gdGhlIGNhbnZhcydzIHBhcmVudCBodG1sIGVsZW1lbnRcbiAgICBtZS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG1lLmNhbnZhc0VsZW1lbnQpO1xuXG59XG5cblxuQ0NhbnZhcy5wcm90b3R5cGUubW91c2VNb3ZlID0gZnVuY3Rpb24gKGUpIHtcblxuICAgIHZhciBtZSA9IHRoaXM7XG5cblxuICAgIGlmIChtZS5jdXJyZW50T2JqZWN0KSB7XG5cbiAgICAgICAgLy9ldmVudERhdGEuaXNNb3ZlZD10cnVlO1RoZSBwcmVzZW5jZSBvZiBldmVudCBkYXRhIG1lYW5zIHRoYXQgaXQgaGFzIG1vdmVkLlxuICAgICAgICBtZS5ldmVudERhdGEudGFyZ2V0VHlwZU5hbWUgPSBtZS5jdXJyZW50T2JqZWN0LnR5cGVOYW1lO1xuICAgICAgICBtZS5ldmVudERhdGEudGFyZ2V0VXNhZ2UgPSBtZS5jdXJyZW50T2JqZWN0LnVzYWdlO1xuICAgICAgICBtZS5ldmVudERhdGEudGFyZ2V0T2JqZWN0ID0gbWUuY3VycmVudE9iamVjdDtcblxuICAgICAgICAvL0V2ZW4gd2hlbiBvYmogaXMgbm90IGJlaW5nIGRyYWdnZWQsIG1vdXNlIGNvb3JkaW5hdGVzIGFyZSB1c2VkIGhlcmUgYmVjYXVzZSB0aGV5IGFyZSBuZWVkZWQuXG4gICAgICAgIHZhciBuZXdPYmpMZWZ0UHggPSBlLnBhZ2VYIC0gbWUub2Zmc2V0WDtcbiAgICAgICAgdmFyIG5ld09ialRvcFB4ID0gZS5wYWdlWSAtIG1lLm9mZnNldFk7XG5cbiAgICAgICAgdmFyIGFic29sdXRlTW91c2VYID0gZS5wYWdlWDtcbiAgICAgICAgdmFyIGFic29sdXRlTW91c2VZID0gZS5wYWdlWTtcblxuXG4gICAgICAgIC8vVGFrZSB0aGUgc25hcHNob3QgYmVmb3JlIHVwZGF0aW5nIHRoZSBsb2NhdGlvbi5cbiAgICAgICAgdmFyIG9sZE9iakxlZnRQeCA9IG1lLmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdDtcbiAgICAgICAgdmFyIG9sZE9ialRvcFB4ID0gbWUuY3VycmVudE9iamVjdC5zdHlsZS50b3A7XG5cbiAgICAgICAgLy9XaGVuIHRoZSBtb3VzZSBjdXJzb3IgZ29lcyBvdXQgb2YgcmFuZ2UsXG4gICAgICAgIC8vdGhlIGFkZGl0aW9uIGluIHRoZSBYIGRpcmVjdGlvbiBhbmQgWSBkaXJlY3Rpb24gKGRlbHRhIFgsIGRlbHRhIFkpIGlzIHNldCB0byB6ZXJvLlxuICAgICAgICAvL3RoaXMubGVmdD1DYXZhcydzIGxlZnQgc2lkZSBlZGdlLCB0aGlzLnRvcD1DYW52YXMncyB0b3Agc2lkZSBlZGdlLlxuICAgICAgICB2YXIgdG1wTGVmdCA9IHBhcnNlSW50KG5ld09iakxlZnRQeCwgMTApO1xuICAgICAgICB2YXIgdG1wVG9wID0gcGFyc2VJbnQobmV3T2JqVG9wUHgsIDEwKTtcblxuICAgICAgICB2YXIgdG1wUmlnaHQgPSB0bXBMZWZ0ICsgcGFyc2VJbnQobWUuY3VycmVudE9iamVjdC5zdHlsZS53aWR0aCwgMTApO1xuICAgICAgICB2YXIgdG1wQm90dG9tID0gdG1wVG9wICsgcGFyc2VJbnQobWUuY3VycmVudE9iamVjdC5zdHlsZS5oZWlnaHQsIDEwKTtcblxuICAgICAgICB2YXIgc3R5bGVXaWR0aCA9IHBhcnNlSW50KG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbiAgICAgICAgdmFyIHN0eWxlSGVpZ2h0ID0gcGFyc2VJbnQobWUuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKTtcblxuICAgICAgICB2YXIgZGVsdGFYID0gMDtcbiAgICAgICAgdmFyIGRlbHRhWSA9IDA7XG5cbiAgICAgICAgaWYgKG1lLmN1cnJlbnRPYmplY3QuaXNSYW5nZUxpbWl0ZWQgPT0gdHJ1ZSAmJlxuICAgICAgICAgICAgKHRtcExlZnQgPD0gMCB8fCB0bXBSaWdodCA+IHN0eWxlV2lkdGggfHwgdG1wVG9wIDw9IDAgfHwgdG1wQm90dG9tID4gc3R5bGVIZWlnaHQpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZGVsdGFYID0gMDtcbiAgICAgICAgICAgIGRlbHRhWSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWx0YVggPSAocGFyc2VJbnQobmV3T2JqTGVmdFB4LCAxMCkgLSBwYXJzZUludChvbGRPYmpMZWZ0UHgsIDEwKSk7XG4gICAgICAgICAgICBkZWx0YVkgPSAocGFyc2VJbnQobmV3T2JqVG9wUHgsIDEwKSAtIHBhcnNlSW50KG9sZE9ialRvcFB4LCAxMCkpO1xuICAgICAgICAgICAgbWUuY3VycmVudE9iamVjdC5zdHlsZS5sZWZ0ID0gKHBhcnNlSW50KG1lLmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdCkgKyBkZWx0YVggKiBtZS5jdXJyZW50T2JqZWN0LmFyZ1gpICsgJ3B4JztcbiAgICAgICAgICAgIG1lLmN1cnJlbnRPYmplY3Quc3R5bGUudG9wID0gKHBhcnNlSW50KG1lLmN1cnJlbnRPYmplY3Quc3R5bGUudG9wKSArIGRlbHRhWSAqIG1lLmN1cnJlbnRPYmplY3QuYXJnWSkgKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuZXZlbnREYXRhLmRlbHRhWCA9IGRlbHRhWDtcbiAgICAgICAgbWUuZXZlbnREYXRhLmRlbHRhWSA9IGRlbHRhWTtcblxuICAgICAgICByZXR1cm4gbWUuZXZlbnREYXRhO1xuXG4gICAgfVxuICAgIC8vUmV0dXJucyBudWxsIGlmIG5vbmUgb2YgdGhlIG9iamVjdHMgYXJlIGNsaWNrZWQgYW5kIHRoZSBvbmx5IG1vdXNlIGp1c3QgbW92ZXMuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5cbkNDYW52YXMucHJvdG90eXBlLm1vdXNlVXAgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBtZS5jdXJyZW50T2JqZWN0ID0gbnVsbDtcbiAgICBtZS5tb3VzZURvd25Tb3VyY2UgPSBudWxsO1xufTtcblxuXG4vL0JyaW5nIHRoZSBvYmplY3QgaW4gZnJvbnRcbkNDYW52YXMucHJvdG90eXBlLnB1bGxVcCA9IGZ1bmN0aW9uICh0YXJnZXRCZWFuSWQpIHtcblxuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICB2YXIgdG1wQmVhbkFycmF5ID0gW107XG5cbiAgICB2YXIgYmVhbkxpc3QgPSBtZS5iZWFuTGlzdDtcblxuICAgIGZvciAodmFyIGkgaW4gICBiZWFuTGlzdCkge1xuICAgICAgICB0bXBCZWFuQXJyYXkucHVzaChiZWFuTGlzdFtpXSk7XG4gICAgfVxuXG4gICAgLy9CcmluZyB0aGUgdGFyZ2V0IG9iamVjdCBpbiBmcm9udCBhbmQgc2V0IHppbmRleCB0byAxLlxuICAgIHZhciB0YXJnZXRCZWFuID0gYmVhbkxpc3RbdGFyZ2V0QmVhbklkXTtcblxuICAgIG1lLnB1bGxVcFNvcnQodGFyZ2V0QmVhbiwgdG1wQmVhbkFycmF5LCBtZS5iYXNlWkluZGV4KTtcblxuXG4gICAgLy9SZW1lbWJlciB0aGUgdG9wIG9iamVjdFxuICAgIG1lLm9uVG9wT2JqZWN0ID0gdGFyZ2V0QmVhbjtcblxuXG59O1xuXG4vL0NhbGN1bGF0ZSB0aGUgZnJvbnQgLyBiYWNrIGluZm9ybWF0aW9uIG9mIHRoZSB3aW5kb3cgYWNjdXJhdGVseS5cbkNDYW52YXMucHJvdG90eXBlLnB1bGxVcFNvcnQgPSBmdW5jdGlvbiAocHVsbHVwT2JqZWN0LCBvYmplY3RBcnJheSwgYmFzZUluZGV4KSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIC8vSW5jcmVhc2UgdGhlIGluZGV4IG51bWJlciBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICAgIHB1bGx1cE9iamVjdC5odG1sRWxlbWVudC5zdHlsZS56SW5kZXggPSBvYmplY3RBcnJheS5sZW5ndGggKyBiYXNlSW5kZXg7XG5cbiAgICAvL3NvcnQgYnkgaW5kZXhcbiAgICBvYmplY3RBcnJheS5zb3J0KGZ1bmN0aW9uIChiLCBhKSB7XG4gICAgICAgIHJldHVybiAtcGFyc2VJbnQoYi5odG1sRWxlbWVudC5zdHlsZS56SW5kZXgsIDEwKSArIHBhcnNlSW50KGEuaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4LCAxMCk7XG4gICAgfSk7XG5cbiAgICAvL1JlZGVmaW5lIG51bWJlciBvZiB0aGUgaW5kZXhcbiAgICBmb3IgKHZhciBpIGluIG9iamVjdEFycmF5KSB7XG4gICAgICAgIG9iamVjdEFycmF5W2ldLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCA9IChvYmplY3RBcnJheS5sZW5ndGggLSAxKSAtIGkgKyBiYXNlSW5kZXg7XG4gICAgfVxuXG59O1xuXG5cbi8qKlxuICogcmVtb3ZlIHRoZSBiZWFuIG9iamVjdFxuICogQHBhcmFtIGJlYW5JZFxuICovXG5DQ2FudmFzLnByb3RvdHlwZS5yZW1vdmVCZWFuID0gZnVuY3Rpb24gKGJlYW5JZCkge1xuXG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIC8vUmV0cmlldmUgdGhlIHRhcmdldCBiZWFuRnJhbWVcbiAgICB2YXIgYmVhbkxpc3QgPSBtZS5iZWFuTGlzdDtcbiAgICB2YXIgdGFyZ2V0QmVhbiA9IGJlYW5MaXN0W2JlYW5JZF07XG5cbiAgICAvL1JlbW92ZSBiZWFuJ3MgaHRtbEVsZW1lbnQgZnJvbSBjYW52YXNFbGVtZW50XG4gICAgbWUuY2FudmFzRWxlbWVudC5yZW1vdmVDaGlsZCh0YXJnZXRCZWFuLmh0bWxFbGVtZW50KTtcblxuICAgIC8vRGVsZXRlIHRoZSBiZWFuIG9iamVjdCBpbiB0aGUgYXNzb2NpYXRpdmUgYXJyYXkuXG4gICAgZGVsZXRlIGJlYW5MaXN0W2JlYW5JZF07XG5cblxufTtcblxuXG4vKipcbiAqIEFkZCBiZWFuIGludG8gdGhpcyBjYW52YXNcbiAqIEBwYXJhbSBiZWFuXG4gKi9cbkNDYW52YXMucHJvdG90eXBlLmFkZEJlYW4gPSBmdW5jdGlvbiAoYmVhbikge1xuXG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuXG4gICAgLy8yMDE4MDcyNFtzdGFydF1cbiAgICB2YXIgYmVhbklkTmFtZSA9IG1lLmJlYW5JZE5hbWU7Ly9rZXk6YmVhbklkIHZhbHVlOmJlYW5OYW1lXG4gICAgdmFyIGJlYW5OYW1lSWQgPSBtZS5iZWFuTmFtZUlkOyAvL2tleTpiZWFuTmFtZSB2YWx1ZTpiZWFuSWRcbiAgICAvLzIwMTgwNzI0W2VuZF1cblxuICAgIGJlYW5MaXN0W2JlYW4uaWRdID0gYmVhbjtcblxuICAgIC8vMjAxODA3MjRbc3RhcnRdXG4gICAgaWYgKGJlYW4ucHJvcGVydHkubmFtZSkge1xuICAgICAgICBiZWFuTmFtZUlkW2JlYW4ucHJvcGVydHkubmFtZV0gPSBiZWFuLmlkO1xuICAgICAgICBiZWFuSWROYW1lW2JlYW4uaWRdID0gYmVhbi5wcm9wZXJ0eS5uYW1lO1xuICAgIH1cbiAgICAvLzIwMTgwNzI0W2VuZF1cblxuXG4gICAgLy9JbiB0aGlzIHVzYWdlIGNhc2UgdGhlICdsZW5ndGgnIHByb3BlcnR5IGlzIGludmFsaWQgLi5cbiAgICB2YXIgbnVtID0gMDtcblxuICAgIGZvciAodmFyIGogaW4gYmVhbkxpc3QpIHtcbiAgICAgICAgbnVtKys7XG4gICAgfVxuXG4gICAgLy9TZXQgekluZGV4IHNvIHRoYXQgd2hhdCB5b3UgYWRkIGxhdGVyIHdpbGwgY29tZSB1cC5cbiAgICBiZWFuLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCA9IG51bSArIG1lLmJhc2VaSW5kZXg7XG5cbiAgICAvL09uIHRoZSBiZWFuIHNpZGUsIHNwZWNpZnkgdGhlIHBhcmVudCBvZiB0aGUgYmVhbiB0byBtZS5cbiAgICBiZWFuLnNldFBhcmVudENhbnZhcyhtZSk7XG5cblxuICAgIHRoaXMuY2FudmFzRWxlbWVudC5hcHBlbmRDaGlsZChiZWFuLmh0bWxFbGVtZW50KTtcbn07XG4vKipcbiAqIEVuZCBvZiBjYW52YXMgY2xhc3NcbiAqL1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuXG5ERUYuQ0ZSQU1FID0ge307XG5ERUYuQ0ZSQU1FLkNBTlZBU19FTEVNRU5UX0JHQ09MT1IgPSAndHJhbnNwYXJlbnQnO1xuREVGLkNGUkFNRS5USVRMRV9CQVJfQ0xBU1NfREVGQVVMVCA9ICdqc0ZyYW1lLnRpdGxlYmFyJztcbkRFRi5DRlJBTUUuVElUTEVfQkFSX0NMQVNTX0ZPQ1VTRUQgPSAnanNGcmFtZS50aXRsZWJhci5mb2N1c2VkJztcblxuaW5oZXJpdChDRnJhbWUsIENCZWFuRnJhbWUpO1xuXG5cbi8qKlxuICogQ0ZyYW1lIGNsYXNzXG4gKiA8cD5cbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIHdpbmRvdyB3aG9zZSBzaXplIGNhbiBiZSBjaGFuZ2VkICxcbiAqIGNhbiBtb3ZlIGZyZWVseSBvbiB0aGUgc2NyZWVuLFxuICogY2FuIGhhdmUgYSB0aXRsZSBiYXIsXG4gKlxuICogQHBhcmFtIHdpbmRvd0lkXG4gKiBAcGFyYW0gd19sZWZ0XG4gKiBAcGFyYW0gd190b3BcbiAqIEBwYXJhbSB3X3dpZHRoXG4gKiBAcGFyYW0gd19oZWlnaHRcbiAqIEBwYXJhbSB6aW5kZXhcbiAqIEBwYXJhbSB3X2JvcmRlcl93aWR0aFxuICogQHBhcmFtIGFwcGVhcmFuY2VcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDRnJhbWUod2luZG93SWQsIHdfbGVmdCwgd190b3AsIHdfd2lkdGgsIHdfaGVpZ2h0LCB6aW5kZXgsIHdfYm9yZGVyX3dpZHRoLCBhcHBlYXJhbmNlKSB7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgLy9jYWxsIGNvbnN0cnVjdG9yIG9mIHN1cGVyY2xhc3NcbiAgICBDRnJhbWUuc3VwZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHdpbmRvd0lkLCB3X2xlZnQsIHdfdG9wLCB3X3dpZHRoLCB3X2hlaWdodCwgemluZGV4KTtcblxuXG4gICAgbWUuYW5jaG9yID0gQ0FMSUdOLkxFRlRfVE9QO1xuXG4gICAgbWUuc2hvd1RpdGxlQmFyID0gYXBwZWFyYW5jZS5zaG93VGl0bGVCYXI7XG5cbiAgICBtZS5jYW52YXNOZXRIZWlnaHQgPSBudWxsO1xuICAgIG1lLmNhbnZhc05ldFdpZHRoID0gbnVsbDtcbiAgICBtZS5mcmFtZUhlaWdodEFkanVzdCA9IGFwcGVhcmFuY2UuZnJhbWVIZWlnaHRBZGp1c3Q7XG5cbiAgICBtZS5mcmFtZUNvbXBvbmVudE1hcCA9IHt9O1xuXG5cbiAgICAvL2luaXRpYWxpemUgdGhlIGZpZWxkXG4gICAgbWUuY2FudmFzID0gbnVsbDtcblxuICAgIC8vY2FudmFzIGlkXG4gICAgbWUubXlDYW52YXNJZCA9IG51bGw7XG5cbiAgICAvL0J1dHRvbnMgdG8gYmUgcGxhY2VkIG9uIHRoZSBzY3JlZW4gKHBvc2l0aW9uaW5nIHNhbWUgYXMgdGhlIGNsb3NlIGJ1dHRvbilcbiAgICBtZS5mbG9hdGluZ0J1dHRvbiA9IG51bGw7XG5cbiAgICBtZS50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQgPSBERUYuQ0ZSQU1FLlRJVExFX0JBUl9DTEFTU19ERUZBVUxUO1xuICAgIG1lLnRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZCA9IERFRi5DRlJBTUUuVElUTEVfQkFSX0NMQVNTX0ZPQ1VTRUQ7XG5cblxuICAgIC8vaGVpZ2h0IG9mIHRpdGxlYmFyXG4gICAgbWUudGl0bGVCYXJIZWlnaHQgPSBhcHBlYXJhbmNlLnRpdGxlQmFySGVpZ2h0O1xuXG4gICAgbWUudGl0bGVCYXJDYXB0aW9uID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb247XG4gICAgbWUudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbiA9IGFwcGVhcmFuY2UudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbjtcbiAgICBtZS50aXRsZUJhckNhcHRpb25Gb250U2l6ZSA9IGFwcGVhcmFuY2UudGl0bGVCYXJDYXB0aW9uRm9udFNpemU7XG4gICAgbWUudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodCA9IGFwcGVhcmFuY2UudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodDtcbiAgICBtZS50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQgPSBhcHBlYXJhbmNlLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdDtcbiAgICBtZS50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQgPSBhcHBlYXJhbmNlLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZDtcbiAgICAvL1RpdGxlIGJhciB3aWR0aCBhZGp1c3RtZW50IHZhbHVlXG4gICAgbWUudGl0bGVBZGp1c3RXaWR0aCA9IDI7XG5cbiAgICBtZS53aW5kb3dJZCA9IHdpbmRvd0lkO1xuXG4gICAgbWUuZXhCb3JkZXJXaWR0aCA9IDA7XG5cblxuICAgIG1lLm15Q2FudmFzSWQgPSB3aW5kb3dJZCArICdfY2FudmFzJztcblxuXG4gICAgLy9pbWcgZWxlbWVudCBmb3IgaWNvbiBwbGFjZWQgb24gdGhlIGxlZnQtdG9wXG4gICAgdmFyIGFwcEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAvL1x0XHRhcHBJY29uLnNyYz0naW1nL2ljb19hcHBfZmlsZTE2LmdpZic7XG5cbiAgICAvL3VybCBvZiBpY29uIGltYWdlXG4gICAgYXBwSWNvbi5zcmMgPSAnJztcbiAgICBhcHBJY29uLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBhcHBJY29uLnN0eWxlLmxlZnQgPSAnMnB4JztcbiAgICBhcHBJY29uLnN0eWxlLnRvcCA9ICcycHgnO1xuICAgIGFwcEljb24uc3R5bGUud2lkdGggPSAnMTZweCc7XG4gICAgYXBwSWNvbi5zdHlsZS5oZWlnaHQgPSAnMTZweCc7XG4gICAgYXBwSWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cblxuICAgIC8vVGhlIHRpdGxlIGJhciBtdXN0IGJlIG9uIHRoZSBmcm9udCBvZiB0aGUgY2FudmFzLlxuICAgIG1lLnRpdGxlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtZS50aXRsZUJhci5jbGFzc05hbWUgPSAnanNmcmFtZXRpdGxlYmFyJztcblxuICAgIGlmIChtZS5zaG93VGl0bGVCYXIpIHtcblxuICAgICAgICBtZS50aXRsZUJhci5pZCA9IHdpbmRvd0lkICsgJ190aXRsZSc7XG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICAgICAgICBtZS50aXRsZUJhci5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAvLzIwMTgwNzIyXG4gICAgICAgIC8vMjAxODA3MjIo55S76Z2i44Gu5Y+z44Go5LiL44Gr6YCP5piO6YOo5YiG44GM44Gn44GN44Gm44GX44G+44GG44Gu44Gn44CB6Kq/5pW05YCk44KS44GE44KM44GfKVxuICAgICAgICBtZS50aXRsZUJhci5zdHlsZS53aWR0aCA9ICh3X3dpZHRoIC0gbWUudGl0bGVBZGp1c3RXaWR0aCArIERFRi5DQU5WQVMuV0lEVEhfQURKVVNUXzIwMTgwNzIyKSArICdweCc7XG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG5cblxuICAgICAgICBpZiAobWUudGl0bGVCYXJIZWlnaHQpIHtcblxuICAgICAgICAgICAgdmFyIHRpdGxlQmFyQWRqdXN0ID0gMDtcblxuICAgICAgICAgICAgaWYgKG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIC8vdGl0bGVCYXJBZGp1c3QgPSAtMTtcbiAgICAgICAgICAgICAgICAvL+OCv+OCpOODiOODq+ODkOODvOOBjOOBmuOCjOOBpuOBl+OBvuOBhlxuICAgICAgICAgICAgICAgIHRpdGxlQmFyQWRqdXN0ID0gMDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBtZS50aXRsZUJhci5zdHlsZS5oZWlnaHQgPSAocGFyc2VJbnQobWUudGl0bGVCYXJIZWlnaHQsIDEwKSArIDApICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG1lLnRpdGxlQmFyQ29sb3JEZWZhdWx0O1xuICAgICAgICBtZS50aXRsZUJhci5zdHlsZS56SW5kZXggPSAwO1xuXG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLmNvbG9yID0gbWUudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0O1xuICAgICAgICBtZS50aXRsZUJhci5zdHlsZS5mb250U2l6ZSA9IG1lLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplO1xuICAgICAgICBtZS50aXRsZUJhci5zdHlsZS5mb250V2VpZ2h0ID0gbWUudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodDtcbiAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUudGV4dFNoYWRvdyA9IFwiMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC43KVwiO1xuICAgICAgICBtZS50aXRsZUJhci5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUubGluZUhlaWdodCA9IG1lLnRpdGxlQmFyLnN0eWxlLmhlaWdodDtcblxuXG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJvcmRlckJvdHRvbSA9IG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdDtcbiAgICAgICAgLy9tZS50aXRsZUJhci5zdHlsZS5ib3hTaGFkb3cgPSAnMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuNSknO1xuXG5cbiAgICAgICAgLy9TZXQgbm90IHRvIGRpc3BsYXkgb3ZlcmZsb3cgY2hhcmFjdGVyIHN0cmluZ1xuICAgICAgICBtZS50aXRsZUJhci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG5cbiAgICAgICAgdmFyIHRpdGxlQmFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblxuICAgICAgICAvLydzcGFuJyB0byBzdG9yZSB0ZXh0XG4gICAgICAgIHZhciB0aXRsZUJhclRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIHRpdGxlQmFyVGV4dFNwYW4uaWQgPSBtZS5pZCArICdfdGl0bGVCYXJUZXh0JztcbiAgICAgICAgaWYgKG1lLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGl0bGVCYXJUZXh0U3Bhbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0aXRsZUJhclRleHRTcGFuLnN0eWxlLmxlZnQgPSBwYXJzZUludChtZS50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luLCAxMCkgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGl0bGVCYXJUZXh0U3Bhbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0aXRsZUJhclRleHRTcGFuLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgICAgIHRpdGxlQmFyVGV4dFNwYW4uc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICAgICAgfVxuICAgICAgICB0aXRsZUJhclRleHRTcGFuLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICB0aXRsZUJhclRleHRTcGFuLmFwcGVuZENoaWxkKHRpdGxlQmFyVGV4dCk7XG4gICAgICAgIG1lLnRpdGxlQmFyLmFwcGVuZENoaWxkKHRpdGxlQmFyVGV4dFNwYW4pO1xuXG4gICAgICAgIC8vRGlzY29udGludWUgYXBwaWNvbigyMDA2MTAxMSlcbiAgICAgICAgLy9tZS50aXRsZUJhci5hcHBlbmRDaGlsZChhcHBJY29uKTtcbiAgICB9XG5cbiAgICBtZS5odG1sRWxlbWVudC5hcHBlbmRDaGlsZChtZS50aXRsZUJhcik7XG5cblxuICAgIC8vU2V0IENhbnZhcyB0aHJvdWdob3V0IHRoZSB3aW5kb3dcblxuICAgIC8vcGFyc2VJbnQobWUudGl0bGVCYXIuc3R5bGUuaGVpZ2h0KTsvL21lLnRpdGxlQmFySGVpZ2h0KTtcbiAgICB2YXIgY2FudmFzTW9yZUhlaWdodCA9IHBhcnNlSW50KG1lLnRpdGxlQmFySGVpZ2h0LCAxMCkgLSB0aXRsZUJhckFkanVzdDtcbiAgICB2YXIgY2FudmFzTW9yZVNwYWNpbmcgPSBwYXJzZUludChtZS50aXRsZUFkanVzdFdpZHRoLCAxMCk7XG5cbiAgICBpZiAobWUuc2hvd1RpdGxlQmFyKSB7XG5cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhc01vcmVIZWlnaHQgPSAwO1xuICAgICAgICBjYW52YXNNb3JlU3BhY2luZyA9IDA7XG4gICAgICAgIHRpdGxlQmFyQWRqdXN0ID0gMDtcbiAgICB9XG5cblxuICAgIG1lLmNhbnZhc05ldFdpZHRoID0gd193aWR0aCAtIGNhbnZhc01vcmVTcGFjaW5nO1xuICAgIG1lLmNhbnZhc05ldEhlaWdodCA9IHdfaGVpZ2h0IC0gY2FudmFzTW9yZUhlaWdodCAtIGNhbnZhc01vcmVTcGFjaW5nIC0gMSAtIHRpdGxlQmFyQWRqdXN0ICsgbWUuZnJhbWVIZWlnaHRBZGp1c3Q7XG5cblxuICAgIC8vQ2hhbmdlIHRoZSBzdHlsZSBvZiBodG1sRWxlbWVudCBvZiBDRnJhbWUgKENCZWFuKS5cbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG5cblxuICAgIC8vQ3JlYXRlIGEgY2FudmFzXG4gICAgbWUuY2FudmFzID0gbmV3IENDYW52YXMobWUuaHRtbEVsZW1lbnQsIG1lLm15Q2FudmFzSWQsIDAsIGNhbnZhc01vcmVIZWlnaHQsIHdfd2lkdGggLSBjYW52YXNNb3JlU3BhY2luZywgd19oZWlnaHQgLSBjYW52YXNNb3JlSGVpZ2h0IC0gY2FudmFzTW9yZVNwYWNpbmcpO1xuXG4gICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gREVGLkNGUkFNRS5DQU5WQVNfRUxFTUVOVF9CR0NPTE9SO1xuICAgIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcblxuICAgIC8vSGFuZGxpbmcgdGhlIG9tb3VzZWRvd24gZXZlbnQgdGhhdCBvY2N1cnJlZCBpbiBDYW52YXMgd2hpY2ggaXMgYSBjaGlsZCBlbGVtZW50IG9mIENGcmFtZVxuICAgIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50Lm9ubW91c2Vkb3duID0gbWUuY2FudmFzTW91c2VEb3duO1xuXG4gICAgLy9TZXQgdGhlIGNhbnZhcyBhcyBhIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IG9mIHRoZSBjYW52YXMgaHRtbCBlbGVtZW50IGNhbnZhc0VsZW1lbnQuXG4gICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQucGFyZW50Q0ZyYW1lID0gbWU7XG5cblxuICAgIHZhciB0bXBDYW52YXNXaWR0aCA9IHBhcnNlSW50KG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoLCAxMCk7XG4gICAgdmFyIHRtcENhbnZhc0hlaWdodCA9IHBhcnNlSW50KG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApO1xuXG4gICAgdmFyIG1hcmtlcldpZHRoID0gMTY7XG4gICAgdmFyIG1hcmtlckhlaWdodCA9IDE2O1xuXG4gICAgLy9PZmZzZXQgZnJvbSBtYXJrZXIgZWRnZVxuICAgIHZhciBlZGdlTWFyZ2luID0gMTY7XG5cbiAgICAvL0xvd2VyIHJpZ2h0KFItRClcbiAgICB2YXIgbWFya2VyUkQgPSBuZXcgQ01hcmtlcldpbmRvdyhcbiAgICAgICAgbWUubXlDYW52YXNJZCArICdfUkQnLFxuICAgICAgICB0bXBDYW52YXNXaWR0aCAtIG1hcmtlcldpZHRoICsgZWRnZU1hcmdpbixcbiAgICAgICAgdG1wQ2FudmFzSGVpZ2h0IC0gbWFya2VySGVpZ2h0ICsgZWRnZU1hcmdpbixcbiAgICAgICAgbWFya2VyV2lkdGgsXG4gICAgICAgIG1hcmtlckhlaWdodCxcbiAgICAgICAgMCxcbiAgICAgICAgJ1JEJyk7XG5cbiAgICBtYXJrZXJSRC5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnc2UtcmVzaXplJzsvL253LXJlc2l6ZSc7XG5cbiAgICAvL1NpbmNlIG9ubHkgdGhlIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBhY3F1aXJlZCBhbmQgdGhlIG1vdmVtZW50IG9mIHRoZSBtYXJrZXIgaXRzZWxmIGlzXG4gICAgLy8gcGVyZm9ybWVkIGJ5IENGcmFtZV9yZXNpemUsIHRoZSBtb3ZlbWVudCBjb2VmZmljaWVudCBvZiB0aGUgbWFya2VyIGl0c2VsZiBpcyBzZXQgdG8gMC5cbiAgICBtYXJrZXJSRC5odG1sRWxlbWVudC5hcmdYID0gMDtcbiAgICBtYXJrZXJSRC5odG1sRWxlbWVudC5hcmdZID0gMDtcblxuXG4gICAgLy9Cb3R0b20oRC1EKVxuICAgIHZhciBtYXJrZXJERCA9IG5ldyBDTWFya2VyV2luZG93KFxuICAgICAgICBtZS5teUNhbnZhc0lkICsgJ19ERCcsXG4gICAgICAgIDAsXG4gICAgICAgIHRtcENhbnZhc0hlaWdodCAtIG1hcmtlckhlaWdodCArIGVkZ2VNYXJnaW4sXG4gICAgICAgIHRtcENhbnZhc1dpZHRoIC0gbWFya2VyV2lkdGggKyBlZGdlTWFyZ2luLFxuICAgICAgICBtYXJrZXJIZWlnaHQsXG4gICAgICAgIDAsXG4gICAgICAgICdERCcpO1xuXG4gICAgbWFya2VyREQuaHRtbEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ24tcmVzaXplJztcblxuICAgIC8vU2luY2Ugb25seSB0aGUgZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGFjcXVpcmVkIGFuZCB0aGUgbW92ZW1lbnQgb2YgdGhlIG1hcmtlciBpdHNlbGYgaXNcbiAgICAvLyBwZXJmb3JtZWQgYnkgQ0ZyYW1lX3Jlc2l6ZSwgdGhlIG1vdmVtZW50IGNvZWZmaWNpZW50IG9mIHRoZSBtYXJrZXIgaXRzZWxmIGlzIHNldCB0byAwLlxuICAgIG1hcmtlckRELmh0bWxFbGVtZW50LmFyZ1ggPSAwO1xuICAgIG1hcmtlckRELmh0bWxFbGVtZW50LmFyZ1kgPSAwO1xuXG4gICAgLy9SaWdodChSLVIpXG4gICAgdmFyIG1hcmtlclJSID0gbmV3IENNYXJrZXJXaW5kb3coXG4gICAgICAgIG1lLm15Q2FudmFzSWQgKyAnX1JSJyxcbiAgICAgICAgdG1wQ2FudmFzV2lkdGggLSBtYXJrZXJXaWR0aCArIGVkZ2VNYXJnaW4sXG4gICAgICAgIDAsXG4gICAgICAgIG1hcmtlcldpZHRoLFxuICAgICAgICB0bXBDYW52YXNIZWlnaHQgLSBtYXJrZXJIZWlnaHQgKyBlZGdlTWFyZ2luLFxuICAgICAgICAwLFxuICAgICAgICAnUlInKTtcblxuICAgIG1hcmtlclJSLmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvciA9ICd3LXJlc2l6ZSc7XG5cbiAgICAvL1NpbmNlIG9ubHkgdGhlIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBhY3F1aXJlZCBhbmQgdGhlIG1vdmVtZW50IG9mIHRoZSBtYXJrZXIgaXRzZWxmIGlzXG4gICAgLy8gcGVyZm9ybWVkIGJ5IENGcmFtZV9yZXNpemUsIHRoZSBtb3ZlbWVudCBjb2VmZmljaWVudCBvZiB0aGUgbWFya2VyIGl0c2VsZiBpcyBzZXQgdG8gMC5cbiAgICBtYXJrZXJSUi5odG1sRWxlbWVudC5hcmdZID0gMDtcbiAgICBtYXJrZXJSUi5odG1sRWxlbWVudC5hcmdYID0gMDtcblxuICAgIC8vQWRkIHNpemUgY2hhbmdlIG1hcmtlciB0byBjYW52YXMuXG4gICAgbWUuY2FudmFzLmFkZEJlYW4obWFya2VyUkQpO1xuICAgIG1lLmNhbnZhcy5hZGRCZWFuKG1hcmtlckREKTtcbiAgICBtZS5jYW52YXMuYWRkQmVhbihtYXJrZXJSUik7XG5cbiAgICAvL01ldGhvZCB0byByZW1vdmUgc2l6ZSBjaGFuZ2UgbWFya2VyIChjYW4gbm90IHJlc2l6ZSlcbiAgICBtZS5yZW1vdmVNYXJrZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtZS5jYW52YXMucmVtb3ZlQmVhbihtYXJrZXJSRC5pZCk7XG4gICAgICAgIG1lLmNhbnZhcy5yZW1vdmVCZWFuKG1hcmtlckRELmlkKTtcbiAgICAgICAgbWUuY2FudmFzLnJlbW92ZUJlYW4obWFya2VyUlIuaWQpO1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgfTtcblxuXG4gICAgbWUucmVtb3ZlTWFya2VyczIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lLmNhbnZhcy5yZW1vdmVCZWFuKG1hcmtlclJELmlkKTtcbiAgICAgICAgbWUuY2FudmFzLnJlbW92ZUJlYW4obWFya2VyREQuaWQpO1xuICAgICAgICBtZS5jYW52YXMucmVtb3ZlQmVhbihtYXJrZXJSUi5pZCk7XG4gICAgfTtcblxuXG4gICAgLy9hZGQgZnJhbWVDb21wb25lbnRzW2JlZ2luXVxuICAgIGZvciAodmFyIGlkeCBpbiBhcHBlYXJhbmNlLmZyYW1lQ29tcG9uZW50cykge1xuXG4gICAgICAgIHZhciBmcmFtZUNvbXBvbmVudCA9IGFwcGVhcmFuY2UuZnJhbWVDb21wb25lbnRzW2lkeF07XG5cbiAgICAgICAgZnJhbWVDb21wb25lbnQuc2V0RnJhbWUobWUpO1xuXG4gICAgICAgIC8vaWYgZnJhbWVDb21wb25lbnQgaGFzIHNwZWNpYWwgbmFtZSAnY2xvc2VCdXR0b24nLCBpdCB3aWxsIGFjdCBhcyBhIGNsb3NlIGJ1dHRvbi5cbiAgICAgICAgaWYgKCdjbG9zZUJ1dHRvbicgPT0gZnJhbWVDb21wb25lbnQuaWQpIHtcbiAgICAgICAgICAgIGZyYW1lQ29tcG9uZW50Lmh0bWxFbGVtZW50Lm9uY2xpY2sgPSBtZS5jbG9zZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmFkZEZyYW1lQ29tcG9uZW50KGZyYW1lQ29tcG9uZW50KTtcbiAgICB9XG4gICAgLy9hZGQgZnJhbWVDb21wb25lbnRzW2VuZF1cblxuICAgIC8vb3ZlcnJpZGUgdGhlIGZpZWxkXG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuICAgIG1lLmh0bWxFbGVtZW50Lm9uY29udGV4dG1lbnUgPSB0aGlzLmNvbnRleHRNZW51O1xuXG5cbiAgICAvL1RoZSBwb2xpY3kgb2YgQm9yZGVyIGRyYXdpbmcgc2VlbXMgdG8gYmUgZGlmZmVyZW50IGJldHdlZW4gSUUgYW5kIEZGLlxuICAgIHZhciBjYXJpYlZhbCA9IDA7XG5cblxuICAgIG1lLmNhcmliVmFsdWUgPSBjYXJpYlZhbDtcblxuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gbWUuZXhCb3JkZXJXaWR0aCArICdweCc7XG5cbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IChwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCwgMTApIC0gY2FyaWJWYWwpICsgJ3B4JztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAocGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCkgLSBjYXJpYlZhbCArIDEpICsgJ3B4JztcbiAgICBtZS5odG1sRWxlbWVudC50eXBlTmFtZSA9ICdjd2luZG93JztcbiAgICBtZS5odG1sRWxlbWVudC5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSAnY29udGVudC1ib3gnO1xuXG5cbiAgICBpZiAoYXBwZWFyYW5jZS5mcmFtZUJvcmRlclN0eWxlKSB7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlclN0eWxlO1xuICAgIH1cblxuICAgIGlmIChhcHBlYXJhbmNlLmZyYW1lQm94U2hhZG93KSB7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IGFwcGVhcmFuY2UuZnJhbWVCb3hTaGFkb3c7XG4gICAgfVxuXG4gICAgLy9UT0RPIGRlcHJlY2F0aW9uKGJlY2F1c2UgQ0lmRnJhbWUgaXMgZXh0ZW5kZWQgdGhpcyBvcGVyYXRpb24pXG4gICAgaWYgKHBhcnNlSW50KGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQsIDEwKSA+IDApIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0O1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQ7XG5cbiAgICB9XG4gICAgaWYgKHBhcnNlSW50KGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJSYWRpdXMsIDEwKSA+IDApIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlclJhZGl1cztcbiAgICB9XG5cbiAgICBtZS5vbkNsb3NlRnJhbWVMaXN0ZW5lciA9IG51bGw7XG5cbn1cblxuXG5DRnJhbWUucHJvdG90eXBlLnNldFRpdGxlQmFyQ2xhc3NOYW1lID0gZnVuY3Rpb24gKGNsYXNzTmFtZUZvckRlZmF1bHQsIGNsYXNzTmFtZUZvckZvY3VzZWQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIGlmIChjbGFzc05hbWVGb3JEZWZhdWx0KSB7XG4gICAgICAgIG1lLnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdCA9IGNsYXNzTmFtZUZvckRlZmF1bHQ7XG4gICAgICAgIG1lLnRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZCA9IGNsYXNzTmFtZUZvckRlZmF1bHQ7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWVGb3JGb2N1c2VkKSB7XG4gICAgICAgIG1lLnRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZCA9IGNsYXNzTmFtZUZvckZvY3VzZWQ7XG4gICAgfVxuICAgIHJldHVybiBtZTtcbn07XG4vKipcbiAqIEFkZCBmcmFtZUNvbXBvbmVudChXcmFwcGVkIERPTSBlbGVtZW50IGxpa2UgJ2RpdicgdG8gZGlzcGxheSBhYm92ZSB0aGUgZnJhbWUpIHRvIGZyYW1lXG4gKiBAcGFyYW0gZnJhbWVDb21wb25lbnRcbiAqL1xuQ0ZyYW1lLnByb3RvdHlwZS5hZGRGcmFtZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChmcmFtZUNvbXBvbmVudCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBtZS5mcmFtZUNvbXBvbmVudE1hcFtmcmFtZUNvbXBvbmVudC5pZF0gPSBmcmFtZUNvbXBvbmVudDtcbiAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5hcHBlbmRDaGlsZChmcmFtZUNvbXBvbmVudC5odG1sRWxlbWVudCk7XG4gICAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBHZXQgc3RvcmVkIGZyYW1lIGNvbXBvbmVudCBieSBpZFxuICogQHBhcmFtIGZyYW1lQ29tcG9uZW50XG4gKi9cbkNGcmFtZS5wcm90b3R5cGUuZ2V0RnJhbWVDb21wb25lbnRFbGVtZW50ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICByZXR1cm4gbWUuZnJhbWVDb21wb25lbnRNYXBbaWRdLmh0bWxFbGVtZW50O1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5yZW1vdmVGcmFtZUNvbXBvbmVudEJ5SWQgPSBmdW5jdGlvbiAoZnJhbWVDb21wb25lbnRJZCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICB2YXIgZnJhbWVDb21wb25lbnQgPSBtZS5mcmFtZUNvbXBvbmVudE1hcFtmcmFtZUNvbXBvbmVudElkXTtcblxuICAgIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnJlbW92ZUNoaWxkKGZyYW1lQ29tcG9uZW50Lmh0bWxFbGVtZW50KTtcbiAgICBkZWxldGUgbWUuZnJhbWVDb21wb25lbnRNYXBbZnJhbWVDb21wb25lbnRJZF07XG59O1xuQ0ZyYW1lLnByb3RvdHlwZS5zZXRUaXRsZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIGlmIChtZS5zaG93VGl0bGVCYXIpIHtcblxuICAgICAgICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHIpO1xuICAgICAgICAvL2ZpcnN0Q2hpbGTjga5maXJzdENoaWxk44GMc3BhblxuICAgICAgICBtZS50aXRsZUJhci5maXJzdENoaWxkLnJlcGxhY2VDaGlsZCh0ZXh0Tm9kZSwgbWUudGl0bGVCYXIuZmlyc3RDaGlsZC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAoZGVsdGFMZWZ0LCBkZWx0YVRvcCwgZGVsdGFXaWR0aCwgZGVsdGFIZWlnaHQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgdmFyIHRtcExlZnQgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCk7XG4gICAgdmFyIHRtcFRvcCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICAgIHZhciB0bXBXaWR0aCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoLCAxMCk7XG4gICAgdmFyIHRtcEhlaWdodCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApO1xuXG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHBhcnNlSW50KHRtcExlZnQgKyBkZWx0YUxlZnQsIDEwKSArICdweCc7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gcGFyc2VJbnQodG1wVG9wICsgZGVsdGFUb3AsIDEwKSArICdweCc7XG5cbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHRtcFdpZHRoICsgZGVsdGFXaWR0aCwgMTApICsgJ3B4JztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBwYXJzZUludCh0bXBIZWlnaHQgKyBkZWx0YUhlaWdodCwgMTApICsgJ3B4JztcblxuICAgIHZhciB0bXBDYW52YXNXaWR0aCA9IHBhcnNlSW50KG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoLCAxMCk7XG4gICAgdmFyIHRtcENhbnZhc0hlaWdodCA9IHBhcnNlSW50KG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApO1xuXG4gICAgLy9TaW5jZSBjYW52YXNFbGVtZW50IGlzIGEgKDAsIDApIHJlbGF0aXZlIGNvb3JkaW5hdGUgd2l0aCByZXNwZWN0IHRvIHRoZSBwYXJlbnQgZWxlbWVudCxcbiAgICAvLyBzbyBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIGNoYW5nZSBsZWZ0IGFuZCB0b3AuXG4gICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGggPSAodG1wQ2FudmFzV2lkdGggKyBkZWx0YVdpZHRoKSArICdweCc7XG4gICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKHRtcENhbnZhc0hlaWdodCArIGRlbHRhSGVpZ2h0KSArICdweCc7XG5cbiAgICBpZiAobWUuc2hvd1RpdGxlQmFyKSB7XG5cbiAgICAgICAgLy9DaGFuZ2UgdGhlIHNpemUgb2YgdGhlIHRpdGxlIGJhci4gVGl0bGVBZGp1c3RXaWR0aCBldGMuXG4gICAgICAgIC8vVGhlIHJlYXNvbiB3aHkgeW91IGRvIG5vdCBoYXZlIHRvIHVzZSB0aXRsZUFkanVzdFdpZHRoIGlzIGJlY2F1c2VcbiAgICAgICAgLy8gdGhlc2Ugc2NhbGluZyBhcmUgZG9uZSB3aXRoIGRpZmZlcmVuY2VzIChkZWx0YVgsIGRlbHRhWSkuXG4gICAgICAgIC8vVGhlcmVmb3JlLCBpZiB5b3UgYWRqdXN0IHdpdGggdGhlIHRpdGxlQWRqdXN0V2lkdGggYXNcbiAgICAgICAgLy8gdGhlIGluaXRpYWwgdmFsdWUsIHRoZSBvdGhlciB3aWxsIHN0cmV0Y2ggcmVsYXRpdmUuXG4gICAgICAgIC8vWW91IGRvIG5vdCB0aGluayB5b3UgY2FuIHVzZSBpZkRlbHRhXG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLndpZHRoID0gKHRtcENhbnZhc1dpZHRoICsgZGVsdGFXaWR0aCkgKyAncHgnO1xuXG4gICAgfSBlbHNlIHtcblxuXG4gICAgfVxuXG5cbiAgICBmb3IgKHZhciBiZWFuTmFtZSBpbiBtZS5jYW52YXMuYmVhbkxpc3QpIHtcbiAgICAgICAgdmFyIHRtcEJlYW4gPSBtZS5jYW52YXMuYmVhbkxpc3RbYmVhbk5hbWVdO1xuXG4gICAgICAgIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnR5cGVOYW1lID09ICdjbWFya2Vyd2luZG93Jykge1xuICAgICAgICAgICAgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gJ1JEJykge1xuICAgICAgICAgICAgICAgIC8vTW92ZSB0aGUgc2l6ZSBjaGFuZ2UgbG93ZXIgcmlnaHQoUkQpIG1hcmtlciBhY2NvcmRpbmcgdG8gdGhlIGFtb3VudCBvZiBtb3ZlbWVudC5cbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBkZWx0YVdpZHRoKSArICdweCc7XG4gICAgICAgICAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKSArIGRlbHRhSGVpZ2h0KSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09ICdERCcpIHtcbiAgICAgICAgICAgICAgICAvL01vdmUgdGhlIHNpemUgY2hhbmdlIGxvd2VyIG1hcmtlciBhY2NvcmRpbmcgdG8gdGhlIG1vdmVtZW50IGFtb3VudC5cbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgbW92ZSBsZWZ0Lk9ubHkgdGhlIHdpZHRoIHdpbCBpbmNyZWFzZSBvciBkZWNyZWFzZS5cbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgsIDEwKSArIGRlbHRhV2lkdGgpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZGVsdGFIZWlnaHQpICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gJ1JSJykge1xuICAgICAgICAgICAgICAgIC8vTW92ZSB0aGUgc2l6ZSBjaGFuZ2UgcmlnaHQgbWFya2VyIGFjY29yZGluZyB0byB0aGUgbW92ZW1lbnQgYW1vdW50XG4gICAgICAgICAgICAgICAgLy9EbyBub3QgbW92ZSB0b3AsT25seSB0aGUgaGVpZ2h0IHdpbGwgaW5jcmVhc2Ugb3IgZGVjcmVhc2UuXG4gICAgICAgICAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApICsgZGVsdGFXaWR0aCkgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCkgKyBkZWx0YUhlaWdodCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbkNGcmFtZS5wcm90b3R5cGUuY2FudmFzTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgLy9Nb3VzZWRvd24gcHJvY2Vzc2luZyBvZiBDRnJhbWUuY2FudmFzXG5cbiAgICAvLydUaGlzJyBpbiB0aGlzIG1ldGhvZCBpbmRpY2F0ZXMgJ0N3aW5kb3cuY2FudmFzLmNhbnZhc0VsZW1lbnQnLlxuICAgIGlmICh0aGlzLnBhcmVudENGcmFtZS5wYXJlbnRDYW52YXMubW91c2VEb3duU291cmNlID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRDRnJhbWUucGFyZW50Q2FudmFzLm1vdXNlRG93blNvdXJjZSA9ICdjaGlsZGNhbnZhcyc7XG4gICAgfVxuXG5cbn07XG5DRnJhbWUucHJvdG90eXBlLm1vdXNlVXAgPSBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMuY2FudmFzLm1vdXNlVXAoZSk7XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAvL0Nsb3NlIHByb2Nlc3Npbmcgb2YgQ0ZyYW1lIGZyb20gQ2xvc2VCdXR0b25cbiAgICB0aGlzLnBhcmVudE9iamVjdC5wYXJlbnRDYW52YXMucmVtb3ZlQmVhbih0aGlzLnBhcmVudE9iamVjdC5pZCk7XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLmNsb3NlRnJhbWUgPSBmdW5jdGlvbiAoZSkge1xuICAgIC8vQ2xvc2UgcHJvY2Vzc2luZyBvZiBDRnJhbWVcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgdGhpcy5wYXJlbnRDYW52YXMucmVtb3ZlQmVhbihtZS53aW5kb3dJZCk7XG4gICAgaWYgKG1lLm9uQ2xvc2VGcmFtZUxpc3RlbmVyKSB7XG4gICAgICAgIG1lLm9uQ2xvc2VGcmFtZUxpc3RlbmVyKG1lKTtcbiAgICB9XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLnNldE9uQ2xvc2VGcmFtZUxpc3RlbmVyID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5vbkNsb3NlRnJhbWVMaXN0ZW5lciA9IGxpc3RlbmVyO1xuXG59O1xuXG5DRnJhbWUucHJvdG90eXBlLmNvbnRleHRNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vSWYgeW91IGlzc3VlIHRoZSByaWdodC1jbGljayBtZW51IGluIHRoZSB3aW5kb3csIHNldCB0aGUgc291cmNlIHRvIENGcmFtZS5cbiAgICB2YXIgY29udGV4dE1lbnVTb3VyY2UgPSAnQ0ZyYW1lJztcbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbkNGcmFtZS5wcm90b3R5cGUuc2V0VGl0bGVCYXJUZXh0Q29sb3IgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS50aXRsZUJhci5zdHlsZS5jb2xvciA9IHN0cjtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoeCwgeSwgYW5jaG9yKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIHZhciBmcmFtZVdpZHRoID0gbWUuZ2V0V2lkdGgoKTtcbiAgICB2YXIgZnJhbWVIZWlnaHQgPSBtZS5nZXRIZWlnaHQoKTtcblxuICAgIG1lLl9zZXRQb3NpdGlvbkludGVybmFsbHkoeCwgeSwgYW5jaG9yLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCk7XG5cbiAgICByZXR1cm4gbWU7XG59O1xuQ0ZyYW1lLnByb3RvdHlwZS5fc2V0UG9zaXRpb25JbnRlcm5hbGx5ID0gZnVuY3Rpb24gKHgsIHksIGFuY2hvciwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgaWYgKGFuY2hvcikge1xuICAgICAgICBtZS5hbmNob3IgPSBhbmNob3I7XG4gICAgfVxuXG4gICAgaWYgKCFhbmNob3IgfHwgQ0FMSUdOLkxFRlRfVE9QID09IGFuY2hvcikge1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9UT1AgPT0gYW5jaG9yKSB7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAoLWZyYW1lV2lkdGggLyAyICsgeCkgKyAncHgnO1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX1RPUCA9PSBhbmNob3IpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9ICgtZnJhbWVXaWR0aCArIHgpICsgJ3B4JztcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0geSArICdweCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5MRUZUX1ZDRU5URVIgPT0gYW5jaG9yKSB7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKC1mcmFtZUhlaWdodCAvIDIgKyB5KSArICdweCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1ZDRU5URVIgPT0gYW5jaG9yKSB7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAoLWZyYW1lV2lkdGggLyAyICsgeCkgKyAncHgnO1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAoLWZyYW1lSGVpZ2h0IC8gMiArIHkpICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX1ZDRU5URVIgPT0gYW5jaG9yKSB7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAoLWZyYW1lV2lkdGggKyB4KSArICdweCc7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9ICgtZnJhbWVIZWlnaHQgLyAyICsgeSkgKyAncHgnO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uTEVGVF9CT1RUT00gPT0gYW5jaG9yKSB7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKC1mcmFtZUhlaWdodCArIHkpICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfQk9UVE9NID09IGFuY2hvcikge1xuICAgICAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gKC1mcmFtZVdpZHRoIC8gMiArIHgpICsgJ3B4JztcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKC1mcmFtZUhlaWdodCArIHkpICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX0JPVFRPTSA9PSBhbmNob3IpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9ICgtZnJhbWVXaWR0aCArIHgpICsgJ3B4JztcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKC1mcmFtZUhlaWdodCArIHkpICsgJ3B4JztcbiAgICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgcmVsYXRpdmUgcG9zaXRpb24gd2l0aCBhbmNob3JcbiAqIEByZXR1cm5zIHt7eDogKiwgeTogKiwgYW5jaG9yOiAqfX1cbiAqL1xuQ0ZyYW1lLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHZhciBmcmFtZVdpZHRoID0gbWUuZ2V0V2lkdGgoKTtcbiAgICB2YXIgZnJhbWVIZWlnaHQgPSBtZS5nZXRIZWlnaHQoKTtcbiAgICB2YXIgeDtcbiAgICB2YXIgeTtcbiAgICB2YXIgYW5jaG9yID0gbWUuYW5jaG9yO1xuICAgIGlmICghYW5jaG9yIHx8IENBTElHTi5MRUZUX1RPUCA9PSBhbmNob3IpIHtcbiAgICAgICAgeCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKTtcbiAgICAgICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9UT1AgPT0gYW5jaG9yKSB7XG4gICAgICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBmcmFtZVdpZHRoIC8gMjtcbiAgICAgICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uUklHSFRfVE9QID09IGFuY2hvcikge1xuICAgICAgICB4ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApICsgZnJhbWVXaWR0aDtcbiAgICAgICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uTEVGVF9WQ0VOVEVSID09IGFuY2hvcikge1xuICAgICAgICB4ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApO1xuICAgICAgICB5ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCkgKyBmcmFtZUhlaWdodCAvIDI7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1ZDRU5URVIgPT0gYW5jaG9yKSB7XG4gICAgICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBmcmFtZVdpZHRoIC8gMjtcbiAgICAgICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZnJhbWVIZWlnaHQgLyAyO1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uUklHSFRfVkNFTlRFUiA9PSBhbmNob3IpIHtcbiAgICAgICAgeCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKSArIGZyYW1lV2lkdGg7XG4gICAgICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKSArIGZyYW1lSGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLkxFRlRfQk9UVE9NID09IGFuY2hvcikge1xuICAgICAgICB4ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApO1xuICAgICAgICB5ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCkgKyBmcmFtZUhlaWdodDtcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfQk9UVE9NID09IGFuY2hvcikge1xuICAgICAgICB4ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApICsgZnJhbWVXaWR0aCAvIDI7XG4gICAgICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKSArIGZyYW1lSGVpZ2h0O1xuICAgIH1cbiAgICBlbHNlIGlmIChDQUxJR04uUklHSFRfQk9UVE9NID09IGFuY2hvcikge1xuICAgICAgICB4ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApICsgZnJhbWVXaWR0aDtcbiAgICAgICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZnJhbWVIZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiB7eDogeCwgeTogeSwgYW5jaG9yOiBhbmNob3J9O1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKTtcbn07XG5cblxuQ0ZyYW1lLnByb3RvdHlwZS5nZXRUb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICByZXR1cm4gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCk7XG59O1xuQ0ZyYW1lLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHJldHVybiBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCwgMTApO1xufTtcbkNGcmFtZS5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5zZXRTaXplID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgbWUucmVzaXplKDAsIDAsIHdpZHRoIC0gbWUuZ2V0V2lkdGgoKSwgaGVpZ2h0IC0gbWUuZ2V0SGVpZ2h0KCksIHRydWUpO1xuICAgIHJldHVybiBtZTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuZ2V0V2luZG93SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICByZXR1cm4gbWUud2luZG93SWRcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHJldHVybiBtZS5wcm9wZXJ0eS5uYW1lO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5zZXROYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLnByb3BlcnR5Lm5hbWUgPSBuYW1lO1xufTtcbi8qKlxuICogZW5kIG9mIENGcmFtZSBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG5cbmluaGVyaXQoQ0lmRnJhbWUsIENGcmFtZSk7XG5cbi8qKlxuICogQ0lmRnJhbWUgY2xhc3NcbiAqIEV4dGVuc2lvbiBjbGFzcyB3aXRoIGNvbnRlbnRzIGZyYW1lIG9mIENGcmFtZSBhcyBpZnJhbWVcbiAqIEBwYXJhbSB3aW5kb3dJZFxuICogQHBhcmFtIGFwcGVhcmFuY2VcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDSWZGcmFtZSh3aW5kb3dJZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCBhcHBlYXJhbmNlKSB7XG5cblxuICAgIHZhciB3bGVmdCA9IGxlZnQ7XG4gICAgdmFyIHd0b3AgPSB0b3A7XG4gICAgdmFyIHd3aWR0aCA9IHdpZHRoO1xuICAgIHZhciB3aGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHZhciB6aW5kZXggPSBhcHBlYXJhbmNlLnppbmRleDtcbiAgICB2YXIgd2JvcmRlcndpZHRoID0gbnVsbDtcblxuXG4gICAgdmFyIG1lID0gdGhpcztcblxuXG4gICAgdGhpcy5taW5GcmFtZVdpZHRoID0gMTI4O1xuICAgIHRoaXMubWluV2luZG93SGVpZ2h0ID0gMzI7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGlzIHZhbHVlIGlzIHRydWUsIHRoZSBmb2N1cyB3aWxsIG1vdmUgd2hlbiB0YXBwaW5nIHRoZSBpZnJhbWUgYXJlYSxcbiAgICAgKiBidXQgaWYgdGhlIHdpbmRvdyBkbyBub3QgaGF2ZSB0aGUgZm9jdXMsIHlvdSBjYW4gbm90IGNsaWNrIG9uIHRoZSBlbGVtZW50IGluIHRoZSBpZnJhbWUuXG4gICAgICovXG4gICAgdGhpcy5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5FbmFibGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiAgT25seSBpbiB0aGUgY2FzZSBvZiByZXNpemluZyBhIHRyYW5zcGFyZW50IHNjcmVlbiBjYW4gYmUgZGlzcGxheWVkIG9uIHRoZSBpZnJhbWVcbiAgICAgKiAgYW5kIHRoZSBzaXplIGNhbiBiZSBhZGp1c3RlZCBzbW9vdGhseS5cbiAgICAgKiAgdHJ1ZSBpcyByZWNvbW1lbmRlZC5cbiAgICAgKi9cbiAgICB0aGlzLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbk9uUmVzaXplID0gdHJ1ZTtcblxuXG4gICAgdGhpcy50aXRsZUJhckNvbG9yRm9jdXNlZCA9IGFwcGVhcmFuY2UudGl0bGVCYXJDb2xvckZvY3VzZWQ7XG4gICAgdGhpcy50aXRsZUJhckNvbG9yRGVmYXVsdCA9IGFwcGVhcmFuY2UudGl0bGVCYXJDb2xvckRlZmF1bHQ7XG5cbiAgICB0aGlzLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdCA9IGFwcGVhcmFuY2UudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0O1xuICAgIHRoaXMudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQ7XG5cbiAgICAvL2NhbGwgc3VwZXIgY29uc3RydWN0b3JcbiAgICBDSWZGcmFtZS5zdXBlckNvbnN0cnVjdG9yLmNhbGwobWUsIHdpbmRvd0lkLCB3bGVmdCwgd3RvcCwgd3dpZHRoLCB3aGVpZ2h0LCB6aW5kZXgsIHdib3JkZXJ3aWR0aCwgYXBwZWFyYW5jZSk7XG5cbiAgICAvL2JvcmRlciBjb2xvclxuICAgIG1lLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0ID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdDtcbiAgICBtZS5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZCA9IGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQ7XG5cbiAgICAvL2JvcmRlciB3aWR0aFxuICAgIG1lLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0ID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdDtcbiAgICBtZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9IGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQ7XG5cblxuICAgIG1lLmlmcmFtZSA9IG51bGw7XG5cblxuICAgIC8vT2Zmc2V0IHZhbHVlIGZvciB3aWR0aCBhZGp1c3RtZW50IG9mIGlmcmFtZVxuICAgIG1lLmlmRGVsdGEgPSAwO1xuXG4gICAgbWUucmVzaXphYmxlID0gdHJ1ZTtcblxuXG4gICAgbWUub25Nb3VzZU1vdmVPbklmcmFtZSA9IG51bGw7XG4gICAgbWUub25Nb3VzZVVwT25JZnJhbWUgPSBudWxsO1xuXG4gICAgbWUuX2hhc0ZvY3VzID0gZmFsc2U7XG4gICAgbWUuX2hhc0ZvY3VzVGltZSA9IDA7XG5cblxuICAgIG1lLmh0bWxFbGVtZW50LnR5cGVOYW1lID0gJ2NpZndpbmRvdyc7XG5cbiAgICAvL25hbWUgb2YgaWZyYW1lXG4gICAgdmFyIGV4SWZyYW1lTmFtZSA9ICdyaXZlcnN1bl8nICsgd2luZG93SWQ7XG5cblxuICAgIG1lLmRmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICBtZS5pZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblxuXG4gICAgbWUuaWZyYW1lLm5hbWUgPSBleElmcmFtZU5hbWU7XG5cbiAgICBtZS5pZnJhbWUuaWQgPSBleElmcmFtZU5hbWU7XG5cbiAgICBtZS5pZnJhbWUuZnJhbWVCb3JkZXIgPSAnMCc7XG4gICAgbWUuaWZyYW1lLnNjcm9sbGluZyA9ICdubyc7XG5cbiAgICBtZS5pZnJhbWUuekluZGV4ID0gLTE7XG5cbiAgICAvL0FsbG93IHRyYW5zcGFyZW50IG9mIGlmcmFtZSBiYWNrZ3JvdW5kLlxuICAgIG1lLmlmcmFtZS5hbGxvd1RyYW5zcGFyZW5jeSA9ICd0cnVlJztcbiAgICBtZS5pZnJhbWUud2lkdGggPSBtZS5jYW52YXNOZXRXaWR0aCAtIG1lLmlmRGVsdGEgKyAwO1xuICAgIG1lLmlmcmFtZS5oZWlnaHQgPSBtZS5jYW52YXNOZXRIZWlnaHQgLSBtZS5pZkRlbHRhICsgMDtcblxuICAgIG1lLnNob3dUaXRsZUJhciA9IGFwcGVhcmFuY2Uuc2hvd1RpdGxlQmFyO1xuXG4gICAgbWUuZ2V0RnJhbWVJbm5lckJvcmRlclJhZGl1cyA9IGFwcGVhcmFuY2UuZ2V0RnJhbWVJbm5lckJvcmRlclJhZGl1cztcblxuICAgIG1lLmZyYW1lQm9yZGVyUmFkaXVzID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlclJhZGl1cztcblxuXG4gICAgbWUuYWRqdXN0RnJhbWVCb3JkZXJSYWRpdXMoKTtcblxuICAgIG1lLnVzZUlmcmFtZSA9IGZhbHNlO1xuXG5cbiAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5hcHBlbmRDaGlsZChtZS5pZnJhbWUpO1xuXG4gICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuYXBwZW5kQ2hpbGQobWUuZGZyYW1lKTtcblxuXG4gICAgdGhpcy5zZXRVc2VJZnJhbWUgPSBmdW5jdGlvbiAodXNlSWZyYW1lKSB7XG4gICAgICAgIG1lLnVzZUlmcmFtZSA9IHVzZUlmcmFtZTtcbiAgICAgICAgbWUuaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgbWUuaWZyYW1lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgbWUuaWZyYW1lLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgbWUuaWZyYW1lLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICBtZS5pZnJhbWUuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIG1lLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG5cbiAgICAgICAgbWUuZGZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgbWUuZGZyYW1lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgbWUuZGZyYW1lLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgbWUuZGZyYW1lLnN0eWxlLmJveFNpemluZyA9IFwiY29udGVudC1ib3hcIjtcblxuICAgICAgICBtZS5kZnJhbWUuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIG1lLmRmcmFtZS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgbWUuZGZyYW1lLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgLy9tZS5kZnJhbWUuc3R5bGUuYm9yZGVyU3R5bGU9XCJzb2xpZFwiO1xuICAgICAgICBtZS5kZnJhbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuXG5cbiAgICAgICAgaWYgKHVzZUlmcmFtZSkge1xuICAgICAgICAgICAgbWUuaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICBtZS5kZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICB9IGVsc2Uge1xuXG5cbiAgICAgICAgICAgIG1lLmlmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBtZS5kZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBtZS5zZXRVc2VJZnJhbWUoYXBwZWFyYW5jZS51c2VJZnJhbWUpO1xuXG4gICAgLy9JZiBpdCBpcyBJRSwgc2V0IHRoZSBjYW52YXNFbGVtZW50IG9mIHRoZSBjYW52YXMgd2hpY2ggaXMgdGhlIHBhcmVudCBvZiB0aGUgaWZyYW1lIHRvIHRyYW5zcGFyZW50LlxuXG4gICAgaWYgKG1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQgfHwgbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuT25SZXNpemUpIHtcbiAgICAgICAgLy9DcmVhdGUgYSB0cmFuc3BhcmVudCBzY3JlZW4uXG4gICAgICAgIG1lLnRyYW5zcGFyZW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgLy9tZS50cmFuc3BhcmVuY2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChpbWcvaW1nX2Jhcm9uX3RwLmdpZiknO1xuXG4gICAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS50b3AgPSAnMHB4JztcblxuICAgICAgICAvL1RyYW5zcGFyZW50IHNjcmVlbiBpcyAwcHggd2hlbiBjcmVhdGluZyB3aW5kb3dcbiAgICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcblxuICAgICAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUuekluZGV4ID0gNDtcbiAgICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLmJvcmRlcldpZHRoID0gJzBweCc7XG4gICAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5ib3JkZXJDb2xvciA9ICcjZmYwMGVlJztcbiAgICAgICAgLy90aGlzLnRyYW5zcGFyZW5jZS5zdHlsZS5ib3JkZXJTdHlsZT0nbm9uZSc7XG4gICAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG5cbiAgICAgICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYXBwZWFyYW5jZS5mcmFtZUJhY2tncm91bmRDb2xvcjtcblxuXG4gICAgICAgIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LmFwcGVuZENoaWxkKG1lLnRyYW5zcGFyZW5jZSk7XG4gICAgfVxuXG59XG5cblxuQ0lmRnJhbWUucHJvdG90eXBlLmdldEZyYW1lVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHJldHVybiBtZS5kZnJhbWU7XG59O1xuXG5cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRIVE1MID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLmRmcmFtZS5pbm5lckhUTUwgPSBodG1sO1xufTtcblxuLyoqXG4gKiBmaW5kIERPTSBFbGVtZW50IGluIHRoZSBmcmFtZSBieSBxdWVyeVNlbGVjdG9yPGJyPlxuICogIEV4YW1wbGVzPGJyPlxuICogICAgICBmcmFtZS4kKFwiI215X2lkX25hbWVcIik7XG4gKiAgICAgIGZyYW1lLiQoXCIubXlfY2xhc3NfbmFtZVwiKTtcbiAqICAgICAgZnJhbWUuJChcImRpdj5pbWdcIik7XG4gKiAgICAgIGZyYW1lLiQoXCJpbnB1dFt0eXBlPSdzdWJtaXRdXCIpO1xuICogQHBhcmFtIHFcbiAqIEByZXR1cm5zIHtOb2RlfVxuICovXG5DSWZGcmFtZS5wcm90b3R5cGUuJCA9IGZ1bmN0aW9uIChxKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIGlmIChtZS51c2VJZnJhbWUpIHtcbiAgICAgICAgdmFyIGRvY0luSWZyYW1lID0gbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgICAgIHJldHVybiBkb2NJbklmcmFtZS5xdWVyeVNlbGVjdG9yKHEpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICByZXR1cm4gbWUuZGZyYW1lLnF1ZXJ5U2VsZWN0b3IocSk7XG5cbiAgICB9XG59O1xuXG5cbkNJZkZyYW1lLnByb3RvdHlwZS5hZGp1c3RGcmFtZUJvcmRlclJhZGl1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgaWYgKHBhcnNlSW50KG1lLmZyYW1lQm9yZGVyUmFkaXVzLCAxMCkgPiAwKSB7XG5cbiAgICAgICAgdmFyIGlubmVyQm9yZGVyUmFkaXVzID0gbWUuZ2V0RnJhbWVJbm5lckJvcmRlclJhZGl1cyhtZSwgbWUuX2hhc0ZvY3VzKTtcblxuICAgICAgICBpZiAobWUuc2hvd1RpdGxlQmFyKSB7XG5cbiAgICAgICAgICAgIC8vdGl0bGUgYmFyIGV4aXN0c1xuICAgICAgICAgICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcbiAgICAgICAgICAgIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcbiAgICAgICAgICAgIG1lLmlmcmFtZS5zdHlsZS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuICAgICAgICAgICAgbWUuaWZyYW1lLnN0eWxlLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcblxuICAgICAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUuYm9yZGVyVG9wTGVmdFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuICAgICAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcblxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vdGl0bGUgYmFyIG5vdCBleGl0c1xuICAgICAgICAgICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICAgICAgICBtZS5pZnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5kZnJhbWUpIHtcbiAgICAgICAgICAgIG1lLmRmcmFtZS5zdHlsZS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuICAgICAgICAgICAgbWUuZGZyYW1lLnN0eWxlLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcbiAgICAgICAgfVxuXG5cbiAgICB9XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUuaGFuZGxlUmVsZWFzaW5nRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuX2hhc0ZvY3VzID0gZmFsc2U7XG5cbiAgICBtZS50aXRsZUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBtZS50aXRsZUJhckNvbG9yRGVmYXVsdDtcbiAgICBtZS50aXRsZUJhci5zdHlsZS5jb2xvciA9IG1lLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdDtcblxuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgaWYgKG1lLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0KSB7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gbWUuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQ7XG4gICAgfVxuXG4gICAgLy9ib3JkZXIgd2lkdGhcbiAgICBpZiAobWUuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSBtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdDtcbiAgICAgICAgbWUuYWRqdXN0RnJhbWVCb3JkZXJSYWRpdXMoKTtcbiAgICB9XG5cbiAgICBpZiAobWUuaHRtbEVsZW1lbnQudHlwZU5hbWUgPT0gJ2NpZndpbmRvdycpIHtcbiAgICAgICAgaWYgKG1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQpIHtcbiAgICAgICAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9IHBhcnNlSW50KG1lLmlmcmFtZS53aWR0aCwgMTApICsgJ3B4JztcbiAgICAgICAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5oZWlnaHQgPSBwYXJzZUludChtZS5pZnJhbWUuaGVpZ2h0LCAxMCkgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9oYW5kbGluZyBmb3IgY2hpbGQgZnJhbWVDb21wb25lbnRzXG4gICAgZm9yICh2YXIgZnJhbWVDb21wb25lbnRJZCBpbiBtZS5mcmFtZUNvbXBvbmVudE1hcCkge1xuICAgICAgICB2YXIgZnJhbWVDb21wb25lbnQgPSBtZS5mcmFtZUNvbXBvbmVudE1hcFtmcmFtZUNvbXBvbmVudElkXTtcbiAgICAgICAgZnJhbWVDb21wb25lbnQuaGFuZGxlUmVsZWFzaW5nRm9jdXMoKVxuICAgIH1cblxuICAgIC8vYm9yZGVyIGJvdHRvbVxuICAgIGlmIChtZS50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQpIHtcbiAgICAgICAgbWUudGl0bGVCYXIuc3R5bGUuYm9yZGVyQm90dG9tID0gbWUudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0O1xuICAgIH1cblxuXG4gICAgLy91cGRhdGUgc3R5bGUgY2xhc3NcbiAgICBtZS50aXRsZUJhci5jbGFzc05hbWUgPSBtZS50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ7XG5cbiAgICByZXR1cm4gbWU7XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUuaGFuZGxlVGFraW5nRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuX2hhc0ZvY3VzID0gdHJ1ZTtcbiAgICBtZS5faGFzRm9jdXMgPSBEYXRlLm5vdygpO1xuXG4gICAgaWYgKG1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQpIHtcbiAgICAgICAgLy9jbG9zZSB0cmFuc3BhcmVuY2Ugc2NyZWVuXG4gICAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgfVxuXG4gICAgbWUudGl0bGVCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbWUudGl0bGVCYXJDb2xvckZvY3VzZWQ7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUuY29sb3IgPSBtZS50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQ7XG5cblxuICAgIC8vYm9yZGVyIGNvbG9yXG4gICAgaWYgKG1lLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkKSB7XG4gICAgICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gbWUuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQ7XG4gICAgfVxuXG4gICAgLy9ib3JkZXIgd2lkdGhcbiAgICBpZiAobWUuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQpIHtcbiAgICAgICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSBtZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZDtcbiAgICAgICAgbWUuYWRqdXN0RnJhbWVCb3JkZXJSYWRpdXMoKTtcbiAgICB9XG5cbiAgICAvL2JvcmRlciBib3R0b21cbiAgICBpZiAobWUudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkKSB7XG4gICAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJvcmRlckJvdHRvbSA9IG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZDtcbiAgICB9XG5cbiAgICAvL2hhbmRsaW5nIGZvciBjaGlsZCBmcmFtZUNvbXBvbmVudHNcbiAgICBmb3IgKHZhciBmcmFtZUNvbXBvbmVudElkIGluIG1lLmZyYW1lQ29tcG9uZW50TWFwKSB7XG4gICAgICAgIHZhciBmcmFtZUNvbXBvbmVudCA9IG1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50SWRdO1xuICAgICAgICBmcmFtZUNvbXBvbmVudC5oYW5kbGVUYWtpbmdGb2N1cygpXG4gICAgfVxuXG5cbiAgICAvL3VwZGF0ZSBzdHlsZSBjbGFzc1xuICAgIG1lLnRpdGxlQmFyLmNsYXNzTmFtZSA9IG1lLnRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDtcbiAgICByZXR1cm4gbWU7XG59O1xuXG5cbkNJZkZyYW1lLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBtZS5yZXF1ZXN0Rm9jdXMoKTtcbiAgICByZXR1cm4gbWU7XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICByZXR1cm4gbWU7XG59O1xuXG4vL092ZXJyaWRpbmcgQ0JlYW5GcmFtZS5wcm90b3R5cGUub25tb3VzZURvd25cbkNJZkZyYW1lLnByb3RvdHlwZS5vbm1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICB2YXIgcmVmSHRtbEVsZW1lbnQgPSB0aGlzO1xuXG4gICAgLy9EbyBub3Qgc2VsZWN0IGl0IHdoZW4gZHJhZ2dpbmcgYnkgdGhlIG1vdXNlLlxuICAgIGRvY3VtZW50LmJvZHkub25kcmFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvLyBkb2N1bWVudC5ib2R5Lm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyB9O1xuXG5cbiAgICAvL092ZXJyaWRlIGRlY29yYXRvciB3aXRoIG9ubW91c2VEb3duIG9mIHBhcmVudCBjbGFzc1xuICAgIHJlZkh0bWxFbGVtZW50LmRlY29yYXRvciA9IENGcmFtZS5wcm90b3R5cGUub25tb3VzZURvd247XG4gICAgcmVmSHRtbEVsZW1lbnQuZGVjb3JhdG9yKGUpO1xuXG4gICAgLy9EZXBsb3kgYSB0cmFuc3BhcmVudCBzY3JlZW4uXG4gICAgLy8gU2luY2UgbW91c2VEb3duIGlzIHBvaW50ZWQgdG8gdGhpcy5odG1sRWxlbWVudC5vbm1vdXNlZG93biBpbiB0aGUgQ0JlYW4gY2xhc3MsXG4gICAgLy8gdGhpcyAndGhpcycgd2lsbCBpbmRpY2F0ZSB0aGlzLmh0bWxFbGVtZW50LlxuICAgIC8vSW4gb3RoZXIgd29yZHMsXG4gICAgLy9pZiB5b3Ugd2FudCB0byByZWZlciAnQ0lmRnJhbWUnLHlvdSBuZWVkIHRvIHNwZWNpZnkgJ3RoaXMucGFyZW50LidcbiAgICAvL1NlZSBDQmVhbkZyYW1lIGNsYXNzLCB5b3UgY2FuIGZpbmQgJ3RoaXMuaHRtbEVsZW1lbnQucGFyZW50ID0gdGhpcydcbiAgICB2YXIgcmVmQ0lmRnJhbWUgPSByZWZIdG1sRWxlbWVudC5wYXJlbnQ7XG5cblxuICAgIHZhciByZWZDV2luZG93TWFuYWdlciA9IHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcztcblxuICAgIC8vV2hlbiBzb21ld2hlcmUgd2luZG93KENGcmFtZSxDSWZGcmFtZSkgZmlyZXMgJ21vdXNlRG93bicsXG4gICAgLy8gQ2xvc2UgYWxsIHRyYW5zcGFyZW5jeSBzY3JlZW5zIHNvIHRoYXQgdGhlIG1vdXNlIGN1cnNvciBjYW4gcGFzcyBvdmVyIGFueSBpRnJhbWVcbiAgICBmb3IgKHZhciB3aW5kb3dJZCBpbiByZWZDV2luZG93TWFuYWdlci5iZWFuTGlzdCkge1xuICAgICAgICB2YXIgb2JqQ0lmRnJhbWUgPSByZWZDV2luZG93TWFuYWdlci5iZWFuTGlzdFt3aW5kb3dJZF07XG4gICAgICAgIGlmICh3aW5kb3dJZCA9PSByZWZDSWZGcmFtZS5nZXRXaW5kb3dJZCgpKSB7XG4gICAgICAgICAgICAvL3NraXBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iakNJZkZyYW1lLmhhbmRsZVJlbGVhc2luZ0ZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWZDSWZGcmFtZS5oYW5kbGVUYWtpbmdGb2N1cygpO1xuXG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUubW91c2VVcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHJlZkNJZkZyYW1lID0gdGhpcztcblxuXG4gICAgaWYgKHJlZkNJZkZyYW1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQgfHwgcmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuT25SZXNpemUpIHtcbiAgICAgICAgaWYgKHJlZkNJZkZyYW1lLnBhcmVudENhbnZhcy5vblRvcE9iamVjdCA9PSByZWZDSWZGcmFtZSkge1xuICAgICAgICAgICAgLy9NaW5pbWl6ZSB0aGUgd2luZG93IGF0IHRoZSBmcm9udC5cbiAgICAgICAgICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9UaGUgd2luZG93IHdoaWNoIGlzIG5vdCB0aGUgYXQgdGhlIGZyb250IGV4cGFuZHMgdGhlIHNjcmVlbiBzbyB0aGF0IGl0IGNhbiByZXNwb25kIHRvIGNsaWNrcy5cblxuICAgICAgICAgICAgaWYgKHJlZkNJZkZyYW1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUud2lkdGggPSBwYXJzZUludChyZWZDSWZGcmFtZS5pZnJhbWUud2lkdGgpICsgJ3B4JztcbiAgICAgICAgICAgICAgICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaWZyYW1lLmhlaWdodCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmQ0lmRnJhbWUuZGVjb3JhdG9yID0gQ0ZyYW1lLnByb3RvdHlwZS5tb3VzZVVwO1xuICAgIHJlZkNJZkZyYW1lLmRlY29yYXRvcihlKTtcblxuXG4gICAgLy9DYW5jZWwgc2VsZWN0aW5nIFwiRG8gbm90IHNlbGVjdCB3aGVuIGRyYWdnaW5nIG1vdXNlIHdoaWxlIHJlbGVhc2luZyBidXR0b25cIiBpcyBjYW5jZWxlZFxuICAgIGRvY3VtZW50LmJvZHkub25kcmFnID0gbnVsbDtcbiAgICBkb2N1bWVudC5ib2R5Lm9uc2VsZWN0c3RhcnQgPSBudWxsO1xuXG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUuc2V0TWluRnJhbWVTaXplID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLm1pbkZyYW1lV2lkdGggPSB3aWR0aDtcbiAgICBtZS5taW5XaW5kb3dIZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKGRlbHRhTGVmdCwgZGVsdGFUb3AsIGRlbHRhV2lkdGgsIGRlbHRhSGVpZ2h0LCBieVVzZXIpIHtcblxuICAgIHZhciByZWZDSWZGcmFtZSA9IHRoaXM7XG5cblxuICAgIGlmICghcmVmQ0lmRnJhbWUucmVzaXphYmxlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG4gICAgLy9SZXNpemUgcHJvY2Vzc2luZyBzaG91bGQgYmUgb3ZlcnJpZGRlbiBkaXJlY3RseSByYXRoZXIgdGhhbiBhZG9wdGluZyBhIGRlY29yYXRvciBwYXR0ZXJuIGJlY2F1c2UgaXQgaGFzIGJldHRlciBwZXJmb3JtYW5jZS5cbiAgICB2YXIgdG1wTGVmdCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKTtcbiAgICB2YXIgdG1wVG9wID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCk7XG4gICAgdmFyIHRtcFdpZHRoID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbiAgICB2YXIgdG1wSGVpZ2h0ID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCk7XG5cbiAgICAvL0ltcG9ydGFudCBsb2dpYyB0byBoYW5kbGUgdGhlIG1pbmltdW0gb2YgV2luZG93IHdlbGxcbiAgICBpZiAoYnlVc2VyICYmICh0bXBXaWR0aCArIGRlbHRhV2lkdGggPCByZWZDSWZGcmFtZS5taW5GcmFtZVdpZHRoICYgZGVsdGFXaWR0aCA8IDApKSB7XG4gICAgICAgIC8vTWluaW11bSBhZGp1c3RtZW50IG9mIHdpZHRoXG4gICAgICAgIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gdG1wV2lkdGggKyAncHgnO1xuICAgICAgICBkZWx0YVdpZHRoID0gMDtcbiAgICB9XG5cbiAgICBpZiAoYnlVc2VyICYmICh0bXBIZWlnaHQgKyBkZWx0YUhlaWdodCA8IHJlZkNJZkZyYW1lLm1pbldpbmRvd0hlaWdodCAmIGRlbHRhSGVpZ2h0IDwgMCkpIHtcbiAgICAgICAgLy9NaW5pbXVtIGFkanVzdG1lbnQgb2YgaGVpZ2h0XG4gICAgICAgIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRtcEhlaWdodDtcbiAgICAgICAgZGVsdGFIZWlnaHQgPSAwO1xuICAgIH1cbiAgICByZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHRtcExlZnQgKyBkZWx0YUxlZnQpICsgJ3B4JztcbiAgICByZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAodG1wVG9wICsgZGVsdGFUb3ApICsgJ3B4JztcbiAgICByZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9ICh0bXBXaWR0aCArIGRlbHRhV2lkdGgpICsgJ3B4JztcbiAgICByZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAodG1wSGVpZ2h0ICsgZGVsdGFIZWlnaHQpICsgJ3B4JztcblxuXG4gICAgdmFyIHRtcENhbnZhc1dpZHRoID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbiAgICB2YXIgdG1wQ2FudmFzSGVpZ2h0ID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCk7XG5cbiAgICAvL1NpbmNlIGNhbnZhc0VsZW1lbnQgaXMgYSAoMCwgMCkgcmVsYXRpdmUgY29vcmRpbmF0ZSB3aXRoIHJlc3BlY3RcbiAgICAvLyB0byB0aGUgcGFyZW50IGVsZW1lbnQsIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gY2hhbmdlIGxlZnQgYW5kIHRvcC5cbiAgICByZWZDSWZGcmFtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS53aWR0aCA9ICh0bXBDYW52YXNXaWR0aCArIGRlbHRhV2lkdGgpICsgJ3B4JztcbiAgICByZWZDSWZGcmFtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAodG1wQ2FudmFzSGVpZ2h0ICsgZGVsdGFIZWlnaHQpICsgJ3B4JztcblxuICAgIC8vQ2hhbmdlIHRoZSBzaXplIG9mIHRoZSB0aXRsZSBiYXIuIFRpdGxlQWRqdXN0V2lkdGggZXRjLlxuICAgIC8vIFRoZSByZWFzb24gd2h5IHlvdSBkbyBub3QgaGF2ZSB0byB1c2UgdGl0bGVBZGp1c3RXaWR0aCBpc1xuICAgIC8vIGJlY2F1c2UgdGhlc2Ugc2NhbGluZyBhcmUgZG9uZSB3aXRoIGRpZmZlcmVuY2VzIChkZWx0YVgsIGRlbHRhWSkuXG4gICAgLy9UaGVyZWZvcmUsIGlmIHlvdSBhZGp1c3Qgd2l0aCB0aGUgdGl0bGVBZGp1c3RXaWR0aFxuICAgIC8vIGFzIHRoZSBpbml0aWFsIHZhbHVlLCB0aGUgb3RoZXIgd2lsbCBzdHJldGNoIHJlbGF0aXZlLlxuICAgIHJlZkNJZkZyYW1lLnRpdGxlQmFyLnN0eWxlLndpZHRoID0gKHRtcENhbnZhc1dpZHRoIC0gcmVmQ0lmRnJhbWUuaWZEZWx0YSArIGRlbHRhV2lkdGggKyAwKSArICdweCc7XG5cbiAgICAvL0ltYWdlIHJlc2l6aW5nIGZvciBpZnJhbWUgdGhhdCBpcyB0aGUgY2hpbGQgZWxlbWVudCBvZiBjYW52YXNcbiAgICByZWZDSWZGcmFtZS5pZnJhbWUud2lkdGggPSAodG1wQ2FudmFzV2lkdGggLSByZWZDSWZGcmFtZS5pZkRlbHRhICsgZGVsdGFXaWR0aCArIDApICsgJ3B4JztcbiAgICByZWZDSWZGcmFtZS5pZnJhbWUuaGVpZ2h0ID0gKHRtcENhbnZhc0hlaWdodCAtIHJlZkNJZkZyYW1lLmlmRGVsdGEgKyBkZWx0YUhlaWdodCArIHJlZkNJZkZyYW1lLmZyYW1lSGVpZ2h0QWRqdXN0KSArICdweCc7XG5cblxuICAgIGlmIChyZWZDSWZGcmFtZS5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5FbmFibGVkIHx8IHJlZkNJZkZyYW1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbk9uUmVzaXplKSB7XG4gICAgICAgIC8vRGVwbG95IGEgdHJhbnNwYXJlbnQgc2NyZWVuLlxuICAgICAgICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUud2lkdGggPSBwYXJzZUludChyZWZDSWZGcmFtZS5pZnJhbWUud2lkdGgpICsgJ3B4JztcbiAgICAgICAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmlmcmFtZS5oZWlnaHQpICsgJ3B4JztcbiAgICB9XG5cbiAgICAvL21vdmUgZnJhbWVDb21wb25lbnQobGlrZSBjbG9zZUJ1dHRvbikgY29ycmVzcG9uZGluZyB0byBtb3Zpbmcgd2luZG93IGVkZ2UgZm9yIHJlc2l6ZVxuICAgIGZvciAodmFyIGZyYW1lQ29tcG9uZW50SWQgaW4gcmVmQ0lmRnJhbWUuZnJhbWVDb21wb25lbnRNYXApIHtcbiAgICAgICAgdmFyIGZyYW1lQ29tcG9uZW50ID0gcmVmQ0lmRnJhbWUuZnJhbWVDb21wb25lbnRNYXBbZnJhbWVDb21wb25lbnRJZF07XG4gICAgICAgIC8vdXBkYXRlIGFsaWdubWVudCBvZiBmcmFtZUNvbXBvbmVudCBjb3JyZXNwb25kaW5nIHRvIG1vdmluZyB3aW5kb3cgZWRnZSBmb3IgcmVzaXplXG4gICAgICAgIGZyYW1lQ29tcG9uZW50LnVwZGF0ZUFsaWduKClcbiAgICB9XG5cblxuICAgIGZvciAodmFyIGJlYW5OYW1lIGluIHJlZkNJZkZyYW1lLmNhbnZhcy5iZWFuTGlzdCkge1xuICAgICAgICB2YXIgdG1wQmVhbiA9IHJlZkNJZkZyYW1lLmNhbnZhcy5iZWFuTGlzdFtiZWFuTmFtZV07XG5cbiAgICAgICAgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudHlwZU5hbWUgPT0gJ2NtYXJrZXJ3aW5kb3cnKSB7XG5cbiAgICAgICAgICAgIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09ICdSRCcpIHtcbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0KSArIGRlbHRhV2lkdGgpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCkgKyBkZWx0YUhlaWdodCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSAnREQnKSB7XG4gICAgICAgICAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoKSArIGRlbHRhV2lkdGgpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCkgKyBkZWx0YUhlaWdodCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSAnUlInKSB7XG4gICAgICAgICAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCkgKyBkZWx0YVdpZHRoKSArICdweCc7XG4gICAgICAgICAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQpICsgZGVsdGFIZWlnaHQpICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07Ly9yZXNpemVcblxuQ0lmRnJhbWUucHJvdG90eXBlLnJlc2l6ZURpcmVjdCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBieVVzZXIpIHtcblxuICAgIHZhciByZWZDSWZGcmFtZSA9IHRoaXM7XG5cblxuICAgIGlmICghcmVmQ0lmRnJhbWUucmVzaXphYmxlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cblxuICAgIHZhciB0bXBDYW52YXNXaWR0aCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoKTtcbiAgICB2YXIgdG1wQ2FudmFzSGVpZ2h0ID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0KTtcblxuICAgIC8vU2luY2UgY2FudmFzRWxlbWVudCBpcyBhICgwLCAwKSByZWxhdGl2ZSBjb29yZGluYXRlIHdpdGggcmVzcGVjdFxuICAgIC8vIHRvIHRoZSBwYXJlbnQgZWxlbWVudCwgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byBjaGFuZ2UgbGVmdCBhbmQgdG9wLlxuICAgIHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgIHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCA9IChoZWlnaHQgLSByZWZDSWZGcmFtZS50aXRsZUJhci5zdHlsZS5oZWlnaHQpICsgJ3B4JztcblxuICAgIC8vQ2hhbmdlIHRoZSBzaXplIG9mIHRoZSB0aXRsZSBiYXIuIFRpdGxlQWRqdXN0V2lkdGggZXRjLlxuICAgIC8vIFRoZSByZWFzb24gd2h5IHlvdSBkbyBub3QgaGF2ZSB0byB1c2UgdGl0bGVBZGp1c3RXaWR0aCBpc1xuICAgIC8vIGJlY2F1c2UgdGhlc2Ugc2NhbGluZyBhcmUgZG9uZSB3aXRoIGRpZmZlcmVuY2VzIChkZWx0YVgsIGRlbHRhWSkuXG4gICAgLy9UaGVyZWZvcmUsIGlmIHlvdSBhZGp1c3Qgd2l0aCB0aGUgdGl0bGVBZGp1c3RXaWR0aFxuICAgIC8vIGFzIHRoZSBpbml0aWFsIHZhbHVlLCB0aGUgb3RoZXIgd2lsbCBzdHJldGNoIHJlbGF0aXZlLlxuICAgIHJlZkNJZkZyYW1lLnRpdGxlQmFyLnN0eWxlLndpZHRoID0gKHdpZHRoIC0gcmVmQ0lmRnJhbWUuaWZEZWx0YSkgKyAncHgnO1xuXG4gICAgLy9JbWFnZSByZXNpemluZyBmb3IgaWZyYW1lIHRoYXQgaXMgdGhlIGNoaWxkIGVsZW1lbnQgb2YgY2FudmFzXG4gICAgcmVmQ0lmRnJhbWUuaWZyYW1lLndpZHRoID0gd2lkdGggLSByZWZDSWZGcmFtZS5pZkRlbHRhICsgJ3B4JztcbiAgICByZWZDSWZGcmFtZS5pZnJhbWUuaGVpZ2h0ID0gaGVpZ2h0IC0gcmVmQ0lmRnJhbWUuaWZEZWx0YSArIHJlZkNJZkZyYW1lLmZyYW1lSGVpZ2h0QWRqdXN0ICsgJ3B4JztcblxuXG4gICAgaWYgKHJlZkNJZkZyYW1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQgfHwgcmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuT25SZXNpemUpIHtcbiAgICAgICAgLy9EZXBsb3kgYSB0cmFuc3BhcmVudCBzY3JlZW4uXG4gICAgICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmlmcmFtZS53aWR0aCkgKyAncHgnO1xuICAgICAgICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaWZyYW1lLmhlaWdodCkgKyAncHgnO1xuICAgIH1cblxuICAgIC8vbW92ZSBmcmFtZUNvbXBvbmVudChsaWtlIGNsb3NlQnV0dG9uKSBjb3JyZXNwb25kaW5nIHRvIG1vdmluZyB3aW5kb3cgZWRnZSBmb3IgcmVzaXplXG4gICAgZm9yICh2YXIgZnJhbWVDb21wb25lbnRJZCBpbiByZWZDSWZGcmFtZS5mcmFtZUNvbXBvbmVudE1hcCkge1xuICAgICAgICB2YXIgZnJhbWVDb21wb25lbnQgPSByZWZDSWZGcmFtZS5mcmFtZUNvbXBvbmVudE1hcFtmcmFtZUNvbXBvbmVudElkXTtcbiAgICAgICAgLy91cGRhdGUgYWxpZ25tZW50IG9mIGZyYW1lQ29tcG9uZW50IGNvcnJlc3BvbmRpbmcgdG8gbW92aW5nIHdpbmRvdyBlZGdlIGZvciByZXNpemVcbiAgICAgICAgZnJhbWVDb21wb25lbnQudXBkYXRlQWxpZ24oKVxuICAgIH1cblxuXG4gICAgZm9yICh2YXIgYmVhbk5hbWUgaW4gcmVmQ0lmRnJhbWUuY2FudmFzLmJlYW5MaXN0KSB7XG4gICAgICAgIHZhciB0bXBCZWFuID0gcmVmQ0lmRnJhbWUuY2FudmFzLmJlYW5MaXN0W2JlYW5OYW1lXTtcblxuICAgICAgICBpZiAodG1wQmVhbi5odG1sRWxlbWVudC50eXBlTmFtZSA9PSAnY21hcmtlcndpbmRvdycpIHtcblxuICAgICAgICAgICAgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gJ1JEJykge1xuICAgICAgICAgICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHdpZHRoICsgJ3B4JzsvLyBwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQpICsgZGVsdGFXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3AgPSBoZWlnaHQgKyAncHgnOy8vcGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3ApICsgZGVsdGFIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSAnREQnKSB7XG4gICAgICAgICAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IGhlaWdodCArICdweCc7Ly9oZWlnaHRwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCkgKyBkZWx0YUhlaWdodCArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09ICdSUicpIHtcbiAgICAgICAgICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSB3aWR0aCArICdweCc7Ly8rcGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0KSArIGRlbHRhV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07Ly9yZXNpemVcblxuLyoqXG4gKiBGb2N1cyBvbiB0aGlzIGZyYW1lXG4gKi9cbkNJZkZyYW1lLnByb3RvdHlwZS5yZXF1ZXN0Rm9jdXMgPSBmdW5jdGlvbiAoKSB7XG5cblxuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICB2YXIgYmVhbkxpc3QgPSBtZS5wYXJlbnRDYW52YXMuYmVhbkxpc3Q7XG5cbiAgICBmb3IgKHZhciB3aW5kb3dJZCBpbiBiZWFuTGlzdCkge1xuXG4gICAgICAgIHZhciB0bXBJZldpbmRvdyA9IGJlYW5MaXN0W3dpbmRvd0lkXTtcblxuICAgICAgICAvL0lmIGl0J3MgbXkgb3duIHdpbmRvdywgbWluaW1pemUgdGhlIHRyYW5zcGFyZW50IHNjcmVlbiBhbmQgY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgdGl0bGUgYmFyLlxuICAgICAgICBpZiAod2luZG93SWQgPT0gbWUuZ2V0V2luZG93SWQoKSkge1xuXG4gICAgICAgICAgICAvL2lmIHRoaXMgZnJhbWUgaXMgYSB0YXJnZXQgZnJhbWVcbiAgICAgICAgICAgIHRtcElmV2luZG93LmhhbmRsZVRha2luZ0ZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgIC8vaWYgdGhpcyBmcmFtZSBpcyBOT1QgYSB0YXJnZXQgZnJhbWVcbiAgICAgICAgICAgIHRtcElmV2luZG93LmhhbmRsZVJlbGVhc2luZ0ZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZS5wYXJlbnRDYW52YXMucHVsbFVwKG1lLmlkKTtcblxufTtcblxuLyoqXG4gKiBVUkwgZm9yIGlmcmFtZVxuICogQHBhcmFtIHVybFxuICovXG5DSWZGcmFtZS5wcm90b3R5cGUuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuXG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cblxuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICBtZS5zZXRVc2VJZnJhbWUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5zZXRVc2VJZnJhbWUoZmFsc2UpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBtZS5pZnJhbWUuc3JjID0gdXJsO1xuXG4gICAgICAgIG1lLmlmcmFtZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vbW91c2UgbW92ZVxuICAgICAgICAgICAgbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBmcmFtZUxlZnQgPSBtZS5nZXRMZWZ0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGZyYW1lVG9wID0gbWUuZ2V0VG9wKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRGcm9tSWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XG4gICAgICAgICAgICAgICAgZXZlbnRGcm9tSWZyYW1lLmluaXRNb3VzZUV2ZW50KCdtb3VzZW1vdmUnLCB0cnVlLCBmYWxzZSwgd2luZG93LCBlLmRldGFpbCwgZS5zY3JlZW5YLCBlLnNjcmVlblksIChlLnBhZ2VYICsgZnJhbWVMZWZ0KSwgKGUucGFnZVkgKyBmcmFtZVRvcCksXG4gICAgICAgICAgICAgICAgICAgIGUuY3RybEtleSwgZS5hbHRLZXksIGUuc2hpZnRLZXksIGUubWV0YUtleSwgZS5idXR0b24sIG51bGwpO1xuXG4gICAgICAgICAgICAgICAgLy9zbW9vdGggZHJhZ2dpbmcgZHVyaW5nIGlmcmFtZSBtb2RlXG4gICAgICAgICAgICAgICAgbWUucGFyZW50Q2FudmFzLndpbmRvd01vdXNlTW92ZShldmVudEZyb21JZnJhbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1lLm9uTW91c2VNb3ZlT25JZnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUub25Nb3VzZU1vdmVPbklmcmFtZShldmVudEZyb21JZnJhbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vbW91c2UgdXBcbiAgICAgICAgICAgIG1lLmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyYW1lTGVmdCA9IG1lLmdldExlZnQoKTtcbiAgICAgICAgICAgICAgICB2YXIgZnJhbWVUb3AgPSBtZS5nZXRUb3AoKTtcblxuICAgICAgICAgICAgICAgIHZhciBldmVudEZyb21JZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcbiAgICAgICAgICAgICAgICBldmVudEZyb21JZnJhbWUuaW5pdE1vdXNlRXZlbnQoJ21vdXNldXAnLCB0cnVlLCBmYWxzZSwgd2luZG93LCBlLmRldGFpbCwgZS5zY3JlZW5YLCBlLnNjcmVlblksIChlLnBhZ2VYICsgZnJhbWVMZWZ0KSwgKGUucGFnZVkgKyBmcmFtZVRvcCksXG4gICAgICAgICAgICAgICAgICAgIGUuY3RybEtleSwgZS5hbHRLZXksIGUuc2hpZnRLZXksIGUubWV0YUtleSwgZS5idXR0b24sIG51bGwpO1xuXG4gICAgICAgICAgICAgICAgLy9zbW9vdGggZHJhZ2dpbmcgZHVyaW5nIGlmcmFtZSBtb2RlXG4gICAgICAgICAgICAgICAgbWUucGFyZW50Q2FudmFzLndpbmRvd01vdXNlVXAoZXZlbnRGcm9tSWZyYW1lKTtcblxuICAgICAgICAgICAgICAgIGlmIChtZS5vbk1vdXNlVXBPbklmcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5vbk1vdXNlVXBPbklmcmFtZShldmVudEZyb21JZnJhbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICByZXNvbHZlKG1lLmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50KTtcbiAgICAgICAgfTtcblxuXG4gICAgfSk7XG5cblxufTtcblxuXG4vKipcbiAqIFJldHVybnMgRE9NLWRvY3VtZW50IG9mIGlmcmFtZVxuICogQHJldHVybnMgeyp8SFRNTERvY3VtZW50fVxuICovXG5DSWZGcmFtZS5wcm90b3R5cGUuZ2V0SWZEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHJldHVybiBtZS5pZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRTY3JvbGxpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5pZnJhbWUuc2Nyb2xsaW5nID0gc3RyO1xufTtcblxuQ0lmRnJhbWUucHJvdG90eXBlLmdldFNjcm9sbGluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHJldHVybiBtZS5pZnJhbWUuc2Nyb2xsaW5nXG59O1xuXG5cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRSZXNpemFibGUgPSBmdW5jdGlvbiAoZW5hYmxlZCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBtZS5yZXNpemFibGUgPSBlbmFibGVkO1xuICAgIGlmICghZW5hYmxlZCkge1xuICAgICAgICBtZS5yZW1vdmVNYXJrZXJzMigpO1xuICAgIH1cbiAgICByZXR1cm4gbWU7XG59O1xuLyoqXG4gKiBlbmQgb2YgQ0lGcmFtZSBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG5cbmluaGVyaXQoQ1dpbmRvd01hbmFnZXIsIENDYW52YXMpO1xuXG4vKipcbiAqIENXaW5kb3dNYW5hZ2VyIGNsYXNzXG4gKiA8cD5cbiAqIEEgY2FudmFzIGNsYXNzIHRoYXQgZGlzcGxheXMgbXVsdGlwbGUgZnJhbWVzLiBIYW5kbGUgZXZlbnRzIG9uIHRoZSB3aW5kb3cgdG8gY29vcmRpbmF0ZSBtdWx0aXBsZSB3aW5kb3dzPGJyPlxuICpcbiAqIEBwYXJhbSBwYXJlbnRFbGVtZW50XG4gKiBAcGFyYW0gY2FudmFzSWRcbiAqIEBwYXJhbSBsZWZ0XG4gKiBAcGFyYW0gdG9wXG4gKiBAcGFyYW0gd2lkdGhcbiAqIEBwYXJhbSBoZWlnaHRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDV2luZG93TWFuYWdlcihwYXJlbnRFbGVtZW50LCBjYW52YXNJZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgQ1dpbmRvd01hbmFnZXIuc3VwZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHBhcmVudEVsZW1lbnQsIGNhbnZhc0lkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpO1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGZvciAodmFyIHdpbmRvd0lkIGluIG1lLmJlYW5MaXN0KSB7XG4gICAgICAgICAgICB2YXIgYmVhbkZyYW1lID0gbWUuYmVhbkxpc3Rbd2luZG93SWRdO1xuICAgICAgICAgICAgYmVhbkZyYW1lLm9uQm9keUNsaWNrZWQoZXZ0KVxuICAgICAgICB9XG5cbiAgICB9KTtcbn1cblxuQ1dpbmRvd01hbmFnZXIucHJvdG90eXBlLmdldFdpbmRvdyA9IGZ1bmN0aW9uICh3aW5kb3dJZCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG1lLmJlYW5MaXN0W3dpbmRvd0lkXTtcbn07XG5cbi8vV3JhcHBpbmcgdGhlICdhZGRCZWFuJyBvZiB0aGUgcGFyZW50IGNsYXNzXG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUuYWRkV2luZG93ID0gZnVuY3Rpb24gKHdpbmRvdykge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICAvLzIwMTgwNzI0XG4gICAgdmFyIHdpbmRvd0lkID0gd2luZG93LmdldFdpbmRvd0lkKCk7XG4gICAgdmFyIG5hbWUgPSB3aW5kb3cuZ2V0TmFtZSgpO1xuICAgIG1lLmJlYW5JZE5hbWVbd2luZG93SWRdID0gbmFtZTtcbiAgICBtZS5iZWFuTmFtZUlkW25hbWVdID0gd2luZG93SWQ7XG5cbiAgICBtZS5hZGRCZWFuKHdpbmRvdyk7XG59O1xuXG4vLzIwMTgwNzI0IGlmIGNvbnRhaW5zIHdpbmRvdyBuYW1lZCBzcGVjaWZpZWQgbmFtZVxuQ1dpbmRvd01hbmFnZXIucHJvdG90eXBlLmNvbnRhaW5zV2luZG93TmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuXG4gICAgdmFyIHdpbmRvd0lkID0gbWUuYmVhbk5hbWVJZFtuYW1lXTtcblxuICAgIGlmICh3aW5kb3dJZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuXG4vLzIwMTgwNzI0XG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUuZ2V0V2luZG93QnlOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHZhciB3aW5kb3dJZCA9IG1lLmJlYW5OYW1lSWRbbmFtZV07XG5cbiAgICBpZiAod2luZG93SWQpIHtcbiAgICAgICAgcmV0dXJuIG1lLmdldFdpbmRvdyh3aW5kb3dJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufTtcblxuLy9XcmFwcGluZyB0aGUgJ21vdXNlTW92ZScgbWV0aG9kIG9mIHRoZSBwYXJlbnQgY2xhc3NcbkNXaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS53aW5kb3dNb3VzZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgaWYgKG1lLmN1cnJlbnRPYmplY3QgPT0gbnVsbCkge1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBjaGlsZFdpbmRvd01vdmVkID0gZmFsc2U7XG5cbiAgICAvL0xvb3AgcHJvY2Vzc2luZyBvZiBlYWNoIENXaW5kb3cgaGVsZCBieSBDV2luZG93TWFuYWdlclxuICAgIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuXG4gICAgZm9yICh2YXIgd2luZG93SWQgaW4gIGJlYW5MaXN0KSB7XG5cbiAgICAgICAgdmFyIHRhcmdldFdpbmRvdyA9IGJlYW5MaXN0W3dpbmRvd0lkXTtcblxuXG4gICAgICAgIC8vU2luY2UgdGhpcyAnbW91c2VNb3ZlJyBpcyBjYW52YXMgb2YgQ1dpbmRvdydzICdtb3VzZU1vdmUnLHNvIGRvIG1vdmUgQ0JlYW5GcmFtZXMgaW4gdGhlIGNhbnZhcy5cbiAgICAgICAgdmFyIGV2ZW50RGF0YSA9IHRhcmdldFdpbmRvdy5jYW52YXMubW91c2VNb3ZlKGUpO1xuXG4gICAgICAgIC8vV2hldGhlciBhbnkgb25lIG9mIHRoZSBiZWFucyBpbiB0aGUgQ2FudmFzIGhhcyBtb3ZlZCBvciBub3QuXG4gICAgICAgIC8vWWVzLihXaGVuIGl0IG1vdmVzKSwgZXZlbnREYXRhIGlzIHNldC5cbiAgICAgICAgLy9OTy4gSWYgaXQgZG9lcyBub3QgbW92ZSBpdCBpcyBzZXQgdG8gbnVsbC5cbiAgICAgICAgY2hpbGRXaW5kb3dNb3ZlZCA9IGNoaWxkV2luZG93TW92ZWQgfCAoZXZlbnREYXRhICE9IG51bGwpO1xuICAgICAgICBpZiAoZXZlbnREYXRhICE9IG51bGwpIHtcblxuICAgICAgICAgICAgLy9JZiBpdCBpcyB0aGUgbWFya2VyIGZvciByZXNpemluZ1xuICAgICAgICAgICAgaWYgKGV2ZW50RGF0YS50YXJnZXRUeXBlTmFtZSA9PSAnY21hcmtlcndpbmRvdycpIHtcblxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRPYmplY3QgPSBldmVudERhdGEudGFyZ2V0T2JqZWN0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldE9iamVjdC51c2FnZSA9PSAnUkQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFdpbmRvdy5yZXNpemUoMCwgMCwgZXZlbnREYXRhLmRlbHRhWCwgZXZlbnREYXRhLmRlbHRhWSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0T2JqZWN0LnVzYWdlID09ICdERCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0V2luZG93LnJlc2l6ZSgwLCAwLCAwLCBldmVudERhdGEuZGVsdGFZLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0YXJnZXRPYmplY3QudXNhZ2UgPT0gJ1JSJykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRXaW5kb3cucmVzaXplKDAsIDAsIGV2ZW50RGF0YS5kZWx0YVgsIDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9JZiBhbnkgb25lIG9mIHRoZSBiZWFucyBpbiB0aGUgQ2FudmFzIGhhcyBtb3ZlZC5EbyBub3QgZG8gJ0N3aW5kb3cncyBtb3VzZU1vdmUnXG4gICAgaWYgKCFjaGlsZFdpbmRvd01vdmVkICYmIHRoaXMubW91c2VEb3duU291cmNlICE9ICdjaGlsZGNhbnZhcycpIHtcblxuICAgICAgICAvL01vdmluZyBsb2dpYyBmb3IgQ1dpbmRvdyB3aGljaCBpcyBob2xkZWQgYnkgQ1dpbmRvd01hbmFnZXIgYXMgYSBjaGlsZCB3aW5kb3cuXG4gICAgICAgIG1lLm1vdXNlTW92ZShlKTtcbiAgICB9XG5cbn07XG5cbi8vV3JhcHBpbmcgdGhlIG1ldGhvZCAnbW91c2VVcCcgb2YgdGhlIHBhcmVudCBjbGFzc1xuQ1dpbmRvd01hbmFnZXIucHJvdG90eXBlLndpbmRvd01vdXNlVXAgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICAvL3J1biAnbW91c2VVcCcgb2YgcGFyZW50IGNsYXNzXG4gICAgbWUubW91c2VVcChlKTtcblxuICAgIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuXG4gICAgZm9yICh2YXIgd2luZG93SWQgaW4gIGJlYW5MaXN0KSB7XG5cbiAgICAgICAgdmFyIG9ialdpbmRvdyA9IGJlYW5MaXN0W3dpbmRvd0lkXTtcblxuICAgICAgICAvL3J1biBDV2luZG93J3MgJ21vdXNlVXAnKGl0J3MgY2hpbGQgd2luZG93KS5cbiAgICAgICAgb2JqV2luZG93Lm1vdXNlVXAoZSk7XG4gICAgfVxuXG59O1xuXG4vKipcbiAqIChvdmVycmlkZSBDQ2FudmFzLnJlbW92ZUJlYW4pXG4gKiBAcGFyYW0gd2luZG93SWRcbiAqL1xuQ1dpbmRvd01hbmFnZXIucHJvdG90eXBlLnJlbW92ZUJlYW4gPSBmdW5jdGlvbiAod2luZG93SWQpIHtcblxuXG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIC8vUmV0cmlldmUgdGhlIHRhcmdldCBiZWFuRnJhbWVcbiAgICB2YXIgYmVhbkxpc3QgPSBtZS5iZWFuTGlzdDtcbiAgICB2YXIgdGFyZ2V0QmVhbiA9IGJlYW5MaXN0W3dpbmRvd0lkXTtcblxuICAgIGlmICh0YXJnZXRCZWFuID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciByZW1vdmVUYXJnZXRCZWFuSGFzRm9jdXMgPSB0YXJnZXRCZWFuLl9oYXNGb2N1cztcblxuXG4gICAgLy9SZW1vdmUgYmVhbidzIGh0bWxFbGVtZW50IGZyb20gY2FudmFzRWxlbWVudFxuICAgIG1lLmNhbnZhc0VsZW1lbnQucmVtb3ZlQ2hpbGQodGFyZ2V0QmVhbi5odG1sRWxlbWVudCk7XG5cbiAgICAvL0RlbGV0ZSB0aGUgYmVhbiBvYmplY3QgaW4gdGhlIGFzc29jaWF0aXZlIGFycmF5LlxuICAgIGRlbGV0ZSBiZWFuTGlzdFt3aW5kb3dJZF07XG5cbiAgICAvLzIwMTgwNzI0W3N0YXJ0XVxuICAgIHZhciBiZWFuTmFtZSA9IG1lLmJlYW5JZE5hbWVbd2luZG93SWRdO1xuICAgIGlmIChiZWFuTmFtZSkge1xuICAgICAgICAvLy1pZiBiZWFuIG5hbWUgZXhpc3RcbiAgICAgICAgZGVsZXRlIG1lLmJlYW5JZE5hbWVbd2luZG93SWRdO1xuICAgICAgICBkZWxldGUgbWUuYmVhbk5hbWVJZFtiZWFuTmFtZV07XG4gICAgfVxuICAgIC8vMjAxODA3MjRbZW5kXVxuXG5cbiAgICAvL2ZvY3VzIG9uIGxhc3QgZm9jdXNlZCB3aW5kb3cgYWZ0ZXIgcmVtb3ZpbmdcbiAgICB2YXIgbWF4Rm9jdXNUaW1lID0gMDtcbiAgICB2YXIgbGFzdEZvY3VzZWRGcmFtZSA9IG51bGw7XG5cbiAgICBpZiAocmVtb3ZlVGFyZ2V0QmVhbkhhc0ZvY3VzKSB7XG4gICAgICAgIGZvciAodmFyIHdpbmRvd0lkIGluIGJlYW5MaXN0KSB7XG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBiZWFuTGlzdFt3aW5kb3dJZF07XG4gICAgICAgICAgICBpZiAobWF4Rm9jdXNUaW1lIDw9IGZyYW1lLl9oYXNGb2N1c1RpbWUpIHtcbiAgICAgICAgICAgICAgICBtYXhGb2N1c1RpbWUgPSBmcmFtZS5faGFzRm9jdXNUaW1lO1xuICAgICAgICAgICAgICAgIGxhc3RGb2N1c2VkRnJhbWUgPSBmcmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdEZvY3VzZWRGcmFtZSkge1xuICAgICAgICAgICAgbGFzdEZvY3VzZWRGcmFtZS5yZXF1ZXN0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIGVuZCBvZiBDV2luZG93TWFuYWdlciBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG5pbmhlcml0KENNYXJrZXJXaW5kb3csIENCZWFuRnJhbWUpO1xuXG4vKipcbiAqIENNYXJrZXJXaW5kb3cgY2xhc3NcbiAqIEBwYXJhbSB3aW5kb3dJZFxuICogQHBhcmFtIGxlZnRcbiAqIEBwYXJhbSB0b3BcbiAqIEBwYXJhbSB3aWR0aFxuICogQHBhcmFtIGhlaWdodFxuICogQHBhcmFtIHppbmRleFxuICogQHBhcmFtIHVzYWdlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ01hcmtlcldpbmRvdyh3aW5kb3dJZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCB6aW5kZXgsIHVzYWdlKSB7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgQ01hcmtlcldpbmRvdy5zdXBlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgd2luZG93SWQsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgemluZGV4LCB1c2FnZSk7XG5cbiAgICBtZS5odG1sRWxlbWVudC50eXBlTmFtZSA9ICdjbWFya2Vyd2luZG93JztcbiAgICBtZS5odG1sRWxlbWVudC51c2FnZSA9IHVzYWdlO1xuICAgIG1lLmh0bWxFbGVtZW50LmlzUmFuZ2VMaW1pdGVkID0gZmFsc2U7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSAnbm9uZSc7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4ID0gMTtcblxufVxuXG4vKipcbiAqIEVuZCBvZiBDTWFya2VyV2luZG93IGNsYXNzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuLyoqXG4gKiBGcmFtZU1hbmFnZXIgY2xhc3NcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gSlNGcmFtZShwYXJlbnRFbGVtZW50KSB7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG5cbiAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBtb3VzZVVwO1xuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbW91c2VNb3ZlO1xuXG4gICAgaWYgKCFwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgIH1cblxuXG4gICAgbWUud2luZG93TWFuYWdlciA9IG5ldyBDV2luZG93TWFuYWdlcihwYXJlbnRFbGVtZW50LCAnd2luZG93TWFuYWdlcl8nICsgbWUuZ2VuZXJhdGVVVUlEKCksIDAsIDAsIDAsIDApO1xuICAgIC8vbWUud2luZG93TWFuYWdlciA9IG5ldyBDV2luZG93TWFuYWdlcihkb2N1bWVudC5ib2R5LCAnd2luZG93TWFuYWdlcl8nICsgbWUuZ2VuZXJhdGVVVUlEKCksIDAsIDAsIDAsIDApO1xuICAgIG1lLmRvbVBhcnRzQnVpbGRlciA9IG51bGw7XG5cblxuICAgIGZ1bmN0aW9uIG1vdXNlVXAoZSkge1xuICAgICAgICBtZS53aW5kb3dNYW5hZ2VyLndpbmRvd01vdXNlVXAoZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW91c2VNb3ZlKGUpIHtcbiAgICAgICAgbWUud2luZG93TWFuYWdlci53aW5kb3dNb3VzZU1vdmUoZSk7XG4gICAgICAgIHZhciBnbG9iYWxNb3VzZVggPSBlLnBhZ2VYO1xuICAgICAgICB2YXIgZ2xvYmFsTW91c2VZID0gZS5wYWdlWTtcbiAgICB9XG5cblxufVxuXG5KU0ZyYW1lLnByb3RvdHlwZS5nZXREb21QYXJ0c0J1aWxkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIGlmICghbWUuZG9tUGFydHNCdWlsZGVyKSB7XG4gICAgICAgIG1lLmRvbVBhcnRzQnVpbGRlciA9IG5ldyBDRG9tUGFydHNCdWlsZGVyKCk7XG4gICAgfVxuICAgIHJldHVybiBtZS5kb21QYXJ0c0J1aWxkZXI7XG59O1xuXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IHdpbmRvd1xuICpcbiAqIEByZXR1cm5zIHtDSWZGcmFtZX1cbiAqL1xuSlNGcmFtZS5wcm90b3R5cGUuY3JlYXRlRnJhbWUgPSBmdW5jdGlvbiAobGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCBhcHBlYXJhbmNlLCBwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIGlmICghYXBwZWFyYW5jZSkge1xuICAgICAgICBhcHBlYXJhbmNlID0gbWUuY3JlYXRlRnJhbWVBcHBlYXJhbmNlKCk7XG4gICAgfVxuXG4gICAgYXBwZWFyYW5jZS5pbml0aWFsaXplKCk7XG5cbiAgICB2YXIgd2luZG93SWQgPSAnd2luZG93XycgKyBtZS5nZW5lcmF0ZVVVSUQoKTtcblxuICAgIHZhciBmcmFtZSA9IG5ldyBDSWZGcmFtZSh3aW5kb3dJZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCBhcHBlYXJhbmNlKTtcblxuICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMud2luZG93TmFtZSkge1xuICAgICAgICBmcmFtZS5zZXROYW1lKHByb3BlcnRpZXMud2luZG93TmFtZSk7XG4gICAgfVxuICAgIGZyYW1lLmhpZGUoKTtcblxuICAgIG1lLndpbmRvd01hbmFnZXIuYWRkV2luZG93KGZyYW1lKTtcblxuXG4gICAgcmV0dXJuIGZyYW1lO1xuXG59O1xuXG4vLzIwMTgwNzI0IGp1c3QgV3JhcHBlZCB3aW5kb3dtYW5hZ2VyI2NvbnRhaW5zV2luZG93TmFtZVxuSlNGcmFtZS5wcm90b3R5cGUuY29udGFpbnNXaW5kb3dOYW1lID0gZnVuY3Rpb24gKHdpbmRvd05hbWUpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHJldHVybiBtZS53aW5kb3dNYW5hZ2VyLmNvbnRhaW5zV2luZG93TmFtZSh3aW5kb3dOYW1lKTtcbn07XG4vLzIwMTgwNzI0IGp1c3QgV3JhcHBlZCB3aW5kb3dtYW5hZ2VyI2dldFdpbmRvd0J5TmFtZVxuSlNGcmFtZS5wcm90b3R5cGUuZ2V0V2luZG93QnlOYW1lID0gZnVuY3Rpb24gKHdpbmRvd05hbWUpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHJldHVybiBtZS53aW5kb3dNYW5hZ2VyLmdldFdpbmRvd0J5TmFtZSh3aW5kb3dOYW1lKTtcbn07XG5cbkpTRnJhbWUucHJvdG90eXBlLmdlbmVyYXRlVVVJRCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciB1bml4VGltZSA9IERhdGUubm93KCk7XG5cbiAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgdmFyIHIgPSAodW5peFRpbWUgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgICB1bml4VGltZSA9IE1hdGguZmxvb3IodW5peFRpbWUgLyAxNik7XG4gICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpKS50b1N0cmluZygxNik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHV1aWQ7XG5cbn07XG5cbkpTRnJhbWUucHJvdG90eXBlLmNyZWF0ZUZyYW1lQXBwZWFyYW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IENGcmFtZUFwcGVhcmFuY2UoKTtcbn07XG5cbkpTRnJhbWUucHJvdG90eXBlLmNyZWF0ZUFuaW1hdG9yID0gZnVuY3Rpb24gKCkge1xuXG4gICAgcmV0dXJuIG5ldyBDU2ltcGxlTGF5b3V0QW5pbWF0b3IoKTtcbn07XG4vKipcbiAqIGVuZCBvZiBGcmFtZU1hbmFnZXIgY2xhc3NcbiAqL1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuLyoqXG4gKiBDRnJhbWVDb21wb25lbnQgY2xhc3NcbiAqIDxwPlxuICogV3JhcHBlZCBET00gZWxlbWVudCBsaWtlICdkaXYnIHRvIGRpc3BsYXkgYWJvdmUgdGhlIGZyYW1lPGJyPlxuICpcbiAqIGV4LkFuIG9iamVjdCBzdWNoIGFzIGNsb3NlQnV0dG9uXG4gKlxuICogQHBhcmFtIGlkXG4gKiBAcGFyYW0gZnJhbWVcbiAqIEBwYXJhbSBodG1sRWxlbWVudCBET00tZWxlbWVudFxuICogQHBhcmFtIHggcmVsYXRpdmUgeC1wb3NpdGlvbiBpbiB0aGUgZnJhbWUgcmVzcGVjdCB0byBhbGlnblxuICogQHBhcmFtIHkgcmVsYXRpdmUgeS1wb3NpdGlvbiBpbiB0aGUgZnJhbWUgcmVzcGVjdCB0byBhbGlnblxuICogQHBhcmFtIGFsaWduIHJlbGF0aXZlIGFsaWdubWVudCBpbiB0aGUgZnJhbWVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDRnJhbWVDb21wb25lbnQoaWQsIGh0bWxFbGVtZW50LCB4LCB5LCBhbGlnbikge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBtZS5pZCA9IGlkO1xuICAgIG1lLnggPSB4O1xuICAgIG1lLnkgPSB5O1xuICAgIG1lLmZyYW1lID0gbnVsbDtcblxuICAgIG1lLl9mb2N1c1Rha2luZ0NhbGxhYmNrID0gbnVsbDtcbiAgICBtZS5fZm9jdXNSZWxlYXNpbmdDYWxsYWJjayA9IG51bGw7XG5cbiAgICBpZiAoYWxpZ24pIHtcbiAgICAgICAgbWUuZnJhbWVDb21wb25lbnRBbGlnbiA9IGFsaWduO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lLmZyYW1lQ29tcG9uZW50QWxpZ24gPSBDQUxJR04uTEVGVF9UT1A7XG4gICAgfVxuXG4gICAgbWUuaHRtbEVsZW1lbnQgPSBodG1sRWxlbWVudDtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS56SW5kZXggPSA1MDtcblxufVxuXG5DRnJhbWVDb21wb25lbnQucHJvdG90eXBlLnNldEZvY3VzQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZm9jdXNUYWtpbmdDYWxsYmFjaywgZm9jdXNSZWxlYXNpbmdDYWxsYmFjaykge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuX2ZvY3VzVGFraW5nQ2FsbGFiY2sgPSBmb2N1c1Rha2luZ0NhbGxiYWNrO1xuICAgIG1lLl9mb2N1c1JlbGVhc2luZ0NhbGxhYmNrID0gZm9jdXNSZWxlYXNpbmdDYWxsYmFjaztcbn07XG5cbi8qKlxuICogU2V0IHBhcmVudCBmcmFtZSBvZiB0aGlzIGZyYW1lQ29tcG9uZW50XG4gKiBAcGFyYW0gZnJhbWVcbiAqL1xuQ0ZyYW1lQ29tcG9uZW50LnByb3RvdHlwZS5zZXRGcmFtZSA9IGZ1bmN0aW9uIChmcmFtZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBtZS5mcmFtZSA9IGZyYW1lO1xuICAgIG1lLmh0bWxFbGVtZW50LnBhcmVudE9iamVjdCA9IGZyYW1lO1xuICAgIG1lLnVwZGF0ZUFsaWduKCk7XG59O1xuXG4vKipcbiAqIFBsYWNlIHRoZSBGcmFtZUNvbXBvbmVudCByZWxhdGl2ZSB0byB0aGUgcGFyZW50J3MgZnJhbWUuXG4gKiBSZWxvY2F0ZSByZWxhdGl2ZSB0byBwYXJlbnQgZnJhbWUgd2hlbiB3aW5kb3cgcmVzaXplIGV2ZW50IG9jY3Vyc1xuICovXG5DRnJhbWVDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZUFsaWduID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIHZhciBmcmFtZUNvbXBvbmVudEFsaWduID0gbWUuZnJhbWVDb21wb25lbnRBbGlnbjtcblxuICAgIHZhciBmcmFtZSA9IG1lLmZyYW1lO1xuICAgIHZhciBlbGVTdHlsZSA9IG1lLmh0bWxFbGVtZW50LnN0eWxlO1xuICAgIGVsZVN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG5cbiAgICB2YXIgeCA9IG1lLng7XG4gICAgdmFyIHkgPSBtZS55O1xuXG4gICAgdmFyIGZyYW1lV2lkdGggPSBmcmFtZS5nZXRXaWR0aCgpO1xuICAgIHZhciBmcmFtZUhlaWdodCA9IGZyYW1lLmdldEhlaWdodCgpO1xuICAgIHZhciBlbGVTdHlsZVdpZHRoID0gZWxlU3R5bGUud2lkdGg7XG4gICAgdmFyIGVsZVN0eWxlSGVpZ2h0ID0gZWxlU3R5bGUuaGVpZ2h0O1xuXG4gICAgaWYgKENBTElHTi5MRUZUX1RPUCA9PSBmcmFtZUNvbXBvbmVudEFsaWduKSB7XG4gICAgICAgIGVsZVN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgZWxlU3R5bGUudG9wID0geSArICdweCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1RPUCA9PSBmcmFtZUNvbXBvbmVudEFsaWduKSB7XG4gICAgICAgIGVsZVN0eWxlLmxlZnQgPSAocGFyc2VJbnQoZnJhbWVXaWR0aCkgLyAyIC0gcGFyc2VJbnQoZWxlU3R5bGVXaWR0aCkgLyAyICsgeCkgKyAncHgnO1xuICAgICAgICBlbGVTdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX1RPUCA9PSBmcmFtZUNvbXBvbmVudEFsaWduKSB7XG4gICAgICAgIGVsZVN0eWxlLmxlZnQgPSAocGFyc2VJbnQoZnJhbWVXaWR0aCkgLSBwYXJzZUludChlbGVTdHlsZVdpZHRoKSArIHgpICsgJ3B4JztcbiAgICAgICAgZWxlU3R5bGUudG9wID0geSArICdweCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5MRUZUX1ZDRU5URVIgPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgICAgICBlbGVTdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgIGVsZVN0eWxlLnRvcCA9IChwYXJzZUludChmcmFtZUhlaWdodCkgLyAyIC0gcGFyc2VJbnQoZWxlU3R5bGVIZWlnaHQpIC8gMiArIHkpICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfVkNFTlRFUiA9PSBmcmFtZUNvbXBvbmVudEFsaWduKSB7XG4gICAgICAgIGVsZVN0eWxlLmxlZnQgPSAocGFyc2VJbnQoZnJhbWVXaWR0aCkgLyAyIC0gcGFyc2VJbnQoZWxlU3R5bGVXaWR0aCkgLyAyICsgeCkgKyAncHgnO1xuICAgICAgICBlbGVTdHlsZS50b3AgPSAocGFyc2VJbnQoZnJhbWVIZWlnaHQpIC8gMiAtIHBhcnNlSW50KGVsZVN0eWxlSGVpZ2h0KSAvIDIgKyB5KSArICdweCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5SSUdIVF9WQ0VOVEVSID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICAgICAgZWxlU3R5bGUubGVmdCA9IChwYXJzZUludChmcmFtZVdpZHRoKSAtIHBhcnNlSW50KGVsZVN0eWxlV2lkdGgpICsgeCkgKyAncHgnO1xuICAgICAgICBlbGVTdHlsZS50b3AgPSAocGFyc2VJbnQoZnJhbWVIZWlnaHQpIC8gMiAtIHBhcnNlSW50KGVsZVN0eWxlSGVpZ2h0KSAvIDIgKyB5KSArICdweCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5MRUZUX0JPVFRPTSA9PSBmcmFtZUNvbXBvbmVudEFsaWduKSB7XG4gICAgICAgIGVsZVN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgZWxlU3R5bGUudG9wID0gKHBhcnNlSW50KGZyYW1lSGVpZ2h0KSAtIHBhcnNlSW50KGVsZVN0eWxlSGVpZ2h0KSArIHkpICsgJ3B4JztcbiAgICB9XG4gICAgZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfQk9UVE9NID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICAgICAgZWxlU3R5bGUubGVmdCA9IChwYXJzZUludChmcmFtZVdpZHRoKSAvIDIgLSBwYXJzZUludChlbGVTdHlsZVdpZHRoKSAvIDIgKyB4KSArICdweCc7XG4gICAgICAgIGVsZVN0eWxlLnRvcCA9IChwYXJzZUludChmcmFtZUhlaWdodCkgLSBwYXJzZUludChlbGVTdHlsZUhlaWdodCkgKyB5KSArICdweCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKENBTElHTi5SSUdIVF9CT1RUT00gPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgICAgICBlbGVTdHlsZS5sZWZ0ID0gKHBhcnNlSW50KGZyYW1lV2lkdGgpIC0gcGFyc2VJbnQoZWxlU3R5bGVXaWR0aCkgKyB4KSArICdweCc7XG4gICAgICAgIGVsZVN0eWxlLnRvcCA9IChwYXJzZUludChmcmFtZUhlaWdodCkgLSBwYXJzZUludChlbGVTdHlsZUhlaWdodCkgKyB5KSArICdweCc7XG4gICAgfVxufTtcblxuQ0ZyYW1lQ29tcG9uZW50LnByb3RvdHlwZS5oYW5kbGVUYWtpbmdGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIGlmIChtZS5fZm9jdXNUYWtpbmdDYWxsYWJjaykge1xuICAgICAgICBtZS5fZm9jdXNUYWtpbmdDYWxsYWJjaygpO1xuICAgIH1cbn07XG5cbkNGcmFtZUNvbXBvbmVudC5wcm90b3R5cGUuaGFuZGxlUmVsZWFzaW5nRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBpZiAobWUuX2ZvY3VzUmVsZWFzaW5nQ2FsbGFiY2spIHtcbiAgICAgICAgbWUuX2ZvY3VzUmVsZWFzaW5nQ2FsbGFiY2soKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIGVuZCBvZiBDRnJhbWVDb21wb25lbnQgY2xhc3NcbiAqL1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuXG4vKipcbiAqIENEb21QYXJ0c0J1aWxkZXIgY2xhc3NcbiAqIEVhc3kgdG8gYnVpbGQgYSBiZWF1dGlmdWwgb3IgdHlwaWNhbCBkb20gcGFydHMoaHRtbEVsZW1lbnQpXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ0RvbVBhcnRzQnVpbGRlcigpIHtcbn1cblxuQ0RvbVBhcnRzQnVpbGRlci5wcm90b3R5cGUuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IENUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO1xufTtcblxuQ0RvbVBhcnRzQnVpbGRlci5wcm90b3R5cGUuYnVpbGRCdXR0b24gPSBmdW5jdGlvbiAoYnRuQXBwZWFyYW5jZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG1lLmJ1aWxkVGV4dEJ1dHRvbihidG5BcHBlYXJhbmNlKTtcbn1cbi8qKlxuICpcbiAqIEBwYXJhbSBzaXplXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbkNEb21QYXJ0c0J1aWxkZXIucHJvdG90eXBlLmJ1aWxkQnV0dG9uID0gZnVuY3Rpb24gKGJ0bkFwcGVhcmFuY2UpIHtcblxuICAgIHZhciBzaXplID0gYnRuQXBwZWFyYW5jZS5zaXplO1xuICAgIHZhciB3aWR0aCA9IHNpemU7XG4gICAgdmFyIGhlaWdodCA9IHNpemU7XG5cbiAgICBpZiAoYnRuQXBwZWFyYW5jZS53aWR0aCAhPSBudWxsKSB7XG4gICAgICAgIHdpZHRoID0gYnRuQXBwZWFyYW5jZS53aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoYnRuQXBwZWFyYW5jZS5oZWlnaHQgIT0gbnVsbCkge1xuICAgICAgICBoZWlnaHQgPSBidG5BcHBlYXJhbmNlLmhlaWdodDtcbiAgICB9XG5cblxuICAgIHZhciBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvL2JvcmRlclxuICAgIHZhciBib3JkZXJXaWR0aCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyV2lkdGg7XG4gICAgdmFyIGJvcmRlclJhZGl1cyA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyUmFkaXVzO1xuXG4gICAgdmFyIGJvcmRlckNvbG9yRGVmYXVsdCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyQ29sb3JEZWZhdWx0O1xuICAgIHZhciBib3JkZXJDb2xvckZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICB2YXIgYm9yZGVyQ29sb3JIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJDb2xvckhvdmVyZWQ7XG4gICAgdmFyIGJvcmRlckNvbG9yUHJlc3NlZCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyQ29sb3JQcmVzc2VkO1xuXG4gICAgdmFyIGJvcmRlclN0eWxlRGVmYXVsdCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgIHZhciBib3JkZXJTdHlsZUZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmJvcmRlclN0eWxlRm9jdXNlZDtcbiAgICB2YXIgYm9yZGVyU3R5bGVIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJTdHlsZUhvdmVyZWQ7XG4gICAgdmFyIGJvcmRlclN0eWxlUHJlc3NlZCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyU3R5bGVQcmVzc2VkO1xuXG4gICAgLy9iYWNrZ3JvdW5kXG4gICAgdmFyIGJhY2tncm91bmRDb2xvckRlZmF1bHQgPSBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvckRlZmF1bHQ7XG4gICAgdmFyIGJhY2tncm91bmRDb2xvckZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvckZvY3VzZWQ7XG4gICAgdmFyIGJhY2tncm91bmRDb2xvckhvdmVyZWQgPSBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvckhvdmVyZWQ7XG4gICAgdmFyIGJhY2tncm91bmRDb2xvclByZXNzZWQgPSBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvclByZXNzZWQ7XG5cbiAgICB2YXIgYmFja2dyb3VuZEJveFNoYWRvdyA9IGJ0bkFwcGVhcmFuY2UuYmFja2dyb3VuZEJveFNoYWRvdztcblxuXG4gICAgLy9jYXB0aW9uXG4gICAgdmFyIGNhcHRpb24gPSBidG5BcHBlYXJhbmNlLmNhcHRpb247XG4gICAgdmFyIGJ0bkltYWdlRGVmYXVsdCA9IGJ0bkFwcGVhcmFuY2UuaW1hZ2VEZWZhdWx0O1xuICAgIHZhciBidG5JbWFnZUZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmltYWdlRm9jdXNlZDtcbiAgICB2YXIgYnRuSW1hZ2VIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5pbWFnZUhvdmVyZWQ7XG4gICAgdmFyIGJ0bkltYWdlUHJlc3NlZCA9IGJ0bkFwcGVhcmFuY2UuaW1hZ2VQcmVzc2VkO1xuXG4gICAgLy9wcmV2ZW50IHRvIGNhdGNoIG1vdXNlIGV2ZW50c1xuICAgIGlmIChidG5JbWFnZURlZmF1bHQpIHtcbiAgICAgICAgYnRuSW1hZ2VEZWZhdWx0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgfVxuICAgIGlmIChidG5JbWFnZUZvY3VzZWQpIHtcbiAgICAgICAgYnRuSW1hZ2VGb2N1c2VkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgfVxuICAgIGlmIChidG5JbWFnZUhvdmVyZWQpIHtcbiAgICAgICAgYnRuSW1hZ2VIb3ZlcmVkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgfVxuICAgIGlmIChidG5JbWFnZVByZXNzZWQpIHtcbiAgICAgICAgYnRuSW1hZ2VQcmVzc2VkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgdmFyIF9jYXB0aW9uQ29sb3JEZWZhdWx0ID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JEZWZhdWx0O1xuICAgIHZhciBjYXB0aW9uQ29sb3JGb2N1c2VkID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JGb2N1c2VkO1xuICAgIHZhciBjYXB0aW9uQ29sb3JIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JIb3ZlcmVkO1xuICAgIHZhciBjYXB0aW9uQ29sb3JQcmVzc2VkID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JQcmVzc2VkO1xuXG4gICAgdmFyIGNhcHRpb25TaGlmdFlweCA9IGJ0bkFwcGVhcmFuY2UuY2FwdGlvblNoaWZ0WXB4O1xuICAgIHZhciBjYXB0aW9uRm9udFJhdGlvID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uRm9udFJhdGlvO1xuXG4gICAgLy9TZXQgd2hldGhlciBwYXJlbnQgZnJhbWUgaGFzIGZvY3VzIG9yIG5vdCBpbnRlcm5hbGx5XG4gICAgZGl2RWxlbWVudC5faGFzRnJhbWVGb2N1cyA9IGZhbHNlO1xuXG4gICAgLy9TZXQgd2hldGhlciBtb3VzZSBpcyBwcmVzc2luZyBvciBub3QgaW50ZXJuYWxseS5cbiAgICBkaXZFbGVtZW50Ll9pc01vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgZGl2RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cbiAgICBkaXZFbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIGRpdkVsZW1lbnQuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIGRpdkVsZW1lbnQuc3R5bGUud2lkdGggPSAod2lkdGgpICsgJ3B4JztcbiAgICBkaXZFbGVtZW50LnN0eWxlLmhlaWdodCA9IChoZWlnaHQpICsgJ3B4JztcbiAgICBkaXZFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblxuICAgIGRpdkVsZW1lbnQub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGRpdkVsZW1lbnQuX2lzTW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgZGl2RWxlbWVudC5faGFuZGxlRm9jdXNEcmF3aW5nKCdvbm1vdXNlZG93bicpO1xuICAgIH07XG5cbiAgICBkaXZFbGVtZW50Lm9ubW91c2VvdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkaXZFbGVtZW50Ll9pc01vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcoJ29ubW91c2VvdXQnKTtcbiAgICB9O1xuICAgIGRpdkVsZW1lbnQub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGRpdkVsZW1lbnQuX2hhbmRsZUhvdmVyRHJhd2luZygpO1xuICAgIH07XG5cbiAgICBkaXZFbGVtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgZGl2RWxlbWVudC5faXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgZGl2RWxlbWVudC5faGFuZGxlRm9jdXNEcmF3aW5nKCdvbm1vdXNldXAnKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGFyZW50IG5vdGlmaWVzIHRoYXQgdGhlIHBhcmVudCdzIGZyYW1lIGdvdCBmb2N1c1xuICAgICAqL1xuICAgIGRpdkVsZW1lbnQuX29uVGFrZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGRpdkVsZW1lbnQuX2hhc0ZyYW1lRm9jdXMgPSB0cnVlO1xuICAgICAgICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcoJ19vblRha2VGb2N1cycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGFyZW50IG5vdGlmaWVzIHRoYXQgdGhlIHBhcmVudCdzIGZyYW1lIGhhcyBsb3N0IGZvY3VzXG4gICAgICovXG4gICAgZGl2RWxlbWVudC5fb25SZWxlYXNlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgZGl2RWxlbWVudC5faGFzRnJhbWVGb2N1cyA9IGZhbHNlO1xuICAgICAgICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcoJ19vblJlbGVhc2VGb2N1cycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgVG8gaGFuZGxlIDJ4MiBtYXRyaXguXG4gICAgICogIChfaGFzRnJhbWVGb2N1cyB0cnVlL2ZhbHNlIHggX2lzTW91c2VEb3duIHRydWUvZmFsc2UpXG4gICAgICovXG4gICAgZGl2RWxlbWVudC5faGFuZGxlRm9jdXNEcmF3aW5nID0gZnVuY3Rpb24gKGV2dE5hbWUpIHtcblxuXG4gICAgICAgIGlmIChkaXZFbGVtZW50Ll9oYXNGcmFtZUZvY3VzKSB7XG4gICAgICAgICAgICAvL1doZW4gdGhpcyBlbGVtZW50IGhhcyBmb2N1c1xuXG4gICAgICAgICAgICBpZiAoZGl2RWxlbWVudC5faXNNb3VzZURvd24pIHtcbiAgICAgICAgICAgICAgICAvL2JvcmRlclxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvclByZXNzZWQ7XG4gICAgICAgICAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9IGJvcmRlclN0eWxlUHJlc3NlZDtcblxuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yUHJlc3NlZDtcblxuICAgICAgICAgICAgICAgIC8vY2FwdGlvblxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuY29sb3IgPSBjYXB0aW9uQ29sb3JQcmVzc2VkO1xuXG5cbiAgICAgICAgICAgICAgICBpZiAoYnRuSW1hZ2VQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuSW1hZ2VQcmVzc2VkKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0TmFtZSA9PSAnb25tb3VzZWRvd24nICYmIGRpdkVsZW1lbnQub25jbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9kaXZFbGVtZW50Lm9uY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2JvcmRlclxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvckZvY3VzZWQ7XG4gICAgICAgICAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9IGJvcmRlclN0eWxlRm9jdXNlZDtcblxuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yRm9jdXNlZDtcblxuICAgICAgICAgICAgICAgIC8vY2FwdGlvblxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuY29sb3IgPSBjYXB0aW9uQ29sb3JGb2N1c2VkO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJ0bkltYWdlRm9jdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGJ0bkltYWdlRm9jdXNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL1doZW4gdGhpcyBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBmb2N1c1xuICAgICAgICAgICAgaWYgKGRpdkVsZW1lbnQuX2lzTW91c2VEb3duKSB7XG4gICAgICAgICAgICAgICAgLy9ib3JkZXJcbiAgICAgICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3JQcmVzc2VkO1xuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBib3JkZXJTdHlsZVByZXNzZWQ7XG5cbiAgICAgICAgICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvclByZXNzZWQ7XG5cbiAgICAgICAgICAgICAgICAvL2NhcHRpb25cbiAgICAgICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmNvbG9yID0gY2FwdGlvbkNvbG9yUHJlc3NlZDtcblxuICAgICAgICAgICAgICAgIGlmIChidG5JbWFnZVByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZVByZXNzZWQpO1xuXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvL2JvcmRlclxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvckRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9IGJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yRGVmYXVsdDtcblxuICAgICAgICAgICAgICAgIC8vY2FwdGlvblxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuY29sb3IgPSBfY2FwdGlvbkNvbG9yRGVmYXVsdDtcblxuICAgICAgICAgICAgICAgIGlmIChidG5JbWFnZURlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZURlZmF1bHQpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGRpdkVsZW1lbnQuX2hhbmRsZUhvdmVyRHJhd2luZyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoZGl2RWxlbWVudC5faGFzRnJhbWVGb2N1cykge1xuICAgICAgICAgICAgLy9XaGVuIHRoaXMgZWxlbWVudCBoYXMgZm9jdXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vV2hlbiB0aGlzIGVsZW1lbnQgZG9lc24ndCBoYXZlIGZvY3VzXG4gICAgICAgIH1cbiAgICAgICAgLy9ib3JkZXJcbiAgICAgICAgaWYgKGJvcmRlckNvbG9ySG92ZXJlZCkge1xuICAgICAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9ySG92ZXJlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9yZGVyU3R5bGVIb3ZlcmVkKSB7XG4gICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gYm9yZGVyU3R5bGVIb3ZlcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkKSB7XG4gICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvckhvdmVyZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FwdGlvbkNvbG9ySG92ZXJlZCkge1xuICAgICAgICAgICAgLy9jYXB0aW9uXG4gICAgICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmNvbG9yID0gY2FwdGlvbkNvbG9ySG92ZXJlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnRuSW1hZ2VIb3ZlcmVkKSB7XG4gICAgICAgICAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZUhvdmVyZWQpO1xuXG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBkaXZFbGVtZW50LnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGRpdkVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAoaGVpZ2h0ICogY2FwdGlvbkZvbnRSYXRpbykgKyAncHgnO1xuXG4gICAgZGl2RWxlbWVudC5zdHlsZS5saW5lSGVpZ2h0ID0gKGhlaWdodCkgKyAncHgnO1xuXG4gICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9ICcxcHgnO1xuXG4gICAgaWYgKGJvcmRlcldpZHRoICE9IG51bGwpIHtcbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9IGJvcmRlcldpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAoYmFja2dyb3VuZEJveFNoYWRvdyAhPSBudWxsKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gYmFja2dyb3VuZEJveFNoYWRvdztcbiAgICB9XG5cbiAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IChib3JkZXJSYWRpdXMgKyBwYXJzZUludChkaXZFbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoKSkgKyAncHgnO1xuXG4gICAgdmFyIGNoaWxkTW9kZSA9IHRydWU7XG5cbiAgICBpZiAoY2hpbGRNb2RlICYmIGJ0bkltYWdlRGVmYXVsdCkge1xuICAgICAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGJ0bkltYWdlRGVmYXVsdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoaWxkTW9kZSAmJiBjYXB0aW9uKSB7XG4gICAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAvL3NwYW4uc3R5bGUucG9zaXRpb249J2Fic29sdXRlJztcbiAgICAgICAgc3Bhbi5zdHlsZS53aWR0aCA9ICcxMDAlJztcblxuICAgICAgICBzcGFuLnN0eWxlLm1hcmdpblRvcCA9IGNhcHRpb25TaGlmdFlweCArICdweCc7XG4gICAgICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICBzcGFuLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuXG4gICAgICAgIHNwYW4uc3R5bGUuZm9udEZhbWlseSA9IFwic2Fucy1zZXJpZlwiO1xuXG5cbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXB0aW9uKSk7XG5cbiAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9IGVsc2UgaWYgKCFjaGlsZE1vZGUgJiYgY2FwdGlvbikge1xuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBjYXB0aW9uU2hpZnRZcHggKyBcInB4XCI7XG4gICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FwdGlvbikpO1xuICAgIH1cblxuICAgIGRpdkVsZW1lbnQuX2hhbmRsZUZvY3VzRHJhd2luZygpO1xuICAgIHJldHVybiBkaXZFbGVtZW50O1xuXG59O1xuXG5mdW5jdGlvbiBDVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKSB7XG5cbiAgICB2YXIgY3Jvc3NNYXJrMCA9ICdcXHUyNzRjJztcblxuICAgIHRoaXMuc2l6ZSA9IDE0O1xuICAgIHRoaXMud2lkdGggPSBudWxsO1xuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcblxuICAgIC8vYm9yZGVyXG4gICAgdGhpcy5ib3JkZXJSYWRpdXMgPSAyO1xuICAgIHRoaXMuYm9yZGVyV2lkdGggPSAwO1xuICAgIHRoaXMuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNhYWFhYWEnO1xuICAgIHRoaXMuYm9yZGVyQ29sb3JGb2N1c2VkID0gdGhpcy5ib3JkZXJDb2xvckRlZmF1bHQ7XG4gICAgdGhpcy5ib3JkZXJDb2xvckhvdmVyZWQgPSBudWxsO1xuICAgIHRoaXMuYm9yZGVyQ29sb3JQcmVzc2VkID0gdGhpcy5ib3JkZXJDb2xvckRlZmF1bHQ7XG5cbiAgICB0aGlzLmJvcmRlclN0eWxlRGVmYXVsdCA9ICdzb2xpZCc7XG4gICAgdGhpcy5ib3JkZXJTdHlsZUZvY3VzZWQgPSB0aGlzLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICB0aGlzLmJvcmRlclN0eWxlSG92ZXJlZCA9IG51bGw7XG4gICAgdGhpcy5ib3JkZXJTdHlsZVByZXNzZWQgPSB0aGlzLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgIHRoaXMuYmFja2dyb3VuZEJveFNoYWRvdyA9IG51bGw7XG5cblxuICAgIC8vYmFja2dyb3VuZFxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd0cmFuc3BhcmVudCc7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0O1xuICAgIHRoaXMuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9IG51bGw7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0O1xuXG4gICAgLy9jYXB0aW9uXG4gICAgdGhpcy5jYXB0aW9uID0gY3Jvc3NNYXJrMDtcbiAgICB0aGlzLmNhcHRpb25Db2xvckRlZmF1bHQgPSAnd2hpdGUnO1xuICAgIHRoaXMuY2FwdGlvbkNvbG9yRm9jdXNlZCA9IHRoaXMuY2FwdGlvbkNvbG9yRGVmYXVsdDtcbiAgICB0aGlzLmNhcHRpb25Db2xvckhvdmVyZWQgPSBudWxsO1xuICAgIHRoaXMuY2FwdGlvbkNvbG9yUHJlc3NlZCA9IHRoaXMuY2FwdGlvbkNvbG9yRGVmYXVsdDtcbiAgICB0aGlzLmNhcHRpb25TaGlmdFlweCA9IDA7XG4gICAgdGhpcy5jYXB0aW9uRm9udFJhdGlvID0gMS4wO1xuXG5cbn1cblxuLyoqXG4gKiBlbmQgb2YgQ0RvbVBhcnRzQnVpbGRlciBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG4vKipcbiAqIENTaW1wbGVMYXlvdXRBbmltYXRvciBjbGFzc1xuICogQ2xhc3MgZm9yIG1vdmluZyBhbmltYXRpb24gwrcgc2NhbGluZyBhbmltYXRpb24gb2YgZnJhbWUuXG4gKiA8cD5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDU2ltcGxlTGF5b3V0QW5pbWF0b3IoKSB7XG5cbiAgICB0aGlzLmZwcyA9IDMwO1xuICAgIHRoaXMuZHVyYXRpb25NaWxsaXMgPSAyMDA7XG4gICAgdGhpcy50YXJnZXRGcmFtZSA9IG51bGw7XG5cbiAgICAvL2N1cnJlbnQgd2lkdGgvaGVpZ2h0XG4gICAgdGhpcy5fY3JyV2lkdGggPSAwO1xuICAgIHRoaXMuX2NyckhlaWdodCA9IDA7XG4gICAgdGhpcy5fdG9XaWR0aCA9IDA7XG4gICAgdGhpcy5fdG9IZWlnaHQgPSAwO1xuXG4gICAgLy9jdXJyZW50IHBvc2l0aW9uKHgseSlcbiAgICAvL3RoaXMuX2NyclggPSAwO1xuICAgIC8vdGhpcy5fY3JyWSA9IDA7XG4gICAgdGhpcy5fdG9YID0gMDtcbiAgICB0aGlzLl90b1kgPSAwO1xuXG5cbiAgICB0aGlzLnBpbm5lZEFuaW1hdGlvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9waW5YID0gMDtcbiAgICB0aGlzLl9waW5ZID0gMDtcbiAgICB0aGlzLl9waW5BbmNob3IgPSBudWxsO1xuXG59XG5cbi8qKlxuICogU2V0IENJRnJhbWUgb2JqZWN0IHRvIGJlIHJlc2l6ZWRcbiAqIEBwYXJhbSBjaWZyYW1lXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoY2lmcmFtZSkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUudGFyZ2V0RnJhbWUgPSBjaWZyYW1lO1xuXG5cbiAgICBtZS5mcm9tV2lkdGgoY2lmcmFtZS5nZXRXaWR0aCgpKTtcbiAgICBtZS5mcm9tSGVpZ2h0KGNpZnJhbWUuZ2V0SGVpZ2h0KCkpO1xuXG4gICAgbWUudG9XaWR0aChjaWZyYW1lLmdldFdpZHRoKCkpO1xuICAgIG1lLnRvSGVpZ2h0KGNpZnJhbWUuZ2V0SGVpZ2h0KCkpO1xuXG4gICAgdmFyIGNyclBvcyA9IGNpZnJhbWUuZ2V0UG9zaXRpb24oKTtcbiAgICBtZS5mcm9tUG9zaXRpb24oY3JyUG9zLngsIGNyclBvcy55LCBjcnJQb3MuYW5jaG9yKTtcblxuXG4gICAgcmV0dXJuIG1lO1xuXG59O1xuXG4vKipcbiAqIEdldCBDSUZyYW1lIG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIG1lLnRhcmdldEZyYW1lO1xufTtcbi8qKlxuICogU2V0IGFuaW1hdGlvbiBkdXJhdGlvbiB0aW1lIG1pbGxpc1xuICogQHBhcmFtIGR1cmF0aW9uTWlsbGlzXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5zZXREdXJhdGlvbiA9IGZ1bmN0aW9uIChkdXJhdGlvbk1pbGxpcykge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuZHVyYXRpb25NaWxsaXMgPSBkdXJhdGlvbk1pbGxpcztcbiAgICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBleHBlY3RlZCBGUFNcbiAqIEBwYXJhbSBmcHNcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLnNldEZQUyA9IGZ1bmN0aW9uIChmcHMpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLmZwcyA9IGZwcztcbiAgICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBQSU4gcG9zaXRpb25cbiAqIEBwYXJhbSB4XG4gKiBAcGFyYW0geVxuICogQHBhcmFtIGFuY2hvciBQb3NpdGlvbiB3aGVyZSBhbmltYXRpb24gc3RhcnRzIGZyb20uRXhwZWN0ZWQgcGFyYW1ldGVycyBhcyBmb2xsb3dzLlxuICdMRUZUX1RPUCc6RGVmYXVsdC5TcGVjaWZ5IHRoZSBwb3NpdGlvbiBzdGFydGluZyBmcm9tIHRoZSB1cHBlciBsZWZ0LlxuICdDRU5URVJfVE9QJ1xuICdSSUdIVF9UT1AnXG4gJ0xFRlRfQ0VOVEVSJ1xuICdDRU5URVJfQ0VOVEVSJ1xuICdSSUdIVF9DRU5URVInXG4gJ0xFRlRfQk9UVE9NJ1xuICdDRU5URVJfQk9UVE9NJ1xuICdSSUdIVF9CT1RUT00nXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5mcm9tUG9zaXRpb24gPSBmdW5jdGlvbiAoeCwgeSwgYW5jaG9yKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5waW5uZWRBbmltYXRpb25FbmFibGVkID0gdHJ1ZTtcblxuICAgIG1lLl9waW5YID0geDtcbiAgICBtZS5fcGluWSA9IHk7XG5cbiAgICBtZS50b1Bvc2l0aW9uKHgsIHkpO1xuXG4gICAgaWYgKGFuY2hvcikge1xuICAgICAgICBtZS5fcGluQW5jaG9yID0gYW5jaG9yO1xuICAgIH1cbiAgICByZXR1cm4gbWU7XG59O1xuLyoqXG4gKiBTZXQgcmVzaXplRnJvbSB3aWR0aFxuICogQHBhcmFtIGZyb21XaWR0aFxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuZnJvbVdpZHRoID0gZnVuY3Rpb24gKGZyb21XaWR0aCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuX2NycldpZHRoID0gZnJvbVdpZHRoO1xuXG4gICAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgcmVzaXplRnJvbSBoZWlnaHRcbiAqIEBwYXJhbSBmcm9tSGVpZ2h0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5mcm9tSGVpZ2h0ID0gZnVuY3Rpb24gKGZyb21IZWlnaHQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLl9jcnJIZWlnaHQgPSBmcm9tSGVpZ2h0O1xuXG4gICAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgcmVzaXplVG8gd2lkdGhcbiAqIEBwYXJhbSB0b1dpZHRoXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1dpZHRoID0gZnVuY3Rpb24gKHRvV2lkdGgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLl90b1dpZHRoID0gdG9XaWR0aDtcblxuICAgIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IHJlc2l6ZVRvIGhlaWdodFxuICogQHBhcmFtIHRvSGVpZ2h0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b0hlaWdodCA9IGZ1bmN0aW9uICh0b0hlaWdodCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuX3RvSGVpZ2h0ID0gdG9IZWlnaHQ7XG4gICAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgbW92ZSB0byBwb3NpdGlvblxuICogQHBhcmFtIHhcbiAqIEBwYXJhbSB5XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1Bvc2l0aW9uID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLl90b1ggPSB4O1xuICAgIG1lLl90b1kgPSB5O1xuICAgIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IG1vdmUgdG8geFxuICogQHBhcmFtIHhcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLnRvWCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5fdG9YID0geDtcbiAgICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBtb3ZlIHRvIHlcbiAqIEBwYXJhbSB0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1kgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuX3RvWSA9IHQ7XG4gICAgcmV0dXJuIG1lO1xufTtcblxuXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKHdhaXRNaWxsaXMpIHtcblxuXG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIHZhciBmcm9tV2lkdGggPSBtZS5fY3JyV2lkdGg7XG4gICAgdmFyIGZyb21IZWlnaHQgPSBtZS5fY3JySGVpZ2h0O1xuXG4gICAgdmFyIGZyb21YID0gbWUuX3Bpblg7XG4gICAgdmFyIGZyb21ZID0gbWUuX3Bpblk7XG5cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cblxuICAgICAgICB2YXIgbnVtT2ZTdGVwcyA9IHBhcnNlSW50KG1lLmZwcyAqIChtZS5kdXJhdGlvbk1pbGxpcyAvIDEwMDApKTtcblxuXG4gICAgICAgIHZhciBkZWx0YVdpZHRoID0gKG1lLl90b1dpZHRoIC0gZnJvbVdpZHRoKSAvIG51bU9mU3RlcHM7XG4gICAgICAgIHZhciBkZWx0YUhlaWdodCA9IChtZS5fdG9IZWlnaHQgLSBmcm9tSGVpZ2h0KSAvIG51bU9mU3RlcHM7XG5cbiAgICAgICAgdmFyIGRlbHRhWCA9IChtZS5fdG9YIC0gZnJvbVgpIC8gbnVtT2ZTdGVwcztcbiAgICAgICAgdmFyIGRlbHRhWSA9IChtZS5fdG9ZIC0gZnJvbVkpIC8gbnVtT2ZTdGVwcztcblxuXG4gICAgICAgIHZhciB1bml0TWlsbGlzID0gbWUuZHVyYXRpb25NaWxsaXMgLyBudW1PZlN0ZXBzO1xuXG4gICAgICAgIHZhciBpZHggPSAwO1xuXG5cbiAgICAgICAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgICAgIHZhciB0aW1lciA9IG5ldyBDVGltZXIoKTtcblxuICAgICAgICAgICAgdGltZXIuc2V0SW50ZXJ2YWxNaWxsaXModW5pdE1pbGxpcyk7XG5cbiAgICAgICAgICAgIHRpbWVyLnNldENhbGxiYWNrKGZ1bmN0aW9uICh0aW1lcikge1xuXG4gICAgICAgICAgICAgICAgaWYgKGlkeCA9PSBudW1PZlN0ZXBzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIF93aWR0aCA9IG1lLl90b1dpZHRoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2hlaWdodCA9IG1lLl90b0hlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgX3ggPSBmcm9tWCArIGRlbHRhWCAqIGlkeDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF95ID0gZnJvbVkgKyBkZWx0YVkgKiBpZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLnBpbm5lZEFuaW1hdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbWUudGFyZ2V0RnJhbWUuX3NldFBvc2l0aW9uSW50ZXJuYWxseShtZS5fcGluWCwgbWUuX3BpblksIG1lLl9waW5BbmNob3IsIF93aWR0aCwgX2hlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnRhcmdldEZyYW1lLl9zZXRQb3NpdGlvbkludGVybmFsbHkoX3gsIF95LCBtZS5fcGluQW5jaG9yLCBfd2lkdGgsIF9oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUudGFyZ2V0RnJhbWUucmVzaXplRGlyZWN0KF93aWR0aCwgX2hlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbWUuX2NycldpZHRoID0gX3dpZHRoO1xuICAgICAgICAgICAgICAgICAgICBtZS5fY3JySGVpZ2h0ID0gX2hlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICBtZS5fcGluWCA9IF94O1xuICAgICAgICAgICAgICAgICAgICBtZS5fcGluWSA9IF95O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpZHggPT0gKG51bU9mU3RlcHMgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICAvL1N0b3AgdGltZXIgYWZ0ZXIgbGFzdCBkcmF3IHVwZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgdGltZXIuc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB2YXIgX3dpZHRoID0gZnJvbVdpZHRoICsgZGVsdGFXaWR0aCAqIGlkeDtcbiAgICAgICAgICAgICAgICB2YXIgX2hlaWdodCA9IGZyb21IZWlnaHQgKyBkZWx0YUhlaWdodCAqIGlkeDtcblxuICAgICAgICAgICAgICAgIHZhciBfeCA9IGZyb21YICsgZGVsdGFYICogaWR4O1xuICAgICAgICAgICAgICAgIHZhciBfeSA9IGZyb21ZICsgZGVsdGFZICogaWR4O1xuXG4gICAgICAgICAgICAgICAgaWYgKG1lLnBpbm5lZEFuaW1hdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tZS50YXJnZXRGcmFtZS5fc2V0UG9zaXRpb25JbnRlcm5hbGx5KG1lLl9waW5YLCBtZS5fcGluWSwgbWUuX3BpbkFuY2hvciwgX3dpZHRoLCBfaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgbWUudGFyZ2V0RnJhbWUuX3NldFBvc2l0aW9uSW50ZXJuYWxseShfeCwgX3ksIG1lLl9waW5BbmNob3IsIF93aWR0aCwgX2hlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWUudGFyZ2V0RnJhbWUucmVzaXplRGlyZWN0KF93aWR0aCwgX2hlaWdodCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWUudGFyZ2V0RnJhbWUuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlkeCsrO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgdGltZXIuc3RhcnRUaW1lcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdhaXRNaWxsaXMpIHtcblxuICAgICAgICAgICAgdmFyIHdhaXRlciA9IG5ldyBDVGltZXIoKTtcbiAgICAgICAgICAgIHdhaXRlci5zZXRJbnRlcnZhbE1pbGxpcyh3YWl0TWlsbGlzKTtcbiAgICAgICAgICAgIHdhaXRlci5zZXRDYWxsYmFjayhmdW5jdGlvbiAoX3RpbWVyKSB7XG4gICAgICAgICAgICAgICAgX3RpbWVyLnN0b3BUaW1lcigpO1xuXG4gICAgICAgICAgICAgICAgbG9vcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3YWl0ZXIuc3RhcnRUaW1lcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9vcCgpO1xuICAgICAgICB9XG5cblxuICAgIH0pO1xuXG59Oy8vc3RhcnRcblxuLyoqXG4gKiBlbmQgb2YgQ1NpbXBsZUxheW91dEFuaW1hdG9yIGNsYXNzXG4gKi9cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuLyoqXG4gKiBDVGltZXIgY2xhc3M8YnI+XG4gKiBDb3B5cmlnaHQgMjAwNy0gVG9tIE1pc2F3YSwgcml2ZXJzdW4ub3JnQGdtYWlsLmNvbVxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbiAqIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlXG4gKiBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZVxuICogU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELFxuICogIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBXG4gKiBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1JcbiAqIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAqIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1JcbiAqIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogSG93IHRvIHVzZTpcbiAqICB2YXIgdGltZXIgPSBuZXcgQ1RpbWVyKCk7XG4gKiAgICB2YXIgdmFsdWUgPSAwO1xuICpcbiAqICAgIHRpbWVyLnNldENhbGxiYWNrKGZ1bmN0aW9uICh0aW1lck9iaikge1xuICogICAgICAgIHZhbHVlKys7XG4gKiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICogICAgICAgIGlmICh2YWx1ZSA9PSAxMDApIHtcbiAqICAgICAgICAgICAgdGltZXJPYmouc3RvcFRpbWVyKCk7XG4gKiAgICAgICAgfVxuICogICAgfSk7XG4gKiAgICB0aW1lci5zZXRJbnRlcnZhbE1pbGxpcygxMDApO1xuICogICAgdGltZXIuc3RhcnRUaW1lcigpO1xuICpcbiAqIEBhdXRob3IgVG9tIE1pc2F3YSAocml2ZXJzdW4ub3JnQGdtYWlsLmNvbSlcbiAqL1xuXG52YXIgQ1RpbWVyID1cbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBDVGltZXIoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICBtZS5fdGltZXJJZCA9IG51bGw7XG4gICAgICAgICAgICBtZS5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBtZS5fdGltZXJJbnRlcnZhbCA9IDA7XG5cbiAgICAgICAgICAgIG1lLl9pbnRlcm5hbENhbGxiYWNrID0gX2ludGVybmFsQ2FsbGJhY2s7XG4gICAgICAgICAgICBtZS5fdGltZXJNZXRob2QgPSBudWxsO1xuXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9pbnRlcm5hbENhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIGlmIChtZS5fdGltZXJNZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuX3RpbWVyTWV0aG9kKG1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1lLl9pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG1lLl90aW1lcklkKTtcbiAgICAgICAgICAgICAgICAgICAgbWUuX3RpbWVySWQgPSBzZXRUaW1lb3V0KG1lLl9pbnRlcm5hbENhbGxiYWNrLCBtZS5fdGltZXJJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ1RpbWVyLnByb3RvdHlwZS5zZXRDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFja19mdW5jKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgbWUuX3RpbWVyTWV0aG9kID0gY2FsbGJhY2tfZnVuYztcbiAgICAgICAgICAgIHJldHVybiBtZTtcbiAgICAgICAgfTtcblxuICAgICAgICBDVGltZXIucHJvdG90eXBlLnNldEludGVydmFsTWlsbGlzID0gZnVuY3Rpb24gKGludGVydmFsKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgbWUuX3RpbWVySW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICAgICAgICAgIHJldHVybiBtZTtcbiAgICAgICAgfTtcblxuICAgICAgICBDVGltZXIucHJvdG90eXBlLnN0b3BUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBtZS5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gbWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgQ1RpbWVyLnByb3RvdHlwZS5zdGFydFRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGlmIChtZS5fdGltZXJJbnRlcnZhbCA+IDApIHtcbiAgICAgICAgICAgICAgICBtZS5fdGltZXJJZCA9IHNldFRpbWVvdXQobWUuX2ludGVybmFsQ2FsbGJhY2ssIG1lLl90aW1lckludGVydmFsKTtcbiAgICAgICAgICAgICAgICBtZS5faXNSdW5uaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgcmV0dXJuIENUaW1lcjtcbiAgICB9KSgpO1xuLyoqXG4gKiBlbmQgb2YgQ1RpbWVyIGNsYXNzXG4gKi9cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuT2JqZWN0LmZyZWV6ZShERUYpO1xuXG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ==