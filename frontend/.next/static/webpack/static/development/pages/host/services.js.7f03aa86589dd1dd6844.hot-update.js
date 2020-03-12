webpackHotUpdate("static/development/pages/host/services.js",{

/***/ "./src/components/hostservices/functions/FindOutCard.jsx":
/*!***************************************************************!*\
  !*** ./src/components/hostservices/functions/FindOutCard.jsx ***!
  \***************************************************************/
/*! exports provided: FindOutCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindOutCard", function() { return FindOutCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostservices/functions/FindOutCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var FindOutCard = function FindOutCard() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "hello");
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
/* harmony import */ var _components_hostservices_layout_HostServicesHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/hostservices/layout/HostServicesHeader */ "./src/components/hostservices/layout/HostServicesHeader.tsx");
/* harmony import */ var _components_hostservices_layout_HostServicesBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hostservices/layout/HostServicesBanner */ "./src/components/hostservices/layout/HostServicesBanner.tsx");
/* harmony import */ var _components_hostservices_layout_FindTeam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hostservices/layout/FindTeam */ "./src/components/hostservices/layout/FindTeam.tsx");
/* harmony import */ var _components_hostservices_layout_GetStarted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hostservices/layout/GetStarted */ "./src/components/hostservices/layout/GetStarted.tsx");
/* harmony import */ var _components_hostservices_layout_PeaceOfMind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hostservices/layout/PeaceOfMind */ "./src/components/hostservices/layout/PeaceOfMind.tsx");
/* harmony import */ var _components_hostservices_layout_QuestionsAnswered__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hostservices/layout/QuestionsAnswered */ "./src/components/hostservices/layout/QuestionsAnswered.tsx");
/* harmony import */ var _components_hostservices_layout_ReadyConnect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/hostservices/layout/ReadyConnect */ "./src/components/hostservices/layout/ReadyConnect.tsx");
/* harmony import */ var _components_functions_NewFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/functions/NewFooter */ "./src/components/functions/NewFooter.tsx");
/* harmony import */ var _components_hostservices_functions_FindOutCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/hostservices/functions/FindOutCard */ "./src/components/hostservices/functions/FindOutCard.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/host/services.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Modals

 // Layout








 // Functions



var services = function services() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  var changeMenuModal = function changeMenuModal() {
    setMenuModal(!menuModal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_hostservices_layout_HostServicesHeader__WEBPACK_IMPORTED_MODULE_2__["HostServicesHeader"], {
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), menuModal ? __jsx(_components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_1__["HostMenuModal"], {
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }) : null, __jsx(_components_hostservices_layout_HostServicesBanner__WEBPACK_IMPORTED_MODULE_3__["HostServicesBanner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_components_hostservices_layout_FindTeam__WEBPACK_IMPORTED_MODULE_4__["FindTeam"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_components_hostservices_layout_GetStarted__WEBPACK_IMPORTED_MODULE_5__["GetStarted"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_hostservices_functions_FindOutCard__WEBPACK_IMPORTED_MODULE_11__["FindOutCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_components_hostservices_layout_PeaceOfMind__WEBPACK_IMPORTED_MODULE_6__["PeaceOfMind"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components_hostservices_layout_QuestionsAnswered__WEBPACK_IMPORTED_MODULE_7__["QuestionsAnswered"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_components_hostservices_layout_ReadyConnect__WEBPACK_IMPORTED_MODULE_8__["ReadyConnect"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_components_functions_NewFooter__WEBPACK_IMPORTED_MODULE_9__["NewFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (services);

/***/ })

})
//# sourceMappingURL=services.js.7f03aa86589dd1dd6844.hot-update.js.map