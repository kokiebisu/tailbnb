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
}];
var LanguageModal = function LanguageModal(_ref) {
  var setLanguageModal = _ref.setLanguageModal;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: 'English',
    country: 'Canada'
  }),
      selectedLanguage = _useState[0],
      setSelectedLanguage = _useState[1];

  var filteredLanguages = languages["default"].filter(function (language) {
    return !_.isEqual(language, selectedLanguage);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    id: "darkOverlay",
    className: "fixed w-full h-full top-0 left-0 z-20 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }), __jsx("div", {
    id: "centerAbsolute",
    className: "relative rounded-xl hidden fixed bg-white md:block w-248 pb-8 z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    className: "w-full border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("div", {
    className: "w-full mx-auto max-w-5xl mt-2 flex justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("div", {
    className: "bg-green-850 relative w-full px-4 flex justify-center items-center my-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("div", {
    className: "w-full flex items-center absolute left-0 z-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setLanguageModal(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("div", {
    className: "inline-block z-10 hover:bg-gray-200 bg-white rounded-full p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("svg", {
    className: "w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 47.971 47.971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("path", {
    d: "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }))))))))), __jsx("div", {
    className: "w-full mx-auto max-w-5xl overflow-y-scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full text-2xl py-6 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Suggested languages and regions"), __jsx("div", {
    className: "w-full flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, suggestedLanguages.map(function (language) {
    return __jsx("div", {
      className: "w-1/5 flex mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, __jsx("button", {
      className: "w-90p hover:bg-gray-250  rounded-lg flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx("div", {
      className: "w-85p py-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, language.name)), __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm text-gray-650",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
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
      lineNumber: 207
    },
    __self: this
  }, "Choose a language and region"), __jsx("div", {
    className: "w-full flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/5 flex mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx("button", {
    className: "w-90p border border-gray-750 rounded-lg flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("div", {
    className: "w-85p py-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, selectedLanguage.name)), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, selectedLanguage.country))))), languages.map(function (language) {
    return __jsx("div", {
      className: "w-1/5 flex mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, __jsx("button", {
      className: "w-90p hover:bg-gray-250  rounded-lg flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, __jsx("div", {
      className: "w-85p py-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, language.name)), __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm text-gray-650",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, language.country)))));
  })))));
};

/***/ })

})
//# sourceMappingURL=index.js.0d42cdbf5367898fe5e0.hot-update.js.map