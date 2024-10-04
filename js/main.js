// Obtener parámetro de la url
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get(name));
    return urlParams.get(name);
};

// Cargar el JSON y ejecutar la lógica
function cargarInvitados() {
    fetch('db/lista.json')  // Ruta al archivo JSON
        .then(response => response.json())
        .then(data => {
            const familiaParam = getUrlParameter('familia');
            mostrarBienvenida(familiaParam, data.invitados);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

// Función para mostrar la bienvenida
function mostrarBienvenida(familiaParam, invitados) {
    const familia = invitados.find(fam => fam.familia === familiaParam);

    if (familia) {
        const nombreInvitados = familia.invitados.join(", ");
        document.getElementById('bienvenida').innerText = `Bienvenidos ${nombreInvitados}`;
    } else {
        document.getElementById('bienvenida').innerText = 'Bienvenidos a nuestra boda';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    // Fecha de destino para el contador
    const targetDate = new Date("2025-01-25T00:00:00").getTime();

    // Función para actualizar el contador
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Cálculo de días, horas, y minutos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        // Actualizar los elementos HTML
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;

        // Si la cuenta regresiva ha terminado
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "<p class='fuente text center size-sub'><b>¡El día ha llegado!</b></p>";
        }
    }

    // Actualizar el contador cada minuto
    const countdownInterval = setInterval(updateCountdown, 1000 * 60);
    updateCountdown(); // Llamada inicial
});

document.addEventListener('DOMContentLoaded', () => {
    cargarInvitados();
});