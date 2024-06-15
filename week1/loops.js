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

let password;
do {
    password = prompt('Please insert your passcode');
    // Using strict comparison to check the value and type
} while (password !== "naseemwalikhan776@gmail.com");

// If the loop exits, it means the correct passcode was entered
alert('Passcode accepted');





























































































