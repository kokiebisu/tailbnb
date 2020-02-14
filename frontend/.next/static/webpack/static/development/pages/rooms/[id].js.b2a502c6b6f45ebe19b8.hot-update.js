webpackHotUpdate("static/development/pages/rooms/[id].js",{

/***/ "./src/pages/rooms/[id].js":
/*!*********************************!*\
  !*** ./src/pages/rooms/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.js");
/* harmony import */ var _components_presentational_ImagePanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/presentational/ImagePanel */ "./src/components/presentational/ImagePanel.js");
/* harmony import */ var _components_presentational_HeaderCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/presentational/HeaderCard */ "./src/components/presentational/HeaderCard.js");
/* harmony import */ var _components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/wrapper/DetailSection */ "./src/components/wrapper/DetailSection.js");
/* harmony import */ var _components_containers_Reviews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/containers/Reviews */ "./src/components/containers/Reviews.js");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.js");
/* harmony import */ var _components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/containers/HostedBy */ "./src/components/containers/HostedBy.js");
/* harmony import */ var _components_containers_Neighborhood__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/containers/Neighborhood */ "./src/components/containers/Neighborhood.js");
/* harmony import */ var _components_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/containers/KeepInMind */ "./src/components/containers/KeepInMind.js");
/* harmony import */ var _components_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/containers/MoreHomes */ "./src/components/containers/MoreHomes.js");
/* harmony import */ var _components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/containers/Characteristics */ "./src/components/containers/Characteristics.js");
/* harmony import */ var _components_presentational_SleepingArrangmentsCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/presentational/SleepingArrangmentsCard */ "./src/components/presentational/SleepingArrangmentsCard.js");
/* harmony import */ var _components_presentational_Cancellations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/presentational/Cancellations */ "./src/components/presentational/Cancellations.js");
/* harmony import */ var _components_presentational_CheckInCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/presentational/CheckInCard */ "./src/components/presentational/CheckInCard.js");
/* harmony import */ var _components_wrapper_Section__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/wrapper/Section */ "./src/components/wrapper/Section.js");
/* harmony import */ var _components_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/containers/ToDoNear */ "./src/components/containers/ToDoNear.js");
/* harmony import */ var _components_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/containers/MoreLocations */ "./src/components/containers/MoreLocations.js");
/* harmony import */ var _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../public/img/high/staydetail1.jpg */ "./public/img/high/staydetail1.jpg");
/* harmony import */ var _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");
/* harmony import */ var _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../public/img/high/staydetail3.jpg */ "./public/img/high/staydetail3.jpg");
/* harmony import */ var _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../public/img/high/staydetail4.jpg */ "./public/img/high/staydetail4.jpg");
/* harmony import */ var _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../public/img/high/staydetail5.jpg */ "./public/img/high/staydetail5.jpg");
/* harmony import */ var _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../components/presentational/AmenityCard */ "./src/components/presentational/AmenityCard.js");





 // Components














 // Wrapper

 // Containers


 // Images







const GET_STAY = apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  query Stay($id: ID!) {
    stay(where: { id: $id }) {
      title
      location
      ratings
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_STAY, {
    variables: {
      id: router.query.id
    }
  });
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setSkeleton = async seconds => {
    await sleep(seconds);
    setLoaded(true);
  };

  setSkeleton(10000);
  if (loading) return 'loading...';
  if (error) return 'error...';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_ImagePanel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    img1: _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
    img2: _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_24___default.a,
    img3: _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_25___default.a,
    img4: _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_26___default.a,
    img5: _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_27___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "px-5 md:px-10 lg:max-w-4xl xl:max-w-5xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-7/12 "
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-between border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, loaded ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-3xl text-gray-750 font-semibold leading-none"
  }, data.stay.title) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    height: 30
  }), loaded ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 py-3"
  }, data.stay.location) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    width: 80
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pb-3 flex justify-start items-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9 guests") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    width: 60
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "4 bedrooms") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    width: 60
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9 beds") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    width: 60
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "3 baths") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    width: 60
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-col justify-center items-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex justify-center w-full"
  }, loaded ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "h-16 w-16 rounded-full",
    src: _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_23___default.a
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    circle: true,
    width: 65,
    height: 65
  })), loaded ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "mt-2 text-gray-650 text-center text-sm leading-snug"
  }, "Maria Henriqueta") : null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-6 border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_16__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-8"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750"
  }, "We invite you to come and visit our beautiful countryside hourse on the shores of the Douro river. You will have a full countryside experience with our restored rustic ouse, our farm animals, a salt water 12 meter pool and a unique view for the unforgettable landscape of the Douro river."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-5"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-green-850 hover:border-green-850 border-b text-green-850 border-transparent",
    style: {
      fontFamily: 'airbnb-medium'
    }
  }, "Read more about the space"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ml-3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      fill: '#008489'
    },
    viewBox: "0 0 18 18",
    className: "h-2 w-2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
  })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "hover:border-green-850 border-b text-green-850 border-transparent",
    style: {
      fontFamily: 'airbnb-medium'
    },
    href: ""
  }, "Contact host")))), loaded ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Amenities"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_28__["default"], {
    type: "wifi",
    title: "Wifi"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_28__["default"], {
    type: "laptop",
    title: "Laptop-friendly workspace"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_28__["default"], {
    type: "kitchen",
    title: "Kitchen"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_28__["default"], {
    type: "iron",
    title: "Iron"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-xs text-gray-750 pt-6 pb-3"
  }, "The host hasn't reported smoke or carbon monoxide detectors on the property"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "hover:border-green-850 border-b text-green-850 border-transparent"
  }, "Show all 32 amenities")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Sleeping arrangements"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-between my-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pr-10 pl-2 border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_SleepingArrangmentsCard__WEBPACK_IMPORTED_MODULE_17__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pr-10 pl-2 border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_SleepingArrangmentsCard__WEBPACK_IMPORTED_MODULE_17__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pr-10 pl-2 border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_SleepingArrangmentsCard__WEBPACK_IMPORTED_MODULE_17__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Availability"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Enter your trip dates for accurate pricing and availability"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full h-64 bg-blue-500"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_Reviews__WEBPACK_IMPORTED_MODULE_10__["default"], {
    ratings: data.stay.ratings
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_Neighborhood__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_Cancellations__WEBPACK_IMPORTED_MODULE_18__["default"], null)) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex justify-center items-center w-full"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_5___default.a, {
    size: 50 //size={"150px"} this also works
    ,
    color: '#123abc'
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ml-5 w-4/12 flex flex-col justify-start items-end"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_CheckInCard__WEBPACK_IMPORTED_MODULE_19__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_20__["default"], {
    title: "More homes you may like"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_15__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_20__["default"], {
    title: "Things to do near this home"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_21__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_20__["default"], {
    title: "Explore other options in and around Penafiel"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_22__["default"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], null));
});

/***/ })

})
//# sourceMappingURL=[id].js.b2a502c6b6f45ebe19b8.hot-update.js.map