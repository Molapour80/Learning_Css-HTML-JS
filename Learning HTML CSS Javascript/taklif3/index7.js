let randomgame=Math.floor(Math.random()*100);
function f1(number){
   let re=document.getElementById('z1');
    if(randomgame==number){
        re.innerText="WIN";
    }
    else if(randomgame>number){
        if(Math.abs(randomgame-number)<10){
            re.innerText=" bigger than near";

        }
        else{

            re.innerText="عدد بزرگتر انتخاب کنید";
        }
       
    }
    else if(randomgame<number){
        if(Math.abc(randomgame-number)<10){
            re.innerText=" lower than near";
        }
        else{
            re.innerText=" lower number";
        }

       
    }

}
