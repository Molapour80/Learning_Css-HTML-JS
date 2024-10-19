let number=[];
for(i=0;i<5;i++){
    number[i]=prompt("ENTER YOUR NUMBER:")
}
let sort;
for(i=0;i<number.length;i++){
    for(j=i+1;j<number.length;j++){
        if(parseInt(number[j])<parseInt(number[i])){
            sort=number[i];
            number[i]=number[j];
            number[j]=sort;
        }
    }
}
console.log(number);