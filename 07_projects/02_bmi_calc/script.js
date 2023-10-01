document.addEventListener('submit', function(e)
{
    e.preventDefault();
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;

    const result = document.querySelector('#result');
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    //alert(bmi);
    const res = document.createTextNode(`Your Bmi is ${ bmi }.`);
    result.appendChild(res);
    //result.innerHTML = `Your Bmi is ${bmi}.`;
    
})