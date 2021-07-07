import { useCallback, useEffect, useRef, useState } from 'react'
import { SNAKE_SPEED, updateSnake, onSnake } from './utils/snake'
import { getRandomFoodCoords } from './utils/food'

import Snake from './components/Snake'
import Food from './components/Food'

function App() {
	const [snakeBody, setSnakeBody] = useState([{ x: 11, y: 11 }])
	const [foodBlock, setFoodBlock] = useState(getRandomFoodCoords(snakeBody))

	// const snakeBody = useRef([{ x: 11, y: 11 }])
	// const foodBlock = useRef(getRandomFoodCoords(snakeBody))

	const inputDirection = useRef({ x: 0, y: 0 })
	const requestRef = useRef()
	const previousTimeRef = useRef(0)

	const animate = useCallback((currentTS) => {
		requestRef.current = window.requestAnimationFrame(animate)

		const secondsSinceLastRender = (currentTS - previousTimeRef.current) / 1000

		if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

		previousTimeRef.current = currentTS

		

		if (onSnake(snakeBody, foodBlock)) {
			// foodBlock.current = getRandomFoodCoords(snakeBody)
			setFoodBlock(getRandomFoodCoords(snakeBody))
		}
		
		setSnakeBody([...updateSnake(inputDirection.current, snakeBody, foodBlock)])
	}, [snakeBody, foodBlock])

	const userInputDirection = e => {
		switch (e.key) {
			case 'ArrowUp':
				if (inputDirection.current.y !== 0) break
				inputDirection.current = { x: 0, y: -1 }
				break
			case 'ArrowDown':
				if (inputDirection.current.y !== 0) break
				inputDirection.current = { x: 0, y: 1 }
				break
			case 'ArrowLeft':
				if (inputDirection.current.x !== 0) break
				inputDirection.current = { x: -1, y: 0 }
				break
			case 'ArrowRight':
				if (inputDirection.current.x !== 0) break
				inputDirection.current = { x: 1, y: 0 }
				break
			default:
				break
		}
	}

	// useEffect(() => {
	// 	if (onSnake(snakeBody, foodBlock.current)) {
	// 		// setFoodBlock(getRandomFoodCoords(snakeBody))
	// 		foodBlock.current = getRandomFoodCoords(snakeBody)
	// 	}
	// })

	useEffect(() => {
		requestRef.current = window.requestAnimationFrame(animate)
		return () => window.cancelAnimationFrame(requestRef.current)
	}, [animate])

	useEffect(() => {
		window.addEventListener('keydown', userInputDirection)
		return () => window.removeEventListener('keydown', userInputDirection)
	}, [])

	return (
		<div className='board'>
			{snakeBody.map((segment, idx) => (
				<Snake key={idx} coords={segment} />
			))}
			{foodBlock && <Food coords={foodBlock} />}
		</div>
	)
}

export default App