let numRandom = Math.floor(Math.random() * 10) + 1;
const numInput = document.getElementById("num");
const result = document.getElementById("result");
const buttonSend = document.getElementById("buttonSend")
document
  .getElementById("buttonSend")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const num = parseInt(numInput.value);

    try {
      if (num > 0 && num < 11) {
        if (num === numRandom) {
          result.textContent = "Has hallado el número correcto:" + numRandom;
          numRandom = Math.floor(Math.random() * 10) + 1;
          clean();
        } else if (num < numRandom) {
          result.textContent = "El número que buscas es mayor";
          clean();
        } else {
          result.textContent = "El número que buscas es menor";
          clean();
        }
      } else {
        alert("Número no válido");
        clean();
      }
    } catch (error) {console.log("error")}
  });


document
  .getElementById("buttonReset")
  .addEventListener("click", function (event) {
    event.preventDefault();
    result.textContent = "";
    clean();
});

  function clean() {
    numInput.value = "";
  }
  