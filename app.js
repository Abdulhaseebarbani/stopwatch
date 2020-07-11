var hrs = 00;
var min = 00;
var sec = 00;
var msec = 00;
var hrsHeading = document.getElementById("hrs")
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")
var interval;
function timer() {
    msec++
    msecHeading.innerHTML = leftPad(msec)
    if (msec >= 100) {
        sec++
        msec = 00
        secHeading.innerHTML = leftPad(sec)
    }
    else
        if (sec >= 60) {
            min++
            sec = 00
            minHeading.innerHTML = leftPad(min) + ':'
        }
    else
        if (min >= 60) {
            hrs++
            min = 00
            minHeading.innerHTML = leftPad(hrs) + ':'
        }
}
function start() {
 interval = setInterval(timer, 10)

}
function pause() {
    clearInterval(interval)
}
function reset() {
    clearInterval(interval)
    min = 00
    sec = 00
    msec = 00
    minHeading.innerHTML = min + '0' + ':'
    secHeading.innerHTML = sec + '0' + ':'
    msecHeading.innerHTML = '0' + msec
    laps.innerHTML = ''
}
lap.onclick = function(){
    laps.innerHTML += '<li>' + leftPad(hrs) +':'+ leftPad(min) + ':'+ leftPad(sec) + ':' + leftPad(msec) + '</li>';
}
function leftPad(value) {
    return value < 10 ? ('0' + value) : value;
  }