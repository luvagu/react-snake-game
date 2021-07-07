import { onSnake } from './snake'
import { randomGridPosition } from './grid'

export function getRandomFoodCoords(snakeBody) {
	let newFoodCoords

	while (newFoodCoords == null || onSnake(snakeBody, newFoodCoords)) {
		newFoodCoords = randomGridPosition()
	}

	return newFoodCoords
}
