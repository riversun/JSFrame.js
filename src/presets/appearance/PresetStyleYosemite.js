require('./PresetStyleYosemite.css');
var ObjectAssigner = require('../../utils/ObjectAssigner.js');

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
    var img_data_demaximize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiUlEQVQoU2NkwAIEogQMPiz7cAFZihGbQt4Y/v0MjIwLPy/+sAAmj1MhIwODw39GxkSYYrwKQabBFGNVyBfL1///P6MBzFrmf4yFjCCH/2X63w93C+P/C58WfypEdzvYRN5YgQTG///ng61iYDjweclHR6wKkRUTVAhTzPD/fzxeE2FWYQtskBwAKwQ7tVjAL4MAAAAASUVORK5CYII=';
    var img_data_minimize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAMUlEQVQoU2NkIBIwEqmOgUYKa7w4Ghj+M9hjdQYjw8GWbT8awFYTrZAYD9HIM8RYDQBsEAwLkq4IAgAAAABJRU5ErkJggg==';
    var img_data_1dot_transparent = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=';
    var img_width = 10;
    var img_height = 10;
    var img_style = 'margin:0px;padding:0px;width:' + img_width + 'px;height:' + img_height + 'px';

    var imageMaximize = document.createElement('img');
    imageMaximize.src = img_data_maximize_hovered;
    imageMaximize.setAttribute('style', img_style);

    var imageDemaximize = document.createElement('img');
    imageDemaximize.src = img_data_demaximize_hovered;
    imageDemaximize.setAttribute('style', img_style);

    // var imageFullScreen = document.createElement('img');
    // imageFullScreen.src = img_data_maximize_hovered;
    // imageFullScreen.setAttribute('style', img_style);

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


      var cbApr = partsBuilder.buildImageButtonAppearance();
      cbApr.imageDefault = imgTransparent;
      cbApr.imageHovered = imageClose;
      cbApr.imagePressed = imageClose;
      cbApr.imageFocused = imgTransparent;
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
      cbApr.setSrc({
        default: img_data_1dot_transparent,
        focused: img_data_1dot_transparent,
        hovered: img_data_close_hovered,
        pressed: img_data_close_hovered,
      });

      var closeBtnEle = partsBuilder.buildButton(cbApr);
      var eleLeft = 8;
      var eleTop = -19;
      var eleAlign = 'LEFT_TOP';

      // 'closeButton' is a special name
      fApr.addFrameComponent(param.closeButtonName || 'closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

      //prepare [minimize button]
      var minBtnApr = partsBuilder.buildImageButtonAppearance(cbApr);
      minBtnApr.borderColorDefault = '#c6c6c6';
      minBtnApr.borderColorFocused = '#e6b347';
      minBtnApr.borderColorHovered = minBtnApr.borderColorFocused;
      minBtnApr.borderColorPressed = '#e1a12d';
      minBtnApr.backgroundColorDefault = '#d0d0d0';
      minBtnApr.backgroundColorFocused = '#fdbe40';
      minBtnApr.backgroundColorHovered = minBtnApr.backgroundColorFocused;
      minBtnApr.backgroundColorPressed = minBtnApr.backgroundColorDefault;
      minBtnApr.imageDefault = imgTransparent;
      minBtnApr.imageHovered = imageMinimize;
      minBtnApr.imagePressed = imageMinimize;
      minBtnApr.imageFocused = imgTransparent;

      var minBtnEle = partsBuilder.buildButton(minBtnApr);
      var deminimizeBtnEle = partsBuilder.buildButton(minBtnApr);
      deminimizeBtnEle.style.display = 'none';
      var eleLeft = 28;
      var eleTop = -19;
      var eleAlign = 'LEFT_TOP';
      fApr.addFrameComponent('minimizeButton', minBtnEle, eleLeft, eleTop, eleAlign);
      fApr.addFrameComponent('deminimizeButton', deminimizeBtnEle, eleLeft, eleTop, eleAlign);


      // prepare [maximize button]
      //configure zoom button appearance[begin]//////////////
      var maxBtnApr = partsBuilder.buildImageButtonAppearance(cbApr);
      maxBtnApr.borderColorDefault = '#c6c6c6';
      maxBtnApr.borderColorFocused = '#67b657';
      maxBtnApr.borderColorHovered = maxBtnApr.borderColorFocused;
      maxBtnApr.borderColorPressed = '#00af38';
      maxBtnApr.backgroundColorDefault = '#d0d0d0';
      maxBtnApr.backgroundColorFocused = '#34ca49';
      maxBtnApr.backgroundColorHovered = maxBtnApr.backgroundColorFocused;
      maxBtnApr.backgroundColorPressed = maxBtnApr.backgroundColorDefault;
      maxBtnApr.imageDefault = imgTransparent;
      maxBtnApr.imageHovered = imageMaximize;
      maxBtnApr.imagePressed = imageMaximize;
      maxBtnApr.imageFocused = imgTransparent;

      var zoomBtnEle = partsBuilder.buildButton(maxBtnApr);


      var demaxBtnApr = partsBuilder.buildImageButtonAppearance(cbApr);
      demaxBtnApr.borderColorDefault = '#c6c6c6';
      demaxBtnApr.borderColorFocused = '#67b657';
      demaxBtnApr.borderColorHovered = demaxBtnApr.borderColorFocused;
      demaxBtnApr.borderColorPressed = '#00af38';
      demaxBtnApr.backgroundColorDefault = '#d0d0d0';
      demaxBtnApr.backgroundColorFocused = '#34ca49';
      demaxBtnApr.backgroundColorHovered = demaxBtnApr.backgroundColorFocused;
      demaxBtnApr.backgroundColorPressed = demaxBtnApr.backgroundColorDefault;
      demaxBtnApr.imageDefault = imgTransparent;
      demaxBtnApr.imageHovered = imageDemaximize;
      demaxBtnApr.imagePressed = imageDemaximize;
      demaxBtnApr.imageFocused = imgTransparent;
      var demaxBtnEle = partsBuilder.buildButton(demaxBtnApr);
      demaxBtnEle.style.display = 'none';

      var eleLeft = 48;
      var eleTop = -19;
      var eleAlign = 'LEFT_TOP';


      fApr.addFrameComponent('dezoomButton', demaxBtnEle, eleLeft, eleTop, eleAlign);
      fApr.addFrameComponent('zoomButton', zoomBtnEle, eleLeft, eleTop, eleAlign);

      //configure zoom button appearance[end]//////////////
    }
    //

  };
  //

  return fApr;
}

module.exports.getStyle = getStyle;
