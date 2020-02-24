webpackHotUpdate("static/development/pages/stays/[id].js",{

/***/ "./src/pages/stays/[id].js":
/*!*********************************!*\
  !*** ./src/pages/stays/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lazy-progressive-image */ "./node_modules/react-lazy-progressive-image/lib/index.js");
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.js");
/* harmony import */ var _components_presentational_ImagePanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/presentational/ImagePanel */ "./src/components/presentational/ImagePanel.tsx");
/* harmony import */ var _components_presentational_HeaderCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/presentational/HeaderCard */ "./src/components/presentational/HeaderCard.js");
/* harmony import */ var _components_containers_Reviews__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/containers/Reviews */ "./src/components/containers/Reviews.js");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.js");
/* harmony import */ var _components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/containers/HostedBy */ "./src/components/containers/HostedBy.js");
/* harmony import */ var _components_containers_Neighborhood__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/containers/Neighborhood */ "./src/components/containers/Neighborhood.js");
/* harmony import */ var _components_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/containers/KeepInMind */ "./src/components/containers/KeepInMind.js");
/* harmony import */ var _components_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/containers/MoreHomes */ "./src/components/containers/MoreHomes.js");
/* harmony import */ var _components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/containers/Characteristics */ "./src/components/containers/Characteristics.js");
/* harmony import */ var _components_presentational_Cancellations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/presentational/Cancellations */ "./src/components/presentational/Cancellations.js");
/* harmony import */ var _components_presentational_CheckInCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/presentational/CheckInCard */ "./src/components/presentational/CheckInCard.js");
/* harmony import */ var _components_presentational_StayDescription__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/presentational/StayDescription */ "./src/components/presentational/StayDescription.tsx");
/* harmony import */ var _components_wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/wrapper/DetailSectionOverflow */ "./src/components/wrapper/DetailSectionOverflow.js");
/* harmony import */ var _components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/wrapper/DetailSection */ "./src/components/wrapper/DetailSection.js");
/* harmony import */ var _components_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../components/containers/ToDoNear */ "./src/components/containers/ToDoNear.tsx");
/* harmony import */ var _components_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../components/containers/MoreLocations */ "./src/components/containers/MoreLocations.js");
/* harmony import */ var _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");
/* harmony import */ var _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../public/img/high/staydetail3.jpg */ "./public/img/high/staydetail3.jpg");
/* harmony import */ var _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../public/img/high/staydetail4.jpg */ "./public/img/high/staydetail4.jpg");
/* harmony import */ var _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../public/img/high/staydetail5.jpg */ "./public/img/high/staydetail5.jpg");
/* harmony import */ var _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../components/presentational/AmenityCard */ "./src/components/presentational/AmenityCard.js");
/* harmony import */ var _components_containers_SleepingArrangements__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../components/containers/SleepingArrangements */ "./src/components/containers/SleepingArrangements.js");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/stays/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Stay($id: ID!) {\n    stay(where: { id: $id }) {\n      picture_url\n      name\n      street\n      reviews_per_month\n      number_of_reviews\n      country\n      size\n      description\n      space\n      access\n      notes\n      host_name\n      hostDescription\n      host_since\n      duringStay\n      host_is_superhost\n      host_thumbnail_url\n      host_picture_url\n      host_response_rate\n      host_response_time\n      accommodates\n      beds\n      bedrooms\n      bathrooms\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





 // Dependencies

 // Loading



 // GraphQL

 // Components













 // Wrapper


 // Containers


 // Images
// import detail1 from '../../../public/img/high/staydetail1.jpg';







var GET_STAY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_9__["gql"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var query = _ref.query;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_STAY, {
    variables: {
      id: router.query.id
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      length = _useState[0],
      setLength = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, loading ? __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Vacation Rentals, Homes, Experiences & Places") : __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, data.stay.name), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/high/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("div", {
    className: "px-5 md:px-10 lg:max-w-6xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("div", {
    className: "w-full flex flex-col-reverse lg:flex-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    className: "w-full py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, loading ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    height: 30,
    width: 350,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }) : __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-3xl text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, data.stay.name), __jsx("div", {
    className: "flex items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, loading ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    height: 20,
    width: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }) : __jsx("div", {
    className: "flex items-center justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: '#E61E4D',
      marginBottom: 1
    },
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-3 w-3",
    viewBox: "0 0 37.286 37.287",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pl-1 text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, data.stay.reviews_per_month, " (", data.stay.number_of_reviews, ")"), __jsx("span", {
    className: "text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "\xA0\xB7\xA0"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
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
      lineNumber: 153
    },
    __self: this
  }, __jsx("g", {
    "clip-rule": "evenodd",
    "fill-rule": "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("path", {
    d: "m345.999 174.051v-52.052h-180v52.052c26.942-14.077 57.555-22.053 90-22.053s63.058 7.975 90 22.053z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx("path", {
    d: "m330.999 91.994v-76.994c0-8.284-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15v76.994c-.033 0-.064.005-.097.005h150.193c-.032-.001-.064-.005-.096-.005z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), __jsx("path", {
    d: "m271.572 324.382-15.572-23.478-15.572 23.478c-1.993 3.005-5.003 5.192-8.478 6.16l-27.142 7.555 17.517 22.066c2.242 2.825 3.392 6.363 3.238 9.966l-1.201 28.147 26.398-9.841c1.689-.63 3.465-.945 5.239-.945s3.55.315 5.239.945l26.398 9.841-1.201-28.147c-.153-3.603.996-7.141 3.238-9.966l17.517-22.065-27.142-7.555c-3.474-.969-6.483-3.156-8.476-6.161z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx("path", {
    d: "m255.999 181.998c-90.879 0-165 74.121-165 165s74.121 165 165 165 165-74.121 165-165-74.121-165-165-165zm88.748 157.039-28.101 35.398 1.928 45.155c.215 5.023-2.103 9.82-6.17 12.775-2.6 1.889-5.693 2.865-8.817 2.865-1.765 0-3.538-.311-5.238-.945l-42.35-15.787-42.35 15.787c-4.707 1.755-9.987 1.036-14.056-1.92-4.067-2.955-6.385-7.752-6.17-12.775l1.928-45.155-28.101-35.398c-3.126-3.938-4.071-9.18-2.518-13.961s5.399-8.467 10.243-9.815l43.541-12.121 24.981-37.664c2.778-4.19 7.473-6.709 12.5-6.709s9.722 2.519 12.5 6.709l24.981 37.664 43.541 12.121c4.844 1.349 8.689 5.034 10.243 9.815s.611 10.023-2.515 13.961z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })))), data.stay.host_is_superhost ? __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pl-1 text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Superhost") : null, __jsx("span", {
    className: "text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "\xA0\xB7\xA0"), __jsx("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-sm text-gray-650 underline",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, data.stay.street)), __jsx("div", {
    className: "hidden lg:inline-block flex items-start justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start pl-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("svg", {
    className: "h-3 w-3",
    style: {
      fill: '#484848'
    },
    viewBox: "0 0 512 512.00578",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx("path", {
    d: "m507.523438 148.890625-138.667969-144c-4.523438-4.691406-11.457031-6.164063-17.492188-3.734375-6.058593 2.453125-10.027343 8.320312-10.027343 14.847656v69.335938h-5.332032c-114.6875 0-208 93.3125-208 208v32c0 7.421875 5.226563 13.609375 12.457032 15.296875 1.175781.296875 2.347656.425781 3.519531.425781 6.039062 0 11.820312-3.542969 14.613281-9.109375 29.996094-60.011719 90.304688-97.28125 157.398438-97.28125h25.34375v69.332031c0 6.53125 3.96875 12.398438 10.027343 14.828125 5.996094 2.453125 12.96875.960938 17.492188-3.734375l138.667969-144c5.972656-6.207031 5.972656-15.976562 0-22.207031zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), __jsx("path", {
    d: "m448.003906 512.003906h-384c-35.285156 0-63.99999975-28.710937-63.99999975-64v-298.664062c0-35.285156 28.71484375-64 63.99999975-64h64c11.796875 0 21.332032 9.535156 21.332032 21.332031s-9.535157 21.332031-21.332032 21.332031h-64c-11.777344 0-21.335937 9.558594-21.335937 21.335938v298.664062c0 11.777344 9.558593 21.335938 21.335937 21.335938h384c11.773438 0 21.332032-9.558594 21.332032-21.335938v-170.664062c0-11.796875 9.535156-21.335938 21.332031-21.335938 11.800781 0 21.335937 9.539063 21.335937 21.335938v170.664062c0 35.289063-28.714844 64-64 64zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "pl-2 text-sm text-gray-850 underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Share")), __jsx("div", {
    className: "flex items-center justify-start pl-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("svg", {
    className: "h-3 w-3",
    style: {
      fill: '#484848',
      marginTop: 1
    },
    viewBox: "0 0 512.001 512",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("path", {
    d: "m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "pl-2 text-sm text-gray-850 underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Save")))))), __jsx("div", {
    className: "w-full px-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "w-full lg:w-1/2 h-12 lg:h-57v relative rounded border-r-4 border-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx(SSkeletonPulse1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  })) : __jsx(_components_presentational_ImagePanel__WEBPACK_IMPORTED_MODULE_11__["ImagePanel"], {
    img1: data.stay.picture_url,
    img2: _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_27___default.a,
    img3: _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_28___default.a,
    img4: _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_29___default.a,
    img5: _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_30___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }))), __jsx("div", {
    className: "w-full lg:w-7/12 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-between border-b border-gray-200 mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-start w-9/12 py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("div", {
    className: "mt-4 flex items-start justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-col ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, loading ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    height: 30,
    width: 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }) : __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-md lg:text-2xl text-gray-850 leading-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, data.stay.size, " hosted by ", data.stay.host_name), loading ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    height: 20,
    width: 200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }) : __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pt-1 pb-3 flex justify-start items-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, __jsx("div", {
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, data.stay.accommodates, ' ', data.stay.accommodates > 1 ? 'guests' : 'guest')), __jsx("div", {
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, data.stay.bedrooms, ' ', data.stay.bedrooms > 1 ? 'bedrooms' : 'bedroom')), __jsx("div", {
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, data.stay.beds, " ", data.stay.beds > 1 ? 'beds' : 'bed')), __jsx("div", {
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, data.stay.bathrooms, ' ', data.stay.bathrooms > 1 ? 'baths' : 'bath')))))), __jsx("div", {
    className: "flex justify-end items-start w-3/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, loading ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    circle: true,
    height: 60,
    width: 60,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }) : __jsx(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
    src: data.stay.host_picture_url,
    placeholder: data.stay.host_thumbnail_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, function (src, loading, isVisible) {
    return __jsx("img", {
      className: "h-16 w-16 rounded-full",
      src: src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    });
  }))), __jsx("div", {
    className: "my-6 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, __jsx(SSkeletonPulse1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  })) : __jsx(_components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_19__["default"], {
    host_is_superhost: data.stay.host_is_superhost,
    host_name: data.stay.host_name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  })), loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_7___default.a, {
    size: 10,
    color: '#008489',
    count: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, __jsx("div", {
    className: "my-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, __jsx(_components_presentational_StayDescription__WEBPACK_IMPORTED_MODULE_22__["StayDescription"], {
    description: data.stay.description,
    space: data.stay.space,
    access: data.stay.access,
    note: data.stay.note,
    changeLength: function changeLength() {
      return setLength(!length);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }), __jsx("div", {
    className: "my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, __jsx("p", {
    className: "",
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, "Any questions for the host?")))), __jsx("div", {
    className: "mt-10 mb-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, __jsx("a", {
    className: "py-3 px-6 border border-black rounded-lg",
    style: {
      fontFamily: 'airbnb-medium'
    },
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, "Contact host")))), __jsx(_components_wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_23__["default"], {
    title: "Sleeping arrangements",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, __jsx(_components_containers_SleepingArrangements__WEBPACK_IMPORTED_MODULE_32__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  })), __jsx(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_24__["default"], {
    title: "Amenities",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-start justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, __jsx(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_31__["default"], {
    type: "wifi",
    title: "Wifi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }), __jsx(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_31__["default"], {
    type: "laptop",
    title: "Laptop-friendly workspace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }), __jsx(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_31__["default"], {
    type: "kitchen",
    title: "Kitchen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }), __jsx(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_31__["default"], {
    type: "iron",
    title: "Iron",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  })), __jsx("div", {
    className: "mt-10 mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "py-3 px-6 rounded-xl border border-black ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, "Show all 32 amenities"))))), length ? __jsx("div", {
    className: "lg:w-5/12 lg:h-100r",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, __jsx(_components_presentational_CheckInCard__WEBPACK_IMPORTED_MODULE_21__["default"], {
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  })) : __jsx("div", {
    className: "lg:w-5/12 lg:h-80v",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, __jsx(_components_presentational_CheckInCard__WEBPACK_IMPORTED_MODULE_21__["default"], {
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  })), loading ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_containers_Reviews__WEBPACK_IMPORTED_MODULE_13__["default"], {
    reviews_per_month: data.stay.reviews_per_month,
    number_of_reviews: data.stay.number_of_reviews,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }), __jsx(_components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }), __jsx(_components_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }), __jsx(_components_wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_23__["default"], {
    title: "More places to stay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, __jsx(_components_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  })), __jsx(_components_wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_23__["default"], {
    title: "Things to do nearby",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, __jsx(_components_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_25__["ToDoNear"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  })), __jsx(_components_wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_23__["default"], {
    title: "Explore other options in and around Penafiel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, __jsx(_components_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_26__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  })))), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  }));
});
var SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2());
var SSkeletonPulse1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(SSkeletonPulse)(_templateObject3());

/***/ })

})
//# sourceMappingURL=[id].js.b47d020db43ba3f470f9.hot-update.js.map