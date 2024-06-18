//  functions in javascript
function myFunction(x, y) {
  console.log(x + y);
}
myFunction(15, 20);

// return in functions

function sum(a, b) {
  s = a + b;
  console.log("before return");
  return s;
  console.log("after return"); // this console will not print after return and we cant print anything after return
}
let result = sum(10, 3);
console.log(result);

// Arrow function
var arrowSum = (g, f) => {
  console.log(g+f);
};
arrowSum(2, 22);

// practice questions
// Q1 create a function using the "function" keyword that takes a string as an argument and return the number of vowels in the string?
function countVowels(str) {
 let Count=0; 
 for (const char of str) {
  if (char==="a" || char==="e" ||  char==="i" || char==="o" || char==="u") {   
    Count++;
    console.log(char); 
  } 
 }
 console.log(Count);
}
countVowels("naseemwalikhanoyu");
// Q1 do this question through arrow function?
var vowelCounts=(str) => {
  let counting=0;
  for (const vale of str) {
    if (vale==="a" || vale==="e" || vale==="i" || vale==="o" || vale==="u") {
      counting++;
      console.log(vale);
    }
  }
 return(counting);
}
let finalResult=vowelCounts("naseemwalikhan");
console.log(finalResult);





























