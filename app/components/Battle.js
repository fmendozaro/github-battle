var React = require("react");
var PropTypes = require("prop-types");
var Link = require("react-router-dom").Link;

function PlayerPreview(props){
    return(
        <div>
            <div className="column">
                <img
                    className="avatar"
                    src={props.avatar}
                    alt={"Avatar for: " + props.username}
                />
                <h2 className="username">@{props.username}</h2>
            </div>
            <button
                className="reset"
                onClick={props.onReset.bind(null, props.id)}
            >
                Reset
            </button>
        </div>
    )
}

PlayerPreview.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired
}

class PlayerInput extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event){
        var value = event.target.value;
        this.setState(function(){
            return {
                username: value
            }
        })
    }

    handleSubmit(event){
        event.preventDefault();

        this.props.onSubmit(
            this.props.id,
            this.state.username
        )

    }

    render(){
        return(
            <form className="column" onSubmit={this.handleSubmit}>
                <label className="header" htmlFor="username">
                    {this.props.label}
                </label>
                <input type="text" id="username" placeholder="github username" autoComplete="off" value={this.state.username} onChange={this.handleChange} />
                <button className="button" type="submit" disabled={!this.state.username}>Submit</button>
            </form>
        )
    }
}

PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}

class Battle extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            playerOneName: "",
            playerTwoName: "",
            playerOneImg: null,
            playerTwoImg: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(id, username){
        this.setState(function (){
            var newState = {};
            newState[id + "Name"] = username;
            newState[id + "Img"] = "https://github.com/" +  username + ".png?size=200";
            return newState;
        });
    }

    handleReset(id){
        this.setState(function (){
            var newState = {};
            newState[id + "Name"] = "";
            newState[id + "Img"] = null;
            return newState;
        })
    }

    render(){

        var p1Name = this.state.playerOneName;
        var p2Name = this.state.playerTwoName;
        var p1Img = this.state.playerOneImg;
        var p2Img = this.state.playerTwoImg;
        var match = this.props.match;

        return(
            <div>
                <div className="row">
                    {!p1Name &&
                    <PlayerInput
                        id="playerOne"
                        label="Player One"
                        onSubmit={this.handleSubmit}
                    />}

                    {p1Img !== null &&
                        <PlayerPreview
                            avatar={p1Img}
                            username={p1Name}
                            onReset={this.handleReset}
                            id="playerOne"
                        />}

                    {p2Img !== null &&
                        <PlayerPreview
                            avatar={p2Img}
                            username={p2Name}
                            onReset={this.handleReset}
                        id="PlayerTwo"
                        />}

                    {!p2Name &&
                    <PlayerInput
                        id="playerTwo"
                        label="Player Two"
                        onSubmit={this.handleSubmit}
                    />}
                </div>
                <div>
                    {p1Img && p2Img &&
                    <Link
                        className="button"
                        to={{
                            pathname: match.url + "/results",
                            search: "?playerOneName=" + p1Name + "&playerTwoName=" + p2Name
                        }}>
                        Battle!
                    </Link>}
                </div>
            </div>
        )
    }
}

module.exports = Battle;