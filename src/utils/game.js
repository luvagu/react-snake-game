import { outsideGrid } from './grid'
import { getSnakeHead, snakeIntersection } from './snake'

export function checkDeath(snakeBody) {
	return (
		outsideGrid(getSnakeHead(snakeBody)) ||
		snakeIntersection(snakeBody)
	)
}
