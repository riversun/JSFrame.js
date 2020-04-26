var inherit = require('../utils/Inherit.js')
var CTextButtonAppearance = require('./CButtonAppearance.js');

inherit(CImageButtonAppearance, CTextButtonAppearance);

function CImageButtonAppearance() {


  this.imageDefault = null;
  this.imageHovered = null;
  this.imagePressed = null;
  this.imageFocused = null;

  this.imageStore = {};
}

CImageButtonAppearance.prototype._setImage = function(src, width, height) {
  var me = this;

  var storedImgEle = me.imageStore[src];

  if (storedImgEle) {
    return storedImgEle;
  } else {
    var imgEle = document.createElement('img');
    imgEle.src = src;
    if (width && height) {
      var imgWidth = width;
      var imgHeight = height;
      var imgStyle = 'margin:0px;padding:0px;width:' + imgWidth + 'px;height:' + imgHeight + 'px';
      imgEle.setAttribute('style', imgStyle);
    }
    me.imageStore[src] = imgEle;

    return imgEle;
  }
}
CImageButtonAppearance.prototype.setSrc = function(model) {
  var me = this;
  if (model.default) {
    me.imageDefault = me._setImage(model.default, model.width, model.height);
  }
  if (model.hovered) {
    me.imageHovered = me._setImage(model.hovered, model.width, model.height);
  }
  if (model.pressed) {
    me.imagePressed = me._setImage(model.pressed, model.width, model.height);
  }
  if (model.focused) {
    me.imageFocused = me._setImage(model.focused, model.width, model.height);
  }
}

module.exports = CImageButtonAppearance;