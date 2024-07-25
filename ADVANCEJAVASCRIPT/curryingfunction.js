// currying function in javascript
function addition(a,b,c) {
    return a+b+c;
}

let res=addition(2,3,4)
console.log(res); // this is just normal method

function addition(a) {
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
    
}

let resp=addition(1)(2)(3) // this is currying method to store values
// let data=resp(4);
// let data1=data(67);
console.log(resp);

// second currying example
userObj={
   name:"ajay",
   age:23,
}

function userinfo (obj){
    return function (userinfo){
    return obj[userinfo];
    }
}

let rec=userinfo(userObj)
console.log(rec('name'));
console.log(rec('age'));

// FUNCTION COMPOSITION

function add(a,b) {
    return a+b;
}

function square(val) {
   return val*val;
}

function subtract(c,d) {
    return c-d;
}

function ComposeTwoFunctions(fn1,fn2) {
   return function (a,b) {
   return fn2(fn1(a,b));
   };
}

const task=ComposeTwoFunctions(add,square)
console.log(task(10,4));


// const newresult=add(2,3)
// console.log("our square is",newresult*newresult);


