// Seleciona todos os botões de avanço
const avanca = document.querySelectorAll('.btn-proximo');

// Passa por cada um dos botões
avanca.forEach(button => {
    // Adiciona o ouvinte de clique
    button.addEventListener('click', function(){
        // Encontra quem é a div que está ativa no momento
        const atual = document.querySelector('.ativo');
        
        // Monta o nome do ID do próximo passo juntando o texto com o atributo do botão
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Remove a classe ativo da tela atual para escondê-la
        if (atual) {
            atual.classList.remove('ativo');
        }
        
        // Busca a nova div pelo ID gerado e adiciona a classe ativo para mostrá-la
        const proximaDiv = document.getElementById(proximoPasso);
        if (proximaDiv) {
            proximaDiv.classList.add('ativo');
        }
    });
});
