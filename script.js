'use strict'

// // //
// Call average calculator #2

let operator;
let amount;
let nextNum;
let arrOperands = [];
let result;

// #1 check operator
do {
    operator = prompt("Plz, make your choice: add'+', sub'-', mult'/', div'*'");
  } while ( 
    operator !== 'add' &&
    operator !== 'sub' &&
    operator !== 'mult' &&
    operator !== 'div'
);
console.log (operator);

//#2 check amount of operands 
do {
    amount = prompt('Plz, make you need operands (1-5)');
  } while (
        amount <= 0 ||
        amount >= 6 ||
        isNaN(amount) && 
        amount === ''
    );

amount = Number(amount);
console.log (amount);


//#3 enter & check operators 
do {
    alert('Plz, enter operands by edicher');

    for (nextNum = 0; nextNum < amount; nextNum++) {            
        arrOperands.push(+prompt('Введите число №' + (nextNum+1)));
    }
    
} while (
    isNaN(nextNum) && 
    nextNum === ''
);

console.log('Список: ' + arrOperands); 

// #4 Math operations
switch (operator) {
    case 'add':
        result = arrOperands.reduce((sum, current) => sum + current);
        break;
    case 'sub':
        result = arrOperands.reduce((sub, current) => sub - current);
        break;
    case 'mult':
        result = arrOperands.reduce((mult, current) => mult * current);
        break;
    case 'div':
        result = arrOperands.reduce((div, current) => div / current);
        break;
}

alert(result);
