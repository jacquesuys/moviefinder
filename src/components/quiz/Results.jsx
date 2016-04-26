import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Results extends Component {
	render() {
		return (
			<div>
				<h4> You got {this.props.score} out of {this.props.questions.length}</h4>
			</div>
		)
	}
}

export default Results;