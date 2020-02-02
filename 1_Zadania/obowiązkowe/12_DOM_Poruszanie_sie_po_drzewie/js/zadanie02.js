document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByClassName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            const box = this.parentElement;
            box.style.backgroundColor = randomColor;
        })
    }
})