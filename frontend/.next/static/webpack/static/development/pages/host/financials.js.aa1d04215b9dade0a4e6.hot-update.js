webpackHotUpdate("static/development/pages/host/financials.js",{

/***/ "./public/img/high/ready-earn-setup.jpg":
/*!**********************************************!*\
  !*** ./public/img/high/ready-earn-setup.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ready-earn-setup-d6b9785c1c09fbc7684375d6b3314148.jpg";

/***/ }),

/***/ "./src/pages/host/financials.jsx":
/*!***************************************!*\
  !*** ./src/pages/host/financials.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_host_layout_How__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/host/layout/How */ "./src/components/host/layout/How.jsx");
/* harmony import */ var _components_layout_HostHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/HostHeader */ "./src/components/layout/HostHeader.jsx");
/* harmony import */ var _components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modals/HostMenuModal */ "./src/components/modals/HostMenuModal.jsx");
/* harmony import */ var _components_hostfinancials_layout_GreatPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hostfinancials/layout/GreatPrice */ "./src/components/hostfinancials/layout/GreatPrice.jsx");
/* harmony import */ var _components_host_functions_FindOutCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/host/functions/FindOutCard */ "./src/components/host/functions/FindOutCard.jsx");
/* harmony import */ var _components_hostfinancials_layout_SeamlessPayments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hostfinancials/layout/SeamlessPayments */ "./src/components/hostfinancials/layout/SeamlessPayments.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/host/financials.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Layout




 // Functions


 // Images

var readyFinancial = __webpack_require__(/*! ../../../public/img/high/ready-earn-setup.jpg */ "./public/img/high/ready-earn-setup.jpg");

var financials = function financials() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  var changeMenuModal = function changeMenuModal() {
    setMenuModal(!menuModal);
  };

  var questions = [{
    question: 'How much does it cost to list my space?'
  }, {
    question: "How do I figure out how much I'll get paid?"
  }, {
    question: 'How can Airbnb help me with setting prices?'
  }, {
    question: 'When can I expect to get paid?'
  }, {
    question: "How should I choose my listing's price?"
  }, {
    question: 'How do taxes work for hosts?'
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_HostHeader__WEBPACK_IMPORTED_MODULE_2__["HostHeader"], {
    color: "#008489",
    section: "safety",
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), menuModal ? __jsx(_components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_3__["HostMenuModal"], {
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }) : null, __jsx(_components_host_layout_How__WEBPACK_IMPORTED_MODULE_1__["How"], {
    page: "Financials",
    title: "How you make money on Airbnb",
    description: "With Airbnb, enjoy a painless payment system, low fees, and freedom over what you charge.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("div", {
    className: "my-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_components_host_functions_FindOutCard__WEBPACK_IMPORTED_MODULE_5__["FindOutCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx(_components_hostfinancials_layout_SeamlessPayments__WEBPACK_IMPORTED_MODULE_6__["SeamlessPayments"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(_components_hostfinancials_layout_GreatPrice__WEBPACK_IMPORTED_MODULE_4__["GreatPrice"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(Questions, {
    title: "Your questions answered",
    questions: questions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(HostReady, {
    title: "Ready to earn?",
    img: readyFinancial,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (financials);

/***/ })

})
//# sourceMappingURL=financials.js.aa1d04215b9dade0a4e6.hot-update.js.map