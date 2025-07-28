const cajas = document.querySelectorAll('.contenido p');
function mostrarSiVisible() {
    cajas.forEach((caja) => {
        const rect = caja.getBoundingClientRect();
        const visible = rect.top < window.innerHeight - 100 && rect.bottom >100;
        
        if (visible) {
            caja.classList.add('mostrar');
        }
        else {
            caja.classList.remove('mostrar');
        }
        })
}; 
window.addEventListener('scroll', mostrarSiVisible);
window.addEventListener('load', mostrarSiVisible);