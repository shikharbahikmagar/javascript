let score = "33" //string
let emp_id = "001ABC"
let val = null;//conversion = 0
let val1 = undefined;//conversion = nan

let scoreInt = Number(score);
console.log(typeof scoreInt);
console.log(scoreInt); //33

let number_emp_id = Number(emp_id);
console.log(typeof number_emp_id);

console.log(number_emp_id); //NAN

console.log(val);

//true = 1, false = 0
// "" => false "text" => true
//conversion = String(), Number(), Boolean() etc