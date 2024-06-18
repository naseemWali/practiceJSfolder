// for loop
for (let index = 0; index <=12; index++) {
    console.log(index);   
}

// while loop
let a=12;
while (a<=15) {
    console.log(a);
    a++;
}

// do while loop
let b=15;
do {
    console.log(b);
    b++;
} while (b>=20);

// example of for + do while loop 
// for printing even numbers
for (let c = 1; c <=10; c++) {
    if (c % 2 ===0) {
        console.log("even nums are",c);
    }      
}
// for printing odd numbers
for (let g=1; g<=16; g++ ) {
  if (g % 2 !==0) {
    console.log("odd nums are",g);
  }
}

// another example 
// let password;
// do {
//     password = prompt ('Please insert your passcode')
// } while (password !== "naseemwalikhan776@gmail.com");

// let password;
// do {
//     password = prompt('Please insert your passcode');
//     // Using strict comparison to check the value and type
// } while (password !== "naseemwalikhan776@gmail.com");

// for of loop is used to iterate a character in string or array or we can also calculate the length .it is used for strings and arrays.
let str="naseemwalikhan";
let length=0;
for (const i of str) {
    console.log("our i is",i);
    length++;
}
console.log("our length is=",length);

// for in loop is used for objects.
let student={
    name:"naseem bano",
    age:22,
    height:4.5,
    ispass:true,
};
for (const i in student) {
    console.log("our object is",i, " values of key are",student[i]);
}




























































































