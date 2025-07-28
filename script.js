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
        