import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Scores extends Component {
	render() {
		return (
			<div>
				Question {this.props.current} out of {this.props.questions.length} <strong>Score: {this.props.score} / {this.props.questions.length}</strong>
			</div>
		)
	}
}

export default Scores;