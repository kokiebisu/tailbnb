webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/layout/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/Header.tsx ***!
  \******************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_HeaderCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/HeaderCard */ "./src/components/functions/HeaderCard.jsx");
/* harmony import */ var _modals_RegisterModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/RegisterModal */ "./src/components/modals/RegisterModal.tsx");
/* harmony import */ var _modals_HelpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/HelpModal */ "./src/components/modals/HelpModal.jsx");
/* harmony import */ var _modals_LanguageModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/LanguageModal */ "./src/components/modals/LanguageModal.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


 // Component



 // import { CurrencyModal } from '../modals/CurrencyModal';

 // Images

var background = __webpack_require__(/*! ../../../public/img/high/airbnb-background.jpg */ "./public/img/high/airbnb-background.jpg");

var Header = function Header(_ref) {
  var switchMenuModal = _ref.switchMenuModal;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      languageModal = _useState[0],
      setLanguageModal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      registerModal = _useState2[0],
      setRegisterModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      helpModal = _useState3[0],
      setHelpModal = _useState3[1]; // const [currencyModal, setCurrencyModal] = useState(false);
  // const [currency, setCurrency] = useState('$ CAD');


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      type = _useState4[0],
      setType = _useState4[1];

  var switchLanguageModal = function switchLanguageModal() {
    setLanguageModal(!languageModal);
  };

  var switchRegisterModal = function switchRegisterModal() {
    setRegisterModal(!registerModal);
  };

  var switchHelpModal = function switchHelpModal() {
    setHelpModal(!helpModal);
  }; // const switchCurrencyModal = () => {
  //   setCurrencyModal(!currencyModal);
  // };


  var switchType = function switchType(type) {
    setType(type);
  }; // const switchCurrency = (currency: string) => {
  //   setCurrency(currency);
  // };


  var configureScroll = function configureScroll(name) {
    document.body.style.overflow = name;
  };

  return __jsx("header", {
    style: {
      backgroundImage: "url(".concat(background, ")"),
      maxHeight: '80rem'
    },
    className: "w-screen h-full md:h-screen md:min-h-80 relative bg-cover bg-no-repeat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "max-w-11xl mx-auto flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("svg", {
    width: "15px",
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    style: {
      fill: '#ffffff'
    },
    className: "h-full w-full block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("path", {
    d: "M168.7,25.1c0,3.6-2.9,6.5-6.5,6.5s-6.5-2.9-6.5-6.5s2.8-6.5,6.5-6.5C165.9,18.7,168.7,21.6,168.7,25.1z   M141.9,38.2c0,0.6,0,1.6,0,1.6s-3.1-4-9.7-4c-10.9,0-19.4,8.3-19.4,19.8c0,11.4,8.4,19.8,19.4,19.8c6.7,0,9.7-4.1,9.7-4.1v1.7  c0,0.8,0.6,1.4,1.4,1.4h8.1V36.8c0,0-7.4,0-8.1,0C142.5,36.8,141.9,37.5,141.9,38.2z M141.9,62.3c-1.5,2.2-4.5,4.1-8.1,4.1  c-6.4,0-11.3-4-11.3-10.8s4.9-10.8,11.3-10.8c3.5,0,6.7,2,8.1,4.1V62.3z M157.4,36.8h9.6v37.6h-9.6V36.8z M300.8,35.8  c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8  C320.1,44.2,311.6,35.8,300.8,35.8z M299.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8  S305.6,66.3,299.2,66.3z M276.5,52.1v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7c-2.9,0-5.9,1.5-7.8,3.7v26.2h-9.6V36.8h7.6  c0.8,0,1.4,0.7,1.4,1.4v1.6c2.8-2.9,6.5-4,10.2-4c4.2,0,7.7,1.2,10.5,3.6C275.2,42.2,276.5,45.8,276.5,52.1z M218.8,35.8  c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8  C238.2,44.2,229.7,35.8,218.8,35.8z M217.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8  S223.6,66.3,217.2,66.3z M191.2,35.8c2.9,0,4.4,0.5,4.4,0.5v8.9c0,0-8-2.7-13,3v26.3h-9.6V36.8c0,0,7.4,0,8.1,0  c0.8,0,1.4,0.7,1.4,1.4v1.6C184.3,37.7,188.2,35.8,191.2,35.8z M91.5,71c-0.5-1.2-1-2.5-1.5-3.6c-0.8-1.8-1.6-3.5-2.3-5.1l-0.1-0.1  c-6.9-15-14.3-30.2-22.1-45.2l-0.3-0.6c-0.8-1.5-1.6-3.1-2.4-4.7c-1-1.8-2-3.7-3.6-5.5C56,2.2,51.4,0,46.5,0c-5,0-9.5,2.2-12.8,6  c-1.5,1.8-2.6,3.7-3.6,5.5c-0.8,1.6-1.6,3.2-2.4,4.7l-0.3,0.6C19.7,31.8,12.2,47,5.3,62l-0.1,0.2c-0.7,1.6-1.5,3.3-2.3,5.1  c-0.5,1.1-1,2.3-1.5,3.6c-1.3,3.7-1.7,7.2-1.2,10.8c1.1,7.5,6.1,13.8,13,16.6c2.6,1.1,5.3,1.6,8.1,1.6c0.8,0,1.8-0.1,2.6-0.2  c3.3-0.4,6.7-1.5,10-3.4c4.1-2.3,8-5.6,12.4-10.4c4.4,4.8,8.4,8.1,12.4,10.4c3.3,1.9,6.7,3,10,3.4c0.8,0.1,1.8,0.2,2.6,0.2  c2.8,0,5.6-0.5,8.1-1.6c7-2.8,11.9-9.2,13-16.6C93.2,78.2,92.8,74.7,91.5,71z M46.4,76.2c-5.4-6.8-8.9-13.2-10.1-18.6  c-0.5-2.3-0.6-4.3-0.3-6.1c0.2-1.6,0.8-3,1.6-4.2c1.9-2.7,5.1-4.4,8.8-4.4c3.7,0,7,1.6,8.8,4.4c0.8,1.2,1.4,2.6,1.6,4.2  c0.3,1.8,0.2,3.9-0.3,6.1C55.3,62.9,51.8,69.3,46.4,76.2z M86.3,80.9c-0.7,5.2-4.2,9.7-9.1,11.7c-2.4,1-5,1.3-7.6,1  c-2.5-0.3-5-1.1-7.6-2.6c-3.6-2-7.2-5.1-11.4-9.7c6.6-8.1,10.6-15.5,12.1-22.1c0.7-3.1,0.8-5.9,0.5-8.5c-0.4-2.5-1.3-4.8-2.7-6.8  c-3.1-4.5-8.3-7.1-14.1-7.1s-11,2.7-14.1,7.1c-1.4,2-2.3,4.3-2.7,6.8c-0.4,2.6-0.3,5.5,0.5,8.5c1.5,6.6,5.6,14.1,12.1,22.2  c-4.1,4.6-7.8,7.7-11.4,9.7c-2.6,1.5-5.1,2.3-7.6,2.6c-2.7,0.3-5.3-0.1-7.6-1c-4.9-2-8.4-6.5-9.1-11.7c-0.3-2.5-0.1-5,0.9-7.8  c0.3-1,0.8-2,1.3-3.2c0.7-1.6,1.5-3.3,2.3-5l0.1-0.2c6.9-14.9,14.3-30.1,22-44.9l0.3-0.6c0.8-1.5,1.6-3.1,2.4-4.6  c0.8-1.6,1.7-3.1,2.8-4.4c2.1-2.4,4.9-3.7,8-3.7c3.1,0,5.9,1.3,8,3.7c1.1,1.3,2,2.8,2.8,4.4c0.8,1.5,1.6,3.1,2.4,4.6l0.3,0.6  C67.7,34.8,75.1,50,82,64.9L82,65c0.8,1.6,1.5,3.4,2.3,5c0.5,1.2,1,2.2,1.3,3.2C86.4,75.8,86.7,78.3,86.3,80.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))), __jsx("div", {
    className: "lg:hidden ml-6 mt-6 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("button", {
    className: "flex items-center",
    onClick: function onClick() {
      switchMenuModal();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-8 w-8 block",
    style: {
      fill: '#ffffff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), __jsx("div", {
    className: "h-2 w-2 ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("svg", {
    className: "h-full w-full",
    style: {
      fill: '#ffffff'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 491.996 491.996",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("path", {
    d: "M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848 L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128 c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084 c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224 C491.996,136.902,489.204,130.046,484.132,124.986z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }))))))), __jsx("div", {
    className: "hidden lg:block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("nav", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "flex items-center justify-around flex-wrap text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return switchLanguageModal();
    },
    className: "bg-transparent hover:bg-gray-500 py-3 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "flex items-center justify-start text-sm mx-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("svg", {
    className: "relative self-center h-3 w-3",
    style: {
      fill: '#ffffff',
      right: 5
    },
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("path", {
    d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })), __jsx("div", {
    className: "h-2 w-2 ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("svg", {
    className: "h-full w-full",
    style: {
      fill: '#ffffff'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 491.996 491.996",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("path", {
    d: "M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848 L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128 c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084 c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224 C491.996,136.902,489.204,130.046,484.132,124.986z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }))))))), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/host/homes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx("a", {
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Host a home"))), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/host/experiences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("a", {
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Host an experience"))), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return switchHelpModal();
    },
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Help")), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      switchType('Sign up');
      switchRegisterModal();
    },
    className: "text-sm  tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Sign up")), __jsx("div", {
    className: "mx-2 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      switchType('Log in');
      switchRegisterModal();
    },
    className: "text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Log in"))))), __jsx("div", {
    className: "md:ml-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx("h3", {
    className: "md:hidden px-4 pb-4 pt-16 text-white inline-block font-sans text-3xl font-bold leading-tight w-5/6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Book unique places to stay and things to do."), __jsx(_functions_HeaderCard__WEBPACK_IMPORTED_MODULE_2__["HeaderCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  })), __jsx("div", {
    className: "hidden md:block absolute bottom-0 right-0 mr-8 mb-8 text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-sm text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Over 300 unique places ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }), "to stay in Japan")), registerModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, true ? configureScroll('hidden') : undefined, type == 'Log in' ? __jsx(_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_3__["RegisterModal"], {
    setRegisterModal: setRegisterModal,
    type: "Log in",
    nottype: "Sign up",
    phrase: "Don't",
    setType: switchType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }) : __jsx(_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_3__["RegisterModal"], {
    setRegisterModal: setRegisterModal,
    type: "Sign up",
    nottype: "Log in",
    phrase: "Already",
    setType: switchType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, true ? configureScroll('auto') : undefined), helpModal ? __jsx(_modals_HelpModal__WEBPACK_IMPORTED_MODULE_4__["HelpModal"], {
    setHelpModal: switchHelpModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }) : null, languageModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, true ? configureScroll('hidden') : undefined, __jsx(_modals_LanguageModal__WEBPACK_IMPORTED_MODULE_5__["LanguageModal"], {
    location: "Canada",
    setLanguageModal: switchLanguageModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  })) : null);
};

/***/ })

})
//# sourceMappingURL=index.js.2219fbf0b8f03d505cdf.hot-update.js.map