const Button = ({ handler, icon }) => (
	<button onClick={handler} type='button'>
		{icon}
	</button>
)

function FloatingArrows({ handler }) {
	return (
		<div className='floating-arrows'>
			<Button handler={() => handler(null, 'ArrowUp')} icon='🔼' />
			<div>
				<Button handler={() => handler(null, 'ArrowLeft')} icon='◀️' />
				<Button handler={() => handler(null, 'ArrowRight')} icon='▶️' />
			</div>
			<Button handler={() => handler(null, 'ArrowDown')} icon='🔽' />
		</div>
	)
}

export default FloatingArrows
