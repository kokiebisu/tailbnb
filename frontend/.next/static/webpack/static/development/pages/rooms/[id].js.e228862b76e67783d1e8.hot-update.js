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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.js");
/* harmony import */ var _components_presentational_ImagePanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/presentational/ImagePanel */ "./src/components/presentational/ImagePanel.js");
/* harmony import */ var _components_presentational_HeaderCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/presentational/HeaderCard */ "./src/components/presentational/HeaderCard.js");
/* harmony import */ var _components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/wrapper/DetailSection */ "./src/components/wrapper/DetailSection.js");
/* harmony import */ var _components_containers_Reviews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/containers/Reviews */ "./src/components/containers/Reviews.js");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.js");
/* harmony import */ var _components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/containers/HostedBy */ "./src/components/containers/HostedBy.js");
/* harmony import */ var _components_containers_Neighborhood__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/containers/Neighborhood */ "./src/components/containers/Neighborhood.js");
/* harmony import */ var _components_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/containers/KeepInMind */ "./src/components/containers/KeepInMind.js");
/* harmony import */ var _components_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/containers/MoreHomes */ "./src/components/containers/MoreHomes.js");
/* harmony import */ var _components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/containers/Characteristics */ "./src/components/containers/Characteristics.js");
/* harmony import */ var _components_presentational_SleepingArrangmentsCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/presentational/SleepingArrangmentsCard */ "./src/components/presentational/SleepingArrangmentsCard.js");
/* harmony import */ var _components_presentational_Cancellations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/presentational/Cancellations */ "./src/components/presentational/Cancellations.js");
/* harmony import */ var _components_presentational_CheckInCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/presentational/CheckInCard */ "./src/components/presentational/CheckInCard.js");
/* harmony import */ var _components_wrapper_Section__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/wrapper/Section */ "./src/components/wrapper/Section.js");
/* harmony import */ var _components_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/containers/ToDoNear */ "./src/components/containers/ToDoNear.js");
/* harmony import */ var _components_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/containers/MoreLocations */ "./src/components/containers/MoreLocations.js");
/* harmony import */ var _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../public/img/high/staydetail1.jpg */ "./public/img/high/staydetail1.jpg");
/* harmony import */ var _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");
/* harmony import */ var _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../public/img/high/staydetail3.jpg */ "./public/img/high/staydetail3.jpg");
/* harmony import */ var _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../public/img/high/staydetail4.jpg */ "./public/img/high/staydetail4.jpg");
/* harmony import */ var _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../public/img/high/staydetail5.jpg */ "./public/img/high/staydetail5.jpg");
/* harmony import */ var _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../components/presentational/AmenityCard */ "./src/components/presentational/AmenityCard.js");



 // Loading


 // GraphQL

 // Components














 // Wrapper

 // Containers


 // Images







const GET_STAY = apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"]`
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
    },
    pollInterval: 5000
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Vacation Rentals, Homes, Experiences & Places") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, data.stay.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width "
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/high/favicon.ico"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "px-5 md:px-10 lg:max-w-6xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "py-5"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-3xl text-gray-850"
  }, "Radiant Apartment with Terrace in Roma Norte (1/4)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center justify-between"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      fill: '#E61E4D',
      marginBottom: 1
    },
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-3 w-3",
    viewBox: "0 0 37.286 37.287"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pl-1 text-gray-650 text-sm"
  }, "4.81 (387)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " . "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "svg here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pl-1 text-gray-650 text-sm"
  }, "Superhost"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " . "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: ""
  }, "Nexico City, Federal District, Mexico")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "svg here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Share")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "svg here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Save"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_ImagePanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    img1: _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_24___default.a,
    img2: _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_25___default.a,
    img3: _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_26___default.a,
    img4: _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_27___default.a,
    img5: _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_28___default.a,
    loading: loading
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-7/12 "
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center justify-between border-b border-gray-200 mt-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "py-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-4 flex items-start justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-col "
  }, loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    width: 60
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-2xl text-gray-850 font-semibold leading-none"
  }, data.stay.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pb-3 flex justify-start items-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    width: 60
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9 guests")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    width: 60
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "4 bedrooms")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    width: 60
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9 beds")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    width: 60
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "3 baths")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-col justify-center items-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex justify-center w-full"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "h-14 w-14 rounded-full",
    src: _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_24___default.a
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-6 border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_17__["default"], null)), loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex justify-center items-center w-full py-20"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_5___default.a, {
    size: 10,
    color: '#008489'
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
    className: "",
    style: {
      fontFamily: 'airbnb-medium'
    }
  }, "Any questions for the host?")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-10 mb-16"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "py-3 px-6 border border-black rounded-lg",
    style: {
      fontFamily: 'airbnb-medium'
    },
    href: ""
  }, "Contact host")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Sleeping arrangements"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start my-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4 w-1/3 border border-gray-300 rounded-xl flex justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_SleepingArrangmentsCard__WEBPACK_IMPORTED_MODULE_18__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4 w-1/3 border border-gray-300 rounded-xl"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_SleepingArrangmentsCard__WEBPACK_IMPORTED_MODULE_18__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Amenities"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_29__["default"], {
    type: "wifi",
    title: "Wifi"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_29__["default"], {
    type: "laptop",
    title: "Laptop-friendly workspace"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_29__["default"], {
    type: "kitchen",
    title: "Kitchen"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_29__["default"], {
    type: "iron",
    title: "Iron"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-10 mb-8"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "py-3 px-6 rounded-xl border border-black "
  }, "Show all 32 amenities"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-5/12 flex justify-center mt-10"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-25/31 flex flex-col justify-start items-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full py-5 text-2xl text-gray-850"
  }, "Add dates for prices"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "w-full bg-pink-850 text-white rounded-lg py-3"
  }, "Check availability"))), loading ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_Reviews__WEBPACK_IMPORTED_MODULE_11__["default"], {
    ratings: data.stay.ratings
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "More places to stay"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_16__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Things to do nearby"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_22__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Explore other options in and around Penafiel"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_23__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], null));
});

/***/ })

})
//# sourceMappingURL=[id].js.e228862b76e67783d1e8.hot-update.js.map