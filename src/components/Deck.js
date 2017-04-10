import React from 'react'
import cardsDb from '../cardsDb'
import Card from './card'

@cardsDb
class Deck extends React.Component {
	constructor() {
		super()
	}

	render() {
		let cards = [];
		this.props.cards.map( ( [name, count] ) => {
			console.log(this.props.cardsDb)
			const card = this.props.cardsDb.get(name)
			cards.push(<Card name={card.name} count={count} cost={card.cost} image={card.image} />)
		});

		return(
			<div className="deck">
				{cards}
			</div>
		)
	}
};

export default Deck
