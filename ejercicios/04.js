function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  
    var element = Math.floor(Math.random() * array.length);
    
  

  return array[element];
}

module.exports = obtenerElementoAleatorio;
