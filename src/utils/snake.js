export const SNAKE_SPEED = 4

export const EXPANSION_RATE = 1

export function updateSnake(inputDirection, snakeBody, foodBlock) {
	// console.log('snakeBody', snakeBody[0]);
	// console.log('foodBlock', foodBlock);
	console.log('onSnake(snakeBody, foodBlock)', onSnake(snakeBody, foodBlock));

	if (onSnake(snakeBody, foodBlock)) {
		console.log('adding segment');
		snakeBody = addSegments(EXPANSION_RATE, snakeBody)
	}

	for (let i = snakeBody.length - 2; i >= 0; i--) {
		snakeBody[i + 1] = { ...snakeBody[i] }
	}

	snakeBody[0].x += inputDirection.x
	snakeBody[0].y += inputDirection.y

	return snakeBody
}

export function onSnake(snakeBody, foodBlock, { ignoreHead = false } = {}) {
	// console.log('snakeBody', snakeBody);
	return snakeBody.some((segment, idx) => {
		// if ((ignoreHead && idx === 0) || !foodBlock) return false
		return equalCoords(segment, foodBlock)
	})
}

function equalCoords(pos1, pos2) {
	return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments(amount, snakeBody) {
	for (let i = 0; i < amount; i++) {
		snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
	}

	return snakeBody
}
