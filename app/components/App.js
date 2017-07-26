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
var Battle = require("./Battle");
var Results = require("./Results");
var Switch = require("react-router-dom").Switch;

// Adding an example of a Stateless functional component
function Welcome(props){
    return (
        <h2>Welcome to the ultimate Github Battle {props.username}</h2>
    )
}

Welcome.defaultProps = {
    username: ""
}

class App extends React.Component{
    render(){
        return (
            <Router>
                <div className="container">
                    <Nav />
                    <Welcome />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/battle" component={Battle} />
                        <Route path="/battle/results" component={Results} />
                        <Route path="/popular" component={Popular} />
                        {/* Error message */}
                        <Route render={function (){
                            return <p>Not Found</p>
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;