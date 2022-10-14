const texto = document.querySelector(".texto")
const img = document.querySelector(".img")

// classList
console.log("classList")
console.log(texto.classList)

// classList add
console.log("Add")
texto.classList.add("outroTexto")
console.log(texto.classList)

// classList toggle
console.log("Toggle")
texto.classList.toggle("outroTexto")
console.log(texto.classList)

// classList contains
console.log("Contains")
console.log(texto.classList.contains("outroTexto"))

// classList replace
texto.classList.replace("texto-branco", "texto-preto")
console.log(texto.classList)

// Atributos

// getAttribute
console.log("getAttribute")
console.log(img.getAttribute('alt'))

// setAttribute
console.log('setAttribute')
img.setAttribute('alt', 'Novo Alt')
console.log(img.getAttribute('alt'))

// hasAttribute
console.log("hasAttribute")
console.log(img.hasAttribute('src'))

// removeAttribute
console.log("removeAttribute")
img.removeAttribute('alt')
console.log(img.getAttribute('alt'))