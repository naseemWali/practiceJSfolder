message = "global people";

function hello() {
  let message = "good morning";

  // {
  //  let   message="hello country";
  //     console.log(message);
  // }
  console.log("our message is" + message);

  let c = function hello1() {
    console.log("i am c " + message);
  };
  return c;
}

c = hello();
c();

// second example:

// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   name = "johnsin";
//   return displayName;
// }

// b = init();
// b();

// THIRD EXAMPLE
let g=133;

function returnFunc() {
    
const x = () => {
//   let g = 1;
  console.log("x  is ",g);
  const y = () => {
    // let g = 2;
    console.log("y  is ", g);
    const z = () => {
    //   let g = 3;
      console.log("z  is " ,g);
    }
    // g=11133
    z()
    
  }
//   g=125
  y();
}


return x

}

 let d=returnFunc()
 d();








