const btn = document.getElementById("calculate");

btn.addEventListener("click", () => {
    const amt = document.getElementById("amt").value;
    const rate = document.getElementById("rate").value;
    const year = document.getElementById("year").value;

    const res = parseFloat(amt) * parseFloat(rate) * parseFloat(year) / 100;
    document.getElementById("iamt").innerHTML = res;
    document.getElementById("tamt").innerHTML = res + parseInt(amt);
})
