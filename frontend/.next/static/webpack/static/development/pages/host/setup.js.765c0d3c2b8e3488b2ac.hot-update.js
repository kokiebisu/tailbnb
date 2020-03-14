webpackHotUpdate("static/development/pages/host/setup.js",{

/***/ "./src/components/host/layout/OnePhrase.jsx":
/*!**************************************************!*\
  !*** ./src/components/host/layout/OnePhrase.jsx ***!
  \**************************************************/
/*! exports provided: OnePhrase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnePhrase", function() { return OnePhrase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/host/layout/OnePhrase.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var OnePhrase = function OnePhrase() {
  return __jsx("div", {
    className: "w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto flex justify-center border-t border-b border-gray-300 mb-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "pt-12 pb-6 md:pt-24 md:pb-12 flex flex-col md:items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "md:w-70p lg:w-80p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-2xl md:text-3xl text-gray-750 md:text-center leading-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Over 2 million people host on Airbnb and no host's style is the same.")), __jsx("div", {
    className: "my-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    href: "",
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-green-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Learn what's expected of hosts"))));
};

/***/ }),

/***/ "./src/components/hostsetup/layout/PeopleHost.jsx":
false,

/***/ "./src/pages/host/setup.jsx":
/*!**********************************!*\
  !*** ./src/pages/host/setup.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_HostHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/HostHeader */ "./src/components/layout/HostHeader.jsx");
/* harmony import */ var _components_host_layout_How__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/host/layout/How */ "./src/components/host/layout/How.jsx");
/* harmony import */ var _components_hostsetup_layout_ControlHosting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hostsetup/layout/ControlHosting */ "./src/components/hostsetup/layout/ControlHosting.jsx");
/* harmony import */ var _components_hostsetup_layout_AdvertiseMillions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hostsetup/layout/AdvertiseMillions */ "./src/components/hostsetup/layout/AdvertiseMillions.jsx");
/* harmony import */ var _components_hostsetup_layout_HostingSupport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hostsetup/layout/HostingSupport */ "./src/components/hostsetup/layout/HostingSupport.jsx");
/* harmony import */ var _components_host_layout_OnePhrase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/host/layout/OnePhrase */ "./src/components/host/layout/OnePhrase.jsx");
/* harmony import */ var _components_host_layout_QuestionsAnswered__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/host/layout/QuestionsAnswered */ "./src/components/host/layout/QuestionsAnswered.tsx");
/* harmony import */ var _components_host_functions_HostReady__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/host/functions/HostReady */ "./src/components/host/functions/HostReady.jsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
/* harmony import */ var _components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/modals/HostMenuModal */ "./src/components/modals/HostMenuModal.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/host/setup.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Layout









 // Modals

 // Images

var howSetup = __webpack_require__(/*! ../../../public/img/high/how-setup.jpg */ "./public/img/high/how-setup.jpg");

var setup = function setup() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  var changeMenuModal = function changeMenuModal() {
    setMenuModal(!menuModal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_HostHeader__WEBPACK_IMPORTED_MODULE_1__["HostHeader"], {
    color: "#008489",
    section: "setup",
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), menuModal ? __jsx(_components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_10__["HostMenuModal"], {
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }) : null, __jsx(_components_host_layout_How__WEBPACK_IMPORTED_MODULE_2__["How"], {
    page: "setup",
    title: "How to start hosting",
    description: "Listing a home on Airbnb has never been easier or more customizable. You\u2019re just a few steps away from earning money and reaching millions of global travellers.",
    img: howSetup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_components_hostsetup_layout_ControlHosting__WEBPACK_IMPORTED_MODULE_3__["ControlHosting"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_components_hostsetup_layout_AdvertiseMillions__WEBPACK_IMPORTED_MODULE_4__["AdvertiseMillions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_components_hostsetup_layout_HostingSupport__WEBPACK_IMPORTED_MODULE_5__["HostingSupport"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_components_host_layout_OnePhrase__WEBPACK_IMPORTED_MODULE_6__["OnePhrase"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_components_host_layout_QuestionsAnswered__WEBPACK_IMPORTED_MODULE_7__["QuestionsAnswered"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(_components_host_functions_HostReady__WEBPACK_IMPORTED_MODULE_8__["HostReady"], {
    page: "setup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_9__["NewFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (setup);

/***/ })

})
//# sourceMappingURL=setup.js.765c0d3c2b8e3488b2ac.hot-update.js.map