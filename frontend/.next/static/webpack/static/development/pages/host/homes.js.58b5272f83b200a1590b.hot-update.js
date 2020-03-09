webpackHotUpdate("static/development/pages/host/homes.js",{

/***/ "./src/components/hosthomes/functions/WorldwideCard.tsx":
/*!**************************************************************!*\
  !*** ./src/components/hosthomes/functions/WorldwideCard.tsx ***!
  \**************************************************************/
/*! exports provided: WorldwideCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldwideCard", function() { return WorldwideCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hosthomes/functions/WorldwideCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var WorldwideCard = function WorldwideCard() {
  return __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-1/3 flex flex-col items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h3", {
    className: "text-6xl text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "2.9M")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Hosts on Airbnb")));
};

/***/ }),

/***/ "./src/pages/host/homes.jsx":
/*!**********************************!*\
  !*** ./src/pages/host/homes.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hosthomes_layout_HostHomesHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/hosthomes/layout/HostHomesHeader */ "./src/components/hosthomes/layout/HostHomesHeader.tsx");
/* harmony import */ var _components_hosthomes_layout_WhyHost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/hosthomes/layout/WhyHost */ "./src/components/hosthomes/layout/WhyHost.tsx");
/* harmony import */ var _components_hosthomes_layout_HostingSteps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hosthomes/layout/HostingSteps */ "./src/components/hosthomes/layout/HostingSteps.tsx");
/* harmony import */ var _components_hosthomes_layout_Covered__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hosthomes/layout/Covered */ "./src/components/hosthomes/layout/Covered.tsx");
/* harmony import */ var _components_hosthomes_layout_SimplePayments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hosthomes/layout/SimplePayments */ "./src/components/hosthomes/layout/SimplePayments.tsx");
/* harmony import */ var _components_hosthomes_functions_HostHomesCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hosthomes/functions/HostHomesCard */ "./src/components/hosthomes/functions/HostHomesCard.tsx");
/* harmony import */ var _components_hosthomes_functions_WorldwideCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hosthomes/functions/WorldwideCard */ "./src/components/hosthomes/functions/WorldwideCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/host/homes.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Layout





 // Functions




var background = __webpack_require__(/*! ../../../public/img/high/hosthome.jpg */ "./public/img/high/hosthome.jpg");

var homes = function homes() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_hosthomes_layout_HostHomesHeader__WEBPACK_IMPORTED_MODULE_1__["HostHomesHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("div", {
    className: "w-full max-w-layout mx-auto relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("img", {
    src: background,
    style: {
      maxHeight: '60rem'
    },
    className: "w-full relative object-cover h-144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx(_components_hosthomes_functions_HostHomesCard__WEBPACK_IMPORTED_MODULE_6__["HostHomesCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_components_hosthomes_layout_WhyHost__WEBPACK_IMPORTED_MODULE_2__["WhyHost"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_components_hosthomes_layout_HostingSteps__WEBPACK_IMPORTED_MODULE_3__["HostingSteps"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_components_hosthomes_layout_Covered__WEBPACK_IMPORTED_MODULE_4__["Covered"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_hosthomes_layout_SimplePayments__WEBPACK_IMPORTED_MODULE_5__["SimplePayments"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("div", {
    className: "w-full max-w-5xl mx-auto py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: 70,
      height: 2
    },
    className: "bg-gray-650 rounded-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("div", {
    className: "flex justify-center mb-12 mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-850 text-6xl tracking-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Hosts like you, worldwide")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_components_hosthomes_functions_WorldwideCard__WEBPACK_IMPORTED_MODULE_7__["WorldwideCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (homes);

/***/ })

})
//# sourceMappingURL=homes.js.58b5272f83b200a1590b.hot-update.js.map