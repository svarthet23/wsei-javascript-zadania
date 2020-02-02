
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//Zadanie 0

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

function checkArray(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        let checked = true;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 != 0)
                checked = false;
        }
        newArr.push(checked);
    }
    return newArr;
}

console.log(checkArray(arr));

//Zadanie 1

console.log(task1Array[2][1]);
console.log(task1Array[1].length);
console.log(task1Array[3][1]);

//Zadanie 2
console.log("Zadanie 2:");

console.log("Podpunkt 1:")
for (var i = 0; i < task2Array.length; i++)
    console.log(task2Array[i]);

console.log("Podpunkt 2:");
for (var i = 0; i < task2Array.length; i++)
    console.log(task2Array[i].length);

console.log("Podpunkt 3:");
for (var i = 0; i < task2Array.length; i++) {
    for (var y = 0; y < task2Array[i].length; y++)
        console.log(task2Array[i][y]);
}

//Zadanie 3

function print2DArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var y = 0; y < arr[i].length; y++)
            console.log(arr[i][y]);
    }
}

//Zadanie 4

var Arr2D = [
    [1, 3, 4],
    ["2", 2, "Dwa"],
    ["czerwony", "zielony", "niebieski", "fioletowy", "łososiowy"]
]

console.log(print2DArray(Arr2D));

//Zadanie 5

function create2DArray(rows, columns) {
    var newArray = new Array();
    var tempArray = new Array();
    var counter = 1;

    for (var i = 0; i < rows; i++) {
        for (var y = 0; y < columns; y++) {
            tempArray.push(counter);
            counter++;
        }
        newArray.push(tempArray);
        tempArray = [];
    }

    return newArray;
}

console.log(create2DArray(4, 4));
