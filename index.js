	//Primera preentrega. Alejandro Nahuel Garcia
	//Para ver mi proyecto, he configurado un servidor local para ver mi pagina (Phyton) mediante la siguiente sentencia: python -m http.server
	//http://localhost:8000/

	// Declaro las variables con let
let numero1, numero2, operacion, resultado;

// Hago una funcion para realizar operaciones matemáticas
function calcularOperacion(num1, num2, operador) {
  switch (operador) {
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

// Solicito al usuario que ingrese dos números
numero1 = parseFloat(prompt("Ingrese el primer número:"));
numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Solicito al usuario que elija una operación
operacion = prompt("Elija una operación: suma, resta, multiplicacion, division");

// Validacion de la operación ingresada
if (['suma', 'resta', 'multiplicacion', 'division'].includes(operacion)) {
  // Calcular el resultado utilizando la función
  resultado = calcularOperacion(numero1, numero2, operacion);

  // Muestro el resultado en un alert
  alert("El resultado de la " + operacion + " es: " + resultado);

  // Imprimo la información en la consola
  console.log("Número 1: " + numero1);
  console.log("Número 2: " + numero2);
  console.log("Operación: " + operacion);
  console.log("Resultado: " + resultado);
} else {
  // Si la operación no es válida, se debe mostrar un mensaje de error
  alert("Operación no válida. Por favor, elija una operación válida.");
}
