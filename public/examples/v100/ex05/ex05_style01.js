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

function getOriginalStyle_ex05_01(fApr) {

    fApr.showTitleBar = true;
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

    fApr.onInitialize = function () {


        var partsBuilder = fApr.getPartsBuilder();


        //configure close button appearance[begin]//////////////

        const crossMark0 = '\u274c';
        const crossMark1 = '\u2716';
        const crossMark2 = '\u274e';
        const CROSS_MARK = crossMark1;


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

        cbApr.captionColorDefault = '#black';
        cbApr.captionColorFocused = 'black';
        cbApr.captionColorHovered = 'white';
        cbApr.captionColorPressed = 'white';

        cbApr.captionShiftYpx = 1;
        cbApr.captionFontRatio = 0.6;

        var closeBtnEle = partsBuilder.buildTextButton(cbApr);
        var eleLeft = 4;
        var eleTop = -10 - parseInt(fApr.titleBarHeight);
        var eleAlign = 'RIGHT_TOP';

        // 'closeButton' is a special name
        fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

        //configure close button appearance[end]//////////////


    };
    //

    return fApr;
}