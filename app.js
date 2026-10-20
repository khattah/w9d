"use strict";

// W9D: Arrays, objects, while loops, and for loops.
// The tweets are fictional practice examples.
// Each tweet object has a tweet, username, creation date, and user age.
const tweets = [
    { tweet: "Learning JavaScript is fun!", username: "omer", created_at: "10-01-2026", age: 25 },
    { tweet: "I love playing football.", username: "ahmed", created_at: "10-02-2026", age: 16 },
    { tweet: "Beautiful weather today!", username: "sara", created_at: "10-03-2026", age: 30 },
    { tweet: "Studying for my exams.", username: "mohamed", created_at: "10-04-2026", age: 17 },
    { tweet: "Coding my first website.", username: "fatima", created_at: "10-05-2026", age: 22 },
    { tweet: "My favourite subject is math.", username: "ali", created_at: "10-06-2026", age: 15 },
    { tweet: "Enjoying a cup of coffee.", username: "khalid", created_at: "10-07-2026", age: 35 },
    { tweet: "Just finished my homework.", username: "lina", created_at: "10-08-2026", age: 14 },
    { tweet: "Today I learned about arrays.", username: "hassan", created_at: "10-09-2026", age: 18 },
    { tweet: "Excited for the weekend!", username: "mariam", created_at: "10-10-2026", age: 16 }
];

// WHILE LOOP: Display only tweets from users who are at least 18.
console.log("=== Tweets by users age 18 and older ===");
let i = 0;
while (i < tweets.length) {
    // A breakpoint on the if statement lets us inspect tweets[i].age.
    if (tweets[i].age >= 18) {
        // Print the tweet first, then username, then creation date.
        console.log(tweets[i].tweet, tweets[i].username, tweets[i].created_at);
    }
    // Increase the counter so the while loop finishes.
    i++;
}

// FOR LOOP: Display only tweets from users younger than 18.
console.log("=== Tweets by users under age 18 ===");
for (let j = 0; j < tweets.length; j++) {
    // A breakpoint here lets us inspect j and tweets[j].age.
    if (tweets[j].age < 18) {
        // Print the tweet first, then username, then creation date.
        console.log(tweets[j].tweet, tweets[j].username, tweets[j].created_at);
    }
}
