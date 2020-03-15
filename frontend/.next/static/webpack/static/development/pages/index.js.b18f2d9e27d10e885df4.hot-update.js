webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/functions/HeaderCard.jsx":
/*!*************************************************!*\
  !*** ./src/components/functions/HeaderCard.jsx ***!
  \*************************************************/
/*! exports provided: HeaderCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCard", function() { return HeaderCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dates */ "./node_modules/react-dates/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modals_GuestPickerModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/GuestPickerModal */ "./src/components/modals/GuestPickerModal.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/HeaderCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



 // Modals


var HeaderCard = function HeaderCard() {
  // Date
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      date = _useState[0],
      setDate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      focused = _useState2[0],
      setFocused = _useState2[1]; // Guest


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      guestModal = _useState3[0],
      setGuestModal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      adultNumber = _useState4[0],
      setAdultNumber = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      childrenNumber = _useState5[0],
      setChildrenNumber = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      infantNumber = _useState6[0],
      setInfantNumber = _useState6[1];

  var guestArrow1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var guestArrow2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var calculateGuests = function calculateGuests(adultNumber, childrenNumber) {
    if (adultNumber === 0 && childrenNumber === 0) {
      return 'Guest';
    } else if (adultNumber + childrenNumber == 1) {
      return "".concat(adultNumber + childrenNumber, " guest");
    } else if (adultNumber + childrenNumber > 1) {
      return "".concat(adultNumber + childrenNumber, " guests");
    }
  };

  var calculateInfant = function calculateInfant(adultNumber, infantNumber) {
    if (adultNumber == 0 || infantNumber === 0) {
      return '';
    } else if (infantNumber === 0) {
      return "".concat(infantNumber, " infant");
    } else if (infantNumber > 0) {
      return "".concat(infantNumber, " infants");
    }
  };

  var rotateArrow = function rotateArrow() {
    gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(guestArrow1, 0.4, {
      rotation: '360_cw',
      opacity: 0.3,
      ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeOut
    });
  };

  var backRotateArrow = function backRotateArrow() {
    gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(guestArrow2, 0.4, {
      rotation: '180_cw',
      opacity: 0.3,
      ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeOut
    });
  };

  return __jsx("div", {
    className: "sm:w-full md:w-100 md:pt-8 md:pb-6 md:mt-10 bg-white md:rounded md:shadow-2xl py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "mx-6 md:mx-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "hidden md:inline-block md:text-3xl text-gray-750 leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Book unique places to ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), "stay and things to do."), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("label", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "block mt-5 mb-2 text-xs text-gray-750 uppercase tracking-wider",
    htmlFor: "where",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Where"), __jsx("input", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full border border-gray-300 p-2 rounded placeholder-gray-900 tracking-wide",
    type: "text",
    id: "where",
    placeholder: "Anywhere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx("div", {
    className: "flex flex-wrap items-stretch justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("label", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "block mt-5 mb-2 text-xs text-gray-750 uppercase",
    htmlFor: "checkin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Check-In"), __jsx("button", {
    onClick: function onClick() {
      return console.log('pressed');
    },
    tyle: {
      fontFamily: 'airbnb-book'
    },
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "dd-mm-yyyy")), __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("label", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "block mt-5 mb-2 text-xs uppercase text-gray-750",
    htmlFor: "checkout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Check-Out"), __jsx("input", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    type: "text",
    id: "checkout",
    placeholder: "dd-mm-yyyy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }))), __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("label", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "block mt-5 mb-2 text-xs uppercase text-gray-750",
    htmlFor: "guests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Guests"), __jsx("div", {
    className: "inline-block relative w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, guestModal ? __jsx("button", {
    style: {
      fontFamily: 'airbnb-book'
    },
    onClick: function onClick(e) {
      e.preventDefault();
      rotateArrow();
      setGuestModal(!guestModal);
    },
    className: "appearance-none pl-2 w-full border border-green-850 py-3 text-left rounded placeholder-gray-900 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, calculateGuests(adultNumber, childrenNumber), adultNumber > 0 && infantNumber > 0 ? ", ".concat(calculateInfant(adultNumber, infantNumber)) : null) : __jsx("button", {
    style: {
      fontFamily: 'airbnb-book'
    },
    onClick: function onClick(e) {
      e.preventDefault();
      backRotateArrow();
      setGuestModal(!guestModal);
    },
    className: "appearance-none pl-2 w-full border border-gray-300 py-3 text-left rounded placeholder-gray-900 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, calculateGuests(adultNumber, childrenNumber), adultNumber > 0 && infantNumber > 0 ? ", ".concat(calculateInfant(adultNumber, infantNumber)) : null), guestModal ? __jsx("div", {
    ref: function ref(el) {
      return guestArrow1 = el;
    },
    style: {},
    className: "pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: '#222222'
    },
    className: "h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }))) : __jsx("div", {
    ref: function ref(el) {
      return guestArrow2 = el;
    },
    style: {},
    className: "pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("svg", {
    className: "h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })))), guestModal ? __jsx(_modals_GuestPickerModal__WEBPACK_IMPORTED_MODULE_3__["GuestPickerModal"], {
    incrementAdult: function incrementAdult() {
      return setAdultNumber(adultNumber + 1);
    },
    decrementAdult: function decrementAdult() {
      return setAdultNumber(adultNumber - 1);
    },
    incrementChildren: function incrementChildren() {
      return setChildrenNumber(childrenNumber + 1);
    },
    decrementChildren: function decrementChildren() {
      return setChildrenNumber(childrenNumber - 1);
    },
    incrementInfant: function incrementInfant() {
      return setInfantNumber(infantNumber + 1);
    },
    decrementInfant: function decrementInfant() {
      return setInfantNumber(infantNumber - 1);
    },
    adult: adultNumber,
    children: childrenNumber,
    infant: infantNumber,
    resetNumber: function resetNumber() {
      setAdultNumber(0);
      setChildrenNumber(0);
      setInfantNumber(0);
    },
    switchModal: function switchModal() {
      return setGuestModal(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }) : null)), __jsx("div", {
    className: "w-full flex items-center md:justify-end md:flex-wrap mt-6 rounded-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("button", {
    className: "w-full md:w-auto md:inline-block inline-block py-3 px-6 bg-red-550 rounded text-white font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Search"))));
};

/***/ })

})
//# sourceMappingURL=index.js.b18f2d9e27d10e885df4.hot-update.js.map