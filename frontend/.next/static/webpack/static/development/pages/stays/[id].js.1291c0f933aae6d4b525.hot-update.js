webpackHotUpdate("static/development/pages/stays/[id].js",{

/***/ "./public/img/high/shield.png":
/*!************************************!*\
  !*** ./public/img/high/shield.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shield-a0dfe55987a114e9479b7b633f4dd3f1.png";

/***/ }),

/***/ "./src/components/stays/functions/HostedBy.tsx":
/*!*****************************************************!*\
  !*** ./src/components/stays/functions/HostedBy.tsx ***!
  \*****************************************************/
/*! exports provided: HostedBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostedBy", function() { return HostedBy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/stays/functions/HostedBy.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // // Loading
// import LazyImage from 'react-lazy-progressive-image';
// Image

var shield1 = __webpack_require__(/*! ../../../../public/img/high/shield.png */ "./public/img/high/shield.png");

var renderContent = function renderContent(content) {
  var wordArray = content.split(' ');
  var newArray = [];

  for (var i = 0; i < 20; i++) {
    newArray.push(wordArray[i]);
  }

  return newArray;
};

var HostedBy = function HostedBy(_ref) {
  var host_name = _ref.host_name,
      host_is_superhost = _ref.host_is_superhost,
      hostDescription = _ref.hostDescription,
      host_since = _ref.host_since,
      duringStay = _ref.duringStay,
      reviews_per_month = _ref.reviews_per_month,
      host_picture_url = _ref.host_picture_url,
      host_response_time = _ref.host_response_time,
      host_response_rate = _ref.host_response_rate;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      descriptionDisplay = _useState[0],
      setDescriptionDisplay = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      stayDisplay = _useState2[0],
      setStayDisplay = _useState2[1];

  var defaultDescription = renderContent(hostDescription);
  var defaultDuringStay = renderContent(duringStay);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "py-10 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start flex-wrap mb-8 lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("img", {
    className: "mr-6 h-16 w-16 rounded-full",
    src: host_picture_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "h-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 text-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Hosted By ", host_name), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Joined in ", host_since)))), __jsx("div", {
    className: "flex justify-start items-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "lg:w-25/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-3 w-3",
    viewBox: "0 0 37.286 37.287",
    style: {
      fill: '#E61E4D',
      marginBottom: 0.5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, reviews_per_month, " Reviews")), __jsx("div", {
    className: "ml-2 pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: "pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 512.02797 512",
    className: "h-3 w-3",
    style: {
      fill: '#E61E4D'
    },
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("path", {
    d: "m441.644531 247.59375-11.457031-32.554688-123.582031 123.585938c-12.074219 12.097656-28.160157 18.75-45.25 18.75-17.085938 0-33.171875-6.652344-45.246094-18.75l-90.667969-90.667969c-12.097656-12.074219-18.753906-28.160156-18.753906-45.246093 0-17.089844 6.65625-33.175782 18.753906-45.25 12.074219-12.09375 28.160156-18.75 45.246094-18.75 17.089844 0 33.175781 6.65625 45.25 18.75l45.417969 45.398437 121.6875-121.683594-8.195313-23.253906-3.773437-22.570313c-2.367188-14.464843-11.90625-26.453124-25.453125-32.066406-13.609375-5.652344-28.796875-3.902344-40.722656 4.652344l-59.285157 42.921875-59.949219-43.03125c-12.03125-8.488281-27.261718-10.175781-40.789062-4.5-13.4375 5.632813-22.890625 17.601563-25.257812 31.980469l-11.605469 72.253906-72.683594 12.074219c-14.441406 2.371093-26.429687 11.90625-32.0625 25.453125-5.632813 13.589844-3.882813 28.820312 4.671875 40.746094l42.902344 59.285156-43.03125 59.945312c-8.46875 12.03125-10.175782 27.285156-4.5 40.789063 5.652344 13.441406 17.597656 22.890625 31.976562 25.261719l72.257813 11.625 12.074219 72.660156c2.347656 14.421875 11.820312 26.390625 25.257812 32.023437 13.546875 5.671875 28.800781 3.988281 40.941406-4.609375l59.285156-42.921875 59.796876 42.921875c7.316406 5.226563 15.828124 7.914063 24.46875 7.914063 5.480468 0 10.984374-1.066407 16.253906-3.261719 13.570312-5.632812 23.085937-17.621094 25.453125-32.023438l11.625-72.253906 72.660156-12.074218c14.421875-2.371094 26.371094-11.820313 32.023437-25.261719 5.675782-13.503907 3.988282-28.757813-4.609374-40.9375zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx("path", {
    d: "m261.355469 314.710938c-5.460938 0-10.921875-2.089844-15.082031-6.25l-90.667969-90.667969c-8.339844-8.339844-8.339844-21.824219 0-30.164063 8.34375-8.34375 21.824219-8.34375 30.167969 0l75.582031 75.582032 214.25-214.25c8.34375-8.339844 21.824219-8.339844 30.167969 0 8.339843 8.339843 8.339843 21.824218 0 30.164062l-229.335938 229.335938c-4.160156 4.160156-9.621094 6.25-15.082031 6.25zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Verified"))), __jsx("div", {
    className: "ml-2 pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, host_is_superhost === 't' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("svg", {
    className: "h-3 w-3",
    style: {
      fill: '#E61E4D'
    },
    viewBox: "0 0 511.999 511.999",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("g", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("path", {
    d: "m345.999 174.051v-52.052h-180v52.052c26.942-14.077 57.555-22.053 90-22.053s63.058 7.975 90 22.053z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), __jsx("path", {
    d: "m330.999 91.994v-76.994c0-8.284-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15v76.994c-.033 0-.064.005-.097.005h150.193c-.032-.001-.064-.005-.096-.005z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), __jsx("path", {
    d: "m271.572 324.382-15.572-23.478-15.572 23.478c-1.993 3.005-5.003 5.192-8.478 6.16l-27.142 7.555 17.517 22.066c2.242 2.825 3.392 6.363 3.238 9.966l-1.201 28.147 26.398-9.841c1.689-.63 3.465-.945 5.239-.945s3.55.315 5.239.945l26.398 9.841-1.201-28.147c-.153-3.603.996-7.141 3.238-9.966l17.517-22.065-27.142-7.555c-3.474-.969-6.483-3.156-8.476-6.161z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), __jsx("path", {
    d: "m255.999 181.998c-90.879 0-165 74.121-165 165s74.121 165 165 165 165-74.121 165-165-74.121-165-165-165zm88.748 157.039-28.101 35.398 1.928 45.155c.215 5.023-2.103 9.82-6.17 12.775-2.6 1.889-5.693 2.865-8.817 2.865-1.765 0-3.538-.311-5.238-.945l-42.35-15.787-42.35 15.787c-4.707 1.755-9.987 1.036-14.056-1.92-4.067-2.955-6.385-7.752-6.17-12.775l1.928-45.155-28.101-35.398c-3.126-3.938-4.071-9.18-2.518-13.961s5.399-8.467 10.243-9.815l43.541-12.121 24.981-37.664c2.778-4.19 7.473-6.709 12.5-6.709s9.722 2.519 12.5 6.709l24.981 37.664 43.541 12.121c4.844 1.349 8.689 5.034 10.243 9.815s.611 10.023-2.515 13.961z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Superhost")) : null))), __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, descriptionDisplay ? __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, hostDescription) : __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "".concat(defaultDescription.join(' '), "..."), __jsx("button", {
    onClick: function onClick() {
      return setDescriptionDisplay(true);
    },
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-green-850 border-b text-green-850 border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Read More"))), duringStay ? __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "During your stay"), stayDisplay ? __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, duringStay)) : __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "".concat(defaultDuringStay.join(' '), "..."), __jsx("button", {
    onClick: function onClick() {
      return setStayDisplay(true);
    },
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-green-850 border-b text-green-850 border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "Read More"))) : null, host_is_superhost == 't' ? __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-850 py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, host_name, " is a Superhost"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.")) : null)), __jsx("div", {
    className: "lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("p", {
    className: "text-gray-750 pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Languages:\xA0", __jsx("span", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "English, Espanol")), __jsx("p", {
    className: "text-gray-750 pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Response rate:\xA0", __jsx("span", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, host_response_rate)), __jsx("p", {
    className: "text-gray-750 pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Response time:\xA0", __jsx("span", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, host_response_time)))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full lg:w-auto mb-4 border border-black rounded-lg py-3 px-5 text-gray-850 text-sm mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "Contact Host"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx("img", {
    src: shield1,
    className: "h-full w-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  })), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full  lg:w-15/31 ml-4 text-xs text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, "To protect your payment, never transfer money or communicate outside of the Airbnb website or app.")))))));
};

/***/ }),

