//Zadanie 0

function distFromAvarage(tab) {
    let sum = 0;

    for (let i = 0; i < tab.length; i++)
        sum = sum + tab[i];

    sum = sum / tab.length;

    for (let i = 0; i < tab.length; i++)
        tab[i] = tab[i] - sum;

    return tab;
}

console.log(distFromAvarage([1, 2, 3, 4, 5, 6, 7]));
console.log(distFromAvarage([1, 1, 1, 1]));
console.log(distFromAvarage([2, 8, 3, 7]));

//Zadanie 1

let owoce = ["jabłka", "banany", "mango", "kokosy"];

console.log(owoce[0]);
console.log(owoce[owoce.length - 1]);
for (let i = 0; i < owoce.length; i++) {
    console.log(owoce[i]);
}

//Zadanie 3

function printTable(tab) {
    for (let i = 0; i < tab.length; i++)
        console.log(tab[i]);
}

printTable([2, 8, 3, 7]);

//Zadanie 4

function multiply(tab) {
    let multiply = 1;
    for (let i = 0; i < tab.length; i++)
        multiply = multiply * tab[i];

    return multiply;
}

console.log(multiply([1, 2, 3, 4, 5, 6, 7]));
console.log(multiply([1, 1, 1, 1]));
console.log(multiply([2, 8, 3, 7]));

//Zadanie 5

function getEvenAvarage(tab) {
    let sum = 0;
    let even = 0;

    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 == 0) {
            sum = sum + tab[i];
            even++;
        }
    }
    sum = sum / even;

    return sum;
}

console.log(getEvenAvarage([1, 2, 3, 4, 5, 6, 7]));
console.log(getEvenAvarage([1, 1, 1, 1]));
console.log(getEvenAvarage([2, 8, 3, 7, 4]));

//Zadanie 6

function sortArray(tab) {
    let sortedTab;

    sortedTab = tab.sort(function (a, b) { return a - b });

    return sortedTab;
}

console.log(sortArray([145, 11, 3, 64, 4, 6, 10]));

//Zadanie 7

function addArrays(tab1, tab2) {
    let sumTabs = [];
    let sumElements;
    let elements;

    if (tab1.length > tab2.length)
        elements = tab1.length;
    else if (tab2.length > tab1.length)
        elements = tab2.length;
    else
        elements = tab1.length;

    for (let i = 0; i < elements; i++) {
        if (tab1[i] === undefined)
            sumTabs.push(tab2[i]);
        else if (tab2[i] === undefined)
            sumTabs.push(tab1[i]);
        else {
            sumElements = tab1[i] + tab2[i];
            sumTabs.push(sumElements);
        }
    }
    return sumTabs;
}

console.log(addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17]));
console.log(addArrays([8, 3, 22], [1, 3, 2]));
console.log(addArrays([2, 3, 1, 5, 3, 5], [3, 1, 76, 1]));