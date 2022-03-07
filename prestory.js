function timer(){
    var sec = 5;
    var timer = setInterval(function(){
        for (var i = 0; i <5; i++)
        {
            sec--;
            if (sec < 0) {
                clearInterval(timer);
            }
            if (sec == 0) {
            changebackgroundimage = 'speaker.png';
            }
        }
    }, 1000);
}