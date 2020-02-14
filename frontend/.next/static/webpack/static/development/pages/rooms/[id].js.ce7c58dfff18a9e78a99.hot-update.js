webpackHotUpdate("static/development/pages/rooms/[id].js",{

/***/ "./src/components/wrapper/Section.js":
/*!*******************************************!*\
  !*** ./src/components/wrapper/Section.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  phrase,
  children
}) => {
  const renderContent = phrase => {
    if (phrase) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-2xl text-gray-850 pt-3"
      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-md mb-5 text-gray-850 pb-3"
      }, phrase));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        style: {
          fontFamily: 'airbnb-bold'
        },
        className: "text-gray-750 text-2xl pt-3 pb-5"
      }, title));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-5 md:px-10 lg:max-w-5.5xl xl:px-0 mx-auto py-5 w-3/4"
  }, renderContent(phrase), children);
});

/***/ })

})
//# sourceMappingURL=[id].js.ce7c58dfff18a9e78a99.hot-update.js.map