const Encriptar = document.getElementById("boton-encriptar");
Encriptar.addEventListener("click", () => {
  const textoAEncriptar = document.getElementById("texto-encriptar").value;
  const clave = document.getElementById("clave-encriptar").value;
  const textoEncriptado = CryptoJS.AES.encrypt(textoAEncriptar, clave).toString();
  document.getElementById("resultado").innerHTML = "<p>Texto Encriptado:</p><p>" + textoEncriptado + "</p>";
});



