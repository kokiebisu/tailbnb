webpackHotUpdate("static/development/pages/host/setup.js",{

/***/ "./src/components/hosthomes/layout/HostReady.tsx":
/*!*******************************************************!*\
  !*** ./src/components/hosthomes/layout/HostReady.tsx ***!
  \*******************************************************/
/*! exports provided: HostReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostReady", function() { return HostReady; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hosthomes/layout/HostReady.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Images

var ready = __webpack_require__(/*! ../../../../public/img/high/host-ready.jpg */ "./public/img/high/host-ready.jpg");

var HostReady = function HostReady() {
  return __jsx("div", {
    className: "w-full md:max-w-4xl lg:max-w-7xl mx-auto mt-8 mb-12 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "w-full h-96 md:h-112",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    className: "h-full w-full object-cover",
    src: ready,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx("div", {
    id: "ready",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-white text-4xl md:text-6xl tracking-tighter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Ready to earn?")), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "bg-white py-3 px-5 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Get started")))));
};

/***/ }),

/***/ "./src/pages/host/setup.jsx":
/*!**********************************!*\
  !*** ./src/pages/host/setup.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_HostHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/HostHeader */ "./src/components/layout/HostHeader.jsx");
/* harmony import */ var _components_hostsetup_layout_HowToStart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/hostsetup/layout/HowToStart */ "./src/components/hostsetup/layout/HowToStart.jsx");
/* harmony import */ var _components_hostsetup_layout_ControlHosting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hostsetup/layout/ControlHosting */ "./src/components/hostsetup/layout/ControlHosting.jsx");
/* harmony import */ var _components_hostsetup_layout_AdvertiseMillions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hostsetup/layout/AdvertiseMillions */ "./src/components/hostsetup/layout/AdvertiseMillions.jsx");
/* harmony import */ var _components_hostsetup_layout_HostingSupport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hostsetup/layout/HostingSupport */ "./src/components/hostsetup/layout/HostingSupport.jsx");
/* harmony import */ var _components_hostsetup_layout_PeopleHost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hostsetup/layout/PeopleHost */ "./src/components/hostsetup/layout/PeopleHost.jsx");
/* harmony import */ var _components_hostservices_layout_QuestionsAnswered__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hostservices/layout/QuestionsAnswered */ "./src/components/hostservices/layout/QuestionsAnswered.tsx");
/* harmony import */ var _components_hosthomes_layout_HostReady__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/hosthomes/layout/HostReady */ "./src/components/hosthomes/layout/HostReady.tsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
/* harmony import */ var _components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/modals/HostMenuModal */ "./src/components/modals/HostMenuModal.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/host/setup.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Layout









 // Modals



var setup = function setup() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  var changeMenuModal = function changeMenuModal() {
    setMenuModal(!menuModal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_HostHeader__WEBPACK_IMPORTED_MODULE_1__["HostHeader"], {
    color: "#008489",
    section: "setup",
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), menuModal ? __jsx(_components_modals_HostMenuModal__WEBPACK_IMPORTED_MODULE_10__["HostMenuModal"], {
    switchMenuModal: changeMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }) : null, __jsx(_components_hostsetup_layout_HowToStart__WEBPACK_IMPORTED_MODULE_2__["HowToStart"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_hostsetup_layout_ControlHosting__WEBPACK_IMPORTED_MODULE_3__["ControlHosting"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_components_hostsetup_layout_AdvertiseMillions__WEBPACK_IMPORTED_MODULE_4__["AdvertiseMillions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components_hostsetup_layout_HostingSupport__WEBPACK_IMPORTED_MODULE_5__["HostingSupport"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_components_hostsetup_layout_PeopleHost__WEBPACK_IMPORTED_MODULE_6__["PeopleHost"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_components_hostservices_layout_QuestionsAnswered__WEBPACK_IMPORTED_MODULE_7__["QuestionsAnswered"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_components_hosthomes_layout_HostReady__WEBPACK_IMPORTED_MODULE_8__["HostReady"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_9__["NewFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (setup);

/***/ })

})
//# sourceMappingURL=setup.js.8475a2bb4bfb6824ecad.hot-update.js.map