// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Swinging in the backyard", time: 18 },
  { text: "Pull up in your fast car", time: 20 },
  { text: "Whistling my name", time: 22 },
  { text: "Open up a beer", time: 26 },
  { text: "And you say", time: 27 },
  { text: "Get over here", time: 28 },
  { text: "And play a video game", time: 29 },
  { text: "I'm in his favourite sundress", time: 31 },
  { text: "Watchin' me get undressed", time: 33 },
  { text: "Take that body downtown", time: 35 },
  { text: "I say, &quot;You the bestest&quot;", time: 42 },
  { text: "Lean in for a big kiss", time: 42 },
  { text: "Put his favourite perfume on", time: 44 },
  { text: "Go play your video game", time: 44 },
  { text: "It's you, it's you, it's all for you", time: 46 },
  { text: "Everything I do", time: 47 },
  { text: "I tell you all the time", time: 48 },
  { text: "Heaven is a place on earth with you", time: 50 },
  { text: "Tell me all the things you wanna do", time: 52 },
  { text: "I heard that you like the bad girls", time: 54 },
  { text: "Honey, is that true?", time: 56 },
  { text: "It's better than I ever even knew", time: 58 },
  { text: "They say that the world was built for two", time: 60 },
  { text: "Only worth living if somebody is loving you", time: 62 },
  { text: "And, baby, now you do", time: 64 },
  { text: "Nice butterflies in my hands", time: 66 },
  { text: "Singin' in the old bars", time: 68 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 2
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 2000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);