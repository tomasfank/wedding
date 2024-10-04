const titulo = document.getElementById('save_the_date');
const fecha = document.getElementById('date_to_save');

titulo.style.setProperty('--animate-duration', '2s');

let firstClickDone = false; // Variable para rastrear el primer clic

const aparecer = () => {
    // Añadir clase para fadeOut y establecer la duración
    titulo.classList.add('animate__animated', 'animate__fadeOut');

    // Esperar a que termine la animación de fadeOut
    titulo.addEventListener('animationend', () => {
        titulo.style.display = 'none'; // Ocultar el título después de la animación

        // Ahora, mostrar y animar la fecha
        fecha.style.display = 'block'; // Mostrar la fecha antes de la animación
        fecha.style.setProperty('--animate-duration', '2s');
        fecha.classList.add('animate__animated', 'animate__fadeIn');

        firstClickDone = true; // Marcar que el primer clic ya fue hecho

    }, { once: true }); // Para que el evento solo se ejecute una vez
};

const desaparecer = () =>{
    fecha.classList.add('animate__animated', 'animate__fadeOut');

    fecha.addEventListener('animationend', ()=>{
        fecha.style.display = 'none';

        window.location.href = 'index.html'
    })
}

document.addEventListener('click', () => {
    if (!firstClickDone) {
        aparecer(); // Ejecuta aparecer en el primer clic
    } else {
        desaparecer(); // Ejecuta desaparecer en el segundo clic
    }
});
