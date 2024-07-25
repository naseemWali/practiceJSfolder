// call ,apply and bind in javascript.

// problem statement
// first we will amke an object
let uerdetails={
    name:"naseemwalikhan",
    age:23,
    designation:"frontenddeveloper",
    printdetails:function () {    
    console.log(this); // this is used for self reference of properties and methods inside object
    }
}

// uerdetails.age
uerdetails.printdetails();

let uerdetails2={
    name:"naseemwali",
    age:24,
    designation:"softwareengineer",
}
// function borrowing
uerdetails.printdetails.call(uerdetails2); // here  call is used for accessing methods and properties from second object also.

// now making function outside object and trying to access properties and methods of object through function.
let ourobject={
    name:"Aleena karim",
    age:29,
    designation:"stack developer",
}

let accessfunction=function (city,country,) {
    console.log(this.name+ " " +city+" "+country);
}
accessfunction.call(ourobject,"karachi","pakistan");


let ourobject2={
    name:"saeeda karim",
    age:29,
    designation:"stack developer",
}

accessfunction.apply(ourobject2,["reading","cooking","dancing","playing"]); // in apply we pass more than two arguments only in array not one by one.

// bind in javascript we can make copy of function and invoke it later.
let newobject={
    name:"aliya meer",
    class:12,
    age:23,
}

let functionobj=function () {
    console.log(this);
}

functionobj.call(newobject);

let ournewoneobject=functionobj.bind(newobject);
ournewoneobject();

// explicit and implicit in javascript
var somenumber=("5.66");
console.log(somenumber);

var someboo=(true);
console.log(someboo);

















