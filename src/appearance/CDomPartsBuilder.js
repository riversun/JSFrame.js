var mergeDeeply = require('merge-deeply');
var CTextButtonAppearance = require('./CButtonAppearance.js');
var CImageButtonAppearance = require('./CImageButtonAppearance.js');
var CChildMenuAppearance = require('./CChildMenuAppearance.js');

/**
 * CDomPartsBuilder class
 * Easy to build a beautiful or typical dom parts(htmlElement)
 * @constructor
 */
function CDomPartsBuilder() {
}

CDomPartsBuilder.prototype.buildChildMenuAppearance = function(frameAppearance) {
  return new CChildMenuAppearance(frameAppearance);
};
CDomPartsBuilder.prototype.buildTextButtonAppearance = function(src) {
  if (src) {
    var result = mergeDeeply({ op: 'clone', object1: src, concatArray: true });
    return result;
  } else {
    return new CTextButtonAppearance();
  }
};
CDomPartsBuilder.prototype.buildImageButtonAppearance = function(src) {
  if (src) {
    var clonedImageButtonAppearance = mergeDeeply({ op: 'clone', object1: src });
    return clonedImageButtonAppearance;
  } else {
    return new CImageButtonAppearance();
  }
};

CDomPartsBuilder.prototype.buildButton = function(btnAppearance) {
  var me = this;
  return me.buildTextButton(btnAppearance);
};

CDomPartsBuilder.prototype.appendChildMenuTo = function(childMenuAppearance, parentEle) {
  var me = this;
  var ndiv = document.createElement('div');
  ndiv.classList.add('jsframe-child-menu');
  ndiv.innerHTML = childMenuAppearance.childMenuHTML;
  ndiv.style.position = 'absolute';
  ndiv.style.pointerEvents = 'none';
  ndiv.style.width = childMenuAppearance.childMenuWidth + 'px';
  // ndiv.style.top = childMenuAppearance.childMenuTop + 'px';
  // ndiv.style.left = childMenuAppearance.childMenuLeft + 'px';
  ndiv.style.display = 'none';

  var posX = childMenuAppearance.xOffset;
  var posY = parseInt(parentEle.style.height, 10) + childMenuAppearance.yOffset + 2;

  if (childMenuAppearance.childMenuAlign === 'LEFT') {
    ndiv.style.left = posX + 'px';
  } else if (childMenuAppearance.childMenuAlign === 'RIGHT') {
    ndiv.style.right = posX + 'px';
  } else if (childMenuAppearance.childMenuAlign === 'CENTER') {
    posX = -childMenuAppearance.childMenuWidth / 2 + parseInt(parentEle.style.height, 10) / 2;
    ndiv.style.left = posX + 'px';
  }
  ndiv.style.top = posY + 'px';

  // ndiv.style.pointerEvents is none to avoid referring clicks to extra areas.
  // But we want its children to be responsive, so we set pointerEvents to auto
  ndiv.firstChild.style.pointerEvents = 'auto';

  parentEle.appendChild(ndiv);
  //return ndiv;
};


/**
 * Creates an actual DOM element from the specified appearance
 * @param btnAppearance
 * @returns {HTMLDivElement}
 */
