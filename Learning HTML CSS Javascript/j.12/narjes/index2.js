let randnumber=Math.floor(Math.random()*100);
function f1(number){
    let h=document.getElementById("p1");
    if(number==randnumber){
        
        h.innerText="شما برنده شدید";  
        h.style.color="green";


    }
    else if(number<randnumber){
        if(Math.abs(randnumber-number)<10){
            h.innerText="نزدیک شدی بزرگ تر انتخاب کن"   ;
           }
           else{
        h.innerText="عدد بزرگتر انتخاب کنید";

           }
    }
    else if(number>randnumber){
        if(Math.abs(randnumber-number)<10){
            h.innerText= "نزدیک شدی کوچک تر انتخاب  کن"  ;
           }
           else{
            h.innerText="عدد کوچک تر انتخاب کن";

           }
        
       
    }
}