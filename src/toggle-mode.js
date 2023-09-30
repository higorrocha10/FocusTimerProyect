let darkMode = true // Variable de control, empieza en DARKMODE, por eso es verdadero.
const buttonToggle = document.getElementById("toggle-mode") // Seleccionando el botón de cambiar modo por su Id.

buttonToggle.addEventListener("click", (event) => {
  // Creacción de evento para el botón de cambiar el modo Y que ejecutará una función.
  document.documentElement.classList.toggle("light") // Cogiendo el documento HTML.

  const mode = darkMode ? "light" : "dark" // Si verdadero es = light sino es = dark || Operador condicional (ternario).
  event.currentTarget.querySelector(
    // .currentTarget = Objetivo actual. Mejorar accesibilidad.
    "span"
  ).textContent = `${mode} mode ativado!`

  darkMode = !darkMode // ! = Lo contrario del valor actual. Cambia de TRUE a FALSE. Coger el booleano y niego el true.
})
