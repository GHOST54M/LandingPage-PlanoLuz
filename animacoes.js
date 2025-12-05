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
        },
        {
            texto:"Eu super recomendo, fui muito atenciosos, carinhosos e sensíveis, super profissionais, destacar o cuidado que tem com pet e toda a sensibilidade com minha família, muito obrigada!",
            autor: "~ Melissa"
        }
    ];

    let indice = 0;
    let animando = false; // ⬅️ flag de controle
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
        if (animando) return;      // ⬅️ Impede cliques durante animação
        animando = true;

        const atual = box.querySelector(".avaliacao-item");

        const proximo = criarItem(
            avaliacoes[indice],
            direcao === "direita" ? "slide-in-right" : "slide-in-left"
        );

        box.appendChild(proximo);

        requestAnimationFrame(() => {
            proximo.classList.add("slide-active");

            if (atual) {
                atual.classList.add(
                    direcao === "direita" ? "slide-out-left" : "slide-out-right"
                );

                setTimeout(() => {
                    atual.remove();
                    animando = false;   // ⬅️ Libera novas trocas somente após terminar a animação
                }, 450);
            } else {
                animando = false;
            }
        });
    }

    // Inicial
    box.appendChild(criarItem(avaliacoes[indice], "slide-active"));

    // Setas
    document.querySelector(".seta-direita").addEventListener("click", () => {
        if (animando) return;
        indice = (indice + 1) % avaliacoes.length;
        trocar("direita");
    });

    document.querySelector(".seta-esquerda").addEventListener("click", () => {
        if (animando) return;
        indice = (indice - 1 + avaliacoes.length) % avaliacoes.length;
        trocar("esquerda");
    });
});

// Animação de brilho 

const links = document.querySelectorAll('a[href="#play-store"]');
const destino = document.querySelector('#play-store');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        destino.scrollIntoView({
            behavior: 'smooth'
        });

        setTimeout(() => {
            destino.classList.add('brilhar');

            setTimeout(() => {
                destino.classList.remove('brilhar');
            }, 1500);
        }, 600);
    });
});

// Rastrear downloads do app

document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll('[data-track="app_download"]');

    botoes.forEach(btn => {
        btn.addEventListener("click", () => {
            const store = btn.dataset.store;
            const label = btn.dataset.label;

            // Envia para o dataLayer com segurança
            if (window.dataLayer) {
                window.dataLayer.push({
                    event: "app_download_click",
                    store,
                    label
                });
            }
        });
    });
});

