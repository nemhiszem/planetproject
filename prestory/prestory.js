var $el1;
var $el2;
var $el3;
var $el4;
var $button;

setTimeout(function() {
    $el1 = $('.bg-container.active');
    $el2 = $('.bg-container2:not(.active');
    $el2.addClass('active');
}, 2000);


setTimeout(function() {
    $el4 = $('.bg-container4:not(.active');
    $el4.addClass('active');
}, 7000);

document.getElementById("myButton").onclick = function () {
    location.href = "../solarsystem/solarsystem.html";
}

setTimeout(function () {
    $button = $('.button_cont:not(.active');
    $button.addClass('active');
}, 9000);