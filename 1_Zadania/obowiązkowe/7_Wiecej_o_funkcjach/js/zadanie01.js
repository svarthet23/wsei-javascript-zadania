
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//zdefiniowanie funkcji sortArray()
function sortArray() {

    //zdefiniowanie tablicy points
    var points = [41, 3, 6, 1, 114, 54, 64];

    //metoda sortująca porównuje ze sobą dwa elementy tablicy - wybrany i następny
    points.sort(function (a, b) {
        //komenda zwraca różnicę między wybranym elementem i następnym, według której algorytm decyduje, który element jest większy
        return a - b;
    });

    //funkcja zwraca posortowaną tablicę
    return points;
}

//wywołanie funkcji sortującej
sortArray();
