# Proyecto
CALCULADORA

Calculadora de Precio Total
Precio (sin impuestos) €=(euros)
Ingrese precio
Porcentaje de impuestos (%)


<img width="954" height="745" alt="CALCULADORA" src="https://github.com/user-attachments/assets/37577f07-707b-4e60-8448-364510d45b91" />



// script.js

// Function to calculate total price with taxes and possible discount
function calcularPrecioTotal(precio, porcentajeImpuestos) {
  let precioConDescuento = precio;
  if (precio > 100) {
    precioConDescuento = precio * 0.9; // 10% discount
  }
  const total = precioConDescuento * (1 + porcentajeImpuestos / 100);
  return total;
}

// Handle form submission
document.getElementById('price-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const precioInput = document.getElementById('price');
  const impuestoInput = document.getElementById('tax');
  const resultadoDiv = document.getElementById('result');

  const precio = parseFloat(precioInput.value);
  const porcentajeImpuestos = parseFloat(impuestoInput.value);

  if (isNaN(precio) || isNaN(porcentajeImpuestos)) {
    resultadoDiv.textContent = 'Por favor, ingrese valores numéricos válidos.';
    resultadoDiv.style.color = '#721c24'; // Red text on error
    resultadoDiv.style.background = '#f8d7da'; // Light red background
    resultadoDiv.style.border = '1px solid #f5c6cb';
    return;
  }

  const total = calcularPrecioTotal(precio, porcentajeImpuestos);

  resultadoDiv.textContent = `El valor total a pagar es: €${total.toFixed(2)}`;
  resultadoDiv.style.color = '#155724'; // Reset to green text
  resultadoDiv.style.background = '#d4edda'; // Reset to green background
  resultadoDiv.style.border = '1px solid #c3e6cb';





  EJEMPLO
  Precio (sin impuestos) €=(euros)
1500
Porcentaje de impuestos (%)
10
El valor total a pagar es: €1485.00
