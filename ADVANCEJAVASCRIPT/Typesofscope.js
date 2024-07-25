// the scope is by default global

// global scope
let name="naseemwalikhan";

function sayname() {
    var marks=10; // example of local/functional scope
    // console.log(marks);
    console.log("this is my name ",name)
}
sayname();

// console.log(marks);

// local scope/functional scope
var x=0;

function first() {
    var x=1;
    console.log(x);

    function childOfFirst() {
        var x=2;
        console.log(x);
        
    }
    childOfFirst()
}
first();

function second() {
    console.log(x);
}
second();


// BLOCK SCOPE
var x=13; // global scope 
{
let x=12;
console.log(x);

}
console.log(x);
// now the value will be changed from 12 to 13.

// second example
if (true) {   
    var foo="bar"; // var is acting like a global variable but when we need to execute or print any value inside a block scope  then let and const are good.
}
console.log(foo);

// lexical scope : basically  this isn't a scope it is a method but important to know and understand.

function Dada() {
    let name="muhammad rahim"
    console.log(name);

    function papa() {
    console.log(name);  

    function beta() {

    var likes="coding";
    // console.log(likes);
    }    
    console.log(likes); // example of lexical scope.
    beta();
    }

    papa();
}

Dada();















































