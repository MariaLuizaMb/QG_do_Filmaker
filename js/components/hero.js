export class HeroSecao extends HTMLElement {
  connectedCallback() {
    if (this.dataset.montado === "true") return;
    this.dataset.montado = "true";

    const titulo = this.getAttribute("titulo") || "";
    const imagem = this.getAttribute("imagem") || "";
    const alt = this.getAttribute("alt");

    // Captura a descrição original antes de sobrescrever
    const descricaoEl = this.querySelector('[slot="descricao"]');
    const descricaoHTML = descricaoEl ? descricaoEl.innerHTML : "";

    this.classList.add("hero");
    this.innerHTML = `
      <div class="text-hero">
        <div class="texto">
          <h1 class="titulo">${titulo}</h1>
          <p class="texto-apoio">${descricaoHTML}</p>
        </div>
 
        <div class="scroll-indicador">
          <p class="text-vertical">scroll</p>
          <div class="risco-container">
            <span class="risco"></span>
          </div>
        </div>
      </div>
 
      <img
        src="${imagem}"
        alt="${alt || ""}"
        ${alt ? "" : 'aria-hidden="true"'}
      />
    `;

    // Avisa que o layout final está pronto para animações de scroll
    this.dispatchEvent(new CustomEvent("hero-pronto", { bubbles: true }));
  }
}
