/** @module search */
const Vue = require( 'vue' ).default || require( 'vue' ),
      App = require( './App.vue' ),
      config = require( './config.json' );
/**
 * @param {HTMLElement} searchForm
 * @param {HTMLInputElement} search
 * @return {void}
 */
// eslint-disable-next-line no-implicit-globals
function initApp( searchForm, search ) {
      // eslint-disable-next-line no-new
      new Vue( {
            el: searchForm,
            // eslint-disable-next-line jsdoc/check-alignment
            /**
             *
             * @param {Function} createElement
             * @return {Vue.VNode}
             */
            render: function ( createElement ) {
      return createElement( App, {
        props: $.extend(
          {
            autofocusInput: search === document.activeElement,
            action: searchForm.getAttribute( 'action' ),
            searchAccessKey: search.getAttribute( 'accessKey' ),
            searchTitle: search.getAttribute( 'title' ),
            searchPlaceholder: search.getAttribute( 'placeholder' ),
            searchQuery: search.value,
          },
          // Pass additional config from server.
          config
         ),
       } );
     },
   } );
 }
/**
 * @param {Document} document
 * @return {void}
 */
// eslint-disable-next-line no-implicit-globals
function main( document ) {
  const searchForm = /** @type {HTMLElement} */ ( document.querySelector( '#searchform' ) ),
    search = /** @type {HTMLInputElement|null} */ ( document.getElementById( 'searchInput' ) );
  if ( search && searchForm ) {
    initApp( searchForm, search );
  }
}
main( document );
