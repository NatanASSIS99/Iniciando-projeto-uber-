// script.js

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Obtém o botão pelo ID
    var button = document.getElementById('meuBotao');

    // Adiciona um ouvinte de evento de clique ao botão
    button.addEventListener('click', function() {
        // Exibe uma mensagem quando o botão é clicado
        alert('O botão foi clicado!');
    });
});