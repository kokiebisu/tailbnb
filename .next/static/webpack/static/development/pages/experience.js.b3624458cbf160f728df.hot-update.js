webpackHotUpdate("static/development/pages/experience.js",{

/***/ "./src/components/containers/Hosts.tsx":
/*!*********************************************!*\
  !*** ./src/components/containers/Hosts.tsx ***!
  \*********************************************/
/*! exports provided: Hosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hosts", function() { return Hosts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_experiences_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/experiences.json */ "./src/data/experiences.json");
var _data_experiences_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/experiences.json */ "./src/data/experiences.json", 1);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_HostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/HostCard */ "./src/components/functions/HostCard.tsx");
/* harmony import */ var _wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wrapper/ExploreSection */ "./src/components/wrapper/ExploreSection.tsx");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/src/components/containers/Hosts.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


 // Components

 // Wrapper




var Hosts = function Hosts() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  setInterval(function () {
    return setLoading(false);
  }, 1000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_wrapper_ExploreSection__WEBPACK_IMPORTED_MODULE_4__["ExploreSection"], {
    title: "Meet hosts around the world",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 10,
    color: '#008489',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  })) : __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, _data_experiences_json__WEBPACK_IMPORTED_MODULE_1__ && _data_experiences_json__WEBPACK_IMPORTED_MODULE_1__.experiences.map(function (_ref) {
    var id = _ref.id,
        title = _ref.title,
        location = _ref.location,
        country = _ref.country,
        img = _ref.img;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: cuid__WEBPACK_IMPORTED_MODULE_5___default()(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "md:w-1/4 sm:w-1/3 w-1/2 pb-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }, __jsx(_functions_HostCard__WEBPACK_IMPORTED_MODULE_3__["HostCard"], {
      key: id,
      title: title,
      img: img,
      location: location,
      country: country,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 23
      }
    })));
  }))));
};

/***/ }),

