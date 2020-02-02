document.addEventListener("DOMContentLoaded", function () {
    const spans = document.querySelectorAll("span.counter");
    let btn1 = 0;
    let btn2 = 0;
    let btn3 = 0;
    document.getElementById("button1").addEventListener("click", function () {
        btn1++;
        spans[0].textContent = btn1;
    })

    document.getElementById("button2").addEventListener("click", function () {
        btn2++;
        spans[1].textContent = btn2;
    })

    document.getElementById("button3").addEventListener("click", function () {
        btn3++;
        spans[2].textContent = btn3;
    })
})