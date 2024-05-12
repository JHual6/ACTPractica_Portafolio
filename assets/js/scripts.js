document.addEventListener("DOMContentLoaded", function() {

    var formulario = document.getElementById("formulario-contacto");

    // Envío de formulario a través de https://formsubmit.co/
    formulario.addEventListener("submit", function(event) {

        var nombre = document.getElementById("nombrecampo").value;
        var apellido = document.getElementById("apellidocampo").value;
        var mensaje = document.getElementById("detallescampo");
        mensaje.value += "\n\n" + nombre + " " + apellido;
    });
});

// Función para mostrar el contenido largo al presionar el botón
document.getElementById('mostrar-contenido').addEventListener('click', function() {
    document.getElementById('contenido-largo').style.display = 'block';
    this.style.display = 'none'; // Oculta el botón después de mostrar el contenido
});

