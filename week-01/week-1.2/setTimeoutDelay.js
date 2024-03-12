// Calculate the time it takes between setTimeout call and the inner function actually running

const timeout = 1000; // 1000 milliseconds -> 1 second

function delayedFunction() {
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    console.log(`Delayed function executed after ${elapsedTime} milliseconds`);
}

const startTime = performance.now();
setTimeout(delayedFunction, timeout);
