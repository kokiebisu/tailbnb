webpackHotUpdate("static/development/pages/adventures/[id].js",{

/***/ "./src/pages/adventures/[id].tsx":
/*!***************************************!*\
  !*** ./src/pages/adventures/[id].tsx ***!
  \***************************************/
/*! no exports provided */
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
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _components_adventures_containers_Banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/adventures/containers/Banner */ "./src/components/adventures/containers/Banner.tsx");
/* harmony import */ var _components_adventures_containers_WhatYouDo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/adventures/containers/WhatYouDo */ "./src/components/adventures/containers/WhatYouDo.tsx");
/* harmony import */ var _components_adventures_containers_Adventures__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/adventures/containers/Adventures */ "./src/components/adventures/containers/Adventures.tsx");
/* harmony import */ var _components_adventures_containers_Included__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/adventures/containers/Included */ "./src/components/adventures/containers/Included.tsx");
/* harmony import */ var _components_adventures_containers_Itinerary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/adventures/containers/Itinerary */ "./src/components/adventures/containers/Itinerary.tsx");
/* harmony import */ var _components_adventures_containers_Host__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/adventures/containers/Host */ "./src/components/adventures/containers/Host.tsx");
/* harmony import */ var _components_adventures_containers_Availability__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/adventures/containers/Availability */ "./src/components/adventures/containers/Availability.tsx");
/* harmony import */ var _components_adventures_containers_Reviews__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/adventures/containers/Reviews */ "./src/components/adventures/containers/Reviews.tsx");
/* harmony import */ var _components_adventures_containers_Safety__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/adventures/containers/Safety */ "./src/components/adventures/containers/Safety.tsx");
/* harmony import */ var _components_adventures_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/adventures/containers/KeepInMind */ "./src/components/adventures/containers/KeepInMind.tsx");
/* harmony import */ var _components_adventures_containers_KeepExploring__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/adventures/containers/KeepExploring */ "./src/components/adventures/containers/KeepExploring.tsx");
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.tsx");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.tsx");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/adventures/[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Adventure($id: ID!) {\n    adventure(where: { id: $id }) {\n      title\n      period\n      cost\n      country\n      img\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // GraphQL

 // Section











 // Layout


 // Next

var GET_ADVENTURE = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());

var id = function id() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_ADVENTURE, {
    variables: {
      id: router.query.id
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return "error: ".concat(error);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, console.log(data), loading ? __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Vacation Rentals, Homes, Experiences & Places") : data.adventure && __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, data.adventure.title), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/high/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_17__["ExploreHeader"], {
    type: "stay",
    mode: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(_components_adventures_containers_Banner__WEBPACK_IMPORTED_MODULE_6__["Banner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(_components_adventures_containers_WhatYouDo__WEBPACK_IMPORTED_MODULE_7__["WhatYouDo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(_components_adventures_containers_Adventures__WEBPACK_IMPORTED_MODULE_8__["Adventures"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_components_adventures_containers_Included__WEBPACK_IMPORTED_MODULE_9__["Included"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(_components_adventures_containers_Itinerary__WEBPACK_IMPORTED_MODULE_10__["Itinerary"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(_components_adventures_containers_Host__WEBPACK_IMPORTED_MODULE_11__["Host"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(_components_adventures_containers_Availability__WEBPACK_IMPORTED_MODULE_12__["Availability"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(_components_adventures_containers_Reviews__WEBPACK_IMPORTED_MODULE_13__["Reviews"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(_components_adventures_containers_Safety__WEBPACK_IMPORTED_MODULE_14__["Safety"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(_components_adventures_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_15__["KeepInMind"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(_components_adventures_containers_KeepExploring__WEBPACK_IMPORTED_MODULE_16__["KeepExploring"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_18__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=[id].js.c1eb36ebfaceee9ea7bf.hot-update.js.map