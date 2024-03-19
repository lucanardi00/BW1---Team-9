let stelle = [];
const stelleJs = document.getElementById("stelleJs");

//creazione 10 stelline
for (let i = 0; i < 10; i++) {
  stelle[i] = document.createElement("img");
  stelle[i].src = "assets/img/star.svg";
  stelle[i].style.filter = "grayscale(1)";
  stelle[i].style.cursor = "pointer";
  stelle[i].className = "stellina";

  stelleJs.appendChild(stelle[i]);
}

//funzione per far illuminare le stelle
const illuminareStelle = (index) => {
  for (let i = 0; i <= index; i++) {
    stelle[i].style.filter = "grayscale(0)";
  }
  //controlla per riportare le stelle normali
  for (let j = index + 1; j < 10; j++) {
    stelle[j].style.filter = "grayscale(1)";
  }
};

//controlla il click di ogni stella
for (let i = 0; i < stelle.length; i++) {
  stelle[i].addEventListener("click", () => {
    illuminareStelle(i);
    console.log(i);
  });
}

for (let i = 0; i < stelle.length; i++) {}
