console.log("Its lit!"); 

var d = new Date();

function dislpayDate()
{
    var demo = document.getElementById('demo');
    if (demo.innerHTML ==='') {
        demo.innerHTML = d.toDateString();
    } else {
        demo.innerHTML ='';
    }
}

window.onload = function() {
    var btn = document.getElementById("myButton");
    btn.onclick = dislpayDate; 
}