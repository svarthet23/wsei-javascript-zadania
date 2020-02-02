document.addEventListener("DOMContentLoaded", function () {
    const divs = document.getElementsByClassName("listContainer");

    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function () {
            const elements = this.getElementsByTagName("ul")[0].children;
            for (let j = 0; j < elements.length; j++) {
                if (j === 0)
                    elements[0].style.backgroundColor = "red";
                else if (j === (elements.length - 1))
                    elements[elements.length - 1].style.backgroundColor = "blue";
                else
                    elements[j].style.backgroundColor = "green";
            }
        })
    }
})