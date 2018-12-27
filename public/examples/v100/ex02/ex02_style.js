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
function getOriginalStyle01(frameAppearance) {

    /**
     * Whether to display the title bar in the header or not
     */
    frameAppearance.showTitleBar = true;

    /**
     * Whether or not to display the default close button
     */
    frameAppearance.showCloseButton = true;

    /**
     * Font size for caption of title bar
     * ex) '14px'
     */
    frameAppearance.titleBarCaptionFontSize = '';

    /**
     * Font weight for caption of title bar
     * (Possible values) 'normal' 'bold' 'lighter' 'bolder' '100' '400' '700'...
     */
    frameAppearance.titleBarCaptionFontWeight = 'bold';

    /**
     * Height of title bar
     */
    frameAppearance.titleBarHeight = '24px';

    /**
     * The position from the left side of the caption.
     * If this value is null, caption will be centered.
     */
    frameAppearance.titleBarCaptionLeftMargin = '5px';

    /**
     * Caption color for default state
     * ('default' means 'NOT focused')
     *
     * If empty,JsFrame will apply style in the CSS.
     */
    frameAppearance.titleBarCaptionColorDefault = '';

    /**
     *  Caption color for focused state
     *  If empty,JsFrame will apply style in the CSS.
     */
    frameAppearance.titleBarCaptionColorFocused = '';

    /**
     * Title bar background color for default state.
     * If empty,JsFrame will apply style in the CSS.
     */
    frameAppearance.titleBarColorDefault = '';

    /**
     * Title bar background color for focused state
     */
    frameAppearance.titleBarColorFocused = '';

    /**
     * Bottom style of title bar
     */
    frameAppearance.titleBarBorderBottomDefault = '1px solid rgba(0,0,0,0.2)';

    /**
     * Frame's corner radius
     */
    frameAppearance.frameBorderRadius = '5px';

    /**
     * Border width for default state
     */
    frameAppearance.frameBorderWidthDefault = '2px';

    /**
     * Border width for focused state
     */
    frameAppearance.frameBorderWidthFocused = '2px';


    /**
     * Border color for default state
     */
    frameAppearance.frameBorderColorDefault = 'rgba(1, 1, 1, 0.2)';

    /**
     * Border color for focused state
     */
    frameAppearance.frameBorderColorFocused = '#feccb1';

    /**
     * Border style
     */
    frameAppearance.frameBorderStyle = 'solid';

    /**
     * Box shadow style of frame
     */
    frameAppearance.frameBoxShadow = '5px 5px 10px  rgba(0, 0, 0, 0.3)';

    /**
     * Back ground color of frame
     */
    frameAppearance.frameBackgroundColor = 'white';


    /**
     * Array for frameComponents
     * frameComponents are custom parts on the frame
     */
    frameAppearance.frameComponents = new Array();


    /**
     * Since this callback method is called at frame initialization,
     * Initialization processing such as adding frameComponent should be written here.
     */
    frameAppearance.onInitialize = function () {


        /**
          *A child element of Frame named FrameComponent can be added to Frame.
         * FrameComponent is attached to Frame and it moves with Frame.
         * The close button is also one of FrameComponent.
         * FrameComponent is created using DOM elements,
         * but using partsBuilder makes it easy to create a FrameComponent
         * that we often use such as close button.
         */
        var partsBuilder = frameAppearance.getPartsBuilder();

        /**
         * Here we use partsBuilder to create a TextButton to be a close button
         * that is a DOM element and will be added to frame as FrameComponent.
         *
         * First,
         * Get appearance model for TextButton to specify styles.
         */
        var btnAppearance = partsBuilder.buildTextButtonAppearance();

        /**
         * Width(Height) for text button
         */
        btnAppearance.size = 13;

        /**
         * Corner radius
         */
        btnAppearance.borderRadius = 2;

        /**
         * Border width
         */
        btnAppearance.borderWidth = 1;

        /**
         * Border color for default state
         */
        btnAppearance.borderColorDefault = 'darkgray';

        /**
         * Border color for focused state
         */
        btnAppearance.borderColorFocused = 'white';

        /**
         * Border color for pressed state
         */
        btnAppearance.borderColorPressed = 'tomato';

        /**
         * Border style for default state
         *
         * (Possible values)
         * 'none'  'hidden'  'solid'  'double'  'groove'  'ridge'  'inset'  'outset'  'dashed'  'dotted'
         *
         */
        btnAppearance.borderStyleDefault = 'solid';

        /**
         * Border style for focused state
         */
        btnAppearance.borderStyleFocused = 'solid';

        /**
         * Border style for pressed state
         */
        btnAppearance.borderStylePressed = 'solid';

        /**
         * Background color for default state
         */
        btnAppearance.backgroundColorDefault = 'transparent';

        /**
         * Background color for focused state
         */
        btnAppearance.backgroundColorFocused = 'transparent';

        /**
         * Background color for pressed state
         */
        btnAppearance.backgroundColorPressed = 'transparent';


        /**
         * Caption text example for 'x' cross mark.
         */
        const crossMark0 = '\u274c';
        const crossMark1 = '\u2716';
        const crossMark2 = '\u274e';
        const CROSS_MARK = '\u2573';
        /**
         * Caption text for text button
         */
        btnAppearance.caption = CROSS_MARK;

        /**
         * Caption color for default state
         */
        btnAppearance.captionColorDefault = 'darkgray';

        /**
         * Caption color for focused state
         */
        btnAppearance.captionColorFocused = 'white';

        /**
         * Caption color for pressed state
         */
        btnAppearance.captionColorPressed = 'tomato';

        /**
         *  There are cases where the text does not come to the vertical center position within the element,
         *  adjust with this value
         */
        btnAppearance.captionShiftYpx = 1;

        /**
         *  Factor value of font size to 'btnAppearance.size'
         */
        btnAppearance.captionFontRatio = 0.6;

        /**
         * Create textButton DOM element.
         */
        var closeBtnEle = partsBuilder.buildTextButton(btnAppearance);


        /**
         *  Specify where frameComponent is aligned in frame.
         *  In this example, the close button is placed on the upper right.
         *
         *  (Possible values)
         *  'LEFT_TOP' 'CENTER_TOP' 'RIGHT_TOP' 'LEFT_CENTER' 'CENTER_CENTER' 'RIGHT_CENTER' 'LEFT_BOTTOM' 'CENTER_BOTTOM' 'RIGHT_BOTTOM'
         */
        var eleAlign = 'RIGHT_TOP';

        /**
         * Relative x,y positions from the snap position specified by alignment
         */
        var x = -10;
        var y = -20;

        // 'closeButton' is a special name
        frameAppearance.addFrameComponent('closeButton', closeBtnEle, x, y, eleAlign);

    };
    //

    return frameAppearance;
}