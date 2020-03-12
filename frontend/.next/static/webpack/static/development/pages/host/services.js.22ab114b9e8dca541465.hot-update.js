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
      fill: '#484848',
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
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Home")), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "mx-6 py-3 border-b border-gray-300 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Invite friends")), __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Refer hosts")), __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Airbnb for Work"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "mx-6 py-3 border-b border-gray-300 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("div", {
    className: "py-3 flex justify-between items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Language")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("p", {
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "English (CA)"))), __jsx("div", {
    className: "h-6 w-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: '#484848'
    },
    viewBox: "0 0 24 24",
    className: "h-full w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("path", {
    d: "m11 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.95-1.07-.14-.21a6.54 6.54 0 0 1 -.29-.5 12.85 12.85 0 0 1 -.66-1.47c-.09-.25-.17-.5-.25-.76h4.57c-.08.26-.16.51-.25.76a12.85 12.85 0 0 1 -.66 1.47 6.54 6.54 0 0 1 -.29.5l-.14.21c-.31.04-.63.07-.95.07s-.64-.03-.95-.07zm-2.03-6.93h5.95a14.71 14.71 0 0 1 -.41 3h-5.13a14.71 14.71 0 0 1 -.41-3zm .47-4h5.01c.27.88.43 1.88.47 3h-5.95c.04-1.12.2-2.12.47-3zm4.8 10.61a13.85 13.85 0 0 0 1.04-2.61h2.4a7.01 7.01 0 0 1 -3.44 2.61zm4.02-3.61h-2.73c.22-.96.35-1.96.38-3h3.02a6.96 6.96 0 0 1 -.68 3zm-2.34-4a12.86 12.86 0 0 0 -.44-3h2.2a6.95 6.95 0 0 1 1.18 3zm .92-4h-1.68c-.08-.22-.16-.45-.26-.65a8.38 8.38 0 0 0 -.49-.9 7 7 0 0 1 2.43 1.55zm-4.04-1.94.3.3c.05.04.14.15.26.32a6.8 6.8 0 0 1 .64 1.1c.03.07.06.15.09.23h-4.28c.03-.07.06-.15.09-.23a6.78 6.78 0 0 1 .64-1.1c.13-.17.22-.28.26-.32l.3-.3a7.04 7.04 0 0 1 .85-.06c.29 0 .57.02.85.06zm-3.31.4c-.16.25-.32.54-.49.9-.1.21-.17.43-.26.65h-1.68a7 7 0 0 1 2.43-1.55zm-3.28 2.55h2.2c-.25.9-.4 1.9-.44 3h-2.94a6.95 6.95 0 0 1 1.18-3zm1.76 4c .03 1.04.17 2.04.38 3h-2.73a6.96 6.96 0 0 1 -.68-3zm-1.02 4h1.66a13.85 13.85 0 0 0 1.04 2.61 7.01 7.01 0 0 1 -3.44-2.61zm6 5.95v3.05h3.5a.5.5 0 1 1 0 1h-7.93a.5.5 0 0 1 0-1h3.43v-3c-2.12 0-4.15-.66-5.89-1.89a.5.5 0 0 1 .58-.82c1.58 1.11 3.4 1.71 5.31 1.71a9 9 0 0 0 9-9c0-3.34-1.83-6.38-4.75-8.07a.5.5 0 0 1 .5-.86c3.22 1.87 5.25 5.23 5.25 8.93 0 5.19-3.95 9.45-9 9.95z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })))), __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Currency")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("p", {
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "$USD")))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "mx-6 py-3 border-b border-gray-300 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("div", {
    className: "py-3 flex justify-between items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "List your place")), __jsx("div", {
    className: "flex text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Earn up to\xA0")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "$1,166 a month")))), __jsx("div", {
    className: "h-11 w-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("svg", {
    className: "h-full w-full",
    viewBox: "0 0 26 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("path", {
    style: {
      fill: '#60b6b5'
    },
    d: "m12 10a2.49 2.49 0 0 1 -1.3 2.18 4.53 4.53 0 0 1 2.47 1.74 3.53 3.53 0 0 1 1.19-.72 2.5 2.5 0 1 1 2.29 0 3.5 3.5 0 0 1 2.35 3.3v1.5h2.5a.49.49 0 0 0 .5-.48v-11.03a.97.97 0 0 0 -.43-.75l-5.14-3a .96.96 0 0 0 -.86 0l-5.14 3a .95.95 0 0 0 -.43.76v1.05a2.5 2.5 0 0 1 2 2.45z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), __jsx("path", {
    style: {
      fill: '#484848'
    },
    d: "m25.43 6.26a.5.5 0 0 1 -.69.17l-1.74-1.05v-4.38q-2 0-2 .01v2.16a.55.55 0 0 1 -.85.47l-3.99-2.45a.43.43 0 0 0 -.33 0l-7.56 4.62a.5.5 0 0 1 -.52-.85l7.56-4.62a1.4 1.4 0 0 1 1.38 0l3.32 2.03v-1.36a1 1 0 0 1 .98-1.01h2.02a1 1 0 0 1 .99.99v3.83l1.26.75a.5.5 0 0 1 .17.69zm-1.93 1.74a.5.5 0 0 0 -.5.5v10.5h-1.5a.5.5 0 0 0 0 1h1.9a.61.61 0 0 0 .6-.6v-10.9a.5.5 0 0 0 -.5-.5zm-4.5 8.5v3.5h-1v-3.5a2.49 2.49 0 0 0 -4.34-1.68 4.41 4.41 0 0 1 .34 1.68v3.5h-1v-3.5a3.46 3.46 0 0 0 -.5-1.77 3.5 3.5 0 0 0 -2.5-1.69 3.45 3.45 0 0 0 -.5-.04 3.54 3.54 0 0 0 -3.5 3.5v3.5h-1v-3.5a4.41 4.41 0 0 1 .34-1.68 2.49 2.49 0 0 0 -4.34 1.68v3.5h-1v-3.5a3.5 3.5 0 0 1 2.35-3.29 2.5 2.5 0 1 1 2.29 0 3.53 3.53 0 0 1 1.19.72 4.53 4.53 0 0 1 2.47-1.74 2.5 2.5 0 1 1 2.39 0 4.53 4.53 0 0 1 2.47 1.74 3.53 3.53 0 0 1 1.19-.72 2.5 2.5 0 1 1 2.29 0 3.5 3.5 0 0 1 2.36 3.29zm-14-5.5a1.5 1.5 0 1 0 -1.5 1.5 1.5 1.5 0 0 0 1.5-1.5zm6-1a1.5 1.5 0 0 0 -1-1.41 1.48 1.48 0 0 0 -.5-.09 1.5 1.5 0 0 0 0 3 1.48 1.48 0 0 0 .5-.09 1.5 1.5 0 0 0 1-1.41zm6 1a1.5 1.5 0 1 0 -1.5 1.5 1.5 1.5 0 0 0 1.5-1.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  })))), __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/host/homes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Learn about hosting your home"))), __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/host/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "No time to host?"))), __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Host an experience")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("p", {
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Earn money doing what you love")))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "mx-6 pt-3 pb-48 sm:pb-24 md:pb-10 border-b border-gray-300 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Help")), __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Sign up")), __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "Log in"))))));
};

/***/ })

})
//# sourceMappingURL=services.js.22ab114b9e8dca541465.hot-update.js.map