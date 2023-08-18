// Elementos de la página
var questionElement = document.getElementById("question");
var answerElement = document.getElementById("answer");
var resultElement = document.getElementById("result");
var aciertosElement = document.getElementById("aciertos");
var errorElement = document.getElementById("error");

var currentVerb;
var aciertos = 0;
var error = 0;
var usedVerbs = [];
var currentGroup;




function refreshPage() {
  window.location.reload();
}

/* <!--con estas funciones se le cambia el estado en style al div Ejem 'vocabulario' de none a block 
y se oculta el boton correspondiente ejem 'btn11' de block a none en donde btn11 es el nombre 
del boton que ejecuta esa accion-->*/
function mostrarVocab() {
  document.getElementById('vocabulario').style.display = 'block';
  document.getElementById('btngroup').style.display = 'none';
}

function mostrarverb() {
  document.getElementById('verbos').style.display = 'block';
  document.getElementById('btngroup').style.display = 'none';
}

function mostrarAdver() {
  document.getElementById('adver').style.display = 'block';
  document.getElementById('btngroup').style.display = 'none';
}


//funcion para mostrar vista
function mostrar() //con esta funcion muestro la vista oculta grupos
{
  document.getElementById('verbos').style.display = 'block';
  //esta linea me muestra la vista , le cambia en style de none a block
  document.getElementById('idioma').style.display = 'none';
  //esta linea me oculta el boton con id ingles cambia de block a none

  
}

function mostrarVista() {
  var vistaElement = document.getElementById("juego");
  vistaElement.style.display = "block";

  var grupos = [
    "grupo1",
    "grupo2",
    "grupo3",
    "grupo4",
    "grupo5",
    "grupo6",
    "grupo7",
    "grupo8",
    "grupo9",
    "grupo10",
    "grupo11",
    "grupo12",
    "grupo13",
    "grupo14",
    "grupo15",
    "grupo16",
    "grupo17",
    "grupo18",
    "grupo19",
    "grupo20",
    "grupo21",    
    "grupo22",
    "grupo23",
    "grupo24",
    "grupo26",
    
    "grupo28",
    "grupo29",

  ];

  grupos.forEach(function(grupo) {
    var grupoElement = document.getElementById(grupo);
    grupoElement.style.display = "none";
  });
}


function jugarGrupo(grupo) {
  mostrarVista();
  startGame(grupo);


}



// Función para comprobar la respuesta
function checkAnswer() {
  var userAnswer = answerElement.value.toLowerCase();

  //aqui quito las tildes de las vocales solamente, asi no me quita la letra ñ ctv
  userAnswer = userAnswer.replace(/[áéíóú]/g, function (match) {
    return match.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  });

  var correctAnswers = currentVerb.meanings.map(function (meaning) {
    return meaning.toLowerCase();
  });
  // coloca el cursor en el campo de respuesta despues del primer comprobar
  answerElement.focus();

  if (correctAnswers.includes(userAnswer.trim())) {
    resultElement.textContent = "¡Correcto! El significado es: " + correctAnswers.join(", ");
    aciertos++;
    aciertosElement.textContent = aciertos;
  } else {
    resultElement.textContent = "Incorrecto. El significado correcto es: " + correctAnswers.join(", ");
    error++;
    errorElement.textContent = error;
  }

  setTimeout(function () {
    resultElement.textContent = "";
    startGame(currentGroup);
  }, 4000);
}


