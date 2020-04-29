/**
 * CFrameComponent class
 * <p>
 * Wrapped DOM element like 'div' to display above the frame<br>
 *
 * ex.An object such as closeButton
 *
 * @param id
 * @param frame
 * @param htmlElement DOM-element
 * @param x relative x-position in the frame respect to align
 * @param y relative y-position in the frame respect to align
 * @param align relative alignment in the frame
 * @constructor
 */
function CFrameComponent(id, htmlElement, x, y, align, extra) {
  var me = this;

  me.id = id;
  me.x = x;
  me.y = y;
  me.frame = null;

  me._focusTakingCallabck = null;
  me._focusReleasingCallabck = null;

  if (align) {
    me.frameComponentAlign = align;
  } else {
    me.frameComponentAlign = CALIGN.LEFT_TOP;
  }
  me.htmlElement = htmlElement;
  me.htmlElement.style.zIndex = 50;
  me.htmlElement.setAttribute('component-id', id);

  if (extra && extra.childMenu) {
    me.childMenu = extra.childMenu;
  } else if (htmlElement.querySelector('.jsframe-child-menu')) {
    me.childMenu = htmlElement.querySelector('.jsframe-child-menu');
  }

}

CFrameComponent.prototype.setFocusCallback = function(focusTakingCallback, focusReleasingCallback) {
  var me = this;
  me._focusTakingCallabck = focusTakingCallback;
  me._focusReleasingCallabck = focusReleasingCallback;
};

/**
 * Set parent frame of this frameComponent
 * @param frame
 */
CFrameComponent.prototype.setFrame = function(frame) {
  var me = this;

  me.frame = frame;
  me.htmlElement.parentObject = frame;
  me.updateAlign();
};

/**
 * Place the FrameComponent relative to the parent's frame.
 * Relocate relative to parent frame when window resize event occurs
 */
CFrameComponent.prototype.updateAlign = function() {

  var me = this;

  var frameComponentAlign = me.frameComponentAlign;

  var frame = me.frame;
  var eleStyle = me.htmlElement.style;
  eleStyle.userSelect = 'none';

  var x = me.x;
  var y = me.y;

  var frameWidth = frame.getWidth();
  var frameHeight = frame.getHeight();
  var eleStyleWidth = eleStyle.width;
  var eleStyleHeight = eleStyle.height;

  if (CALIGN.LEFT_TOP == frameComponentAlign) {
    eleStyle.left = x + 'px';
    eleStyle.top = y + 'px';
  } else if (CALIGN.HCENTER_TOP == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
    eleStyle.top = y + 'px';
  } else if (CALIGN.RIGHT_TOP == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
    eleStyle.top = y + 'px';
  } else if (CALIGN.LEFT_VCENTER == frameComponentAlign) {
    eleStyle.left = x + 'px';
    eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
  } else if (CALIGN.HCENTER_VCENTER == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
    eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
  } else if (CALIGN.RIGHT_VCENTER == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
    eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
  } else if (CALIGN.LEFT_BOTTOM == frameComponentAlign) {
    eleStyle.left = x + 'px';
    eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
  } else if (CALIGN.HCENTER_BOTTOM == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
    eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
  } else if (CALIGN.RIGHT_BOTTOM == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
    eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
  }
};

CFrameComponent.prototype.handleTakingFocus = function() {
  var me = this;
  if (me._focusTakingCallabck) {
    me._focusTakingCallabck();
  }
};

CFrameComponent.prototype.handleReleasingFocus = function() {
  var me = this;
  if (me._focusReleasingCallabck) {
    me._focusReleasingCallabck();
  }
};

/**
 * end of CFrameComponent class
 */

module.exports = CFrameComponent;
