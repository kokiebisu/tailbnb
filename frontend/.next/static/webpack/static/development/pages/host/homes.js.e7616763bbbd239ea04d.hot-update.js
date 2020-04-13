webpackHotUpdate("static/development/pages/host/homes.js",{

/***/ "./src/pages/host/homes.tsx":
/*!**********************************!*\
  !*** ./src/pages/host/homes.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modals/HostMenuModal */ "./src/components/modals/HostMenuModal.jsx");
/* harmony import */ var _components_host_layout_HostHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/host/layout/HostHeader */ "./src/components/host/layout/HostHeader.tsx");
/* harmony import */ var _components_hosthomes_layout_WhyHost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hosthomes/layout/WhyHost */ "./src/components/hosthomes/layout/WhyHost.tsx");
/* harmony import */ var _components_hosthomes_layout_HostingSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hosthomes/layout/HostingSteps */ "./src/components/hosthomes/layout/HostingSteps.tsx");
/* harmony import */ var _components_hosthomes_layout_Covered__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hosthomes/layout/Covered */ "./src/components/hosthomes/layout/Covered.tsx");
/* harmony import */ var _components_hosthomes_layout_SimplePayments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hosthomes/layout/SimplePayments */ "./src/components/hosthomes/layout/SimplePayments.tsx");
/* harmony import */ var _components_hosthomes_layout_Worldwide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hosthomes/layout/Worldwide */ "./src/components/hosthomes/layout/Worldwide.tsx");
/* harmony import */ var _components_hosthomes_layout_HostAbout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/hosthomes/layout/HostAbout */ "./src/components/hosthomes/layout/HostAbout.tsx");
/* harmony import */ var _components_host_layout_Questions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/host/layout/Questions */ "./src/components/host/layout/Questions.tsx");
/* harmony import */ var _components_hosthomes_layout_MoreHosting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/hosthomes/layout/MoreHosting */ "./src/components/hosthomes/layout/MoreHosting.tsx");
/* harmony import */ var _components_host_layout_HostReady__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/host/layout/HostReady */ "./src/components/host/layout/HostReady.tsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
/* harmony import */ var _components_host_functions_HostHomesCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/host/functions/HostHomesCard */ "./src/components/host/functions/HostHomesCard.tsx");
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/host/homes.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Modals

 // Layout











 // Functions

 // Images

var background = __webpack_require__(/*! ../../../public/img/high/hosthome.jpg */ "./public/img/high/hosthome.jpg");

var readyOverview = __webpack_require__(/*! ../../../public/img/high/ready-earn-overview.jpg */ "./public/img/high/ready-earn-overview.jpg"); // Next


var homes = function homes() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  var changeMenuModal = function changeMenuModal() {
    setMenuModal(!menuModal);
  };

  var questions = [{
    question: 'Who can be an Airbnb host?'
  }, {
    question: 'What is required of guests before booking?'
  }, {
    question: 'How much does it cost to list my space?'
  }, {
    question: 'What protection do I have against property damage?'
  }, {
    question: "How should I choose my listing's price?"
  }, {
    question: 'How can Airbnb help me with setting prices?'
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_host_layout_HostHeader__WEBPACK_IMPORTED_MODULE_2__["HostHeader"], {
    color: "#ffffff",
    section: "overview",
    switchMenuModal: changeMenuModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "w-full max-w-layout mx-auto relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full h-60 md:h-72 lg:h-144 relative flex justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: background,
    style: {
      maxHeight: '60rem'
    },
    className: "object-cover w-full h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "lg:hidden px-6 md:px-0 md:max-w-2.5xl w-full absolute bottom-0 py-6 leading-none tracking-tighter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-4xl text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Earn money as an Airbnb host"))), menuModal ? __jsx(_components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_1__["HostMenuModal"], {
    switchMenuModal: changeMenuModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 22
    }
  }) : null, __jsx(_components_host_functions_HostHomesCard__WEBPACK_IMPORTED_MODULE_13__["HostHomesCard"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx(_components_hosthomes_layout_WhyHost__WEBPACK_IMPORTED_MODULE_3__["WhyHost"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx(_components_hosthomes_layout_HostingSteps__WEBPACK_IMPORTED_MODULE_4__["HostingSteps"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx(_components_hosthomes_layout_Covered__WEBPACK_IMPORTED_MODULE_5__["Covered"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx(_components_hosthomes_layout_SimplePayments__WEBPACK_IMPORTED_MODULE_6__["SimplePayments"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), __jsx(_components_hosthomes_layout_Worldwide__WEBPACK_IMPORTED_MODULE_7__["Worldwide"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx(_components_hosthomes_layout_HostAbout__WEBPACK_IMPORTED_MODULE_8__["HostAbout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx(_components_host_layout_Questions__WEBPACK_IMPORTED_MODULE_9__["Questions"], {
    title: "Frequently asked questions",
    questions: questions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), __jsx(_components_hosthomes_layout_MoreHosting__WEBPACK_IMPORTED_MODULE_10__["MoreHosting"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), __jsx(_components_host_layout_HostReady__WEBPACK_IMPORTED_MODULE_11__["HostReady"], {
    img: readyOverview,
    title: "Ready to earn?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_12__["NewFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (homes);

/***/ })

})
//# sourceMappingURL=homes.js.e7616763bbbd239ea04d.hot-update.js.map