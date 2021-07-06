import { useEffect, useRef, useState } from 'react'
import { SNAKE_SPEED, updateSnakeCoords } from './utils/snake'

import Snake from './components/Snake'
import Food from './components/Food'

function App() {
	const [snakeBody, setSnakeBody] = useState([{ x: 11, y: 11 }])
	const [foodCoords, setFoodCoords] = useState({ x: 1, y: 1 })

	const inputDirection = useRef({ x: 0, y: 0 })
	const requestRef = useRef()
	const previousTimeRef = useRef(0)

	const animate = currentTS => {
		requestRef.current = window.requestAnimationFrame(animate)

		const secondsSinceLastRender = (currentTS - previousTimeRef.current) / 1000

		if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

		previousTimeRef.current = currentTS

		setSnakeBody([...updateSnakeCoords(inputDirection.current, snakeBody)])
	}

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
		}
	}

	useEffect(() => {
		requestRef.current = window.requestAnimationFrame(animate)
		return () => cancelAnimationFrame(requestRef.current)
	}, [])

	useEffect(() => {
		window.addEventListener('keydown', userInputDirection)
		return () => window.removeEventListener('keydown', userInputDirection)
	}, [])

	return (
		<div className='board'>
			{snakeBody.map((segment, idx) => (
				<Snake key={idx} coords={segment} />
			))}
			<Food coords={foodCoords} />
		</div>
	)
}

export default App
