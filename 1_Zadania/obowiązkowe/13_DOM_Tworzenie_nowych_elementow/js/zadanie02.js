document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addBtn").addEventListener("click", function () {
        const table = document.getElementById("orders");
        const labels = document.querySelectorAll("input");
        let tr = document.createElement("tr");
        for (let i = 0; i < labels.length; i++) {
            let element = document.createElement("td");
            element.textContent = labels[i].value;
            tr.appendChild(element);
        }
        table.appendChild(tr);
    })
})