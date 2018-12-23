var jsFrame = new JSFrame();

function createFrame01() {
    var frame = jsFrame.createFrame(0, 0, 0, 0, getOriginalStyle_ex06_01(jsFrame.createFrameAppearance()));
    return frame;
}

var frmWidth = 200;
var frmHeight = 100;
var marginWidth = 20;
var marginHeight = 20;
var offsetX = 20;
var offsetY = 50;


//Frame resizing animation

//placed (0,0)
var frame = createFrame01();
var animator = jsFrame.createAnimator();

animator.set(frame)
    .setDuration(300)//set animation duration by millis.Default is 200millis.
    .fromPosition(frmWidth / 2 + (0 * (frmWidth + marginWidth)) + offsetX, frmHeight / 2 + (0 * (frmHeight + marginHeight) + offsetY), 'CENTER_CENTER')//set starting position.
    .fromWidth(0)//set starting width.If omitted, the original frame width is adopted.
    .fromHeight(0)//set starting height.If omitted, the original frame height is adopted.
    .toWidth(frmWidth)//set ending width.
    .toHeight(frmHeight)//set ending height.
    .start()//start animation.If target frame is not shown,show frame.
    .then(function (animatorObj) {

        var _frame = animatorObj.get();//get frame set to animator

        _frame.getFrameView().innerHTML = "<b>Animation:<br>Expanding from the (center,center)</b>"
    });


//placed (1,0)
jsFrame.createAnimator().set(createFrame01())
    .fromPosition(0 + (1 * (frmWidth + marginWidth)) + offsetX, 0 + (0 * (frmHeight + marginHeight) + offsetY), 'LEFT_TOP')
    .fromWidth(0)//set starting width.If omitted, the original frame width is adopted.
    .fromHeight(0)//set starting height.If omitted, the original frame height is adopted.
    .toWidth(frmWidth)
    .toHeight(frmHeight)
    .start(1 * 350) //start after 350millis later
    .then(function (animatorObj) {
        animatorObj.get().getFrameView().innerHTML = "<b>Animation:<br>Expanding from the (left,top) of the frame.</b>"
    });

//placed (2,0)
jsFrame.createAnimator().set(createFrame01())
    .fromPosition(frmWidth / 2 + (2 * (frmWidth + marginWidth)) + offsetX, frmHeight + (0 * (frmHeight + marginHeight) + offsetY), 'CENTER_BOTTOM')
    .fromWidth(frmWidth)
    .fromHeight(0)
    .toWidth(frmWidth)
    .toHeight(frmHeight)
    .start(2 * 350)   //start after waiting
    .then(function (animatorObj) {
        animatorObj.get().getFrameView().innerHTML = "<b>Animation:<br>Expanding from the (center,bottom) of the frame.</b>"
    });

//placed (3,0)
jsFrame.createAnimator().set(createFrame01())
    .fromPosition(frmWidth + (3 * (frmWidth + marginWidth)) + offsetX, frmHeight / 2 + (0 * (frmHeight + marginHeight) + offsetY), 'RIGHT_CENTER')
    .fromWidth(0)
    .fromHeight(frmHeight)
    .toWidth(frmWidth)
    .toHeight(frmHeight)
    .start(3 * 350) //start after waiting
    .then(function (animatorObj) {
        animatorObj.get().getFrameView().innerHTML = "<b>Animation:<br>Expanding from the (right,center) of the frame.</b>"
    });

//placed (0,1)
jsFrame.createAnimator().set(createFrame01())
    .fromPosition(frmWidth / 2 + (0 * (frmWidth + marginWidth)) + offsetX, frmHeight / 2 + (1 * (frmHeight + marginHeight) + offsetY), 'CENTER_CENTER')
    .fromWidth(0)
    .fromHeight(0)
    .toWidth(frmWidth)
    .toHeight(0)
    .start(4 * 350)  //start after waiting
    .then(function (animatorObj) {
        return animatorObj.toHeight(frmHeight).start();
    })
    .then(function (animatorObj) {
        animatorObj.get().getFrameView().innerHTML = "<b>2-step Animation:<br>Expanding from the (center,center) of the frame.</b>"
    });

//placed (1,1)
jsFrame.createAnimator().set(createFrame01())
    .fromPosition(frmWidth / 2 + (1 * (frmWidth + marginWidth)) + offsetX, 0 + (1 * (frmHeight + marginHeight) + offsetY), 'CENTER_TOP')
    .toWidth(frmWidth)
    .toHeight(0)
    .start(4 * 350 + 1 * 500) //start after waiting
    .then(function (animatorObj) {
        return animatorObj.toHeight(frmHeight).start();
    })
    .then(function (animatorObj) {
        animatorObj.get().getFrameView().innerHTML = "<b>2-step animation:<br>Expanding from the (center,top) of the frame.</b>"
    });

