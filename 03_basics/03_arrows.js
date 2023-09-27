const user ={
    username: "shikhar",
    price: 10001,
    sendMsg: function()
    {
        //console.log(`${this.username}, Welcome to Website `);
        //console.log(this);
    }
}
user.sendMsg();
user.username = "Sam";
user.sendMsg();

// /console.log(this);
//in browser this means windows object but in cmd it is empty object
//can not use this key inside function only

//arrow function
//explicit return
const Add = (num1, num2) => {
    
        return num1 + num2;

}

//implicit return
const Sum = (num1, num2) => (num1 + num2);

// console.log(Add(20,1));

// console.log(Sum(22, 1));

//returning object
const retObj = () => ({username: "shikhar"});

console.log(retObj());