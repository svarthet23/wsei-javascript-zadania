document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    //Zadanie 0

    const elements = document.getElementsByClassName('title');

    function getDataAnimation(elements) {
        let newEl = elements[0];
        newEl = newEl.getAttribute('data-animation');

        return newEl;
    }
    console.log(getDataAnimation(elements));

    //Zadanie 1

    const elementById1 = document.getElementById('home');
    console.log(elementById1);
    const elementById2 = document.querySelector('#home');
    console.log(elementById2);

    const elementByLi = document.getElementsByTagName('li')[0];
    console.log(elementByLi);

    const elementByClass = document.getElementsByClassName('block')[0];
    console.log(elementByClass);

    //Zadanie 2

    const liElementsInNav = document.getElementsByTagName('nav')[0].getElementsByTagName('li');
    console.log(liElementsInNav);

    const divs = document.getElementsByTagName('div');
    let paragraphs = [];
    for (let i = 0; i < divs.length; i++) {
        let paragraphInDiv = divs[i].getElementsByTagName('p');
        for (let j = 0; j < paragraphInDiv.length; j++)
            paragraphs.push(paragraphInDiv[j]);
    }
    console.log(paragraphs);

    const articleDivs = document.getElementsByTagName('article')[0].querySelectorAll('div');
    console.log(articleDivs);

    //Zadanie 3

    const articleInFirst = document.querySelector('article.first').querySelectorAll('h1');
    console.log(articleInFirst.length);

});
