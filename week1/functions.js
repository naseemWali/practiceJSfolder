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


// using for in loop

// function countVowelsForIn(str) {
//   let count = 0; // Initialize count to 0

//   // Iterate through each index in the string
//   for (const index in str) {
//     const char = str[index]; // Get the character at the current index
//     // Check if the character is a vowel
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//       count++; // Increment count if the character is a vowel
//     }
//   }

//   // Log the total number of vowels
//   console.log(count);
// }

// // Call the function with the given string
// countVowelsForIn("naseemwalikhanoyu");


// (using for loop)

// function countVowelsForLoop(str) {
//   let count = 0; // Initialize count to 0

//   // Iterate through each character in the string using an index
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i]; // Get the character at the current index
//     // Check if the character is a vowel
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//       count++; // Increment count if the character is a vowel
//     }
//   }

//   // Log the total number of vowels
//   console.log(count);
// }

// // Call the function with the given string
// countVowelsForLoop("naseemwalikhanoyu");

// FOR EACH LOOP IN ARRAYS

let arr=["naseem","naseemabano","ali","sanam"];
// passing myFunction as a callback function in for each method
// WE HAVE THREE PARAMETERS THAT ARE OPTIONAL IN CALLBACK FUNCTION IN FOR EACH METHOD THAT ARE(VALUE,INDEX,ARRAY).


// arr.forEach(function myFunction (val,index,arr) {
//   console.log(val.toUpperCase(),index,arr);
// });

// passing same callback function as an arrow because this is actuall method in which callback function is passed in arrow form in for each method.

arr.forEach((san,index,arr) => {
console.log(san.toUpperCase(),index,arr);
});

// PRACTICE QUESTION Q1 for a given array of numbers ,print the square of each value usig the foreach loop?
let num=[1,2,3,4,5];
num.forEach ((result) => {
 console.log(result*result); // another method (result**2)
});

// FILTER
// creates a new array of elements that give true condition for a condition/filter.
// E.g; all even numbers
let newarray=[22,33,45,66,67,60,45,45,60,90,90];
let newarr=newarray.filter((valu) => {
  return (valu);  
});
console.log(newarr);

// USING SIMPLE METHOD
// newarray.filter((valu)=>{
//  return valu % 2 ===0;
// });

// REDUCE METHOD

let somenumbers=[1,2,3,4];
let answer=somenumbers.reduce((res,current) => {
  return res+current;
})
console.log(answer);

// EXAMPLE OF REDUCE METHOD
let example=[105,90,4,2,3,1];
const example1=example.reduce((accumulator,currentvalue) => {
  return accumulator>currentvalue ? accumulator : currentvalue;
});
console.log(example1);
// in this example of reduce it means that if accumulator is greater then it will give accumulator if not then it return currentvalue.

// PRACTICE QUESTIONS 
// Q1 we are given an array of marks of the students.filter out the marks of students that scored 90++?

let ourmarks=[87,82,84,96,95,78,99,93,70,74,60,45];
let toppers=ourmarks.filter((valoo) => {
 return valoo>90 || valoo>60;
});

console.log(toppers);

// PRACTICAL QUESTIONS
//Q1 we are given array of the marks of students .filter out the marks of students that scored 90+.
let gpa=[97,64,32,49,99,86,43,92,91,90];

let res=gpa.filter((param)=> {
  return param>=90;
})

console.log(res);

// Q2 take a number n as input from user .create an array of the numbers from 1 to n.
let n=parseInt(prompt("enter your number"));
let emptyarr=[];
for (let index=0; index<=n; index++) {
     emptyarr[index]=index;
  
}
console.log(emptyarr);

// Q3 use the reduce method to calculate the sum of the all numbers in the array? using Q2

let reduceexam=emptyarr.reduce((accu, curr)=>{
  return (accu+=curr);
});
 console.log(reduceexam);

// Q4 use the reduce method to calculate the product of the all numbers in the array?

 let bestreduceexample=emptyarr.reduce((saloo,taloo) => {
 return saloo*taloo;
 });

console.log(bestreduceexample);




