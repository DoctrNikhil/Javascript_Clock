var clock = document.querySelector(".clock");
var hourTail = document.querySelector(".hour-tail");
var minuteTail = document.querySelector(".minute-tail");
var secondTail = document.querySelector(".second-tail");
var digitelbtn = document.querySelector(".digitel");
var analogbtn = document.querySelector(".analog");
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var ampm = (hour < 12 ? "AM":"PM");
var hourDegree = hour/12 * 360 + min/60 * 360/12 - 90 ;
var minuteDegree = min/60 * 360 + sec/60 * 360/60 - 90;
var secondDegree = sec/60 * 360 - 90;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function setClock(){
    date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    ampm = (hour < 12 ? "AM":"PM");

    // Here digitel clock is set
    hour = (hour > 12 ? hour-12: (hour===0)?12:hour );
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;
    clock.innerHTML = hour+":"+min+":"+sec+" "+ampm;

    // Here analog clock is set
    hourDegree = hour/12 * 360 + min/60 * 360/12 - 90  ;
    minuteDegree = min/60 * 360 + sec/60 * 360/60 - 90 ;
    secondDegree = sec/60 * 360 - 90 ;
    hourTail.style.transform = 'rotate('+ hourDegree +'deg)';
    minuteTail.style.transform = 'rotate('+ minuteDegree +'deg)';
    secondTail.style.transform = 'rotate('+ secondDegree +'deg)';
}




async function updateval(){
    while(true){
        setClock();
        await sleep(500);
    }
   
}

updateval();

digitelbtn.addEventListener("click",function(){
    document.querySelector(".clock").style.display = "flex";
    document.querySelector(".analog-clock").style.display = "none";
});
analogbtn.addEventListener("click",function(){
    document.querySelector(".clock").style.display = "none";
    document.querySelector(".analog-clock").style.display = "initial";
});


