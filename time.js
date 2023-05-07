var korTarget = document.getElementById("kr_time");
var espTarget = document.getElementById("esp_time");

function updateCountryTime(target, dis){
    var time = new Date();

    var month = time.getMonth();
    var date = time.getDate();
    var day = time.getDay();
    var week = ['일','월','화','수','목','금','토'];

    var hours = time.getHours() + dis;
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    target.innerText = `${month + 1}월 ${date}일 ${week[day]}요일 ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

updateCountryTime(korTarget, 0);
updateCountryTime(espTarget, -7);

setInterval(function(){
    updateCountryTime(korTarget, 0);
    updateCountryTime(espTarget, -7);
}, 1000);