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


var renderCategory = function renderCategory(category) {
  switch (category) {
    case 'Adults':
      return __jsx("div", {
        className: "text-gray-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, "Adults"));

    case 'Infants':
      return __jsx("div", {
        className: "text-gray-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Children")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Ages 2-12")));

    case 'Children':
      return __jsx("div", {
        className: "text-gray-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Infants")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Under 2")));
  }
};

var GuestPickerSection = function GuestPickerSection(category) {
  return __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, renderCategory(category.category)), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "border rounded-full border-green-500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "-"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "0+"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "+"))));
};

var GuestPickerModal = function GuestPickerModal() {
  return __jsx("div", {
    className: "absolute z-50 bg-white w-full px-6 shadow-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(GuestPickerSection, {
    category: "Adults",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(GuestPickerSection, {
    category: "Children",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(GuestPickerSection, {
    category: "Infants",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.364dc19a877e057780fa.hot-update.js.map