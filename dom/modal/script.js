const buttonOpen = document.querySelector('.js-open-modal')
const buttonClose = document.querySelector('.js-close-modal')
const modal = document.querySelector('.js-modal')

function openModal() {
  modal.classList.add('active')
}

function closeModal() {
  modal.classList.remove('active')
}

buttonOpen.addEventListener('click', openModal)
buttonClose.addEventListener('click', closeModal)


