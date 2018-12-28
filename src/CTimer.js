
/**
 * CTimer class<br>
 * Copyright 2007- Tom Misawa, riversun.org@gmail.com
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
 * How to use:
 *  var timer = new CTimer();
 *    var value = 0;
 *
 *    timer.setCallback(function (timerObj) {
 *        value++;
 *        console.log(value);
 *        if (value == 100) {
 *            timerObj.stopTimer();
 *        }
 *    });
 *    timer.setIntervalMillis(100);
 *    timer.startTimer();
 *
 * @author Tom Misawa (riversun.org@gmail.com)
 */

var CTimer =
    (function () {
        function CTimer() {
            var me = this;

            me._timerId = null;
            me._isRunning = false;
            me._timerInterval = 0;

            me._internalCallback = _internalCallback;
            me._timerMethod = null;


            function _internalCallback() {
                if (me._timerMethod) {
                    me._timerMethod(me);
                }
                if (me._isRunning) {
                    clearTimeout(me._timerId);
                    me._timerId = setTimeout(me._internalCallback, me._timerInterval);
                }
            }
        }

        CTimer.prototype.setCallback = function (callback_func) {
            var me = this;
            me._timerMethod = callback_func;
            return me;
        };

        CTimer.prototype.setIntervalMillis = function (interval) {
            var me = this;
            me._timerInterval = interval;
            return me;
        };

        CTimer.prototype.stopTimer = function () {
            var me = this;
            me._isRunning = false;
            return me;
        };

        CTimer.prototype.startTimer = function () {
            var me = this;
            if (me._timerInterval > 0) {
                me._timerId = setTimeout(me._internalCallback, me._timerInterval);
                me._isRunning = true;

            }
            return me;
        };


        return CTimer;
    })();
/**
 * end of CTimer class
 */
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
module.exports = CTimer;