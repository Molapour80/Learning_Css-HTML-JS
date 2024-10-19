function f1(w1){
    
    let p=document.getElementById('word');
    switch(w1){
        case"narjes":p.innerText=09170688541;break;
        case"fatemeh":p.innerText=09170688546;break;
        case"hosaen":p.innerText=09173600524;break;
        case"mohammad":p.innerText=09179595167;break;
        case"ali":p.innerText=09176595167;break;
        case"hasan":p.innerText=09179575167;break;
        case"nila":p.innerText=09179595748;break;

        default:p.innerText="وجود ندارد";
    }
    if(word=!وجودندارد){
        document.getElementById("word").style.color="green";
    }
    else{
        document.getElementById("word").style.color="red";
    }

}