"use strict";
exports.id = 257;
exports.ids = [257];
exports.modules = {

/***/ 3787:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
// eslint-disable-next-line import/no-extraneous-dependencies

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _client = __webpack_require__(7597);
const _appcallserver = __webpack_require__(6942);
function _default(id) {
    return (0, _client.createServerReference)(id, _appcallserver.callServer);
}

//# sourceMappingURL=action-client-wrapper.js.map

/***/ }),

/***/ 5553:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
}));
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== "function") {
            throw new Error(`A "use server" file can only export async functions, found ${typeof action}.`);
        }
    }
} //# sourceMappingURL=action-proxy.js.map


/***/ })

};
;