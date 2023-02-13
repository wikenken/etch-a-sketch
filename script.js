const canvas = document.querySelector(".eas-canvas");
const resizeBtn = document.querySelector("button");

function setCanvas(value) {
  //creates 16x16 divs inside container
  for (let i = 0; i < value * value; i++) {
    let pixel = document.createElement("div");
    canvas.appendChild(pixel);
    pixel.classList.add("white");
    pixel.addEventListener("mouseover", () => {
      pixel.classList.add("black");
    });
  }
}

setCanvas(100); //default size
