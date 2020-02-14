webpackHotUpdate("static/development/pages/rooms/[id].js",{

/***/ "./src/components/presentational/ImagePanel.js":
/*!*****************************************************!*\
  !*** ./src/components/presentational/ImagePanel.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (({
  img1,
  img2,
  img3,
  img4,
  img5
}) => {
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setSkeleton = async seconds => {
    await sleep(seconds);
    setLoading(true);
  };

  setSkeleton(4000);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap justify-start items-start"
  }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: `url(${img1})`
    },
    className: "border border-gray-100 w-1/2 h-2/3 relative bg-cover bg-no-repeat"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 h-2/3 relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SSkeletonPulse1, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 h-2/3 relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full h-full md:flex items-start justify-start flex-wrap"
  }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: `url(${img2})`
    },
    id: "zoom",
    className: "w-full border border-gray-300 md:w-1/2 h-1/2 relative overflow-hidden "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img2,
    className: "bg-cover bg-no-repeat"
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-1/2 h-1/2 relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SSkeletonPulse2, null)), loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: `url(${img3})`
    },
    className: "w-full border border-gray-300 md:w-1/2 h-1/2 relative bg-cover bg-no-repeat"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-1/2 h-1/2 relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SSkeletonPulse3, null)), loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: `url(${img4})`
    },
    className: "w-full border border-gray-300 md:w-1/2 h-1/2 relative bg-cover bg-no-repeat"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-1/2 h-1/2 relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SSkeletonPulse4, null)), loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: `url(${img5})`
    },
    className: "w-full border border-gray-300 md:w-1/2 h-1/2 relative bg-cover bg-no-repeat"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-1/2 h-1/2 relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SSkeletonPulse5, null)))));
});
const SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
const SSkeletonPulse1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(SSkeletonPulse)`
  animation: pulse 1.2s ease-in-out infinite;
`;
const SSkeletonPulse2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(SSkeletonPulse)`
  animation: pulse 1.5s ease-in-out infinite;
`;
const SSkeletonPulse3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(SSkeletonPulse)`
  animation: pulse 1.8s ease-in-out infinite;
`;
const SSkeletonPulse4 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(SSkeletonPulse)`
  animation: pulse 2.1s ease-in-out infinite;
`;
const SSkeletonPulse5 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(SSkeletonPulse)`
  animation: pulse 2.4s ease-in-out infinite;
`;

/***/ })

})
//# sourceMappingURL=[id].js.e054647e88a355320ae0.hot-update.js.map