webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/modals/LanguageModal.jsx":
/*!*************************************************!*\
  !*** ./src/components/modals/LanguageModal.jsx ***!
  \*************************************************/
/*! exports provided: LanguageModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageModal", function() { return LanguageModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/LanguageModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var suggestedLanguages = [{
  name: 'English',
  country: 'United States'
}, {
  name: 'English',
  country: 'United Kingdom'
}, {
  name: 'Français',
  country: 'Canada'
}];
var languages = [{
  name: 'English',
  country: 'Canada'
}, {
  name: 'Azərbaycan dili',
  country: 'Azərbaycan'
}, {
  name: 'Bahasa Indonesia',
  country: 'Indonesia'
}, {
  name: 'Bosanski',
  country: 'Bosna i Hercegovina'
}, {
  name: 'Català',
  country: 'Espanya'
}, {
  name: 'Čeština',
  country: 'Česká republika'
}, {
  name: 'Crnogorski',
  country: 'Crna Gora'
}, {
  name: 'Dansk',
  country: 'Danmark'
}, {
  name: 'Deutsch',
  country: 'Deutschland'
}, {
  name: 'Deutsch',
  country: 'Österreich'
}, {
  name: 'Deutsch',
  country: 'Schweiz'
}, {
  name: 'Eesti',
  country: 'Eesti'
}, {
  name: 'English',
  country: 'Australia'
}, {
  name: 'English',
  country: 'Guyana'
}, {
  name: 'English',
  country: 'India'
}, {
  name: 'English',
  country: 'Ireland'
}, {
  name: 'English',
  country: 'New Zealand'
}, {
  name: 'English',
  country: 'Singapore'
}, {
  name: 'English',
  country: 'United Arab Emirates'
}, {
  name: 'Español',
  country: 'Argentina'
}, {
  name: 'Español',
  country: 'Belice'
}, {
  name: 'Español',
  country: 'El Salvador'
}, {
  name: 'Español',
  country: 'España'
}, {
  name: 'Español',
  country: 'Estados Unidos'
}, {
  name: 'Español',
  country: 'Guatemala'
}, {
  name: 'Español',
  country: 'Honduras'
}, {
  name: 'Español',
  country: 'Latinoamérica'
}, {
  name: 'Español',
  country: 'México'
}, {
  name: 'Español',
  country: 'Nicaragua'
}, {
  name: 'Español',
  country: 'Panamá'
}, {
  name: 'Español',
  country: 'Paraguay'
}, {
  name: 'Español',
  country: 'Perú'
}, {
  name: 'Español',
  country: 'Venezuela'
}, {
  name: 'Français',
  country: 'Belgique'
}, {
  name: 'Français',
  country: 'France'
}, {
  name: 'Français',
  country: 'Suisse'
}, {
  name: 'Gaeilge',
  country: 'Éire'
}, {
  name: 'Hrvatski',
  country: 'Hrvatska'
}, {
  name: 'isiXhosa',
  country: 'eMzantsi Afrika'
}, {
  name: 'isiZulu',
  country: 'iNingizimu Afrika'
}, {
  name: 'Íslenska',
  country: 'Ísland'
}, {
  name: 'Italiano',
  country: 'Italia'
}, {
  name: 'Italiano',
  country: 'Svizzera'
}, {
  name: 'Kiswahili',
  country: 'Āfrika'
}, {
  name: 'Latviešu',
  country: 'Latvija'
}, {
  name: 'Lietuvių',
  country: 'Lietuva'
}, {
  name: 'Magyar',
  country: 'Magyarország'
}, {
  name: 'Malti',
  country: 'Malta'
}, {
  name: 'Melayu',
  country: 'Malaysia'
}, {
  name: 'Nederlands',
  country: 'België'
}, {
  name: 'Nederlands',
  country: 'Nederland'
}, {
  name: 'Norsk',
  country: 'Norge'
}, {
  name: 'Polski',
  country: 'Polska'
}, {
  name: 'Português',
  country: 'Brasil'
}, {
  name: 'Português',
  country: 'Portugal'
}, {
  name: 'Română',
  country: 'Română'
}, {
  name: 'Shqip',
  country: 'Shqipëri'
}, {
  name: 'Slovenčina',
  country: 'Slovensko'
}, {
  name: 'Slovenščina',
  country: 'Slovenija'
}, {
  name: 'Srpski',
  country: 'Srbija'
}, {
  name: 'Suomi',
  country: 'Suomi'
}, {
  name: 'Svenska',
  country: 'Sverige'
}, {
  name: 'Tagalog',
  country: 'Pilipinas'
}, {
  name: 'Tiếng Việt',
  country: 'Việt Nam'
}, {
  name: 'Türkçe',
  country: 'Türkiye'
}, {
  name: 'Ελληνικά',
  country: 'Ελλάδα'
}, {
  name: 'Български',
  country: 'България'
}, {
  name: 'Македонски',
  country: 'Северна Македонија'
}, {
  name: 'Русский',
  country: 'Россия'
}, {
  name: 'Українська',
  country: 'Україна'
}, {
  name: 'ქართული',
  country: 'საქართველო'
}, {
  name: 'Հայերեն',
  country: 'Հայաստան'
}, {
  name: 'עברית',
  country: 'ישראל'
}, {
  name: 'العربية',
  country: 'العالم'
}, {
  name: 'हिन्दी',
  country: 'भारत'
}, {
  name: 'ไทย',
  country: 'ประเทศไทย'
}, {
  name: '한국어',
  country: '대한민국'
}, {
  name: '日本語',
  country: '日本'
}, {
  name: '简体中文',
  country: '美国'
}, {
  name: '繁體中文',
  country: '美國'
}, {
  name: '简体中文',
  country: '中国'
}, {
  name: '繁體中文',
  country: '香港'
}, {
  name: '繁體中文',
  country: '台灣'
}];
var LanguageModal = function LanguageModal(_ref) {
  var setLanguageModal = _ref.setLanguageModal;
  var defaultCurrency = languages.find(function (language) {
    return language.name == name;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: 'English',
    country: 'Canada'
  }),
      selectedLanguage = _useState[0],
      setSelectedLanguage = _useState[1];

  var filteredLanguages = languages.filter(function (language) {
    return !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual(language, selectedLanguage);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    id: "darkOverlay",
    className: "fixed w-full h-full top-0 left-0 z-20 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }), __jsx("div", {
    id: "centerAbsolute",
    className: "relative rounded-xl hidden fixed bg-white md:block w-248 pb-8 z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, __jsx("div", {
    className: "w-full border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, __jsx("div", {
    className: "w-full mx-auto max-w-5xl mt-2 flex justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, __jsx("div", {
    className: "bg-green-850 relative w-full px-4 flex justify-center items-center my-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, __jsx("div", {
    className: "w-full flex items-center absolute left-0 z-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setLanguageModal(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, __jsx("div", {
    className: "inline-block z-10 hover:bg-gray-200 bg-white rounded-full p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, __jsx("svg", {
    className: "w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 47.971 47.971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, __jsx("path", {
    d: "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }))))))))), __jsx("div", {
    className: "w-full h-75v overflow-y-scroll overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, __jsx("div", {
    className: "w-full mx-auto max-w-5xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full text-2xl py-6 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }, "Suggested languages and regions"), __jsx("div", {
    className: "w-full flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, suggestedLanguages.map(function (language) {
    return __jsx("div", {
      className: "w-1/5 flex mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
      },
      __self: this
    }, __jsx("button", {
      onClick: function onClick() {
        setSelectedLanguage(language);
      },
      className: "w-90p hover:bg-gray-250  rounded-lg flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }, __jsx("div", {
      className: "w-85p py-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417
      },
      __self: this
    }, __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419
      },
      __self: this
    }, language.name)), __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm text-gray-650",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426
      },
      __self: this
    }, language.country)))));
  })), __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full text-2xl py-6 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, "Choose a language and region"), __jsx("div", {
    className: "w-full flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/5 flex mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }, __jsx("button", {
    className: "w-90p border border-gray-750 rounded-lg flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, __jsx("div", {
    className: "w-85p py-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, selectedLanguage.name)), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, selectedLanguage.country))))), filteredLanguages.map(function (language) {
    return __jsx("div", {
      className: "w-1/5 flex mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466
      },
      __self: this
    }, __jsx("button", {
      className: "w-90p hover:bg-gray-250  rounded-lg flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467
      },
      __self: this
    }, __jsx("div", {
      className: "w-85p py-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468
      },
      __self: this
    }, __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470
      },
      __self: this
    }, language.name)), __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm text-gray-650",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477
      },
      __self: this
    }, language.country)))));
  }))))));
};

/***/ })

})
//# sourceMappingURL=index.js.a0e07679969b99cafd24.hot-update.js.map