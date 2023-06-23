// Obtener el formulario y el botón de envío
const form = document.getElementById('contact-section');
const submitButton = document.getElementById('submit-button');

// Agregar evento de submit al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Validar los campos del formulario
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Verificar si los campos están vacíos
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Por favor, complete todos los campos del formulario.');
  } else {
    // Enviar el formulario si está validado
    alert('El formulario se ha enviado correctamente.');
    // Limpiar los campos del formulario
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
});
