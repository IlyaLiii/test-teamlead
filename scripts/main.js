window.onload = function () {
    var minute = 29;
    var sec = 59;
    setInterval(function () {
       document.getElementById("timer-main").innerHTML =
          minute + " : " + sec;
       sec--;
       if (sec == 00) {
          minute--;
          sec = 60;
          if (minute == 0) {
             minute = 5;
          }
       }
    }, 1000);
 };