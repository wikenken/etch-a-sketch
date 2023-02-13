const canvas = document.querySelector(".eas-canvas");
const clear = document.querySelector("button");

for (let i = 0; i < 256; i++) {
  let pixel = document.createElement("div");
  canvas.appendChild(pixel);

  pixel.classList.add("cellSize", "white");
  pixel.addEventListener("mouseover", () => {
    pixel.classList.remove("white");
    pixel.classList.add("black");
  });

  //clear canvas
  clear.addEventListener("click", () => {
    pixel.className = "";
    pixel.classList.add("cellSize", "white");
  });
}
