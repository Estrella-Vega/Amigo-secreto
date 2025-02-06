let nombres = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre !== "") {
        nombres.push(nombre);
        inputAmigo.value = ""; // Limpiar el campo de entrada
        actualizarLista();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    nombres.forEach(nombre => {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Debes añadir al menos 2 nombres para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSecreto = nombres[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

