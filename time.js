var krTarget = document.getElementById("kr_time");
var espTarget = document.getElementById("esp_time");

function korT(krTarget) {
  var time = new Date();

  var month = time.getMonth();
  var date = time.getDate();
  var day = time.getDay();
  var week = ['일', '월', '화', '수', '목', '금', '토'];

  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  krTarget.innerText = `${month + 1}월 ${date}일 ${week[day]}요일 ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function espT(espTarget) {
  var time = new Date();

  var month = time.getMonth();
  var date = time.getDate();
  var day = time.getDay();
  var week = ['일', '월', '화', '수', '목', '금', '토'];

  var hours = time.getHours() - 7;
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  if (time.getHours() === 00) { //한국 시간이 00시일 때 스페인 시간을 17시로 표시
    date = time.getDate() -1;
    day = time.getDay() -1;
    if(time.getDay() === 0){ //한국의 날짜가 일요일일 때 -1을 뺄 수 없으므로 토요일을 출력하기 위해 6을 더해준다
        day = time.getDay() +6;
    }
    hours = 17;
  }
  if (time.getHours() === 01) { //한국 시간이 1시일 때 스페인 시간을 18시로 표시
    date = time.getDate() -1;
    day = time.getDay() -1;
    if(time.getDay() === 0){ //한국의 날짜가 일요일일 때 -1을 뺄 수 없으므로 토요일을 출력하기 위해 6을 더해준다
        day = time.getDay() +6;
    }
    hours = 18;
  }
  if (time.getHours() === 02) { //한국 시간이 2시일 때 스페인 시간을 19시로 표시
    date = time.getDate() -1;
    day = time.getDay() -1;
    if(time.getDay() === 0){ //한국의 날짜가 일요일일 때 -1을 뺄 수 없으므로 토요일을 출력하기 위해 6을 더해준다
        day = time.getDay() +6;
    }
    hours = 19;
  }
  if (time.getHours() === 03) { //한국 시간이 3시일 때 스페인 시간을 20시로 표시
    date = time.getDate() -1;
    day = time.getDay() -1;
    if(time.getDay() === 0){ //한국의 날짜가 일요일일 때 -1을 뺄 수 없으므로 토요일을 출력하기 위해 6을 더해준다
        day = time.getDay() +6;
    }
    hours = 20;
  }
  if (time.getHours() === 04) { //한국 시간이 4시일 때 스페인 시간을 21시로 표시
    date = time.getDate() -1;
    day = time.getDay() -1;
    if(time.getDay() === 0){ //한국의 날짜가 일요일일 때 -1을 뺄 수 없으므로 토요일을 출력하기 위해 6을 더해준다
        day = time.getDay() +6;
    }
    hours = 21;
  }
  if (time.getHours() === 05) { //한국 시간이 5시일 때 스페인 시간을 22시로 표시
    date = time.getDate() -1;
    day = time.getDay() -1;
    if(time.getDay() === 0){ //한국의 날짜가 일요일일 때 -1을 뺄 수 없으므로 토요일을 출력하기 위해 6을 더해준다
        day = time.getDay() +6;
    }
    hours = 22;
  }
  if (time.getHours() === 06) { //한국 시간이 6시일 때 스페인 시간을 23시로 표시
    date = time.getDate() -1;
    day = time.getDay() -1;
    if(time.getDay() === 0){ //한국의 날짜가 일요일일 때 -1을 뺄 수 없으므로 토요일을 출력하기 위해 6을 더해준다
        day = time.getDay() +6;
    }
    hours = 23;
  }

  espTarget.innerText = `${month + 1}월 ${date}일 ${week[day]}요일 ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

korT(krTarget);
espT(espTarget);

setInterval(function () {
  espT(espTarget);
  korT(krTarget);
}, 1000);