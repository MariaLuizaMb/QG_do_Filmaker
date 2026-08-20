export class CardServico extends HTMLElement {
  connectedCallback() {
    // Evita remontar se o elemento for movido/reaproveitado no DOM
    if (this.dataset.montado === "true") return;
    this.dataset.montado = "true";

    const numero = this.getAttribute("numero") || "";
    const titulo = this.getAttribute("titulo") || "";

    // Captura o conteúdo original (slots) ANTES de sobrescrever o innerHTML
    const descricaoEl = this.querySelector('[slot="descricao"]');
    const imagensEls = Array.from(this.querySelectorAll('[slot="imagem"]'));
    const descricaoHTML = descricaoEl ? descricaoEl.innerHTML : "";

    // Configura o próprio elemento como o "item" do accordion
    this.classList.add("item");
    this.setAttribute("role", "button");
    this.setAttribute("tabindex", "0");
    this.setAttribute("aria-expanded", "false");

    this.innerHTML = "";

    const conteudo = document.createElement("div");
    conteudo.className = "conteudo";
    conteudo.innerHTML = `
      <span class="numero">${numero}</span>
      <div class="imagem"></div>
      <div class="texto">
        <h3 class="titulo">${titulo}</h3>
        <p class="descricao">${descricaoHTML}</p>
      </div>
    `;

    const imagemContainer = conteudo.querySelector(".imagem");

    imagensEls.forEach((link, indice) => {
      link.removeAttribute("slot");
      link.classList.add("img-item");
      if (indice === 0) link.classList.add("ativo");

      // Só injeta o overlay se o usuário não tiver colocado um manualmente
      if (!link.querySelector(".icone-explorar")) {
        link.insertAdjacentHTML("beforeend", CardServico.overlayHTML());
      }

      imagemContainer.appendChild(link);
    });

    this.appendChild(conteudo);
    this.insertAdjacentHTML("beforeend", CardServico.setaSVG());

    this._configurarCarrossel(imagemContainer);
    this._configurarAccordion();
  }

  static overlayHTML() {
    return `
      <span class="icone-explorar" aria-hidden="true">
        <span class="circulo">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
            <path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path>
          </svg>
        </span>
        <p class="legenda">Explorar</p>
      </span>
    `;
  }

  static setaSVG() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#e0e0e0" viewBox="0 0 256 256">
        <path d="M204.24,148.24l-72,72a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L122,201.51V40a6,6,0,0,1,12,0V201.51l61.76-61.75a6,6,0,0,1,8.48,8.48Z"></path>
      </svg>
    `;
  }
}
