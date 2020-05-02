require('./PresetStyleMaterial.css');
var ObjectAssigner = require('../../utils/ObjectAssigner.js');


function getStyle(fApr, userParam) {

  var srcParam = {
    border: {
      color: 'transparent',
      width: 0,
      radius: 6,

    },
    control: {
      maximizeWithoutTitleBar: false,
      restoreKey: 'Escape',
    },
    titleBar: {
      color: 'white',
      background: 'black',
      leftMargin: 20,
      height: 30,
      fontSize: 12,
      buttonWidth: 36,
      buttonHeight: 16,
      buttonColor: 'white',
      buttons: [
        {
          fa: 'fas fa-times',
          name: 'closeButton',
          visible: true
        },
        {
          fa: 'far fa-window-maximize',
          name: 'maximizeButton',
          visible: true
        },
        {
          fa: 'far fa-window-restore',
          name: 'restoreButton',
          visible: false
        },
        {
          fa: 'far fa-window-minimize',
          name: 'minimizeButton',
          visible: true
        },
        {
          fa: 'fas fa-caret-up',
          name: 'deminimizeButton',
          visible: false
        }

      ],
      buttonsOnLeft: [],
    },


  };

  var param = srcParam;

  if (userParam) {
    //param=Object.assign({},srcParam, userParam);
    ObjectAssigner.objectAssign(srcParam, userParam);

  }


  fApr.showTitleBar = true;
  fApr.showCloseButton = true;

  fApr.titleBarCaptionFontSize = param.titleBar.fontSize + 'px';//'12px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = param.titleBar.leftMargin + 'px';
  fApr.titleBarCaptionColorDefault = param.titleBar.color;
  fApr.titleBarCaptionColorFocused = param.titleBar.color;
  fApr.titleBarCaptionTextShadow = null;
  fApr.titleBarCaptionTextAlign = 'left';

  fApr.titleBarHeight = param.titleBar.height + 'px';// '50px';

  fApr.titleBarColorDefault = param.titleBar.background;
  fApr.titleBarColorFocused = param.titleBar.background;

  fApr.titleBarBorderBottomDefault = 'solid 0px #aaaaaa';
  fApr.titleBarBorderBottomFocused = 'solid 0px #1883d7';

  fApr.frameBorderRadius = param.border.radius + 'px';// '6px';

  //border width
  fApr.frameBorderWidthDefault = param.border.width + 'px';
  fApr.frameBorderWidthFocused = param.border.width + 'px';


  //border color
  fApr.frameBorderColorDefault = param.border.color;
  fApr.frameBorderColorFocused = param.border.color;

  fApr.frameBorderStyle = 'solid';

  //window shadow
  fApr.frameBoxShadow = param.border.shadow;//'2px 2px 10px  rgba(0, 0, 0, 0.5)';

  fApr.frameBackgroundColor = 'transparent';

  fApr.frameComponents = new Array();

  fApr.frameHeightAdjust = 0;//default is 1

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

    alignButtons(fApr, param, false);
    alignButtons(fApr, param, true);

  };

  //

  return fApr;
}

function alignButtons(fApr, param, fromLeft) {
  var partsBuilder = fApr.getPartsBuilder();
  var rbtX = 0;
  var buttons;

  if (fromLeft) {
    buttons = param.titleBar.buttonsOnLeft;

  } else {
    buttons = param.titleBar.buttons;
  }

  for (var rbtIdx in buttons) {

    var rbtSrc = buttons[rbtIdx];

    var rbt = partsBuilder.buildTextButtonAppearance();

    //caption
    rbt.fa = rbtSrc.fa;

    rbt.width = param.titleBar.buttonWidth;
    rbt.height = param.titleBar.buttonHeight;

    rbt.borderRadius = 0;
    rbt.borderWidth = 0;

    rbt.borderColorDefault = '#c6c6c6';
    rbt.borderColorFocused = '#fc615c';
    rbt.borderColorHovered = rbt.borderColorFocused;
    rbt.borderColorPressed = '#e64842';

    rbt.borderStyleDefault = 'solid';
    rbt.borderStyleFocused = rbt.borderStyleDefault;
    rbt.borderStyleHovered = rbt.borderStyleDefault;
    rbt.borderStylePressed = rbt.borderStyleDefault;

    //background
    rbt.backgroundColorDefault = 'transparent';
    rbt.backgroundColorFocused = 'transparent';
    rbt.backgroundColorHovered = 'transparent';
    rbt.backgroundColorPressed = 'transparent';

    var colors = getSubColor(param.titleBar.buttonColor);
    rbt.captionColorDefault = param.titleBar.buttonColor;
    rbt.captionColorFocused = param.titleBar.buttonColor;
    rbt.captionColorHovered = colors.hovered;
    rbt.captionColorPressed = colors.pressed;

    rbt.captionShiftYpx = 0;
    rbt.captionFontRatio = 1;

    var rbtEle = partsBuilder.buildTextButton(rbt);

    if (rbtSrc.visible) {
      rbtEle.style.display = 'flex';
    } else {
      if (fromLeft) {
        rbtX -= param.titleBar.buttonWidth;
      } else {
        rbtX += param.titleBar.buttonWidth;
      }
      rbtEle.style.display = 'none';
    }

    var titleBarHeight = parseInt(fApr.titleBarHeight);

    var rbtEleLeft = rbtX;

    //compute vertical center

    var rbtEleTop = -titleBarHeight + (titleBarHeight - rbt.height) / 2;

    var rbtEleAlign;
    if (fromLeft) {
      rbtEleAlign = 'LEFT_TOP';
    } else {
      rbtEleAlign = 'RIGHT_TOP';
    }

    var ndiv;
    if (rbtSrc.childMenuHTML) {

      ndiv = document.createElement('div');
      ndiv.id = rbtSrc.name + '_child_menu';

      ndiv.innerHTML = rbtSrc.childMenuHTML;
      ndiv.style.position = 'absolute';
      ndiv.style.width = (rbtSrc.childMenuWidth ? rbtSrc.childMenuWidth : 200) + 'px';
      ndiv.style.top = (parseInt(rbtEle.style.top, 10) + parseInt(rbtEle.style.height, 10) / 2 + titleBarHeight / 2) + 'px';
      ndiv.style.left = rbtEle.style.left;
      ndiv.style.display = 'none';

      rbtEle.appendChild(ndiv);
    }


    fApr.addFrameComponent(rbtSrc.name, rbtEle, rbtEleLeft, rbtEleTop, rbtEleAlign, { childMenu: ndiv });

    if (fromLeft) {
      rbtX += param.titleBar.buttonWidth;
    } else {
      rbtX += -param.titleBar.buttonWidth;
    }

  }
}


function getSubColor(color) {

  var canvas = document.createElement('canvas');
  canvas.height = 1;
  canvas.width = 1;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  var colorData = ctx.getImageData(0, 0, 1, 1).data;

  var r = colorData[0];
  var g = colorData[1];
  var b = colorData[2];
  var alpha = colorData[3] / 255;
  var alpha2 = alpha * 0.85;
  var alpha3 = alpha * 0.75;

  var ret = 'rgb(' + r + ',' + g + ',' + b + ',' + alpha2 + ')';
  var ret2 = 'rgb(' + r + ',' + g + ',' + b + ',' + alpha2 + ')';
  var ret3 = 'rgb(' + r + ',' + g + ',' + b + ',' + alpha3 + ')';
  return { src: ret, hovered: ret2, pressed: ret3 };
}


module.exports.getStyle = getStyle;
