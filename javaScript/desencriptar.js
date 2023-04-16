const botonDesencriptar = document.getElementById("boton-desencriptar");
botonDesencriptar.addEventListener("click", () => {
  const mensajeADesencriptar = document.getElementById("texto-desencriptar").value;
  const claveEncriptacion = document.getElementById("clave-desencriptar").value;
  const mensajeDesencriptado = CryptoJS.AES.decrypt(mensajeADesencriptar, claveEncriptacion).toString(CryptoJS.enc.Utf8);
  document.getElementById("resultado").innerHTML = "<p>Texto Desencriptado:</p><p>" + mensajeDesencriptado + "</p>";
});
