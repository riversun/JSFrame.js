require('./PresetStylePopup.css');

function getStyle(fApr) {


  fApr.showTitleBar = false;
  fApr.showCloseButton = true;


  fApr.titleBarCaptionFontSize = '12px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = '10px';
  fApr.titleBarCaptionColorDefault = '#4d494d';
  fApr.titleBarCaptionColorFocused = '#4d494d';

  fApr.titleBarHeight = '5px';

  fApr.titleBarColorDefault = 'white';
  fApr.titleBarColorFocused = 'white';

  fApr.titleBarBorderBottomDefault = null;
  fApr.titleBarBorderBottomFocused = null;

  fApr.frameBorderRadius = '6px';

  //border width
  fApr.frameBorderWidthDefault = '1px';
  fApr.frameBorderWidthFocused = '1px';


  //border color
  fApr.frameBorderColorDefault = '#aaaaaa';
  fApr.frameBorderColorFocused = '#aaaaaa';

  fApr.frameBorderStyle = 'solid';

  //window shadow
  fApr.frameBoxShadow = '2px 2px 5px  rgba(0, 0, 0, 0.5)';

  fApr.frameBackgroundColor = 'white';


  fApr.frameComponents = new Array();

  //adjustment value
  fApr.frameHeightAdjust = 2;//default is 1
  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-popup-focused',
        titleBarClassNameFocused: 'jsframe-preset-style-popup-focused'
      };
    } else {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-popup-default',
        titleBarClassNameFocused: 'jsframe-preset-style-popup-focused'
      };
    }
  };
  fApr.onInitialize = function() {


    var partsBuilder = fApr.getPartsBuilder();


    //configure close button appearance[begin]//////////////

    var crossMark0 = '\u274c';
    var crossMark1 = '\u2716';
    var crossMark2 = '\u274e';
    var CROSS_MARK = crossMark1;


    var cbApr = partsBuilder.buildTextButtonAppearance();

    cbApr.width = 20;
    cbApr.height = 20;


    cbApr.borderRadius = 10;
    cbApr.borderWidth = 1;

    cbApr.borderColorDefault = '#cccccc';
    cbApr.borderColorFocused = '#cccccc';
    cbApr.borderColorHovered = '#dddddd';
    cbApr.borderColorPressed = '#eeeeee';

    cbApr.borderStyleDefault = 'solid';
    cbApr.borderStyleFocused = cbApr.borderStyleDefault;
    cbApr.borderStyleHovered = cbApr.borderStyleDefault;
    cbApr.borderStylePressed = cbApr.borderStyleDefault;

    //background
    cbApr.backgroundColorDefault = 'white';
    cbApr.backgroundColorFocused = 'white';
    cbApr.backgroundColorHovered = '#eeeeee';
    cbApr.backgroundColorPressed = '#dddddd';

    cbApr.backgroundBoxShadow = '2px 2px 5px  rgba(0, 0, 0, 0.5)';

    //caption
    cbApr.caption = CROSS_MARK;

    cbApr.captionColorDefault = 'black';
    cbApr.captionColorFocused = 'black';
    cbApr.captionColorHovered = 'white';
    cbApr.captionColorPressed = 'white';

    cbApr.captionShiftYpx = 1;
    cbApr.captionFontRatio = 0.6;

    var closeBtnEle = partsBuilder.buildTextButton(cbApr);
    var eleLeft = 10;
    var eleTop = -6 - parseInt(fApr.titleBarHeight);
    var eleAlign = 'RIGHT_TOP';

    // 'closeButton' is a special name
    fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

    //configure close button appearance[end]//////////////


  };
  //

  return fApr;


}


module.exports.getStyle = getStyle;
