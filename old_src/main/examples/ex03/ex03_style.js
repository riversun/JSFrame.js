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
function getOriginalStyle_ex03_yosemite_style(fApr) {

    fApr.showTitleBar = true;
    fApr.showCloseButton = true;

    fApr.titleBarCaptionFontSize = '11px';
    fApr.titleBarCaptionFontWeight = 'normal';
    fApr.titleBarCaptionLeftMargin = null;
    fApr.titleBarCaptionColorDefault = '#4d494d';
    fApr.titleBarCaptionColorFocused = '#4d494d';

    fApr.titleBarHeight = '26px';

    fApr.titleBarColorDefault = '#f4f4f4';
    fApr.titleBarColorFocused = '#f4f4f4';

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


    fApr.onInitialize = function () {


        var partsBuilder = fApr.getPartsBuilder();

        {
            //configure close button appearance[begin]//////////////

            const CROSS_MARK = '\u2a2f';

            var cbApr = partsBuilder.buildTextButtonAppearance();

            cbApr.size = 8;

            cbApr.borderRadius = 4;
            cbApr.borderWidth = 1;

            cbApr.borderColorDefault = '#c6c6c6';
            cbApr.borderColorFocused = '#fc615c';
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

            //caption
            cbApr.caption = CROSS_MARK;

            cbApr.captionColorDefault = 'transparent';
            cbApr.captionColorFocused = 'transparent';
            cbApr.captionColorHovered = 'black';
            cbApr.captionColorPressed = 'transparent';

            cbApr.captionShiftYpx = 0;
            cbApr.captionFontRatio = 1.2;

            var closeBtnEle = partsBuilder.buildTextButton(cbApr);
            var eleLeft = 8;
            var eleTop = -18;
            var eleAlign = 'LEFT_TOP';

            // 'closeButton' is a special name
            fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

            //configure close button appearance[end]//////////////
        }

        {
            //configure minimize button appearance[begin]//////////////
            const HYPHEN = '\u2013';

            var mbApr = partsBuilder.buildTextButtonAppearance();


            mbApr.size = 8;

            mbApr.borderRadius = 4;
            mbApr.borderWidth = 1;

            mbApr.borderColorDefault = '#c6c6c6';
            mbApr.borderColorFocused = '#fdbe40';
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

            //caption
            mbApr.caption = HYPHEN;

            mbApr.captionColorDefault = 'transparent';
            mbApr.captionColorFocused = 'transparent';
            mbApr.captionColorHovered = 'black';
            mbApr.captionColorPressed = 'transparent';

            mbApr.captionShiftYpx = 1;
            mbApr.captionFontRatio = 0.1;

            var minimizeBtnEle = partsBuilder.buildTextButton(mbApr);
            var eleLeft = 24;
            var eleTop = -18;
            var eleAlign = 'LEFT_TOP';


            fApr.addFrameComponent('minimizeButton', minimizeBtnEle, eleLeft, eleTop, eleAlign);

            //configure minimize button appearance[end]//////////////
        }

        {
            //configure zoom button appearance[begin]//////////////

            const PLUS_MARK = '\ufe62';

            var zbApr = partsBuilder.buildTextButtonAppearance();

            zbApr.size = 8;

            zbApr.borderRadius = 4;
            zbApr.borderWidth = 1;

            zbApr.borderColorDefault = '#c6c6c6';
            zbApr.borderColorFocused = '#34ca49';
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
            zbApr.caption = PLUS_MARK;

            zbApr.captionColorDefault = 'transparent';
            zbApr.captionColorFocused = 'transparent';
            zbApr.captionColorHovered = 'black';
            zbApr.captionColorPressed = 'transparent';

            zbApr.captionShiftYpx = -1;
            zbApr.captionFontRatio = 1.8;

            var zoomBtnEle = partsBuilder.buildTextButton(zbApr);
            var eleLeft = 40;
            var eleTop = -18;
            var eleAlign = 'LEFT_TOP';

            fApr.addFrameComponent('zoomButton', zoomBtnEle, eleLeft, eleTop, eleAlign);

            //configure zoom button appearance[end]//////////////
        }
    };
    //

    return fApr;
}