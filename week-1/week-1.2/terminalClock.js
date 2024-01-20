// Create a terminal clock (HH:MM:SS)

const d = new Date();

const hour = d.getHours();
const min = d.getMinutes();
const sec = d.getSeconds();

function fillZero(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return "" + num;
    }
}

console.log(`Time is: ${fillZero(hour)}:${fillZero(min)}:${fillZero(sec)}`);
