
let puntos = 0;

const musica = document.getElementById("musica");
const musicButton = document.getElementById("musicButton");

// BIENVENIDA
function comenzar() {
  document.getElementById("dedicatoria").scrollIntoView({
    behavior: "smooth"
  });
}

// MÚSICA
function controlarMusica() {

  if (musica.paused) {

    musica.play()
      .then(() => {
        musicButton.textContent = "Ⅱ";
      })
      .catch(() => {
        alert("No se pudo reproducir la canción. Revisa que musica.mp3 esté en la carpeta principal.");
      });

  } else {

    musica.pause();
    musicButton.textContent = "▶";

  }
}

musica.addEventListener("ended", () => {
  musicButton.textContent = "▶";
});

// JUEGO DE CORAZONES
function atrapar(boton) {

  if (boton.disabled || puntos >= 5) return;

  boton.disabled = true;
  boton.textContent = "✨";
  boton.style.opacity = "0.4";
  boton.style.transform = "scale(0.5)";

  puntos++;

  document.getElementById("score").textContent = puntos;

  if (puntos === 5) {

    document.getElementById("gameMessage").textContent =
      "¡Lo lograste, Angie! Todos mis corazones son tuyos. 💙";

    setTimeout(() => {

      document.getElementById("carta").scrollIntoView({
        behavior: "smooth"
      });

    }, 1600);

  } else {

    document.getElementById("gameMessage").textContent =
      "¡Muy bien, mi princesita! Sigue atrapando. 💙";

  }
}

// ABRIR CARTA
function abrirCarta() {

  const carta = document.getElementById("letter");

  carta.style.display = "block";

  document.getElementById("letterButton").textContent =
    "Te quiero, mi princesita 💙";

  carta.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}

// REINICIAR EXPERIENCIA
function reiniciar() {

  puntos = 0;

  document.getElementById("score").textContent = "0";

  document.getElementById("gameMessage").textContent =
    "¡Vamos, mi princesita! 💙";

  document.querySelectorAll(".heart-button").forEach(boton => {

    boton.disabled = false;
    boton.textContent = "💙";
    boton.style.opacity = "1";
    boton.style.transform = "scale(1)";

  });

  document.getElementById("letter").style.display = "none";

  document.getElementById("letterButton").textContent =
    "Abrir mi cartita 💙";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

// CREAR ESTRELLAS
const stars = document.getElementById("stars");

for (let i = 0; i < 50; i++) {

  const estrella = document.createElement("span");

  estrella.className = "star";
  estrella.textContent = "✦";

  estrella.style.left = Math.random() * 100 + "%";
  estrella.style.top = Math.random() * 100 + "%";

  estrella.style.fontSize =
    (Math.random() * 10 + 5) + "px";

  estrella.style.animationDelay =
    Math.random() * 4 + "s";

  stars.appendChild(estrella);

}

// CORAZONES FLOTANTES
const hearts = document.getElementById("hearts");

function crearCorazon() {

  const corazon = document.createElement("span");

  corazon.className = "floating-heart";

  corazon.textContent =
    Math.random() > 0.5 ? "💙" : "♡";

  corazon.style.left = Math.random() * 100 + "%";

  corazon.style.fontSize =
    (Math.random() * 18 + 12) + "px";

  corazon.style.animationDuration =
    (Math.random() * 4 + 6) + "s";

  hearts.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 10000);

}

setInterval(crearCorazon, 1000);
