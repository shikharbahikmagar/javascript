function sayMyName()
{
    console.log("Shikhar");
}

//sayMyName()

function sum(a, b)
{
    return a+b;
}

const s = sum(40, 40);
//console.log(s);
//
function greeting(username = "Sammy")// default value for username 
{
    if(!username)
    {
        console.log("please enter a username");
        return false;
    }
    return `Hello ${username}, Welcome Back`;
}

const greet = greeting("Shikhar");
//console.log(greet);

function calculateCartPrice(...num1) // ...(rest operator)
{
    return num1
}

//console.log(calculateCartPrice(200, 300, 400)); //[ 200, 300, 400 ]

const user = {
    name: "Shikhar", 
    price: 289
}

function handleObj(anyObj)
{
    console.log(`User name is ${anyObj.name} and Price is ${anyObj.price}`);
}

handleObj(user);