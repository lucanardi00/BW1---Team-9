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

  const percentuale = document.createElement("h4");
  percentuale.innerText = punteggio * 10 + "%";
  conteiner_corretto.appendChild(percentuale);
  conteiner_corretto.appendChild(cont_risposte);

  //creazione dinamica per le risposte sbagliate
  const conteinter_sbagliate = document.getElementById("wrong");
  const wrong_answer = document.createElement("p");
  const risposteSbagliate = 10 - punteggio;
  wrong_answer.innerText = risposteSbagliate + "/10 QUESTION";

  const percentuale_sbagliate = document.createElement("h4");
  percentuale_sbagliate.innerText = (10 - punteggio) * 10 + "%";
  conteinter_sbagliate.appendChild(percentuale_sbagliate);
  conteinter_sbagliate.appendChild(wrong_answer);

  const grafico = document.getElementById("pie");

  grafico.style.background = `conic-gradient(deepskyblue ${
    punteggio * 10
  }% 0%, orangered 0% 0%)`;
  console.log(grafico);
  examPassed(punteggio);
};

const examPassed = function (punteggio) {
  const pie = document.getElementById("allPie");
  if (punteggio > 5) {
    const span1 = document.createElement("span");
    span1.innerText = "Congratulation!";

    const span2 = document.createElement("span");
    span2.innerText = "you Passed the exams";
    span1.style.paddingTop = "2.4em";
    span2.style.paddingTop = "5em";
    span2.style.fontSize = "25px";
    span2.style.color = "#00FFFF";
    pie.appendChild(span1);
    pie.appendChild(span2);
    const span3 = document.createElement("span");
    span3.innerText =
      "We'll send you the certificate in few minutes. Check your email (including promotions/spam folder)";
    span3.style.paddingTop = "10em";
    span3.style.fontSize = "20px";
    span3.style.color = "grey";
    pie.appendChild(span3);
  } else {
    const span1 = document.createElement("span");
    span1.innerText = "Ops!";

    const span2 = document.createElement("span");
    span2.innerText = " you didn't pass the exam";

    span1.style.paddingTop = "2em";
    span2.style.paddingTop = "5em";
    span2.style.fontSize = "25px";
    span2.style.color = "red  ";

    pie.appendChild(span1);
    pie.appendChild(span2);
  }
};
