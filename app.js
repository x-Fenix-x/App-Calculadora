const argv = require('process').argv;
const calc = require('./funciones/calculadora');

const operacion = argv[2];
const numA = +argv[3];
const numB = +argv[4];
let res = 0;

if (operacion === 'sumar' || operacion === '+') {
  res = calc.sumar(numA, numB);
} else if (operacion === 'restar' || operacion === '-') {
  res = calc.restar(numA, numB);
} else if (operacion === 'multiplicar' || operacion === '*') {
  res = calc.multiplicar(numA, numB);
} else if (operacion === 'dividir' || operacion === '/') {
  res = calc.dividir(numA, numB);
}

if (!isNaN(numA) && !isNaN(numB)) {
  console.log(`Resultado de ${operacion}: ${res}`);
} else {
  console.log('Error vuelve a intentarlo');
}
