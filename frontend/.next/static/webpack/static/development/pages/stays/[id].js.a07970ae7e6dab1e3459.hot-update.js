webpackHotUpdate("static/development/pages/stays/[id].js",{

/***/ "./src/components/containers/Reviews.tsx":
false,

/***/ "./src/components/presentational/ReviewCard.tsx":
false,

/***/ "./src/pages/stays/[id].tsx":
/*!**********************************!*\
  !*** ./src/pages/stays/[id].tsx ***!
  \**********************************/
/*! exports provided: default */
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
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.tsx");
/* harmony import */ var _functions_ImagePanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/ImagePanel */ "./src/pages/stays/functions/ImagePanel.js");
/* harmony import */ var _containers_Reviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/Reviews */ "./src/pages/stays/containers/Reviews.tsx");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.tsx");
/* harmony import */ var _components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/containers/HostedBy */ "./src/components/containers/HostedBy.tsx");
/* harmony import */ var _containers_KeepInMind__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/KeepInMind */ "./src/pages/stays/containers/KeepInMind.tsx");
/* harmony import */ var _containers_MoreHomes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/MoreHomes */ "./src/pages/stays/containers/MoreHomes.tsx");
/* harmony import */ var _components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/containers/Characteristics */ "./src/components/containers/Characteristics.tsx");
/* harmony import */ var _functions_CheckInCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./functions/CheckInCard */ "./src/pages/stays/functions/CheckInCard.tsx");
/* harmony import */ var _containers_SleepingArrangements__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/SleepingArrangements */ "./src/pages/stays/containers/SleepingArrangements.tsx");
/* harmony import */ var _containers_ToDoNear__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/ToDoNear */ "./src/pages/stays/containers/ToDoNear.tsx");
/* harmony import */ var _containers_MoreLocations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./containers/MoreLocations */ "./src/pages/stays/containers/MoreLocations.tsx");
/* harmony import */ var _containers_Amenities__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./containers/Amenities */ "./src/pages/stays/containers/Amenities.js");
/* harmony import */ var _containers_PlaceInfo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./containers/PlaceInfo */ "./src/pages/stays/containers/PlaceInfo.js");
/* harmony import */ var _containers_StayInfo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./containers/StayInfo */ "./src/pages/stays/containers/StayInfo.js");
/* harmony import */ var _functions_MainInfo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./functions/MainInfo */ "./src/pages/stays/functions/MainInfo.js");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/stays/[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Stay($id: ID!) {\n    stay(where: { id: $id }) {\n      picture_url\n      name\n      street\n      reviews_per_month\n      number_of_reviews\n      country\n      size\n      description\n      space\n      access\n      notes\n      host_name\n      hostDescription\n      host_since\n      duringStay\n      host_is_superhost\n      host_thumbnail_url\n      host_picture_url\n      host_response_rate\n      host_response_time\n      accommodates\n      beds\n      bedrooms\n      bathrooms\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





 // Dependencies
// import styled from 'styled-components';
// GraphQL

 // Components










 // Containers





 // Functions

 // Images
// import detail1 from '../../../public/img/high/staydetail1.jpg';

var detail2 = __webpack_require__(/*! ../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");

var detail3 = __webpack_require__(/*! ../../../public/img/high/staydetail3.jpg */ "./public/img/high/staydetail3.jpg");

var detail4 = __webpack_require__(/*! ../../../public/img/high/staydetail4.jpg */ "./public/img/high/staydetail4.jpg");

var detail5 = __webpack_require__(/*! ../../../public/img/high/staydetail5.jpg */ "./public/img/high/staydetail5.jpg");

var GET_STAY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());

var id = function id() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_STAY, {
    variables: {
      id: router.query.id
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data;

  var changeLength = function changeLength() {
    setLength(!length);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      length = _useState[0],
      setLength = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, loading ? __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Vacation Rentals, Homes, Experiences & Places") : data && __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, data.stay.name), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/high/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_6__["ExploreHeader"], {
    type: "stay",
    mode: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("div", {
    className: "px-5 md:px-10 lg:max-w-6xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    className: "w-full flex flex-col-reverse lg:flex-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_functions_MainInfo__WEBPACK_IMPORTED_MODULE_21__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(_functions_ImagePanel__WEBPACK_IMPORTED_MODULE_7__["ImagePanel"], {
    img1: data.stay.picture_url,
    img2: detail2,
    img3: detail3,
    img4: detail4,
    img5: detail5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }))), __jsx("div", {
    className: "w-full lg:w-7/12 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_containers_PlaceInfo__WEBPACK_IMPORTED_MODULE_19__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx(_components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_13__["Characteristics"], {
    host_is_superhost: data.stay.host_is_superhost,
    host_name: data.stay.host_name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })), data && __jsx(_containers_StayInfo__WEBPACK_IMPORTED_MODULE_20__["default"], {
    data: data,
    setLength: changeLength,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), __jsx(_containers_SleepingArrangements__WEBPACK_IMPORTED_MODULE_15__["SleepingArrangements"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), __jsx(_containers_Amenities__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })), length ? __jsx(_functions_CheckInCard__WEBPACK_IMPORTED_MODULE_14__["CheckInCard"], {
    length: length,
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }) : __jsx(_functions_CheckInCard__WEBPACK_IMPORTED_MODULE_14__["CheckInCard"], {
    length: length,
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_containers_Reviews__WEBPACK_IMPORTED_MODULE_8__["Reviews"], {
    reviews_per_month: data.stay.reviews_per_month,
    number_of_reviews: data.stay.number_of_reviews,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }), __jsx(_components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_10__["HostedBy"], {
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
      lineNumber: 146
    },
    __self: this
  }), __jsx(_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_11__["KeepInMind"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), __jsx(_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_12__["MoreHomes"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx(_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_16__["ToDoNear"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), __jsx(_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_17__["MoreLocations"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }))), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_9__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }));
}; // const SSkeletonPulse = styled.div`
//   display: inline-block;
//   height: 100%;
//   width: 100%;
//   background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
//   background-size: 400% 400%;
//   @keyframes pulse {
//     0% {
//       background-position: 0% 0%;
//     }
//     100% {
//       background-position: -135% 0%;
//     }
//   }
// `;
// const SSkeletonPulse1 = styled(SSkeletonPulse)`
//   animation: pulse 1.2s ease-in-out infinite;
// `;


/* harmony default export */ __webpack_exports__["default"] = (id);

/***/ }),

