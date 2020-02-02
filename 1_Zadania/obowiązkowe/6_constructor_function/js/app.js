//Zadanie 0

function Basket() {
    products = [],
        prices = [],
        sum = 0,
        this.addProduct = function (name, number) {
            products.push(name);
            prices.push(number);
            sum = sum + number;
        },
        this.showBasket = function () {
            for (var i = 0; i < products.length; i++)
                console.log("produkt: " + products[i] + " cena: " + prices[i]);

            console.log("Suma: " + sum);
        }
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor", 10);
aliceBasket.addProduct("arbuz", 40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun", 50);
bruceBasket.addProduct("tofu", 20);
bruceBasket.showBasket();


