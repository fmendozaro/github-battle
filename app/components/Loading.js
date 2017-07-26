var React = require("react");
var PropTypes = require("prop-types");

var styles = {
    content: {
        textAlign: "center",
        fontSize: "35px"
    },
    pacman: {
        WebkitTransform: "scale(1)"
    }

}

class Loading extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            text: props.text
        }
    }

    componentDidMount(){
        var stopper = this.props.text + "...";
        this.interval = window.setInterval(function(){
            if(this.state.text === stopper){
                this.setState(function () {
                    return {
                        text: this.props.text
                    }
                });
            } else {
                this.setState(function (previousState) {
                   return {
                       text: previousState.text + "."
                   }
                });
            }
        }.bind(this), this.props.speed);
    }

    componentWillUnmount(){
        window.clearInterval(this.interval)
    }

    render(){
        return(
            <div id="wrapper">
                <div id="overlay">
                    <div id="inner">
                        <h1>{this.state.text}</h1>
                        <br/>
                            <div
                                className='uil-pacman-css'
                                style={styles.pacman}>
                                <div><div></div></div>
                                <div><div></div></div>
                                <div><div></div></div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

Loading.PropTypes = {
    text: PropTypes.string.isRequired
}

Loading.defaultProps = {
    text: "Loading",
    speed: 300
}

module.exports = Loading;