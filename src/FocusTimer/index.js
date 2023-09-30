import state from "./state.js"
import * as events from "./events.js"
import * as timer from "./timer.js"

export function start(minutes, seconds) {
  state.minutes = minutes // DANDO VALOR AL ESTADO MINUTOS.
  state.seconds = seconds // DANDO VALOR AL ESTADO SEGUNDOS.

  timer.updateDisplay()

  events.registerControls()
  events.setMinutes()
}
