let stelle = []
const stelleJs = document.getElementById('stelleJs')
let lastClickedIndex = -1

//creazione 10 stelline
for (let i = 0; i < 10; i++) {
  stelle[i] = document.createElement('img')
  stelle[i].src = 'assets/img/star.svg'
  stelle[i].style.filter = 'grayscale(1)'
  stelle[i].style.cursor = 'pointer'
  stelle[i].className = 'stellina'

  stelle[i].addEventListener('mouseover', () => {
    if (lastClickedIndex === -1 || i >= lastClickedIndex) {
      illuminareStelle(i)
    }
  })

  stelleJs.appendChild(stelle[i])
}

//funzione per far illuminare le stelle
const illuminareStelle = (index) => {
  for (let i = 0; i <= index; i++) {
    stelle[i].style.filter = 'grayscale(0)'
  }
  //controlla per riportare le stelle normali
  for (let j = index + 1; j < 10; j++) {
    stelle[j].style.filter = 'grayscale(1)'
  }
}

//controlla il click di ogni stella
for (let i = 0; i < stelle.length; i++) {
  stelle[i].addEventListener('click', () => {
    illuminareStelle(i)
    lastClickedIndex = i
    console.log(i)
  })
}

for (let i = 0; i < stelle.length; i++) {}

const infoBtn = document.querySelector('button')

infoBtn.addEventListener('click', function () {
  window.location.href = 'https://www.epicode.com'
})
