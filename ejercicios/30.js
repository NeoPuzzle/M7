function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  var veces = {};

  for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];

    if (veces[element] !== undefined) {
      return element;
    } else {
      veces[element] = 1;
    }
    
  }

  return null;
}

module.exports = encontrarElementoRepetido;