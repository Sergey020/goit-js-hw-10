import{f,i as h}from"./vendor-77e16229.js";const r=document.querySelector("#datetime-picker"),n=document.querySelector("button"),y=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let s,c=null;function t(e){const d=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:i,seconds:m}}function o(e){return String(e).padStart(2,"0")}const u={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0].getTime()<u.defaultDate.getTime()?(h.show({message:"Please choose a date in the future",position:"topRight",backgroundColor:"#EF4040",messageColor:"#ffffff"}),n.disabled=!0):(n.disabled=!1,s=e[0],console.log(s))}};f(r,u);function a(){const e=s.getTime()-Date.now();console.log(e),e>0?(y.textContent=o(t(e).days),g.textContent=o(t(e).hours),S.textContent=o(t(e).minutes),b.textContent=o(t(e).seconds)):clearInterval(c)}function p(){n.disabled=!0,r.disabled=!0,a(),c=setInterval(()=>a(),1e3)}n.addEventListener("click",p);
//# sourceMappingURL=1-timer-12b5be8c.js.map
