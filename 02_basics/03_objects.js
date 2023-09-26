//singleton

//object literals
//Object.create //through constructor called singleton
const mySym = Symbol("key1");

 const jsUser = {
    name: "Shikhar", //we can also give key unlike array
    "full name": "Shikhar Bahik",
    [mySym]: "mykey", 
    age: 22,
    address: "pokhara",
    email: "shikhar@gmail.com",
    ifLoggedIn: false,
    lastLoginDays: ["mon", "tues", "sun"] //we can also set array in object

 }

 //console.log(jsUser.name); //we cannot acces values like full name
//console.log(jsUser["full name"]);
//console.log(jsUser[mySym]);

//Object.freeze(jsUser) //freezing object we cannot modify datas
//jsUser.email = "sbm@gmail.com" //changine the value not possible due to freeze
//console.log(jsUser.email); //shikhar@gmail.com
//console.log(jsUser);
jsUser.greeting = function()
    {
        console.log(`Hello , ${this["full name"]}`);   
    }

console.log(jsUser.greeting());