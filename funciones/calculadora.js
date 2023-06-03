module.exports = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
  multiplicar: (a, b) => {
    return a !== 0 || b !== 0 ? a * b : 0;
  },
  dividir: (a, b) => {
    return a !== 0 && b !== 0 ? a / b : 'No se puede dividir por cero';
  },
};
