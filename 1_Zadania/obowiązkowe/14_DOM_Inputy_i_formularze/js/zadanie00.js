document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementsByClassName("btn")[0];
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const pass1 = document.getElementById("pass1");
    const pass2 = document.getElementById("pass2");
    const agree = document.getElementById("agree");
    const error = document.getElementsByClassName("error-message")[0];

    const pattern = /^[\w\.]+@+[a-zA-Z_]/;

    btn.addEventListener("click", (evt) => {
        let verification = email.value.match(pattern);
        console.log(pass1.value);
        if (verification == null) {
            error.innerHTML = "Email musi posiadać znak @";
            evt.preventDefault();
        };
        if (name.value.length < 6) {
            error.innerHTML = "Twoje imię jest za krótkie";
            evt.preventDefault();
        };
        if (surname.value.length < 6) {
            error.innerHTML = "Twoje nazwisko jest za krótkie";
            evt.preventDefault();
        };
        if (pass1.value !== pass2.value || pass1.value == null || pass1.value == "") {
            error.innerHTML = "Hasła nie są takie same lub puste";
            evt.preventDefault();
        };
        if (agree.checked == false) {
            error.innerHTML = "Musisz zaakceptować warunki";
            evt.preventDefault();
        }
    })
})