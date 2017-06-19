var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

class App extends React.Component{
	render(){
		return (
			<div>
				Howdy {this.props.name}!
				<p>This is some react training</p>
			</div>
		);
	}
}

ReactDom.render(
	<App name="Fer"/>,
	document.getElementById('app')
);