function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
    var arrayDupplica = [];

    for (let i = 0; i < array.length; i++) {
        var element = array[i] * 2;
        arrayDupplica.push(element);
    }
    
    return arrayDupplica;
}

module.exports = duplicarElementos;
