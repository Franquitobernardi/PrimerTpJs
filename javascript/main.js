let opciones = ["piedra", "papel", "tijera"];

let jugadorPuntuacion = 0;

let computadoraPuntuacion = 0;


function jugar() {

    let jugador = prompt("Elige: piedra, papel o tijera").toLowerCase();

    let computadora = opciones[Math.floor(Math.random() * 3)];

    if (jugador === computadora) {

        alert("¡Es un empate!");

    }

    else if ((jugador === "piedra" && computadora === "tijera") || (jugador === "papel" && computadora === "piedra") || (jugador === "tijera" && computadora === "papel")) {

        alert("¡Ganaste esta ronda!");

        jugadorPuntuacion++;

    }

    else {
        alert("¡La computadora gana esta ronda!");

        computadoraPuntuacion++;
    }


    alert(`Tu puntuación: ${jugadorPuntuacion} - Puntuación de la computadora: ${computadoraPuntuacion}`);

    let jugarOtraVez = confirm("¿Quieres jugar de nuevo?");

    if (jugarOtraVez) {
        jugar();

    } else {
        alert("¡Gracias por jugar!");
    }
}

jugar();