class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password()
    {
        return this._password.toUpperCase();
    }

    set password(value)
    {
        this._password = value
    }
}

const obj = new User("s@gmail.com", "abc");

console.log(obj.password);

//same get, set rules apply for function, object and arrays