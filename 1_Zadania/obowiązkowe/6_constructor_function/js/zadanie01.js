var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) { //added this
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname; //added this
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

console.log("Zadanie 1:");
var Robot1 = new Robot("Bob");
Robot1.isFunctional = false;
Robot1.sayHi("Jan");
Robot1.fixIt();
Robot1.sayHi("Kazimierz");
Robot1.changeName("Rob");
console.log(Robot1.name);
