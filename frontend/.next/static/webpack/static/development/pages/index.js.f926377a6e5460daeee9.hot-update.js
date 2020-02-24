webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/modals/HelpModal.js":
/*!********************************************!*\
  !*** ./src/components/modals/HelpModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_HelpCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/HelpCard */ "./src/components/presentational/HelpCard.js");
/* harmony import */ var _presentational_HelpAdditional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../presentational/HelpAdditional */ "./src/components/presentational/HelpAdditional.js");
 // Components



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [word, setWord] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [accountModal, setAccountModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleChange = event => {
    return setWord(event.target.value);
  };

  const questions = [{
    title: 'How do I create an account?',
    answer: "If you don't have an Airbnb account yet, go to airbnb.com and click Sign Up. You can sign up using your email address, Facebook account, Google account, or Apple ID. Signing up and creating an Airbnb account is free. <br>After you sign up, be sure to complete your account before booking a reservation. "
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white z-100 md:block fixed top-0 right-0 h-screen w-104 shadow-xl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full flex justify-center items-center "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "py-5 text-gray-750"
  }, "Recommended help")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b border-t border-gray-300 p-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 mb-2"
  }, "Search by keyword"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "helpsearch",
    className: "flex border border-gray-300 rounded"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/12 relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "absolute top-0 pl-2 pt-2 h-6 w-6",
    style: {
      fill: '#767676'
    },
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m10.7227 19.9083c-4.919-.706-8.336-5.266-7.63-10.185.704-4.919 5.264-8.336 10.184-7.631 4.919.706 8.336 5.265 7.632 10.185-.706 4.92-5.266 8.336-10.186 7.631m11.65 2.76-3.729-4.196c1.706-1.514 2.905-3.618 3.254-6.053.783-5.467-3.013-10.533-8.479-11.317-5.467-.784-10.534 3.013-11.316 8.48-.784 5.466 3.012 10.532 8.478 11.315 2.675.384 5.254-.329 7.283-1.798l3.762 4.233c.184.207.5.225.706.042.206-.184.225-.5.041-.706"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-11/12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    value: word,
    onChange: handleChange,
    style: {
      fontFamily: 'airbnb-medium'
    },
    type: "text",
    className: "w-full h-8 text-sm text-gray-750 focus:outline-none",
    placeholder: "E.g. reservation status"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-8 mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "uppercase text-xs text-gray-750"
  }, "Recommended Articles")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_HelpCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: questions[0].title,
    answer: questions[0].answer
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_HelpCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: questions[0].title,
    answer: questions[0].answer
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "uppercase text-gray-750 text-xs"
  }, "Explore More Articles By Topic")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_HelpAdditional__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Reservation requests"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-red-500 a flex flex-col justify-end items-center my-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-11/12 bg-green-850 py-2 text-white rounded"
  }, "Visit the Help Centre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "border-b border-green-850 text-green-850 text-sm",
    href: "#"
  }, "Give Feedback")));
});

/***/ })

})
//# sourceMappingURL=index.js.f926377a6e5460daeee9.hot-update.js.map