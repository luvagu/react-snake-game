import { SNAKE_SPEED, update as updateSnake } from './snake'

let lastRenderTime = 0

export function mainLoop(currentTS) {
  window.requestAnimationFrame(mainLoop)
  
  const secondsSinceLastRender = (currentTS - lastRenderTime) / 1000

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  console.log('Render')

  lastRenderTime = currentTS

  updateSnake()
}

