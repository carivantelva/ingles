function startGame(group) {
  // Verificar si se ha cambiado el grupo de verbos
  if (currentGroup !== group) { // Si el grupo actual es diferente al grupo proporcionado
    currentGroup = group; // Actualizar el grupo actual al grupo proporcionado
    usedVerbs = []; // Reiniciar la lista de verbos utilizados, ya que se cambió el grupo
  }

  var verbGroup; // Variable para almacenar el grupo de verbos correspondiente al grupo proporcionado
  const gruposVerbos = { // Objeto que mapea grupos de verbos a variables correspondientes
    group1: grupo1,
    group2: grupo2,
    group3: grupo3,
    group4: grupo4,
    group5: grupo5,
    group6: grupo6,
    group7: grupo7,
    group8: grupo8,
    group9: grupo9,
    group10: grupo10,
    group11: grupo11,
    group12: grupo12,
    group13: grupo13,
    group14: grupo14,
    group15: grupo15,
    group16: grupo16,
    group17: grupo17,
    group18: grupo18,
    group19: grupo19,
    group20: grupo20,
    group21: grupo21,
    group22: grupo22,    
    group23: grupo23,
    group24: grupo24,

    group26: grupo26,
    group28: grupo28,
    group29: grupo29,
  };

  // Verificar si el grupo proporcionado existe en el objeto 'gruposVerbos'
  if (group in gruposVerbos) { // Si la clave 'group' existe en el objeto 'gruposVerbos'
    verbGroup = gruposVerbos[group]; // Obtener el grupo de verbos correspondiente al grupo proporcionado
  } else {
    return; // Si no se proporciona un grupo válido, salir de la función
  }

  // Verificar si se han utilizado todos los verbos del grupo
  if (usedVerbs.length === verbGroup.length) { // Si la cantidad de verbos utilizados es igual a la cantidad de verbos en el grupo
    usedVerbs = []; // Reiniciar la lista de verbos utilizados, ya que se han utilizado todos los verbos
    alert("se acabo la lista disponibles en este grupo."); // Mostrar una alerta indicando que se han agotado los verbos disponibles en el grupo
    return; // Salir de la función
  }

  // Filtrar los verbos disponibles del grupo actual que no se han utilizado
  var availableVerbs = verbGroup.filter(function (verb, index) {
    return !usedVerbs.includes(index); // Filtrar los verbos que no se encuentran en la lista de verbos utilizados
  });

  console.log("Lista Verbos :", verbGroup); // Mostrar en la consola los verbos utilizados en el grupo

  if (availableVerbs.length === 0) { // Si no hay verbos disponibles en el grupo actual
    console.error("Se han utilizado todos los verbos del grupo"); // Mostrar un mensaje de error indicando que se han utilizado todos los verbos del grupo
    return; // Salir de la función
  }

  // Seleccionar aleatoriamente un verbo de la lista de verbos disponibles
  var randomIndex = Math.floor(Math.random() * availableVerbs.length); // Generar un índice aleatorio dentro del rango de la longitud de los verbos disponibles
  currentVerb = availableVerbs[randomIndex]; // Seleccionar el verbo correspondiente al índice aleatorio



  // Mostrar la pregunta correspondiente en la interfaz del juego
  questionElement.textContent = currentVerb.english; // Asignar el valor del verbo actual a un elemento en la interfaz de juego (supuestamente existe una variable llamada questionElement)
  answerElement.value = ""; // Limpiar el valor de la respuesta en la interfaz de juego (supuestamente existe una variable llamada answerElement)


  
  usedVerbs.push(verbGroup.indexOf(currentVerb)); // Agregar el índice del verbo utilizado a la lista de verbos utilizados

  console.log("Verbos avalibles:", availableVerbs); // Mostrar en la consola los verbos disponibles en la lista
}
