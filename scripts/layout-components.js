const isInsidePages = window.location.pathname.includes("/pages/");
const rootPath = isInsidePages ? "../" : "./";
const pagesPath = isInsidePages ? "./" : "./pages/";

const paths = {
  logo: `${rootPath}dist/Imagens/QgLogo1.svg`,
  home: `${pagesPath}home.html`,
  projetos: `${pagesPath}projetos.html`,
};

const navLinks = [
  { label: "Home", href: paths.home },
  { label: "Projetos", href: paths.projetos },
  { label: "Álbuns", href: "#" },
  { label: "Sobre", href: "#" },
  { label: "Serviços", href: "#" },
  { label: "Cursos", href: "#" },
  { label: "Contato", href: "#" },
];

const arrowIcon = `
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
  </svg>
`;

const socialIcons = {
  facebook: `
    <svg class="icon-social" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path>
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
    </svg>
  `,
  instagram: `
    <svg class="icon-social" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
      <path d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"></path>
      <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
    </svg>
  `,
  linkedin: `
    <svg class="icon-social" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
      <path d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z" opacity="0.2"></path>
      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
    </svg>
  `,
  youtube: `
    <svg class="icon-social" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
      <path d="M226.59,71.53a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128s3.07,47.46,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47S228.93,80.54,226.59,71.53ZM112,160V96l48,32Z" opacity="0.2"></path>
      <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86.12,12s-54.37.18-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68C73.58,55.82,127.4,56,128.05,56s54.37-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"></path>
    </svg>
  `,
};

const socialLinks = [
  { label: "Facebook", href: "#", icon: socialIcons.facebook },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bryan_giaffone/",
    icon: socialIcons.instagram,
    external: true,
  },
  { label: "Linkedin", href: "#", icon: socialIcons.linkedin },
  { label: "YouTube", href: "#", icon: socialIcons.youtube },
];

function currentFileName() {
  return window.location.pathname.split("/").pop();
}

function renderNavLinks() {
  const page = currentFileName();

  return navLinks
    .map((link) => {
      const fileName = link.href.split("/").pop();
      const isActive = fileName === page;

      return `
        <li>
          <a href="${link.href}" ${isActive ? 'aria-current="page"' : ""}>
            ${link.label}
          </a>
        </li>
      `;
    })
    .join("");
}

function renderSocialLinks() {
  return socialLinks
    .map(
      (link) => `
        <a class="redirect" href="${link.href}" ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ""}>
          <span class="rede-social">
            ${link.icon}
            <p>${link.label}</p>
          </span>
          <span class="seta">${arrowIcon}</span>
        </a>
      `,
    )
    .join("");
}

export class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <div class="container">
          <a class="logo" href="${paths.home}" aria-label="Ir para a Home">
            <img src="${paths.logo}" alt="QG do Filmaker" />
          </a>

          <div class="navegacao">
            <ul class="links">
              ${renderNavLinks()}
            </ul>

            <a class="botao" href="#" target="_blank" rel="noopener noreferrer">
              contato
            </a>
          </div>
        </div>
      </nav>
    `;
  }
}

export class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="conteudo">
            <img class="QGlogo" src="${paths.logo}" alt="QG do Filmaker" />

            <div class="cta">
              <div class="texto">
                <h2>Vamos dar vida ao seu projeto!</h2>
                <p>Receba um orçamento personalizado</p>
              </div>
              <a class="botao" href="#">
                <span>Inicie seu projeto aqui</span>
                <div class="wrapper">
                  <svg class="seta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div class="infos-links">
              <div class="infos">
                <div class="info-topo">
                  <p><b>Endereço:</b> Boa Esperança - MG</p>
                  <p><b>Email:</b> QGcontato@gmail.com</p>
                  <p><b>Telefone:</b> (11) 97667-9080</p>
                  <p><b>Horário de funcionamento:</b> Domingo a Sexta - Feira: 8h às 17h</p>
                </div>
                <div class="info-inferior">
                  <p>Entre em contato!</p>
                  <a class="contato-whatsapp" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="whatsapp" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                    <span>Enviar mensagem</span>
                  </a>
                </div>
              </div>

              <div class="links">
                <div class="esquerda">
                  <div class="navegacao">
                    <p>Links rápidos</p>
                    <a href="${paths.home}">Home</a>
                    <a href="${paths.projetos}">Projetos</a>
                    <a href="#">Projetos Simplificados</a>
                    <a href="#">Sobre</a>
                    <a href="#">Serviços</a>
                    <a href="#">Contato</a>
                  </div>
                </div>
                <div class="direita">
                  <div class="juridico">
                    <p>Jurídico</p>
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Termos e Condições</a>
                    <a href="#">Política de Reembolso</a>
                  </div>
                  <div class="social">
                    <p>Redes Sociais</p>
                    <a href="https://www.instagram.com/bryan_giaffone/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="redes-sociais">
              ${renderSocialLinks()}
            </div>

            <div class="rodape">
              <p>QG do Filmaker</p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
