const projCards = document.querySelectorAll(" .card-projeto");

projCards.forEach((card) => {
  const descricao = card.querySelector(".descricao");

  card.addEventListener("click", () => {
    const ativado = card.classList.toggle("card-ativo");
    descricao.style.maxHeight = ativado ? descricao.scrollHeight + 1 + "px" : 0;
    descricao.addEventListener(
      "transitionend",
      () => {
        grid.refreshItems().layout();
      },
      { once: true },
    );
  });
});
