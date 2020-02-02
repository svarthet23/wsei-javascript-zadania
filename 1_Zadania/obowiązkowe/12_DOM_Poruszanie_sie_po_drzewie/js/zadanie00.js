document.addEventListener("DOMContentLoaded", function () {

    const el1 = document.getElementsByClassName("first")[0].firstElementChild.children[2];
    console.log(el1);

    const el2 = document.getElementById("second").parentElement.children[3];
    console.log(el2);

    const el3a = document.querySelector("[data-ex]").parentElement.parentElement.lastElementChild.firstElementChild;
    const el3b = el3a.children[(Math.round(el3a.childElementCount / 2)) - 1];
    console.log(el3b);

    const el4 = document.getElementsByClassName("forth")[0].parentElement.getElementsByTagName("article")[0].getElementsByTagName("p")[1];
    console.log(el4);
})