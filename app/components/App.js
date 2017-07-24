/**
 * Created by fer on 7/4/17.
 */
var React = require('react');
var Popular = require('./Popular');

// Adding an example of a Stateless functional component
function Welcome(props){
    return (
        <div>Welcome, {props.username}!</div>
    )
}

class App extends React.Component{
    render(){
        return (
            <div className="container">
                <Welcome username="Fer" />
                <Popular/>
            </div>
        )
    }
}

module.exports = App;