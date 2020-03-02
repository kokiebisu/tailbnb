webpackHotUpdate("static/development/pages/stays/[id].js",{

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
/* harmony import */ var _components_containers_Reviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/containers/Reviews */ "./src/components/containers/Reviews.tsx");
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
    changeLength: setLength,
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
  }), data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_components_containers_Reviews__WEBPACK_IMPORTED_MODULE_8__["Reviews"], {
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

/***/ })

})
//# sourceMappingURL=[id].js.bac57e703d5b5872e082.hot-update.js.map