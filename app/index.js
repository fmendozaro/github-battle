var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

class App extends React.Component{
	render(){
		return (
			<div>
				Howdy World!
				<p>This is some react training</p>
			</div>
		);
	}
}

ReactDom.render(
	<App />,
	document.getElementById('app')
);