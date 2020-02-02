document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("orders");

    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[3].addEventListener("click", function () {
            this.parentElement.parentElement.removeChild(this.parentElement);
        })
    }
})