document.querySelectorAll(".categorias .item").forEach((item) => {
  const imagemContainer = item.querySelector(".imagem");
  const imgItems = Array.from(imagemContainer.querySelectorAll(".img-item"));
  const seta = item.querySelector("svg");

  const INTERVALO_MS = 1500;
  let indiceAtivo = 0;
  let temporizador = null;
  let pausadoPeloMouse = false;

  function ativarPorIndice(indice) {
    imgItems.forEach((el) => el.classList.remove("ativo"));
    imgItems[indice].classList.add("ativo");
    indiceAtivo = indice;
  }

  function avancar() {
    const proximo = (indiceAtivo + 1) % imgItems.length;
    ativarPorIndice(proximo);
  }

  function iniciarAutoplay() {
    if (temporizador || pausadoPeloMouse) return;
    temporizador = setInterval(avancar, INTERVALO_MS);
  }

  function pararAutoplay() {
    clearInterval(temporizador);
    temporizador = null;
  }

  imgItems.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      pausadoPeloMouse = true;
      pararAutoplay();
      ativarPorIndice(imgItems.indexOf(el));
    });
  });

  imagemContainer.addEventListener("mouseleave", () => {
    pausadoPeloMouse = false;
    if (item.classList.contains("aberto")) {
      iniciarAutoplay();
    }
  });

  item.setAttribute("role", "button");
  item.setAttribute("tabindex", "0");
  item.setAttribute("aria-expanded", "false");

  function alternarCard() {
    const estaAberto = item.classList.toggle("aberto");
    item.setAttribute("aria-expanded", estaAberto);

    if (estaAberto) {
      pausadoPeloMouse = false;
      ativarPorIndice(0);
      iniciarAutoplay();
    } else {
      pararAutoplay();
    }
  }

  item.addEventListener("click", (event) => {
    if (event.target.closest(".imagem")) return;
    alternarCard();
  });

  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      alternarCard();
    }
  });
});
