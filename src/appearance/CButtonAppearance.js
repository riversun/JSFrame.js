function CTextButtonAppearance() {

  var crossMark0 = '\u274c';

  this.size = 14;
  this.width = null;
  this.height = null;

  //border
  this.borderRadius = 2;
  this.borderWidth = 0;
  this.borderColorDefault = '#aaaaaa';
  this.borderColorFocused = this.borderColorDefault;
  this.borderColorHovered = null;
  this.borderColorPressed = this.borderColorDefault;

  this.borderStyleDefault = 'solid';
  this.borderStyleFocused = this.borderStyleDefault;
  this.borderStyleHovered = null;
  this.borderStylePressed = this.borderStyleDefault;

  this.backgroundBoxShadow = null;


  //background
  this.backgroundColorDefault = 'transparent';
  this.backgroundColorFocused = this.backgroundColorDefault;
  this.backgroundColorHovered = null;
  this.backgroundColorPressed = this.backgroundColorDefault;

  //caption
  this.caption = null;
  this.captionColorDefault = 'white';
  this.captionColorFocused = this.captionColorDefault;
  this.captionColorHovered = null;
  this.captionColorPressed = this.captionColorDefault;
  this.captionShiftYpx = 0;
  this.captionFontRatio = 1.0;


}
module.exports = CTextButtonAppearance;