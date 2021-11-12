"use strict"
var hour = 0;
var minute = 0;
var second = 0;
var milliseconds = 0;
var timeSecond = 10; // seconds
var stopwatch;

function start() {
    stopwatch = setInterval(timer, timeSecond);
}

function pause() {
    clearInterval(stopwatch);
}

function halt() {
    clearInterval(stopwatch)
    hour = 0;
    minute = 0;
    second = 0;
    document.querySelector(".counter").innerHTML = "00:00:00:00";
}

function timer() {
    milliseconds++
    if (milliseconds == 100) {
        milliseconds = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour = 0;
    }
    var format = (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second) + ":" + (milliseconds < 10 ? "0" + milliseconds : milliseconds);
    document.querySelector(".counter").innerHTML = format;
}