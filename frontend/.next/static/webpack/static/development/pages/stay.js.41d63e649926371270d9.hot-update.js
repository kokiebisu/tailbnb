webpackHotUpdate("static/development/pages/stay.js",{

/***/ "./src/components/layout/ExploreHeader.jsx":
/*!*************************************************!*\
  !*** ./src/components/layout/ExploreHeader.jsx ***!
  \*************************************************/
/*! exports provided: ExploreHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreHeader", function() { return ExploreHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _SuggestionBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuggestionBox */ "./src/components/layout/SuggestionBox.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/ExploreHeader.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



 // interface Prop {
//   white: boolean;
//   placeholder: string;
// }

var ExploreHeader = function ExploreHeader(_ref) {
  var white = _ref.white;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      optionModal = _useState[0],
      setOptionModal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      languageModal = _useState2[0],
      setLanguageModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      currencyModal = _useState3[0],
      setCurrencyModal = _useState3[1];

  var switchCurrencyModal = function switchCurrencyModal() {
    setCurrencyModal(!currencyModal);
  };

  var switchLanguageModal = function switchLanguageModal() {
    setLanguageModal(!languageModal);
  };

  var inputbox = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var suggestionbox = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var logo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var cancel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var expandInput = function expandInput() {
    if (innerWidth < 720) {
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(inputbox, 0.4, {
        x: -50,
        ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeIn
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(suggestionbox, 0.4, {
        x: -50,
        y: 10,
        opacity: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeIn,
        width: '80vw'
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(logo, 0.3, {
        css: {
          opacity: 0
        },
        ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeIn
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(cancel, 0.3, {
        css: {
          opacity: 1
        },
        ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeIn,
        delay: 0.3
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(inputbox, 0.4, {
        width: '40vw',
        ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeIn
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(suggestionbox, 0.4, {
        width: '40vw',
        opacity: 1,
        x: 0,
        y: 10,
        ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeIn
      });
    }
  };

  var shrinkInput = function shrinkInput() {
    if (innerWidth < 720) {
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(inputbox, 0.4, {
        x: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeIn,
        delay: 0.3
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(logo, 0.3, {
        css: {
          opacity: 1,
          ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeIn
        },
        delay: 0.4
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(cancel, 0.3, {
        css: {
          opacity: 0
        },
        ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeIn
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(suggestionbox, 0.4, {
        opacity: 0,
        width: 480,
        ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeIn
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(inputbox, 0.4, {
        width: 480,
        ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeIn
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(suggestionbox, 0.4, {
        opacity: 0,
        width: 480,
        ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power3"].easeIn
      });
    }
  };

  var expandSuggestion = function expandSuggestion() {};

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, white ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "px-6 md:px-10 xl:px-20 xl:max-w-12xl flex items-center justify-between relative border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    ref: function ref(el) {
      return logo = el;
    },
    className: "ml-6 mr-6 md:mr-8 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Airbnb"), __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "block",
    style: {
      height: 34,
      width: 34,
      fill: '#FF6368'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }))))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "hello"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("nav", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "md:w-20p hidden md:block text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return switchOptionModal();
    },
    className: "py-3 px-2 rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start text-sm mx-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("div", {
    className: "w-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("svg", {
    className: "block relative w-full h-full",
    "aria-hidden": "true",
    style: {
      fill: '#484848',
      right: 5
    },
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("path", {
    d: "M7.99985 0.349976C3.78135 0.349976 0.349854 3.78148 0.349854 7.99998C0.349854 12.2185 3.78135 15.65 7.99985 15.65C12.2184 15.65 15.6499 12.2185 15.6499 7.99998C15.6499 3.78148 12.2184 0.349976 7.99985 0.349976ZM1.68285 8.64997H3.86735C3.90085 9.42497 3.99535 10.1625 4.14085 10.85H2.33335C1.98351 10.1627 1.76301 9.41698 1.68285 8.64997ZM8.74985 3.84998V1.90748C9.25785 2.24998 9.74385 2.92348 10.1204 3.84998H8.74985ZM10.5274 5.14998C10.6859 5.81348 10.7954 6.54998 10.8339 7.34998H8.74985V5.14998H10.5274ZM7.24985 1.90748V3.84998H5.87985C6.25585 2.92348 6.74235 2.24998 7.24985 1.90748ZM7.24985 5.14998V7.34998H5.16585C5.20435 6.54998 5.31385 5.81348 5.47235 5.14998H7.24985ZM3.86735 7.34998H1.68285C1.76285 6.56498 1.99285 5.82498 2.33285 5.14998H4.14085C3.98937 5.87454 3.89789 6.61037 3.86735 7.34998ZM5.16585 8.64997H7.24985V10.85H5.47235C5.30192 10.1278 5.1993 9.39125 5.16585 8.64997ZM7.24985 12.15V14.0925C6.74235 13.7495 6.25585 13.0765 5.87985 12.15H7.24985ZM8.74985 14.0925V12.15H10.1204C9.74385 13.0765 9.25785 13.75 8.74985 14.0925ZM8.74985 10.85V8.64997H10.8339C10.8004 9.39125 10.6978 10.1278 10.5274 10.85H8.74985ZM12.1324 8.64997H14.3169C14.2369 9.43497 14.0069 10.175 13.6669 10.85H11.8589C12.0044 10.1625 12.0989 9.42497 12.1324 8.64997ZM12.1324 7.34998C12.1018 6.61037 12.0103 5.87454 11.8589 5.14998H13.6664C14.0074 5.82498 14.2364 6.56498 14.3169 7.34998H12.1324ZM12.7954 3.84998H11.5014C11.3192 3.31162 11.0813 2.7938 10.7914 2.30498C11.5556 2.68104 12.2369 3.20638 12.7949 3.84998H12.7954ZM5.20835 2.30498C4.91844 2.7938 4.68047 3.31162 4.49835 3.84998H3.20485C3.76298 3.20632 4.44439 2.68099 5.20885 2.30498H5.20835ZM3.20485 12.15H4.49935C4.69735 12.7245 4.93635 13.242 5.20935 13.695C4.44453 13.3191 3.76278 12.7937 3.20435 12.15H3.20485ZM10.7919 13.695C11.0818 13.2061 11.3197 12.6883 11.5019 12.15H12.7959C12.2377 12.7936 11.5563 13.319 10.7919 13.695Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }))), __jsx("div", {
    className: "h-2 w-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("svg", {
    className: "h-full w-full",
    style: {
      fill: '#484848'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 491.996 491.996",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("path", {
    d: "M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848 L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128 c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084 c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224 C491.996,136.902,489.204,130.046,484.132,124.986z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }))))))), optionModal & !languageModal & !currencyModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    style: {
      left: -140,
      top: 60
    },
    className: "absolute z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx(OptionModal, {
    switchLanguageModal: switchLanguageModal,
    switchCurrencyModal: switchCurrencyModal,
    currency: currency,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }))) : null, __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Help")), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "text-sm tracking-wide whitespace-no-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Sign up"))))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "bg-black flex items-center justify-between relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start w-full md:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("div", {
    className: "ml-6 mr-6 md:mr-8 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Airbnb"), __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "block",
    style: {
      height: 34,
      width: 34,
      fill: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  })))), __jsx("div", {
    className: "w-full md:max-w-100 flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("div", {
    id: "hoverbox",
    className: "bg-white flex w-full md:w-120 items-center justify-start mr-7 py-3 px-4 shadow-md rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 16 16",
    style: {
      height: 18,
      width: 18
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx("path", {
    d: "m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  })), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-650 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "Search")))), __jsx("nav", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "hidden xl:block xl:flex items-center justify-around flex-wrap text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("div", {
    className: "border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "flex items-center justify-start text-sm mx-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("svg", {
    className: "relative self-center h-3 w-3",
    style: {
      fill: 'white',
      right: 5
    },
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx("path", {
    d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  })), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "English(CA)"))), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-white text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "$CAD")), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-white text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, "Become a host")), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    href: "#",
    className: "text-white text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, "Help")), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    href: "#",
    className: "text-white text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "Sign up")), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    href: "#",
    className: "text-white text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, "Log in"))), currencyModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, true ? configureScroll('hidden') : undefined, __jsx(CurrencyModal, {
    location: "Canada",
    setCurrencyModal: switchCurrencyModal,
    setCurrency: switchCurrency,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  })) : null, languageModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, true ? configureScroll('hidden') : undefined, __jsx(LanguageModal, {
    location: "Canada",
    setLanguageModal: switchLanguageModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  })) : null)));
};

/***/ })

})
//# sourceMappingURL=stay.js.41d63e649926371270d9.hot-update.js.map