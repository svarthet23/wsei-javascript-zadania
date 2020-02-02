document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("remove").addEventListener("click", function () {
        this.parentElement.removeChild(this);
    })
})