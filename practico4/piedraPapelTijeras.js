const readlineSync = require('readline-sync');

const JUGADA_PIEDRA = "piedra";
const JUGADA_PAPEL = "papel";
const JUGADA_TIJERAS = "tijeras";

function obtenerJugadaComputadora() {
  const opciones = [JUGADA_PIEDRA, JUGADA_PAPEL, JUGADA_TIJERAS];
  const indice = Math.floor(Math.random() * 3);
  return opciones[indice];
}

function obtenerJugadaUsuario() {
  const jugada = readlineSync.question("Elige tu jugada: ");
  return jugada.toLowerCase();
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (
    (jugadaComputadora === JUGADA_PIEDRA && jugadaUsuario === JUGADA_TIJERAS) ||
    (jugadaComputadora === JUGADA_TIJERAS && jugadaUsuario === JUGADA_PAPEL) ||
    (jugadaComputadora === JUGADA_PAPEL && jugadaUsuario === JUGADA_PIEDRA)
  ) {
    return "Gana la computadora";
  } else if (
    (jugadaUsuario === JUGADA_PIEDRA && jugadaComputadora === JUGADA_TIJERAS) ||
    (jugadaUsuario === JUGADA_TIJERAS && jugadaComputadora === JUGADA_PAPEL) ||
    (jugadaUsuario === JUGADA_PAPEL && jugadaComputadora === JUGADA_PIEDRA)
  ) {
    return "Gana el usuario";
  } else {
    return "Empate";
  }
}

function jugarJuego(jugadas) {
  let puntajeComputadora = 0;
  let puntajeUsuario = 0;

  for (let i = 0; i < jugadas; i++) {
    console.log(`Jugada ${i + 1}:`);
    const jugadaComputadora = obtenerJugadaComputadora();
    const jugadaUsuario = obtenerJugadaUsuario();
    const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

    console.log("La computadora eligió: " + jugadaComputadora);
    console.log("El usuario eligió: " + jugadaUsuario);
    console.log("El resultado fue: " + resultado);

    if (resultado === "Gana la computadora") {
      puntajeComputadora++;
    } else if (resultado === "Gana el usuario") {
      puntajeUsuario++;
    }
  }

  console.log("Puntaje final: ");
  console.log("Computadora: " + puntajeComputadora);
  console.log("Usuario: " + puntajeUsuario);

  if (puntajeComputadora > puntajeUsuario) {
    console.log("Gana la computadora");
  } else if (puntajeUsuario > puntajeComputadora) {
    console.log("Gana el usuario");
  } else {
    console.log("Empate");
  }
}


const cantidadJugadas = parseInt(readlineSync.questionInt("Ingrese la cantidad de jugadas (1, 2 o 3): "));


if (cantidadJugadas === 1 || cantidadJugadas === 2 || cantidadJugadas === 3) {
  jugarJuego(cantidadJugadas);
} else {
  console.log("Cantidad de jugadas inválida. El juego ha sido cancelado.");
}
