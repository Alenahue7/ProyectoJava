	//Segunda preentrega. Alejandro Nahuel Garcia
	
  <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora</title>
</head>
<body>
  <script>
    // Declaro un objeto para manejar la calculadora
    let calculadora = {
      numero1: 0,
      numero2: 0,
      operacion: "",
      resultado: 0,

      // Este es el método para realizar operaciones matemáticas
      calcularOperacion: function() {
        switch (this.operacion) {
          case 'suma':
            return this.numero1 + this.numero2;
          case 'resta':
            return this.numero1 - this.numero2;
          case 'multiplicacion':
            return this.numero1 * this.numero2;
          case 'division':
            return this.numero1 / this.numero2;
          default:
            return 'Operación no válida';
        }
      },

      // Este es el metodo para solicitar números al usuario
      pedirNumeros: function() {
        this.numero1 = this.obtenerNumero("Ingrese el primer número:");
        this.numero2 = this.obtenerNumero("Ingrese el segundo número:");
      },

      // Este es el metodo para solicitar la operación al usuario
      pedirOperacion: function() {
        this.operacion = prompt("Elija una operación: suma, resta, multiplicacion, division");
      },

      // Este es el metodo para mostrar el resultado en un alert y en la consola
      mostrarResultado: function() {
        alert("El resultado de la " + this.operacion + " es: " + this.resultado);
        console.log("Número 1: " + this.numero1);
        console.log("Número 2: " + this.numero2);
        console.log("Operación: " + this.operacion);
        console.log("Resultado: " + this.resultado);
      },

      // Este es el metodo para validar y obtener un número del usuario
      obtenerNumero: function(mensaje) {
        let input;
        do {
          input = prompt(mensaje);
        } while (!this.esNumeroValido(input));
        return parseFloat(input);
      },

      // Función para validar si es un número válido
      esNumeroValido: function(valor) {
        return !isNaN(parseFloat(valor)) && isFinite(valor);
      }
    };

    // Solicito al usuario que ingrese números y elija una operación
    calculadora.pedirNumeros();
    calculadora.pedirOperacion();

    // Validación de la operación ingresada
    if (['suma', 'resta', 'multiplicacion', 'division'].includes(calculadora.operacion)) {
      // Ahora calculo el resultado utilizando el método de la calculadora
      calculadora.resultado = calculadora.calcularOperacion();

      // Aqui muestro el resultado utilizando el método de la calculadora
      calculadora.mostrarResultado();
    } else {
      // Si la operación no es válida, se debe mostrar un mensaje de error
      alert("Operación no válida. Por favor, elija una operación válida.");
    }
  </script>
</body>
</html>



