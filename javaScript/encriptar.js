const Encriptar = document.getElementById("boton-encriptar");
Encriptar.addEventListener("click", () => {
  const textoAEncriptar = document.getElementById("texto-encriptar").value;
  const textoEncriptado = CryptoJS.AES.encrypt(textoAEncriptar,"").toString();
  document.getElementById("resultado").innerHTML = "<p>Texto Encriptado:</p><p>" + textoEncriptado + "</p>";
});





