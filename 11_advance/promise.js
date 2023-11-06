const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "shikhar", email: "shikhar@gmail.com"});
        reject("rejected");
    }, 1000)
})

promiseOne.then(function(user){
    console.log(user.username);
})
.catch(function(error)
{
    console.log(error);
})