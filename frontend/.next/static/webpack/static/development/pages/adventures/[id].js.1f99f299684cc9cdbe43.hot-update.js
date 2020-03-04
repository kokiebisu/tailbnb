webpackHotUpdate("static/development/pages/adventures/[id].js",{

/***/ "./src/components/adventures/functions/AdventureCard.tsx":
/*!***************************************************************!*\
  !*** ./src/components/adventures/functions/AdventureCard.tsx ***!
  \***************************************************************/
/*! exports provided: AdventureCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureCard", function() { return AdventureCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/adventures/functions/AdventureCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var renderIcon = function renderIcon(icon) {
  switch (icon) {
    case 'camp':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("svg", {
        className: "h-full w-full",
        style: {
          fill: '#484848'
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512.001 512.001",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("path", {
        d: "M511.423,460.198l-13.801-33.123c-0.01-0.025-0.021-0.051-0.032-0.076L387.174,161.998 c-1.164-2.795-3.896-4.615-6.923-4.615h-36.488c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h31.488l104.194,250.069 h-232.25L143.001,172.383h170.793c4.143,0,7.5-3.358,7.5-7.5c0-4.142-3.357-7.5-7.5-7.5H139.251v-34.702h83.617 c4.142,0,7.5-3.358,7.5-7.5V57.199c0-4.142-3.358-7.5-7.5-7.5h-83.617v-0.783c0-4.142-3.358-7.5-7.5-7.5 c-4.142,0-7.5,3.358-7.5,7.5v8.283v57.982v48.202L37.665,371.192L2.094,408.186c-2.832,2.944-2.786,7.613,0.103,10.502 l11.067,11.067L0.579,460.198c-0.964,2.315-0.708,4.958,0.683,7.045c1.391,2.086,3.733,3.34,6.24,3.34h49.693 c0.027,0,0.054,0,0.081,0h149.002c0.009,0,0.018,0.002,0.026,0.002c0.013,0,0.027-0.002,0.04-0.002h49.632 c0.009,0,0.018,0.002,0.027,0.002c0.013,0,0.027-0.002,0.04-0.002H504.5c2.508,0,4.85-1.253,6.24-3.34 C512.132,465.156,512.388,462.513,511.423,460.198z M139.251,64.699h76.117v42.982h-76.117V64.699z M18.753,455.583l5.982-14.359 l14.36,14.359H18.753z M54.587,449.86l-27.096-27.094c-0.016-0.017-0.033-0.033-0.049-0.049l-9.437-9.436l91.453-95.112 L54.587,449.86z M68.453,455.583l63.3-151.92l63.299,151.92H68.453z M211.302,455.583l-72.627-174.305 c-0.002-0.004-0.004-0.007-0.005-0.011c-0.131-0.312-0.287-0.615-0.462-0.91c-0.035-0.059-0.071-0.116-0.107-0.174 c-0.156-0.249-0.327-0.492-0.516-0.725c-0.027-0.034-0.051-0.07-0.079-0.103c-0.173-0.207-0.357-0.407-0.556-0.599 c-0.036-0.035-0.076-0.064-0.112-0.098c-0.062-0.057-0.127-0.111-0.192-0.166c-0.204-0.176-0.414-0.339-0.63-0.49 c-0.053-0.036-0.103-0.076-0.157-0.111c-0.277-0.182-0.561-0.343-0.854-0.484c-0.043-0.021-0.088-0.038-0.131-0.058 c-0.267-0.122-0.54-0.228-0.817-0.317c-0.058-0.019-0.116-0.04-0.174-0.057c-0.313-0.093-0.631-0.165-0.952-0.216 c-0.06-0.01-0.122-0.014-0.183-0.023c-0.29-0.039-0.581-0.06-0.873-0.065c-0.041-0.001-0.081-0.009-0.122-0.009 c-0.019,0-0.037,0.004-0.056,0.004c-0.326,0.002-0.651,0.028-0.974,0.073c-0.073,0.01-0.145,0.023-0.217,0.036 c-0.295,0.049-0.588,0.114-0.876,0.199c-0.031,0.009-0.064,0.016-0.095,0.025c-0.314,0.097-0.621,0.219-0.922,0.358 c-0.057,0.027-0.113,0.055-0.17,0.083c-0.268,0.132-0.529,0.278-0.783,0.443c-0.03,0.019-0.061,0.036-0.091,0.056 c-0.267,0.18-0.523,0.38-0.769,0.597c-0.061,0.054-0.118,0.111-0.177,0.167c-0.093,0.087-0.189,0.168-0.278,0.261L66.34,341.369 l57.911-138.986v28.767c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-28.767c24.117,57.88,72.312,173.551,96.019,230.447 c0.01,0.024,0.02,0.049,0.031,0.073c3.878,9.306,7.1,17.039,9.45,22.68H211.302z M261,455.583l-7.555-18.131h232.25l7.555,18.131 H261z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })))));

    case 'map':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("svg", {
        className: "h-full w-full",
        style: {
          fill: '#484848'
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 54 54",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("path", {
        d: "M53.516,1.143c-0.3-0.182-0.674-0.19-0.983-0.027L36,9.869L19.468,1.116c-0.013-0.007-0.028-0.009-0.041-0.015 c-0.048-0.023-0.097-0.04-0.147-0.055c-0.028-0.008-0.055-0.017-0.083-0.023c-0.055-0.011-0.111-0.015-0.168-0.017 c-0.025-0.001-0.05-0.004-0.076-0.003c-0.054,0.003-0.107,0.013-0.16,0.025c-0.03,0.006-0.06,0.01-0.089,0.019 c-0.007,0.002-0.014,0.002-0.02,0.004l-18,6C0.275,7.187,0,7.569,0,8v43c0,0.321,0.154,0.623,0.416,0.812 C0.588,51.935,0.793,52,1,52c0.106,0,0.213-0.017,0.316-0.052l17.646-5.882l16.657,6.859c0.014,0.006,0.03,0.004,0.044,0.009 C35.773,52.973,35.885,53,36,53c0.09,0,0.179-0.015,0.266-0.039c0.028-0.008,0.054-0.021,0.082-0.031 c0.04-0.015,0.082-0.026,0.12-0.046l17-9C53.795,43.711,54,43.37,54,43V2C54,1.649,53.816,1.324,53.516,1.143z M2,8.721l16-5.333 v26.992c-0.43,0.078-0.854,0.166-1.264,0.274c-0.534,0.142-0.852,0.689-0.71,1.223c0.119,0.448,0.523,0.744,0.966,0.744 c0.084,0,0.171-0.011,0.257-0.033c0.24-0.064,0.502-0.096,0.751-0.148v11.84L2,49.612V8.721z M20,32.16 c0.321-0.025,0.632-0.066,0.961-0.073c0.552-0.012,0.99-0.469,0.979-1.021c-0.012-0.545-0.457-0.979-1-0.979 c-0.007,0-0.015,0-0.022,0c-0.31,0.007-0.615,0.024-0.918,0.045V3.661l15,7.941v21.194c-0.714-0.031-1.44-0.115-2.201-0.262 c-0.544-0.107-1.067,0.249-1.172,0.791s0.25,1.067,0.792,1.172c0.886,0.172,1.746,0.256,2.582,0.289v15.721L20,44.33V32.16z M52,42.397l-15,7.941v-15.66c0.372-0.169,0.62-0.549,0.587-0.98c-0.029-0.374-0.269-0.674-0.587-0.821V11.602l15-7.941V42.397z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx("path", {
        d: "M11,9c-2.757,0-5,2.243-5,5c0,2.415,1.721,4.434,4,4.899V21c0,0.553,0.448,1,1,1s1-0.447,1-1v-2.101 c2.279-0.465,4-2.484,4-4.899C16,11.243,13.757,9,11,9z M11,17c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S12.654,17,11,17z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), __jsx("path", {
        d: "M45.07,27.673c0.12,0.047,0.243,0.068,0.364,0.068c0.4,0,0.777-0.241,0.932-0.636c0.47-1.199,0.847-2.553,1.123-4.024 c0.102-0.542-0.256-1.064-0.799-1.167c-0.546-0.09-1.065,0.257-1.167,0.8c-0.252,1.348-0.595,2.58-1.019,3.663 C44.303,26.89,44.556,27.471,45.07,27.673z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), __jsx("path", {
        d: "M12.805,32.342c-1.207,0.757-2.295,1.705-3.235,2.82c-0.356,0.422-0.302,1.053,0.12,1.409 c0.188,0.158,0.417,0.235,0.644,0.235c0.285,0,0.567-0.121,0.765-0.355c0.806-0.956,1.737-1.769,2.768-2.414 c0.468-0.294,0.609-0.911,0.316-1.379C13.89,32.19,13.272,32.048,12.805,32.342z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), __jsx("path", {
        d: "M8.627,38.276c-0.502-0.23-1.096-0.013-1.327,0.489c-1.026,2.226-1.28,4.023-1.291,4.099 c-0.075,0.547,0.307,1.05,0.854,1.125c0.046,0.007,0.093,0.01,0.138,0.01c0.491,0,0.919-0.362,0.99-0.861 c0.002-0.016,0.231-1.597,1.125-3.534C9.347,39.101,9.128,38.508,8.627,38.276z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), __jsx("path", {
        d: "M40.423,33.729c0.153,0,0.309-0.035,0.454-0.109c1.292-0.661,2.431-1.599,3.384-2.786c0.346-0.431,0.277-1.061-0.154-1.406 c-0.43-0.343-1.06-0.276-1.406,0.154c-0.776,0.967-1.696,1.726-2.735,2.257c-0.492,0.252-0.687,0.854-0.435,1.346 C39.709,33.53,40.06,33.729,40.423,33.729z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx("path", {
        d: "M29.17,31.432c-0.441-0.185-0.699-0.313-0.716-0.322c-0.065-0.033-0.134-0.06-0.205-0.078 c-1.083-0.278-2.15-0.498-3.173-0.654c-0.545-0.086-1.056,0.291-1.14,0.837c-0.083,0.546,0.292,1.057,0.838,1.14 c0.926,0.142,1.893,0.34,2.877,0.59c0.134,0.064,0.39,0.185,0.748,0.334c0.126,0.053,0.257,0.077,0.385,0.077 c0.391,0,0.763-0.23,0.923-0.614C29.92,32.23,29.68,31.644,29.17,31.432z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), __jsx("path", {
        d: "M46.923,19.931c0.022,0.001,0.043,0.002,0.065,0.002c0.523,0,0.963-0.406,0.997-0.937c0.062-0.961,0.093-1.978,0.093-3.02 c0-0.347-0.003-0.699-0.01-1.058c-0.01-0.553-0.49-0.973-1.018-0.982c-0.552,0.01-0.992,0.466-0.982,1.018 c0.006,0.347,0.01,0.688,0.01,1.022c0,1-0.03,1.973-0.089,2.893C45.954,19.42,46.372,19.895,46.923,19.931z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), __jsx("path", {
        d: "M8.293,28.707C8.488,28.902,8.744,29,9,29s0.512-0.098,0.707-0.293L11,27.414l1.293,1.293C12.488,28.902,12.744,29,13,29 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L12.414,26l1.293-1.293c0.391-0.391,0.391-1.023,0-1.414 s-1.023-0.391-1.414,0L11,24.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L9.586,26l-1.293,1.293 C7.902,27.683,7.902,28.316,8.293,28.707z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }))));

    case 'campcar':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("svg", {
        className: "h-full w-full",
        style: {
          fill: '#484848'
        },
        viewBox: "0 0 64 64",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx("path", {
        d: "m1 61v2h62v-2h-16-30z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), __jsx("path", {
        d: "m54.931 54h7.069c.553 0 1-.447 1-1v-13c0-.12-.021-.239-.063-.352l-4.54-12.105c-1.019-2.718-3.653-4.543-6.555-4.543h-2.842v-2h2v-2h-2.111c1.301-1.272 2.111-3.042 2.111-5 0-3.859-3.141-7-7-7s-7 3.141-7 7c0 1.958.81 3.728 2.111 5h-2.295c.112-.314.184-.648.184-1v-4-2c0-1.654-1.346-3-3-3h-6c-.771 0-1.468.301-2 .78-.532-.479-1.229-.78-2-.78h-1.184c.112-.314.184-.648.184-1v-4c0-1.654-1.346-3-3-3h-6c-1.654 0-3 1.346-3 3v4c0 .395.081.77.22 1.116-1.275.345-2.22 1.501-2.22 2.884v6c0 .352.072.686.184 1h-2.184v2h2v2h-1c-3.859 0-7 3.141-7 7v23c0 .553.447 1 1 1h7.069c.495 3.94 3.859 7 7.931 7s7.436-3.06 7.931-7h14.139c.495 3.94 3.859 7 7.931 7s7.435-3.06 7.93-7zm4.069-2v-8h2v8zm-20-38c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5zm-11-3h6c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-6c0-.552.448-1 1-1zm-15-7c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1zm-2 14v-6c0-.552.448-1 1-1h2 6 4c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1h-12c-.552 0-1-.448-1-1zm0 3h1 12 4 6 13v2h-36zm-3 4h43.842c2.073 0 3.954 1.304 4.682 3.245l4.476 11.937v1.818h-3c-.553 0-1 .447-1 1v9h-2.069c-.495-3.94-3.859-7-7.931-7-3.04 0-5.689 1.705-7.042 4.209.015-.07.042-.135.042-.209v-21c0-.553-.447-1-1-1h-18c-.553 0-1 .447-1 1v13h-11v2h11v2.589c-.927-.377-1.939-.589-3-.589-4.072 0-7.436 3.06-7.931 7h-2.069v-10c0-.553-.447-1-1-1h-3v-11c0-2.757 2.243-5 5-5zm30 12h-7v-8h7zm-9 0h-7v-8h7zm-7 2h16v9h-14.765c-.366-.455-.78-.869-1.235-1.235zm2.411 11h14.589c.299 0 .56-.138.743-.346-.338.73-.569 1.517-.673 2.346h-14.139c-.088-.698-.264-1.369-.52-2zm-21.411-7h2v9h-2zm14 16c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm30 0c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), __jsx("path", {
        d: "m47 49c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), __jsx("path", {
        d: "m17 49c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), __jsx("path", {
        d: "m43 39h13c.316 0 .613-.149.803-.403.188-.253.246-.581.155-.884l-2.572-8.574c-.384-1.28-1.539-2.139-2.874-2.139h-8.512c-.553 0-1 .447-1 1v10c0 .553.447 1 1 1zm1-10h7.512c.445 0 .83.286.958.713l2.186 7.287h-10.656z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), __jsx("path", {
        d: "m42 41h4v2h-4z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), __jsx("path", {
        d: "m8 39h9c.553 0 1-.447 1-1v-10c0-.553-.447-1-1-1h-9c-.553 0-1 .447-1 1v10c0 .553.447 1 1 1zm1-10h7v8h-7z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), __jsx("path", {
        d: "m22 13h-9v2h8v2h2v-3c0-.553-.447-1-1-1z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), __jsx("path", {
        d: "m44 11c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      })));
  }
};

var AdventureCard = function AdventureCard(_ref) {
  var position = _ref.position,
      icon = _ref.icon,
      title = _ref.title,
      description = _ref.description;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, position === 'first' ? __jsx("div", {
    className: "pt-4 md:pb-4 w-full flex lg:block lg:w-1/3 pr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("div", {
    className: "h-8 w-8 lg:mb-3 mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, renderIcon(icon)), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "hidden lg:block my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, title), __jsx("p", {
    className: "text-sm mt-1 ml-4 lg:ml-0 lg:mt-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, description)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, position === 'last' ? __jsx("div", {
    className: "pt-4 md:pt-0 md:pb-4 w-full flex lg:block lg:w-1/3 pr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("div", {
    className: "h-8 w-8 lg:mb-3 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, renderIcon(icon)), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "hidden lg:block my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, title), __jsx("p", {
    className: "text-sm mt-1 ml-4 lg:ml-0 lg:mt-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, description)) : __jsx("div", {
    className: "pt-4 w-full flex lg:block lg:w-1/3 pr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("div", {
    className: "h-8 w-8 lg:mb-3 mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, renderIcon(icon)), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "hidden lg:block my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, title), __jsx("p", {
    className: "text-sm mt-1 ml-4 lg:ml-0 lg:mt-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, description))));
};

/***/ })

})
//# sourceMappingURL=[id].js.1f99f299684cc9cdbe43.hot-update.js.map