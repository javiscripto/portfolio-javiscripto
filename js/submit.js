const form = document.querySelector("#formulario-contacto");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData={
        nombre: form.nombre.value,
        correo: form.correo.value,
        asunto: form.asunto.value,
        mensaje: form.mensaje.value
    };

    fetch("http://localhost:3000/send-email", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Mensaje enviado: ${data.message}`);
        alert('Mensaje enviado correctamente');
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar el mensaje');
    });

});