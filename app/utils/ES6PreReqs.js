console.log("ES6 Practice");

// Promises
var milliseconds = 5000;

const wait = function (milliseconds){
    return new Promise((resolve, reject) => {

        if(milliseconds == undefined){
            reject("Something went wrong");
        }

        setTimeout(() => {
            resolve("You'll see this after " + (milliseconds / 1000) + " seconds");
        }, milliseconds);

    });
}

wait(milliseconds).then((data) => console.log(data)).catch((error) => console.log(error));

milliseconds = 1000;

wait(milliseconds).then((data) => console.log(data)).catch((error) => console.log(error));

wait().then((data) => console.log(data)).catch((error) => console.log(error));