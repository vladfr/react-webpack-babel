import React from 'react'
import '../../styles/card.scss';

class Card extends React.Component {
	constructor() {
		super()
	}

	render() {
		return(
			<div className="card" style={{backgroundImage: 'url('+this.props.image+')'}}>
				<span className="card-cost">{this.props.cost}</span>
				<span className="card-name">{this.props.name}</span>
				<span className="card-count">{this.props.count}</span>
				<img src={this.props.image} />
			</div>
		)
	}
};

export default Card
