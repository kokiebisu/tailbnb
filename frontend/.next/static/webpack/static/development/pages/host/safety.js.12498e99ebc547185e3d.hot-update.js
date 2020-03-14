webpackHotUpdate("static/development/pages/host/safety.js",{

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
/* harmony import */ var _components_host_layout_How__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/host/layout/How */ "./src/components/host/layout/How.jsx");
/* harmony import */ var _components_hostsafety_layout_GreatGuests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hostsafety/layout/GreatGuests */ "./src/components/hostsafety/layout/GreatGuests.tsx");
/* harmony import */ var _components_hostsafety_layout_HostConfidence__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hostsafety/layout/HostConfidence */ "./src/components/hostsafety/layout/HostConfidence.jsx");
/* harmony import */ var _components_hostsafety_layout_HereAlways__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hostsafety/layout/HereAlways */ "./src/components/hostsafety/layout/HereAlways.jsx");
/* harmony import */ var _components_host_layout_OnePhrase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/host/layout/OnePhrase */ "./src/components/host/layout/OnePhrase.jsx");
/* harmony import */ var _components_host_layout_Questions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/host/layout/Questions */ "./src/components/host/layout/Questions.tsx");
/* harmony import */ var _components_host_functions_HostReady__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/host/functions/HostReady */ "./src/components/host/functions/HostReady.jsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/host/safety.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Modals

 // Layout











var howSafety = __webpack_require__(/*! ../../../public/img/high/how-safety.jpg */ "./public/img/high/how-safety.jpg");

var readySafety = __webpack_require__(/*! ../../../public/img/high/ready-earn-safety.jpg */ "./public/img/high/ready-earn-safety.jpg");

var safety = function safety() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  var changeMenuModal = function changeMenuModal() {
    setMenuModal(!menuModal);
  };

  var questions = [{
    question: 'What is required of guests before booking?'
  }, {
    question: 'How do reviews work?'
  }, {
    question: 'What do I do if a guest breaks something in my place'
  }, {
    question: "What should I do if I'm uncomfortable hosting someone"
  }, {
    question: "What's the difference between Airbnb's Host Guarantee and Host Protection Insurance"
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_HostHeader__WEBPACK_IMPORTED_MODULE_2__["HostHeader"], {
    color: "#008489",
    section: "safety",
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_components_host_layout_How__WEBPACK_IMPORTED_MODULE_3__["How"], {
    page: "safety",
    title: "How Airbnb protects hosts",
    description: "We've taken extensive measures to help keep you, your home, and your guests safe.",
    img: howSafety,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_components_hostsafety_layout_GreatGuests__WEBPACK_IMPORTED_MODULE_4__["GreatGuests"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_components_hostsafety_layout_HostConfidence__WEBPACK_IMPORTED_MODULE_5__["HostConfidence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(_components_hostsafety_layout_HereAlways__WEBPACK_IMPORTED_MODULE_6__["HereAlways"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(_components_host_layout_OnePhrase__WEBPACK_IMPORTED_MODULE_7__["OnePhrase"], {
    title: "Travellers took 49 million trips with Airbnb in 2017. Only 1 in 25,000 resulted in a significant property damage claim.",
    link: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_components_host_layout_Questions__WEBPACK_IMPORTED_MODULE_8__["Questions"], {
    title: "Your questions answered",
    questions: questions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(_components_host_functions_HostReady__WEBPACK_IMPORTED_MODULE_9__["HostReady"], {
    img: readySafety,
    title: "Ready to start hosting?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_10__["NewFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (safety);

/***/ })

})
//# sourceMappingURL=safety.js.12498e99ebc547185e3d.hot-update.js.map