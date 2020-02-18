webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
 //const web3 = new Web3(window.web3.currentProvider); //because it isnt accessible to next js// verify by checking on browser then on cmd

var web3;
/*if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
//we are in the browser and metamask is running
web3 = new Web3(window.web3.currentProvider);
 }
else{
  //we are on server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider('ripple dragon mobile bulb follow pill guilt wine memory grace spirit puppy',
  'https://rinkeby.infura.io/v3/fed7fb9fca9b481aaf7c352a63cff737');
  web3 = new Web3(provider);

}
export default web3;*/

if (true) {
  if (window.web3 !== 'undefined') {
    var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('ripple dragon mobile bulb follow pill guilt wine memory grace spirit puppy', 'https://rinkeby.infura.io/v3/fed7fb9fca9b481aaf7c352a63cff737');
    web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
  } else {
    web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.web3.currentProvider);
  }
} else {}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ })

})
//# sourceMappingURL=index.js.0997a2413a7df5e21f5e.hot-update.js.map