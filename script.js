function mostrarSW() {
    const select = document.getElementById("selectSW");
    const escolha = select.value;
    const dados = starwars[escolha];

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
            <h2>${dados.nome}</h2>
            <img src="${dados.imagem}" width="200">
            <p><b>${dados.titulo}</b></p>

            <h3>1. Informações básicas</h3>
            <ul>
                <li>Nome completo: ${dados.nome}</li>
                <li>Espécie: ${dados.especie}</li>
                <li>Planeta natal: ${dados.planeta}</li>
                <li>Afliação: ${dados.afliacao}</li>
                <li>Mestre: ${dados.mestre}</li>
                <li>Aprendiz: ${dados.aprendiz}</li>
                <li>Ocupação: ${dados.ocupacao}</li>
            </ul>
            
            <h3>2. Habilidades e características</h3>
            <ul>
                <li><b>Habilidades:</b> ${dados.habilidades}</li>
                <li><b>Estilo de combate:</b> ${dados.estiloCombate}</li>
                <li><b>Personalidade:</b> ${dados.personalidade}</li>
                <li><b>Poderes:</b> ${dados.poderes}</li>
            </ul>

            <h3>3. Armas e equipamentos</h3>
            ${dados.armaImagem ? `<img src="${dados.armaImagem}" width="120"><br>` :""}
            <p><b>Arma:${dados.arma}</b></p>
            <p>${dados.armaDescricao}</p>
            <ul>
                <li>Nave ou veículo: ${dados.nave}</li>
                <li>Equipamentos especiais: ${dados.equipamentoEspecial}</li>
            </ul>

            <h3>4. História do personagem</h3>
            <p>${dados.historia}</p>

            <h3>5. Se você fosse ${dados.nome}...</h3>
            <p>${dados.seVoceFosse}</p>
            <p><b>Sua arma:</b> ${dados.arma}</p>
            <p><b>Sua missão:</b> ${dados.suaMissao}</p>
            <p><b>Seu caminho:</b> ${dados.seuCaminho}</p>
        `;
}