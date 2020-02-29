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
/* harmony import */ var _functions_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/Banner */ "./src/pages/adventures/functions/Banner.js");
/* harmony import */ var _section_WhatYouDo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section/WhatYouDo */ "./src/pages/adventures/section/WhatYouDo.js");
/* harmony import */ var _section_Adventures__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./section/Adventures */ "./src/pages/adventures/section/Adventures.js");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.tsx");

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
      lineNumber: 48
    },
    __self: this
  }, loading ? __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Vacation Rentals, Homes, Experiences & Places") : data && __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, data.adventure.name), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/high/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_7__["ExploreHeader"], {
    type: "stay",
    mode: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(_functions_Banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx(_section_WhatYouDo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(_section_Adventures__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("div", {
    className: "w-full flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:max-w-6xl flex justify-start items-start flex-wrap py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "w-full md:w-4/12 h-full text-3xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "What you'll do"), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full md:w-8/12 px-4 text-gray-750 flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/3 pr-3 bg-red-500 border border-gray-300 py-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "h-8 w-8 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("svg", {
    className: "h-full w-full",
    style: {
      fill: '#484848'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.001 512.001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("path", {
    d: "M511.423,460.198l-13.801-33.123c-0.01-0.025-0.021-0.051-0.032-0.076L387.174,161.998 c-1.164-2.795-3.896-4.615-6.923-4.615h-36.488c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h31.488l104.194,250.069 h-232.25L143.001,172.383h170.793c4.143,0,7.5-3.358,7.5-7.5c0-4.142-3.357-7.5-7.5-7.5H139.251v-34.702h83.617 c4.142,0,7.5-3.358,7.5-7.5V57.199c0-4.142-3.358-7.5-7.5-7.5h-83.617v-0.783c0-4.142-3.358-7.5-7.5-7.5 c-4.142,0-7.5,3.358-7.5,7.5v8.283v57.982v48.202L37.665,371.192L2.094,408.186c-2.832,2.944-2.786,7.613,0.103,10.502 l11.067,11.067L0.579,460.198c-0.964,2.315-0.708,4.958,0.683,7.045c1.391,2.086,3.733,3.34,6.24,3.34h49.693 c0.027,0,0.054,0,0.081,0h149.002c0.009,0,0.018,0.002,0.026,0.002c0.013,0,0.027-0.002,0.04-0.002h49.632 c0.009,0,0.018,0.002,0.027,0.002c0.013,0,0.027-0.002,0.04-0.002H504.5c2.508,0,4.85-1.253,6.24-3.34 C512.132,465.156,512.388,462.513,511.423,460.198z M139.251,64.699h76.117v42.982h-76.117V64.699z M18.753,455.583l5.982-14.359 l14.36,14.359H18.753z M54.587,449.86l-27.096-27.094c-0.016-0.017-0.033-0.033-0.049-0.049l-9.437-9.436l91.453-95.112 L54.587,449.86z M68.453,455.583l63.3-151.92l63.299,151.92H68.453z M211.302,455.583l-72.627-174.305 c-0.002-0.004-0.004-0.007-0.005-0.011c-0.131-0.312-0.287-0.615-0.462-0.91c-0.035-0.059-0.071-0.116-0.107-0.174 c-0.156-0.249-0.327-0.492-0.516-0.725c-0.027-0.034-0.051-0.07-0.079-0.103c-0.173-0.207-0.357-0.407-0.556-0.599 c-0.036-0.035-0.076-0.064-0.112-0.098c-0.062-0.057-0.127-0.111-0.192-0.166c-0.204-0.176-0.414-0.339-0.63-0.49 c-0.053-0.036-0.103-0.076-0.157-0.111c-0.277-0.182-0.561-0.343-0.854-0.484c-0.043-0.021-0.088-0.038-0.131-0.058 c-0.267-0.122-0.54-0.228-0.817-0.317c-0.058-0.019-0.116-0.04-0.174-0.057c-0.313-0.093-0.631-0.165-0.952-0.216 c-0.06-0.01-0.122-0.014-0.183-0.023c-0.29-0.039-0.581-0.06-0.873-0.065c-0.041-0.001-0.081-0.009-0.122-0.009 c-0.019,0-0.037,0.004-0.056,0.004c-0.326,0.002-0.651,0.028-0.974,0.073c-0.073,0.01-0.145,0.023-0.217,0.036 c-0.295,0.049-0.588,0.114-0.876,0.199c-0.031,0.009-0.064,0.016-0.095,0.025c-0.314,0.097-0.621,0.219-0.922,0.358 c-0.057,0.027-0.113,0.055-0.17,0.083c-0.268,0.132-0.529,0.278-0.783,0.443c-0.03,0.019-0.061,0.036-0.091,0.056 c-0.267,0.18-0.523,0.38-0.769,0.597c-0.061,0.054-0.118,0.111-0.177,0.167c-0.093,0.087-0.189,0.168-0.278,0.261L66.34,341.369 l57.911-138.986v28.767c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-28.767c24.117,57.88,72.312,173.551,96.019,230.447 c0.01,0.024,0.02,0.049,0.031,0.073c3.878,9.306,7.1,17.039,9.45,22.68H211.302z M261,455.583l-7.555-18.131h232.25l7.555,18.131 H261z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Meals and stays included"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Every adventure is fully planned, from activities to accommodations."))))), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_11__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }));
};

var SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2());
var SSkeletonPulse1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(SSkeletonPulse)(_templateObject3());
/* harmony default export */ __webpack_exports__["default"] = (id);

/***/ })

})
//# sourceMappingURL=[id].js.07f81b52fd492681e2de.hot-update.js.map