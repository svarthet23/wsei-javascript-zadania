document.addEventListener("DOMContentLoaded", function () {
    var a = document.getElementById("a");
    var b = document.getElementById("b");

    console.log("obiekt document: ", this);

    a.addEventListener("click", function (event) {
        console.log("a: ", this);
    });

    b.addEventListener("click", function (event) {
        console.log("b: ", this);

        function innerFuncOne() {
            console.log("innerFuncOne: ", this);
        }
        innerFuncOne();

    });
})
