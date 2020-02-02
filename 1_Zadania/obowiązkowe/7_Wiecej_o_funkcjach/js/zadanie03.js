console.log("Zadanie 3:");

Hello();

function Hello() {
    console.log("Cześć");
}
//nie zależnie od miejsca wywołania funkcja Hello() się realizuje, oznacza to, że
//kod jest czytelny "inteligentnie" kompilator po rozpoznaniu nazwy funkcji szuka jej w kodzie

hello();

var hello = function() {
    console.log('Witaj');
}

// wyrażenie funkcyjne jest możliwe do wywołania dopiero po jej zadeklarowaniu, ponieważ
// system traktuje je jako zmienną, które są ulokowane w pamięci przy zdefiniowaniu, a nie
// jak funkcje przy wywoływaniu

