document.getElementById('desarrollo').addEventListener('submit', function(e) {
  e.preventDefault();

  /*parsefloat convertir ingreso de texto a número*/
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  const resultado = document.getElementById("resultado");

  /*Divisor debe ser distinto de 0*/
  if (a == 0) {
    resultado.textContent = "El valor de 'a' no puede ser 0.";
   /*return para devolver el mensaje*/
    return;
  }

  // Calculo del determinante determinante
  const determinante = b * b - 4 * a * c;

  /*Determinante debe ser mayor o igual a cero para tener resultado*/
  if (determinante < 0) {
    resultado.textContent = "Determinante negativo";
     /*return para devolver el mensaje*/
    return;
  }

  // Math.sqrt se usa para el cálculo de la raíz cuadrada
  const x1 = (-b + Math.sqrt(determinante)) / (2 * a);
  const x2 = (-b - Math.sqrt(determinante)) / (2 * a);

  // Mostrar resultado
  resultado.textContent = `Las raíces son: x1 = ${x1} y x2 = ${x2}`;
});