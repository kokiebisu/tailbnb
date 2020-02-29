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
    className: "w-1/3 pr-3 bg-red-500 border border-gray-300 py-8 px-6",
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
      lineNumber: 80
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("path", {
    d: "M141.247,31.99C125.777,11.362,104.892,0.003,82.44,0.003c-22.451,0-43.335,11.36-58.806,31.986 C8.921,51.606,0.819,77.505,0.819,104.916c0,27.412,8.102,53.31,22.816,72.927c8.605,11.473,18.888,20.068,30.18,25.446 L36.546,462.948c-0.842,12.653,3.645,25.221,12.309,34.48c8.665,9.261,20.909,14.573,33.591,14.573 c12.679,0,24.917-5.309,33.579-14.565c8.664-9.26,13.151-21.83,12.307-34.486l-17.269-259.656 c11.294-5.379,21.578-13.974,30.184-25.449c14.712-19.617,22.816-45.517,22.816-72.927S155.961,51.607,141.247,31.99z M98.874,481.389c-4.3,4.596-10.135,7.127-16.429,7.127c-6.299,0-12.138-2.533-16.442-7.132c-4.302-4.6-6.442-10.592-6.025-16.875 l16.954-254.934c1.826,0.153,3.659,0.258,5.508,0.258c1.848,0,3.68-0.106,5.505-0.258l16.954,254.934 C105.316,470.795,103.178,476.79,98.874,481.389z M82.44,186.346c-4.207,0-8.308-0.645-12.264-1.839 c-0.328-0.121-0.66-0.232-1-0.324c-25.683-8.431-44.872-40.759-44.872-79.266c0-44.899,26.08-81.429,58.136-81.429 c32.057,0,58.138,36.529,58.138,81.429C140.578,149.817,114.498,186.346,82.44,186.346z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("path", {
    d: "M511.18,305.92V13.222l-0.099,0.043c0.339-2.587-0.174-5.303-1.653-7.696c-3.41-5.516-10.645-7.223-16.164-3.813 c-47.905,29.617-76.509,80.916-76.518,137.229c0,0.008-0.001,0.015-0.001,0.022v153.781c0,13.493,10.783,24.483,24.169,24.891 V476.7c0,19.373,15.761,35.134,35.134,35.134c19.373,0,35.135-15.761,35.135-35.134V305.979 C511.182,305.959,511.18,305.94,511.18,305.92z M441.675,294.235c-0.8-0.001-1.444-0.647-1.444-1.445V139.028 c0-0.005,0.001-0.009,0.001-0.014c0-40.621,17.413-78.189,47.462-104.139v259.36H441.675z M487.697,476.702 c0,6.423-5.225,11.649-11.65,11.649c-6.423,0-11.649-5.225-11.649-11.649V317.721h23.299V476.702z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("path", {
    d: "M332.799,0.003c-6.485,0-11.743,5.257-11.743,11.743v133.4h-29.92v-133.4c0-6.485-5.258-11.743-11.743-11.743 c-6.485,0-11.743,5.257-11.743,11.743v133.4h-29.92v-133.4c0-6.485-5.258-11.743-11.743-11.743s-11.743,5.257-11.743,11.743 v169.984c0,19.14,15.573,34.714,34.714,34.714h2.089l-16.475,247.65c-0.827,12.352,3.551,24.624,12.013,33.67 c8.463,9.049,20.42,14.238,32.807,14.238c12.385,0,24.342-5.189,32.806-14.237c8.461-9.045,12.839-21.318,12.013-33.666 l-16.476-247.655h2.093c19.142,0,34.715-15.573,34.715-34.714V11.745C344.541,5.26,339.283,0.003,332.799,0.003z M295.045,481.72 c-4.098,4.382-9.658,6.795-15.654,6.795s-11.556-2.413-15.654-6.795c-4.096-4.379-6.132-10.082-5.732-16.063l16.578-249.215h9.615 l16.579,249.218C301.177,471.638,299.142,477.341,295.045,481.72z M321.055,181.729c0.001,6.192-5.036,11.228-11.228,11.228 h-46.622c-0.015,0.001-0.031-0.001-0.046,0h-14.2c-6.192,0-11.228-5.036-11.228-11.228v-13.1h83.324V181.729z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Food"), __jsx("p", {
    className: "text-md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "2 breakfasts, 2 dinners, 2 lunches, dessert"))))), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_11__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }));
};

var SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2());
var SSkeletonPulse1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(SSkeletonPulse)(_templateObject3());
/* harmony default export */ __webpack_exports__["default"] = (id);

/***/ })

})
//# sourceMappingURL=[id].js.0d853b0adf7212dce0ce.hot-update.js.map