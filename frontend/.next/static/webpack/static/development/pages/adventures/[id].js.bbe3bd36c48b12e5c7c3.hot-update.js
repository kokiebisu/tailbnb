webpackHotUpdate("static/development/pages/adventures/[id].js",{

/***/ "./src/pages/adventures/[id].js":
/*!**************************************!*\
  !*** ./src/pages/adventures/[id].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.tsx");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.tsx");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/adventures/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  animation: pulse 1.2s ease-in-out infinite;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);\n  background-size: 400% 400%;\n  @keyframes pulse {\n    0% {\n      background-position: 0% 0%;\n    }\n    100% {\n      background-position: -135% 0%;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Adventure($id: ID!) {\n    adventure(where: { id: $id }) {\n      title\n      period\n      cost\n      country\n      img\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // Dependencies

 // GraphQL

 // Components


 // Images
// import detail1 from '../../../public/img/high/staydetail1.jpg';

var detail2 = __webpack_require__(/*! ../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");

var detail3 = __webpack_require__(/*! ../../../public/img/high/staydetail3.jpg */ "./public/img/high/staydetail3.jpg");

var detail4 = __webpack_require__(/*! ../../../public/img/high/staydetail4.jpg */ "./public/img/high/staydetail4.jpg");

var detail5 = __webpack_require__(/*! ../../../public/img/high/staydetail5.jpg */ "./public/img/high/staydetail5.jpg");

var GET_ADVENTURE = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject());

var id = function id() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_ADVENTURE, {
    variables: {
      id: router.query.id
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, loading ? __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Vacation Rentals, Homes, Experiences & Places") : data && __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, data.adventure.name), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/high/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_7__["ExploreHeader"], {
    type: "stay",
    mode: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("div", {
    className: "w-full bg-black h-80v flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "w-full max-w-6xl h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "bg-red-500  h-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, " hello"), __jsx("div", {
    className: "w-full max-w-6xl h-1/2 flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "w-4/12 h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: "items-end justify-start pt-6 text-xs uppercase text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "2-Day Adventure"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full text-4xl text-white ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Atlas Mountains Experience"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full text-white ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Marrakech, Morocco"), __jsx("div", {
    className: "bg-blue-500 flex justify-start text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "5.0"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "svg here"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "(1)")), __jsx("div", {
    className: "bg-red-500 flex justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-xs mt-2 mr-2 mb-2 py-1 px-2 bg-gray-800 text-white uppercase rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Hiking"))), __jsx("div", {
    className: "w-8/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("div", {
    className: "w-9/12 mt-4 ml-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-white py-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Trek & Cook with the berbers"), __jsx("div", {
    className: "w-full flex justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/4 bg-blue-500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    className: "h-4 w-4 my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("svg", {
    className: "h-full w-full",
    style: {
      fill: '#ffffff'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("path", {
    d: "M256,0C114.509,0,0,114.497,0,256c0,141.491,114.497,256,256,256c141.49,0,256-114.497,256-256 C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133 S477.867,133.663,477.867,256S378.337,477.867,256,477.867z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("path", {
    d: "M308.776,250.888h-55.79v-95.056c0-9.425-7.641-17.067-17.067-17.067s-17.067,7.641-17.067,17.067v112.122 c0,9.425,7.641,17.067,17.067,17.067h72.856c9.425,0,17.067-7.641,17.067-17.067S318.201,250.888,308.776,250.888z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Duration"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "2 days")))))))), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_8__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }));
};

var SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2());
var SSkeletonPulse1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(SSkeletonPulse)(_templateObject3());
/* harmony default export */ __webpack_exports__["default"] = (id);

/***/ })

})
//# sourceMappingURL=[id].js.bbe3bd36c48b12e5c7c3.hot-update.js.map