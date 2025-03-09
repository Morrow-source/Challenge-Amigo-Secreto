// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); 
    if (nombre !== "" && amigos.indexOf(nombre) === -1) { // Evita nombres vacíos y duplicados
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    } else {
        alert("El nombre ya está en la lista o es inválido");
    }
}
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "❌";
        botonEliminar.onclick = function() {
            eliminarAmigo(i);
        };
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    }
}
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos 2 amigos para hacer el sorteo.");
        return;
    }
    let asignaciones = {};
    let disponibles = amigos.slice(); // Copiar la lista
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let opciones = disponibles.filter(function(a) { return a !== amigo; });
        
        if (opciones.length === 0) {
            return sortearAmigo(); // Reiniciar si no hay combinación válida
        }   
        let elegido = opciones[Math.floor(Math.random() * opciones.length)];
        asignaciones[amigo] = elegido;
        
        let indexElegido = disponibles.indexOf(elegido);
        disponibles.splice(indexElegido, 1);
    }   
    mostrarResultado(asignaciones);
}
function mostrarResultado(asignaciones) {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    let amigoActual = amigos[Math.floor(Math.random() * amigos.length)];
    let li = document.createElement("li");
    li.textContent = "Tu amigo secreto es: " + asignaciones[amigoActual];
    resultadoLista.appendChild(li);
}
