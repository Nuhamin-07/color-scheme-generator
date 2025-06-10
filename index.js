const colorPicker = document.getElementById("color-picker");
const selectColorMode = document.getElementById("select-color-mode");
const displayColor = document.getElementById("display-color");

displayColor.style.display = "flex";
displayColor.style.flexDirection = "row"; // This is the default but you can set it explicitly
displayColor.style.width = "100%";
displayColor.style.height = "80vh";

document.getElementById("submit-color").addEventListener("click", function () {
  const hexVal = colorPicker.value.replace("#", "");
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexVal}&format=json&mode=${selectColorMode.value}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      const colorPick = data.colors.map((color) => {
        return color.hex;
      });
      const colorVal = colorPick.map((col) => {
        return col.value;
      });
      displayColor.innerHTML = "";

      let html = "";
      for (let i = 0; i < colorVal.length; i++) {
        html += `
        <div class="color-container pick-color">
            <div
            style="
                width: 100%;
                height: 80vh;
                background-color: ${colorVal[i]};">
            </div>
            <p class="pick-color" id="hex-code">${colorVal[i]}</p>
        </div>
        
    `;
      }
      displayColor.innerHTML = html;

      // displayColor.style.backgroundColor = `${colorVal[0]}`
    });
});

const pickColor = document.getElementsByClassName("pick-color");

function copyColor() {
  console.log("clicked");
  //   navigator.clipboard
  //     .writeText(val)
  //     .then(() => {
  //       alert("Text copied to clipboard!");
  //     })
  //     .catch((err) => {
  //       console.error("Failed to copy text: ", err);
  //     });
}

//GET https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html&mode=analogic&count=6
