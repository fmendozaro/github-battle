/**
 * Created by fer on 7/4/17.
 */
var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props){
    var langs = ['All', 'PHP', 'Java', 'Javascript', 'CSS'];
    return(
        <ul className="languages">
            {
                langs.map(function (lang){
                    return(
                        <li
                            key={lang}
                            onClick={props.onSelect.bind(null, lang)}
                            style={lang === props.selectedLanguage ? {color: 'red'} : null}
                        >
                            {lang}
                        </li>
                    )
                })
                // This second parameter is to specify the context
            }
        </ul>
    )
}

// PropTypes restrictions
SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        }
        // Assign the updateLang to the element
        this.updateLang = this.updateLang.bind(this);
    }

    updateLang(lang){
        this.setState(function(){
            return{
                selectedLanguage:lang
            }
        });
    }

    render(){
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLang}
                />
            </div>
        )
    }
}

module.exports = Popular;