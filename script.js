const unicornNames = [
  "Glitternova",
  "Galaxicorn",
  "Stardustream",
  "Rainbowrider",
  "Celestialhoof",
  "Moonbeamglow",
  "Twilightsparkle",
  "Aurorablast",
  "Cometglide",
  "Dreamdancer",
  "Galaxicorn",
  "Pétalelunaire",
  "Arc-en-Ciel Galactique",
  "Céleste Cornu",
  "Luminova",
  "Nébulicorn",
  "Spiralia",
  "Vorticorn",
  "Aurorea",
  "Constellara",
  "Perlunica",
  "Raylune",
  "Fééricorn",
];

function generateUnicornName() {
  const randomIndex = Math.floor(Math.random() * unicornNames.length);
  const randomName = unicornNames[randomIndex];
  document.getElementById("unicornName").textContent = randomName;

    // Réinitialiser la vidéo à son point de départ et la jouer
  const video = document.getElementById("unicornVideo");
  video.currentTime = 0; // Remettre la vidéo au début
  video.play(); // Jouer la vidéo

  const sound = document.getElementById("nameSound");
  sound.play();
}

document.getElementById("generateBtn").addEventListener("click", generateUnicornName);

document.addEventListener("DOMContentLoaded", function() {
  document.body.style.cursor = "url('magic-wand-cursor.png'), auto";
});

  


