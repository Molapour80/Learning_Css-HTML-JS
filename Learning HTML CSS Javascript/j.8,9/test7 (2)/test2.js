function f1(){
    document.getElementById("green").style.backgroundColor="white";
    document.getElementById("red").style.backgroundColor="red";
}
function f2(){
    document.getElementById("green").style.backgroundColor="green";
    document.getElementById("red").style.backgroundColor="white";
}

setInterval(() => {
    f1();
}, 1000);
setInterval(() => {
    f2();
}, 2000);
