function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var multiplo = 0;
  var resultArray = [];

  while (multiplo <= 10) {
    var result = multiplo * 6;
    resultArray.push(result);
    multiplo++
  }
  return resultArray
}

module.exports = tablaDelSeis;
