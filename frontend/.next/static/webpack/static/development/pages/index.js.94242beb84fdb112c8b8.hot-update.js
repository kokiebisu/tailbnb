webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/animations/arrow.ts":
/*!********************************************!*\
  !*** ./src/components/animations/arrow.ts ***!
  \********************************************/
/*! exports provided: rotateArrow, backRotateArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateArrow", function() { return rotateArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backRotateArrow", function() { return backRotateArrow; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var rotateArrow = function rotateArrow(arrow) {
  gsap__WEBPACK_IMPORTED_MODULE_0__["TweenLite"].to(arrow, 0.4, {
    rotation: '360_cw',
    opacity: 0.3,
    ease: Power3.easeOut
  });
};
var backRotateArrow = function backRotateArrow(arrow) {
  gsap__WEBPACK_IMPORTED_MODULE_0__["TweenLite"].to(arrow, 0.4, {
    rotation: '180_cw',
    opacity: 0.3,
    ease: Power3.easeOut
  });
};

/***/ })

})
//# sourceMappingURL=index.js.94242beb84fdb112c8b8.hot-update.js.map