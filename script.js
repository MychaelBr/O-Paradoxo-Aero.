const botoesAvanco = document.querySelectorAll('.btn-proximo');

botoesAvanco.forEach(botao => {
    botao.addEventListener('click', () => {
        const atual = document.querySelector('.ativo');
        const proximoPasso = `passo-${botao.getAttribute('data-proximo')}`;

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
