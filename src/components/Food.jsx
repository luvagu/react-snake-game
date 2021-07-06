function Food({ coords }) {
	return (
		<div
			className='food'
			style={{ gridRowStart: coords.y, gridColumnStart: coords.x }}
		/>
	)
}

export default Food
