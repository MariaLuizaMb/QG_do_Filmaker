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
