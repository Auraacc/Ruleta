/*const sectors = document.querySelectorAll(".sector");
const pin = document.querySelector(".pin");
const resultContainer = document.getElementById("resultContainer");
const spinButton = document.getElementById("spinButton");
let rotation = 0;
let spinning = false;

function spin() {
  if (spinning) return;

  spinning = true;

  const randomAngle = Math.floor(Math.random() * 360);
  const fullTurns = 5; // Ajusta el número de vueltas completas (5 por defecto)
  const totalSectors = 6; // Cambiar a la cantidad total de sectores (6 en este caso)

  rotation = fullTurns * 360 + randomAngle + (360 / totalSectors / 2); // Ajustar el ángulo de rotación para centrar el resultado
  const rotationAngle = `rotate(${rotation}deg)`;

  const wheel = document.querySelector(".wheel");
  wheel.style.transition = "transform 5s ease-out";
  wheel.style.transform = rotationAngle;

  setTimeout(() => {
    showResult();
  }, 6000); // Mostrar resultado después de 6 segundos (ajusta según necesites)
}

function showResult() {
  const sectorAngle = 360 / sectors.length;
  const sectorIndex = Math.floor((rotation % 360) / sectorAngle);
  const selectedValue = sectors[sectorIndex].getAttribute("data-sector");
  resultContainer.textContent = `¡Has ganado: ${selectedValue}!`;
  spinning = false;
}*/

const sectors = document.querySelectorAll(".sector");
const pin = document.querySelector(".pin");
const resultContainer = document.getElementById("resultContainer");
const spinButton = document.getElementById("spinButton");
const totalSectors = 6; // Cambiar a la cantidad total de sectores (6 en este caso)
let rotation = 0;
let spinning = false;

function spin() {
  if (spinning) return;

  spinning = true;

  const randomAngle = Math.floor(Math.random() * 360);
  const fullTurns = 5; // Ajusta el número de vueltas completas (5 por defecto)

  rotation = fullTurns * 360 + randomAngle + (360 / totalSectors / 2); // Ajustar el ángulo de rotación para centrar el resultado
  const rotationAngle = `rotate(${rotation}deg)`;

  const wheel = document.querySelector(".wheel");
  wheel.style.transition = "transform 5s ease-out";
  wheel.style.transform = rotationAngle;

  setTimeout(() => {
    showResult();
  }, 6000); // Mostrar resultado después de 6 segundos (ajusta según necesites)
}

function showResult() {
  const sectorAngle = 360 / totalSectors;
  const sectorIndex = Math.floor((rotation % 360) / sectorAngle);
  const selectedValue = sectors[sectorIndex].getAttribute("data-sector");
  resultContainer.textContent = `¡Has ganado: ${selectedValue}!`;
  spinning = false;
}
