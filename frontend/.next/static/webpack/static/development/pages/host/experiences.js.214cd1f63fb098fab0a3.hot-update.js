webpackHotUpdate("static/development/pages/host/experiences.js",{

/***/ "./src/pages/host/experiences.jsx":
/*!****************************************!*\
  !*** ./src/pages/host/experiences.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modals/HostMenuModal */ "./src/components/modals/HostMenuModal.jsx");
/* harmony import */ var _components_hostexperiences_layout_ExperiencesHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hostexperiences/layout/ExperiencesHeader */ "./src/components/hostexperiences/layout/ExperiencesHeader.jsx");
/* harmony import */ var _components_hostexperiences_layout_ExperiencesBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hostexperiences/layout/ExperiencesBanner */ "./src/components/hostexperiences/layout/ExperiencesBanner.jsx");
/* harmony import */ var _components_hostexperiences_layout_WhatsAnExperience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hostexperiences/layout/WhatsAnExperience */ "./src/components/hostexperiences/layout/WhatsAnExperience.jsx");
/* harmony import */ var _components_hostexperiences_layout_ShowWhatYouKnow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hostexperiences/layout/ShowWhatYouKnow */ "./src/components/hostexperiences/layout/ShowWhatYouKnow.jsx");
/* harmony import */ var _components_hostexperiences_layout_ExperienceCategory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hostexperiences/layout/ExperienceCategory */ "./src/components/hostexperiences/layout/ExperienceCategory.jsx");
/* harmony import */ var _components_hostexperiences_layout_JoinCommunity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/hostexperiences/layout/JoinCommunity */ "./src/components/hostexperiences/layout/JoinCommunity.jsx");
/* harmony import */ var _components_hostexperiences_layout_GotYourBack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/hostexperiences/layout/GotYourBack */ "./src/components/hostexperiences/layout/GotYourBack.jsx");
/* harmony import */ var _components_hostexperiences_layout_HowToGetStarted__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/hostexperiences/layout/HowToGetStarted */ "./src/components/hostexperiences/layout/HowToGetStarted.jsx");
/* harmony import */ var _components_hostexperiences_layout_ExperiencesQuestions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/hostexperiences/layout/ExperiencesQuestions */ "./src/components/hostexperiences/layout/ExperiencesQuestions.jsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/host/experiences.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];
 // Modals

 // Layout











/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      menuModal = _useState2[0],
      setMenuModal = _useState2[1];

  var changeMenuModal = function changeMenuModal() {
    setMenuModal(!menuModal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: "relative top-0 bg-white w-screen z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_hostexperiences_layout_ExperiencesHeader__WEBPACK_IMPORTED_MODULE_3__["ExperiencesHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), menuModal ? __jsx(_components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_2__["HostMenuModal"], {
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }) : null, __jsx("div", {
    id: "experiences__video",
    className: "h-screen lg:w-screen fixed top-0 left-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("video", {
    playsInline: true,
    autoPlay: true,
    loop: true,
    className: "w-full h-full object-cover",
    src: "https://a0.muscache.com/v/76/07/76078ccb-c33d-4d25-aa9e-4fc4c7886633/bdcbe89cac105172b0faee8a2a064c76_8000k_1.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx("div", {
    className: "relative z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_components_hostexperiences_layout_ExperiencesBanner__WEBPACK_IMPORTED_MODULE_4__["ExperienceBanner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_components_hostexperiences_layout_WhatsAnExperience__WEBPACK_IMPORTED_MODULE_5__["WhatsAnExperience"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_components_hostexperiences_layout_ShowWhatYouKnow__WEBPACK_IMPORTED_MODULE_6__["ShowWhatYouKnow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_components_hostexperiences_layout_ExperienceCategory__WEBPACK_IMPORTED_MODULE_7__["ExperienceCategory"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_components_hostexperiences_layout_JoinCommunity__WEBPACK_IMPORTED_MODULE_8__["JoinCommunity"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(_components_hostexperiences_layout_GotYourBack__WEBPACK_IMPORTED_MODULE_9__["GotYourBack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_components_hostexperiences_layout_HowToGetStarted__WEBPACK_IMPORTED_MODULE_10__["HowToGetStarted"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(_components_hostexperiences_layout_ExperiencesQuestions__WEBPACK_IMPORTED_MODULE_11__["ExperiencesQuestions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_12__["NewFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=experiences.js.214cd1f63fb098fab0a3.hot-update.js.map