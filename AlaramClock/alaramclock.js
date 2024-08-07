// Digital clock
let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")

setInterval(() => {
   let currentTime=new Date();
   
    hrs.innerHTML=(currentTime.getHours()<10? "0":"") + currentTime.getHours() ; // we have use inline-if condition.
    min.innerHTML=(currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML=(currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds(); 
}, 1000);

// for alaram sound
let alaramsound=document.getElementById("alaramsound")
document.getElementById("setalaram").addEventListener("click",()=>{
    setInterval(() => {
        alaramsound.play()
    
    }, 2000);
})



