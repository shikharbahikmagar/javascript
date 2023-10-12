const randomColor = function()
{
    let hex = '0123456789ABCDEF';
    let color = '#';
    for(i=0; i < 6; i++)
    {
        color += hex[Math.floor(Math.random() * 16 + 0)];
    }
    return color;
}


const body = document.querySelector("body");

let interval;
function startChangingColor()
{
    interval = setInterval(changeColor, 500);
    function changeColor()
    {
        body.style.backgroundColor = randomColor();
    }
}
function stopChangingColor() {
    clearInterval(interval);
}

document.querySelector("#start").addEventListener('click', startChangingColor);


document.getElementById("stop").addEventListener('click', stopChangingColor);

