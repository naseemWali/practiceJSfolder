let idexample=document.getElementById("heading1");
console.log(idexample);

let classexample=document.getElementsByClassName("para")
console.log(classexample);

let queryexample=document.querySelector(".para");
console.log(queryexample);


let queryselectorallexample=document.querySelectorAll("#paar")
console.log(queryselectorallexample);

let innnerhtmlexample=document.querySelector("div")
console.log(innnerhtmlexample);


let tagNameexample=document.getElementsByClassName(".para").tagName;
console.log(tagNameexample);


// PRACTICE QUESTIONS

//Q1 create a h2 heading element with text -"hello javascript".Append "from apna college students" to this text using js? // here we concatinate the two strings in selectors.

let h2=document.querySelector("h2");
console.log(h2);
let concatinateexample=document.querySelector("h2").innerText=h2.innerText +  "from apna college";

console.log(concatinateexample);

//Q2 create three divs of same classes name - "box".Access them and add some unique text to each of them?

let divs=querySelectorAll(".box");
console.log(divs[2]);





















































