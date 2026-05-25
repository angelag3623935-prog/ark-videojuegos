// script.js

document.querySelector('.formulario').addEventListener('submit', function(e){

    e.preventDefault();

    const nombre = document.querySelector('input[type="text"]').value;

    const correo = document.querySelector('input[type="email"]').value;

    const descripcion = document.querySelector('textarea').value;

    const mensaje =
    `Hola ARK Video Juegos.%0A%0A` +
    `Nombre: ${nombre}%0A` +
    `Correo: ${correo}%0A` +
    `Reparación solicitada: ${descripcion}`;

    window.open(
        `https://wa.me/50258131487?text=${mensaje}`,
        '_blank'
    );

});