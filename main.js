// variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen-1")
const screen2 = document.querySelector(".screen-2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1 

// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains("hide")){
    handleResetClick()
  }
})

// função callback
function handleTryClick(event) {
  event.preventDefault() // não faça o padrão desse evento

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()

    document.querySelector(".screen-2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}