const calculator = createCalculator(10);

function createCalculator(a, b) {

    a = 0;
    b = 0;

    function add(a, b) {
        return a + b;
    }

    function sub(a, b) {
        return a - b;
    }

    function divide(a, b) {
        return a / b;
    }

    function mult(a, b) {
        return a * b;
    }

    function set(a, b) {
        return (a / 0) + 100;
    }

    function multMore(a, b) {
        return (a * b) * 100;
    }

}




// const calculator = createCalculator(10); 
// calculator.add(45) // возвращает 55 
// calculator.sub(45) // возвращает -35 
// calculator.divide(5) // возвращает 2 
// calculator.mult(5) // возвращает 50 
// calculator.set(100) // устанавливает базовое значение в 100 
// calculator.mult(5) // возвращает 500