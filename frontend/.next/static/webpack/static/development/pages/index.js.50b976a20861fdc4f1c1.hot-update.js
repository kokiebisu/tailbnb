webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/modals/HelpModal.js":
/*!********************************************!*\
  !*** ./src/components/modals/HelpModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (() => {
  const helpsearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const searchFocused = bool => {
    if (bool) {
      helpsearch.current.style.border = '1.5px solid #008489';
    } else {
      helpsearch.current.style.border = 'none';
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: () => {
      searchFocused(false);
    },
    className: "bg-white z-100 md:block fixed right-0 top-0 h-screen w-104 shadow-xl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full flex justify-center items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "py-5 text-gray-750"
  }, "Recommended help")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b border-t border-gray-300 p-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 mb-2"
  }, "Search by keyword"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: searchFocused(true),
    ref: helpsearch,
    id: "helpsearch",
    className: "flex border border-gray-300 rounded"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/12 relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "absolute top-0 pl-2 pt-2 h-6 w-6",
    style: {
      fill: '#767676'
    },
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m10.7227 19.9083c-4.919-.706-8.336-5.266-7.63-10.185.704-4.919 5.264-8.336 10.184-7.631 4.919.706 8.336 5.265 7.632 10.185-.706 4.92-5.266 8.336-10.186 7.631m11.65 2.76-3.729-4.196c1.706-1.514 2.905-3.618 3.254-6.053.783-5.467-3.013-10.533-8.479-11.317-5.467-.784-10.534 3.013-11.316 8.48-.784 5.466 3.012 10.532 8.478 11.315 2.675.384 5.254-.329 7.283-1.798l3.762 4.233c.184.207.5.225.706.042.206-.184.225-.5.041-.706"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-11/12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    type: "text",
    className: "w-full h-8 text-sm text-gray-750 focus:outline-none",
    placeholder: "E.g. reservation status"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Recommend Articles")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Help Card here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Explore More Articles By Topic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Help More Modal Here"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Visit the Help Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Give Feedback"));
});

/***/ })

})
//# sourceMappingURL=index.js.50b976a20861fdc4f1c1.hot-update.js.map