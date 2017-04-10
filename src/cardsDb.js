import React, { Component, PropTypes } from "react"
const CardsDb = (ComponentToWrap) => {
	return class CardsDb extends Component {
		// let’s define what’s needed from the `context`
		static contextTypes = {
			cardsDb: PropTypes.object.isRequired,
		}
		render() {
			const { cardsDb } = this.context
			// what we do is basically rendering `ComponentToWrap`
			// with an added `theme` prop, like a hook
			return (
				<ComponentToWrap {...this.props} cardsDb={cardsDb} />
			)
		}
	}
}
export default CardsDb
