const cards = document.querySelectorAll(".card-wrapper");

cards.forEach((card) => {
  const lista = card.querySelector(".lista");
  const botao = card.querySelector(".botao-serv");

  card.addEventListener("click", () => {
    const isActive = card.classList.toggle("ativado");

    if (isActive) {
      botao.textContent = "ocultar detalhes";
      lista.style.maxHeight = lista.scrollHeight + "px";
    } else {
      botao.textContent = "ver detalhes";
      lista.style.maxHeight = 0;
    }
  });
});

const faqCards = document.querySelectorAll(".cards-faq .card");

faqCards.forEach((card) => {
  const resposta = card.querySelector(".resposta");

  card.addEventListener("click", () => {
    faqCards.forEach((outroCard) => {
      if (outroCard !== card) {
        outroCard.classList.remove("card-ativo");
        outroCard.querySelector(".resposta").style.maxHeight = 0;
      }
    });

    const ativado = card.classList.toggle("card-ativo");

    resposta.style.maxHeight = ativado ? resposta.scrollHeight + "px" : 0;
  });
});

function ajustarImagensProporcionais() {
  const componentes = document.querySelectorAll(".conteudo");

  componentes.forEach((item) => {
    const palavra = item.querySelector(".palavra");
    const img = item.querySelector("img");

    if (!palavra || !img) return;

    const larguraPalavra = palavra.getBoundingClientRect().width;

    const proporcao = 1;
    const larguraInicial = larguraPalavra * proporcao;

    img.style.width = `${larguraInicial}px`;

    const larguraFinalPadrao = 150;
    const scaleFinal = larguraFinalPadrao / larguraInicial;

    img.style.setProperty("--scale-final", scaleFinal);
  });
}

window.addEventListener("load", ajustarImagensProporcionais);
window.addEventListener("resize", ajustarImagensProporcionais);
