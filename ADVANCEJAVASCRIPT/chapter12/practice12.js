// Q1 write a javacsript programme to print the following after 2 second delay?
// const a= async (text) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text)
//         }, 2000);
//     })
// }

// const printmessage=async () => {
//     const message1=await a("hello")
//     console.log(message1);
    
//     const message2=await a("world")
//     console.log(message2);
    
// }
// printmessage()

//Q2 write a javacsript prgramme to find average of numbers in an array using spread syntax?
let arr=[1,2,3]
function sum(a,b,c) {
    return a+b+c
}
let sumresult=sum(...arr)

let average=sumresult/arr.length
console.log(average);

// Q3  write a javascript function which resolves a promise after n seconds.the function takes n as the parameter.use an iife to execute the function with different value of n?
 
const a= async (n) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`resolve after ${n} seconds(s)`)

        }, n * 1000);
    })
}

(async () => {
    
    const message1=await a( 4)
    console.log(message1);
    
    const message2=await a(8)
    console.log(message2);
    
})()

// Q4 write a simple interest calculator using javacsript
function simpleinterest(p, r, t) {
   return (p * r * t) / 100;
}

console.log(simpleinterest(1000,5,1));

// how to play an audio on js
// Create a new Audio object and specify the audio file
// Create a new Audio object with the URL to an audio file
const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

// Function to play the audio
function playAudio() {
    audio.play().catch(error => {
        console.error('Playback failed:', error);
    });
}

// Function to pause the audio
function pauseAudio() {
    audio.pause();
}

// Function to stop the audio (pause and reset to start)
function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Reset to start
}

// Arrow functions revisited

const object={
    name:"naseem wali khan",
    class:12,
    age:24,
    show:function () {

        let that=this // this is first solution to print name and age actually what will  do here that this refers to object that will store in that .
        // second solution is to make set timeout function an arrow function because arrow functions prevoke lexical this.
        setTimeout(() => {
            console.log(`the name is ${this.name},the age is ${this.age}`);
        },3000)      
    }
}
object.show();



