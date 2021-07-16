const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
});

function maintenanceAlert() {
    swalWithBootstrapButtons.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Esta sección está en mantenimiento. ¡Vuelve más tarde!',
        confirmButtonText: 'Cerrar',
        footer: '<button class="btn underline-hover" onclick="problemAlert()">¿Por qué tengo este problema?</button>'
    });
}

function confirmRegister() {
    swalWithBootstrapButtons.fire({
        icon: 'success',
        title: '¡Registrado correctamente!',
        html: '<p>Gracias por registrarte en Koria.</p><p class="text-center">¡Descarga la aplicación e inicia sesión para comenzar a utilizarla!</p>',
        confirmButtonText: 'Cerrar'
    });
}

function problemAlert() {
    swalWithBootstrapButtons.fire({
        html: '<p>Este sitio web fue creado para la materia <b>Visualización e Interfaces</b>, de la UNLaM.</p><p>El sitio solo es maquetado, no hay funcionalidad, y muchas secciones no fueron creadas ya que solo se pidieron 3 interfaces para el sitio web.</p>',
        imageUrl: '/assets/img/unlam.png',
        imageWidth: 140,
        imageHeight: 140,
        imageAlt: "Imagotipo de la UNLaM",
        confirmButtonText: '¡Muy bien!'
    });
}