import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running") // Actualizando state TRUE o FALSE.

  timer.countDown()
  sounds.buttonPressAudio.play() // Agregando sonido al hacer click al play.
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running") // Removiendo clase running.
  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}

export function set() {
  el.minutes.setAttribute("contenteditable", true) // 'contenteditable': Cuando hacer click puedo altear el valor.
  el.minutes.focus() // Poner un foco en el elemento.
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on")

  if (state.isMute) {
    sounds.bgAudio.play()
    return
  }

  sounds.bgAudio.pause() //Pausando la música.
}
