webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/Adventures.tsx":
/*!**************************************************!*\
  !*** ./src/components/containers/Adventures.tsx ***!
  \**************************************************/
/*! exports provided: Adventures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adventures", function() { return Adventures; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Adventures.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    adventures {\n      id\n      title\n      period\n      cost\n      country\n      img\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // import PulseLoader from 'react-spinners/PulseLoader';
// import Media from 'react-media';
// Component
// import { AdventureCard } from '../presentational/AdventureCard';
// import { ShowAll } from '../ShowAll';

var GET_ADVENTURES = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());
var Adventures = function Adventures() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_ADVENTURES),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      card = _useState[0],
      setCard = _useState[1]; //   const renderContent = (data: AdventureData, number: number) => {
  //     var content = [];
  //     data.adventures.map(adventure, index => {
  //       content.push(
  //         <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 pb-5'>
  //           <AdventureCard
  //             key={index}
  //             id={adventure.id}
  //             img={data?.adventures[i].img}
  //             country={data?.adventures[i].country}
  //             title={data?.adventures[i].title}
  //             cost={data?.adventures[i].cost}
  //             period={data?.adventures[i].period}
  //           />
  //         </div>
  //       );
  //     })
  //     }
  //     return content;
  //   };
  //   if (error) return `Error! ${error.message}`;


  if (!loading) {
    console.log(data === null || data === void 0 ? void 0 : data.adventures[0]);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(PulseLoader, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })) : data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(Media, {
    queries: {
      small: '(min-width: 0px) and (max-width: 640px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, function (matches) {
    return matches.small ? (setCard(4), renderContent(data, card)) : null;
  }), __jsx(Media, {
    queries: {
      large: '(min-width: 641px) and (max-width: 767px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, function (matches) {
    return matches.large ? (setCard(3), renderContent(data, card)) : null;
  }), __jsx(Media, {
    queries: {
      xl: '(min-width: 768px) and (max-width: 1023px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, function (matches) {
    return matches.xl ? (setCard(5), renderContent(data, card)) : null;
  }), __jsx(Media, {
    queries: {
      twoxl: '(min-width: 1024px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, function (matches) {
    return matches.twoxl ? (setCard(6), renderContent(data, card)) : null;
  }))), __jsx(ShowAll, {
    title: "Show all adventures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }));
};

/***/ }),

/***/ "./src/components/presentational/AdventureCard.tsx":
false

})
//# sourceMappingURL=index.js.2e3f5b85bae61498b979.hot-update.js.map