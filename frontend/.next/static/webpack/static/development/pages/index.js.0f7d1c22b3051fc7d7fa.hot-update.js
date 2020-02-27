webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/Adventures.tsx":
/*!**************************************************!*\
  !*** ./src/components/containers/Adventures.tsx ***!
  \**************************************************/
/*! exports provided: Adventures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adventures", function() { return Adventures; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    adventures {\n      id\n      title\n      period\n      cost\n      country\n      img\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

 // import { useState } from 'react';


 // import PulseLoader from 'react-spinners/PulseLoader';
// import Media from 'react-media';
// Component
// import { AdventureCard } from '../presentational/AdventureCard';
// import { ShowAll } from '../ShowAll';

var GET_ADVENTURES = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());
var Adventures = function Adventures() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_ADVENTURES),
      loading = _useQuery.loading,
      data = _useQuery.data; // const [card, setCard] = useState<number>(0);
  //   const renderContent = (data: AdventureData, number: number) => {
  //     var content = [];
  //     data.adventures.map(adventure, index => {
  //       content.push(
  //         <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 pb-5'>
  //           <AdventureCard
  //             key={index}
  //             id={adventure.id}
  //             img={data?.adventures[i].img}
  //             country={data?.adventures[i].country}
  //             title={data?.adventures[i].title}
  //             cost={data?.adventures[i].cost}
  //             period={data?.adventures[i].period}
  //           />
  //         </div>
  //       );
  //     })
  //     }
  //     return content;
  //   };
  //   if (error) return `Error! ${error.message}`;


  if (!loading) {
    console.log(data);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null);
};

/***/ })

})
//# sourceMappingURL=index.js.0f7d1c22b3051fc7d7fa.hot-update.js.map