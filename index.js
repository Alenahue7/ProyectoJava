	//   Segunda preentrega. Alejandro Nahuel Garcia
  //   Archivo JS


// Esta es la función de orden superior para las operaciones
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

// Esta es la función principal
function main() {
  let numero1 = obtenerNumero("Ingrese el primer número:");
  let numero2 = obtenerNumero("Ingrese el segundo número:");
  let operacion = prompt("Elija una operación: suma, resta, multiplicacion, division");

  if (['suma', 'resta', 'multiplicacion', 'division'].includes(operacion)) {
    let resultado = realizarOperacion(operacion, numero1, numero2);
    mostrarResultado(numero1, numero2, operacion, resultado);
    
    // Este es un ejemplo de uso de la función de orden superior con un array
    let arrayEjemplo = [1, 2, 3, 4, 5];
    let resultadoArray = operacionConArray(arrayEjemplo, operacion);
    console.log(`Resultado de operación con array: ${resultadoArray}`);
  } else {
    alert("Operación no válida. Por favor, elija una operación válida.");
  }
}

// Función para validar y obtener un número del usuario
function obtenerNumero(mensaje) {
  let input;
  do {
    input = prompt(mensaje);
  } while (!esNumeroValido(input));
  return parseFloat(input);
}

// Función para mostrar el resultado en un alert y en la consola
function mostrarResultado(num1, num2, operacion, resultado) {
  alert("El resultado de la " + operacion + " es: " + resultado);
  console.log("Número 1: " + num1);
  console.log("Número 2: " + num2);
  console.log("Operación: " + operacion);
  console.log("Resultado: " + resultado);
}

// Función para validar si es un número válido
function esNumeroValido(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

// Llamo a la función principal
main();

