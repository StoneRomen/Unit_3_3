// Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. Приклад:
// 10369
// 1 0 3 6 9

const number = 10369;
const numberString = number.toString();
const numberSpace = numberString.split('').join(' ');

console.log(numberSpace);