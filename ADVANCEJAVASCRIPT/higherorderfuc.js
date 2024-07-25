var animals=[
    {name:"fluffykins", species:"rabbit"},
    {name:"caro", species:"dog"},
    {name:"hamilton", species:"dog"},
    {name:"haroid", species:"fish"},
    {name:"cat", species:"cat"},
    {name:"cat", species:"fish"}
    
]

var cats=[]

for (let index = 0; index < animals.length; index++) {
    if (animals[index].name==='cat') {
      cats.push(animals[index]) 
    }
}
console.log(cats);

// Doing this by filter method
let dogspecies=animals.filter(function (animals) {
  return animals.species==="dog";
})
console.log(dogspecies);

// third method
var fish=function (animals) {
  return animals.species==="fish";
}

var newspecies=animals.filter(fish)
console.log(newspecies);

// map method

let newarr=[
 {names:"naseem", age:"1th",  class:"1st"},
 {names:"ruhi",   age:"2nd",  class:"1st"},
 {names:"sanam",  age:"3rd",  class:"1st"},
 {names:"faryal", age:"4th",  class:"1st"},
 {names:"saeeda", age:"5th",  class:"1st"},
 {names:"inara",  age:"6th",  class:"1st"},
]

 let namesof=newarr.map(function (newarr) {
  return newarr.names;
})
console.log(namesof);


// using another example

var numarr=[1,4,9,16];

// var b=numarr.map(function (x) {
//   return x*10;
// })

// console.log("our new array is",b);


// doing this by arrow function

// var test= x => x*10;
// var b = numarr.map(test)
// console.log(b);


var arr= x => { // arrow block statement
return x*10
};

var c=numarr.map(arr)
console.log(c);

// in javascript mao reduce and filter are called higher order array methods.


























































