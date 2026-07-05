body {
    background-color: #00bfff;
    color: #0b2f1d;
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    padding: 20px 0;
}

main {
    text-align: center;
    max-width: 90%;
    margin: 0 auto; /* Mantém todo o conteúdo centralizado na tela */
}

/* Esconde todos os passos por padrão */
.passo {
    display: none;
}

/* Mostra apenas o passo que tiver a classe ativo */
.passo.ativo {
    display: block;
}

/* Limita o tamanho das imagens para não quebrarem o layout */
img {
    max-width: 90%;
    height: auto;
    border-radius: 8px; /* Opcional: deixa as bordas das imagens levemente arredondadas */
}

/* Estilização simples para os botões */
.btn-proximo {
    display: block;
    width: 100%;
    max-width: 400px; /* Evita que o botão fique gigante em telas de computador */
    background-color: #32cd32;
    color: white;
    padding: 14px;
    margin: 12px auto; /* Centraliza os botões */
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn-proximo:hover {
    background-color: #228b22; /* Efeito visual ao passar o mouse */
}
