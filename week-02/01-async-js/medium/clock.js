// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function showTime24() {
    const d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    if (sec < 10) {
        sec = '0' + sec;
    }

    let time24 = `${hr}:${min}:${sec}`
    console.log(time24);
    delete d;
}

function showTime12() {
    const d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    let suffix = "AM"

    if (hr > 12) {
        hr -= 12;
        suffix = "PM"
    }

    if (hr < 10) {
        hr = '0' + hr;
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (sec < 10) {
        sec = '0' + sec;
    }

    let time12 = `${hr}:${min}:${sec} ${suffix}`
    console.log(time12);
    delete d;
}

setInterval(function () {
    showTime12();
}, 1000);