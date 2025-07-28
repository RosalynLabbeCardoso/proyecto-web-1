function loadComponent(id,file) {
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error(`Error al cargar ${file}`, error));
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");

document.addEventListener("DOMContentLoaded", () => {
    const imagenesCargando = document.querySelectorAll("img");
    imagenesCargando.forEach((imagen) => {
        imagen.style.opacity = 1;
    }); 
});
function myFunction() {
  const x = document.getElementById("desplegable");
  if (x.className === "desplegable") {
    x.classList.remove("desplegable");
    x.style.maxHeight = "0px";
  } else {
    x.classList.add("desplegable");
    x.style.maxHeight = "300px";
  }
}