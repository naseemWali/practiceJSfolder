//  hoisting 

// sayhello();
// console.log(b);

// function sayhello() {
//     console.log("saying hello to every one");
// }

// var b=10;


// Now change the sayhello function to function expression
// sayhello()  // it will throw an error because now function expression is stored in var variable sayhello and variables before initialization throw error.
// console.log(b);

// var sayhello=function sayhello() {
//     console.log("saying hello second time");
// }
// var b=10;

// let var and const difference in scope.

// let foo="bar";
 let bar="foo";

if (true) {
    // let foo="baz";
    // console.log(foo);
    let bar="foobar";
    console.log(bar);
}

// console.log(foo);
console.log(bar);



function saying() {
    var b=13;
    if (true) {
     let b=12;
     console.log("our if value is",b);
    }
    console.log("our func value is",b);
}
saying();

// const
let f1;
const f2=2;
var a;

// const 

















































































































































