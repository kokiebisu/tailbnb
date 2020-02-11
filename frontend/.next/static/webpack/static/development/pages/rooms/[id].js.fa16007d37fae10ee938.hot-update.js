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
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.js");
/* harmony import */ var _components_cards_ImagePanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cards/ImagePanel */ "./src/components/cards/ImagePanel.js");
/* harmony import */ var _components_cards_HeaderCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cards/HeaderCard */ "./src/components/cards/HeaderCard.js");
/* harmony import */ var _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/img/high/staydetail1.jpg */ "./public/img/high/staydetail1.jpg");
/* harmony import */ var _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");
/* harmony import */ var _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/img/high/staydetail3.jpg */ "./public/img/high/staydetail3.jpg");
/* harmony import */ var _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/img/high/staydetail4.jpg */ "./public/img/high/staydetail4.jpg");
/* harmony import */ var _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/img/high/staydetail5.jpg */ "./public/img/high/staydetail5.jpg");
/* harmony import */ var _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_11__);



 // Components



 // Images






const staydata = apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  query Stay($id: ID!) {
    stay(where: { id: $id }) {
      id
      title
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(staydata, {
    variables: {
      id: router.query.id
    }
  });
  if (loading) return 'loading...';
  if (error) return 'error...';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_cards_ImagePanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img1: _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    img2: _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    img3: _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    img4: _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    img5: _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_11___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "px-5 md:px-10 lg:max-w-5.5xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-4/6 "
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-between border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "text-3xl font-semibold"
  }, "Douro Villa with swimming pool, Penafiel, Portugal"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Penafiel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex justify-start items-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9 guests")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9 guests")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9 guests")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9 guests")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "h-12 w-12 rounded-full",
    src: _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_7___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Maria Henriqueta"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    viewBox: "0 0 512.001 512.001"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M503.402,228.885L273.684,19.567c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.886 c-8.077,7.36-10.745,18.7-6.799,28.889c3.947,10.189,13.557,16.772,24.484,16.772h36.69v209.721 c0,8.315,6.742,15.057,15.057,15.057h125.914c8.315,0,15.057-6.741,15.057-15.057V356.932h74.002v127.337 c0,8.315,6.742,15.057,15.057,15.057h125.908c8.315,0,15.057-6.741,15.057-15.057V274.547h36.697 c10.926,0,20.537-6.584,24.484-16.772C514.147,247.585,511.479,236.246,503.402,228.885z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M445.092,42.73H343.973l116.176,105.636v-90.58C460.149,49.471,453.408,42.73,445.092,42.73z"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Entire home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You'll have the house to yourself."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    viewBox: "0 0 512 512"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M407.335,74.217l-29.654-44.481C365.295,11.159,344.445,0,322.116,0H207.595h-50.087c-9.22,0-16.696,7.475-16.696,16.696 v33.391c0,9.22,7.475,16.696,16.696,16.696H190.9v16.696c0,17.065-6.653,33.12-18.717,45.195l-9.783,9.783 c-6.521,6.521-6.521,17.087,0,23.609c3.261,3.261,7.533,4.892,11.804,4.892s8.544-1.631,11.804-4.892l9.794-9.783 c14.369-14.387,23.663-32.48,27.04-52.108h1.448c18.442,0,33.391,14.949,33.391,33.391v33.391h-5.564 c-27.619,0-50.087,22.468-50.087,50.087v66.783c0,9.206-7.49,16.696-16.696,16.696h-33.391c-27.619,0-50.087,22.468-50.087,50.087 v16.696v94.609c0,27.619,22.468,50.087,50.087,50.087h200.348c27.619,0,50.087-22.468,50.087-50.087v-94.609V217.043 c0-27.619-22.468-50.087-50.087-50.087h-27.826v-33.391c0-18.442,14.949-33.391,33.391-33.391h35.587 c6.163,0,11.804-3.38,14.718-8.826C411.074,85.912,410.759,79.348,407.335,74.217z M268.813,367.304H135.248v-16.696 c0-9.206,7.49-16.696,16.696-16.696h33.391c27.619,0,50.087-22.468,50.087-50.087v-66.783c0-9.206,7.49-16.696,16.696-16.696 h16.696V367.304z M352.291,200.348c9.206,0,16.696,7.49,16.696,16.696v150.261h-66.783V200.348H352.291z"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Entire home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You'll have the house to yourself."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "svg here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Entire home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You'll have the house to yourself."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "svg here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Entire home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You'll have the house to yourself."))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500"
  }, "what")));
});

/***/ })

})
//# sourceMappingURL=[id].js.fa16007d37fae10ee938.hot-update.js.map