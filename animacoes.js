document.addEventListener("DOMContentLoaded", function () {

    const avaliacoes = [
        {
            texto: "Boa tarde, recomendo o Plano Luz pela atenção, comprometimento de resolver o mais rápido possível com muita eficiência! Obrigado!",
            autor: "~ Elisabeth Santos"
        },
        {
            texto: "O que dizer de vocês, fica até difícil... em um momento triste em nossas vidas vocês foram imprescindíveis. Uma palavra: Gratidão.",
            autor: "~ Sanduelma Ferreira"
        },
        {
            texto: "Posso dizer que foi maravilhoso, não esperava que fossemos tão bem tratados. Amamos o atendimento de vocês, estão de parabéns!",
            autor: "~ Ana Cristina"
        },
        {
            texto: "Atendimento excelente e muito atenciosos num momento tão delicado pra nós.",
            autor: "~ Ingrid Barbosa"
        }
    ];

    let indice = 0;

    const textoEl = document.getElementById("avaliacaoTexto");
    const autorEl = document.getElementById("avaliacaoAutor");

    function mostrarAvaliacao() {
        textoEl.textContent = avaliacoes[indice].texto;
        autorEl.textContent = avaliacoes[indice].autor;
    }

    mostrarAvaliacao();

    document.querySelector(".seta-esquerda").addEventListener("click", () => {
        indice--;
        if (indice < 0) indice = avaliacoes.length - 1;
        mostrarAvaliacao();
    });

    document.querySelector(".seta-direita").addEventListener("click", () => {
        indice++;
        if (indice > avaliacoes.length - 1) indice = 0;
        mostrarAvaliacao();
    });
});
