// Obtém todos os botões de compra
const buyButtons = document.querySelectorAll('.product button');

// Define uma função de clique para cada botão
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Altera o texto do botão para "Adicionado ao carrinho" quando clicado
        button.textContent = 'Adicionado ao carrinho!';
    });
});
