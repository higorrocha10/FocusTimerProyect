import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"
import { kitchenTimer } from "./sounds.js"

export function countDown() {
  clearTimeout(state.countDownId) // Limpiar el estado y empieza todo otra vez.

  if (!state.isRunning) {
    // Si no está corriendo. '!' = NO / NEGACIÓN
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds-- // Decrementación de los segundos.

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    reset()
    kitchenTimer.play() // Sonido al finalizar el tiempo.
    return
  }

  updateDisplay(minutes, seconds)

  state.countDownId = setTimeout(() => countDown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes // nullish coalescing ( ?? ): El operador coalescente nulo (??) es un operador lógico que devuelve su operando del lado derecho cuando su operando del lado izquierdo es nulo o no está definido y, en caso contrario, devuelve su operando del lado izquierdo.
  seconds = seconds ?? state.seconds
  el.minutes.textContent = String(minutes).padStart(2, "0") // PadStart: Rellenar el inicio. (2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}

// setTimeout() : Ejecutar una función después de un determinado tiempo (milesegundos). RECURSIÓN : Cuando una función se llama a si misma en algún momento, pero necesita ser parada en algún momento porque sino no para nunca. CallBack: Función que recibe otra función como parámetro y que será llamada despúes de un determinado tiempo.
