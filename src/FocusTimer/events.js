import state from "./state.js"
import { controls } from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js"

export function registerControls() {
  // Función de los controles de la app.
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action // target = objetivo / blanco. || dataset permite acceder a date-action.
    if (typeof actions[action] != "function") {
      return // Parar aplicación.
    }

    actions[action]() // Recibe el nombre del click que queremos.
  })
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    // Poner en el elemento en el foco. Ejecutar una función y dejándolo vacío.
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key) // Expresiónes regulares /\d/.test(). Para solo aceptar números.

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time // Operador condicional (ternario).

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute("contenteditable")
  })
}
