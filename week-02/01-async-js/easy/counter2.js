// Without using setInterval, try to code a counter in Javascript.

console.log("Counter to 10");

for (let i = 1; i <= 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}