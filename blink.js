var blinkTimerId = null;
var blinkState = true;
var blinkElements = [];

function blink() {
    var tmp = document.getElementsByClassName("blink");
    blinkElements = Array.from(tmp);
    blinkTimer(1000);
}

function blinkTimer(ival) {
    blinkIt();
    blinkTimerId = setTimeout(function() {
        blinkTimer(ival);
    }, ival);
}

function blinkIt() {
    blinkState = !blinkState;
    var visibility = blinkState ? "hidden" : "visible";
    blinkElements.forEach(function(element) {
        element.style.visibility = visibility;
    });
}

blink();