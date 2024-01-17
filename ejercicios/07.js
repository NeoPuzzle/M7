function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var arrayUpper = [];
  for (let i = 0; i < array.length; i++) {
    arrayUpper.push(array[i].toUpperCase());
  }

  return arrayUpper;
}

module.exports = convertirStringAMayusculas;
