//Zadanie 0a

let city = {
    capital: "Warszawa",
    population: 50000000,
    president: "Andrzej Duda",
    primeMinisters: ["Jarosław Kaczyński", "Donald Tusk"]
}

console.log("capital: " + city.capital + "\n"
    + "population: " + city.population + "\n"
    + "president: " + city.president + "\n"
    + "prime ministers: " + city.primeMinisters);

//Zadanie 0b

let timeMachine = {
    shape: "round",
    model: "newest",
    run(date, place) {
        return "Bzzzzzz! You moved to " + date + " in " + place;
    }
}

console.log("Shape: " + timeMachine.shape + "\n"
    + "model: " + timeMachine.model + "\n"
    + "run: " + timeMachine.run("10/04/2010", "Canary Islands"));

//Zadanie 1

let book = {
    title: "Lord of the Rings",
    author: "J. R. R. Tolkien",
    numberOfPages: 750
}

console.log("Title: " + book.title + "\n"
    + "author: " + book.author + "\n"
    + "number of pages: " + book.numberOfPages);

//Zadanie 2

let person = {
    name: "Jan",
    age: 67,
    sayHello() { return "Hello"; }
}

console.log("Name: " + person.name + "\n"
    + "age: " + person.age + "\n"
    + person.sayHello());

//Zadanie 3

let recipe = {
    title: "spaghetti",
    servings: 3
}

recipe.ingredients = ["nuddles", "meat", "canned sauce"];

console.log("Title: " + recipe.title + "\n"
    + "servings: " + recipe.servings + "\n"
    + "ingredients: " + recipe.ingredients);

//Zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist = false;

console.log(spoon);