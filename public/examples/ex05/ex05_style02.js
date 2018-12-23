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
function getOriginalStyle_ex05_02(fApr) {

    fApr.showTitleBar = false;
    fApr.showCloseButton = false;


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


    return fApr;
}