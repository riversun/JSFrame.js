require('./PresetStyleYosemite.css');
var ObjectAssigner = require('../utils/ObjectAssigner.js');

function getStyle(fApr, userParam) {

  var srcParam = {
    titleBar: {
      greenButton: 'maximize',//'maximize' or 'fullscreen'
    }
  };

  var param = srcParam;

  if (userParam) {
    //param=Object.assign({},srcParam, userParam);
    ObjectAssigner.objectAssign(srcParam, userParam);

  }

  fApr.showTitleBar = true;
  fApr.showCloseButton = true;

  fApr.titleBarCaptionFontSize = '11px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = null;
  fApr.titleBarCaptionColorDefault = '#4d494d';
  fApr.titleBarCaptionColorFocused = '#4d494d';

  fApr.titleBarHeight = '26px';

  fApr.titleBarColorDefault = null;
  fApr.titleBarColorFocused = null;

  fApr.titleBarBorderBottomDefault = '1px solid #b1aeb1';
  fApr.titleBarBorderBottomFocused = fApr.titleBarBorderBottomDefault;

  fApr.frameBorderRadius = '6px';

  //border width
  fApr.frameBorderWidthDefault = '1px';
  fApr.frameBorderWidthFocused = '1px';


  //border color
  fApr.frameBorderColorDefault = '#acacac';
  fApr.frameBorderColorFocused = '#acacac';

  fApr.frameBorderStyle = 'solid';

  //window shadow
  fApr.frameBoxShadow = '0px 0px 20px rgba(0, 0, 0, 0.3)';

  fApr.frameBackgroundColor = 'transparent';


  fApr.frameComponents = new Array();

  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-yosemite-focused',
        titleBarClassNameFocused: 'jsframe-preset-style-yosemite-focused'
      };
    } else {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-yosemite-default',
        titleBarClassNameFocused: 'jsframe-preset-style-yosemite-focused'
      };
    }
  };

  fApr.onInitialize = function() {

    var partsBuilder = fApr.getPartsBuilder();

    var img_data_close_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAWElEQVQoU2NkIBIwEqmOAa6wgZWlH6Sp4fefQjCNxkdRyMjAUPCf4f8CkEJGBsaE/wwME2AaUaxuYGWeD1IAUgjS0PD7byLMaaQrBLmJKKuJ9gyhYCI6HAGlFDALf9s7eQAAAABJRU5ErkJggg==';
    var img_data_maximize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVElEQVQoU2NkIBIwoqvjixFoAIl9WvIBTMMAhkLeGP79IMnPSz46kq8QZN1/hv/2IBMYGRgMQPR/BoYLED7jQZAzwFYTrRDZLdRxI7KJRAcPrvAHAATYKgvLH0fAAAAAAElFTkSuQmCC';

    if (param.titleBar.greenButton === 'fullscreen') {
      img_data_maximize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAZElEQVQoU2NkIBIwEqmOAUWhQIKAwL8///czMDAYwAz4tOQjWA1cIUjRhwUfPqArxlDIF8N/nomF0RFdMTaF/xkYGC6gK/605KMhitV8MfwghSCAohhkAy6FKIphniIvePCFKQDzGzsLS+7n2AAAAABJRU5ErkJggg==';
    }

    var img_data_minimize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAMUlEQVQoU2NkIBIwEqmOgUYKa7w4Ghj+M9hjdQYjw8GWbT8awFYTrZAYD9HIM8RYDQBsEAwLkq4IAgAAAABJRU5ErkJggg==';
    var img_data_1dot_transparent = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=';
    var img_width = 10;
    var img_height = 10;
    var img_style = 'margin:0px;padding:0px;width:' + img_width + 'px;height:' + img_height + 'px';

    var imageMaximize = document.createElement('img');
    imageMaximize.src = img_data_maximize_hovered;
    imageMaximize.setAttribute('style', img_style);

    var imageMaximize2 = document.createElement('img');
    imageMaximize2.src = img_data_maximize_hovered;
    imageMaximize2.setAttribute('style', img_style);

    var imageMinimize = document.createElement('img');
    imageMinimize.src = img_data_minimize_hovered;
    imageMinimize.setAttribute('style', img_style);

    var imageClose = document.createElement('img');
    imageClose.src = img_data_close_hovered;
    imageClose.setAttribute('style', img_style);


    var imgTransparent = document.createElement('img');
    imgTransparent.src = img_data_1dot_transparent;
    imgTransparent.setAttribute('style', 'margin:0px;padding:0px;width:6px;height:6px');

    {
      //configure close button appearance[begin]//////////////


      var cbApr = partsBuilder.buildTextButtonAppearance();

      cbApr.size = 10;

      cbApr.borderRadius = 5;
      cbApr.borderWidth = 1;

      cbApr.borderColorDefault = '#c6c6c6';
      cbApr.borderColorFocused = '#d3524e';
      cbApr.borderColorHovered = cbApr.borderColorFocused;
      cbApr.borderColorPressed = '#e64842';

      cbApr.borderStyleDefault = 'solid';
      cbApr.borderStyleFocused = cbApr.borderStyleDefault;
      cbApr.borderStyleHovered = cbApr.borderStyleDefault;
      cbApr.borderStylePressed = cbApr.borderStyleDefault;

      //background
      cbApr.backgroundColorDefault = '#d0d0d0';
      cbApr.backgroundColorFocused = '#fc615c';
      cbApr.backgroundColorHovered = cbApr.backgroundColorFocused;
      cbApr.backgroundColorPressed = cbApr.backgroundColorDefault;

      cbApr.imageDefault = imgTransparent;
      cbApr.imageHovered = imageClose;
      cbApr.imagePressed = imageClose;
      cbApr.imageFocused = imgTransparent;

      var closeBtnEle = partsBuilder.buildButton(cbApr);
      var eleLeft = 8;
      var eleTop = -19;
      var eleAlign = 'LEFT_TOP';

      // 'closeButton' is a special name
      fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }

    {
      //configure minimize button appearance[begin]//////////////
      //const HYPHEN = '\u2013';

      var mbApr = partsBuilder.buildTextButtonAppearance();


      mbApr.size = 10;

      mbApr.borderRadius = 5;
      mbApr.borderWidth = 1;

      mbApr.borderColorDefault = '#c6c6c6';
      mbApr.borderColorFocused = '#e6b347';
      mbApr.borderColorHovered = mbApr.borderColorFocused;
      mbApr.borderColorPressed = '#e1a12d';

      mbApr.borderStyleDefault = 'solid';
      mbApr.borderStyleFocused = mbApr.borderStyleDefault;
      mbApr.borderStyleHovered = mbApr.borderStyleDefault;
      mbApr.borderStylePressed = mbApr.borderStyleDefault;

      //background
      mbApr.backgroundColorDefault = '#d0d0d0';
      mbApr.backgroundColorFocused = '#fdbe40';
      mbApr.backgroundColorHovered = mbApr.backgroundColorFocused;
      mbApr.backgroundColorPressed = mbApr.backgroundColorDefault;

      mbApr.imageDefault = imgTransparent;
      mbApr.imageHovered = imageMinimize;
      mbApr.imagePressed = imageMinimize;
      mbApr.imageFocused = imgTransparent;

      var minimizeBtnEle = partsBuilder.buildButton(mbApr);
      var deminimizeBtnEle = partsBuilder.buildButton(mbApr);
      deminimizeBtnEle.style.display = 'none';
      var eleLeft = 28;
      var eleTop = -19;
      var eleAlign = 'LEFT_TOP';


      fApr.addFrameComponent('minimizeButton', minimizeBtnEle, eleLeft, eleTop, eleAlign);
      fApr.addFrameComponent('deminimizeButton', deminimizeBtnEle, eleLeft, eleTop, eleAlign);

      //configure minimize button appearance[end]//////////////
    }

    {
      //configure zoom button appearance[begin]//////////////
      var zbApr = partsBuilder.buildTextButtonAppearance();

      zbApr.size = 10;

      zbApr.borderRadius = 5;
      zbApr.borderWidth = 1;

      zbApr.borderColorDefault = '#c6c6c6';
      zbApr.borderColorFocused = '#67b657';
      zbApr.borderColorHovered = zbApr.borderColorFocused;
      zbApr.borderColorPressed = '#00af38';

      zbApr.borderStyleDefault = 'solid';
      zbApr.borderStyleFocused = zbApr.borderStyleDefault;
      zbApr.borderStyleHovered = zbApr.borderStyleDefault;
      zbApr.borderStylePressed = zbApr.borderStyleDefault;

      //background
      zbApr.backgroundColorDefault = '#d0d0d0';
      zbApr.backgroundColorFocused = '#34ca49';
      zbApr.backgroundColorHovered = zbApr.backgroundColorFocused;
      zbApr.backgroundColorPressed = zbApr.backgroundColorDefault;

      //caption
      zbApr.caption = null;

      zbApr.imageDefault = imgTransparent;
      zbApr.imageHovered = imageMaximize;
      zbApr.imagePressed = imageMaximize;
      zbApr.imageFocused = imgTransparent;

      var zoomBtnEle = partsBuilder.buildButton(zbApr);
      var dezoomBtnEle = partsBuilder.buildButton(zbApr);
      dezoomBtnEle.style.display = 'none';


      var eleLeft = 48;
      var eleTop = -19;
      var eleAlign = 'LEFT_TOP';


      fApr.addFrameComponent('zoomButton', zoomBtnEle, eleLeft, eleTop, eleAlign);
      fApr.addFrameComponent('dezoomButton', dezoomBtnEle, eleLeft, eleTop, eleAlign);


      //configure zoom button appearance[end]//////////////
    }
    //

  };
  //

  return fApr;
}

module.exports.getStyle = getStyle;
