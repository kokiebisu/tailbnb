webpackHotUpdate("static/development/pages/host/safety.js",{

/***/ "./src/components/hostsafety/containers/HostConfidence.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/hostsafety/containers/HostConfidence.jsx ***!
  \*****************************************************************/
/*! exports provided: HostConfidence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostConfidence", function() { return HostConfidence; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostsafety/containers/HostConfidence.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var HostConfidence = function HostConfidence() {
  return __jsx("div", {
    className: "w-full px-6 md:max-w-xl lg:max-w-5xl mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "mb-4 md:mb-0 flex md:justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
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
      lineNumber: 7
    },
    __self: this
  })), __jsx("div", {
    className: "flex md:justify-center mb-12 mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-4xl lg:text-6xl tracking-tighter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Control how you host")));
};

/***/ }),

/***/ "./src/pages/host/safety.jsx":
/*!***********************************!*\
  !*** ./src/pages/host/safety.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modals/HostMenuModal */ "./src/components/modals/HostMenuModal.jsx");
/* harmony import */ var _components_layout_HostHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/HostHeader */ "./src/components/layout/HostHeader.jsx");
/* harmony import */ var _components_host_containers_How__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/host/containers/How */ "./src/components/host/containers/How.jsx");
/* harmony import */ var _components_hostsafety_containers_GreatGuests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hostsafety/containers/GreatGuests */ "./src/components/hostsafety/containers/GreatGuests.jsx");
/* harmony import */ var _components_hostsafety_containers_HostConfidence__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hostsafety/containers/HostConfidence */ "./src/components/hostsafety/containers/HostConfidence.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/host/safety.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Modals

 // Layout






var safety = function safety() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  var changeMenuModal = function changeMenuModal() {
    setMenuModal(!menuModal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_HostHeader__WEBPACK_IMPORTED_MODULE_2__["HostHeader"], {
    color: "#008489",
    section: "safety",
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), menuModal ? __jsx(_components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_1__["HostMenuModal"], {
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }) : null, __jsx(_components_host_containers_How__WEBPACK_IMPORTED_MODULE_3__["How"], {
    page: "safety",
    title: "How Airbnb protects hosts",
    description: "We've taken extensive measures to help keep you, your home, and your guests safe.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_components_hostsafety_containers_GreatGuests__WEBPACK_IMPORTED_MODULE_4__["GreatGuests"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_hostsafety_containers_HostConfidence__WEBPACK_IMPORTED_MODULE_5__["HostConfidence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (safety);

/***/ })

})
//# sourceMappingURL=safety.js.8b89a135d3bebcec0703.hot-update.js.map