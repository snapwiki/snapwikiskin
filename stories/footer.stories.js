import mustache from "mustache";
import footerTemplate from "!!rawloader!../templates/footer.mustache";
import { htmluserlangattribs } from "./utils";

const footer_info = {
  id: "footer-info",
  "array-items": [
    {
      id: "footer-info-lastmod",
      html: "This page was last modified on June 12, 2021.",
    },
    {
      id: "footer-info-copyright",
      html: 'Content is available under <a href="https://www.gnu.org/licenses/gpl-3.0-standalone.html">GPLv3</a> unless otherwise noted.',
    },
  ],
};

const footer_places = {
  id: "footer-places",
  "array-items": [
    {
      id: "footer-places-privacy",
      html: '<a href="https://meta.miraheze.org/wiki/Privacy_Policy" class="extiw" title="m:Privacy Policy">Privacy policy</a>',
    },
    {
      id: "footer-places-about",
      html: '<a href="/wiki/Snap!_Wiki:About" title="Snap! Wiki:About">About the Snap! Wiki</a>',
    },
    {
      id: "footer-places-disclaimer",
      html: '<a href="/wiki/Snap!_Wiki:General_disclaimer" class="mw-redirect" title="Snap! Wiki:General disclaimer">Disclaimers</a>',
    },
    {
      id: "footer-places-termsofservice",
      html: '<a href="https://meta.miraheze.org/wiki/Terms_of_Use" class="extiw" title="m:Terms of Use">Terms of Use</a>',
    },
    {
      id: "footer-places-donate",
      html: '<a href="https://meta.miraheze.org/wiki/Donate" class="extiw" title="m:Donate">Donate to Miraheze</a>',
    },
    {
      id: "footer-places-darkmode-link",
      html: '<a href="#">Dark mode</a>',
    },
  ],
};

const footer_icons = {
  id: "footer-icons",
  "array-items": [
    {
      id: "footer-copyrightico",
      html: '<a href="https://www.gnu.org/licenses/gpl-3.0-standalone.html" target=""><img src="https://www.gnu.org/graphics/gplv3-or-later.png" alt="GPLv3" width="88" height="31" loading="lazy"/></a>',
    },
    {
      id: "footer-poweredbyico",
      html: '<a href="https://www.mediawiki.org/" target=""><img src="/w/resources/assets/poweredby_mediawiki_88x31.png" alt="Powered by MediaWiki" srcset="/w/resources/assets/poweredby_mediawiki_132x47.png 1.5x, /w/resources/assets/poweredby_mediawiki_176x62.png 2x" width="88" height="31" loading="lazy"/></a>',
    },
  ],
};

const footer_template_data = {
  "html-user-language-attributes": htmluserlangattribs,
  "data-info": footer_info,
  "data-places": footer_places,
  "data-icons": footer_icons,
};

export const footer = () => mustache.render(footerTemplate, footer_template_data);
