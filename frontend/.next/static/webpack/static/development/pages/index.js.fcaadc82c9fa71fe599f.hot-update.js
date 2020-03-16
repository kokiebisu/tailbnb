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
/* harmony import */ var _util_GuestModalFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/GuestModalFunctions */ "./src/util/GuestModalFunctions.js");
/* harmony import */ var _animations_arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/arrow */ "./src/animations/arrow.ts");
/* harmony import */ var _modals_CalendarModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/CalendarModal */ "./src/components/modals/CalendarModal.jsx");
/* harmony import */ var _modals_GuestPickerModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/GuestPickerModal */ "./src/components/modals/GuestPickerModal.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/HeaderCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




 // Modals



var HeaderCard = function HeaderCard() {
  // Check in
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      checkInModal = _useState[0],
      setCheckInModal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['dd', 'mm', 'yy']),
      checkInDate = _useState2[0],
      setCheckInDate = _useState2[1]; // Check out


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      checkOutModal = _useState3[0],
      setCheckOutModal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['dd', 'mm', 'yy']),
      checkOutDate = _useState4[0],
      setCheckoutDate = _useState4[1]; // Guest


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      guestModal = _useState5[0],
      setGuestModal = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      adultNumber = _useState6[0],
      setAdultNumber = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      childrenNumber = _useState7[0],
      setChildrenNumber = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      infantNumber = _useState8[0],
      setInfantNumber = _useState8[1];

  var guestArrow1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var guestArrow2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('checin', checkInDate);
  }, [checkInDate]);
  return __jsx("div", {
    className: "sm:w-full md:w-100 md:pt-8 md:pb-6 md:mt-10 bg-white md:rounded md:shadow-2xl py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "mx-6 md:mx-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "hidden md:inline-block md:text-3xl text-gray-750 leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Book unique places to ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), "stay and things to do."), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
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
      lineNumber: 47
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
      lineNumber: 53
    },
    __self: this
  })), __jsx("div", {
    className: "flex flex-wrap items-stretch justify-start relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
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
      lineNumber: 63
    },
    __self: this
  }, "Check-In"), __jsx("div", {
    className: "relative w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "w-full flex justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, checkInModal ? __jsx("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      setCheckInModal(!checkInModal);
    },
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pr-32 w-full border border-green-850 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "dd-mm-yy") : __jsx("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      setCheckInModal(!checkInModal);
    },
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pr-16 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "".concat(checkInDate[0], "/").concat(checkInDate[1], "/").concat(checkInDate[2]))), checkInModal ? __jsx(_modals_CalendarModal__WEBPACK_IMPORTED_MODULE_4__["CalendarModal"], {
    setCheckInDate: setCheckInDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }) : null)), __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
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
      lineNumber: 99
    },
    __self: this
  }, "Check-Out"), __jsx("div", {
    className: "relative w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: "w-full flex justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, checkInModal ? __jsx("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      setCheckOutModal(!checkOutModal);
    },
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pr-32 w-full border border-green-850 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "dd-mm-yy") : __jsx("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      setCheckOutModal(!checkOutModal);
    },
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pr-16 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "".concat(checkOutDate[0], "/").concat(checkOutDate[1], "/").concat(checkOutDate[2]))), checkInModal ? __jsx(_modals_CalendarModal__WEBPACK_IMPORTED_MODULE_4__["CalendarModal"], {
    setCheckInDate: setCheckInDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }) : null))), __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
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
      lineNumber: 136
    },
    __self: this
  }, "Guests"), __jsx("div", {
    className: "inline-block relative w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, guestModal ? __jsx("button", {
    style: {
      fontFamily: 'airbnb-book'
    },
    onClick: function onClick(e) {
      e.preventDefault();
      Object(_animations_arrow__WEBPACK_IMPORTED_MODULE_3__["rotateArrow"])(guestArrow1);
      setGuestModal(!guestModal);
    },
    className: "appearance-none pl-2 w-full border border-green-850 py-3 text-left rounded placeholder-gray-900 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, Object(_util_GuestModalFunctions__WEBPACK_IMPORTED_MODULE_2__["calculateGuests"])(adultNumber, childrenNumber), adultNumber > 0 && infantNumber > 0 ? ", ".concat(calculateInfant(adultNumber, infantNumber)) : null) : __jsx("button", {
    style: {
      fontFamily: 'airbnb-book'
    },
    onClick: function onClick(e) {
      e.preventDefault();
      Object(_animations_arrow__WEBPACK_IMPORTED_MODULE_3__["backRotateArrow"])(guestArrow2);
      setGuestModal(!guestModal);
    },
    className: "appearance-none pl-2 w-full border border-gray-300 py-3 text-left rounded placeholder-gray-900 tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, Object(_util_GuestModalFunctions__WEBPACK_IMPORTED_MODULE_2__["calculateGuests"])(adultNumber, childrenNumber), adultNumber > 0 && infantNumber > 0 ? ", ".concat(calculateInfant(adultNumber, infantNumber)) : null), guestModal ? __jsx("div", {
    ref: function ref(el) {
      return guestArrow1 = el;
    },
    style: {},
    className: "pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
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
      lineNumber: 177
    },
    __self: this
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
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
      lineNumber: 186
    },
    __self: this
  }, __jsx("svg", {
    className: "h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  })))), guestModal ? __jsx(_modals_GuestPickerModal__WEBPACK_IMPORTED_MODULE_5__["GuestPickerModal"], {
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
      lineNumber: 200
    },
    __self: this
  }) : null)), __jsx("div", {
    className: "w-full flex items-center md:justify-end md:flex-wrap mt-6 rounded-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx("button", {
    className: "w-full md:w-auto md:inline-block inline-block py-3 px-6 bg-red-550 rounded text-white font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Search"))));
};

/***/ })

})
//# sourceMappingURL=index.js.fcaadc82c9fa71fe599f.hot-update.js.map