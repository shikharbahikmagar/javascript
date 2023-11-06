user= {
    username: "shikhar",
    address: "pokhara"
}
Object.prototype.checkName = function()
{
    //console.log(this.username);
}
user.checkName()

const str = "Helloworld   ";

String.prototype.checkRealLength = function()
{
    return this.trim().length
}

console.log(str.checkRealLength());