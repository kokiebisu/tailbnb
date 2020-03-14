webpackHotUpdate("static/development/pages/host/safety.js",{

/***/ "./src/components/host/functions/CheckCard.tsx":
/*!*****************************************************!*\
  !*** ./src/components/host/functions/CheckCard.tsx ***!
  \*****************************************************/
/*! exports provided: CheckCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckCard", function() { return CheckCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/host/functions/CheckCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var CheckCard = function CheckCard(_ref) {
  var description = _ref.description;
  return __jsx("div", {
    className: "md:w-90p mb-6 lg:mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "flex text-gray-750 items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "h-4 w-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: '#008489'
    },
    className: "h-full w-full",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("path", {
    d: "m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), __jsx("div", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, description))));
};

/***/ }),

/***/ "./src/components/hostsafety/functions/HereAlwaysCheck.jsx":
false,

/***/ "./src/components/hostsafety/layout/HereAlways.jsx":
/*!*********************************************************!*\
  !*** ./src/components/hostsafety/layout/HereAlways.jsx ***!
  \*********************************************************/
/*! exports provided: HereAlways */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HereAlways", function() { return HereAlways; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _host_functions_CheckCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../host/functions/CheckCard */ "./src/components/host/functions/CheckCard.tsx");
/* harmony import */ var _host_wrapper_HostSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../host/wrapper/HostSection */ "./src/components/host/wrapper/HostSection.jsx");
/* harmony import */ var _host_functions_CharacteristicCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../host/functions/CharacteristicCard */ "./src/components/host/functions/CharacteristicCard.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostsafety/layout/HereAlways.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Functions





var herealways = __webpack_require__(/*! ../../../../public/img/high/here-always.jpg */ "./public/img/high/here-always.jpg");

var HereAlways = function HereAlways() {
  return __jsx(_host_wrapper_HostSection__WEBPACK_IMPORTED_MODULE_2__["HostSection"], {
    title: "We're here for you 24/7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "my-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "lg:h-128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("img", {
    className: "w-full h-full object-cover",
    src: herealways,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), __jsx("div", {
    className: "lg:flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_host_functions_CharacteristicCard__WEBPACK_IMPORTED_MODULE_3__["CharacteristicCard"], {
    children: null,
    title: "What our team can do for you",
    description: "Our global team is tanding by 24/7 to support you and your guests by phone, email, and live chat.",
    link: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    className: "lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(HereAlwaysCheck, {
    title: "Rebooking assistance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_host_functions_CheckCard__WEBPACK_IMPORTED_MODULE_1__["CheckCard"], {
    title: "Refunds",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_host_functions_CheckCard__WEBPACK_IMPORTED_MODULE_1__["CheckCard"], {
    title: "Reimbursements",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_host_functions_CheckCard__WEBPACK_IMPORTED_MODULE_1__["CheckCard"], {
    title: "Host Guarantee and insurance claims",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_host_functions_CheckCard__WEBPACK_IMPORTED_MODULE_1__["CheckCard"], {
    title: "Mediation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })))) // <div className='w-full px-6 md:max-w-xl lg:max-w-5xl mx-auto'>
  //   <div className='mb-4 md:mb-0 flex md:justify-center'>
  //     <div
  //       style={{ width: 70, height: 2 }}
  //       className='bg-gray-650 rounded-lg'></div>
  //   </div>
  //   <div className='flex md:justify-center mb-12 mt-2'>
  //     <h3
  //       style={{ fontFamily: 'airbnb-bold' }}
  //       className='text-gray-750 text-4xl lg:text-6xl tracking-tighter'>
  //       We're here for you 24/7
  //     </h3>
  //   </div>
  // </div>
  ;
};

/***/ })

})
//# sourceMappingURL=safety.js.e2ee0389186d2c3863f2.hot-update.js.map