
// console.log(clock);
let clock = document.getElementById("clock");
// let val = clock.getAttribute('value');
// console.log(val);
setInterval(function ()
{
    
    const date = new Date();
    // clock.innerHTML = date.toLocaleTimeString();
    clock.setAttribute("value", date.toLocaleTimeString());
   
}, 1000);