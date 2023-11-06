const user = {
    username: 'Shikhar',
    phone: 9864894584,
    isLoggedIn: true,

    getUserDetails: function()
    {
        console.log("Good Afternoon Shikhar Bahik magar");
        console.log(this.username);
    }

    

}

//user.getUserDetails();

function User(username, logginCount, isLoggedIn)
{
    this.username = username,
    this.logginCount = logginCount,
    this.isLoggedIn = isLoggedIn
    return this;
}

const data1 = new User("shikhar", 13, true);
const data2 = new User("shikhar magar", 14, false);

console.log(data2);
