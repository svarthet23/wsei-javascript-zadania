document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("box").addEventListener("mousemove", mousePosition);

    function mousePosition(e) {
        console.log(e);
        document.getElementById("globalX").textContent = e.pageX;
        document.getElementById("globalY").textContent = e.pageY;
        document.getElementById("localX").textContent = e.offsetX;
        document.getElementById("localY").textContent = e.offsetY;
    }
})