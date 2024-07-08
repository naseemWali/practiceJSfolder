// sync in js
// synchronus verses Asynchronus

// synchronus
// synchronus means the code runs in a particular sequence of instructions given in the programe .
// Each instructions waits for the previous instructions to complete its execution.


// function hello() {
//     console.log("hello");
// }

// setTimeout(hello,4000)

// above one and this are two methods of time out.
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("three");
// console.log("four");

// Asynchronus

// due to synchronus programming ,sometimes important instructions get blocked due to some previous instructions,
// which causes a delay in the UI.Asynchronus code execution allows to execute next instructions immediately and desnot block the flow.

// callbacks
// callback is a function passed as an argument to another function.
function sum (a,b){
    console.log(a+b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a,b);
}
calculator(10,10, sum);

//  second method

function add (c,d) {
    console.log(c+d);
}

function calculate (c,d,sumCallback){
     sumCallback(c,d);
}

calculate(12,11,(c,d)=> {
    console.log(c+d);
})


// CALLBACK HELL
// callback hell: nested callback stacked below one another forming a pyrimid structure.
// (pyramid of doom)
// this style of programming becomes difficult to understand and manage.


// function getdata(dataId,getNextData) {
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if (getNextData) {  // check inside settimeoout and is called in
//             getNextData()
//         }
//     },1000);

// }

// getdata(1,()=>{
//     console.log("data 2 is pending");
//     getdata(2,()=>{
//         console.log("data 3 is pending");
//         getdata(3,()=>{
//             console.log("data 4 is pending");
//             getdata(4,()=>{
//                 getdata("and so on")
//             })
//         })
//     })
// })


// promises 
// promises is for "eventual"completion of task.it is an object in js.it is a solution to callback hell.
// resolve and reject are callbacks provided by js.

// let promise = new Promise((resolve, reject) => {
//     console.log("it is our promise");
//     reject("ordered is delayed");
// });

// A javascript promise object can be
//. pending:the result is undefined
//. Resolved:the result is a value(fullfilled)      resolve(result)
//.Rejected:the result is an error object           reject(error)

//  promise use in general programming
// function getData(dataId,getNextData) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId);
//             // resolve("success");
//             reject("sorry error")
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 6000);
//     })  ;
// }


// getData(1, () => {
//     console.log("Next data function called");
// }).then(() => {
//     console.log("Promise resolved");
// }).catch((error) => {
//     console.log("Promise rejected", error);
// });



// in programming our work is to how to use promises when we get it not displaying errors or fulfilled through resolve or reject.
// .then() and .catch()
// promise.then((res)=>{...}) when promise becomes fullfilled
// promise.catch((err)=>{...}) when promise becomes delayed

// const getpromise=() =>{
//     return new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//     // resolve("success");
//     reject("error")

//     });
// };

// let promiser=getpromise();
// promiser.then((res)=>{
//     console.log("happily fullfilled",res);
// })

// promiser.catch((err)=>{
//     console.log("sorry",err);
// })

// promise chains

// function asyncFunc1() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("some data one");
//             resolve("mission is done");
//         }, 9000);
//     });
// }


// function asyncFunc2() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("some data two");
//             resolve("mission is done");
//         }, 9000);
//     });
// }

// console.log("fetching data one");
// let p1=asyncFunc1();
// p1.then((res)=>{
// console.log("fetching data two");
// let p2=asyncFunc2();
// p2.then((res)=>{});
// });

// // Async-Await
// Async function always return a promise.
// async function myFunc(){...}


// await pauses the execution of its surrounding async function until the promise is settled.
// await means to wait for something. Await is used in only asynchronus functions.

// Example of async function

async function hello() {
    console.log("heelllooo");
}

// Example of await in async function
  function api(dataId) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve(200);
        }, 2000);
    });
}
  async function getDataAll (){
    console.log("pending data 1...");
    await api(1); // 1st
    console.log("pending data 2...");
    await api(2); // 2nd
    console.log("pending data 3...");
    await api (3) // 3rd
}
// making above function to iife then we will remove the name (getDataAll) and after making iife we cant call/recreate function again.    

// IIFE:Immediately call/invoked function expression  (iffes) is a function that is called immediately as soon as it is defined.
// iife syntax:(func) ();

// promises chapter  once again

// let promise =new Promise((resolve, reject) => {
//     console.log("hello promises");
// })

// function getdata (dataId,getNextData) {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("data" ,dataId);
//         resolve("success")
//         if (getNextData) {
//             getNextData();
//         }
//     }, 5000);
// });
// }
 
// let result = getdata(123);

// promise basics

// const getPromise=()=>{
// return new Promise((resolve, reject) => {
//     console.log("this is a simple promise function");
//     resolve("success");
//     reject("oops error");
// })

// }
// let newresult=getPromise();

// newresult.then(()=>{
//     console.log("promise fullfilled");
// });

// newresult.catch(()=>{
//     console.log("error occured");
// });

// promise chaining

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data one.");
//             resolve("successfully")
//         }, 5000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data two.");
//             resolve("successfully")
//         }, 5000);
//     });
// }



// console.log("fetching data one.....");
// let x1=asyncFunc1();
// x1.then((res)=>{
//     console.log(res);
//     console.log("fethching data two");
//     let x2=asyncFunc2();
//     x2.then(()=>{
//         console.log("successfully");
//     })
// });

// Doing chaining on callback using promises


// let promise =new Promise((resolve, reject) => {
//     console.log("hello promises");
// })


function getdata (dataId) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("data" ,dataId);
        resolve("successfully")
        // if (getNextData) {
        //     getNextData();
        // }
    }, 5000);
});
}
 

// let result=getdata(123);
// // applying promise chaining on callbacks
// console.log("we are fethching data one");
// result.then(()=>{
//     console.log("completed");
// })

 // seconnd method
//  console.log("we are fethching data one");
//  getdata(1).then(()=>{
//     console.log("completed  one");
//     getdata(2).then(()=>{
//         console.log("completed two");
//         getdata(3).then(()=>{
//             console.log("completed three");
//         })
//     })
//  })
 
  // thrid method which is called actual promise chaining
//   getdata(1).then((res)=>{
//     console.log("completed one",res);
//     return getdata(2);
//   }).then((res)=>{
//     console.log("completed two",res);
//     return getdata(3);
//   }).then((res)=>{
//     console.log("completed three",res);
//   })

  // Async Await
   async function hello(){
   console.log("123");
   };

   hello();
   // second example
   async function api(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("our data",dataId);
            resolve("completion")
        }, 4000);
    })
   }
   // making async-awit function (iife) for immediately invoke
  (async function ourData() {
    await api(1);
    await api(2);
    await api(3);
   })();
  
   
  
  


































  
   
  


   
   
   
    


   
 


   










































































































































































   

   

    
    


   













   















  














   
   
   
    
    
    
   
    
    
  
   


































































































































































 




















// p1.catch((err)=>{
//     console.log("mission failed",err);
// })









































