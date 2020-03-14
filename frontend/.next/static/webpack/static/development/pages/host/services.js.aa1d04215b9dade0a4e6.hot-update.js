webpackHotUpdate("static/development/pages/host/services.js",{

/***/ "./src/components/host/functions/HostReady.jsx":
false,

/***/ "./src/components/host/layout/HostReady.jsx":
/*!**************************************************!*\
  !*** ./src/components/host/layout/HostReady.jsx ***!
  \**************************************************/
/*! exports provided: HostReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostReady", function() { return HostReady; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/host/layout/HostReady.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var HostReady = function HostReady(_ref) {
  var img = _ref.img,
      title = _ref.title;
  return __jsx("div", {
    className: "w-full md:max-w-4xl lg:max-w-7xl mx-auto mt-8 mb-12 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-96 md:h-112",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    className: "h-full w-full object-cover",
    src: img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), __jsx("div", {
    id: "ready",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-white text-4xl md:text-6xl tracking-tighter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title)), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "bg-white py-3 px-5 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Get started")))));
};

/***/ }),

/***/ "./src/pages/host/services.jsx":
/*!*************************************!*\
  !*** ./src/pages/host/services.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modals/HostMenuModal */ "./src/components/modals/HostMenuModal.jsx");
/* harmony import */ var _components_layout_HostHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/HostHeader */ "./src/components/layout/HostHeader.jsx");
/* harmony import */ var _components_hostservices_layout_HostServicesBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hostservices/layout/HostServicesBanner */ "./src/components/hostservices/layout/HostServicesBanner.tsx");
/* harmony import */ var _components_hostservices_layout_FindTeam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hostservices/layout/FindTeam */ "./src/components/hostservices/layout/FindTeam.tsx");
/* harmony import */ var _components_hostservices_layout_GetStarted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hostservices/layout/GetStarted */ "./src/components/hostservices/layout/GetStarted.tsx");
/* harmony import */ var _components_hostservices_layout_PeaceOfMind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hostservices/layout/PeaceOfMind */ "./src/components/hostservices/layout/PeaceOfMind.tsx");
/* harmony import */ var _components_host_layout_Questions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/host/layout/Questions */ "./src/components/host/layout/Questions.tsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
/* harmony import */ var _components_host_functions_FindOutCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/host/functions/FindOutCard */ "./src/components/host/functions/FindOutCard.jsx");
/* harmony import */ var _components_host_layout_HostReady__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/host/layout/HostReady */ "./src/components/host/layout/HostReady.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/host/services.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Modals

 // Layout







 // Functions


 // Images

var readyServices = __webpack_require__(/*! ../../../public/img/high/ready-earn-services.jpg */ "./public/img/high/ready-earn-services.jpg");

var services = function services() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  var changeMenuModal = function changeMenuModal() {
    setMenuModal(!menuModal);
  };

  var questions = [{
    question: 'Who will my hosting team be?'
  }, {
    question: 'Am I covered if something goes wrong?'
  }, {
    question: 'Am I eligible for hosting services?'
  }, {
    question: 'What do I do with my personal belongings?'
  }, {
    question: 'I run a hosting team. Can I offer hosting services through Airbnb?'
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_HostHeader__WEBPACK_IMPORTED_MODULE_2__["HostHeader"], {
    color: "#008489",
    section: "hosting services",
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), menuModal ? __jsx(_components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_1__["HostMenuModal"], {
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }) : null, __jsx(_components_hostservices_layout_HostServicesBanner__WEBPACK_IMPORTED_MODULE_3__["HostServicesBanner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(_components_hostservices_layout_FindTeam__WEBPACK_IMPORTED_MODULE_4__["FindTeam"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(_components_hostservices_layout_GetStarted__WEBPACK_IMPORTED_MODULE_5__["GetStarted"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("div", {
    className: "my-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_components_host_functions_FindOutCard__WEBPACK_IMPORTED_MODULE_9__["FindOutCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx(_components_hostservices_layout_PeaceOfMind__WEBPACK_IMPORTED_MODULE_6__["PeaceOfMind"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(_components_host_layout_Questions__WEBPACK_IMPORTED_MODULE_7__["Questions"], {
    title: "Your questions answered",
    questions: questions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_components_host_layout_HostReady__WEBPACK_IMPORTED_MODULE_10__["HostReady"], {
    title: "Ready to connect with a hosting team?",
    img: readyServices,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_8__["NewFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (services);

/***/ })

})
//# sourceMappingURL=services.js.aa1d04215b9dade0a4e6.hot-update.js.map