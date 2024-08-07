// Regular Expressions in javascript
const repex=/very/g
const text="naseem is very very nice awesome nice very girl"
const finalresult=text.replace(repex,"good")
console.log(finalresult);

// character classes in regular expressions
// example of character set .it match character that is in the set
let repel = /[aeiou]/g;
let context = "naseem is bad girl really yeah";
console.log(context.replace(repel, "hamber"));

// example of negated set. it match the character that is not in the set.
// this is the best method
let arr=/[^aeiou\s]/g
let example="hello tutos and all"
let result=example.replace(arr,"X")
console.log(result);

// range : Matches a character having a character code between the two specified characters inclusive.
let newexample=/[g-i]/g
let example1="harry pain house glass"
let ouresult=example1.replace(newexample,"T")
console.log(ouresult);

// dot :
let dot=/../; // for global /./g
let num="1234";
console.log(num.match(dot));

// word
let wordexample=/\w/g;
let word="Hello, World_123! k2 z0";
console.log(word);

// another example








