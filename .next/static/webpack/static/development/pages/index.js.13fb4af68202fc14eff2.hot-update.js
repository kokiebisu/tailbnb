webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ExploreCard.js":
/*!***************************************!*\
  !*** ./src/components/ExploreCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  title
}) => {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const setLoad = () => {
    sleep(4000).then(() => {
      setLoaded(true);
    });
  };

  setLoad();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full w-32 sm:w-full flex flex-wrap items-center justify-start shadow-md rounded-xl bg-white"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    className: "h-24 w-full md:h-full xl:h-20 rounded-b-none xl:h-full xl:w-32 rounded-lg xl:rounded-xl xl:rounded-r-none",
    alt: ""
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 80,
    width: 130
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm py-3 xl:py-0 pl-4 sm:pl-4 text-gray-750 font-semibold"
  }, title)));
});

/***/ })

})
//# sourceMappingURL=index.js.13fb4af68202fc14eff2.hot-update.js.map