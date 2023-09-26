const abc = ["a", "b", "c"];
const kakha = ["ka", "kha", "ga"]

//abc.push(kakha); //[ 'a', 'b', 'c', [ 'ka', 'kha', 'ga' ] ] not good idea to merge to array
//console.log(abc[3][1]); //kha

//const concatArray = abc.concat(kakha);
//console.log(concatArray); //[ 'a', 'b', 'c', 'ka', 'kha', 'ga' ]
//const allData = [...abc, ...kakha]; 
//console.log(allData); //[ 'a', 'b', 'c', 'ka', 'kha', 'ga' ]

const nestArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [5, 11]]];
const spreadArray = nestArray.flat(Infinity) //we can give value instead of infintity
//console.log(spreadArray);

console.log(Array.isArray("shikhar")); //false
console.log(Array.from("shikhar"));
//[
// 's', 'h', 'i',
//     'k', 'h', 'a',
//     'r'
// ]

let val1 = 100
let val2 = 200
let val3 = 300

console.log(Array.of(val1, val2, val3)); //[ 100, 200, 300 ]