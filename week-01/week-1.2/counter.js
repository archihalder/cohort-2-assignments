// Create a counter in JavaScript (counts down from 30 to 0)

function countdown(d) {
    const intervalId = setInterval(function () {
        console.log(d);
        if (d === 0) {
            clearInterval(intervalId);
            console.log("Time up!");
        }
        d--;

    }, 1000);
}

const duration = 30;
countdown(duration);
