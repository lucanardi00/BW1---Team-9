const rateusUrl = function () {
  window.location.href = "feedback.html";
};

window.onload = function () {
  punteggio = localStorage.getItem("punteggio_risposte");
  console.log(punteggio);

  //creazione dinamica risposte corrette
  const conteiner_corretto = document.getElementById("correct");
  const cont_risposte = document.createElement("p");
  cont_risposte.innerText = punteggio + "/10 QUESTION";
  conteiner_corretto.appendChild(cont_risposte);
};
