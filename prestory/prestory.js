var $el1;
var $el2;
var $el3;
var $el4;

setTimeout(function() {
    $el1 = $('.bg-container.active');
    $el2 = $('.bg-container2:not(.active');
    $el2.addClass('active');
}, 5000);

setTimeout(function() {
    $el3 = $('.bg-container3:not(.active');
    $el3.addClass('active');
}, 10000);

setTimeout(function() {
    $el4 = $('.bg-container4:not(.active');
    $el4.addClass('active');
}, 15000);