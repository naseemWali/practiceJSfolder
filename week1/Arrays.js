// sample of array
let marks = ["naseem", "neeha", true, null, 12, "salman", 4.5];
console.log(marks);
// accessing values through index .index in array starts from 0.
marks[2];
console.log(marks[2]);

// changing values of arrays through index.
marks[3] = 66;
console.log(marks);

// looping over an array using for loop over array
let heroes = [12, "ali", "saman", "neha", true, null, 13, 144];
let cities = ["newdelhi", "islamabad", "newyork", "tokyo", "kabul"];
for (let i = 1; i < 7; i++) {
  console.log(heroes[i]);
}

// using for in loop on array
for (const e of heroes) {
  console.log(e);
}

for (let vale of cities) {
  console.log(vale);
}
// lets practice some questions
// Q1 for a given array with marks of students -> [85,97,44,37,76,60].find the average marks of the entire class?
let mark = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (const value of mark) {
   sum+=value
}
let finalresult = sum/mark.length;
console.log(`Average marks of class students are = ${finalresult}`);

// Q2 for a given arraywith price of 5 items ->[250,645,300,900,50].all items have an offer of 10% off on them .change the array to store final price after applying offer?
// using for loop
let items=[250,645,300,900,50];
for (let i = 0; i<items.length; i++) {
    let offer=items[i]/10;
    items[i]-=offer;        
}
console.log(items);


// using for of loop
// let materials=[250,645,300,900,50];
// let i=0;
// for (const val of materials) {
//     console.log(val);
//     let newoffer=val/10;
//     materials[i]= materials[i]-newoffer;
//     console.log(materials[i]);
//     i++;
// }


// Arrays Methods
// push add items to the end of original or existing array
let fooditems=["potatoes","mangoes","littchi",]
fooditems.push("burger","tomatoo")
console.log(fooditems);
// pop delete items from the end of the orginal or existing array
people=["naseem","eshal","nayab","soha"]
// people.pop("soha")
console.log(people);  

let deleteditem=people.pop()
 console.log("deleted item is",deleteditem); 

// to string
//converting an array to string 
let studentnumbers=[43,45,44,67,98];
studentnumbers.toString()
console.log(studentnumbers);

// concatinate add or joins multiple arrays and return result meaning we will get new array not original or parent array.
let marvelheroes=["thor","iron man","spiderman",];
let indianheroes=["shaktiman","superman","krish"];
let holywoodheroes=["dj rathor","mrbean"]
let conn=marvelheroes.concat(indianheroes);
console.log(conn);

// unshift add item to start of the array
let girls=["sanam","rohi","rozi","erum","bushra"]
girls.unshift("surriya")
console.log(girls);

// shift delete from the start and return that element.
girls.shift()
console.log(girls);

// slice add items on the basis of the index.Ending index in slice wll be non-inclusive it means it will not be mentioned.
var colors=["pink","slate","teal","orangered","purple"]
console.log(colors.slice(1,3));


// splice change original array (add,remove,replace) it gives three parameters that is splice(startINGIndex,delELE..,newELE..)
let set=[1,2,3,"naseem","red",12,"orange"];
set.splice(3,2,101,102)
console.log(set);





































