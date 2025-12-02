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
    const box = document.getElementById("avaliacaoBox");

    function criarItem(avaliacao, classeInicial) {
        const div = document.createElement("div");
        div.className = "avaliacao-item " + classeInicial;

        div.innerHTML = `
            <p class="avaliacao-texto cor-texto-azul">${avaliacao.texto}</p>
            <p class="avaliacao-avaliador cor-texto-azul">${avaliacao.autor}</p>
        `;

        return div;
    }

    function trocar(direcao) {
        const atual = box.querySelector(".avaliacao-item");

        const proximo = criarItem(
            avaliacoes[indice],
            direcao === "direita" ? "slide-in-right" : "slide-in-left"
        );

        box.appendChild(proximo);

        // Garante que o navegador registre os estilos iniciais antes de animar
        requestAnimationFrame(() => {
            proximo.classList.add("slide-active");

            if (atual) {
                atual.classList.add(
                    direcao === "direita" ? "slide-out-left" : "slide-out-right"
                );

                setTimeout(() => {
                    atual.remove();
                }, 450);
            }
        });
    }

    // Mostrar inicial
    box.appendChild(criarItem(avaliacoes[indice], "slide-active"));

    // Setas
    document.querySelector(".seta-direita").addEventListener("click", () => {
        indice = (indice + 1) % avaliacoes.length;
        trocar("direita");
    });

    document.querySelector(".seta-esquerda").addEventListener("click", () => {
        indice = (indice - 1 + avaliacoes.length) % avaliacoes.length;
        trocar("esquerda");
    });
});