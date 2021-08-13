"use strict";
const Vue = require("vue").default || require("vue"), App = require("./App.vue"), config = require("./config.json");
function initApp(searchForm, search) {
  new Vue({
    el: searchForm,
    render: function(createElement) {
      return createElement(App, {
        props: $.extend({
          autofocusInput: search === document.activeElement,
          action: searchForm.getAttribute("action"),
          searchAccessKey: search.getAttribute("accessKey"),
          searchTitle: search.getAttribute("title"),
          searchPlaceholder: search.getAttribute("placeholder"),
          searchQuery: search.value
        }, config)
      });
    }
  });
}
function main(document2) {
  const searchForm = document2.querySelector("#searchform"), search = document2.getElementById("searchInput");
  if (search && searchForm) {
    initApp(searchForm, search);
  }
}
main(document);
