(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/host/homes.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhost%2Fhomes&absolutePagePath=%2FUsers%2Fken%2FDesktop%2Fnextbnb%2Ffrontend%2Fsrc%2Fpages%2Fhost%2Fhomes.jsx!./":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhost%2Fhomes&absolutePagePath=%2FUsers%2Fken%2FDesktop%2Fnextbnb%2Ffrontend%2Fsrc%2Fpages%2Fhost%2Fhomes.jsx ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/host/homes", function() {
      var mod = __webpack_require__(/*! ./src/pages/host/homes.jsx */ "./src/pages/host/homes.jsx")
      if(true) {
        module.hot.accept(/*! ./src/pages/host/homes.jsx */ "./src/pages/host/homes.jsx", function() {
          if(!next.router.components["/host/homes"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/host/homes.jsx */ "./src/pages/host/homes.jsx")
          next.router.update("/host/homes", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./public/img/high/hosthome.jpg":
/*!**************************************!*\
  !*** ./public/img/high/hosthome.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hosthome-d824b260cf6f3936fb551acf78261430.jpg";

/***/ }),

/***/ "./src/components/hosthomes/functions/HostHomesCard.tsx":
/*!**************************************************************!*\
  !*** ./src/components/hosthomes/functions/HostHomesCard.tsx ***!
  \**************************************************************/
/*! exports provided: HostHomesCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostHomesCard", function() { return HostHomesCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hosthomes/functions/HostHomesCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var HostHomesCard = function HostHomesCard() {
  return __jsx("div", {
    style: {
      top: 50,
      right: 50
    },
    className: "hidden lg:block bg-white absolute top-0 right-0 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "w-104 m-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-850 text-4.5xl leading-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Earn money as an Airbnb host")), __jsx("div", {
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Find out what you could earn")), __jsx("div", {
    className: "border border-gray-350 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "placeholder-gray-750 my-3 ml-3",
    placeholder: "Location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("div", {
    className: "w-full flex my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "inline-block relative w-3/5 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("select", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "appearance-none pl-2 w-full border border-gray-450 py-3 rounded placeholder-gray-900 tracking-wide",
    id: "guests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("option", {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Entire place"), __jsx("option", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Private room"), __jsx("option", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Shared room")), __jsx("div", {
    className: "pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("svg", {
    className: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })))), __jsx("div", {
    className: "inline-block relative w-2/5 ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("select", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "appearance-none pl-2 w-full border border-gray-450 py-3 rounded placeholder-gray-900 tracking-wide",
    id: "guests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("option", {
    style: {
      fontFamily: 'airbnb-book'
    },
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "1 guest"), __jsx("option", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "2 guests"), __jsx("option", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "3 guests"), __jsx("option", {
    value: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "4 guests"), __jsx("option", {
    value: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "5 guests"), __jsx("option", {
    value: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "6 guests")), __jsx("div", {
    className: "pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("svg", {
    className: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }))))), __jsx("div", {
    className: "flex py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-4.5xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "$1,162")), __jsx("div", {
    style: {
      marginBottom: 10
    },
    className: "flex items-end mx-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "per month")), __jsx("div", {
    style: {
      marginBottom: 14
    },
    className: "flex items-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: "h-3 w-3 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("svg", {
    className: "w-full h-full",
    viewBox: "0 0 24 24",
    style: {
      fill: '#484848'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("path", {
    d: "m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))))), __jsx("button", {
    className: "w-full py-3 bg-red-550 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Get started")))));
};

/***/ }),

/***/ "./src/components/hosthomes/layout/HostHomesHeader.tsx":
/*!*************************************************************!*\
  !*** ./src/components/hosthomes/layout/HostHomesHeader.tsx ***!
  \*************************************************************/
/*! exports provided: HostHomesHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostHomesHeader", function() { return HostHomesHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hosthomes/layout/HostHomesHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var HostHomesHeader = function HostHomesHeader() {
  return __jsx("div", {
    className: "bg-white w-full flex border-b border-gray-300 items-center justify-between sticky top-0 z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "ml-6 mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
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
      fill: '#008489'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "flex text-sm text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "mx-4 border-green-850 border-b-2 py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    href: "",
    className: "text-green-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Overview")), __jsx("div", {
    className: "mx-4 py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Setup")), __jsx("div", {
    className: "mx-4 py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Safety")), __jsx("div", {
    className: "mx-4 py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Financials")), __jsx("div", {
    className: "mx-4 py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Hosting services")))), __jsx("div", {
    className: "flex items-center",
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
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Monthly potential")), __jsx("div", {
    className: "h-3 w-3 mx-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("svg", {
    className: "w-full h-full",
    viewBox: "0 0 24 24",
    style: {
      fill: '#484848'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("path", {
    d: "m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), __jsx("div", {
    className: "relative mx-1",
    style: {
      bottom: 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-2xl text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "$1,162")), __jsx("div", {
    className: "px-1 ml-2 mr-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "py-2 px-4 rounded bg-red-600 text-white text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Get started"))));
};

/***/ }),

/***/ "./src/components/hosthomes/layout/WhyHost.tsx":
/*!*****************************************************!*\
  !*** ./src/components/hosthomes/layout/WhyHost.tsx ***!
  \*****************************************************/
/*! exports provided: WhyHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyHost", function() { return WhyHost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hosthomes/layout/WhyHost.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var WhyHost = function WhyHost() {
  return __jsx("div", {
    className: "w-full max-w-5xl mx-auto py-28 flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "pb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-2xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Why host on Airbnb?")), __jsx("div", {
    className: "w-90p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "No matter what kind of home or room you have to share, Airbnb makes it simple and secure to host travellers. You\u2019re in full control of your availability, prices, house rules, and how you interact with guests."))), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "pb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-2xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "We have your back")), __jsx("div", {
    className: "w-90p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "To keep you, your home, and your belongings safe, we cover every booking with $1M USD in property damage protection and another $1M USD in insurance against accidents."))));
};

/***/ }),

