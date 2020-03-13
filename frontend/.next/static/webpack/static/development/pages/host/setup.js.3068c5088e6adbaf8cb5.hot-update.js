webpackHotUpdate("static/development/pages/host/setup.js",{

/***/ "./src/components/hostsetup/functions/ControlHostingCard.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/hostsetup/functions/ControlHostingCard.jsx ***!
  \*******************************************************************/
/*! exports provided: ControlHostingCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlHostingCard", function() { return ControlHostingCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostsetup/functions/ControlHostingCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var renderIcon = function renderIcon(icon) {
  switch (icon) {
    case 'clock':
      return __jsx("div", {
        className: "w-12 h-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, __jsx("img", {
        src: "https://a0.muscache.com/pictures/788cdf62-dc3a-4149-ac0e-b37909436319.jpg",
        className: "w-full h-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }));

    case 'money':
      return __jsx("div", {
        className: "w-12 h-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("svg", {
        viewBox: "0 0 24 24",
        className: "w-full h-full",
        style: {
          fill: '#FFB400'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("path", {
        d: "m18.5 22a .5.5 0 1 1 .5-.5.5.5 0 0 1 -.5.5zm3.73-12.54a19.71 19.71 0 0 0 -5.88-.4c-.66.06-1.26.15-1.84.25a5.89 5.89 0 0 1 .36 2.66c-.22 2.57-1.93 4.51-3.82 4.34s-3.25-2.39-3.03-4.95a6.13 6.13 0 0 1 .27-1.3c-.16-.01-.3 0-.46-.02a27.97 27.97 0 0 1 -5.2-.8.5.5 0 0 0 -.63.48v9.14a.5.5 0 0 0 .34.47 17.04 17.04 0 0 0 5.49.86c3.14 0 5.83-.98 8.52-.98a23.25 23.25 0 0 1 5.65.82.5.5 0 0 0 .62-.48v-9.6a.5.5 0 0 0 -.39-.49zm-17.23-5.96a.5.5 0 1 0 -.5.5.5.5 0 0 0 .5-.5zm-2.5-1.5h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm20 20h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), __jsx("path", {
        style: {
          fill: '#484848'
        },
        d: "m21.59 6.02a23.21 23.21 0 0 0 -1.45-.26 21.33 21.33 0 0 0 -4.83-.2 26.76 26.76 0 0 0 -3.13.48l-.46.09a16.94 16.94 0 0 1 -4.87.4 18.25 18.25 0 0 1 -3.37-.53 11.23 11.23 0 0 1 -1.24-.4 4.54 4.54 0 0 1 -.39-.17.62.62 0 0 0 -.87.55v1.45a.5.5 0 0 0 1 0v-.86a12.83 12.83 0 0 0 1.24.39 17.42 17.42 0 0 0 1.73.36c-.17 1.82-1.75 2.68-3.47 2.68a.5.5 0 0 0 -.5.5v6.75c0 .76 3.14 1.85 5.83 1.85a24.54 24.54 0 0 0 4.51-.49 21.51 21.51 0 0 1 4.01-.48q.32 0 .66.02a19.02 19.02 0 0 1 3.07.45 24.07 24.07 0 0 1 1.77.47 1.5 1.5 0 0 0 .47.03c.4-.03.68-.15.68-.61a425.81 425.81 0 0 0 0-1.5.5.5 0 0 0 -1 0 230.48 230.48 0 0 0 0 1.08 25.1 25.1 0 0 0 -1.71-.45c-.24-.05-.47-.09-.7-.13a3.79 3.79 0 0 1 2.91-2.5.5.5 0 0 0 .48-.5c0-.3.01-.68.02-1.25l.05-1.74c.05-1.73.07-3.19.07-4.81a.7.7 0 0 0 -.54-.69zm-19.59 11.23v-.22a1.39 1.39 0 0 1 0 .22zm1.15.24a8.18 8.18 0 0 1 -1.03-.43 4.27 4.27 0 0 1 -.12-.06v-1.28a2.53 2.53 0 0 1 2.11 2.06c-.33-.08-.65-.17-.96-.28zm17.9-6-.05 1.74-.02.84a4.91 4.91 0 0 0 -3.38 3.25 17.2 17.2 0 0 0 -1.55-.16q-.36-.02-.71-.02a22.22 22.22 0 0 0 -4.18.49 23.71 23.71 0 0 1 -4.34.48 11.31 11.31 0 0 1 -1.7-.14c-.08-1.68-1.23-2.83-3.13-3.27v-3.72a3.94 3.94 0 0 0 3.95-3.52c.27.03.55.06.84.08a17.86 17.86 0 0 0 5.12-.42l.46-.09a25.89 25.89 0 0 1 3.01-.46 17.46 17.46 0 0 1 2.18-.04 4.56 4.56 0 0 0 3.53 3.39c-.01.51-.02 1.03-.04 1.58zm.06-2.6a3.63 3.63 0 0 1 -2.51-2.3 22.37 22.37 0 0 1 2.4.33l.12.03c0 .66-.01 1.3-.02 1.95zm-6.49 1.14a6.5 6.5 0 0 1 .26 2.48c-.24 2.82-2.16 5-4.37 4.8-2.2-.2-3.72-2.68-3.48-5.5a6.48 6.48 0 0 1 .67-2.39c.14-.28.29-.55.39-.7a.5.5 0 1 1 .83.55 8.08 8.08 0 0 0 -.33.6 5.49 5.49 0 0 0 -.56 2.02c-.2 2.32.99 4.27 2.57 4.41s3.08-1.57 3.28-3.89a5.5 5.5 0 0 0 -.21-2.1.5.5 0 1 1 .95-.3z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })));

    case 'calendar':
      return __jsx("div", {
        className: "w-12 h-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("img", {
        className: "w-full h-full",
        src: "https://a0.muscache.com/pictures/b1d5dc1c-34ed-442d-8b03-7914166861ce.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }));

    case 'keys':
      return __jsx("div", {
        className: "w-12 h-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("svg", {
        viewBox: "0 0 24 24",
        className: "w-full h-full",
        style: {
          fill: '#FFB400'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("path", {
        d: "m12.49 14.55a4 4 0 1 1 4.88-6.14 6.33 6.33 0 0 1 0 2.58l-.71 1.73-1.44 1.31a17.19 17.19 0 0 1 -2.73.51zm1.95-6.63a1 1 0 1 0 1.39.27 1 1 0 0 0 -1.39-.27",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), __jsx("path", {
        style: {
          fill: '#484848'
        },
        d: "m22 5.5a4.49 4.49 0 0 0 -8.96-.5c-.02 0-.03 0-.04 0a5.03 5.03 0 0 0 -4.88 3.92.5.5 0 0 0 .98.21 3.99 3.99 0 0 1 7.74-.2 3.46 3.46 0 0 1 -1.37-.58.5.5 0 0 0 -.58.81 4.45 4.45 0 0 0 2.11.8v.04a4 4 0 0 1 -5.28 3.79 5.98 5.98 0 0 1 -.93-.46.6.6 0 0 0 -.63.02l-6.23 4.1-.93-.31v-.64a.5.5 0 0 1 .5-.5h.3a1.51 1.51 0 0 0 1.41-.99l.3-.82a.49.49 0 0 1 .52-.33l.63.06a1.37 1.37 0 0 0 1.47-1.15l.06-.39a.5.5 0 0 1 .2-.33l.91-.66a.5.5 0 1 0 -.58-.81l-.91.66a1.51 1.51 0 0 0 -.61.99l-.06.39a.37.37 0 0 1 -.39.31l-.63-.06a1.5 1.5 0 0 0 -1.55.98l-.3.82a.5.5 0 0 1 -.47.33h-.3a1.5 1.5 0 0 0 -1.5 1.5v.64a1 1 0 0 0 .68.95l1.39.46 6.43-4.23a5.79 5.79 0 0 0 .89.42 4.61 4.61 0 0 0 2.38.18l-.06.24a1.29 1.29 0 0 0 .28 1.14c.15.21.16.25.14.35-.02.08-.05.11-.24.23a1.35 1.35 0 0 0 -.55 1.97c.12.23.17.35.13.52a.74.74 0 0 1 -.25.38 1.51 1.51 0 0 0 -.52.96c-.13.99.85 1.52 1.33 1.77a.5.5 0 0 0 .44.01l1.11-.51a.5.5 0 0 0 .28-.33l1.65-6.35a4.43 4.43 0 0 0 3.49-3.21 4.16 4.16 0 0 0 -.52-3.25 4.47 4.47 0 0 0 1.51-3.34zm-7.97-.39a3.49 3.49 0 1 1 5.82 2.96 3.27 3.27 0 0 0 -1.93-.82h-.76a5.01 5.01 0 0 0 -3.14-2.14zm4.95 3.55a3.46 3.46 0 0 1 -1.09.3 4.93 4.93 0 0 0 -.22-.71h.22a2.21 2.21 0 0 1 1.09.41zm1.07 3.18a3.43 3.43 0 0 1 -2.98 2.52.5.5 0 0 0 -.43.37l-1.68 6.44-.67.31c-.44-.26-.62-.45-.59-.64a.55.55 0 0 1 .23-.38 1.7 1.7 0 0 0 .52-.84 1.62 1.62 0 0 0 -.2-1.22c-.1-.2-.14-.28-.12-.36.04-.14.1-.19.29-.3a1.27 1.27 0 0 0 .4-2c-.14-.21-.15-.24-.13-.32l.21-.79a5 5 0 0 0 3.1-4.62c0-.02-.01-.03-.01-.05a4.44 4.44 0 0 0 1.68-.54 3.2 3.2 0 0 1 .37 2.42z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })));
  }
};

var ControlHostingCard = function ControlHostingCard(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      description = _ref.description,
      link = _ref.link;
  return __jsx("div", {
    className: "w-full lg:w-1/2 mb-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "w-85p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, renderIcon(icon)), __jsx("div", {
    className: "mt-3 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-2xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, title)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, description)), link ? __jsx("div", {
    className: "mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-green-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Learn about making money on Airbnb")) : null));
};

/***/ })

})
//# sourceMappingURL=setup.js.3068c5088e6adbaf8cb5.hot-update.js.map