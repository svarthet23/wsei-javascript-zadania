function countHello(number) {
    let counter = 1;
    let interval = setInterval(function loop() {
        if (counter === number) {
            clearInterval(interval);
        }
        console.log("Hello " + counter);
        counter++;
    }, 1000);
}

let number = 10;
countHello(number);