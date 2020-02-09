webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/Stay.js":
/*!*******************************************!*\
  !*** ./src/components/containers/Stay.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _cards_StayCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/StayCard */ "./src/components/cards/StayCard.js");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.js");
/* harmony import */ var _public_img_high_stay1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/img/high/stay1.jpg */ "./public/img/high/stay1.jpg");
/* harmony import */ var _public_img_high_stay1_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay1_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_img_high_stay2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/img/high/stay2.jpg */ "./public/img/high/stay2.jpg");
/* harmony import */ var _public_img_high_stay2_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay2_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_img_high_stay3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/img/high/stay3.jpg */ "./public/img/high/stay3.jpg");
/* harmony import */ var _public_img_high_stay3_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay3_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_high_stay4_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/img/high/stay4.jpg */ "./public/img/high/stay4.jpg");
/* harmony import */ var _public_img_high_stay4_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay4_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_img_high_stay5_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/img/high/stay5.jpg */ "./public/img/high/stay5.jpg");
/* harmony import */ var _public_img_high_stay5_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay5_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_img_high_stay6_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/img/high/stay6.jpg */ "./public/img/high/stay6.jpg");
/* harmony import */ var _public_img_high_stay6_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay6_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_img_high_stay7_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/img/high/stay7.jpg */ "./public/img/high/stay7.jpg");
/* harmony import */ var _public_img_high_stay7_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay7_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_img_high_stay8_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../public/img/high/stay8.jpg */ "./public/img/high/stay8.jpg");
/* harmony import */ var _public_img_high_stay8_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_stay8_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_img_low_stay1_low_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../public/img/low/stay1-low.jpg */ "./public/img/low/stay1-low.jpg");
/* harmony import */ var _public_img_low_stay1_low_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay1_low_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_img_low_stay2_low_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../public/img/low/stay2-low.jpg */ "./public/img/low/stay2-low.jpg");
/* harmony import */ var _public_img_low_stay2_low_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay2_low_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_img_low_stay3_low_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../public/img/low/stay3-low.jpg */ "./public/img/low/stay3-low.jpg");
/* harmony import */ var _public_img_low_stay3_low_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay3_low_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_img_low_stay4_low_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../public/img/low/stay4-low.jpg */ "./public/img/low/stay4-low.jpg");
/* harmony import */ var _public_img_low_stay4_low_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay4_low_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _public_img_low_stay5_low_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../public/img/low/stay5-low.jpg */ "./public/img/low/stay5-low.jpg");
/* harmony import */ var _public_img_low_stay5_low_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay5_low_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _public_img_low_stay6_low_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../public/img/low/stay6-low.jpg */ "./public/img/low/stay6-low.jpg");
/* harmony import */ var _public_img_low_stay6_low_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay6_low_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _public_img_low_stay7_low_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../public/img/low/stay7-low.jpg */ "./public/img/low/stay7-low.jpg");
/* harmony import */ var _public_img_low_stay7_low_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay7_low_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _public_img_low_stay8_low_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../public/img/low/stay8-low.jpg */ "./public/img/low/stay8-low.jpg");
/* harmony import */ var _public_img_low_stay8_low_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_public_img_low_stay8_low_jpg__WEBPACK_IMPORTED_MODULE_20__);


 // Component


 // Images
// High Resolution








 // Low Resolution









const staydata = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    stays {
      hostType
      location
      title
      price
      ratings
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(staydata);
  console.log(data); // const stays = [
  //   {
  //     type: 'normal',
  //     img: stay1,
  //     imglow: stay1low,
  //     location: 'Sol Madrid',
  //     title: 'Private Studio in Sol, Madrid',
  //     price: 91
  //   },
  //   {
  //     type: 'superhost',
  //     img: stay2,
  //     imglow: stay2low,
  //     location: 'Makawao',
  //     title: 'Adorable Garden Gingerbread',
  //     price: 257
  //   },
  //   {
  //     type: 'superhost',
  //     img: stay3,
  //     imglow: stay3low,
  //     location: 'Roma Norte',
  //     title: 'Radiant Apartment with Terrace in...',
  //     price: '104'
  //   },
  //   {
  //     type: 'superhost',
  //     img: stay4,
  //     imglow: stay4low,
  //     location: 'Portici',
  //     title: 'Villa San Gennariello',
  //     price: 87
  //   },
  //   {
  //     type: 'plus',
  //     img: stay5,
  //     imglow: stay5low,
  //     location: 'Old Town',
  //     title: 'Classical Apartment on the Royal...',
  //     price: 206
  //   },
  //   {
  //     type: 'normal',
  //     img: stay6,
  //     imglow: stay6low,
  //     location: 'Porto',
  //     title: 'PORTA33 | PORTO PENTHOUSE',
  //     price: 126
  //   },
  //   {
  //     type: 'superhost',
  //     img: stay7,
  //     imglow: stay7low,
  //     location: 'Krakow',
  //     title: 'Amazing and Extremely Central Flat',
  //     price: 31
  //   },
  //   {
  //     type: 'superhost',
  //     img: stay8,
  //     imglow: stay8low,
  //     location: 'Tricase',
  //     title: 'La Salentina, sea, nature & relax',
  //     price: 68
  //   }
  // ];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-start justify-start w-full"
  }, data.stays.map(({
    id,
    hostType,
    location,
    title,
    cost,
    ratings
  }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-1/2 lg:w-1/3 xl:w-1/4 pb-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_StayCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: id,
      hostType: hostType,
      img: _public_img_high_stay1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
      imglow: _public_img_low_stay1_low_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
      location: location,
      title: title,
      cost: cost,
      ratings: ratings
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowAll__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Show(2000+)"
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.3559fcba7e55b4fed8dc.hot-update.js.map