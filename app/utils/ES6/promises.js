// Promises
function wait(millisecs){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve();
        }, millisecs);
    })
}

wait(1000).then( () => { console.log(`You'll see this after 1 second`) });
wait(3000).then( () => { console.log(`You'll see this after 3 seconds`) });