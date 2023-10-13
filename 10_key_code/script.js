window.addEventListener('keydown', function(e)
{
   this.document.querySelector("#insert").innerHTML=`
   <table border='1px'>
    <tr>
        <th>Key</th>
        <th>Key Code</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key === ' '? 'space': e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table >`
})