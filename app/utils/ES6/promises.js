// Promises

var optionalHeaders = {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}}

function wait(millisecs){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve();
        }, millisecs);
    })
}

function getLastCommit(username){
    return fetch("https://api.github.com/users/"+username+"/events").then((response) => {
        return response.json();
    }).catch( error => {
        console.log(error);
    });
}

wait(1000).then( () => { console.log(`You'll see this after 1 second`) });
wait(3000).then( () => { console.log(`You'll see this after 3 seconds`) });

var promise = getLastCommit("fmendozaro");

// prints the date of the last commit
promise.then(commits => {
  console.log(commits[0].created_at);
});
