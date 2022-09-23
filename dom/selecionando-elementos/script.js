// querySelectorAll
let textos = document.querySelectorAll(".texto")
console.log(textos) // retorna um NodeList com todos os elementos

// querySelector
let texto1 = document.querySelector(".texto")
console.log(texto1) // retorna apenas o primeiro


// Evento
texto1.addEventListener("click", () => {
  console.log("Você clicou no texto 1")
})

// Evento array
textos.forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log(`Estou clicando no Item de indice ${index}`)
  })
})
