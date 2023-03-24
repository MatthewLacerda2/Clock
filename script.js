function clock(){
    console.log('dbug is on the table');

    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();

    var hours=document.getElementById("hours").textContent=h;
    var minutes=document.getElementById("minutes").textContent=m;
    var seconds=document.getElementById("seconds").textContent=s;

    var d1= new Date().getDate();
    var d2= new Date().getFullYear();
    var dm= new Date().getMonth();

    var date1=document.getElementById("day").textContent=d1;
    var datem=document.getElementById("month").textContent=dm;
    var date2=document.getElementById("year").textContent=d2;
}

var interval = setInterval(clock, 1000);

function createCityClock(){
    alert('debug')
}