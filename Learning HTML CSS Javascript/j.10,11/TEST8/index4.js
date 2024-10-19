let arr = [];
for (i = 0; i < 5; i++) {
  arr.push(prompt("ENTER YOUR NUMBER:"));
}
let count_zoj = 0,
  count_fard = 0;
for (j = 0; j < arr.length; j++) {
  if (arr[j] % 2 == 0) {
    count_zoj = count_zoj + 1;
  } else {
    count_fard = count_fard + 1;
  }
}
console.log("zoj=" + count_zoj + "\n" + "fard=" + count_fard);
