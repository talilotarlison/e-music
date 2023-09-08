// Cancela envento de enviar dodos do Formulario
const form = document.getElementById('some-form');
form.addEventListener('submit', e => {
  e.preventDefault()
  console.log('Cancelamento do evento do formulario')
})

