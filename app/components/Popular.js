/**
 * Created by fer on 7/4/17.
 */
var React = require('react');

class Popular extends React.component{

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

        var langs = ['All', 'Javascript', 'Ruby', 'Css', 'Python'];
        return (
            <ul className="languages">
                {
                    langs.map(function (lang){
                        return(
                            <li
                                key={lang}
                                onClick={this.updateLang.bind(null, lang)}
                            >
                                {lang}
                            </li>
                        )
                    }, this)
                    // This second parameter is to specify the context
                }
            </ul>
        )
    }
}

module.exports = Popular;