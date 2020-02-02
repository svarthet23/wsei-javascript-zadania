document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const counter = document.querySelector("span.counter");
    let count = 0;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            count++;
            counter.textContent = count;
        })
    }
});