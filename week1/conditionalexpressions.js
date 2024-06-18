// conditional expressions
// let a =prompt("hey whats your age")
// a=Number.parseInt(a); // this percent changes a string in to a number.
// console.log(typeof a);
// if statement
// if (a>0) {
//    alert("this is a valid age");
// };

// IF AND ELSE EXAMPLE
let age=12;
let drive;
if (age>=22) {
    drive='Yes you can drive';
    
}else{
    drive='No you cant drive';
};
console.log(drive);
    

//IF  EXAMPLE
let d=14;
let e=19;
if (d<=19) {
    console.log("this is true");
}
 // ELSE  EXAMPLE
 var z1=20;
 var z2="20";

 if (z1===z2) {
    console.log("true");
 } else {
    console.log("false");
 };
 
 // IF ELSEIF ELSE EXAMPLE
 let t="25";
 if (t>=30) {
    console.log("hot day");
 } else if(t<=12 || t==25){   // here i have make one statement true in else if statement but due to or operator which checks of one condition atleast true therefore it returns pleasant day 
    console.log("pleasant day");
 } else{
    console.log("cool day");
 }

 // switch statement

 let day="friday";
 switch (day) {
   case "monday":
      console.log("we will go for the walk");  
      break;
   
   case "wednesday":
         console.log("we will go to the zoo");  
         break;   

   case "friday":
            console.log("we will make a party at home ");  
            break;

   case "sunday":
               console.log("we will stay at home");  
               break;  

   default:
      console.log("None of them");
      break;
 }
// practice set on conditional expressions and operators

// Q1 use logical operators to find whether the age of a person lies between 10 and 20?

// let age1=prompt("what's your age")

// if (age1>=10 && age1<=20) {
//    console.log("your age is between 10 and 20 ");
//    alert("yes between");
// } else{
//    console.log("your age is not between 10 and 20");
//    alert("not between");
// }

// using simple method
// let age2=12;
// if (age2>10 && age2<20 ) {
//    console.log("you are between 10 and 20");
//    alert("congrat's you are between 10 and 20");
// } else {
//    console.log("no you are not");
//    alert("oops you are not");
// }

 // Q2 demonstrate the use of switch case statements in javascript?
 
//  let age4=prompt("hey whats your age is ? ")
//  switch (age4) {
//    case "12":
//       console.log("your age is 12");
//       break;

//    case "13":
//          console.log("your age is 13");
//          break;
   
//    case "14":
//             console.log("your age is 14");
//             break;
             
//    case "15":
//                console.log("your age is 15");
//                break;
          
//    default:
//       console.log("your age is not special");
//       // alert("nope");
//       break;
//  }

// Q3 writ a javascript proggramme to find whether a number is divisible by 2 and 3 ?
// let num=prompt("whats your number")
// if (num%2===0 && num%3===0) {
//    console.log("your number is divisible by 2 and 3");
// } else {
//    console.log("your number is not divisible by 2 and 3 ");
// }

// Q3 writ a javascript proggramme to find whether a number is divisible by 2 and 3 ?

let number=prompt("hello whats your number")
if (number % 2===0 ||  number % 3===0) {
   console.log("your number is divisible by either 2 or 3");
} else {
   console.log("your number is not divisible by either 2 or 3 ");
}

// Q5 print "you can drive " or "you cant drive " based on age being greater than 10 using ternary operator?































