const button = document.querySelector(".btn")

function olaMundo() {
  console.log('Olá Mundo')
}

button.addEventListener('click', olaMundo)


// Mudar cor de botão
const btnClick = document.querySelectorAll('.btn-click')

function mudarBG() {
  this.classList.toggle('ativo')
}

btnClick.forEach(function (item) {
  item.addEventListener('click', mudarBG)
})

