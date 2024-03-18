let stelle = [];
const stelleJs = document.getElementById("stelleJs");
for (let i = 0; i < 10; i++) {
  stelle[i] = document.createElement("img");
  stelle[i].src = "assets/img/star.svg";
  stelle[i].style.filter = "grayscale(1)";
  stelle[i].style.cursor = "pointer";
  stelle[i].className = "stellina";

  stelleJs.appendChild(stelle[i]);
}

let stars = 
    document.getElementsByClassName("stellina");
function gfg(n) {
    
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }