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
var bar="foo";

if (true) {
    // let foo="baz";
    // console.log(foo);
    var bar="foobar";
    console.log(bar);
}

// console.log(foo);
console.log(bar);










































































































































