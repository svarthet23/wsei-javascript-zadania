document.addEventListener("DOMContentLoaded", () => {
    const type = document.getElementById("type");
    const name = document.getElementById("name");

    let firstNumber;
    name.addEventListener("input", () => {
        if (name.value.length === 1) {
            firstNumber = name.value;
        }
        switch (firstNumber) {
            case "4":
                type.innerHTML = "Visa";
                if (name.value.length >= 13 && name.value.length <= 16)
                    name.style.borderColor = "green";
                else
                    name.style.borderColor = "red";
                break;
            case "5":
                type.innerHTML = "MasterCard";
                if (name.value.length == 16)
                    name.style.borderColor = "green";
                else
                    name.style.borderColor = "red";
                break;
            case "3":
                if (name.value[1] == 4 || name.value[1] == 7) {
                    type.innerHTML = "American Express";
                    if (name.value.length == 15)
                        name.style.borderColor = "green";
                    else
                        name.style.borderColor = "red";
                }
                break;
            default:
                type.innerHTML = "";
                name.style.borderColor = "red";
                break;
        }
    })
})