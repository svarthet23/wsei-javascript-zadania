document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementsByClassName("button")[0];
    let counter = 0;

    button.addEventListener("click", function () {
        counter++;
        const table = this.parentElement.children[0];
        const child = document.createElement("li");
        child.appendChild(document.createTextNode("Element " + counter + " w chwili dodania było " +
            (counter - 1) + " elementów"));
        table.appendChild(child);
    })
})