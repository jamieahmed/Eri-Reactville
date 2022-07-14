const Ingredient = (props) => {
	return (
		<li style={props.disabled ? { background: 'darkgray' } : { background: props.ingredient.color }}>
			{props.ingredient.name}
			{props.isList
				? <button disabled={props.disabled} onClick={() => props.addToBurger(props.ingredient)}>+</button>
				: <button onClick={() => props.removeFromBurger(props.idx)}>X</button>
			}
		</li>
	)
}

export default Ingredient