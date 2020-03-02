webpackHotUpdate("static/development/pages/experience.js",{

/***/ "./src/components/containers/Experiences.tsx":
/*!***************************************************!*\
  !*** ./src/components/containers/Experiences.tsx ***!
  \***************************************************/
/*! exports provided: Experiences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experiences", function() { return Experiences; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_ExperienceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/ExperienceCard */ "./src/components/functions/ExperienceCard.tsx");
/* harmony import */ var _wrapper_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wrapper/ExploreSectionOverflow */ "./src/components/wrapper/ExploreSectionOverflow.tsx");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Experiences.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Components

 // Wrapper


 // Images
// High Resolution

var featured1 = __webpack_require__(/*! ../../../public/img/high/featured1.jpg */ "./public/img/high/featured1.jpg");

var featured2 = __webpack_require__(/*! ../../../public/img/high/featured2.jpg */ "./public/img/high/featured2.jpg");

var featured3 = __webpack_require__(/*! ../../../public/img/high/featured3.jpg */ "./public/img/high/featured3.jpg");

var featureds = [{
  img: featured1,
  experiences: 940,
  type: 'Cooking',
  description: 'Make and eat meals with locals who treact you like family'
}, {
  img: featured2,
  experiences: 940,
  type: 'Cooking',
  description: 'Make and eat meals with locals who treact you like family'
}, {
  img: featured3,
  experiences: 940,
  type: 'Cooking',
  description: 'Make and eat meals with locals who treact you like family'
}];
var Experiences = function Experiences() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_wrapper_ExploreSectionOverflow__WEBPACK_IMPORTED_MODULE_2__["ExploreSectionOverflow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-start justify-startpy-2 w-featured md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, featureds.map(function (_ref, index) {
    var img = _ref.img,
        experiences = _ref.experiences,
        type = _ref.type,
        description = _ref.description;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: cuid__WEBPACK_IMPORTED_MODULE_3___default()(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("div", {
      className: "w-80 lg:w-1/3 pb-5 mr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(_functions_ExperienceCard__WEBPACK_IMPORTED_MODULE_1__["ExperienceCard"], {
      key: index,
      id: index.toString(),
      img: img,
      experiences: experiences,
      type: type,
      description: description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })));
  })))))));
};

/***/ })

})
//# sourceMappingURL=experience.js.9fce5a7906df3287938d.hot-update.js.map