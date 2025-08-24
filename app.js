// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de amigos
let  amigos = [];

function agregarAmigo() {

  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);


  input.value = "";
  console.log("Lista de amigos:", amigos);
}

// Función para actualizar un amigo en la lista
function actualizarAmigo(nombreAntiguo, nombreNuevo) {
    let index = amigos.indexOf(nombreAntiguo);
    if (index !== -1) {
        amigos[index] = nombreNuevo;
        console.log(`El amigo ${nombreAntiguo} fue actualizado a ${nombreNuevo}.`);
    } else {
        console.log(`El amigo ${nombreAntiguo} no existe en la lista.`);
    }
}


function mostrarAmigos() {
    console.log("Lista de amigos:", amigos);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        console.log("La lista de amigos está vacía.");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    console.log(`El amigo sorteado es: ${amigos[indice]}`);
}

