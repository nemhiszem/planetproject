var $el1;
var $el2;
var $el3;
var $el4;

setTimeout(function() {
    $el1 = $('.bg-container.active');
    $el2 = $('.bg-container2:not(.active');
    $el2.addClass('active');
}, 2000);


setTimeout(function() {
    $el4 = $('.bg-container4:not(.active');
    $el4.addClass('active');
}, 7000);