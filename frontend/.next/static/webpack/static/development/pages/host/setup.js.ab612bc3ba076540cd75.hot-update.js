webpackHotUpdate("static/development/pages/host/setup.js",{

/***/ "./src/components/host/functions/HostReady.tsx":
/*!*****************************************************!*\
  !*** ./src/components/host/functions/HostReady.tsx ***!
  \*****************************************************/
/*! exports provided: HostReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostReady", function() { return HostReady; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/host/functions/HostReady.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Images

var overview = __webpack_require__(/*! ../../../../public/img/high/ready-earn-overview.jpg */ "./public/img/high/ready-earn-overview.jpg");

var setup = __webpack_require__(/*! ../../../../public/img/high/ready-earn-setup.jpg */ "./public/img/high/ready-earn-setup.jpg");

var renderImg = function renderImg(page) {
  switch (page) {
    case 'overview':
      return __jsx("img", {
        className: "h-full w-full object-cover",
        src: overview,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });

    case 'setup':
      return __jsx("img", {
        className: "h-full w-full object-cover",
        src: setup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });

    default:
      return __jsx("img", {
        className: "h-full w-full object-cover",
        src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      });
  }
};

var HostReady = function HostReady(_ref) {
  var page = _ref.page;
  return __jsx("div", {
    className: "w-full md:max-w-4xl lg:max-w-7xl mx-auto mt-8 mb-12 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-96 md:h-112",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, renderImg(page)), __jsx("div", {
    id: "ready",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-white text-4xl md:text-6xl tracking-tighter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Ready to earn?")), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "bg-white py-3 px-5 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Get started")))));
};

/***/ })

})
//# sourceMappingURL=setup.js.ab612bc3ba076540cd75.hot-update.js.map