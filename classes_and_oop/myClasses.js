class User {
    constructor(username, email, pass)
    {
        this.username = username
        this.email = email
        this.pass = pass
    }

    encryptPass()
    {
        return `${this.pass}abc`;
    }
}

const newUser = new User("shikhar", "s@gmail.com", "123");
console.log(newUser.encryptPass());