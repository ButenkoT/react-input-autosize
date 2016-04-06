var React = require('react');
var ReactDOM = require('react-dom');
var AutosizeInput = require('../../lib/AutosizeInput');
require('./example.less');

var App = React.createClass({
	getInitialState: function() {
		return {
			value1: '',
			value2: 'example',
			value3: ''
		};
	},
	updateInputValue: function(input, event) {
		var newState = {};
		newState[input] = event.target.value;
		this.setState(newState);
	},
	render: function() {
		return (
			<div>
				<h3>Simple example:</h3>
				<AutosizeInput
					value={this.state.value1}
					onChange={this.updateInputValue.bind(this, 'value1')}
				/>
				<h3>Styled example with default value:</h3>
				<AutosizeInput
					value={this.state.value2}
					onChange={this.updateInputValue.bind(this, 'value2')}
					style={{ background: '#eee', borderRadius: 5, padding: 5 }}
					inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
				/>
				<h3>Input with placeholder:</h3>
				<AutosizeInput
					placeholder="Placeholder"
					value={this.state.value3}
					onChange={this.updateInputValue.bind(this, 'value3')}
					style={{ background: '#eee', borderRadius: 5, padding: 5 }}
					inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
				/>
			</div>
		);
	}
});

const Wrapper = () => (
  <div className="container">
		<h1>React Autosize Input</h1>
		<h2><a href="http://github.com/JedWatson/react-input-autosize">View project on GitHub</a></h2>
		<form>
		  <App />
		</form>
		<div className="hint">
			Type in the text fields above to test the auto-size input.
		</div>
		<div className="footer">
			Copyright &copy; Jed Watson 2014. MIT Licensed.
		</div>
	</div>
);

const appRoot = document.createElement('div');

appRoot.id = 'app';
document.body.appendChild(appRoot);
ReactDOM.render(<Wrapper />, appRoot);
