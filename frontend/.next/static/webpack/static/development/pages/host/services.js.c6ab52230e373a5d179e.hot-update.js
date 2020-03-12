webpackHotUpdate("static/development/pages/host/services.js",{

/***/ "./src/components/modals/HostMenuModal.jsx":
/*!*************************************************!*\
  !*** ./src/components/modals/HostMenuModal.jsx ***!
  \*************************************************/
/*! exports provided: HostMenuModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostMenuModal", function() { return HostMenuModal; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/HostMenuModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];



 // interface Props {
//   switchMenuModal: (boolean: boolean) => void;
// }

var HostMenuModal = function HostMenuModal(_ref) {
  var switchMenuModal = _ref.switchMenuModal;
  var arrow = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var menu = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var logo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  function sleep(ms) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  function sleepPrep() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function sleepPrep$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(sleep(490));

          case 2:
            switchMenuModal(false);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    turnOnMenu();
  }, []);

  var turnOnMenu = function turnOnMenu() {
    gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].from(menu, 0.6, {
      height: 0
    });
    gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].from(arrow, 1, {
      rotation: '180_cw',
      opacity: 0.3,
      ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Power3"].easeOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].from(logo, 0.6, {
      fill: '#ffffff',
      opacity: 0.3,
      ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Power3"].easeIn
    });
  };

  var closeMenu = function closeMenu() {
    gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].to(menu, 0.4, {
      height: 0
    });
    gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].to(logo, 0.5, {
      fill: '#ffffff',
      ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Power3"].easeInOut
    });
    gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].to(arrow, 1, {
      rotation: '-180_cw',
      opacity: 0.3,
      ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Power3"].easeOut
    });
    sleepPrep();
  };

  var configureScroll = function configureScroll(name) {
    document.body.style.overflow = name;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, true ? configureScroll('hidden') : undefined, __jsx("div", {
    className: "overflow-hidden top-0 z-100 h-full w-full fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("div", {
    ref: function ref(el) {
      return menu = el;
    },
    id: "menu-modal",
    style: {
      boxSizing: 'border-box'
    },
    className: "w-full h-screen absolute top-0 z-200 bg-white overflow-y-scroll ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "m-6 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("button", {
    className: "flex items-center",
    onClick: function onClick() {
      closeMenu();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "h-8 w-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("svg", {
    ref: function ref(el) {
      return logo = el;
    },
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-full w-full block",
    style: {
      fill: '#008489',
      visibility: 'visible'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))), __jsx("div", {
    ref: function ref(el) {
      return arrow = el;
    },
    className: "h-2 w-2 ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: '#008489',
      transform: 'rotate(180deg)'
    },
    className: "h-full w-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 491.996 491.996",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("path", {
    d: "M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848 L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128 c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084 c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224 C491.996,136.902,489.204,130.046,484.132,124.986z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }))))))), __jsx("div", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    className: "mx-6 py-5 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-green-850 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Home"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "mx-6 py-4 text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Setup")), __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Safety")), __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Financials")), __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Hosting services"))))));
};

/***/ })

})
//# sourceMappingURL=services.js.c6ab52230e373a5d179e.hot-update.js.map