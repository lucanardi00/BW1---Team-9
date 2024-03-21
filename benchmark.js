const results = [
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The Windows ME operating system was released in the year 2000.`,
    correct_answer: `True`,
    incorrect_answers: [`False`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `What does LTS stand for in the software market?`,
    correct_answer: `Long Term Support`,
    incorrect_answers: [
      `Long Taco Service`,
      `Ludicrous Transfer Speed`,
      `Ludicrous Turbo Speed`,
    ],
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
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `How long is an IPv6 address?`,
    correct_answer: `128 bits`,
    incorrect_answers: [`32 bits`, `64 bits`, `128 bytes`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `How many values can a single byte represent?`,
    correct_answer: `256`,
    incorrect_answers: [`8`, `1`, `1024`],
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
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `According to the International System of Units, how many bytes are in a kilobyte of RAM?`,
    correct_answer: `1000`,
    incorrect_answers: [`512`, `1024`, `500`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:`,
    correct_answer: `HD Graphics 500`,
    incorrect_answers: [
      `HD Graphics 700 `,
      `HD Graphics 600`,
      `HD Graphics 7000`,
    ],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `What does CPU stand for?`,
    correct_answer: `Central Processing Unit`,
    incorrect_answers: [
      `Central Process Unit`,
      `Computer Personal Unit`,
      `Central Processor Unit`,
    ],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `In "Hexadecimal", what color would be displayed from the color code? "#00FF00"?`,
    correct_answer: `Green`,
    incorrect_answers: [`Red`, `Blue`, `Yellow`],
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
    question: `In web design, what does CSS stand for?`,
    correct_answer: `Cascading Style Sheet`,
    incorrect_answers: [
      `Counter Strike: Source`,
      `Corrective Style Sheet`,
      `Computer Style Sheet`,
    ],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `How many kilobytes in one gigabyte (in decimal)?`,
    correct_answer: `1000000`,
    incorrect_answers: [`1024`, `1000`, `1048576`],
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
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `Ada Lovelace is often considered the first computer programmer.`,
    correct_answer: `True`,
    incorrect_answers: [`False`],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The Windows 7 operating system has six main editions.`,
    correct_answer: `True`,
    incorrect_answers: [`False`],
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
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The Python programming language gets its name from the British comedy group "Monty Python."`,
    correct_answer: `True`,
    incorrect_answers: [`False`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `If you were to code software in this language you'd only be able to type 0's and 1's.`,
    correct_answer: `Binary`,
    incorrect_answers: [`JavaScript`, `C++`, `Python`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `What does the "MP" stand for in MP3?`,
    correct_answer: `Moving Picture`,
    incorrect_answers: [`Music Player`, `Multi Pass`, `Micro Point`],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `Linus Torvalds created Linux and Git.`,
    correct_answer: `True`,
    incorrect_answers: [`False`],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `Pointers were not used in the original C programming language; they were added later on in C++.`,
    correct_answer: `False`,
    incorrect_answers: [`True`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `In computing, what does MIDI stand for?`,
    correct_answer: `Musical Instrument Digital Interface`,
    incorrect_answers: [
      `Musical Interface of Digital Instruments`,
      `Modular Interface of Digital Instruments`,
      `Musical Instrument Data Interface`,
    ],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `What is the code name for the mobile operating system Android 7.0?`,
    correct_answer: `Nougat`,
    incorrect_answers: [`Ice Cream Sandwich`, `Jelly Bean`, `Marshmallow`],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `In most programming languages, the operator ++ is equivalent to the statement "+= 1".`,
    correct_answer: `True`,
    incorrect_answers: [`False`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `What is the domain name for the country Tuvalu?`,
    correct_answer: `.tv`,
    incorrect_answers: [`.tu`, `.tt`, `.tl`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The programming language 'Swift' was created to replace what other programming language?`,
    correct_answer: `Objective-C`,
    incorrect_answers: [`C#`, `Ruby`, `C++`],
  },
  {
    type: `multiple`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `In computing, what does LAN stand for?`,
    correct_answer: `Local Area Network`,
    incorrect_answers: [
      `Long Antenna Node`,
      `Light Access Node`,
      `Land Address Navigation`,
    ],
  },
  {
    type: `boolean`,
    difficulty: `easy`,
    category: `Science: Computers`,
    question: `The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.`,
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
]
let newArray = []

fetch('https://opentdb.com/api.php?amount=30&category=18&difficulty=easy')
  .then((response) => response.json())
  .then((data) => {
    const resultsArray = data.results
    newArray.push(...resultsArray)
    console.log(newArray)
    console.log('Element at index 1:', newArray[1])
  })

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
const spanCreate = document.createElement('span')
const domandeFatte = []

const startQuiz = function () {
  const menu = document.getElementById('menu')
  const difficolta = document.getElementById('difficolta')
  const tendina = document.getElementById('tendina')
  const selezione = parseInt(tendina.value)
  const menuBtn = document.getElementById('menuBtn')
  totalQuestions = selezione
  localStorage.setItem('Totale_domande', selezione)
  console.log(
    'totale domande salvato nella memoria locale:',
    localStorage.getItem('Totale_domande')
  )
  results.splice(selezione)
  questionCounter = 0
  console.log(tendina.value)
  console.log('selezione' + results)

  spanCreate.innerText = '/' + totalQuestions
  spanCreate.style.color = '#B21288'
  questionCounterElement.appendChild(spanCreate)
  document.getElementById('pie-chart').style.display = 'block'
  menu.style.display = 'none'

  clearInterval(intervallo)
  intervallo = setInterval(tick, 1000)

  mostraProssimaDomanda(selezione)
}

console.log(results)
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
        punti++
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

function mostraProssimaDomanda() {
  if (domandeFatte.length === results.length) {
    window.location.href = 'results.html'
    return
  }

  let domandaCasuale

  do {
    domandaCasuale = results[Math.floor(Math.random() * results.length)]
  } while (domandeFatte.includes(results.indexOf(domandaCasuale)))

  domandeFatte.push(results.indexOf(domandaCasuale))

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
