function f1(word) {
  let r1;
  if (word == "note book") {
    r1 = "daftar";
  } else if (word == "book") {
    r1 = "ketab";
  } else if (word == "dog") {
    r1 = "sag";
  } else {
    r1 = "null";
  }
  document.getElementById("p1").innerText = r1;
}
