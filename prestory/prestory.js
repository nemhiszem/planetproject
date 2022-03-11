var $el1;
var $el2;
var $el3;
var $el4;
var $el5;
var $el6;
var $el7;
var $el8;
var $button;

setTimeout(function() {
    $el1 = $('.bg-container.active');
    $el2 = $('.bg-container2:not(.active');
    $el2.addClass('active');
}, 2000);

setTimeout(function() {
    $el7 = $('.bg-container-1:not(.notactive');
    $el7.addClass('notactive');
}, 10000);
setTimeout(function nem2() {
    $el6 = $('.bg-container3:not(.active');
    $el6.addClass('active');
}, 12000);

setTimeout(function nem() {
    $el5 = $('.prestorytxt:not(.active');
    $el5.addClass('active');
    setTimeout(function() {
        $el5 = $('.prestorytxt:not(.postActive');
        $el5.addClass('postActive');
    }, 12000);
}, 7000);

setTimeout(function nem2() {
    $el6 = $('.prestorytxt2:not(.active');
    $el6.addClass('active');
}, 19000);

//setTimeout(function() {
//$el4 = $('.bg-container4:not(.active');
//$el4.addClass('active');

/*
const text = document.querySelector(".prestorytxt");
const strtext = text.textContent;
const splittext = strtext.split("");
var comp = false;
text.textContent = "";

for (let i = 0; i < splittext.length; i++) {
    text.innerHTML += "<span>" + splittext[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splittext.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
} */
//}, 7000);

document.getElementById("myButton").onclick = function() {
    location.href = "../solarsystem/solarsystem.html";
    if (value === '') {

    }
}

setTimeout(function() {
    $button = $('.button_cont:not(.active');
    $button.addClass('active');
}, 20000);

var nem = false;

function play() {
    var audio = document.getElementById("audio");
    if (nem) {
        audio.pause();
        nem = false;
    } else {
        audio.loop = true;
        audio.play();
        nem = true;
    }
}