function bai1() {
    let text="";
    for(let i=0;i<5;i++){
        text+="The number is "+i+"<br/>";
    }
    document.getElementById("demo").innerHTML=text;
}

function bai2(){
    let sum=parseInt(prompt("Enter your number:"));
    let total=0;
    for(let i=1;i<=num;i=i+1){
        total=total+1;
        alert(total);
    }
}
window.onload = bai2;

