function f1(a,b){
    let k=1;
    for(i=0;i<b;i++){
        k*=a;

    }
    document.getElementById("p1").innerText=k;
}
function f(c){
    let k=1;
    for(i=1;i<=c;i++){
        k*=c;
    }
    document.getElementById("p2").innerText=k;
}