const canvasBtn = document.querySelector(".eas-canvas");
const resizeBtn = document.querySelector(".resize");
const clearBtn = document.querySelector(".clear");

function setCanvas(value) {
  for (let i = 0; i < value * value; i++) {
    let pixel = document.createElement("div");
    canvasBtn.appendChild(pixel);

    pixel.style.cssText = `flex: 1 1 ${720 / value}px`;
    pixel.classList.add("white");
    pixel.addEventListener("mouseover", () => {
      pixel.classList.remove("white");
      pixel.classList.add("black");
    });

    //clear canvas
    clearBtn.addEventListener("click", () => {
      pixel.className = "";
      pixel.classList.add("cellSize", "white");
    });
  }
}

setCanvas(100); //default canvas size

// resizeBtn.addEventListener("click", () => {
//   value = setCanvas(prompt("Set desired canvas size"));
//   return value;
// });
