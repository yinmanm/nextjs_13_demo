"use strict";
(() => {
var exports = {};
exports.id = 246;
exports.ids = [246];
exports.modules = {

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 5599:
/***/ ((module) => {

module.exports = require("lodash/isArray");

/***/ }),

/***/ 2327:
/***/ ((module) => {

module.exports = require("lodash/isBoolean");

/***/ }),

/***/ 5716:
/***/ ((module) => {

module.exports = require("lodash/isFunction");

/***/ }),

/***/ 6069:
/***/ ((module) => {

module.exports = require("lodash/isNil");

/***/ }),

/***/ 7078:
/***/ ((module) => {

module.exports = require("lodash/isNumber");

/***/ }),

/***/ 7486:
/***/ ((module) => {

module.exports = require("lodash/isPlainObject");

/***/ }),

/***/ 7026:
/***/ ((module) => {

module.exports = require("lodash/isString");

/***/ }),

/***/ 7314:
/***/ ((module) => {

module.exports = require("lodash/keys");

/***/ }),

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 5477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 1670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/airtable/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "base": () => (base)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6145);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9532);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/airtable/lib/airtable.js
var airtable = __webpack_require__(9352);
var airtable_default = /*#__PURE__*/__webpack_require__.n(airtable);
;// CONCATENATED MODULE: ./app/api/airtable/route.js

const base = new (airtable_default())({
    apiKey: "keykr8vsePuSxilWM"
}).base("appar2QAK2EBHEzwj");


;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fairtable%2Froute&name=app%2Fapi%2Fairtable%2Froute&pagePath=private-next-app-dir%2Fapi%2Fairtable%2Froute.js&appDir=%2FUsers%2Fyinmanman%2FDownloads%2Fnextjs_13_demo%2Fapp&appPaths=%2Fapi%2Fairtable%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/airtable",
    resolvedPagePath: "/Users/yinmanman/Downloads/nextjs_13_demo/app/api/airtable/route.js",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/airtable/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [79,601,352], () => (__webpack_exec__(1670)));
module.exports = __webpack_exports__;

})();