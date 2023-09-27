//variable scopes

function one()
{
    let username = "shikhar"
    let address = "pokhara"

    function two()
    {
        const email = "sbm@gmail.com"
        console.log(username);
        console.log(address);

        console.log(email);
    }

    // two()

}

// one();
//normal function
//console.log(addOne(5));

function addOne(num)
{
    return num + 1;
}

const result = addOne(5);


//also called expression //variable can take any kind of values in js

// const sum = addTwo(5); //can not access hoisting

const addTwo = function(num)
{
    return num +2;
}

const sum = addTwo(5); //we can access function