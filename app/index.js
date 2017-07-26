var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');
require('./utils/pacman.css');
var App = require('./components/App');

ReactDom.render(
	<App />,
	document.getElementById('app')
);