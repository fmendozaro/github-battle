// Promises


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let res = Math.random();
        if (res > 0.5) {
            resolve({data: res});
        } else {
            reject("The number is less than 0.5");
        }
    }, 1500);
});

console.log(myPromise); // a pending promise

myPromise.catch((error) => console.log('rejected!' + error));
myPromise.then((response) => console.log('resolved!' + response.data));


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