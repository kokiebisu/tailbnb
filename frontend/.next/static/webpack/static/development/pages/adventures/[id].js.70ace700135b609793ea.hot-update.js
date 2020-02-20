webpackHotUpdate("static/development/pages/adventures/[id].js",{

/***/ "./src/pages/adventures/[id].js":
/*!**************************************!*\
  !*** ./src/pages/adventures/[id].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! unsplash-js */ "./node_modules/unsplash-js/lib/unsplash.js");
/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(unsplash_js__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (() => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [photos, setPhotos] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const unsplash = new unsplash_js__WEBPACK_IMPORTED_MODULE_4___default.a({
    accessKey: 'RchVxgkvTlsApnvD7fdLAxFzqAa0yi6OPLS3pTWs3W4',
    secret: 'itaZc8B-qpxEh4q-OPI3jBP_SGQnRPB_DTEGzli26Lc'
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    unsplash.search.photos('home', 1, 10, {
      orientation: 'portrait'
    }).then(unsplash_js__WEBPACK_IMPORTED_MODULE_4__["toJson"]).then(json => {
      let photoTempArray = [];

      for (let i = 0; i < 10; i++) {
        photoTempArray.push(json.results[i].urls.raw);
      }

      setPhotos(photoTempArray);
      setIsLoading(false);
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Hello ", router.query.id), console.log(isLoading), isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Loading") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Hello"));
});

/***/ })

})
//# sourceMappingURL=[id].js.70ace700135b609793ea.hot-update.js.map