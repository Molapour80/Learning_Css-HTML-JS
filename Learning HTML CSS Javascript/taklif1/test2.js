let flog=0;
function f1(){
    
    if(flog==0){
        document.getElementById("e1").src="lamp/lamp off.png";
        flog=1;
        document.getElementById("btn").style.backgroundColor ="green";
        document.getElementById("btn").style.color="white";
        document.getElementById("btn").innerText="ON";
        


    }
    else{
        document.getElementById("e1").src="lamp/lamp on.png";
        flog=0;
        document.getElementById("btn").style.backgroundColor ="red";
        document.getElementById("btn").style.color="white";
        document.getElementById("btn").innerText="OFF";
    }
   
}