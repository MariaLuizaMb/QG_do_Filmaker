const isInsidePages = window.location.pathname.includes("/pages/");
const rootPath = isInsidePages ? "../" : "./";
const pagesPath = isInsidePages ? "./" : "./pages/";

const paths = {
  logo: `${rootPath}dist/Imagens/QgLogo1.svg`,
  home: `${pagesPath}home.html`,
  projetos: `${pagesPath}projetos.html`,
  sobre: `${pagesPath}sobre.html`,
  servicos: `${pagesPath}servicos.html`,
};

const navLinks = [
  { label: "Home", href: paths.home },
  { label: "Projetos", href: paths.projetos },
  { label: "Sobre", href: paths.sobre },
  { label: "Serviços", href: paths.servicos },
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
