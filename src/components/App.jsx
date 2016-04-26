import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import ScoreBoard from './quiz/Scores.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			questions: [
			{ id: 1,
				text: 'What is your name?',
				choices: [
					{id: 'a', text: 'Michael'},
					{id: 'b', text: 'Jacques'},
					{id: 'c', text: 'Steven'}
				],
				correct: 'b'
			},
			{ id: 2,
				text: 'What is your mother\'s name?',
				choices: [
					{id: 'a', text: 'Mother'},
					{id: 'b', text: 'Deidre'},
					{id: 'c', text: 'Moeder'}
				],
				correct: 'b'
			},
			{ id: 3,
				text: 'What is your dog\'s name?',
				choices: [
					{id: 'a', text: 'Bonnie'},
					{id: 'b', text: 'Vabond'},
					{id: 'c', text: 'Brakkie'}
				],
				correct: 'b'
			}],
			score: 0,
			current: 1
		}
	}

	setCurrent(current){
		this.setState({current: current});
	}

	setScore(score){
		this.setState({score: score});
	}

	render() {
		if(this.state.current > this.state.questions.length) {
			var score = <Results {...this.state} /> 
		} else {
			var score = <ScoreBoard {...this.state} />
		}
		return (
			<div>
				{score}
				<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
			</div>
		)
	}
}

export default App;