import React, { Component, PropTypes, Children } from 'react'

class CardsProvider extends Component {
	// you must specify what you’re adding to the context
	static childContextTypes = {
		cardsDb: PropTypes.object.isRequired,
	}
	getChildContext() {
		const { cardsDb } = this.props
		return { cardsDb }
	}
	render() {
		// `Children.only` enables us not to add a <div /> for nothing
		return Children.only(this.props.children)
	}
}
export default CardsProvider
