

const  BASE_URL = "";

const  dropdowns = document.querySelectorAll(".dropdown select")
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");

for(let select of dropdowns) {
    for (currCode in countryList) {
        let newOption=document.createElement("option")
        newOption.innerText=currCode
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD"){
         newOption.selected="selected";  
        } else if (select.name==="to" && currCode==="PKR") {
        newOption.selected="selected"
        }
        select.append(newOption);
    }

    select .addEventListener("change",(evt)=>{
    updateFlag(evt.target)
    });
    
}

const updateFlag=(element) =>{
let currCode=element.value;
let countryCode=countryList[currCode];//IN.EU
let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
let img=element.parentElement.querySelector("img");
img.src=newSrc
}

btn.addEventListener("click", async (evt) => {
evt.preventDefault();
let amount =document.querySelector(".amount input")
let amVal=amount.value;
if (amVal==="" || amVal < 1) {
    amount.value="1";
}
// console.log(fromCurr.value,toCurr.value);
const requesturl=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response=await fetch(requesturl)
let data=await response.json();
let rate=data[toCurr.value.toLowerCase()];
console.log(rate);
});































































































