require('./PresetStyleRedstone.css');

function getStyle(fApr) {

  fApr.showTitleBar = true;
  fApr.showCloseButton = true;

  fApr.titleBarCaptionFontSize = '12px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = '10px';
  fApr.titleBarCaptionColorDefault = '#9b9a9b';
  fApr.titleBarCaptionColorFocused = '#4d494d';

  fApr.titleBarHeight = '30px';

  fApr.titleBarColorDefault = null;
  fApr.titleBarColorFocused = null;

  fApr.titleBarBorderBottomDefault = 'solid 1px #aaaaaa';
  fApr.titleBarBorderBottomFocused = 'solid 1px #1883d7';

  fApr.frameBorderRadius = '0px';

  //border width
  fApr.frameBorderWidthDefault = '1px';
  fApr.frameBorderWidthFocused = '1px';


  //border color
  fApr.frameBorderColorDefault = '#aaaaaa';
  fApr.frameBorderColorFocused = '#1883d7';

  fApr.frameBorderStyle = 'solid';

  //window shadow
  fApr.frameBoxShadow = null;

  fApr.frameBackgroundColor = 'transparent';


  fApr.frameComponents = new Array();

  //adjustment value
  fApr.frameHeightAdjust = 0;//default is 1

  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-redstone-focused',
        titleBarClassNameFocused: 'jsframe-preset-style-redstone-focused'
      };
    } else {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-redstone-default',
        titleBarClassNameFocused: 'jsframe-preset-style-redstone-focused'
      };
    }
  };

  fApr.onInitialize = function() {


    var partsBuilder = fApr.getPartsBuilder();


    {
      //configure close button appearance[begin]//////////////

      var CROSS_MARK = '\u2573';

      var cbApr = partsBuilder.buildTextButtonAppearance();

      cbApr.width = 45;
      cbApr.height = 28;


      cbApr.borderRadius = 0;
      cbApr.borderWidth = 0;

      cbApr.borderColorDefault = '#c6c6c6';
      cbApr.borderColorFocused = '#fc615c';
      cbApr.borderColorHovered = cbApr.borderColorFocused;
      cbApr.borderColorPressed = '#e64842';

      cbApr.borderStyleDefault = 'solid';
      cbApr.borderStyleFocused = cbApr.borderStyleDefault;
      cbApr.borderStyleHovered = cbApr.borderStyleDefault;
      cbApr.borderStylePressed = cbApr.borderStyleDefault;

      //background
      cbApr.backgroundColorDefault = 'white';
      cbApr.backgroundColorFocused = 'white';
      cbApr.backgroundColorHovered = '#e81123';
      cbApr.backgroundColorPressed = '#f1707a';

      //caption
      cbApr.caption = CROSS_MARK;

      cbApr.captionColorDefault = '#9b9a9b';
      cbApr.captionColorFocused = 'black';
      cbApr.captionColorHovered = 'white';
      cbApr.captionColorPressed = 'white';

      cbApr.captionShiftYpx = 1;
      cbApr.captionFontRatio = 0.6;

      var closeBtnEle = partsBuilder.buildTextButton(cbApr);
      var eleLeft = 0;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      // 'closeButton' is a special name
      fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }

    {
      //configure close button appearance[begin]//////////////

      var MAXIMIZE_MARK = '\u2610';

      var maxApr = partsBuilder.buildTextButtonAppearance();

      maxApr.width = 45;
      maxApr.height = 28;


      maxApr.borderRadius = 0;
      maxApr.borderWidth = 0;

      maxApr.borderColorDefault = '#c6c6c6';
      maxApr.borderColorFocused = '#fc615c';
      maxApr.borderColorHovered = maxApr.borderColorFocused;
      maxApr.borderColorPressed = '#e64842';

      maxApr.borderStyleDefault = 'solid';
      maxApr.borderStyleFocused = maxApr.borderStyleDefault;
      maxApr.borderStyleHovered = maxApr.borderStyleDefault;
      maxApr.borderStylePressed = maxApr.borderStyleDefault;

      //background
      maxApr.backgroundColorDefault = 'white';
      maxApr.backgroundColorFocused = 'white';
      maxApr.backgroundColorHovered = '#e5e5e5';
      maxApr.backgroundColorPressed = '#cccccc';

      //caption
      maxApr.caption = MAXIMIZE_MARK;

      maxApr.captionColorDefault = '#9b9a9b';
      maxApr.captionColorFocused = 'black';
      maxApr.captionColorHovered = 'black';
      maxApr.captionColorPressed = 'black';

      maxApr.captionShiftYpx = 1;
      maxApr.captionFontRatio = 0.55;

      var maxBtnEle = partsBuilder.buildTextButton(maxApr);
      var eleLeft = -46;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      // 'closeButton' is a special name
      fApr.addFrameComponent('maximizeButton', maxBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }

    {
      //configure close button appearance[begin]//////////////

      var MINIMIZE_MARK = '\uff3f';

      var minApr = partsBuilder.buildTextButtonAppearance();

      minApr.width = 45;
      minApr.height = 28;


      minApr.borderRadius = 0;
      minApr.borderWidth = 0;

      minApr.borderColorDefault = '#c6c6c6';
      minApr.borderColorFocused = '#fc615c';
      minApr.borderColorHovered = minApr.borderColorFocused;
      minApr.borderColorPressed = '#e64842';

      minApr.borderStyleDefault = 'solid';
      minApr.borderStyleFocused = minApr.borderStyleDefault;
      minApr.borderStyleHovered = minApr.borderStyleDefault;
      minApr.borderStylePressed = minApr.borderStyleDefault;

      //background
      minApr.backgroundColorDefault = 'white';
      minApr.backgroundColorFocused = 'white';
      minApr.backgroundColorHovered = '#e5e5e5';
      minApr.backgroundColorPressed = '#cccccc';

      //caption
      minApr.caption = MINIMIZE_MARK;

      minApr.captionColorDefault = '#9b9a9b';
      minApr.captionColorFocused = 'black';
      minApr.captionColorHovered = 'black';
      minApr.captionColorPressed = 'black';

      minApr.captionShiftYpx = -2;
      minApr.captionFontRatio = 0.3;

      var minBtnEle = partsBuilder.buildTextButton(minApr);
      var eleLeft = -92;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      // 'closeButton' is a special name
      fApr.addFrameComponent('minimizeButton', minBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }
    {
      //configure close button appearance[begin]//////////////


      var deminApr = partsBuilder.buildTextButtonAppearance();

      deminApr.width = 45;
      deminApr.height = 28;


      deminApr.borderRadius = 0;
      deminApr.borderWidth = 0;

      deminApr.borderColorDefault = '#c6c6c6';
      deminApr.borderColorFocused = '#fc615c';
      deminApr.borderColorHovered = deminApr.borderColorFocused;
      deminApr.borderColorPressed = '#e64842';

      deminApr.borderStyleDefault = 'solid';
      deminApr.borderStyleFocused = deminApr.borderStyleDefault;
      deminApr.borderStyleHovered = deminApr.borderStyleDefault;
      deminApr.borderStylePressed = deminApr.borderStyleDefault;

      //background
      deminApr.backgroundColorDefault = 'white';
      deminApr.backgroundColorFocused = 'white';
      deminApr.backgroundColorHovered = '#e5e5e5';
      deminApr.backgroundColorPressed = '#cccccc';

      //caption
      deminApr.caption = '\u25A3';

      deminApr.captionColorDefault = '#9b9a9b';
      deminApr.captionColorFocused = 'black';
      deminApr.captionColorHovered = 'black';
      deminApr.captionColorPressed = 'black';

      deminApr.captionShiftYpx = 1;
      deminApr.captionFontRatio = 0.6;

      var deminBtnEle = partsBuilder.buildTextButton(deminApr);
      var eleLeft = -92;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      deminBtnEle.style.display = 'none';

      // 'closeButton' is a special name
      fApr.addFrameComponent('deminimizeButton', deminBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }
    {
      //configure close button appearance[begin]//////////////

      var RESTORE_MARK = '\u274F';

      var rbApr = partsBuilder.buildTextButtonAppearance();

      rbApr.width = 45;
      rbApr.height = 28;


      rbApr.borderRadius = 0;
      rbApr.borderWidth = 0;

      rbApr.borderColorDefault = '#c6c6c6';
      rbApr.borderColorFocused = '#fc615c';
      rbApr.borderColorHovered = rbApr.borderColorFocused;
      rbApr.borderColorPressed = '#e64842';

      rbApr.borderStyleDefault = 'solid';
      rbApr.borderStyleFocused = rbApr.borderStyleDefault;
      rbApr.borderStyleHovered = rbApr.borderStyleDefault;
      rbApr.borderStylePressed = rbApr.borderStyleDefault;

      //background
      rbApr.backgroundColorDefault = 'white';
      rbApr.backgroundColorFocused = 'white';
      rbApr.backgroundColorHovered = '#e5e5e5';
      rbApr.backgroundColorPressed = '#cccccc';

      //caption
      rbApr.caption = RESTORE_MARK;

      rbApr.captionColorDefault = '#9b9a9b';
      rbApr.captionColorFocused = 'black';
      rbApr.captionColorHovered = 'black';
      rbApr.captionColorPressed = 'black';

      rbApr.captionShiftYpx = 1;
      rbApr.captionFontRatio = 0.55;

      var restoreBtnEle = partsBuilder.buildTextButton(rbApr);
      var eleLeft = -46;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      restoreBtnEle.style.display = 'none';

      // 'closeButton' is a special name
      fApr.addFrameComponent('restoreButton', restoreBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }


  };
  //

  return fApr;
}


module.exports.getStyle = getStyle;
