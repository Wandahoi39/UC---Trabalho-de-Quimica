function lerTexto() {
    const texto = document.getElementById("texto").innerText;
    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    speechSynthesis.speak(fala);
    

}