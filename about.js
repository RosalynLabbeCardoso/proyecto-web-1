//about.html
const sol = document.getElementById("sol");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 400 && !sol.classList.contains('mini')) {
    sol.classList.add('mini');
  } else if (scrollY <= 400 && sol.classList.contains('mini')) {
    sol.classList.remove('mini');
  }
});

sol.addEventListener("mouseenter", () => {
  sol.classList.remove("animar-salida");
  void sol.offsetWidth; // fuerza reinicio de animación
  sol.classList.add("animar-entrada");
});

sol.addEventListener("mouseleave", () => {
  sol.classList.remove("animar-entrada");
  void sol.offsetWidth; // fuerza reinicio de animación
  sol.classList.add("animar-salida");
});

const cajas = document.querySelectorAll('.contenido1');
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
    