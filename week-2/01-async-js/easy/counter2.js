// Without using setInterval, try to code a counter in Javascript.

console.log("Counter to 10");

const start = 1;
function counter(start) {
    console.log(start);

    if (start == 10)
        return;

    setTimeout(() => {
        counter(start + 1);
    }, 1000);
}

counter(start);