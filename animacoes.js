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
const links = document.querySelectorAll('a[href="#botao-download"]');
const destino = document.querySelector('#botao-download');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // impede o comportamento de rolar até o anchor

        if (!destino) return; // segurança

        // Aplica brilho imediatamente
        destino.classList.add('brilhar');

        // Remove após 1.5s
        setTimeout(() => {
            destino.classList.remove('brilhar');
        }, 1500);
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

function redirecionarParaLoja(){
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const linkPlayStore ="https://play.google.com/store/apps/details?id=com.planoluzapp&pcampaignid=web_share";
    const linkAppStore = "https://apps.apple.com/br/app/plano-luz-planos-funer%C3%A1rios/id6749597330";

    if(/android/i.test(userAgent)){
        window.location.href = linkPlayStore;
    } else if(/iPad|iPhone|iPod/.test(userAgent) && ! window.MSStream){
        window.location.href = linkAppStore;
    } else{
        window.location.href = linkPlayStore;
    }
}