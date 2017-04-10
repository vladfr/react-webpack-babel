import React from 'react';
import '../styles/index.scss';

import CardsProvider from './components/CardsProvider'
import Deck from './components/Deck'

import cardJson from '../cards.json'

class CardData {
	constructor(cardJson) {
		this._cards = cardJson
	}

	get(name) {
		let card = this._cards[name]
		card.image = "/images/" + card.id + ".png"
		return card
	}
}

const myCardData = new CardData(cardJson)

export default class App extends React.Component {
  render() {
  	const deck = {
  		name: 'My test deck',
  		cards: [
					["Brann Bronzebeard", 2],
					["Sylvanas Windrunner", 1],
					['Mind Control', 2],
					['Frostbolt', 2]
				]
		};

    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>
				<CardsProvider cardsDb={myCardData}>
					<Deck cards={deck.cards} name={deck.name} />
				</CardsProvider>
      </div>
    )
  }
}
