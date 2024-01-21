	//   Tercera preentrega. Alejandro Nahuel Garcia
  //   Archivo JS
  


function realizarOperacion(operacion, num1, num2) {
  switch (operacion) {
    case 'suma':
      return num1 + num2;
    case 'resta':
      return num1 - num2;
    case 'multiplicacion':
      return num1 * num2;
    case 'division':
      return num1 / num2;
    default:
      return 'Operación no válida';
  }
}

// Esta es la función de orden superior para interactuar con el array
function operacionConArray(array, operacion) {
  
  return array.map((element) => realizarOperacion(operacion, element, 2));
}

function main() {
  let numero1Input = document.getElementById("numero1");
  let numero2Input = document.getElementById("numero2");
  let operacionSelect = document.getElementById("operacion");
  let resultadoContainer = document.getElementById("resultado");
  
  let numero1 = parseFloat(numero1Input.value);
  let numero2 = parseFloat(numero2Input.value);
  let operacion = operacionSelect.value;
  
  if (['suma', 'resta', 'multiplicacion', 'division'].includes(operacion)) {
    let resultado = realizarOperacion(operacion, numero1, numero2);
    mostrarResultado(numero1, numero2, operacion, resultado);

    let arrayEjemplo = [1, 2, 3, 4, 5];
    let resultadoArray = operacionConArray(arrayEjemplo, operacion);
    console.log(`Resultado de operación con array: ${resultadoArray}`);
  } else {
    alert("Operación no válida. Por favor, elija una operación válida.");
  }
}

function mostrarResultado(num1, num2, operacion, resultado) {
  resultadoContainer.innerHTML = `El resultado de la ${operacion} es: ${resultado}`;
  console.log("Número 1: " + num1);
  console.log("Número 2: " + num2);
  console.log("Operación: " + operacion);
  console.log("Resultado: " + resultado);
}

function esNumeroValido(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

window.onload = function () {
  main();
};