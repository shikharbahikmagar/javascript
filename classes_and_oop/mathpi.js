// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

//console.log(descriptor);

const obj = {
    name: "myObject",
    type: "object",
    isAvailable: true,

    method: function()
    {
        console.log("this is function");
    } 

}

Object.defineProperty(obj, 'name', {
   
    enumerable:false
})


for(let [key, value] of Object.entries(obj))
{
    if(typeof value !== 'function')
    {
        console.log(`${key}: ${value}`);
    }
    // console.log(`${key}: ${value}`);

}




// console.log(Object.getOwnPropertyDescriptor(obj, "name"));