document.addEventListener("DOMContentLoaded", function () {

    //Zadanie 0b

    const parents = document.querySelectorAll("div.parent");

    for (let i = 0; i < parents.length; i++) {
        parents[i].addEventListener("mouseenter", function () {
            const child = parents[i].querySelector("div.children");
            child.style.display = "block";
            child.addEventListener("mouseleave", hideChildrenElement);
            function hideChildrenElement() {
                this.style.display = "none";
            }
        })
    }
})