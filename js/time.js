const time = document.getElementById("time");

function getCurrentTime() {
    return new Date().toTimeString().substring(0, 5);
 }
 
 setInterval(
    () => time.innerHTML = getCurrentTime(),
    1000
 );