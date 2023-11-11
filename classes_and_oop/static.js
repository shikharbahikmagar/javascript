//static methods can not be used by objects of class

class User
{
    constructor(username, email)
    {
        this.username = username
        this.email = email
    }

    static createId()
    {
        console.log("id is: 12345");
    }
}

const user = new User("shikhar", "s@gmail.com");
user.createId();// can not access