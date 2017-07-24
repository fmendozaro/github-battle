/**
 * Created by fer on 7/4/17.
 */
var React = require("react");
var Popular = require("./Popular");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require("./Nav");
var Home = require("./Home");

// Adding an example of a Stateless functional component
function Welcome(props){
    return (
        <span>Welcome, {props.username}!</span>
    )
}

class App extends React.Component{
    render(){
        return (
            <Router>
                <div className="container">
                    <Welcome username="Fer" />
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route path="/popular" component={Popular} />
                </div>
            </Router>
        )
    }
}

module.exports = App;