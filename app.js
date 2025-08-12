// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (amigos.includes(nombre)) {
        alert('Ese nombre ya fue ingresado.');
        return;
    } else if (nombre === "") {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    amigos.push(nombre);
    input.value = "";
    mostrarAmigos();
}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
//Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
// Usa Math.random() y Math.floor() para obtener un índice aleatorio.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    mostrarResultado(amigoSeleccionado);
}
function mostrarResultado(amigo) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigo}`;
    resultado.appendChild(li);
}
// Agrega un evento al botón de sortear para que llame a la función sortearAmigo cuando se haga clic.
document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
// Agrega un evento al campo de entrada para que llame a la función agregarAmigo cuando se presione Enter.
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});