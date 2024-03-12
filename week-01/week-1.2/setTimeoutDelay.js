// Calculate the time it takes between setTimeout call and the inner function actually running

const start = performance.now();
const timeDelay = 1000; // in ms

setTimeout(function () {
    const end = performance.now();
    console.log(`Inner function executed after ${end - start - timeDelay} ms`);
}, timeDelay);
