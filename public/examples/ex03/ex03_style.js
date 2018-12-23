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

        var img_data_close_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFdJREFUeNpi/P//PwNeAFKgLCF6AIjnwMRAbJAYSI4FKnYHiJOBgjA1yUA8F24Ckq7/UDwHJsfEQACwwHSjGIuwLgXmBhWQ5N0Xr1OgGmBiDIyEvAkQYAB60iRIRtfWzQAAAABJRU5ErkJggg==';
        var img_data_maximize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADxJREFUeNpiYEACyhKiU0AYWYyJARX4QDFOBRiAEWokTJc0lH4KpbcQNIEBzZEPQJgkN7Cg8begKwAIMAC1EQhm4CX95QAAAABJRU5ErkJggg==';
        var img_data_minimize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpi/P//PwM+wMRAABBUwKIiKTYFSPvgkN9C0ARG2jsSIMAAWWAH8lrycVkAAAAASUVORK5CYII=';
        var img_data_1dot_transparent = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=';
        var img_style = 'margin:0px;padding:0px;width:6px;height:6px';

        var imageMaximize = document.createElement('img');
        imageMaximize.src = img_data_maximize_hovered;
        imageMaximize.setAttribute('style', img_style);

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

            cbApr.imageDefault = imgTransparent;
            cbApr.imageHovered = imageClose;
            cbApr.imagePressed = imageClose;
            cbApr.imageFocused = imgTransparent;

            var closeBtnEle = partsBuilder.buildButton(cbApr);
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

            mbApr.imageDefault = imgTransparent;
            mbApr.imageHovered = imageMinimize;
            mbApr.imagePressed = imageMinimize;
            mbApr.imageFocused = imgTransparent;

            var minimizeBtnEle = partsBuilder.buildButton(mbApr);
            var eleLeft = 24;
            var eleTop = -18;
            var eleAlign = 'LEFT_TOP';


            fApr.addFrameComponent('minimizeButton', minimizeBtnEle, eleLeft, eleTop, eleAlign);

            //configure minimize button appearance[end]//////////////
        }

        {
            //configure zoom button appearance[begin]//////////////
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
            zbApr.caption = null;

            zbApr.imageDefault = imgTransparent;
            zbApr.imageHovered = imageMaximize;
            zbApr.imagePressed = imageMaximize;
            zbApr.imageFocused = imgTransparent;

            var zoomBtnEle = partsBuilder.buildButton(zbApr);
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