// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const message = "\nI'm in space! Yippeee!!!";

fs.appendFile("sample.txt", message, (err) => {
    if (err) {
        console.log(err);
    } else {
        "Message sent successfully!";
    }
})