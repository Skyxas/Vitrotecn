document.addEventListener("DOMContentLoaded", function() {
    console.log("¡Página cargada y lista!");

    // Seleccionar el botón y el párrafo
    const boton = document.getElementById('cambiar-contenido');
    const parrafo = document.getElementById('sobre-nosotros');

    // Añadir un evento de clic al botón
    boton.addEventListener('click', function() {
        parrafo.textContent = "Vitrotecn es líder en soluciones innovadoras para el cultivo de plantas.";
        alert("El contenido ha sido cambiado.");
    });

    // Seleccionar enlaces del menú y secciones
    const inicioLink = document.getElementById('inicio-link');
    const serviciosLink = document.getElementById('servicios-link');
    const contactoLink = document.getElementById('contacto-link');

    const inicioSection = document.getElementById('inicio');
    const serviciosSection = document.getElementById('servicios');
    const contactoSection = document.getElementById('contacto');

    // Función para mostrar una sección y ocultar las otras
    function mostrarSeccion(seccion) {
        inicioSection.style.display = 'none';
        serviciosSection.style.display = 'none';
        contactoSection.style.display = 'none';
        
        seccion.style.display = 'block';
    }

    // Añadir eventos de clic a los enlaces
    inicioLink.addEventListener('click', function() {
        mostrarSeccion(inicioSection);
    });

    serviciosLink.addEventListener('click', function() {
        mostrarSeccion(serviciosSection);
    });

    contactoLink.addEventListener('click', function() {
        mostrarSeccion(contactoSection);
    });
});
