const hr=document.getElementById("hora");
const mn=document.getElementById("min");
const sc=document.getElementById("seg");

setInterval(()=>{
    let day=new Date();
    let hh=day.getHours()*30;
    let mm=day.getMinutes()*6;
    let ss=day.getSeconds()*6;
  
    hr.style.transform=`rotate(${hh+(mm/12)}deg)`;
    hr.style.transformOrigin="0% 100%";

    mn.style.transform=`rotate(${mm}deg)`;
    mn.style.transformOrigin="0% 100%";

    sc.style.transform=`rotateZ(${ss}deg)`;
    sc.style.transformOrigin="0% 100%";

})

