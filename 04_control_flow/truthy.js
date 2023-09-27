const userEmail = "sbm@gmail.com"

if(userEmail)
{
    console.log("got user email");
}else
{
    console.log("don't have user email");
}


/*

falsy values
-> false, 0, -0, BigInt On, "", null, undefined, NaN, 

truthy values

-> " ", "false", "0", [], {}, function() {}

*/

const emptyArray = []

if(emptyArray.length() === 0)
{
    console.log("Array is empty");
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0)
{
    console.log("object is empty");

}


// Nullish Coalescing Operator (??): Null undefined

let val1;
// val1 = 4 ?? 10 //gives 4
// val2  = null ?? 20; gives 29 

// ternary operator 
//condition ? true : false