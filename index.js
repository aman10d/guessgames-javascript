const a=Math.floor(Math.random()*10+1);
let count=0;
document.getElementById("b1").onclick=function(){
    let b=document.getElementById("t1").value;
    count+=1;
    if(b==a){
        alert(`${a}is the number. it took you ${count}attempts`);
    }
    else if(b<a){
        alert("too small");
    }
    else{
        alert("too large");
    }
}