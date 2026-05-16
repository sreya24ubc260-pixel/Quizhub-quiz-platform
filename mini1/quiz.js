let time = 20;

let timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = time;

    if (time === 0) {
        clearInterval(timer);
        alert("Time Up!");
    }
}, 1000);
