var tr=1;
chec=()=>
{
     var a=parseInt(document.getElementById("n1").value);
     if(a==57)
     {
        document.getElementById("result").textContent=("Congratulations");
     }
     else if(a>57)
     {
        document.getElementById("result").textContent=("your try is"+tr+"try less than number");
     }
     else
     {
        document.getElementById("result").textContent=("your try is"+tr+"try greater than number");
     }
     tr++;
}