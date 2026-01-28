/** @module search */
const Vue = require("vue"),
  config = require("./config.json"),
  { App } = require("mediawiki.skinning.typeaheadSearch");
/**
 * @param {HTMLElement} searchForm
 * @param {HTMLInputElement} search
 * @return {void}
 */
function initApp(searchForm, search) {
  Vue.createMwApp(
    App,
    $.extend(
      {
        autofocusInput: search === document.activeElement,
        action: searchForm.getAttribute("action"),
        searchAccessKey: search.getAttribute("accessKey"),
        searchTitle: search.getAttribute("title"),
        searchPlaceholder: search.getAttribute("placeholder"),
        searchQuery: search.value,
      },
      // Pass additional config from server.
      config,
    ),
  ).mount(searchForm.parentNode);
}
/**
 * @param {Document} document
 * @return {void}
 */
function main(document) {
  const searchForm = /** @type {HTMLElement} */ (document.querySelector("#searchform")),
    search = /** @type {HTMLInputElement|null} */ (document.getElementById("searchInput"));
  if (search && searchForm) {
    initApp(searchForm, search);
  }
}
main(document);
