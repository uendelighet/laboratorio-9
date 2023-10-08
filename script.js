const botonPublicar = document.getElementById("publicar");
const modal = document.getElementById("modal");
const input = document.getElementById("input");
const posts = document.getElementById("posts");

function abrir() {
    modal.classList.add("appear");
}

function cerrar() {
    modal.classList.remove("appear");
}

input.addEventListener('input', function() {
    if (input.value.trim() !== '') {
        botonPublicar.classList.add('boton-alter');
        botonPublicar.removeAttribute('disabled');
    } else {
        botonPublicar.classList.remove('boton-alter');
        botonPublicar.setAttribute('disabled', true);
    }
});

function publicar() {
    posts.innerHTML += `
        <div class="post">
            <div class="nombre">
                <img class="fotoDePerfil" src="https://pm1.aminoapps.com/6741/a0662eb2e65430da5565a39da2d5238de2b5cee8v2_hq.jpg" alt="">
                <p>Laura Coral</p>
            </div>
            <p class="post-texto">${input.value}</p>
        </div>
    `;
    cerrar();
    input.value = "";
}

