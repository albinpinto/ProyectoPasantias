// --- FUNCIÓN DE TOGGLE PARA LOS BOTONES DE FINANCIAMIENTO ---
// Permite abrir y cerrar el mensaje de cada entidad.

function alternarMensaje(mensajeId) {
    const mensajeActual = document.getElementById(mensajeId);

    // 1. Ocultar todos los contenedores de información
    const mensajes = document.querySelectorAll('.info-financiamiento');
    mensajes.forEach(mensaje => {
        // Ocultamos las otras secciones, excepto la que queremos abrir/cerrar.
        if (mensaje.id !== mensajeId) {
             mensaje.style.display = 'none';
        }
    });

    // 2. Toggle: Si está visible, lo ocultamos; si está oculto, lo mostramos
    if (mensajeActual.style.display === 'block') {
        mensajeActual.style.display = 'none';
    } else {
        mensajeActual.style.display = 'block';
    }
}
// Asegúrate de que esta función exista junto con mostrarSede() y alternarContenido().

// --- FUNCIONALIDAD PARA MOSTRAR CONTACTO DE SEDES (VERSION MEJORADA) ---

function mostrarSede(sedeId) {
    const sedeActual = document.getElementById(sedeId);

    // 1. Verificar si la sede solicitada ya está visible
    if (sedeActual.style.display === 'block') {
        // Si está visible, la ocultamos (cerrar)
        sedeActual.style.display = 'none';
        return; // Detenemos la función aquí
    }

    // 2. Si no estaba visible, primero ocultamos todas las demás sedes
    const sedes = document.querySelectorAll('.info-sede');
    sedes.forEach(sede => {
        sede.style.display = 'none';
    });

    // 3. Y finalmente, mostramos la sede solicitada (abrir)
    sedeActual.style.display = 'block';
}
// --- FUNCIONALIDAD PARA MENÚS DESPLEGABLES (ACORDEÓN) EN PRODUCTOS ---

function alternarContenido(contenidoId) {
    const contenido = document.getElementById(contenidoId);
    
    // Si el contenido ya está visible (display: block), lo ocultamos (cerrar).
    if (contenido.style.display === 'block') {
        contenido.style.display = 'none';
    } else {
        // Si está oculto, lo mostramos (abrir).
        contenido.style.display = 'block';
    }
}