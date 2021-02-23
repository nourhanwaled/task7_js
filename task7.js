const months=["jan","feb","mar","april","may","june","july","aug","sep","nov","des"];
const weeks=["sun","mon","tue","wen","thus","fri","sat"];
let giveaway=document.querySelector(".giveaway");
let time=document.querySelectorAll(".deadline h4");
let deadline=document.querySelector(".deadline");
//set future time
let futuredate=new Date(2020,10,25,10,20,20);
//acces
let year=futuredate.getFullYear();
let month=futuredate.getMonth();
month=months[month];
let day=futuredate.getDate();
let hours=futuredate.getHours();
let minutes=futuredate.getMinutes();
let second=futuredate.getUTCSeconds();
let weekday=futuredate.getDay();
weekday=weeks[weekday];
console.log(weekday);
giveaway.innerHTML=`Giveaway end on ${weekday} ${day} ${month}
 ${year} ${hours}:${minutes}pm`;
 //future time im ms
 let futuretime=futuredate.getTime();
 //function to count different time betwen today and the future
 function getremin(){
     let todaytime=new Date().getTime();
     let diff=futuretime-todaytime;
     let oneday=24*60*60*1000;
     let onehour=60*60*1000;
     let onemin=60*1000;
     let onesecond=1000;
     //dif in day and hour and sec
     let d=diff/oneday;
     d=Math.floor(d);
     let h=(diff%oneday)/onehour;
     h=Math.floor(h);
     let min=(diff%onehour)/onemin;
     min=Math.floor(min);
     let sec=(diff%onemin)/onesecond;
     sec=Math.floor(sec);
     const values=[d,h,min,sec];
     //function to put zero before number
     function format(index){
      if(index<10){
          return index=`0${index}`;
      }
      return index;
     }
     time.forEach(function(tim,index){
      tim.innerHTML=format(values[index]);
     });

     if(diff<0){
         clearInterval(getremin);
         deadline.innerHTML=`<h2>Sorry Item Has ended</h2>`;
     }
 }
let cutdown=setInterval(getremin,1000);
