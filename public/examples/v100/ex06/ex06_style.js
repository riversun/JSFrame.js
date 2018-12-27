function getOriginalStyle_ex06_01(fApr) {

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

    //adjustment value
    fApr.frameHeightAdjust =0;//10;// 2;//default is 1



    return fApr;
}