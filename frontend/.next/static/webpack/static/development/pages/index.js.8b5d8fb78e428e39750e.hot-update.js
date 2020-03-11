webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/Today.jsx":
/*!*********************************************!*\
  !*** ./src/components/containers/Today.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-sizes */ "./node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions_LocationExperienceCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/LocationExperienceCard */ "./src/components/functions/LocationExperienceCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wrapper/Section */ "./src/components/wrapper/Section.tsx");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Today.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query LocationExperiences($available: String, $location: String) {\n    experiences(\n      where: { available: $available, location: $location }\n      first: 6\n    ) {\n      id\n      title\n      cost\n      ratings\n      reviews\n      location\n      img\n      available\n      category\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

 // import { useState } from 'react';




 // Components


 // Wrapper


var GET_LOCATION_EXPERIENCES = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    isMobile: width < 767,
    isTablet: width > 767 && width < 1023,
    isLaptop: width > 1023 && width < 1440,
    isDesktop: width > 1440
  };
};

var renderContent = function renderContent(data, number) {
  var content = [];

  for (var i = 0; i < number; i++) {
    content.push(__jsx("div", {
      className: "w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 pb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(_functions_LocationExperienceCard__WEBPACK_IMPORTED_MODULE_6__["LocationExperienceCard"], {
      key: i,
      id: data === null || data === void 0 ? void 0 : data.experiences[i].id,
      img: data === null || data === void 0 ? void 0 : data.experiences[i].img,
      title: data === null || data === void 0 ? void 0 : data.experiences[i].title,
      cost: data === null || data === void 0 ? void 0 : data.experiences[i].cost,
      ratings: data === null || data === void 0 ? void 0 : data.experiences[i].ratings,
      reviews: data === null || data === void 0 ? void 0 : data.experiences[i].reviews,
      category: data === null || data === void 0 ? void 0 : data.experiences[i].category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })));
  }

  return content;
}; // interface Experience {
//   id: string;
//   title: string;
//   cost: number;
//   ratings: number;
//   reviews: number;
//   category: string;
//   img: string;
// }
// interface ExperienceData {
//   experiences: Experience[];
// }


var Today = function Today(_ref2) {
  var isMobile = _ref2.isMobile,
      isTablet = _ref2.isTablet,
      isLaptop = _ref2.isLaptop,
      isDesktop = _ref2.isDesktop;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_LOCATION_EXPERIENCES, {
    variables: {
      available: 'Today',
      location: 'Vancouver'
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return "Error! ".concat(error.message);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_Section__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    title: "Today in Vancouver",
    phrase: "Book activities led by local hosts on your next trip.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })) : data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isMobile ? renderContent(data, 4) : null, isTablet ? renderContent(data, 3) : null, isLaptop ? renderContent(data, 4) : null, isDesktop ? renderContent(data, 5) : null)), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_7__["ShowAll"], {
    title: "Show all experiences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_5___default()(mapSizesToProps)(Today));

/***/ })

})
//# sourceMappingURL=index.js.8b5d8fb78e428e39750e.hot-update.js.map