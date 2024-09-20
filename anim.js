// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Swinging in the backyard", time: 19 },
  { text: "Pull up in your fast car", time: 21 },
  { text: "Whistling my name", time: 23 },
  { text: "Open up a beer", time: 27 },
  { text: "And you say", time: 28 },
  { text: "Get over here, And play a video game", time: 30 },
  { text: "I'm in his favourite sundress", time: 35},
  { text: "Watchin' me get undressed", time: 37 },
  { text: "Take that body downtown", time: 39 },
  { text: "I say, You the bestest", time: 43 },
  { text: "Lean in for a big kiss", time: 45 },
  { text: "Put his favourite perfume on", time: 47 },
  { text: "Go play your video game", time: 50},
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.findIndex(
      (line) => time >= line.time && time < line.time + 2
  );

  // Si estamos en la última línea, extender el tiempo de visualización
  if (currentLine === lyricsData.length - 1) {
      if (time < lyricsData[currentLine].time + 4) { // Duración extendida
          lyrics.innerHTML = lyricsData[currentLine].text;
          lyrics.style.opacity = 1; // Mostrar la letra
      } else {
          lyrics.style.opacity = 0; // Ocultar la letra
          lyrics.innerHTML = "";
      }
  } else if (currentLine !== -1) {
      // Cambiar la letra y mostrarla para las líneas normales
      lyrics.innerHTML = lyricsData[currentLine].text;
      lyrics.style.opacity = 1; // Mostrar la letra
  } else {
      // Ocultar la letra si no hay línea actual
      lyrics.style.opacity = 0;
      lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100); // Intervalo más corto para mayor precisión

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
      titulo.style.display = "none";
  }, 3000);
}

// Llama a la función después de 216 segundos
setTimeout(ocultarTitulo, 216000);

