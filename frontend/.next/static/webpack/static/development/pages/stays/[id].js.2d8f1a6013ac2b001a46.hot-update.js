webpackHotUpdate("static/development/pages/stays/[id].js",{

/***/ "./src/components/containers/KeepInMind.tsx":
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
/* harmony import */ var _components_containers_Reviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/containers/Reviews */ "./src/components/containers/Reviews.tsx");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.tsx");
/* harmony import */ var _components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/containers/HostedBy */ "./src/components/containers/HostedBy.tsx");
/* harmony import */ var _containers_KeepInMind__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/KeepInMind */ "./src/pages/stays/containers/KeepInMind.tsx");
/* harmony import */ var _containers_MoreHomes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/MoreHomes */ "./src/pages/stays/containers/MoreHomes.tsx");
/* harmony import */ var _components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/containers/Characteristics */ "./src/components/containers/Characteristics.tsx");
/* harmony import */ var _functions_CheckInCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./functions/CheckInCard */ "./src/pages/stays/functions/CheckInCard.tsx");
/* harmony import */ var _components_presentational_StayDescription__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/presentational/StayDescription */ "./src/components/presentational/StayDescription.tsx");
/* harmony import */ var _containers_SleepingArrangements__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/SleepingArrangements */ "./src/pages/stays/containers/SleepingArrangements.tsx");
/* harmony import */ var _containers_ToDoNear__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./containers/ToDoNear */ "./src/pages/stays/containers/ToDoNear.tsx");
/* harmony import */ var _containers_MoreLocations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./containers/MoreLocations */ "./src/pages/stays/containers/MoreLocations.tsx");
/* harmony import */ var _containers_Amenities__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./containers/Amenities */ "./src/pages/stays/containers/Amenities.js");
/* harmony import */ var _containers_PlaceInfo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./containers/PlaceInfo */ "./src/pages/stays/containers/PlaceInfo.js");
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      length = _useState[0],
      setLength = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, loading ? __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Vacation Rentals, Homes, Experiences & Places") : data && __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, data.stay.name), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/high/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_6__["ExploreHeader"], {
    type: "stay",
    mode: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx("div", {
    className: "px-5 md:px-10 lg:max-w-6xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "w-full flex flex-col-reverse lg:flex-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_functions_MainInfo__WEBPACK_IMPORTED_MODULE_21__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
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
      lineNumber: 106
    },
    __self: this
  }))), __jsx("div", {
    className: "w-full lg:w-7/12 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_containers_PlaceInfo__WEBPACK_IMPORTED_MODULE_20__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(_components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_13__["Characteristics"], {
    host_is_superhost: data.stay.host_is_superhost,
    host_name: data.stay.host_name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), __jsx("div", {
    className: "border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    className: "my-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, data && __jsx(_components_presentational_StayDescription__WEBPACK_IMPORTED_MODULE_15__["StayDescription"], {
    description: data.stay.description,
    space: data.stay.space,
    access: data.stay.access,
    note: data.stay.notes,
    changeLength: function changeLength() {
      return setLength(!length);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), __jsx("div", {
    className: "my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("p", {
    className: "",
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Any questions for the host?")))), __jsx("div", {
    className: "mt-10 mb-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
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
      lineNumber: 149
    },
    __self: this
  }, "Contact host")))), __jsx(_containers_SleepingArrangements__WEBPACK_IMPORTED_MODULE_16__["SleepingArrangements"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), __jsx(_containers_Amenities__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })), __jsx(_functions_CheckInCard__WEBPACK_IMPORTED_MODULE_14__["CheckInCard"], {
    length: length,
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_components_containers_Reviews__WEBPACK_IMPORTED_MODULE_8__["Reviews"], {
    reviews_per_month: data.stay.reviews_per_month,
    number_of_reviews: data.stay.number_of_reviews,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
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
      lineNumber: 168
    },
    __self: this
  }), __jsx(_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_11__["KeepInMind"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), __jsx(_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_12__["MoreHomes"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), __jsx(_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_17__["ToDoNear"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), __jsx(_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_18__["MoreLocations"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }))), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_9__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
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

/***/ "./src/pages/stays/containers/KeepInMind.tsx":
/*!***************************************************!*\
  !*** ./src/pages/stays/containers/KeepInMind.tsx ***!
  \***************************************************/
/*! exports provided: KeepInMind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeepInMind", function() { return KeepInMind; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/stays/containers/KeepInMind.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

var KeepInMind = function KeepInMind() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "py-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-2xl text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Things to know")), __jsx("div", {
    className: "flex justify-start items-start flex-wrap w-full border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h3", {
    className: "text-gray-750 pb-2 ",
    style: {
      fontFamily: 'airbnb-bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "House Rules"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "flex item-center justify-start w-1/2 py-2 bg-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 384 384",
    style: {
      fill: '#484848'
    },
    className: "h-5 w-5",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("path", {
    d: "m343.59375 101.039062c-7.953125 3.847657-11.28125 13.417969-7.433594 21.367188 10.511719 21.714844 15.839844 45.121094 15.839844 69.59375 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c36.558594 0 70.902344 11.9375 99.328125 34.519531 6.894531 5.503907 16.976563 4.351563 22.480469-2.566406 5.503906-6.914063 4.351562-16.984375-2.570313-22.480469-33.652343-26.746094-76-41.472656-119.238281-41.472656-105.863281 0-192 86.136719-192 192s86.136719 192 192 192 192-86.136719 192-192c0-29.335938-6.40625-57.449219-19.039062-83.527344-3.839844-7.96875-13.441407-11.289062-21.367188-7.433594zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("path", {
    d: "m192 64c-8.832031 0-16 7.167969-16 16v112c0 8.832031 7.167969 16 16 16h80c8.832031 0 16-7.167969 16-16s-7.167969-16-16-16h-64v-96c0-8.832031-7.167969-16-16-16zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Check-in: 3:00 p.m.-10:00 p.m.")), __jsx("div", {
    className: "flex item-center justify-start w-1/2 py-2 bg-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 384 384",
    style: {
      fill: '#484848'
    },
    className: "h-5 w-5",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("path", {
    d: "m343.59375 101.039062c-7.953125 3.847657-11.28125 13.417969-7.433594 21.367188 10.511719 21.714844 15.839844 45.121094 15.839844 69.59375 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c36.558594 0 70.902344 11.9375 99.328125 34.519531 6.894531 5.503907 16.976563 4.351563 22.480469-2.566406 5.503906-6.914063 4.351562-16.984375-2.570313-22.480469-33.652343-26.746094-76-41.472656-119.238281-41.472656-105.863281 0-192 86.136719-192 192s86.136719 192 192 192 192-86.136719 192-192c0-29.335938-6.40625-57.449219-19.039062-83.527344-3.839844-7.96875-13.441407-11.289062-21.367188-7.433594zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("path", {
    d: "m192 64c-8.832031 0-16 7.167969-16 16v112c0 8.832031 7.167969 16 16 16h80c8.832031 0 16-7.167969 16-16s-7.167969-16-16-16h-64v-96c0-8.832031-7.167969-16-16-16zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Checkout: 11:00 a.m.")), __jsx("div", {
    className: "flex item-center justify-start w-1/2 py-2 bg-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: '#484848',
      marginLeft: 2
    },
    className: "h-5 w-5",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("path", {
    d: "m331 242c-29.021 0-55.931 9.206-77.967 24.849-7.349-33.545-27.97-63.113-57.033-80.693v-171.156c0-8.284-6.716-15-15-15h-60c-8.284 0-15 6.716-15 15v171.156c-36.731 22.219-60 63.58-60 107.926v202.918c0 8.284 6.716 15 15 15h180c8.284 0 15-6.716 15-15v-7.806c21.466 14.397 47.268 22.806 75 22.806 74.439 0 135-60.561 135-135s-60.561-135-135-135zm-255 89.99h127.722c-4.994 14.092-7.722 29.238-7.722 45.01s2.728 30.918 7.722 45h-127.722zm60-241.99h30v30h-30zm30-60v30h-30v-30zm-38.292 178.417c5.082-2.542 8.292-7.735 8.292-13.417v-45h30v45c0 5.682 3.21 10.875 8.292 13.417 30.412 15.206 50.996 48.747 51.676 83.875-2.526 3.126-4.918 6.363-7.162 9.708h-142.806v-7.918c0-35.775 20.78-70.202 51.708-85.665zm-51.708 273.583v-30.01h142.806c2.253 3.37 4.656 6.62 7.194 9.758v20.252zm255 0c-57.897 0-105-47.103-105-105s47.103-105 105-105 105 47.103 105 105-47.103 105-105 105z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("path", {
    d: "m384.033 323.967c-5.857-5.858-15.355-5.858-21.213 0l-31.82 31.82-31.82-31.82c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l31.82 31.82-31.82 31.82c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.859 21.213 0l31.82-31.82 31.82 31.82c5.857 5.858 15.355 5.859 21.213 0 5.858-5.858 5.858-15.355 0-21.213l-31.82-31.82 31.82-31.82c5.858-5.858 5.858-15.355 0-21.213z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "No parties or events")), __jsx("div", {
    className: "flex item-center justify-start w-1/2 py-2 bg-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      fill: '#484848'
    },
    className: "h-5 w-5",
    viewBox: "0 0 512 512",
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
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("path", {
    d: "M180.365,289.615c7.521-7.531,11.646-18.938,11.635-32.094c0-4.677-0.531-9.531-1.583-14.427 C184.26,214.438,162.198,192,140.177,192c-10.125,0-19.083,4.615-25.229,12.99c-5.427,7.385-8.292,17.125-8.281,28.156 c0,4.667,0.531,9.51,1.583,14.417v0.01c6.156,28.656,28.219,51.094,50.24,51.094 C166.885,298.667,174.448,295.531,180.365,289.615z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("path", {
    d: "M371.823,192c-22.021,0-44.083,22.438-50.24,51.094c-1.052,4.896-1.583,9.75-1.583,14.417 c-0.01,13.167,4.115,24.573,11.635,32.104c5.917,5.917,13.479,9.052,21.875,9.052c22.021,0,44.083-22.438,50.24-51.094v-0.01 c1.052-4.906,1.583-9.75,1.583-14.406c0.01-11.042-2.854-20.781-8.281-28.167C390.906,196.615,381.948,192,371.823,192z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("path", {
    d: "M350.76,161.99v-0.01c0.729-3.854,1.125-7.594,1.219-11.188c0.354-14.063-3.823-26.313-11.781-34.479 c-6.156-6.313-14.021-9.646-22.76-9.646c-22.302,0-44.063,22.552-49.531,51.354c-0.729,3.854-1.125,7.594-1.219,11.188 c-0.354,14.063,3.823,26.313,11.781,34.479c6.156,6.313,14.021,9.646,22.76,9.646C323.531,213.333,345.292,190.781,350.76,161.99 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("path", {
    d: "M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M256,469.333 c-117.635,0-213.333-95.698-213.333-213.333c0-51.151,18.125-98.126,48.249-134.918l128.119,128.118 c-9.776,9.96-14.715,22.969-18.19,32.57c-1.531,4.219-3.427,9.479-4.74,11.042c-4.365,5.26-9.729,10.135-15.417,15.292 c-14.531,13.177-31,28.115-31.354,52.479c-0.177,12.896,3.802,23.854,11.521,31.688c8.427,8.542,20.906,13.063,36.073,13.063 c17.073,0,27.823-5.677,36.458-10.24c7.396-3.906,13.229-6.99,22.604-6.99c9.385,0,15.229,3.083,22.625,6.99 c8.635,4.563,19.396,10.24,36.458,10.24c15.167,0,27.646-4.521,36.073-13.063c1.835-1.862,3.426-3.927,4.832-6.126l34.94,34.94 C354.126,451.208,307.151,469.333,256,469.333z M421.085,390.918L310.693,280.526c-5.811-16.014-15.572-40.298-44.879-44.879 l-32.142-32.142c7.854-8.167,11.992-20.328,11.641-34.276c-0.094-3.615-0.49-7.354-1.219-11.219 c-5.469-28.792-27.229-51.344-49.531-51.344c-8.74,0-16.604,3.333-22.76,9.646c-4.203,4.313-7.273,9.815-9.255,16.068 l-41.465-41.465C157.874,60.792,204.849,42.667,256,42.667c117.635,0,213.333,95.698,213.333,213.333 C469.333,307.151,451.208,354.126,421.085,390.918z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "No pets allowed"))), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("p", {
    className: "py-4",
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Show all"), __jsx("div", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: '#222222'
    },
    viewBox: "0 0 18 18",
    className: "h-3 w-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("path", {
    d: "m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }))))))), __jsx("div", {
    className: "w-full mt-6 lg:mt-0 lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("h3", {
    className: "text-gray-750 pb-2",
    style: {
      fontFamily: 'airbnb-bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Cancellation policy"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Free cancellation for 48 hours"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "After that, cancel up to 7 days before check-in and get a 50% refund, minus the service fee."), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx("p", {
    className: "py-4",
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Show all"), __jsx("div", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: '#222222'
    },
    viewBox: "0 0 18 18",
    className: "h-3 w-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("path", {
    d: "m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  })))))));
};

/***/ })

})
//# sourceMappingURL=[id].js.2d8f1a6013ac2b001a46.hot-update.js.map