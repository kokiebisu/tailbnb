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
    className: "h-4 w-4",
    viewBox: "-19 -22 605.33577 605",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "m554.371094 232.71875-253.550782-215.941406c-9.753906-8.363282-24.140624-8.363282-33.886718 0l-253.550782 215.949218c-15.96875 13.644532-17.921874 37.625-4.375 53.675782l.117188.136718c13.679688 15.996094 37.730469 17.882813 53.738281 4.21875l191.058594-163.113281c17.21875-14.816406 42.683594-14.816406 59.898437 0l191.0625 163.113281.097657.082032c16.070312 13.367187 39.90625 11.304687 53.445312-4.625 13.535157-15.925782 11.730469-39.785156-4.054687-53.488282zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "m342.203125 302.378906c-16.324219 0-34.464844 6.910156-52.464844 19.972656-3.539062 2.566407-8.339843 2.539063-11.847656-.078124-17.996094-13.429688-36.210937-20.527344-52.671875-20.527344-28.523438 0-50.027344 19.964844-56.121094 52.101562-9.644531 50.289063 22.121094 117.472656 114.765625 154.441406 66.847657-27.273437 128.140625-85.476562 114.792969-154.363281-6.429688-31.800781-28.054688-51.546875-56.453125-51.546875zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "m437.59375-.0898438c-17.253906.0195313-31.230469 13.9999998-31.246094 31.2499998v49.253906l62.488282 53.238282v-102.492188c-.015626-17.25-13.992188-31.2304685-31.242188-31.2499998zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "m491.875 305.960938-191.078125-163.109376c-9.773437-8.394531-24.214844-8.394531-33.984375 0l-191.160156 163.109376c-1.308594 1.113281-2.976563 2.167968-4.226563 3.152343v200.992188c0 27.6875 22.917969 49.949219 50.613281 49.949219h323.675782c27.6875 0 50.613281-22.261719 50.613281-49.949219v-201.007813c-1.25-.9375-2.8125-1.925781-4.0625-2.980468zm-201.082031 221.097656c-.199219.085937-.394531.15625-.59375.222656-4.082031 1.527344-8.578125 1.527344-12.660157 0-.175781-.058594-.355468-.125-.527343-.191406-103.679688-41.144532-138.769531-118.539063-127.558594-176.988282 7.875-41.511718 37.621094-68.351562 75.765625-68.351562 19.195312 0 38.925781 6.824219 58.738281 20.292969 19.558594-12.882813 39.578125-19.660157 58.246094-19.660157 37.917969 0 67.773437 26.546876 76.058594 67.628907l.011719.066406c11.230468 57.835937-23.835938 134.996094-127.480469 176.980469zm0 0"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Entire home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You'll have the house to yourself."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "svg here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Entire home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You'll have the house to yourself."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "svg here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Entire home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You'll have the house to yourself."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "svg here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Entire home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You'll have the house to yourself."))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500"
  }, "what")));
});

/***/ })

})
//# sourceMappingURL=[id].js.f55d8d530e12b06a581e.hot-update.js.map