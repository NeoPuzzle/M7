function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var arrayPar = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayPar.push(array[i]);
    }
  }
  
  return arrayPar;
}

module.exports = filtrarNumerosPares;
