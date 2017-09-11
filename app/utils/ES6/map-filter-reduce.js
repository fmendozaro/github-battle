const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    }
];

// Filter
let experiencedUsers = users.filter( (user) =>  user.languages.length >= 3);

console.log(experiencedUsers);

// Map
let emails = users.map((user) => user.email)

console.log("emails " + emails);

let reducedObj = users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
}, {});

console.log(reducedObj);