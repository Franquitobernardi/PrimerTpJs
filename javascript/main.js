let opciones = ["piedra", "papel", "tijera"];

let jugadorPuntuacion = 0;

let computadoraPuntuacion = 0;


function jugar() {

    let jugador = prompt("Elige: piedra, papel o tijera").toLowerCase();

    let computadora = opciones[Math.floor(Math.random() * 3)];

    if (jugador === computadora) {

        console.log("¡Es un empate!");

    }

    else if ((jugador === "piedra" && computadora === "tijera") || (jugador === "papel" && computadora === "piedra") || (jugador === "tijera" && computadora === "papel")) {

        console.log("¡Ganaste esta ronda!");

        jugadorPuntuacion++;

    }

    else {
        console.log("¡La computadora gana esta ronda!");

        computadoraPuntuacion++;
    }


    console.log(`Tu puntuación: ${jugadorPuntuacion} - Puntuación de la computadora: ${computadoraPuntuacion}`);

    let jugarOtraVez = confirm("¿Quieres jugar de nuevo?");

    if (jugarOtraVez) {
        jugar();

    } else {
        console.log("¡Gracias por jugar!");
    }
}

jugar();