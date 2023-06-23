function exibirGiphy() {
    var giphy = document.createElement('img');
    giphy.src = 'giphy.gif';
    giphy.classList.add('giphy-container');
    document.body.appendChild(giphy);

    // Adicionar evento de passar o mouse sobre o giphy
    giphy.addEventListener('mouseover', moverGiphy);
}

function moverGiphy() {
    var giphy = this;

    // Gerar coordenadas aleatórias para a nova posição do Giphy
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var newLeft = Math.floor(Math.random() * (windowWidth - giphy.width));
    var newTop = Math.floor(Math.random() * (windowHeight - giphy.height));

    // Atualizar a posição do Giphy
    giphy.style.left = newLeft + 'px';
    giphy.style.top = newTop + 'px';
}

var giphyButton = document.getElementById('giphyButton');
giphyButton.addEventListener('click', exibirGiphy);