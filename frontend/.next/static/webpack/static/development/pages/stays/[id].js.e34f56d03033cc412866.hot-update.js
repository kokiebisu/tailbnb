webpackHotUpdate("static/development/pages/stays/[id].js",{

/***/ "./public/img/high/shield.png":
false,

/***/ "./src/components/stays/functions/HostedBy.tsx":
false,

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





// Next
// import { NextPage } from 'next';
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
      lineNumber: 90,
      columnNumber: 7
    }
  }, loading ? __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, "Vacation Rentals, Homes, Experiences & Places") : data && __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }, data.stay.name), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/high/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  })), __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_6__["ExploreHeader"], {
    white: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "px-5 md:px-10 lg:max-w-6xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full flex flex-col-reverse lg:flex-col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_components_stays_functions_MainInfo__WEBPACK_IMPORTED_MODULE_19__["MainInfo"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 110,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "w-full lg:w-7/12 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_components_stays_containers_PlaceInfo__WEBPACK_IMPORTED_MODULE_12__["PlaceInfo"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }), __jsx(_components_stays_containers_Characteristics__WEBPACK_IMPORTED_MODULE_16__["Characteristics"], {
    host_is_superhost: data.stay.host_is_superhost,
    host_name: data.stay.host_name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  })), data && __jsx(_components_stays_containers_StayInfo__WEBPACK_IMPORTED_MODULE_13__["StayInfo"], {
    data: data,
    setLength: changeLength,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 20
    }
  }), __jsx(_components_stays_containers_SleepingArrangements__WEBPACK_IMPORTED_MODULE_17__["SleepingArrangements"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }), __jsx(_components_stays_containers_Amenities__WEBPACK_IMPORTED_MODULE_11__["Amenities"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  })), length ? __jsx(_components_stays_functions_CheckInCard__WEBPACK_IMPORTED_MODULE_20__["CheckInCard"], {
    length: length,
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }) : __jsx(_components_stays_functions_CheckInCard__WEBPACK_IMPORTED_MODULE_20__["CheckInCard"], {
    length: length,
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }), data && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_components_stays_containers_Reviews__WEBPACK_IMPORTED_MODULE_8__["Reviews"], {
    reviews_per_month: data.stay.reviews_per_month,
    number_of_reviews: data.stay.number_of_reviews,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }), __jsx(_components_stays_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_15__["KeepInMind"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }), __jsx(_components_stays_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_14__["MoreHomes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }), __jsx(_components_stays_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_9__["ToDoNear"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }), __jsx(_components_stays_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_10__["MoreLocations"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }))), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_7__["NewFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (id);

/***/ })

})
//# sourceMappingURL=[id].js.e34f56d03033cc412866.hot-update.js.map