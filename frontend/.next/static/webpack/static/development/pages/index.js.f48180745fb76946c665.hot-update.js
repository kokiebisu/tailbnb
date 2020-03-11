webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/modals/HelpModal.jsx":
/*!*********************************************!*\
  !*** ./src/components/modals/HelpModal.jsx ***!
  \*********************************************/
/*! exports provided: HelpModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpModal", function() { return HelpModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_HelpCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/HelpCard */ "./src/components/functions/HelpCard.tsx");
/* harmony import */ var _functions_HelpAdditional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/HelpAdditional */ "./src/components/functions/HelpAdditional.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/HelpModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Components


 // interface Prop {
//   setHelpModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
// }

var HelpModal = function HelpModal(_ref) {
  var setHelpModal = _ref.setHelpModal;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      word = _useState[0],
      setWord = _useState[1];

  var handleChange = function handleChange(e) {
    return setWord(e.target.value);
  };

  var questions = [{
    title: 'How do I create an account?',
    answer: "If you don't have an Airbnb account yet, go to airbnb.com and click Sign Up. You can sign up using your email address, Facebook account, Google account, or Apple ID. Signing up and creating an Airbnb account is free. <br>After you sign up, be sure to complete your account before booking a reservation. "
  }];
  return __jsx("div", {
    className: "bg-white z-100 md:block fixed top-0 right-0 h-screen w-104 shadow-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "relative bg-white fixed top-0 w-full h-16 flex justify-center items-center border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    style: {
      top: 20
    },
    className: "absolute top-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Recommended help")), __jsx("button", {
    onClick: function onClick() {
      return setHelpModal(false);
    },
    className: "absolute top-0 right-0 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "pt-6 pr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("svg", {
    className: "h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.001 512.001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("path", {
    d: "M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717\nL34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859\nc-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287\nl221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285\nL284.286,256.002z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))))))), __jsx("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "top-0 absolute h-156 mx-8 overflow-hidden overflow-y-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Search by keyword")), __jsx("div", {
    id: "helpsearch",
    className: "flex border border-gray-300 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/12 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("svg", {
    className: "absolute top-0 pl-2 pt-2 h-6 w-6",
    style: {
      fill: '#767676'
    },
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("path", {
    d: "m10.7227 19.9083c-4.919-.706-8.336-5.266-7.63-10.185.704-4.919 5.264-8.336 10.184-7.631 4.919.706 8.336 5.265 7.632 10.185-.706 4.92-5.266 8.336-10.186 7.631m11.65 2.76-3.729-4.196c1.706-1.514 2.905-3.618 3.254-6.053.783-5.467-3.013-10.533-8.479-11.317-5.467-.784-10.534 3.013-11.316 8.48-.784 5.466 3.012 10.532 8.478 11.315 2.675.384 5.254-.329 7.283-1.798l3.762 4.233c.184.207.5.225.706.042.206-.184.225-.5.041-.706",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))), __jsx("div", {
    className: "w-11/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("input", {
    value: word,
    onChange: handleChange,
    style: {
      fontFamily: 'airbnb-medium'
    },
    type: "text",
    className: "w-full h-8 text-sm text-gray-750 focus:outline-none placeholder-gray-800",
    placeholder: "E.g. reservation status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))), __jsx("div", {
    className: "mt-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("div", {
    className: "mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "uppercase text-gray-750 text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Recommended Articles")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_functions_HelpCard__WEBPACK_IMPORTED_MODULE_1__["HelpCard"], {
    title: questions[0].title,
    answer: questions[0].answer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(_functions_HelpCard__WEBPACK_IMPORTED_MODULE_1__["HelpCard"], {
    title: questions[0].title,
    answer: questions[0].answer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx(_functions_HelpCard__WEBPACK_IMPORTED_MODULE_1__["HelpCard"], {
    title: questions[0].title,
    answer: questions[0].answer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx(_functions_HelpCard__WEBPACK_IMPORTED_MODULE_1__["HelpCard"], {
    title: questions[0].title,
    answer: questions[0].answer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx(_functions_HelpCard__WEBPACK_IMPORTED_MODULE_1__["HelpCard"], {
    title: questions[0].title,
    answer: questions[0].answer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), __jsx("div", {
    className: "mt-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "uppercase text-gray-750 text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Explore More Articles By Topic")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(_functions_HelpAdditional__WEBPACK_IMPORTED_MODULE_2__["HelpAdditional"], {
    title: "Reservation requests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx(_functions_HelpAdditional__WEBPACK_IMPORTED_MODULE_2__["HelpAdditional"], {
    title: "Reservation requests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }))))), __jsx("div", {
    className: "w-full fixed bottom-0 bg-red-550 h-28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "what "));
};
{
  /* <div className='w-full flex justify-center items-center'>
  </div>
  <div className='bg-red-500 border-b border-t border-gray-300 p-8 relative h-full overflow-auto'>
  <div className=''>
   
  </div>
  <div className='mt-8 mb-4'>
  <h3
    style={{ fontFamily: 'airbnb-bold' }}
    className='uppercase text-xs text-gray-750'>
    Recommended Articles
  </h3>
  </div>
  <div>
   <HelpCard title={questions[0].title} answer={questions[0].answer} />
  </div>
  </div>
  <div className='flex flex-col justify-end items-center my-2'>
  <button
  style={{ fontFamily: 'airbnb-bold' }}
  className='w-11/12 bg-green-850 py-2 text-white rounded'>
  Visit the Help Centre
  </button>
  <a
  style={{ fontFamily: 'airbnb-book' }}
  className='border-b border-green-850 text-green-850 text-sm my-1'
  href='#'>
  Give Feedback
  </a>
  </div> */
}

/***/ })

})
//# sourceMappingURL=index.js.f48180745fb76946c665.hot-update.js.map