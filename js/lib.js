import { SiteFooter } from "./components/layout-footer.js";
import { SiteNavbar } from "./components/layout-nav.js";
import { SliderTag } from "./components/slider-tags.js";
import { CardServico } from "./components/card-categorias-servicos.js";
import { HeroSecao } from "./components/hero.js";

customElements.define("site-navbar", SiteNavbar);
customElements.define("site-footer", SiteFooter);
customElements.define("slider-tag", SliderTag);
customElements.define("card-servico", CardServico);
customElements.define("hero-secao", HeroSecao);
