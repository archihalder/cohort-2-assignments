// Read a file, remove all the extra spaces and write it back to the same file.

const fs = require("fs")

fs.readFile("a.txt", "utf-8", (err, data) => {
    let str = data.trim().split(' ');
    const arr = []

    str.forEach(i => {
        if (i !== '') arr.push(i);
    })

    const res = '\n' + arr.join(' ');

    fs.appendFile("a.txt", res, (err) => {
        if (err) throw err;
        console.log("Added data successfully");
    })

})