/***/ "./src/pages/stays/[id].tsx":
/*!**********************************!*\
  !*** ./src/pages/stays/[id].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.jsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
/* harmony import */ var _components_stays_containers_Reviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/stays/containers/Reviews */ "./src/components/stays/containers/Reviews.tsx");
/* harmony import */ var _components_stays_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/stays/containers/ToDoNear */ "./src/components/stays/containers/ToDoNear.tsx");
/* harmony import */ var _components_stays_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/stays/containers/MoreLocations */ "./src/components/stays/containers/MoreLocations.tsx");
/* harmony import */ var _components_stays_containers_Amenities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/stays/containers/Amenities */ "./src/components/stays/containers/Amenities.tsx");
/* harmony import */ var _components_stays_containers_PlaceInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/stays/containers/PlaceInfo */ "./src/components/stays/containers/PlaceInfo.tsx");
/* harmony import */ var _components_stays_containers_StayInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/stays/containers/StayInfo */ "./src/components/stays/containers/StayInfo.tsx");
/* harmony import */ var _components_stays_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/stays/containers/MoreHomes */ "./src/components/stays/containers/MoreHomes.tsx");
/* harmony import */ var _components_stays_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/stays/containers/KeepInMind */ "./src/components/stays/containers/KeepInMind.tsx");
/* harmony import */ var _components_stays_containers_Characteristics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/stays/containers/Characteristics */ "./src/components/stays/containers/Characteristics.tsx");
/* harmony import */ var _components_stays_containers_SleepingArrangements__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/stays/containers/SleepingArrangements */ "./src/components/stays/containers/SleepingArrangements.tsx");
/* harmony import */ var _components_stays_functions_ImagePanel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/stays/functions/ImagePanel */ "./src/components/stays/functions/ImagePanel.tsx");
/* harmony import */ var _components_stays_functions_MainInfo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/stays/functions/MainInfo */ "./src/components/stays/functions/MainInfo.tsx");
/* harmony import */ var _components_stays_functions_CheckInCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/stays/functions/CheckInCard */ "./src/components/stays/functions/CheckInCard.tsx");
/* harmony import */ var _components_stays_functions_HostedBy__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/stays/functions/HostedBy */ "./src/components/stays/functions/HostedBy.tsx");