//placed(2, 1)
jsFrame.createAnimator().set(createFrame01())
    .fromPosition(0 + (2 * (frmWidth + marginWidth)) + offsetX, frmHeight + (1 * (frmHeight + marginHeight) + offsetY), 'LEFT_BOTTOM')
    .toWidth(0)
    .toHeight(frmHeight)
    .start(4 * 350 + 2 * 500) //start after waiting
    .then(function (animatorObj) {
        return animatorObj.toWidth(frmWidth).start();
    })
    .then(function (animatorObj) {
        animatorObj.get().getFrameView().innerHTML = "<b>2-step animation:<br>Expanding from the (left,bottom) of the frame.</b>"
    });

//placed(3, 1)
jsFrame.createAnimator().set(createFrame01())
    .fromPosition(frmWidth / 2 + (3 * (frmWidth + marginWidth)) + offsetX, frmHeight + (1 * (frmHeight + marginHeight) + offsetY), 'CENTER_BOTTOM')
    .toWidth(0)
    .toHeight(frmHeight)
    .start(4 * 350 + 3 * 500) //start after waiting
    .then(function (animatorObj) {
        return animatorObj.toWidth(frmWidth).start();
    })
    .then(function (animatorObj) {
        animatorObj.get().getFrameView().innerHTML = "<b>2-step animation:<br>Expanding from the (center,bottom) of the frame.</b>"
    });


//To be placed (3,2)
jsFrame.createAnimator().set(createFrame01())
    .fromPosition(frmWidth / 2 + (0 * (frmWidth + marginWidth)) + offsetX, frmHeight / 2 + (2 * (frmHeight + marginHeight) + offsetY), 'CENTER_CENTER')
    .fromWidth(0)
    .fromHeight(0)
    .toWidth(frmWidth)
    .toHeight(0)
    .start(4 * 350 + 4 * 500)  //start after waiting
    .then(function (animatorObj) {
        return animatorObj.toHeight(frmHeight).start();
    })
    .then(function (animatorObj) {
        animatorObj.get().getFrameView().innerHTML = "<b>Move after resizing:<br>Expanding from the (center,center) of the frame.</b>";
        return animatorObj
            .setDuration(500)
            .toX(frmWidth / 2 + (3 * (frmWidth + marginWidth)) + offsetX).start();
    });


//To be placed (2,2)
jsFrame.createAnimator().set(createFrame01())
    .fromPosition(frmWidth / 2 + (0 * (frmWidth + marginWidth)) + offsetX, frmHeight / 2 + (2 * (frmHeight + marginHeight) + offsetY), 'CENTER_CENTER')
    .fromWidth(0)
    .fromHeight(0)
    .toWidth(frmWidth)
    .toHeight(0)
    .start(4 * 350 + 4 * 500 + 1 * 1000)  //start after waiting
    .then(function (animatorObj) {
        return animatorObj.toHeight(frmHeight).start();
    })
    .then(function (animatorObj) {
        animatorObj.get().getFrameView().innerHTML = "<b>Move after resizing:<br>Expanding from the (center,center) of the frame.</b>";
        return animatorObj
            .setDuration(400)
            .toX(frmWidth / 2 + (2 * (frmWidth + marginWidth)) + offsetX).start();
    });

//To be placed (1,2)
jsFrame.createAnimator().set(createFrame01())
    .fromPosition(frmWidth / 2 + (0 * (frmWidth + marginWidth)) + offsetX, frmHeight / 2 + (2 * (frmHeight + marginHeight) + offsetY), 'CENTER_CENTER')
    .fromWidth(0)
    .fromHeight(0)
    .toWidth(frmWidth)
    .toHeight(0)
    .start(4 * 350 + 4 * 500 + 2 * 1000)  //start after waiting
    .then(function (animatorObj) {
        return animatorObj.toHeight(frmHeight).start();
    })
    .then(function (animatorObj) {
        animatorObj.get().getFrameView().innerHTML = "<b>Move after resizing:<br>Expanding from the (center,center) of the frame.</b>";
        return animatorObj
            .setDuration(300)
            .toX(frmWidth / 2 + (1 * (frmWidth + marginWidth)) + offsetX).start();
    });

//placed (0,2)
jsFrame.createAnimator().set(createFrame01())
    .fromPosition(frmWidth / 2 + (0 * (frmWidth + marginWidth)) + offsetX, frmHeight / 2 + (2 * (frmHeight + marginHeight) + offsetY), 'CENTER_CENTER')
    .fromWidth(0)
    .fromHeight(0)
    .toWidth(frmWidth)
    .toHeight(0)
    .start(4 * 350 + 4 * 500 + 3 * 1000)  //start after waiting
    .then(function (animatorObj) {
        return animatorObj.toHeight(frmHeight).start();
    })
    .then(function (animatorObj) {
        animatorObj.get().getFrameView().innerHTML = "<b>Final:<br>Expanding from the (center,center) of the frame.</b>"
    });