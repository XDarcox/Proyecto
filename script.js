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
});