/***/ "./src/pages/stays/containers/Reviews.tsx":
/*!************************************************!*\
  !*** ./src/pages/stays/containers/Reviews.tsx ***!
  \************************************************/
/*! exports provided: Reviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reviews", function() { return Reviews; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_ReviewCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/ReviewCard */ "./src/pages/stays/functions/ReviewCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/stays/containers/Reviews.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Components


var Reviews = function Reviews(_ref) {
  var reviews_per_month = _ref.reviews_per_month,
      number_of_reviews = _ref.number_of_reviews;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "my-4 lg:border-b lg:border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "py-4 flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: '#E61E4D',
      marginBottom: 1
    },
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 37.286 37.287",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })))), __jsx("p", {
    id: "line",
    className: "text-2xl text-gray-850 ml-3",
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, reviews_per_month)), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "ml-1 text-2xl text-gray-850 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "(", number_of_reviews, " reviews)"))), __jsx("div", {
    className: "mt-3 flex flex-wrap items-start justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "py-1 flex items-center justify-between w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Location"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 pr-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "5.0"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "py-1 flex items-center justify-between w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Communication"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 pr-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "4.9"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "py-1 flex items-center justify-between w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Cleanliness"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 pr-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "4.9"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "py-1 flex items-center justify-between w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Check-in"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 pr-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "4.9"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "py-1 flex items-center justify-between w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Accuracy"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 pr-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "4.8"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "py-1 flex items-center justify-between w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Value"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 pr-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "4.8")))), __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-1/2 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(_functions_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["ReviewCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), __jsx("div", {
    className: "w-full lg:w-1/2 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(_functions_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["ReviewCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })), __jsx("div", {
    className: "w-full lg:w-1/2 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(_functions_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["ReviewCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), __jsx("div", {
    className: "w-full lg:w-1/2 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_functions_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["ReviewCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  })), __jsx("div", {
    className: "w-full lg:w-1/2 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_functions_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["ReviewCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })), __jsx("div", {
    className: "w-full lg:w-1/2 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_functions_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["ReviewCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }))), __jsx("div", {
    className: "py-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "py-3 px-5 rounded-xl border border-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Show all 387 reviews"))));
};

/***/ }),

/***/ "./src/pages/stays/functions/ReviewCard.tsx":
/*!**************************************************!*\
  !*** ./src/pages/stays/functions/ReviewCard.tsx ***!
  \**************************************************/
/*! exports provided: ReviewCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewCard", function() { return ReviewCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/stays/functions/ReviewCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Image

var img1 = __webpack_require__(/*! ../../../../public/img/high/airbnb-background.jpg */ "./public/img/high/airbnb-background.jpg");

var ReviewCard = function ReviewCard() {
  var renderDescription = function renderDescription(description) {
    var wordArray = description.split(' ');

    if (wordArray.length < 50) {
      return __jsx("p", {
        className: "text-gray-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "description");
    } else {
      var _wordArray = description.split(' ');

      var newArray = [];

      for (var i = 0; i < 50; i++) {
        newArray.push(_wordArray[i]);
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-gray-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "".concat(newArray.join(' '), "..."), __jsx("a", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "hover:border-green-850 border-b text-green-850 border-transparent",
        href: "/#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Read More")));
    }
  };

  var description = "As we pulled into the driveway, we knew it was an incredible place. Maria and Alberto were the perfect hosts and toured us around their beautiful property. I'm not sure you will believe how amazing it is. We have spent 10 days in Portugal and the time in Penafiel has been the...";
  return __jsx("div", {
    className: "lg:w-25/31 py-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("img", {
    className: "h-14 w-14 rounded-full",
    src: img1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("div", {
    className: "ml-4 pb-4 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-col items-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Maureen"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "October 2019")))), renderDescription(description));
};

/***/ })

})
//# sourceMappingURL=[id].js.a07970ae7e6dab1e3459.hot-update.js.map