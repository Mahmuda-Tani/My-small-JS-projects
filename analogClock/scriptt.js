
// const hr=document.querySelector('#hr');
// const mn=document.querySelector('#mn');
// const sc=document.querySelector('#sc');

// setInterval(updateClock,1000);


// function updateClock(){

//     let day= new Date();
//     let hh= day.getHours()/12;
//     let mm=day.getMinutes()/60;
//     let ss=day.getSeconds()/60;
    
//     sc.style.transform="rotate ( " + (ss*360)+ "deg)";
//     mn.style.transform="rotate ( " + (mm*360)+ "deg)";
//     hr.style.transform="rotate ( " + (hh*360)+ "deg)";

// }

// updateClock();




const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');


function getTime() {
    const now = new Date();
    
    console.log(now);
    const seconds = now.getSeconds();
    const secondsDegree = (((seconds / 60) * 360) + 90);
    sc.style.transform = `rotate(${secondsDegree}deg)`


    const minutes = now.getMinutes();
    const minutesDegree = (((minutes / 60) * 360) + 90);
    mn.style.transform = `rotate(${minutesDegree}deg)`


    const hours = now.getHours();
    const hoursDegree = ((((hours+minutes/60) / 12) * 360) + 90);
    hr.style.transform = `rotate(${hoursDegree}deg)`



}

setInterval(getTime, 1000);