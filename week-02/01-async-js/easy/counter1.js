// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// counts till given end value
function counterTo(end) {
    let start = 1;
    const intervalId = setInterval(function () {
        console.log(start);
        if (start === end) {
            clearInterval(intervalId);
        }
        start++;
    }, 1000);
}

// counter doesn't stop
function unlimitedCounter() {
    let i = 1;
    setInterval(function () {
        console.log(i);
        i++;
    }, 1000);
}

counterTo(15);