CDomPartsBuilder.prototype.buildTextButton = function(btnAppearance) {

  var size = btnAppearance.size;
  var width = size;
  var height = size;

  if (btnAppearance.width != null) {
    width = btnAppearance.width;
  }

  if (btnAppearance.height != null) {
    height = btnAppearance.height;
  }


  var divElement = document.createElement('div');

  //border
  var borderWidth = btnAppearance.borderWidth;
  var borderRadius = btnAppearance.borderRadius;

  var borderColorDefault = btnAppearance.borderColorDefault;
  var borderColorFocused = btnAppearance.borderColorFocused;
  var borderColorHovered = btnAppearance.borderColorHovered;
  var borderColorPressed = btnAppearance.borderColorPressed;

  var borderStyleDefault = btnAppearance.borderStyleDefault;
  var borderStyleFocused = btnAppearance.borderStyleFocused;
  var borderStyleHovered = btnAppearance.borderStyleHovered;
  var borderStylePressed = btnAppearance.borderStylePressed;

  //background
  var backgroundColorDefault = btnAppearance.backgroundColorDefault;
  var backgroundColorFocused = btnAppearance.backgroundColorFocused;
  var backgroundColorHovered = btnAppearance.backgroundColorHovered;
  var backgroundColorPressed = btnAppearance.backgroundColorPressed;

  var backgroundBoxShadow = btnAppearance.backgroundBoxShadow;

  var fa = btnAppearance.fa;

  //caption
  var caption = btnAppearance.caption;
  var btnImageDefault = btnAppearance.imageDefault;
  var btnImageFocused = btnAppearance.imageFocused;
  var btnImageHovered = btnAppearance.imageHovered;
  var btnImagePressed = btnAppearance.imagePressed;

  //prevent to catch mouse events
  if (btnImageDefault) {
    btnImageDefault.style.pointerEvents = 'none';
  }
  if (btnImageFocused) {
    btnImageFocused.style.pointerEvents = 'none';
  }
  if (btnImageHovered) {
    btnImageHovered.style.pointerEvents = 'none';
  }
  if (btnImagePressed) {
    btnImagePressed.style.pointerEvents = 'none';
  }

  var _captionColorDefault = btnAppearance.captionColorDefault;
  var captionColorFocused = btnAppearance.captionColorFocused;
  var captionColorHovered = btnAppearance.captionColorHovered;
  var captionColorPressed = btnAppearance.captionColorPressed;

  var captionShiftYpx = btnAppearance.captionShiftYpx;
  var captionFontRatio = btnAppearance.captionFontRatio;

  //Set whether parent frame has focus or not internally
  divElement._hasFrameFocus = false;

  //Set whether mouse is pressing or not internally.
  divElement._isMouseDown = false;

  divElement.style.position = 'absolute';

  divElement.style.top = '0px';
  divElement.style.left = '0px';
  divElement.style.width = (width) + 'px';
  divElement.style.height = (height) + 'px';

  if (btnAppearance.cursor) {
    divElement.style.cursor = btnAppearance.cursor;
  } else {
    divElement.style.cursor = 'pointer';
  }
  divElement.style.margin = '0px';
  divElement.style.padding = '0px';
  //added for preventing bootstrap.css pollution
  divElement.style.boxSizing = 'content-box';
  divElement.style.fontFamily = 'sans-serif';

  divElement.onmousedown = function(e) {
    divElement._isMouseDown = true;
    divElement._handleFocusDrawing('onmousedown');
  };

  divElement.onmouseout = function(e) {
    divElement._isMouseDown = false;
    divElement._handleFocusDrawing('onmouseout');
  };

  divElement.onmouseover = function(e) {
    divElement._handleHoverDrawing();
  };

  divElement.onmouseup = function(e) {
    divElement._isMouseDown = false;
    divElement._handleFocusDrawing('onmouseup');
  };


  /**
   * The parent notifies that the parent's frame got focus
   */
  divElement._onTakeFocus = function() {
    divElement._hasFrameFocus = true;
    divElement._handleFocusDrawing('_onTakeFocus');
  };

  /**
   * The parent notifies that the parent's frame has lost focus
   */
  divElement._onReleaseFocus = function() {

    divElement._hasFrameFocus = false;
    divElement._handleFocusDrawing('_onReleaseFocus');
  };

  /**
   *  To handle 2x2 matrix.
   *  (_hasFrameFocus true/false x _isMouseDown true/false)
   */
  divElement._handleFocusDrawing = function(evtName) {
    if (divElement._hasFrameFocus) {
      //When this element has focus

      if (divElement._isMouseDown) {
        //border
        divElement.style.borderColor = borderColorPressed;
        divElement.style.borderStyle = borderStylePressed;

        //background
        divElement.style.backgroundColor = backgroundColorPressed;

        //caption
        divElement.style.color = captionColorPressed;

        if (btnImagePressed) {
          // divElement.innerHTML = '';
          // divElement.appendChild(btnImagePressed);
          updateImage(btnImagePressed, divElement);
        }
      } else {
        //border
        divElement.style.borderColor = borderColorFocused;
        divElement.style.borderStyle = borderStyleFocused;

        //background
        divElement.style.backgroundColor = backgroundColorFocused;

        //caption
        divElement.style.color = captionColorFocused;

        if (btnImageFocused) {
          // divElement.innerHTML = '';
          // divElement.appendChild(btnImageFocused);
          updateImage(btnImageFocused, divElement);
        }
      }

    } else {
      //When this element doesn't have focus
      if (divElement._isMouseDown) {
        //border
        divElement.style.borderColor = borderColorPressed;
        divElement.style.borderStyle = borderStylePressed;

        //background
        divElement.style.backgroundColor = backgroundColorPressed;

        //caption
        divElement.style.color = captionColorPressed;

        if (btnImagePressed) {
          // divElement.innerHTML = '';
          // divElement.appendChild(btnImagePressed);
          updateImage(btnImagePressed, divElement);
        }

      } else {

        //border
        divElement.style.borderColor = borderColorDefault;
        divElement.style.borderStyle = borderStyleDefault;

        //background
        divElement.style.backgroundColor = backgroundColorDefault;

        //caption
        divElement.style.color = _captionColorDefault;

        if (btnImageDefault) {
          // divElement.innerHTML = '';
          // divElement.appendChild(btnImageDefault);
          updateImage(btnImageDefault, divElement);
        }
      }
    }
  };

  divElement._handleHoverDrawing = function() {

    if (divElement._hasFrameFocus) {
      //When this element has focus
    } else {
      //When this element doesn't have focus
    }
    //border
    if (borderColorHovered) {
      divElement.style.borderColor = borderColorHovered;
    }
    if (borderStyleHovered) {
      divElement.style.borderStyle = borderStyleHovered;
    }

    //background
    if (backgroundColorHovered) {
      divElement.style.backgroundColor = backgroundColorHovered;
    }

    if (captionColorHovered) {
      //caption
      divElement.style.color = captionColorHovered;
    }
    if (btnImageHovered) {
      // divElement.innerHTML = '';
      // divElement.appendChild(btnImageHovered);
      updateImage(btnImageHovered, divElement);
    }
  };
  divElement.style.padding = '0px';

  divElement.style.textAlign = 'center';
  divElement.style.fontSize = (height * captionFontRatio) + 'px';

  divElement.style.lineHeight = (height) + 'px';

  divElement.style.borderWidth = '1px';

  if (borderWidth != null) {
    divElement.style.borderWidth = borderWidth + 'px';
  }

  if (backgroundBoxShadow != null) {
    divElement.style.boxShadow = backgroundBoxShadow;
  }

  divElement.style.borderRadius = (borderRadius + parseInt(divElement.style.borderWidth)) + 'px';

  var childMode = true;

  if (childMode && btnImageDefault) {
    // divElement.innerHTML = '';
    // divElement.appendChild(btnImageDefault);
    updateImage(btnImageDefault, divElement);
  } else if (childMode && caption) {

    var span = document.createElement('span');
    //span.style.position='absolute';
    span.style.width = '100%';
    span.style.marginTop = captionShiftYpx + 'px';
    span.style.display = 'inline-block';
    span.style.textAlign = 'center';
    span.style.fontFamily = 'sans-serif';
    span.appendChild(document.createTextNode(caption));
    divElement.appendChild(span);

  } else if (childMode && fa) {

    var span = document.createElement('span');
    span.style.pointerEvents = 'none';
    span.style.width = '100%';
    span.style.marginTop = captionShiftYpx + 'px';
    span.style.display = 'inline-block';
    span.style.textAlign = 'center';
    span.style.fontFamily = 'sans-serif';
    span.innerHTML = '<i class="' + fa + '"></i>';
    divElement.appendChild(span);
  } else if (!childMode && caption) {
    divElement.style.paddingTop = captionShiftYpx + 'px';
    divElement.appendChild(document.createTextNode(caption));
  }

  divElement._handleFocusDrawing();
  return divElement;

};

// Don't use innerHTML='' because there may be a child below this 'img' element.
// A child that may be a child is a childMenu.
function updateImage(image, parentElement) {
  var imgs = parentElement.querySelectorAll('img');
  if (parentElement.firstChild) {
    parentElement.insertBefore(image, parentElement.firstChild);
  } else {
    parentElement.appendChild(image);
  }
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    if (image !== img) {
      parentElement.removeChild(img);
    }
  }
}

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


/**
 * end of CDomPartsBuilder class
 */
module.exports = CDomPartsBuilder;
