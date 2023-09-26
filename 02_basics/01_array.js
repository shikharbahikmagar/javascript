// arrray

const myArray = [1, 2, 3, 4, 5];
const myArr = new Array("a", "b", "c", 4);

// myArray.push(6)
// myArray.pop() //remove from last
//myArray.unshift(10); //add in first index and shift // not good
//myArray.shift();
console.log(myArr.includes(4));
console.log(myArr.indexOf(4));

const newArray = myArr.join() //converts to string
//console.log(myArray);

//slice, splice

console.log("A", myArray); //A[1, 2, 3, 4, 5]
const mya1 = myArray.slice(1, 3);
console.log(mya1); //[ 2, 3 ]

console.log("B", myArray); //B [ 1, 2, 3, 4, 5 ]
const mya2 = myArray.splice(1, 3); 
console.log(mya2); //[ 2, 3, 4 ]
console.log(myArray); //[ 1, 5 ]
