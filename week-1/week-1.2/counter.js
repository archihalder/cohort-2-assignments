// Create a counter in JavaScript (counts down from 30 to 0)

function countdown() {
    let startTime = 30;
    const intervalTime = 1000;

    const intervalId = setInterval(() => {
        console.log(startTime);

        if (startTime === 0) {
            clearInterval(intervalId);
            console.log("Time up!");
        } else {
            startTime--;
        }

    }, intervalTime);
}

countdown();
