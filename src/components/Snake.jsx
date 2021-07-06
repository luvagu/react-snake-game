function Snake({ coords }) {
	return (
		<div
			className='snake'
			style={{ gridRowStart: coords.y, gridColumnStart: coords.x }}
		/>
	)
}

export default Snake
