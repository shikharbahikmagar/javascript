function setUsername(username)
{
    this.username = username

}

function createUser(username, email, pass)
{
    setUsername.call(this, username)
    this.email = email
    this.pass = pass
}

const newUser = new createUser("shikhar", "s@gmail.com", "123");
console.log(newUser);