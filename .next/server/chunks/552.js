"use strict";
exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 1855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6942);
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3787);



function __build_action__(action, args) {
  return callServer(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ default */ 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("ecaa478d5d44c2bd4bf4b2639ea1aa5821711eb9"));



/***/ }),

/***/ 306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8947);
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5553);
/* __next_internal_action_entry_do_not_use__ default */ 
async function handler(req, res) {
    const result = await _prisma__WEBPACK_IMPORTED_MODULE_0__["default"].buyer.findMany();
    console.log("result", result);
    return result;
}

(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_1__["default"])([
    handler
]);
handler.$$typeof = Symbol.for("react.server.reference");
handler.$$id = "ecaa478d5d44c2bd4bf4b2639ea1aa5821711eb9";
handler.$$bound = null;
handler.$$with_bound = false;


/***/ }),

/***/ 8947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5553);
/* __next_internal_action_entry_do_not_use__ default */ 
const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_1__["default"])([
    prisma
]);
prisma.$$typeof = Symbol.for("react.server.reference");
prisma.$$id = "29f2d0c3cecd443f0da9748d801d4cb0e44f0db1";
prisma.$$bound = null;
prisma.$$with_bound = false;


/***/ })

};
;