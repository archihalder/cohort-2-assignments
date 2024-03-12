// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// console.log("Counter to 10");

function counter() {
    let start = 1;
    const intervalId = setInterval(function () {
        console.log(start);
        if (start === 5) {
            clearInterval(intervalId);
        }
        start++;
    }, 1000);
}

counter();

// let i = 1;
// setInterval(function () {
//     console.log(i);
//     i++;
// }, 1000);