var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/stays/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Stay($id: Int!) {\n    stay(id: $id) {\n      picture_url\n      name\n      # street\n      reviews_per_month\n      number_of_reviews\n      country\n      size\n      description\n      space\n      access\n      notes\n      host_name\n      host_description\n      host_since\n      during_stay\n      host_is_superhost\n      host_thumbnail_url\n      host_picture_url\n      host_response_rate\n      host_response_time\n      acommodates\n      beds\n      bedrooms\n      bathrooms\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





 // GraphQL

 // General


 // Containers










 // Functions




 // Images

var detail2 = __webpack_require__(/*! ../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");

var detail3 = __webpack_require__(/*! ../../../public/img/high/staydetail3.jpg */ "./public/img/high/staydetail3.jpg");

var detail4 = __webpack_require__(/*! ../../../public/img/high/staydetail4.jpg */ "./public/img/high/staydetail4.jpg");

var detail5 = __webpack_require__(/*! ../../../public/img/high/staydetail5.jpg */ "./public/img/high/staydetail5.jpg");

var GET_STAY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());

var id = function id() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log('router.query.id', router.query.id); // const newId = parseInt(`${router.query.id}`, 10);
  // console.log('newid', typeof newId);

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_STAY, {
    variables: {
      id: parseInt("".concat(router.query.id), 10)
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data;

  console.log('router', typeof router.query.id);

  var changeLength = function changeLength() {
    setLength(!length);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      length = _useState[0],
      setLength = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, loading ? __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, "Vacation Rentals, Homes, Experiences & Places") : data && __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, data.stay.name), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/high/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  })), __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_6__["ExploreHeader"], {
    white: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "px-5 md:px-10 lg:max-w-6xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full flex flex-col-reverse lg:flex-col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_components_stays_functions_MainInfo__WEBPACK_IMPORTED_MODULE_19__["MainInfo"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }), __jsx(_components_stays_functions_ImagePanel__WEBPACK_IMPORTED_MODULE_18__["ImagePanel"], {
    img1: data.stay.picture_url,
    img2: detail2,
    img3: detail3,
    img4: detail4,
    img5: detail5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "w-full lg:w-7/12 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_components_stays_containers_PlaceInfo__WEBPACK_IMPORTED_MODULE_12__["PlaceInfo"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }), __jsx(_components_stays_containers_Characteristics__WEBPACK_IMPORTED_MODULE_16__["Characteristics"], {
    host_is_superhost: data.stay.host_is_superhost,
    host_name: data.stay.host_name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  })), data && __jsx(_components_stays_containers_StayInfo__WEBPACK_IMPORTED_MODULE_13__["StayInfo"], {
    data: data,
    setLength: changeLength,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 20
    }
  }), __jsx(_components_stays_containers_SleepingArrangements__WEBPACK_IMPORTED_MODULE_17__["SleepingArrangements"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }), __jsx(_components_stays_containers_Amenities__WEBPACK_IMPORTED_MODULE_11__["Amenities"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  })), length ? __jsx(_components_stays_functions_CheckInCard__WEBPACK_IMPORTED_MODULE_20__["CheckInCard"], {
    length: length,
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }) : __jsx(_components_stays_functions_CheckInCard__WEBPACK_IMPORTED_MODULE_20__["CheckInCard"], {
    length: length,
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }), data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_components_stays_containers_Reviews__WEBPACK_IMPORTED_MODULE_8__["Reviews"], {
    reviews_per_month: data.stay.reviews_per_month,
    number_of_reviews: data.stay.number_of_reviews,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }), __jsx(_components_stays_functions_HostedBy__WEBPACK_IMPORTED_MODULE_21__["HostedBy"], {
    host_name: data.stay.host_name,
    hostDescription: data.stay.hostDescription,
    host_since: data.stay.host_since,
    duringStay: data.stay.duringStay,
    host_is_superhost: data.stay.host_is_superhost,
    reviews_per_month: data.stay.reviews_per_month,
    host_picture_url: data.stay.host_picture_url,
    host_thumbnail_url: data.stay.host_thumbnail_url,
    host_response_rate: data.stay.host_response_rate,
    host_response_time: data.stay.host_response_time,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }), __jsx(_components_stays_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_15__["KeepInMind"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }), __jsx(_components_stays_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_14__["MoreHomes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }), __jsx(_components_stays_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_9__["ToDoNear"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }), __jsx(_components_stays_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_10__["MoreLocations"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }))), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_7__["NewFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (id);

/***/ })

})
//# sourceMappingURL=[id].js.1291c0f933aae6d4b525.hot-update.js.map