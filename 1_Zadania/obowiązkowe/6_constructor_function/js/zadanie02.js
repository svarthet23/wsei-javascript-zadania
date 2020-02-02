console.log("Zadanie 2:");

function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2
    var operations = [];
    this.add = function(num1, num2) {
        var result = num1+num2;
        var text = "added "+num1+" to "+num2+" got "+result;
        operations.push(text);
        return result;
    }
    this.multiply = function(num1, num2) {
        var result = num1*num2;
        var text = "multiplaied "+num1+" with "+num2+" got "+result;
        operations.push(text);
        return result;
    }
    this.substract = function(num1, num2) {
        var result = num1-num2;
        var text = "substracted "+num1+" from "+num2+" got "+result;
        operations.push(text);
        return result;
    }
    this.divide = function(num1, num2) {
        var result = num1/num2;
        var text = "divided "+num1+" by "+num2+" got "+result;
        operations.push(text);
        return result;
    }
    this.printOpearations = function() {
        for(var i=0; i<operations.length; i++)
            console.log(operations[i]);
    }
    this.clearOperations = function() {
        operations = [];
    }
}

var cal1 = new Calculator();
console.log(cal1.add(2, 2));
console.log(cal1.substract(4, 2));
console.log(cal1.multiply(2, 2));
console.log(cal1.divide(4, 2));
cal1.printOpearations();
