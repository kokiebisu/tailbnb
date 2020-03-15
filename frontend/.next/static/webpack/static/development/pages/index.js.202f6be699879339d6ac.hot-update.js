webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/modals/GuestPickerModal.jsx":
/*!****************************************************!*\
  !*** ./src/components/modals/GuestPickerModal.jsx ***!
  \****************************************************/
/*! exports provided: GuestPickerModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPickerModal", function() { return GuestPickerModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/GuestPickerModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var renderCategory = function renderCategory(category, number, decrement, increment) {
  switch (category) {
    case 'Adults':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx("div", {
        className: "text-gray-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Adults"))), __jsx("div", {
        className: "flex items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("button", {
        onClick: function onClick(e) {
          e.preventDefault();
          decrement();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("div", {
        className: "w-7 h-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("svg", {
        className: "w-full h-full",
        viewBox: "0 0 512 512",
        style: {
          fill: '#008489'
        },
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("path", {
        d: "m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), __jsx("path", {
        d: "m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })))), __jsx("div", {
        className: "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("p", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-lg text-gray-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, number, "+")), __jsx("button", {
        onClick: function onClick(e) {
          e.preventDefault();
          incrementAdult();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "h-7 w-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("svg", {
        style: {
          fill: '#008489'
        },
        className: "w-full h-full",
        viewBox: "0 0 512 512",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("path", {
        d: "m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("path", {
        d: "m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), __jsx("path", {
        d: "m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }))))));

    case 'Children':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("div", {
        className: "text-gray-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Children")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Ages 2 - 12")))), __jsx("div", {
        className: "flex items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("button", {
        onClick: function onClick(e) {
          e.preventDefault();
          decrementChildren();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("div", {
        className: "w-7 h-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("svg", {
        className: "w-full h-full",
        viewBox: "0 0 512 512",
        style: {
          fill: '#008489'
        },
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("path", {
        d: "m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), __jsx("path", {
        d: "m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })))), __jsx("div", {
        className: "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("p", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-lg text-gray-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, children, "+")), __jsx("button", {
        onClick: function onClick(e) {
          e.preventDefault();
          incrementChildren();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("div", {
        className: "h-7 w-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("svg", {
        style: {
          fill: '#008489'
        },
        className: "w-full h-full",
        viewBox: "0 0 512 512",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("path", {
        d: "m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), __jsx("path", {
        d: "m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), __jsx("path", {
        d: "m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }))))));

    case 'Infants':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("div", {
        className: "text-gray-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Infants")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Under 2")))), __jsx("div", {
        className: "flex items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx("button", {
        onClick: function onClick(e) {
          e.preventDefault();
          decrementInfant();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("div", {
        className: "w-7 h-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("svg", {
        className: "w-full h-full",
        viewBox: "0 0 512 512",
        style: {
          fill: '#008489'
        },
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("path", {
        d: "m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), __jsx("path", {
        d: "m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      })))), __jsx("div", {
        className: "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("p", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-lg text-gray-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, infant, "+")), __jsx("button", {
        onClick: function onClick(e) {
          e.preventDefault();
          incrementInfant();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx("div", {
        className: "h-7 w-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx("svg", {
        style: {
          fill: '#008489'
        },
        className: "w-full h-full",
        viewBox: "0 0 512 512",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, __jsx("path", {
        d: "m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }), __jsx("path", {
        d: "m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), __jsx("path", {
        d: "m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }))))));
  }
};

var GuestPickerSection = function GuestPickerSection(_ref) {
  var category = _ref.category,
      number = _ref.number,
      increment = _ref.increment,
      decrement = _ref.decrement;
  return __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, renderCategory(category, number, increment, decrement)));
};

var GuestPickerModal = function GuestPickerModal(_ref2) {
  var incrementAdult = _ref2.incrementAdult,
      decrementAdult = _ref2.decrementAdult,
      incrementChildren = _ref2.incrementChildren,
      decrementChildren = _ref2.decrementChildren,
      incrementInfant = _ref2.incrementInfant,
      decrementInfant = _ref2.decrementInfant,
      adult = _ref2.adult,
      children = _ref2.children,
      infant = _ref2.infant;
  return __jsx("div", {
    className: "absolute z-50 bg-white w-full px-6 shadow-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("div", {
    className: "py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx(GuestPickerSection, {
    category: "Adults",
    number: adult,
    decrement: decrementAdult,
    increment: incrementAdult,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }), __jsx(GuestPickerSection, {
    category: "Children",
    number: children,
    decrement: decrementChildren,
    increment: incrementChildren,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }), __jsx(GuestPickerSection, {
    category: "Infants",
    number: infant,
    decrement: decrementChildren,
    increment: incrementInfant,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }), __jsx("div", {
    className: "flex justify-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-green-850 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Save"))));
};

/***/ })

})
//# sourceMappingURL=index.js.202f6be699879339d6ac.hot-update.js.map