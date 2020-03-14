webpackHotUpdate("static/development/pages/host/setup.js",{

/***/ "./src/components/host/functions/QuestionCard.jsx":
/*!********************************************************!*\
  !*** ./src/components/host/functions/QuestionCard.jsx ***!
  \********************************************************/
/*! exports provided: QuestionCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCard", function() { return QuestionCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/host/functions/QuestionCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var QuestionCard = function QuestionCard(_ref) {
  var title = _ref.title;
  return __jsx("a", {
    className: "text-green-850 md:text-lg",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, title);
};

/***/ }),

/***/ "./src/components/host/layout/Questions.tsx":
/*!**************************************************!*\
  !*** ./src/components/host/layout/Questions.tsx ***!
  \**************************************************/
/*! exports provided: Questions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questions", function() { return Questions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _host_wrapper_HostSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../host/wrapper/HostSection */ "./src/components/host/wrapper/HostSection.jsx");
/* harmony import */ var _host_functions_QuestionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../host/functions/QuestionCard */ "./src/components/host/functions/QuestionCard.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/host/layout/Questions.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Wrapper

 // Functions


var Questions = function Questions() {
  return __jsx(_host_wrapper_HostSection__WEBPACK_IMPORTED_MODULE_1__["HostSection"], {
    title: "Frequently asked questions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "lg:flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "md:w-full lg:w-1/2 flex lg:justify-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "lg:w-95p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_host_functions_QuestionCard__WEBPACK_IMPORTED_MODULE_2__["QuestionCard"], {
    title: "Who can be an Airbnb host?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("div", {
    className: "my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_host_functions_QuestionCard__WEBPACK_IMPORTED_MODULE_2__["QuestionCard"], {
    title: "What is required of guests before booking?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("div", {
    className: "md:mt-10 lg:my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_host_functions_QuestionCard__WEBPACK_IMPORTED_MODULE_2__["QuestionCard"], {
    title: "How much does it cost to list my space?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "lg:w-1/2 flex lg:justify-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "lg:w-95p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "mt-10 lg:my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_host_functions_QuestionCard__WEBPACK_IMPORTED_MODULE_2__["QuestionCard"], {
    title: "What protection do I have against property damage?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("div", {
    className: "my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_host_functions_QuestionCard__WEBPACK_IMPORTED_MODULE_2__["QuestionCard"], {
    title: "How should I choose my listing's price?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("div", {
    className: "my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_host_functions_QuestionCard__WEBPACK_IMPORTED_MODULE_2__["QuestionCard"], {
    title: "How can Airbnb help me with setting prices?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))))));
};

/***/ }),

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
/* harmony import */ var _components_host_functions_HostReady__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/host/functions/HostReady */ "./src/components/host/functions/HostReady.jsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
/* harmony import */ var _components_host_layout_Questions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/host/layout/Questions */ "./src/components/host/layout/Questions.tsx");
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
    title: "Over 2 million people host on Airbnb and no host's style is the same.",
    link: "Learn what's expected of hosts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_components_host_layout_Questions__WEBPACK_IMPORTED_MODULE_9__["Questions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(_components_host_functions_HostReady__WEBPACK_IMPORTED_MODULE_7__["HostReady"], {
    page: "setup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_8__["NewFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (setup);

/***/ })

})
//# sourceMappingURL=setup.js.c2bcbb569e156e108ec7.hot-update.js.map