const canvasBtn = document.querySelector(".eas-canvas");
const resizeBtn = document.querySelector(".resize");
const clearBtn = document.querySelector(".clear");

function setCanvas(value) {
  for (let i = 0; i < value * value; i++) {
    let pixel = document.createElement("div");
    canvasBtn.appendChild(pixel);
    pixel.classList.add("cell");

    pixel.style.cssText = `flex: 1 1 ${720 / value}px`;
    pixel.addEventListener("mouseover", () => {
      pixel.classList.remove("white");
      pixel.classList.add("black");
    });

    //clear canvas
    clearBtn.addEventListener("click", () => {
      pixel.style.cssText = `flex: 1 1 ${720 / value}px`;
      pixel.className = "";
      pixel.classList.add("white");
    });
  }
}

resizeBtn.addEventListener("click", () => {
  const toDelete = document.querySelectorAll(".cell");
  for (const element of toDelete) {
    element.remove();
  }
  const pixelSize = prompt("set size");
  if (typeof pixelSize !== "number" && pixelSize > 100) {
    alert("must be below 100 pixels!");
    setCanvas(16);
  } else {
    setCanvas(pixelSize);
  }
});
setCanvas(16); //default canvas size
