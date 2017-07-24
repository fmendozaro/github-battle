/**
 * Created by fer on 7/4/17.
 */
var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

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

function RepoGrid(props){
    return(
        <ul className="popular-list">
            {props.repos.map(function (repo, index){
                return(
                    <li
                        key={repo.name}
                        className="popular-item">
                        <div className="popular-rank">#{index + 1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img
                                    className="avatar"
                                    src={repo.owner.avatar_url}
                                    alt={'Avatar for ' + repo.owner.login}/>
                            </li>
                            <li>
                                <a href={repo.html_url} target="_blank"> {repo.name} </a>
                            </li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired
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
            selectedLanguage: 'All',
            repos: null
        }
        // Assign the updateLang to the element
        this.updateLang = this.updateLang.bind(this);
    }

    componentDidMount(){
        this.updateLang(this.state.selectedLanguage);
    }

    updateLang(lang){
        this.setState(function(){
            return{
                selectedLanguage:lang,
                repos: null
            }
        });

        //AJAX request
        api.fetchPopularRepos(lang)
            .then(function(repos){
                console.log(repos);
                this.setState(function (){
                    return{
                        repos: repos
                    }
                });
            }.bind(this));

    }

    render(){
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLang}
                />
                {!this.state.repos ? <p>Loading</p> : <RepoGrid repos={this.state.repos} /> }
            </div>
        )
    }
}

module.exports = Popular;