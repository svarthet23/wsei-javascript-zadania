var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]

console.log("Zadanie 5:");

for (var i=0; i<animals.length; i++) {
    var animal = "";
    var objectCheck = false;

    for(var el in animals[i]) {
        objectCheck = Array.isArray(animals[i][el]);
        if(objectCheck === true) {
            var subElements = animals[i][el];
            for(var j=0; j<subElements.length; j++) {
                for(var subEl in subElements[j])
                    animal += subElements[j][subEl] + " ";
            }
        } else
            animal += animals[i][el] + " ";
    }
    console.log(animal);
}
