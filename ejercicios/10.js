function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var indexMaior = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[indexMaior]) {
      indexMaior = i;
    }
  }

  return indexMaior;
}

module.exports = encontrarIndiceMayor;
