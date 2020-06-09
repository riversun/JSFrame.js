var mergeDeeply = require('merge-deeply');

function getPreset(param) {

  var result = {};
  result.appearanceName = 'yosemite';
  result.appearanceParam = {};

  var presetParam = {};

  if (param) {
    presetParam = param;
  }

  var isFullScreen = presetParam.maximizeButtonBehavior === 'fullscreen';
  var minimizeButton = presetParam.minimizeButtonBehavior === 'minimize' ? 'minimizeButton' : null;
  var hideButton1 = presetParam.minimizeButtonBehavior === 'hide' ? 'minimizeButton' : null;
  var hideButton2 = presetParam.closeButtonBehavior === 'hide' ? 'custom-close-button' : null;
  var windowControlParam = presetParam.control;

  var closeButtonNameByCloseButtonBehavior = hideButton2;
  var closeButtonName = presetParam.closeButtonName;

  if (isFullScreen) {
    result.appearanceParam.titleBar = {
      greenButton: 'fullscreen',//'maximize' icon or 'fullscreen' icon
    };
  }
  // Set this to 'closeButton' to automatically close when clicking
  result.appearanceParam.closeButtonName = closeButtonNameByCloseButtonBehavior || closeButtonName || 'closeButton';

  result.setupPresetWindow = function(frame) {
    var defaultWindowControlParam = {
      maximizeButton: 'zoomButton',
      maximizeParam: {
        fullScreen: isFullScreen,// true:maximized without title bar,false:maximized with title bar
        restoreKey: 'Escape',//Set key code from https://www.w3.org/TR/uievents-code/#keyboard-key-codes
      },

      demaximizeButton: 'dezoomButton',
      deminimizeButton: 'deminimizeButton',
      minimizeButton: minimizeButton,
      hideButtons: [hideButton1, hideButton2],
      hideParam: {
        align: 'CENTER_CENTER',//ABSOLUTE:If you want the window to disappear after transitioning to the position you specified

        duration: 300
      },
      dehideParam: {
        duration: 300
      },
      styleDisplay: 'inline',
      animation: true,
      animationDuration: 100,//The whole animation duration(millisec)
    };

    if (windowControlParam) {
      mergeDeeply({ op: 'overwrite-merge', object1: defaultWindowControlParam, object2: windowControlParam });
    }

    frame.setControl(defaultWindowControlParam);
  };
  return result;
}


module.exports.getPresetWindow = getPreset;
