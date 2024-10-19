function f1() {
  document.getElementById("r").style.backgroundColor = "red";
  document.getElementById("y").style.backgroundColor = "white";
  document.getElementById("g").style.backgroundColor = "white";
}
function f2() {
  document.getElementById("r").style.backgroundColor = "white";
  document.getElementById("y").style.backgroundColor = "yellow";
  document.getElementById("g").style.backgroundColor = "white";
}
function f3() {
  document.getElementById("r").style.backgroundColor = "white";
  document.getElementById("y").style.backgroundColor = "white";
  document.getElementById("g").style.backgroundColor = "green";
}
function f4() {
  document.getElementById("r").style.backgroundColor = "red";
  document.getElementById("y").style.backgroundColor = "white";
  document.getElementById("g").style.backgroundColor = "white";
}

setInterval(() => {
  f1();
}, 2000);
setInterval(() => {
  f2();
}, 3000);
setInterval(() => {
  f3();
}, 2000);
setInterval(() => {
  f4();
}, 3000);
