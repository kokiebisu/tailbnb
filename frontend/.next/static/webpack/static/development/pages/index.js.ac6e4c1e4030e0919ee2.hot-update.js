webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/util/CalendarModalFunctions.jsx":
/*!*********************************************!*\
  !*** ./src/util/CalendarModalFunctions.jsx ***!
  \*********************************************/
/*! exports provided: getStartingDay, getEndingDate, getDaysInMonth, generateUnexistingDays, generateUnavailableDays, generateAvailableDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartingDay", function() { return getStartingDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndingDate", function() { return getEndingDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInMonth", function() { return getDaysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUnexistingDays", function() { return generateUnexistingDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUnavailableDays", function() { return generateUnavailableDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateAvailableDays", function() { return generateAvailableDays; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/util/CalendarModalFunctions.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
var getStartingDay = function getStartingDay(specifiedMonth, specifedYear) {
  return new Date(specifedYear, specifiedMonth).getDay();
};
var getEndingDate = function getEndingDate(specifiedMonth, specifiedYear) {
  return new Date(specifiedYear, specifiedMonth + 1, 0);
};
var getDaysInMonth = function getDaysInMonth(specifiedMonth, specifiedYear) {
  return 32 - new Date(specifedYear, specifiedMonth, 32).getDate();
};
var generateUnexistingDays = function generateUnexistingDays(firstday) {
  var result = [];
  var numberOfDays = firstday;

  for (var i = 0; i < numberOfDays; i++) {
    result.push(__jsx("div", {
      className: "border border-white flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "text-white py-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("p", {
      className: "text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "N"))));
  }

  return result;
};
var generateUnavailableDays = function generateUnavailableDays(firstday, today) {
  var result = [];
  var numberOfDays = today - firstday;

  for (var i = firstday; i <= numberOfDays; i++) {
    result.push(__jsx("div", {
      className: "flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("div", {
      className: "py-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("p", {
      className: "text-gray-400",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, i))));
  }

  return result;
};
var generateAvailableDays = function generateAvailableDays(today, lastday) {
  console.log('today', today);
  var day = today;

  if (today === null) {
    day = 0;
  }

  var result = [];

  for (var i = day; i <= lastday; i++) {
    result.push(__jsx("div", {
      className: "flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: "text-white py-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("p", {
      className: "text-gray-900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, i))));
  }

  return result;
};

/***/ })

})
//# sourceMappingURL=index.js.ac6e4c1e4030e0919ee2.hot-update.js.map