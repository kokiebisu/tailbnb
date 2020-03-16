webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/modals/CalendarModal.jsx":
/*!*************************************************!*\
  !*** ./src/components/modals/CalendarModal.jsx ***!
  \*************************************************/
/*! exports provided: CalendarModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModal", function() { return CalendarModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_CalendarModalFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/CalendarModalFunctions */ "./src/util/CalendarModalFunctions.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/CalendarModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var CalendarModal = function CalendarModal(_ref) {
  var setSelectedDate = _ref.setSelectedDate;
  // Info
  var today = new Date();
  var currentDate = today.getDate();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear(); // Display

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(currentDate),
      displayedDate = _useState[0],
      setDisplayedDate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(currentMonth),
      displayedMonth = _useState2[0],
      setDisplayedMonth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(currentYear),
      displayedYear = _useState3[0],
      setDisplayedYear = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (displayedMonth !== currentMonth) {
      setDisplayedDate(null);
    } else {
      setDisplayedDate(currentDate);
    }
  }, [displayedMonth]);
  return __jsx("div", {
    style: {
      top: 55
    },
    className: "absolute z-50 bg-white w-76 p-6 shadow-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick(e) {
      e.preventDefault();

      if (displayedMonth === 0) {
        setDisplayedMonth(11);
        setDisplayedYear(displayedYear - 1);
      } else {
        setDisplayedMonth(displayedMonth - 1);
      }
    },
    className: "py-2 px-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "w-3 h-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: '#484848'
    },
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 492 492",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("path", {
    d: "M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124 c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844 L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412 c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008 c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788 C492,219.198,479.172,207.418,464.344,207.418z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })))))), __jsx("div", {
    className: "px-4 flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, month[displayedMonth], " ", displayedYear))), __jsx("button", {
    onClick: function onClick(e) {
      e.preventDefault();

      if (displayedMonth === 11) {
        setDisplayedMonth(0);
        setDisplayedYear(displayedYear + 1);
      } else {
        setDisplayedMonth(displayedMonth + 1);
      }
    },
    className: "py-2 px-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    className: "h-3 w-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: '#484848'
    },
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 492.004 492.004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("path", {
    d: "M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136 c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002 v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864 c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872 l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))))))), __jsx("div", {
    className: "mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "grid grid-cols-7 text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, days.map(function (day) {
    return __jsx("div", {
      className: "flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, day.slice(0, 2))));
  }))), __jsx("div", {
    className: "mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "grid grid-cols-7 text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, Object(_util_CalendarModalFunctions__WEBPACK_IMPORTED_MODULE_1__["generateUnexistingDays"])(Object(_util_CalendarModalFunctions__WEBPACK_IMPORTED_MODULE_1__["getStartingDay"])(displayedMonth, displayedYear)), Object(_util_CalendarModalFunctions__WEBPACK_IMPORTED_MODULE_1__["generateUnavailableDays"])(1, displayedDate), generateAvailableDays(displayedDate, Object(_util_CalendarModalFunctions__WEBPACK_IMPORTED_MODULE_1__["getEndingDate"])(displayedMonth, displayedYear).getDate(), setSelectedDate))));
};

var generateAvailableDays = function generateAvailableDays(today, lastday, setSelectedDate, displayedMonth, displayedYear) {
  var result = [];
  console.log('dispm', displayedMonth);

  var _loop = function _loop(i) {
    result.push(__jsx("button", {
      onClick: function onClick(e) {
        e.preventDefault();
        console.log(i);
        setSelectedDate([i, displayedMonth, displayedYear]);
      },
      className: "flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx("div", {
      className: "text-white py-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx("p", {
      className: "text-gray-900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, i))));
  };

  for (var i = today; i <= lastday; i++) {
    _loop(i);
  }

  return result;
};

/***/ })

})
//# sourceMappingURL=index.js.a8d859346a294eff125b.hot-update.js.map