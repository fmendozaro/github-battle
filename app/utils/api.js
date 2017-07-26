var axios = require('axios');
var Config = require('Config')
var github_id = Config.github_id;
var github_sec = Config.github_sec;
var params = "&client_id=" + github_id + "&client_secret=" + github_sec;

function getProfile(username) {
    return axios.get("https://api.github.com/users/" + username +"?"+ params);
}

function getRepos(username){
    return axios.get("https://api.github.com/users/" + username + "/repos?" + params + "&per_page=100");
}

function getStartCount(repos){
    return repos.data.reduce(function(count, repo){
        return count + repo.stargazers_count;
    }, 0);
}

function calculateScore(profile, repos){
    var followers = profile.data.followers;
    var totalStars = getStartCount(repos);
    return (followers * 3 ) + totalStars;
}

function handleError(error){
    console.warn(error);
    return null;
}

function getUserData(player){
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then(function(data){
        var profile = data[0];
        var repos = data[1];
        return {
            profile: profile,
            score: calculateScore(profile, repos)
        }
    });
}

function sortPlayers(players){
    return players.sort(function(a, b){
        return b.score - a.score;
    });
}

module.exports = {
    fetchPopularRepos: function(language){
        var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories' + params);
        return axios.get(encodedURI)
            .then(function (response) {
                return response.data.items;
            });
    },
    battle: function (players) {
        return axios.all(players.map(getUserData))
            .then(sortPlayers)
    }
}