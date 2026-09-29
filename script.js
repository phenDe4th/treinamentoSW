function mostrarSW() {
    const select = document.
getElementById("selectSW");
    const escolha = select.value;
    const dados = starwars[escolha];

    const resultado = document.
getElementById("resultado");

    resultado.innerHTML =
    "<h2> " + dados.nome + "</h2>" +
    "<img src=' " + dados.imagem + "width='200'><br>" +
    "<p>Arma: " + dados.arma + "</p>";
}