const texto = document.querySelector(".texto")

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