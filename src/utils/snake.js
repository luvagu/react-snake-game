export const SNAKE_SPEED = 2

export function updateSnakeCoords(inputDirection, snakeBody) {
	for (let i = snakeBody.length - 2; i >= 0; i--) {
		snakeBody[i + 1] = { ...snakeBody[i] }
	}

	snakeBody[0].x += inputDirection.x
	snakeBody[0].y += inputDirection.y

	return snakeBody
}