/***/ "./src/data/experiences.json":
/*!***********************************!*\
  !*** ./src/data/experiences.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Luca & Lorenzo, cooking in Chianti hills\",\"cost\":187,\"ratings\":5,\"reviews\":1789,\"country\":\"Italy\",\"img\":\"https://a0.muscache.com/im/pictures/22c51ce6-fd30-42d7-8ed7-025d93e58a2b.jpg?aki_policy=poster\",\"location\":\"Florence\"},{\"title\":\"Truffle experience Rome\",\"cost\":150,\"ratings\":4.99,\"reviews\":650,\"country\":\"Italy\",\"img\":\"https://a0.muscache.com/im/pictures/e1d37f1a-0edc-4a31-a518-f7da8b2ea630.jpg?aki_policy=poster\",\"location\":\"Rome\"},{\"title\":\"Learn to Row as a Venetian\",\"cost\":74,\"ratings\":4.98,\"reviews\":932,\"country\":\"Italy\",\"img\":\"https://a0.muscache.com/im/pictures/5af8351e-a0b6-4783-ae8b-12a2a7ac7998.jpg?aki_policy=poster\",\"location\":\"Venetia\"},{\"title\":\"Afro-Cuban Culture Guide\",\"cost\":109,\"ratings\":4.96,\"reviews\":637,\"country\":\"Cuba\",\"img\":\"https://a0.muscache.com/im/pictures/c0ed26f6-46ec-43b6-870e-ebb535a44db2.jpg?aki_policy=poster\",\"location\":\"\"},{\"title\":\"Lisbon's best flavors\",\"cost\":91,\"ratings\":4.94,\"reviews\":3779,\"country\":\"Portugal\",\"img\":\"https://a0.muscache.com/im/pictures/c9f2f8b5-1743-47df-87ba-092418d4f6ee.jpg?aki_policy=poster\",\"location\":\"\"},{\"title\":\"Hunt for truffles in the Tuscan woods\",\"cost\":165,\"ratings\":4.97,\"reviews\":545,\"country\":\"Italy\",\"img\":\"https://a0.muscache.com/im/pictures/80e62a40-4a98-4067-859e-04feaa668913.jpg?aki_policy=poster\",\"location\":\"\"},{\"title\":\"Secret Alleys Gastown Photoshoot Tour\",\"cost\":40,\"ratings\":4.99,\"reviews\":87,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/1a254cc2-1652-4a4b-b814-d9b9bc1f2529.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Photo Shoot\",\"available\":\"Today\"},{\"title\":\"Slay Dragons with a Master Storyteller\",\"cost\":42,\"ratings\":4.9,\"reviews\":30,\"country\":\"Canda\",\"img\":\"https://a0.muscache.com/im/pictures/b9abf15e-db30-4ede-8fe6-162a3b0807f3.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Game Night\",\"available\":\"Today\"},{\"title\":\"Street Art & Craft Beer Crawl\",\"cost\":49,\"ratings\":4.9,\"reviews\":136,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/86d463fa-efdb-4046-bfd3-c93161032dcd.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Art Walk\",\"available\":\"Today\"},{\"title\":\"Rainforest of the Capilano Canyon\",\"cost\":52,\"ratings\":4.97,\"reviews\":29,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/9ccc99d7-be1e-495c-9726-1f2fc209d0c3.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Guided Hike\",\"available\":\"Today\"},{\"title\":\"Granville Island Food & History Tour\",\"cost\":68,\"ratings\":4.99,\"reviews\":99,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/92edc6d3-4499-4bde-a8de-39d966c2273e.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Food Walk\",\"available\":\"Today\"},{\"title\":\"Private Portrait Tour at Night\",\"cost\":159,\"ratings\":5,\"reviews\":6,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1263078-media_library/original/ba408aba-857d-41c1-b1f6-daf6c55093c8.jpeg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Photo Shoot\",\"available\":\"Today\"},{\"title\":\"Escape to rugged waterfalls & canyons\",\"cost\":56,\"ratings\":4.97,\"reviews\":509,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/030784e3-6e4e-4f9b-b9fe-d1b163ca4c33.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Guided Hike\",\"available\":\"Tomorrow\"},{\"title\":\"Beautiful Private Photo Tour & Guide\",\"cost\":88,\"ratings\":5,\"reviews\":36,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1362544-media_library/original/eda70a9e-a310-4b0e-906d-1688e3ee5ebc.jpeg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Photo Walk\",\"available\":\"Tomorrow\"},{\"title\":\"Chinatown History & Dumpling Masterclass\",\"cost\":127,\"ratings\":4.86,\"reviews\":176,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/704378ce-b629-4dde-90c5-b134dd5c77e0.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Cooking Class\",\"available\":\"Tomorrow\"},{\"title\":\"The Grand Tour - Vancouver by Bike\",\"cost\":98,\"ratings\":5,\"reviews\":23,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/e21570a7-c2e5-4a17-b2e6-92a70d8cf8e0.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Bike Ride\",\"available\":\"Tomorrow\"},{\"title\":\"Rooftops of Downtown Photoshoot Tour\",\"cost\":43,\"ratings\":4.98,\"reviews\":44,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/c906a7be-390a-431a-9c8e-37b54722a545.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Photo Shoot\",\"available\":\"Tomorrow\"},{\"title\":\"Sea to Sky Waterfalls & Whistler\",\"cost\":200,\"ratings\":4.94,\"reviews\":503,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/0e696ae3-99a1-44f9-bad9-c4915569fbad.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Day Trip\",\"available\":\"Tomorrow\"},{\"title\":\"Your own private spa circuit\",\"cost\":208,\"ratings\":4.97,\"reviews\":272,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/de2cf862-1a71-40d9-8a81-5edcac18c442.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Spa Visit\",\"available\":\"Next Week\"},{\"title\":\"Explore the Lost Souls of Gastown\",\"cost\":32,\"ratings\":4.88,\"reviews\":74,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/0e4c0954-d70e-4ce6-b53c-cb811398a0f4.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"History Walk\",\"available\":\"Next Week\"},{\"title\":\"Whistler Blackcomb with Moe\",\"cost\":125,\"ratings\":5,\"reviews\":10,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1359871-media_library/original/5f823c71-3e86-4cae-8f6d-af7f4a2a79f3.jpeg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Car Ride\",\"available\":\"Next Week\"},{\"title\":\"English Bay boat cruise\",\"cost\":125,\"ratings\":4.95,\"reviews\":21,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/0080d7bc-14af-4539-af13-9a68b28aa07d.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Boat Ride\",\"available\":\"Next Week\"},{\"title\":\"Ski or Snowboard The Local Mountains\",\"cost\":130,\"ratings\":4.89,\"reviews\":85,\"country\":\"Canda\",\"img\":\"https://a0.muscache.com/im/pictures/e1a6d78a-096d-49d5-924a-415abe773bad.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Outdoor Sports\",\"available\":\"Today\"},{\"title\":\"Taste of Vancouver on Granville Island\",\"cost\":99,\"ratings\":4.97,\"reviews\":253,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/ae261b6b-6935-43a4-94d0-2a3ed6b0b66f.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Food Tasting\",\"available\":\"Next Week\"},{\"title\":\"The Gastown Foodie Experience\",\"cost\":85,\"ratings\":4.95,\"reviews\":149,\"country\":\"Canada\",\"img\":\"https://a0.muscache.com/im/pictures/7eb4534e-22b9-44bc-8fc4-5d42d12f4cf9.jpg?aki_policy=poster\",\"location\":\"Vancouver\",\"category\":\"Food Walk\",\"available\":\"Next Week\"},{\"title\":\"See 30+ Top New York Sights. Fun Guide!\",\"cost\":50,\"ratings\":4.94,\"reviews\":664,\"country\":\"United States\",\"img\":\"https://a0.muscache.com/im/pictures/37c30804-6c99-4e84-8a46-51e4673bc3f8.jpg?aki_policy=poster\",\"location\":\"New York\",\"category\":\"History Walk\",\"available\":\"Tomorrow\"},{\"title\":\"Boxing with Fire\",\"cost\":110,\"ratings\":5,\"reviews\":151,\"country\":\"United States\",\"img\":\"https://a0.muscache.com/im/pictures/3478257c-c27f-4041-910f-b653a37df184.jpg?aki_policy=poster\",\"location\":\"New York\",\"category\":\"Featured\",\"available\":\"Today\"},{\"title\":\"Retired NYPD Gangster Crime & Food Walk\",\"cost\":78,\"ratings\":4.88,\"reviews\":1685,\"country\":\"United States\",\"img\":\"https://a0.muscache.com/im/pictures/46d44d43-fd92-4745-a188-8129cee610e4.jpg?aki_policy=poster\",\"location\":\"New York\",\"category\":\"History Walk\",\"available\":\"Next Week\"},{\"title\":\"Harlem Jazz Crawl\",\"cost\":75,\"ratings\":4.85,\"reviews\":877,\"country\":\"United States\",\"img\":\"https://a0.muscache.com/im/pictures/50f57bd9-a561-4075-82ee-4f8381bb9b4f.jpg?aki_policy=poster\",\"location\":\"New York\",\"category\":\"Live Music\",\"available\":\"Tomorrow\"},{\"title\":\"Cruise Through History in a Vintage Car\",\"cost\":49,\"ratings\":4.88,\"reviews\":92,\"country\":\"United States\",\"img\":\"https://a0.muscache.com/im/pictures/lombard/MtTemplate-613969-media_library/original/fe4afe24-afb4-49b4-acbc-f9b498caa6f8.jpeg?aki_policy=poster\",\"location\":\"New York\",\"category\":\"Car Ride\",\"available\":\"Today\"},{\"title\":\"NEW YORK Five Places In one Photoshoot\",\"cost\":80,\"ratings\":5,\"reviews\":42,\"country\":\"United States\",\"img\":\"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1185175-media_library/original/0ba3e064-e77f-49c8-9402-9a736d8f1001.jpg?aki_policy=poster\",\"location\":\"New York\",\"category\":\"Photo Shoot\",\"available\":\"Tomorrow\"}]");

/***/ })

})
//# sourceMappingURL=experience.js.b3624458cbf160f728df.hot-update.js.map