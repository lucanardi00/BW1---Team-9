const checkbox = document.getElementById('checkbox1')

const proceedBtn = document.querySelector('button')

console.log(checkbox)
console.log(proceedBtn)

checkbox.addEventListener('click', function () {
  if (checkbox.checked) {
    proceedBtn.style.backgroundColor = '#00ffff'
  } else {
    proceedBtn.style.backgroundColor = '#e7e7eb'
  }
})

checkbox.addEventListener('click', function () {
  if (checkbox.checked) {
    proceedBtn.style.backgroundColor = '#00ffff'
  } else {
    proceedBtn.style.backgroundColor = '#e7e7eb'
  }
})

const proceedUrl = function () {
  if (checkbox.checked) {
    window.location.href = 'benchmark.html'
  } else {
    alert('You must accept the agreements first!')
  }
}
