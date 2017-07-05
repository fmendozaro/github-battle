/**
 * Created by fer on 7/4/17.
 */
var React = require('react');
var Popular = require('./Popular');

class App extends React.component{
    render(){
        return (
            <div className="container">
                <Popular/>
            </div>
        )
    }
}

module.exports = App;