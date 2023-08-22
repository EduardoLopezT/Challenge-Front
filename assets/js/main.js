obtenerTexto = () => {
  return document.getElementById("input").value;
};

const desencriptarTexto = (texto) => {
  texto = texto.replaceAll("ai", "a");
  texto = texto.replaceAll("enter", "e");
  texto = texto.replaceAll("imes", "i");
  texto = texto.replaceAll("ober", "o");
  texto = texto.replaceAll("ufat", "u");
  return texto;
};

const encriptarTexto = (texto) => {
  let resultado = "";
  for (char of texto) {
    switch (char) {
      case "a":
        resultado += "ai";
        break;
      case "e":
        resultado += "enter";
        break;
      case "i":
        resultado += "imes";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += char;
        break;
    }
  }
  return resultado;
};

const botonEncriptar = document.getElementById("encrypt");
const botonDesencriptar = document.getElementById("decrypt");
let botonCopiar = document.getElementById("copiar");

function renderizarCopiar() {
  botonCopiar = document.getElementById("copiar");
  botonCopiar.addEventListener("click", () => {
    texto = document.querySelector("[data-resultado]");
    navigator.clipboard
      .writeText(texto.innerHTML)
      .then(() => {
        alert("Texto copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles: ", err);
      });
  });
}

botonEncriptar.addEventListener("click", () => {
  displayResult(encriptarTexto);
});

botonDesencriptar.addEventListener("click", () => {
  displayResult(desencriptarTexto);
});

const displayResult = (accion) => {
  res = document.querySelector("[data-resultado]");
  res.remove();
  texto = obtenerTexto();
  resultado = accion(texto);
  Mostrar = document.getElementById("resultado");
  Mostrar.innerHTML =
    `<p class="texto_resultado" data-resultado>${resultado}</p> ` +
    Mostrar.innerHTML;
  document.getElementById("notFound").style.display = "none";
  Mostrar.style.display = "flex";
  renderizarCopiar();
};
