webpackHotUpdate("static/development/pages/experience.js",{

/***/ "./src/components/containers/Hosts.tsx":
/*!*********************************************!*\
  !*** ./src/components/containers/Hosts.tsx ***!
  \*********************************************/
/*! exports provided: Hosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hosts", function() { return Hosts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_experiences_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/experiences.json */ "./src/data/experiences.json");
var _data_experiences_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/experiences.json */ "./src/data/experiences.json", 1);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_HostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/HostCard */ "./src/components/functions/HostCard.tsx");
/* harmony import */ var _wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wrapper/ExploreSection */ "./src/components/wrapper/ExploreSection.tsx");
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/src/components/containers/Hosts.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Components

 // Wrapper


var Hosts = function Hosts() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  setInterval(function () {
    return setLoading(false);
  }, 1000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_4__["ExploreSection"], {
    title: "Meet hosts around the world",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 10,
    color: '#008489',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  })) : __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, _data_experiences_json__WEBPACK_IMPORTED_MODULE_1__ && _data_experiences_json__WEBPACK_IMPORTED_MODULE_1__.map(function (_ref, index) {
    var title = _ref.title,
        location = _ref.location,
        country = _ref.country,
        img = _ref.img;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }, __jsx(_functions_HostCard__WEBPACK_IMPORTED_MODULE_3__["HostCard"], {
      title: title,
      img: img,
      location: location,
      country: country,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 23
      }
    })));
  }))));
};

/***/ })

})
//# sourceMappingURL=experience.js.435784a8ce7dfe49154f.hot-update.js.map