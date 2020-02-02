document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("remove").addEventListener("click", function () {
        const list = document.querySelector("ul").children;
        let count = list.length;
        for (let i = (count - 1); i >= 0; i--) {
            list[i].parentNode.removeChild(list[i]);
        }
    })
})