var stop = "rood";
var maybe = "oranje";
var go = "groen";

window.onload = function(){
    document.getElementById("light-top").innerHTML = stop;
    document.getElementById("light-middle").innerHTML = maybe;
    document.getElementById("light-bottom").innerHTML = go;

    // document.getElementById("light-top").style.backgroundColor = "red";
    // document.getElementById("light-middle").style.backgroundColor = "orange";
    // document.getElementById("light-bottom").style.backgroundColor = "green";
}

function zetRoodLichtAan()
{
if (document.getElementById("light-top").style.backgroundColor == "grey")
    
    {
    document.getElementById("light-top").style.backgroundColor = "red";
    }

else {
    document.getElementById("light-top").style.backgroundColor = "grey";
     }

}
 


function zetOranjeLichtAan(){
    document.getElementById("light-middle").style.backgroundColor = "orange";
}

function zetGroenLichtAan(){
    document.getElementById("light-bottom").style.backgroundColor = "green";
}
