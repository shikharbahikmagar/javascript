const name = "shikhar"
const salary = "50k"

console.log(`Hello ${name} your salay is ${salary}`);

const myName = new String('Shikhar');
console.log(myName[1]);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.substring(0, 4));
console.log(myName.slice(-7, 4));
console.log(myName.trim()); //removes spaces

const url = "https://shikhar/about%20me";
console.log(url.replace('%20', '-')); //give : https://shikhar/about-me

// split() split words 
// include() check words
