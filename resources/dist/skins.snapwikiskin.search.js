"use strict";
const e = require("vue").default || require("vue"),
  t = require("./App.vue"),
  r = require("./config.json");
!(function (c) {
  const u = c.querySelector("#searchform"),
    n = c.getElementById("searchInput");
  n &&
    u &&
    (function (c, u) {
      new e({
        el: c,
        render: function (e) {
          return e(t, {
            props: $.extend(
              {
                autofocusInput: u === document.activeElement,
                action: c.getAttribute("action"),
                searchAccessKey: u.getAttribute("accessKey"),
                searchTitle: u.getAttribute("title"),
                searchPlaceholder: u.getAttribute("placeholder"),
                searchQuery: u.value,
              },
              r
            ),
          });
        },
      });
    })(u, n);
})(document);