/***/ "./src/pages/host/homes.jsx":
/*!**********************************!*\
  !*** ./src/pages/host/homes.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hosthomes_layout_HostHomesHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/hosthomes/layout/HostHomesHeader */ "./src/components/hosthomes/layout/HostHomesHeader.tsx");
/* harmony import */ var _components_hosthomes_layout_WhyHost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/hosthomes/layout/WhyHost */ "./src/components/hosthomes/layout/WhyHost.tsx");
/* harmony import */ var _components_hosthomes_functions_HostHomesCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hosthomes/functions/HostHomesCard */ "./src/components/hosthomes/functions/HostHomesCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/host/homes.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Layout


 // Functions



var background = __webpack_require__(/*! ../../../public/img/high/hosthome.jpg */ "./public/img/high/hosthome.jpg");

var homes = function homes() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_components_hosthomes_layout_HostHomesHeader__WEBPACK_IMPORTED_MODULE_1__["HostHomesHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("div", {
    className: "w-full max-w-layout mx-auto relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("img", {
    src: background,
    style: {
      maxHeight: '60rem'
    },
    className: "w-full relative object-cover h-144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx(_components_hosthomes_functions_HostHomesCard__WEBPACK_IMPORTED_MODULE_3__["HostHomesCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(_components_hosthomes_layout_WhyHost__WEBPACK_IMPORTED_MODULE_2__["WhyHost"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("div", {
    className: "w-full max-w-5xl mx-auto py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: 70,
      height: 2
    },
    className: "bg-gray-650 rounded-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    className: "flex justify-center mb-12 mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-850 text-6xl tracking-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Hosting in 3 steps")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "w-full flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "w-90p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "h-12 w-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("svg", {
    className: "h-full w-full",
    viewBox: "0 0 32 32",
    style: {
      fill: '#484848'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("path", {
    d: "m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "List your space for free")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Share any space without sign-up charges, from a shared living room to a second home and everything in-between.")))), __jsx("div", {
    className: "w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "w-90p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "h-12 w-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("svg", {
    className: "h-full w-full",
    viewBox: "0 0 32 32",
    style: {
      fill: '#484848'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("path", {
    d: "m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))), __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "List your space for free")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Share any space without sign-up charges, from a shared living room to a second home and everything in-between.")))), __jsx("div", {
    className: "w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: "w-90p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    className: "h-12 w-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("svg", {
    className: "h-full w-full",
    viewBox: "0 0 32 32",
    style: {
      fill: '#484848'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("path", {
    d: "m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }))), __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "List your space for free")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Share any space without sign-up charges, from a shared living room to a second home and everything in-between.")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (homes);

/***/ }),

/***/ 2:
/*!***********************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fhost%2Fhomes&absolutePagePath=%2FUsers%2Fken%2FDesktop%2Fnextbnb%2Ffrontend%2Fsrc%2Fpages%2Fhost%2Fhomes.jsx ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fhost%2Fhomes&absolutePagePath=%2FUsers%2Fken%2FDesktop%2Fnextbnb%2Ffrontend%2Fsrc%2Fpages%2Fhost%2Fhomes.jsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhost%2Fhomes&absolutePagePath=%2FUsers%2Fken%2FDesktop%2Fnextbnb%2Ffrontend%2Fsrc%2Fpages%2Fhost%2Fhomes.jsx!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=homes.js.map