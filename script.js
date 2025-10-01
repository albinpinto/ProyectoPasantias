// --- CONFIGURACIÓN Y CONSTANTES ---
// Tasa de interés fija: 4% mensual (0.04)
const TASA_INTERES_MENSUAL = 0.04; 
const COSTO_ENVIO = 10.00; // Costo fijo de envío

// --- FUNCIÓN PRINCIPAL DE LA CALCULADORA ---
function calcularCuotas() {
    // 1. Obtener los valores (input) del HTML usando sus IDs
    const precioBase = parseFloat(document.getElementById('precioProducto').value);
    const numCuotas = parseInt(document.getElementById('numCuotas').value);
    const incluirEnvio = document.getElementById('incluirEnvio').checked;
    const resultadoDiv = document.getElementById('resultadoCalculadora');

    // 2. Validación
    if (isNaN(precioBase) || precioBase <= 0 || isNaN(numCuotas) || numCuotas === 0) {
        resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, ingrese un precio y seleccione un número de cuotas válidos.</p>";
        return;
    }

    // 3. Lógica de Cálculo
    const interesTotalDecimal = TASA_INTERES_MENSUAL * numCuotas;
    const precioTotalConInteres = precioBase * (1 + interesTotalDecimal);
    
    // 4. Lógica del Envío
    let costoTotalFinal = precioTotalConInteres;
    let mensajeEnvio = "Envío: No Incluido.";

    if (incluirEnvio) {
        costoTotalFinal += COSTO_ENVIO;
        mensajeEnvio = `Envío Nacional: + $${COSTO_ENVIO.toFixed(2)}`;
    }

    // 5. Cálculo Final de la Cuota
    const cuotaMensual = costoTotalFinal / numCuotas;

    // 6. Mostrar el resultado (Output al HTML usando innerHTML)
    resultadoDiv.innerHTML = `
        <h3>Resultado de Financiamiento</h3>
        <p>Precio Base del Producto: <strong>$${precioBase.toFixed(2)}</strong></p>
        <p>Interés Total Aplicado: <strong>${(interesTotalDecimal * 100).toFixed(1)}%</strong></p>
        <p>${mensajeEnvio}</p>
        <hr>
        <h4>Precio Total a Financiar: $${costoTotalFinal.toFixed(2)}</h4>
        <p><strong>Valor de la Cuota Mensual (${numCuotas}x): $${cuotaMensual.toFixed(2)}</strong></p>
    `;
}
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