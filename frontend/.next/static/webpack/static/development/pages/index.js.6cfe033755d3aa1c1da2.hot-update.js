webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/modals/LanguageModal.tsx":
/*!*************************************************!*\
  !*** ./src/components/modals/LanguageModal.tsx ***!
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
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/LanguageModal.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var suggestedLanguages = [{
  name: 'English',
  location: 'United States'
}, {
  name: 'English',
  location: 'United Kingdom'
}, {
  name: 'Français',
  location: 'Canada'
}];
var languages = [{
  name: 'English',
  location: 'Canada'
}, {
  name: 'Azərbaycan dili',
  location: 'Azərbaycan'
}, {
  name: 'Bahasa Indonesia',
  location: 'Indonesia'
}, {
  name: 'Bosanski',
  location: 'Bosna i Hercegovina'
}, {
  name: 'Català',
  location: 'Espanya'
}, {
  name: 'Čeština',
  location: 'Česká republika'
}, {
  name: 'Crnogorski',
  location: 'Crna Gora'
}, {
  name: 'Dansk',
  location: 'Danmark'
}, {
  name: 'Deutsch',
  location: 'Deutschland'
}, {
  name: 'Deutsch',
  location: 'Österreich'
}, {
  name: 'Deutsch',
  location: 'Schweiz'
}, {
  name: 'Eesti',
  location: 'Eesti'
}, {
  name: 'English',
  location: 'Australia'
}, {
  name: 'English',
  location: 'Guyana'
}, {
  name: 'English',
  location: 'India'
}, {
  name: 'English',
  location: 'Ireland'
}, {
  name: 'English',
  location: 'New Zealand'
}, {
  name: 'English',
  location: 'Singapore'
}, {
  name: 'English',
  location: 'United Arab Emirates'
}, {
  name: 'Español',
  location: 'Argentina'
}, {
  name: 'Español',
  location: 'Belice'
}, {
  name: 'Español',
  location: 'El Salvador'
}, {
  name: 'Español',
  location: 'España'
}, {
  name: 'Español',
  location: 'Estados Unidos'
}, {
  name: 'Español',
  location: 'Guatemala'
}, {
  name: 'Español',
  location: 'Honduras'
}, {
  name: 'Español',
  location: 'Latinoamérica'
}, {
  name: 'Español',
  location: 'México'
}, {
  name: 'Español',
  location: 'Nicaragua'
}, {
  name: 'Español',
  location: 'Panamá'
}, {
  name: 'Español',
  location: 'Paraguay'
}, {
  name: 'Español',
  location: 'Perú'
}, {
  name: 'Español',
  location: 'Venezuela'
}, {
  name: 'Français',
  location: 'Belgique'
}, {
  name: 'Français',
  location: 'France'
}, {
  name: 'Français',
  location: 'Suisse'
}, {
  name: 'Gaeilge',
  location: 'Éire'
}, {
  name: 'Hrvatski',
  location: 'Hrvatska'
}, {
  name: 'isiXhosa',
  location: 'eMzantsi Afrika'
}, {
  name: 'isiZulu',
  location: 'iNingizimu Afrika'
}, {
  name: 'Íslenska',
  location: 'Ísland'
}, {
  name: 'Italiano',
  location: 'Italia'
}, {
  name: 'Italiano',
  location: 'Svizzera'
}, {
  name: 'Kiswahili',
  location: 'Āfrika'
}, {
  name: 'Latviešu',
  location: 'Latvija'
}, {
  name: 'Lietuvių',
  location: 'Lietuva'
}, {
  name: 'Magyar',
  location: 'Magyarország'
}, {
  name: 'Malti',
  location: 'Malta'
}, {
  name: 'Melayu',
  location: 'Malaysia'
}, {
  name: 'Nederlands',
  location: 'België'
}, {
  name: 'Nederlands',
  location: 'Nederland'
}, {
  name: 'Norsk',
  location: 'Norge'
}, {
  name: 'Polski',
  location: 'Polska'
}, {
  name: 'Português',
  location: 'Brasil'
}, {
  name: 'Português',
  location: 'Portugal'
}, {
  name: 'Română',
  location: 'Română'
}, {
  name: 'Shqip',
  location: 'Shqipëri'
}, {
  name: 'Slovenčina',
  location: 'Slovensko'
}, {
  name: 'Slovenščina',
  location: 'Slovenija'
}, {
  name: 'Srpski',
  location: 'Srbija'
}, {
  name: 'Suomi',
  location: 'Suomi'
}, {
  name: 'Svenska',
  location: 'Sverige'
}, {
  name: 'Tagalog',
  location: 'Pilipinas'
}, {
  name: 'Tiếng Việt',
  location: 'Việt Nam'
}, {
  name: 'Türkçe',
  location: 'Türkiye'
}, {
  name: 'Ελληνικά',
  location: 'Ελλάδα'
}, {
  name: 'Български',
  location: 'България'
}, {
  name: 'Македонски',
  location: 'Северна Македонија'
}, {
  name: 'Русский',
  location: 'Россия'
}, {
  name: 'Українська',
  location: 'Україна'
}, {
  name: 'ქართული',
  location: 'საქართველო'
}, {
  name: 'Հայերեն',
  location: 'Հայաստան'
}, {
  name: 'עברית',
  location: 'ישראל'
}, {
  name: 'العربية',
  location: 'العالم'
}, {
  name: 'हिन्दी',
  location: 'भारत'
}, {
  name: 'ไทย',
  location: 'ประเทศไทย'
}, {
  name: '한국어',
  location: '대한민국'
}, {
  name: '日本語',
  location: '日本'
}, {
  name: '简体中文',
  location: '美国'
}, {
  name: '繁體中文',
  location: '美國'
}, {
  name: '简体中文',
  location: '中国'
}, {
  name: '繁體中文',
  location: '香港'
}, {
  name: '繁體中文',
  location: '台灣'
}];
var LanguageModal = function LanguageModal(_ref) {
  var location = _ref.location,
      setLanguageModal = _ref.setLanguageModal;
  var defaultLanguage = languages.find(function (language) {
    return language.location == location;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultLanguage),
      selectedLanguage = _useState[0],
      setSelectedLanguage = _useState[1];

  var filteredLanguages = languages.filter(function (language) {
    return !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual(language, selectedLanguage);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function handleResize() {
      if (window.innerWidth < 1100) {
        setLanguageModal(false);
      }
    }

    window.addEventListener('resize', handleResize);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    id: "darkOverlay",
    className: "md:block fixed w-full h-full top-0 left-0 z-20 overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "centerAbsolute",
    className: "relative rounded-xl hidden fixed bg-white md:block w-248 pb-8 z-50 lg:top-35p xl:top-50p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full border-b border-gray-300",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full mx-auto max-w-5xl mt-2 flex justify-center items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "bg-green-850 relative w-full px-4 flex justify-center items-center my-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-full flex items-center absolute left-0 z-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return setLanguageModal(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "inline-block z-10 hover:bg-gray-200 bg-white rounded-full p-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 19
    }
  }, __jsx("svg", {
    className: "w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 47.971 47.971",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 21
    }
  }, __jsx("g", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 23
    }
  }, __jsx("path", {
    d: "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 25
    }
  }))))))))), __jsx("div", {
    className: "w-full h-75v overflow-y-scroll overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full mx-auto max-w-5xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full text-2xl py-6 text-gray-750",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 13
    }
  }, "Suggested languages and regions"), __jsx("div", {
    className: "w-full flex flex-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 13
    }
  }, suggestedLanguages.map(function (language) {
    return __jsx("div", {
      className: "w-1/5 flex mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 19
      }
    }, __jsx("button", {
      className: "w-90p hover:bg-gray-250  rounded-lg flex justify-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "w-85p py-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "flex",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 25
      }
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 27
      }
    }, language.name)), __jsx("div", {
      className: "flex",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439,
        columnNumber: 25
      }
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm text-gray-650",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440,
        columnNumber: 27
      }
    }, language.location)))));
  })), __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full text-2xl py-6 text-gray-750",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 13
    }
  }, "Choose a language and region"), __jsx("div", {
    className: "w-full flex flex-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-1/5 flex mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "w-90p border border-gray-750 rounded-lg flex justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "w-85p py-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 21
    }
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 23
    }
  }, selectedLanguage.name)), __jsx("div", {
    className: "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 21
    }
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 23
    }
  }, selectedLanguage.location))))), filteredLanguages.map(function (language) {
    return __jsx("div", {
      className: "w-1/5 flex mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 19
      }
    }, __jsx("button", {
      onClick: function onClick() {
        setSelectedLanguage(language);
      },
      className: "w-90p hover:bg-gray-250  rounded-lg flex justify-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 481,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "w-85p py-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "flex",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 487,
        columnNumber: 25
      }
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488,
        columnNumber: 27
      }
    }, language.name)), __jsx("div", {
      className: "flex",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 25
      }
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm text-gray-650",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 27
      }
    }, language.location)))));
  }))))));
};

/***/ })

})
//# sourceMappingURL=index.js.6cfe033755d3aa1c1da2.hot-update.js.map