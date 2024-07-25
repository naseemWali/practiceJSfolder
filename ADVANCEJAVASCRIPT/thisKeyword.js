// let counter={
//     count:0,
//     increment:function () {
//         counter.count++;
//     }
// }
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(counter);

// Making this factory function
// let counter=createcounter();
// let counter1=createcounter(); // we have already create a function of createcounter inside counter object but now we have another copy/duplicate of counter object and we are trying to call increment function through counter1 object for this we will use this keyword.
// function createcounter() {
//     return{
//         count:0,
//             increment:function () {
//                 this.count++;
//             }
//     }
// }
// counter1.increment();
// counter1.increment();
// counter1.increment();
// console.log(counter1);

// makng an increment function outside of object and trying to increment/increase  the count

// var count=0;
// function incrementCounter() {
//     this.count++;
//     console.log(this);
// }

// incrementCounter();
// incrementCounter();
// console.log(count);

console.log(this);

// constructor function
function car(name) {
    this.hello=name;
    this.start=function () {
        console.log(this.hello  + ' started ');
    }
}

let swift = new car('swift');
swift.start();
console.log(swift.hello);

// binding in javascript.



























































