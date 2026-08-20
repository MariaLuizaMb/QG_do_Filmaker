class CardProjeto extends HTMLElement {
  connectedCallback() {
    const categoria = this.getAttribute("categoria") || "";
    const cliente = this.getAttribute("cliente") || "";
    const projeto = this.getAttribute("projeto") || "";
    const ano = this.getAttribute("ano") || "";

    // Captura o conteúdo antes de sobrescrever o HTML
    const video = this.querySelector('[slot="video"]')?.outerHTML || "";
    const descricao = this.querySelector('[slot="descricao"]')?.outerHTML || "";

    const tags = [...this.querySelectorAll('[slot="tag"]')]
      .map((tag) => tag.outerHTML)
      .join("");

    this.innerHTML = `
      <div class="card-projeto">

        <span class="tag-card">${categoria}</span>

        <div class="video-projeto">
          ${video}
        </div>

        <div class="container">

          <div class="texto-conteudo">
            <h2 class="nome-cliente">${cliente}</h2>

            <div class="topo">
              <h3 class="nome-projeto">${projeto}</h3>
              <p class="data-projeto">${ano}</p>
            </div>
          </div>

          <div class="descricao">

            <div class="descricao-projeto">
              ${descricao}
            </div>

            <div class="tags">
              ${tags}
            </div>

          </div>

        </div>

      </div>
    `;

    // Remove slot e adiciona classes
    this.querySelector('[slot="video"]')?.removeAttribute("slot");

    const descricaoSlot = this.querySelector('[slot="descricao"]');
    if (descricaoSlot) {
      descricaoSlot.removeAttribute("slot");
    }

    this.querySelectorAll('[slot="tag"]').forEach((tag) => {
      tag.removeAttribute("slot");
      tag.classList.add("tag-servico");
    });

    // Estiliza automaticamente o iframe
    const iframe = this.querySelector(".video-projeto iframe");
    if (iframe) {
      iframe.style.border = "0";
      iframe.style.position = "absolute";
      iframe.style.top = "0";
      iframe.style.left = "0";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
    }
  }
}

customElements.define("card-projeto", CardProjeto);
