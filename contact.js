function loadComponent(id,file) {
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error(`Error al cargar ${file}`, error));
}

loadComponent("header", "header.html");

// Footer
loadComponent('footer2', "footer2.html");

// contacto.html
const form = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const errorUsuario = document.getElementById("errorNombre");
const comentario = document.getElementById("comentario");
const errorComentario = document.getElementById("errorComentario");
const email = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");
const regexEmail = /^[^@]{2,}@[^@]+\.[a-zA-Z]{2,}$/;

//Validación en tiempo real
nombreInput.addEventListener("input", () => {
    if (nombreInput.value.trim().length >= 3 && nombreInput.value.trim().length <= 30) {
        errorUsuario.textContent = "";
    }
});
comentario.addEventListener("input", () => {
    if (comentario.value.trim().length >= 20 && comentario.value.trim().length <= 300) {
        errorComentario.textContent = "";
    }
});
email.addEventListener("input", () => {
    if (regexEmail.test(email.value.trim())) {
        errorEmail.textContent = "";
    }
});

// Validación al enviar el formulario
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valido = true;

    // Validar nombre
    if (nombreInput.value.trim().length >= 3 && nombreInput.value.trim().length <= 30) {
        errorUsuario.textContent = "";
    } else {
        errorUsuario.textContent = "❌ Ingrese un nombre válido (3 a 30 caracteres)";
        valido = false;
    }

    // Validar comentario
    if (comentario.value.trim().length >= 20 && comentario.value.trim().length <= 300) {
        errorComentario.textContent = "";
    } else {
        errorComentario.textContent = "❌ El comentario debe tener entre 20 y 300 caracteres";
        valido = false;
    }

    // Validar email
    if (regexEmail.test(email.value.trim())) {
        errorEmail.textContent = "";
    } else {
        errorEmail.textContent = "❌ Email no válido. Usa un formato tipo: usuario@dominio.com";
        valido = false;
    }

    if (valido) {
        alert("Tu comentario ha sido enviado 😊👍");
        form.reset();
    }
});