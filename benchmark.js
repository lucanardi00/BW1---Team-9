const results = [
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `What does the Prt Sc button do?`,
    correct_answer: `Captures what's on the screen and copies it to your clipboard`,
    incorrect_answers: [
      `Nothing`,
      `Saves a .png file of what's on the screen in your screenshots folder in photos`,
      `Closes all windows`,
    ],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `Which programming language shares its name with an island in Indonesia?`,
    correct_answer: `Java`,
    incorrect_answers: [`Python`, `C`, `Jakarta`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `What amount of bits commonly equals one byte?`,
    correct_answer: `8`,
    incorrect_answers: [`1`, `2`, `64`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?`,
    correct_answer: `Final`,
    incorrect_answers: [`Static`, `Private`, `Public`],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The logo for Snapchat is a Bell.`,
    correct_answer: `False`,
    incorrect_answers: [`True`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `On Twitter, what was the original character limit for a Tweet?`,
    correct_answer: `140`,
    incorrect_answers: [`120`, `160`, `100`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `HTML is what type of language?`,
    correct_answer: `Markup Language`,
    incorrect_answers: [
      `Macro Language`,
      `Programming Language`,
      `Scripting Language`,
    ],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The numbering system with a radix of 16 is more commonly referred to as `,
    correct_answer: `Hexidecimal`,
    incorrect_answers: [`Binary`, `Duodecimal`, `Octal`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `In any programming language, what is the most common way to iterate through an array?`,
    correct_answer: `'For' loops`,
    incorrect_answers: [`'If' Statements`, `'Do-while' loops`, `'While' loops`],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `Linux was first created as an alternative to Windows XP.`,
    correct_answer: `False`,
    incorrect_answers: [`True`],
  },
]

let secondi = 60
let timer = document.getElementById('timer')
let questionElement = document.getElementById('question')
let answerElement = document.getElementById('answer')
let questionCounterElement = document.getElementById('questionContainer')
let questionCounter = 0
let totalQuestions = results.length
let pieChartElement = document.getElementById('pie-chart')
let intervallo
let punti = 0

const svgNS = 'http://www.w3.org/2000/svg'
const svg = document.createElementNS(svgNS, 'svg')
const pieChart = document.createElementNS(svgNS, 'circle')

pieChart.setAttribute('cx', '50%')
pieChart.setAttribute('cy', '50%')
pieChart.setAttribute('r', '40%')
pieChart.setAttribute('stroke-dasharray', '0')
pieChart.classList.add('slice')
svg.appendChild(pieChart)
pieChartElement.appendChild(svg)

const timerText = document.createElementNS(svgNS, 'text')
timerText.setAttribute('id', 'timerText')
timerText.setAttribute('text-anchor', 'middle')
timerText.setAttribute('alignment-baseline', 'middle')
timerText.setAttribute('font-size', '24px')
timerText.setAttribute('fill', 'white')
timerText.setAttribute('x', '50%')
timerText.setAttribute('y', '50%')
svg.appendChild(timerText)

const textElement = document.getElementById('timerText')
const timerTextX = parseFloat(pieChart.getAttribute('cx'))
const timerTextY = parseFloat(pieChart.getAttribute('cy'))
textElement.setAttribute('x', timerTextX)
textElement.setAttribute('y', timerTextY)
textElement.textContent = secondi

const secondsText = document.createElementNS(svgNS, 'text')
secondsText.setAttribute('id', 'secondsText')
secondsText.setAttribute('text-anchor', 'middle')
secondsText.setAttribute('alignment-baseline', 'middle')
secondsText.setAttribute('font-size', '10px')
secondsText.setAttribute('fill', 'white')
secondsText.setAttribute('x', timerTextX)
secondsText.setAttribute('y', timerTextY - 20)
secondsText.textContent = 'SECONDS'
svg.appendChild(secondsText)

const remainingText = document.createElementNS(svgNS, 'text')
remainingText.setAttribute('id', 'remainingText')
remainingText.setAttribute('text-anchor', 'middle')
remainingText.setAttribute('alignment-baseline', 'middle')
remainingText.setAttribute('font-size', '10px')
remainingText.setAttribute('fill', 'white')
remainingText.setAttribute('x', timerTextX)
remainingText.setAttribute('y', timerTextY + 20)
remainingText.textContent = 'REMAINING'
svg.appendChild(remainingText)

function updatePieChart() {
  const percentage = (secondi / 60) * 100
  const circumference = 2 * Math.PI * parseFloat(pieChart.getAttribute('r'))
  const strokeDasharray = (percentage / 100) * circumference
  pieChart.setAttribute(
    'stroke-dasharray',
    `${strokeDasharray} ${circumference}`
  )

  const textElement = document.getElementById('timerText')
  textElement.textContent = secondi
}

function tick() {
  secondi = secondi - 1
  if (secondi === 0) {
    clearInterval(intervallo)
    mostraProssimaDomanda()
    secondi = 60
  }
  updatePieChart()
}

function mostraDomanda(domanda) {
  // Pulisci elementi precedenti
  questionElement.innerHTML = ''
  answerElement.innerHTML = ''

  // Aggiungi la domanda
  let questionHTML = document.createElement('h1')
  questionHTML.textContent = domanda.question
  questionElement.appendChild(questionHTML)

  // Aggiungi le risposte
  let answers = [...domanda.incorrect_answers, domanda.correct_answer]
  answers.sort(() => Math.random() - 0.5)
  answers.forEach((risposta) => {
    let button = document.createElement('button')
    button.classList.add('conteiner-answeer')
    button.textContent = risposta
    button.addEventListener('click', function () {
      clearInterval(intervallo)
      if (risposta === domanda.correct_answer) {
        alert('Correct!')
        punti++
      } else {
        alert('Inccorect!')
      }
      console.log('Risposta giusta: ', domanda.correct_answer)
      console.log('punti: ' + punti)
      console.log('Risposta selezionata:', risposta)
      localStorage.setItem('punteggio_risposte', punti)
      console.log(
        'Punteggio salvato nella memoria locale:',
        localStorage.getItem('punteggio_risposte')
      )
      mostraProssimaDomanda()
      secondi = 60
    })
    answerElement.appendChild(button)
  })
}

const spanCreate = document.createElement('span')
spanCreate.innerText = '/' + totalQuestions
spanCreate.style.color = '#B21288'
questionCounterElement.appendChild(spanCreate)

function mostraProssimaDomanda() {
  let domandaCasuale = results[Math.floor(Math.random() * results.length)]
  if (questionCounter < totalQuestions) {
    questionCounter++
    questionCounterElement.textContent =
      'QUESTION ' + questionCounter + spanCreate.innerText
  } else {
    window.location.href = 'results.html'
  }

  clearInterval(intervallo)
  intervallo = setInterval(tick, 1000)

  mostraDomanda(domandaCasuale)
}

intervallo = setInterval(tick, 1000)
mostraProssimaDomanda()
console.log(punti)
