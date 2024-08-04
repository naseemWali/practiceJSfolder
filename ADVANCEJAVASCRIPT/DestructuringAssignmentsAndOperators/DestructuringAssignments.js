// destructuring assignments and spread operators.
// destructuring assignment is used to unpack values from an array or property from an object into distinct variable.

let arr=[3,5,8,12,13,14]
//let [a,b]=arr this is also method to make a=3 and b=5
let [a, , , ...rest]=arr
a=arr[0]
b=arr[1]
console.log("a is",a, rest);

// second example
let i= {e,f, ...rest} ={e:1 ,f:2,a:23,b:24,c:25}
rest.i=12 // If you want to add some values to rest and then print it, you can do something like this:
console.log(e,f ,rest);

// spread operator(...)
//  changing an array to an object
let arr1=[1,2,5]
let object={...arr1}
console.log(object);


function sum(v1,v2,v3) {
    return v1 + v2 + v3
}
console.log( sum(...arr1)); // we have try to use function in array.

let obj2={
    name:"harry",
    company:"xyz",
    address:"xyz"
}
console.log({...obj2, name:"john",company:"ABC"}); // we have change only name from object and remaining are same as it is.
// writing ...obj2 will change the values that you want to change and writing ...obj2 at the end will not change it will remain the same.
