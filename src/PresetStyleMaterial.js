/**
 * JSFrame Examples
 *
 * Copyright 2007- Tom Misawa, riversun.org@gmail.com
 * Copyright 2007- web2driver.com
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

require('./PresetStyleMaterial.css');


function getStyle(fApr, userParam) {

    var srcParam = {
        border: {
            color: 'transparent',
            width: 0,
            radius: 6,
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

            ]
        },


    };

    var param = srcParam;

    if (userParam) {
        //param=Object.assign({},srcParam, userParam);

        objectAssign(srcParam, userParam);
        console.log(srcParam);
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
    fApr.frameBoxShadow = null;

    fApr.frameBackgroundColor = 'transparent';

    fApr.frameComponents = new Array();

    fApr.frameHeightAdjust = 0;//default is 1

    fApr.getTitleBarStyle = function () {

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

    fApr.onInitialize = function () {

        var partsBuilder = fApr.getPartsBuilder();

        var x = 0;

        for (var j in param.titleBar.buttons) {

            var buttonSrc = param.titleBar.buttons[j];


            var bt = partsBuilder.buildTextButtonAppearance();

            //caption
            bt.fa = buttonSrc.fa;

            bt.width = param.titleBar.buttonWidth;
            bt.height = param.titleBar.buttonHeight;

            bt.borderRadius = 0;
            bt.borderWidth = 0;

            bt.borderColorDefault = '#c6c6c6';
            bt.borderColorFocused = '#fc615c';
            bt.borderColorHovered = bt.borderColorFocused;
            bt.borderColorPressed = '#e64842';

            bt.borderStyleDefault = 'solid';
            bt.borderStyleFocused = bt.borderStyleDefault;
            bt.borderStyleHovered = bt.borderStyleDefault;
            bt.borderStylePressed = bt.borderStyleDefault;

            //background
            bt.backgroundColorDefault = 'transparent';
            bt.backgroundColorFocused = 'transparent';
            bt.backgroundColorHovered = 'transparent';
            bt.backgroundColorPressed = 'transparent';

            var colors = getSubColor(param.titleBar.buttonColor);
            bt.captionColorDefault = param.titleBar.buttonColor;
            bt.captionColorFocused = param.titleBar.buttonColor;
            bt.captionColorHovered = colors.hovered;
            bt.captionColorPressed = colors.pressed;

            bt.captionShiftYpx = 0;
            bt.captionFontRatio = 1;

            var closeBtnEle = partsBuilder.buildTextButton(bt);

            if (buttonSrc.visible) {
                closeBtnEle.style.display = 'flex';
            } else {
                x += param.titleBar.buttonWidth;
                closeBtnEle.style.display = 'none';
            }

            var titleBarHeight = parseInt(fApr.titleBarHeight);

            var eleLeft = x;

            //compute vertical center
            var eleTop = -titleBarHeight + (titleBarHeight - bt.height) / 2;

            var eleAlign = 'RIGHT_TOP';

            fApr.addFrameComponent(buttonSrc.name, closeBtnEle, eleLeft, eleTop, eleAlign);

            x += -param.titleBar.buttonWidth;

        }


    };
    //

    return fApr;
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
    return {src: ret, hovered: ret2, pressed: ret3};
}

function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

function objectAssign(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, {[key]: {}});
                objectAssign(target[key], source[key]);
            } else {
                Object.assign(target, {[key]: source[key]});
            }
        }
    }
    return objectAssign(target, ...sources);
}


module.exports.getStyle = getStyle;