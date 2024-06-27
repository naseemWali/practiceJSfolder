let btn1=document.querySelector("#btn1");
 btn1.onclick =(x,y) =>{
 console.log("btn1 clicked");
 let a=20;
 let b=12;
 console.log(a+b);
}

let div=document.querySelector("div")
 div.onmouseover =() =>{
    console.log("you are inside div");
}
// using (evt) event object as a variable to access event type and target ,clientx,clienty with mouseoout function.
let input=document.querySelector("input");
input.onmouseout =(evt) => {
  console.log("goodluck");
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX,evt.clientY); // here x and y letters should be in capital.
  
}

// EVENT LISTENERS
let primary=document.querySelector("#primary");
//console.log(primary); // here button is stored in primary variable 

// 1
primary.addEventListener("click",  (evt) => {  // adding event(evt) object for checking type ,target etc of the event.
  console.log("handler1");
  //console.log(evt);
})
// 2
primary.addEventListener("click",  () => { 
  console.log("handler2");
})
// 3
const handler= () => {
  console.log("handler3");
}
primary.addEventListener("click", handler);

// 4
primary.addEventListener("click",  () => { 
  console.log("handler4");
});


primary.removeEventListener("click",handler);

// lets practice .
// Q1 create a toggle button that  changes the screen to dark- mode when clicked and light-mode when clicked again? 

let item=document.querySelector("#item");
console.log(item);
let body=document.querySelector("body");

let mode="light";// dark
    
item.addEventListener("click",() => {
  if (mode==="light") {
    mode="dark";
  //  document.querySelector("body").style.backgroundColor="black";
  // second method for this above we select body .
  body.classList.add("dark"); // this .classlst picks classes/ids from css sty;e sheet.
  body.classList.remove("light");
  }
  else{
    mode="light";
  // document.querySelector("body").style.backgroundColor="white";
  // second method
  body.classList.add("light"); 
  body.classList.remove("dark");
  }
  console.log(mode);
  
})

// same q1 on p element.























