function getStyle(fApr) {


  fApr.showTitleBar = false;
  fApr.showCloseButton = true;


  fApr.titleBarCaptionFontSize = '0px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = '0px';
  fApr.titleBarCaptionColorDefault = 'transparent';
  fApr.titleBarCaptionColorFocused = 'transparent';

  fApr.titleBarHeight = '0px';

  fApr.titleBarColorDefault = 'transparent';
  fApr.titleBarColorFocused = 'transparent';

  fApr.titleBarBorderBottomDefault = null;
  fApr.titleBarBorderBottomFocused = null;

  fApr.frameBorderRadius = '10px';

  //border width
  fApr.frameBorderWidthDefault = '0px';
  fApr.frameBorderWidthFocused = '0px';

  //border color
  fApr.frameBorderColorDefault = 'transparent';
  fApr.frameBorderColorFocused = 'transparent';
  fApr.frameBorderStyle = 'solid';
  fApr.frameBoxShadow = '2px 2px 15px  rgba(0, 0, 0, 0.5)';
  fApr.frameBackgroundColor = 'transparent';


  fApr.frameComponents = [];
  fApr.frameHeightAdjust = 1;//default is 1

  fApr.captionClor = 'darkgray';

  fApr.pullUpDisabled = false;

  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: ' ',
        titleBarClassNameFocused: ' '
      };
    } else {
      return {
        titleBarClassNameDefault: ' ',
        titleBarClassNameFocused: ' '
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
    cbApr.borderWidth = 0;

    cbApr.borderColorDefault = '#cccccc';
    cbApr.borderColorFocused = '#cccccc';
    cbApr.borderColorHovered = '#dddddd';
    cbApr.borderColorPressed = '#eeeeee';

    cbApr.borderStyleDefault = 'solid';
    cbApr.borderStyleFocused = cbApr.borderStyleDefault;
    cbApr.borderStyleHovered = cbApr.borderStyleDefault;
    cbApr.borderStylePressed = cbApr.borderStyleDefault;

    //background
    cbApr.backgroundColorDefault = 'transparent';
    cbApr.backgroundColorFocused = 'transparent';
    cbApr.backgroundColorHovered = 'transparent';
    cbApr.backgroundColorPressed = 'transparent';

    cbApr.backgroundBoxShadow = null;// '2px 2px 5px  rgba(0, 0, 0, 0.5)';

    //caption
    cbApr.caption = CROSS_MARK;

    cbApr.captionColorDefault = fApr.captionClor;
    cbApr.captionColorFocused = fApr.captionClor;
    cbApr.captionColorHovered = fApr.captionClor;
    cbApr.captionColorPressed = fApr.captionClor;

    cbApr.captionShiftYpx = 1;
    cbApr.captionFontRatio = 0.6;

    var closeBtnEle = partsBuilder.buildTextButton(cbApr);
    var eleLeft = -6;
    var eleTop = 3;
    var eleAlign = 'RIGHT_TOP';

    // 'closeButton' is a special name
    fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

    //configure close button appearance[end]//////////////


  };
  //


  return fApr;
}


module.exports.getStyle = getStyle;
