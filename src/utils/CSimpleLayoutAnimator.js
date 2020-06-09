var CTimer = require('./CTimer.js');

/**
 * CSimpleLayoutAnimator class
 * Class for moving animation · scaling animation of frame.
 * <p>
 * @constructor
 */
function CSimpleLayoutAnimator() {

  this.fps = 30;
  this.durationMillis = 200;
  this.targetFrame = null;

  this._crrAlpha = 1.0;
  this._toAlpha = 1.0;

  //current width/height
  this._crrWidth = 0;
  this._crrHeight = 0;
  this._toWidth = 0;
  this._toHeight = 0;

  //current position(x,y)
  //this._crrX = 0;
  //this._crrY = 0;
  this._toX = 0;
  this._toY = 0;


  this.pinnedAnimationEnabled = false;
  this._pinX = 0;
  this._pinY = 0;
  this._pinAnchor = null;

}

/**
 * Set CIFrame object to be resized
 * @param ciframe
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.set = function(ciframe) {
  var me = this;
  me.targetFrame = ciframe;


  me.fromWidth(ciframe.getWidth());
  me.fromHeight(ciframe.getHeight());

  me.toWidth(ciframe.getWidth());
  me.toHeight(ciframe.getHeight());

  var crrPos = ciframe.getPosition();

  me.fromPosition(crrPos.x, crrPos.y, crrPos.anchor);


  return me;

};

/**
 * Get CIFrame object
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.get = function() {
  var me = this;
  return me.targetFrame;
};

/**
 * Set animation duration time millis
 * @param durationMillis
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.setDuration = function(durationMillis) {
  var me = this;

  me.durationMillis = durationMillis;
  return me;
};

/**
 * Set expected FPS
 * @param fps
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.setFPS = function(fps) {
  var me = this;
  me.fps = fps;
  return me;
};

/**
 * Set PIN position
 * @param x
 * @param y
 * @param anchor Position where animation starts from.Expected parameters as follows.
 'LEFT_TOP':Default.Specify the position starting from the upper left.
 'CENTER_TOP'
 'RIGHT_TOP'
 'LEFT_CENTER'
 'CENTER_CENTER'
 'RIGHT_CENTER'
 'LEFT_BOTTOM'
 'CENTER_BOTTOM'
 'RIGHT_BOTTOM'
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromPosition = function(x, y, anchor) {
  var me = this;
  me.pinnedAnimationEnabled = true;

  me._pinX = x;
  me._pinY = y;

  me.toPosition(x, y);

  if (anchor) {
    me._pinAnchor = anchor;
  }
  return me;
};
/**
 * Set resizeFrom width
 * @param fromWidth
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromWidth = function(fromWidth) {
  var me = this;
  me._crrWidth = fromWidth;

  return me;
};

/**
 * Set resizeFrom height
 * @param fromHeight
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromHeight = function(fromHeight) {
  var me = this;
  me._crrHeight = fromHeight;

  return me;
};

/**
 * Set resizeTo width
 * @param toWidth
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toWidth = function(toWidth) {
  var me = this;
  me._toWidth = toWidth;

  return me;
};

/**
 * Set resizeTo height
 * @param toHeight
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toHeight = function(toHeight) {
  var me = this;
  me._toHeight = toHeight;
  return me;
};

/**
 * Set from alpha
 * @param fromAlpha
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromAlpha = function(fromAlpha) {
  var me = this;
  me._crrAlpha = fromAlpha;

  return me;
};

/**
 * Set to alpha
 * @param toAlpha
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toAlpha = function(toAlpha) {
  var me = this;
  me._toAlpha = toAlpha;

  return me;
};

/**
 * Get CIFrame object
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.ease = function(ease) {
  var me = this;
  me._ease=ease;
  return me;
};

/**
 * Set move to position
 * @param x
 * @param y
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toPosition = function(x, y) {
  var me = this;
  me._toX = x;
  me._toY = y;
  return me;
};

/**
 * Set move to x
 * @param x
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toX = function(x) {
  var me = this;
  me._toX = x;
  return me;
};

/**
 * Set move to y
 * @param t
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toY = function(t) {
  var me = this;
  me._toY = t;
  return me;
};


CSimpleLayoutAnimator.prototype.start = function(waitMillis, requestFocusEnabled) {


  var me = this;

  var fromWidth = me._crrWidth;
  var fromHeight = me._crrHeight;

  var fromX = me._pinX;
  var fromY = me._pinY;

  var fromAlpha = me._crrAlpha;


  return new Promise(function(resolve, reject) {


    var numOfSteps = parseInt(me.fps * (me.durationMillis / 1000));
    if (numOfSteps == 0) {
      numOfSteps = 1;
    }

    var deltaWidth = (me._toWidth - fromWidth) / numOfSteps;
    var deltaHeight = (me._toHeight - fromHeight) / numOfSteps;

    var deltaX = (me._toX - fromX) / numOfSteps;
    var deltaY = (me._toY - fromY) / numOfSteps;

    var deltaAlpha = (me._toAlpha - fromAlpha) / numOfSteps;
    if(me._ease){
      deltaAlpha=deltaAlpha/1.24;
    }

    var unitMillis = me.durationMillis / numOfSteps;

    var idx = 0;


    function loop() {
      var timer = new CTimer();

      timer.setIntervalMillis(unitMillis);

      timer.setCallback(function(timer) {

        if (idx == numOfSteps) {

          var _width = me._toWidth;
          var _height = me._toHeight;

          var _x = fromX + deltaX * idx;
          var _y = fromY + deltaY * idx;

          var _alpha = me._toAlpha;

          if (me.pinnedAnimationEnabled) {
            //me.targetFrame._setPositionInternally(me._pinX, me._pinY, me._pinAnchor, _width, _height);

            me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
          }


          if (me.targetFrame.htmlElement.style) {
            me.targetFrame.htmlElement.style.opacity = _alpha;
          }

          //me.targetFrame.resizeDirect(_width, _height,false);
          me.targetFrame.setSize(_width, _height, true);

          me._crrWidth = _width;
          me._crrHeight = _height;

          me._pinX = _x;
          me._pinY = _y;
        }

        if (idx == (numOfSteps + 1)) {
          //Stop timer after last draw update.
          timer.stopTimer();

          if (me.targetFrame.htmlElement.style) {
            me.targetFrame.htmlElement.style.opacity = me._toAlpha;
          }
          resolve(me);
          return;
        }


        var _width = fromWidth + deltaWidth * idx;
        var _height = fromHeight + deltaHeight * idx;

        var _x = fromX + deltaX * idx;
        var _y = fromY + deltaY * idx;

        var _alpha = fromAlpha + deltaAlpha * idx;

        if (me.pinnedAnimationEnabled) {
          //me.targetFrame._setPositionInternally(me._pinX, me._pinY, me._pinAnchor, _width, _height);
          me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
        }

        if (me.targetFrame.htmlElement.style) {
          me.targetFrame.htmlElement.style.opacity = _alpha;
        }

        //me.targetFrame.resizeDirect(_width, _height,false);
        me.targetFrame.setSize(_width, _height, true);

        if (idx == 0) {

          //check window existence
          var wmgr = me.targetFrame.parentCanvas;
          if (wmgr) {
            var _targetFrame = wmgr.getWindow(me.targetFrame.id);
            if (_targetFrame) {
              me.targetFrame.show({ requestFocus: requestFocusEnabled });
            } else {
              //the target window must be deleted.
            }
          }
        }

        idx++;
      });


      timer.startTimer();
    }

    if (waitMillis) {

      var waiter = new CTimer();
      waiter.setIntervalMillis(waitMillis);
      waiter.setCallback(function(_timer) {
        _timer.stopTimer();

        loop();
      });
      waiter.startTimer();
    } else {
      loop();
    }


  });

};//start

/**
 * end of CSimpleLayoutAnimator class
 */
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


module.exports = CSimpleLayoutAnimator;
