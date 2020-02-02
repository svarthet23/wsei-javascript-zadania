document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //Zadanie 0

    function getDataInfo(elements) {
        var newArray = [];

        for (var i = 0; i < elements.length; i++)
            newArray.push(elements[i].getAttribute(elements[i].getAttributeNames('data')));

        return newArray;
    }
    console.log(getDataInfo(links));

    //Zadanie 1

    var items = [];
    var itemsWithChild = [];
    items.push(homeElement, childElements, banner, blocks, links);

    for (var i = 0; i < items.length; i++) {
        if (items[i].length !== undefined) {
            for (var j = 0; j < items[i].length; j++) {
                itemsWithChild.push(items[i][j]);
                console.log("item: " + items[i][j] + " has class: " + items[i][j].className
                    + " and tag: " + items[i][j].tagName);
            }
        }
        else {
            itemsWithChild.push(items[i]);
            console.log("item: " + items[i] + " has class: " + items[i].className
                + " and tag: " + items[i].tagName);
        }
    }
    console.log(itemsWithChild);

    //Zadanie 2

    for (var i = 0; i < blocks.length; i++) {
        console.log(blocks[i].innerHtml);
        console.log(blocks[i].outerHTML);
        blocks[i].innerHtml = "Nowa zawartość diva o klasie blocks";
        console.log(blocks[i].innerHtml);
    }
    //InnerHTML daje dostęp do zawartości tekstowej diva
    //OuterHTML za to do skryptu diva

    //Zadanie 3

    var el = document.getElementById('mainFooter');

    function getId(element) {
        return element.id;
    }
    console.log(getId(el));

    //Zadanie 4

    function getTags(elements) {
        var tags = [];
        for (var i = 0; i < elements.length; i++)
            tags.push(elements[i].tagName);

        return tags;
    }
    console.log(getTags(childElements));

    //Zadanie 5

    function getClassInfo(element) {
        var classes = [];
        classes = element.classList;
        return classes;
    }

    console.log(getClassInfo(banner));

    //Zadanie 6

    var liElements = document.getElementsByTagName('nav')[0].querySelectorAll('li');

    function setDataDirection(elements) {
        for (var i = 0; i < elements.length; i++) {
            if (!elements[i].getAttribute('data-direction')) {
                elements[i].setAttribute('data-direction', 'top');
            }
        }
        return elements;
    }
    //setDataDirection(liElements);
});
