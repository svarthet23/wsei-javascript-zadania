/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//zdefiniowanie funkcji jeden()
function jeden() {

    //zdefiniowanie zmienna1 wewnątrz funkcji jeden()
    var zmienna1 = 1;

    //zdefiniowanie funkcji dwa()
    function dwa() {

        //wywołanie zdefiniowanej wcześniej zmienna1 (funkcja ma dostęp do zmiennych funkcji do której należy)
        console.log(zmienna1);

        //zdefiniowanie zmienna2 wewnątrz funkcji dwa()
        var zmienna2 = 3;
    }

    //wywołanie funkcji dwa()
    dwa();

    //próba wywołania zmienna2 (funkcja jeden() nie ma dostępu do zmiennej w funkcji zdefiniowanej wewnątrz)
    console.log(zmienna2)
}

//wywołanie funkcji jeden()
jeden()