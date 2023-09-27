//Execution context in javascript

//1: Global EC
//2: Function EC

// Phases
/*
1. Memory Creation Phase (creation phase)
-> Memoroy Allocation phase
2. Execution Phase

let val1 = 10
let val2 = 20

function addNum(num1, num2)
{
    let total = num1+num2
    return total;

}

const sum = addNum(val1, val2);
const sum2 = addNum(5, 12);

take above example

execution flow
1. Global execution
-> locate inside "this"

2. Memory creation phase
-> all variables are collected and stored
    val1 -> undefined
    val2 -> undefined
    addNum -> definition
    sum -> undefined
    sum2 -> undefined

3. Execution phase
    val1 = 10
    val2 = 20
    addNum -> new variable environment + thread
    again do memory creation and execution for this function and return value to global


|                   
|
|
|
|
|


















*/