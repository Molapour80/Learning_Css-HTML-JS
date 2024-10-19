let you=[];
for (t = 0; t < 5; t++) {
  you[t] = prompt("enter your number:");
}
let bell;
if(parseInt(you[t])>=1000){
for (i = 0; i <you.length; i++) {
  for (j = i + 1; j <you.length; j++) {
    if (parseInt(you[i]) > parseInt(you[j])&&parseInt(you[i])>1000&& parseInt(you[j]))
     {
      bell = you[i];
      you[i] = you[j];
      you[j] = bell;
    }
  }
}
}


console.log(you);
