/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: Syncopate;\n    font-weight: 700;\n    background-color: rgba(0, 0, 0, 0.801);\n    color: white;\n}\nheader>h1 {\n    text-align: center;\n    font-size: 48px;\n}\n\n.leftBoard, .rightBoard {\n    display: flex;\n    flex-direction: column;\n    margin: 25px;\n    padding: 15px;\n    border-radius: 15px;\n    max-width: 450px;\n}\n\n.boardTitle {\n    font-size: 24px;\n    text-align: center;\n}\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 1px;\n    border-width: 1px;\n    border-style: solid;\n    margin: 20px 0px;\n    width: min-content;\n}\n.boardStatus {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    height: 40px;\n    font-size: 18px;\n}\n.bold {\n    font-weight: 700;\n}\n.regular {\n    font-weight: 400;\n}\n\n.boardHighlight {\n    background-color:hsl(0, 0%, 38%);\n    transition: all 0.2s;\n}\n\n#gameBoardRow {\n    display: flex;\n    justify-content: center;\n}\n\n/* Square */\n\n.square {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: Kanit;\n    font-size: 32px;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    border: 1px solid white;\n}\n.square > img {\n    color:blueviolet;\n    height: 85%;\n    width: 85%;\n}\n.ship {\n    background-color: rgb(11, 84, 145);\n}\n.hit {\n    color: rgb(255, 77, 77);\n    border-color: white;\n} \n.miss {\n    color: white;\n}\n/* Ship Status / Grid */\n.shipStatus {\n    margin-top: 15px;\n    font-size: 14px;\n}\n.shipTitle {\n    margin: 5px 0px;\n}\n.shipSunk {\n    color: hsl(207, 86%, 61%);\n    text-decoration-line:line-through;\n}\n.sunkText {\n    color: red;\n    font-weight: 700;\n}\n\n/* End Game Modal */\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n#endGameContainer {\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.7);\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60%;\n    flex-direction: column;\n    align-items: center;\n    \n}\n#endGameStatus {\n    margin: 10px 0px;\n}\n.restartGame {\n    font-family: inherit;\n    color: inherit;\n    padding: 5px 10px;\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: hsl(0, 0%, 38%);\n    box-shadow: 0px 0px 5px 1px rgb(255, 255, 255);\n}\n.restartGame:hover {\n    cursor: pointer;\n    font-weight: 700;\n    box-shadow: 0px 0px 5px 2px rgb(255, 255, 255);\n}\n.hidden {\n    visibility: collapse;\n    display: none;\n}\n.postModal {\n    display: flex;\n    justify-content: center;\n}\n\n\n@media (max-width: 1000px) {\n    .leftBoard, .rightBoard {\n        margin: 20px;\n    }\n    #gameBoardRow {\n        flex-direction: column;\n        align-items: center;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,sCAAsC;IACtC,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,mCAAmC;IACnC,sCAAsC;IACtC,QAAQ;IACR,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;IAChC,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,UAAU;AACd;AACA;IACI,kCAAkC;AACtC;AACA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA,uBAAuB;AACvB;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,yBAAyB;IACzB,iCAAiC;AACrC;AACA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,sBAAsB;IACtB,mBAAmB;;AAEvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,oBAAoB;IACpB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,iCAAiC;IACjC,8CAA8C;AAClD;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,8CAA8C;AAClD;AACA;IACI,oBAAoB;IACpB,aAAa;AACjB;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;;;AAGA;IACI;QACI,YAAY;IAChB;IACA;QACI,sBAAsB;QACtB,mBAAmB;IACvB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@800&display=swap');\n\nbody {\n    font-family: Syncopate;\n    font-weight: 700;\n    background-color: rgba(0, 0, 0, 0.801);\n    color: white;\n}\nheader>h1 {\n    text-align: center;\n    font-size: 48px;\n}\n\n.leftBoard, .rightBoard {\n    display: flex;\n    flex-direction: column;\n    margin: 25px;\n    padding: 15px;\n    border-radius: 15px;\n    max-width: 450px;\n}\n\n.boardTitle {\n    font-size: 24px;\n    text-align: center;\n}\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 1px;\n    border-width: 1px;\n    border-style: solid;\n    margin: 20px 0px;\n    width: min-content;\n}\n.boardStatus {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    height: 40px;\n    font-size: 18px;\n}\n.bold {\n    font-weight: 700;\n}\n.regular {\n    font-weight: 400;\n}\n\n.boardHighlight {\n    background-color:hsl(0, 0%, 38%);\n    transition: all 0.2s;\n}\n\n#gameBoardRow {\n    display: flex;\n    justify-content: center;\n}\n\n/* Square */\n\n.square {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: Kanit;\n    font-size: 32px;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    border: 1px solid white;\n}\n.square > img {\n    color:blueviolet;\n    height: 85%;\n    width: 85%;\n}\n.ship {\n    background-color: rgb(11, 84, 145);\n}\n.hit {\n    color: rgb(255, 77, 77);\n    border-color: white;\n} \n.miss {\n    color: white;\n}\n/* Ship Status / Grid */\n.shipStatus {\n    margin-top: 15px;\n    font-size: 14px;\n}\n.shipTitle {\n    margin: 5px 0px;\n}\n.shipSunk {\n    color: hsl(207, 86%, 61%);\n    text-decoration-line:line-through;\n}\n.sunkText {\n    color: red;\n    font-weight: 700;\n}\n\n/* End Game Modal */\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n#endGameContainer {\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.7);\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60%;\n    flex-direction: column;\n    align-items: center;\n    \n}\n#endGameStatus {\n    margin: 10px 0px;\n}\n.restartGame {\n    font-family: inherit;\n    color: inherit;\n    padding: 5px 10px;\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: hsl(0, 0%, 38%);\n    box-shadow: 0px 0px 5px 1px rgb(255, 255, 255);\n}\n.restartGame:hover {\n    cursor: pointer;\n    font-weight: 700;\n    box-shadow: 0px 0px 5px 2px rgb(255, 255, 255);\n}\n.hidden {\n    visibility: collapse;\n    display: none;\n}\n.postModal {\n    display: flex;\n    justify-content: center;\n}\n\n\n@media (max-width: 1000px) {\n    .leftBoard, .rightBoard {\n        margin: 20px;\n    }\n    #gameBoardRow {\n        flex-direction: column;\n        align-items: center;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Modules/Control/gameplay-controller.js":
/*!****************************************************!*\
  !*** ./src/Modules/Control/gameplay-controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/dom-helpers */ "./src/Modules/DOM/dom-helpers.js");
/* harmony import */ var _DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/render-dom */ "./src/Modules/DOM/render-dom.js");
/* harmony import */ var _images_Crosshairs_Red_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/Crosshairs_Red.svg */ "./src/images/Crosshairs_Red.svg");
/* harmony import */ var _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/game-objects */ "./src/Modules/Data/game-objects.js");





let _blockUserInput;

function loadCrosshair(event) {
  const targetIcon = new Image();
  targetIcon.src = _images_Crosshairs_Red_svg__WEBPACK_IMPORTED_MODULE_2__;
  targetIcon.classList.add('crosshair');
  event.target.append(targetIcon);
}

function removeCrosshair(event) {
  (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(event.target);
}

function addHoverCrosshairEL() {
  (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.getAllSquares)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass).forEach((square) => {
    square.addEventListener('mouseenter', loadCrosshair);
    square.addEventListener('mouseleave', removeCrosshair);
  });
}

function _removeAttackEventListener(square) {
  square.removeEventListener('mouseenter', loadCrosshair);
  square.removeEventListener('mouseleave', removeCrosshair);
  // eslint-disable-next-line no-use-before-define
  square.removeEventListener('click', _handleAttack);
}

function _endGame(winner) {
  const endMessage =
    winner === _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user
      ? 'You Win! Good job sinking all your opponents ships 😀'
      : 'All your ships were sunk. You lost 🙁';

  (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.getAllSquares)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass).forEach((sq) =>
    _removeAttackEventListener(sq)
  );
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.board, _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, false);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.board, _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, false);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.updateShipsSunk)();
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderModal)(endMessage);
}

function compTurn() {
  const target = _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.player.sendSmartAttack(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.board);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardXY)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.board, target[0], target[1], _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, false);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, ``, 'bold');
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.updateShipsSunk)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.board.getShip(target[0], target[1]), _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user);

  if (_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.board.allSunk()) _endGame(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer);

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.focusBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, `Place your attack!`, 'bold');

  _blockUserInput = false;
}

function userTurn(x, y) {
  _blockUserInput = true;

  _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.board.receiveAttack(x, y);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardXY)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.board, x, y, _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, false);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, ``, 'bold');
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.updateShipsSunk)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.board.getShip(x, y), _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer);

  if (_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.board.allSunk()) _endGame(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user);

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.focusBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.boardClass);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, `Thinking...`, 'bold');

  setTimeout(compTurn, 0); // change to 500 - 2000ms later ( Math.max(500, generateRandInt(2000))) )
}

function _handleAttack(event) {
  if (_blockUserInput) return;

  const square = event.target.closest('.square');
  _removeAttackEventListener(square);
  (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(square);

  userTurn(...(0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.getXYfromElement)(square));
}

function _setupAttackEventListener() {
  (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.getAllSquares)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass).forEach((square) => {
    square.addEventListener('click', _handleAttack);
  });
}

function startGame() {
  _blockUserInput = false;
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.focusBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass);

  addHoverCrosshairEL();
  _setupAttackEventListener();

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.board, _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, false);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.board, _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, false);

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderShipsStatus)();
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, ``, 'bold');
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, `Place your attack!`, 'bold');
}


/***/ }),

/***/ "./src/Modules/Control/setup-controller.js":
/*!*************************************************!*\
  !*** ./src/Modules/Control/setup-controller.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupGame)
/* harmony export */ });
/* harmony import */ var _Factory_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Factory/gameboard */ "./src/Modules/Factory/gameboard.js");
/* harmony import */ var _Factory_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Factory/player */ "./src/Modules/Factory/player.js");
/* harmony import */ var _Factory_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Factory/ship */ "./src/Modules/Factory/ship.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/Modules/constants.js");
/* harmony import */ var _DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DOM/render-dom */ "./src/Modules/DOM/render-dom.js");
/* harmony import */ var _ship_placement_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ship-placement-controller */ "./src/Modules/Control/ship-placement-controller.js");
/* harmony import */ var _Data_game_objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/game-objects */ "./src/Modules/Data/game-objects.js");
/* eslint-disable no-use-before-define */








function _generateShips(shipInfo) {
  const shipArray = [];

  shipInfo.forEach((ship) => {
    shipArray.push((0,_Factory_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(ship.length, ship.name));
  });

  return shipArray;
}

function _setupGameObjects(player1, player2, shipInfo) {
  player1.player = (0,_Factory_player__WEBPACK_IMPORTED_MODULE_1__["default"])(player1.name);
  player2.player = (0,_Factory_player__WEBPACK_IMPORTED_MODULE_1__["default"])(player2.name);

  player1.board = (0,_Factory_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  player2.board = (0,_Factory_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  player1.ships = _generateShips(shipInfo);
  player2.ships = _generateShips(shipInfo);
}

function _setupDOM(player1, player2) {
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.renderGrid)(player1.boardClass);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.renderGrid)(player2.boardClass);

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.renderBoardTitle)(player1.player.getName(), player1.boardClass);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.renderBoardTitle)(player2.player.getName(), player2.boardClass);

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(player1.boardClass, '', 'bold'); // clears any previous board status
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(player2.boardClass, '', 'bold');

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.setupShipsSunk)();
  addClickRestartEL();

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.focusBoard)(player1.boardClass);
}

function addClickRestartEL() {
  document.querySelectorAll('.restartGame').forEach((element) => {
    element.addEventListener('click', _restartGame);
  });
}

function _restartGame() {
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.removeModal)();
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.removeRestartGame)();
  setupGame();
  (0,_ship_placement_controller__WEBPACK_IMPORTED_MODULE_5__["default"])();
}

function setupGame() {
  _setupGameObjects(_Data_game_objects__WEBPACK_IMPORTED_MODULE_6__.user, _Data_game_objects__WEBPACK_IMPORTED_MODULE_6__.computer, _constants__WEBPACK_IMPORTED_MODULE_3__.shipTemplate);
  _setupDOM(_Data_game_objects__WEBPACK_IMPORTED_MODULE_6__.user, _Data_game_objects__WEBPACK_IMPORTED_MODULE_6__.computer);
}


/***/ }),

/***/ "./src/Modules/Control/ship-placement-controller.js":
/*!**********************************************************!*\
  !*** ./src/Modules/Control/ship-placement-controller.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initiateShipPlacement)
/* harmony export */ });
/* harmony import */ var _Data_game_objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Data/game-objects */ "./src/Modules/Data/game-objects.js");
/* harmony import */ var _DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/render-dom */ "./src/Modules/DOM/render-dom.js");
/* harmony import */ var _Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities/helper-functions */ "./src/Modules/Utilities/helper-functions.js");
/* harmony import */ var _DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DOM/dom-helpers */ "./src/Modules/DOM/dom-helpers.js");
/* harmony import */ var _Factory_gameboard_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Factory/gameboard-helpers */ "./src/Modules/Factory/gameboard-helpers.js");
/* harmony import */ var _gameplay_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameplay-controller */ "./src/Modules/Control/gameplay-controller.js");
/* eslint-disable no-use-before-define */







let currentElementsWithEL;

function _placeShipsRandom(player) {
  player.ships.forEach((ship) => {
    const nextVert = (0,_Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_2__.generateRandBool)();
    const validLocations = player.board.getValidShipPlacements(ship, nextVert);
    const [nextX, nextY] = (0,_Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_2__.getRandomItemFromArray)(validLocations);

    player.board.placeShip(ship, nextX, nextY, nextVert);
  });
}

function _removeAllShipPlacementEL() {
  document.removeEventListener('keydown', _handleRotate);

  currentElementsWithEL.forEach((element) => {
    element.removeEventListener('mouseenter', _handleHover);
    element.removeEventListener('mouseleave', _handleHover);
    element.removeEventListener('click', _handleClick);
  });
}

function _handleHover(event) {
  const [x, y] = (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_3__.getXYfromElement)(event.target);
  const currentShip = _Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.ships[_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex];
  const currentVertical = _Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical;

  const arrayCoords = (0,_Factory_gameboard_helpers__WEBPACK_IMPORTED_MODULE_4__.getArrayCoords)(
    currentShip.getLength(),
    x,
    y,
    currentVertical
  );
  const arrayCoordElements = (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_3__.getSquareElements)(arrayCoords, _Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user);
  (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_3__.toggleShip)(arrayCoordElements, event);
}

function _handleRotate(event) {
  if (event.code === 'KeyR') {
    _Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical = !_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical;
    _removeAllShipPlacementEL();
    (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.board, _Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.boardClass, false);
    placeShipsManual(_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user);
  }
}

function _handleClick(event) {
  const [x, y] = (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_3__.getXYfromElement)(event.target);
  const currentShip = _Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.ships[_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex];
  const currentBoard = _Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.board;
  const currentVertical = _Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical;

  currentBoard.placeShip(currentShip, x, y, currentVertical);
  _removeAllShipPlacementEL();
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(currentBoard, _Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.boardClass, false);
  _Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex += 1;

  if (_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.ships[_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex] !== undefined) placeShipsManual(_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user);
  else (0,_gameplay_controller__WEBPACK_IMPORTED_MODULE_5__["default"])();
}

function addRotateShipEL() {
  document.addEventListener('keydown', _handleRotate);
}

function addHoverShipPlaceEL(player, validLocations) {
  const validLocElements = (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_3__.getSquareElements)(validLocations, player);
  currentElementsWithEL = validLocElements;

  validLocElements.forEach((element) => {
    element.addEventListener('mouseenter', _handleHover);
    element.addEventListener('mouseleave', _handleHover);
  });
}

function addClickShipPlaceEL(player, validLocations) {
  const validLocElements = (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_3__.getSquareElements)(validLocations, player);

  validLocElements.forEach((element) => {
    element.addEventListener('click', _handleClick);
  });
}

function placeShipsManual(player) {
  const currentShip = player.ships[player.shipIndex];
  const currentVertical = player.shipVertical;

  const validLocations = player.board.getValidShipPlacements(
    currentShip,
    currentVertical
  );

  addRotateShipEL();
  addHoverShipPlaceEL(player, validLocations);
  addClickShipPlaceEL(player, validLocations);

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(
    player.boardClass,
    `Place ${currentShip.getName()}`,
    'bold'
  );
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(
    player.boardClass,
    `(Press R to rotate ship)`,
    'regular',
    false
  );
}

function initiateShipPlacement() {
  _Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical = true;
  _Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex = 0;

  _placeShipsRandom(_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.computer);
  placeShipsManual(_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user);
}


/***/ }),

/***/ "./src/Modules/DOM/dom-helpers.js":
/*!****************************************!*\
  !*** ./src/Modules/DOM/dom-helpers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSquareElements": () => (/* binding */ getSquareElements),
/* harmony export */   "getXYfromElement": () => (/* binding */ getXYfromElement),
/* harmony export */   "toggleShip": () => (/* binding */ toggleShip),
/* harmony export */   "getAllSquares": () => (/* binding */ getAllSquares),
/* harmony export */   "removeAllChildren": () => (/* binding */ removeAllChildren)
/* harmony export */ });
function getSquareElements(arrayLocations, player) {
  return arrayLocations.map((loc) =>
    document.querySelector(`#${player.boardClass}${loc[0]}${loc[1]}`)
  );
}

function getXYfromElement(element) {
  return [Number(element.id.slice(-2, -1)), Number(element.id.slice(-1))];
}

function toggleShip(arrayElements, event) {
  arrayElements.forEach((element) => {
    if (event.type === 'mouseenter') element.classList.add('ship');
    else element.classList.remove('ship');
  });
}

function getAllSquares(boardClass) {
  return document.querySelectorAll(`.${boardClass} .square`);
}

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}


/***/ }),

/***/ "./src/Modules/DOM/render-dom.js":
/*!***************************************!*\
  !*** ./src/Modules/DOM/render-dom.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderModal": () => (/* binding */ renderModal),
/* harmony export */   "removeModal": () => (/* binding */ removeModal),
/* harmony export */   "removeRestartGame": () => (/* binding */ removeRestartGame),
/* harmony export */   "focusBoard": () => (/* binding */ focusBoard),
/* harmony export */   "renderGrid": () => (/* binding */ renderGrid),
/* harmony export */   "renderBoardTitle": () => (/* binding */ renderBoardTitle),
/* harmony export */   "renderBoardStatus": () => (/* binding */ renderBoardStatus),
/* harmony export */   "setupShipsSunk": () => (/* binding */ setupShipsSunk),
/* harmony export */   "renderShipsStatus": () => (/* binding */ renderShipsStatus),
/* harmony export */   "updateShipsSunk": () => (/* binding */ updateShipsSunk),
/* harmony export */   "renderBoardXY": () => (/* binding */ renderBoardXY),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard)
/* harmony export */ });
/* harmony import */ var _Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/helper-functions */ "./src/Modules/Utilities/helper-functions.js");
/* harmony import */ var _dom_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-helpers */ "./src/Modules/DOM/dom-helpers.js");



function _renderState(board, x, y, locationID) {
  const state = board.getState(x, y);
  if (state !== 'blank') {
    const square = document.querySelector(`#${locationID}`);
    square.classList.add(state);
    square.textContent = state === 'hit' ? 'X' : 'O';
  }
}

function _renderShips(board, x, y, locationID) {
  const square = document.querySelector(`#${locationID}`);
  if (board.getShip(x, y) !== undefined) square.classList.add('ship');
  else square.classList.remove('ship');
}

function _displayModal(event) {
  const modal = document.querySelector('.modal');
  const postModalRestart = document.querySelector('.postModal .restartGame');
  if (event.target === modal) {
    modal.style.display = 'none';
    postModalRestart.classList.remove('hidden');
  }
}

function renderModal(endMessage) {
  const modal = document.querySelector('.modal');
  const modalRestart = modal.querySelector('.restartGame');

  modalRestart.classList.remove('hidden');
  modal.style.display = 'flex';
  document.querySelector('#endGameStatus').textContent = endMessage;

  window.addEventListener('click', _displayModal);
}

function removeModal() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
}

function removeRestartGame() {
  document.querySelectorAll('.restartGame').forEach((element) => {
    element.classList.add('hidden');
  });
}

function focusBoard(boardSide) {
  document
    .querySelectorAll('.leftBoard, .rightBoard')
    .forEach((element) => element.classList.remove('boardHighlight'));
  document.querySelector(`.${boardSide}`).classList.add('boardHighlight');
}

function renderGrid(boardSide) {
  const board = document.querySelector(`.${boardSide} > .board`);
  (0,_dom_helpers__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(board);

  for (let y = 0; y < 10; y += 1) {
    for (let x = 0; x < 10; x += 1) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.id = boardSide + x + y;
      board.append(square);
    }
  }
}

function renderBoardTitle(title, boardSide) {
  const boardTitle = document.querySelector(`.${boardSide} > .boardTitle`);
  boardTitle.textContent = title;
}

function renderBoardStatus(
  boardSide,
  status,
  style,
  clearStatus = true
) {
  const boardStatusContainer = document.querySelector(
    `.${boardSide} > .boardStatus`
  );

  if (clearStatus === true) (0,_dom_helpers__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(boardStatusContainer);

  const boardStatusDIV = document.createElement('div');
  boardStatusDIV.classList.add(style);
  boardStatusDIV.textContent = status;

  boardStatusContainer.append(boardStatusDIV);
}
function setupShipsSunk() {
  document.querySelectorAll('.sunkText, .shipStatus').forEach((element) => {
    element.classList.add('hidden');
  });
  document.querySelectorAll('.shipSunk').forEach((element) => {
    element.classList.remove('shipSunk');
  });
}

function renderShipsStatus() {
  document.querySelectorAll('.shipStatus').forEach((element) => {
    element.classList.remove('hidden');
  });
}
function updateShipsSunk(ship, player) {
  if (ship && ship.isSunk()) {
    const shipSelector = `.${player.boardClass} .${(0,_Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_0__.rmUpCaseWhtSpace)(
      ship.getName()
    )}`;
    const shipSpan = document.querySelector(shipSelector);
    shipSpan.classList.add('shipSunk');

    shipSpan.nextElementSibling.classList.remove('hidden');

    renderBoardStatus(player.boardClass, `${ship.getName()} was sunk!`, 'bold');
  }
}

function renderBoardXY(board, x, y, boardSide, hideShips) {
  const locationID = boardSide + x + y;
  if (hideShips === false) _renderShips(board, x, y, locationID);
  _renderState(board, x, y, locationID);
}

function renderBoard(board, boardSide, hideShips) {
  for (let y = 0; y < 10; y += 1) {
    for (let x = 0; x < 10; x += 1) {
      renderBoardXY(board, x, y, boardSide, hideShips);
    }
  }
}


/***/ }),

/***/ "./src/Modules/Data/game-objects.js":
/*!******************************************!*\
  !*** ./src/Modules/Data/game-objects.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user": () => (/* binding */ user),
/* harmony export */   "computer": () => (/* binding */ computer)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/Modules/constants.js");


const user = { ..._constants__WEBPACK_IMPORTED_MODULE_0__.userConstants };
const computer = { ..._constants__WEBPACK_IMPORTED_MODULE_0__.computerConstants };


/***/ }),

/***/ "./src/Modules/Factory/gameboard-helpers.js":
/*!**************************************************!*\
  !*** ./src/Modules/Factory/gameboard-helpers.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getArrayCoords": () => (/* binding */ getArrayCoords),
/* harmony export */   "coordIsWithinBoard": () => (/* binding */ coordIsWithinBoard),
/* harmony export */   "getLongestBlankX": () => (/* binding */ getLongestBlankX),
/* harmony export */   "getLongestBlankY": () => (/* binding */ getLongestBlankY),
/* harmony export */   "getLongestBlanks": () => (/* binding */ getLongestBlanks)
/* harmony export */ });
function getArrayCoords(shipLength, x, y, isVertical) {
  const arrayCoords = [];

  for (let shipLocation = 0; shipLocation < shipLength; shipLocation += 1) {
    const newX = x + (isVertical === false ? shipLocation : 0);
    const newY = y + (isVertical === true ? shipLocation : 0);
    arrayCoords.push([newX, newY]);
  }
  return arrayCoords;
}

function coordIsWithinBoard(x, y, size) {
  return x >= 0 && x < size && y >= 0 && y < size;
}

function getLongestBlankX(x, y, board) {
  let numberBlanks = 0;
  while (board.isValidAttackLoc(x + numberBlanks, y)) {
    numberBlanks += 1;
  }
  return numberBlanks;
}

function getLongestBlankY(x, y, board) {
  let numberBlanks = 0;
  while (board.isValidAttackLoc(x, y + numberBlanks)) {
    numberBlanks += 1;
  }
  return numberBlanks;
}

function getLongestBlanks(board) {
  let longestBlanks = [];
  let currentLongest = 0;

  for (let y = 0; y < 10; y += 1) {
    for (let x = 0; x < 10; x += 1) {
      const lengthX = getLongestBlankX(x, y, board);
      const lengthY = getLongestBlankY(x, y, board);

      if (lengthX > lengthY && lengthX >= currentLongest) {
        if (lengthX > currentLongest) longestBlanks = [];
        longestBlanks.push([Math.floor(x + lengthX / 2), y]);
        currentLongest = lengthX;
      } else if (lengthY > lengthX && lengthY >= currentLongest) {
        if (lengthY > currentLongest) longestBlanks = [];
        longestBlanks.push([x, Math.floor(y + lengthY / 2)]);
        currentLongest = lengthY;
      } else if (lengthY === lengthX && lengthX >= currentLongest) {
        if (lengthX > currentLongest) longestBlanks = [];
        longestBlanks.push(
          [Math.floor(x + lengthX / 2), y],
          [x, Math.floor(y + lengthY / 2)]
        );
        currentLongest = lengthX;
      }
    }
  }

  return longestBlanks;
}


/***/ }),

/***/ "./src/Modules/Factory/gameboard.js":
/*!******************************************!*\
  !*** ./src/Modules/Factory/gameboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/helper-functions */ "./src/Modules/Utilities/helper-functions.js");
/* harmony import */ var _gameboard_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard-helpers */ "./src/Modules/Factory/gameboard-helpers.js");



function Gameboard() {
  const _size = 10;
  // eslint-disable-next-line unicorn/no-new-array
  const _board = [...new Array(_size)].map(() => new Array(_size));
  const _ships = [];

  for (let x = 0; x < _size; x += 1) {
    for (let y = 0; y < _size; y += 1) {
      _board[x][y] = {
        ship: undefined,
        state: 'blank',
      };
    }
  }

  function getState(x, y) {
    return _board[x][y].state;
  }

  function getShip(x, y) {
    return _board[x][y].ship;
  }

  function getAvailableTargets() {
    const targets = [];
    for (let x = 0; x < _size; x += 1) {
      for (let y = 0; y < _size; y += 1) {
        if (getState(x, y) === 'blank') targets.push([x, y]);
      }
    }
    return targets;
  }

  function getQtySunk() {
    return _ships.reduce(
      (previous, current) => previous + (current.isSunk() ? 1 : 0),
      0
    );
  }

  function allSunk() {
    if (_ships.length === 0) return false;

    return _ships.every((ship) => ship.isSunk());
  }

  function isValidPlacement(shipLength, x, y, isVertical) {
    return (0,_gameboard_helpers__WEBPACK_IMPORTED_MODULE_1__.getArrayCoords)(shipLength, x, y, isVertical).every(
      (xyCoords) =>
        (0,_gameboard_helpers__WEBPACK_IMPORTED_MODULE_1__.coordIsWithinBoard)(...xyCoords, _size) &&
        getShip(...xyCoords) === undefined
    );
  }

  function getValidShipPlacements(ship, isVertical) {
    const validLocations = [];

    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        if (isValidPlacement(ship.getLength(), x, y, isVertical)) {
          validLocations.push([x, y]);
        }
      }
    }

    return validLocations;
  }

  function placeShip(ship, x, y, isVertical) {
    if (isValidPlacement(ship.getLength(), x, y, isVertical)) {
      (0,_gameboard_helpers__WEBPACK_IMPORTED_MODULE_1__.getArrayCoords)(ship.getLength(), x, y, isVertical).forEach((xyCoords) => {
        _board[xyCoords[0]][xyCoords[1]].ship = ship;
      });
      _ships.push(ship);

      return true;
    }
    return false;
  }

  function isValidAttackLoc(x, y) {
    return (0,_gameboard_helpers__WEBPACK_IMPORTED_MODULE_1__.coordIsWithinBoard)(x, y, _size) && getState(x, y) === 'blank';
  }

  function receiveAttack(x, y) {
    if (!isValidAttackLoc(x, y)) return false;

    if (getShip(x, y) !== undefined) {
      getShip(x, y).hit([x, y]);
      _board[x][y].state = 'hit';
    } else {
      _board[x][y].state = 'miss';
    }
    return true;
  }

  function getBlankNeighbors(x, y) {
    return [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ].filter((neighbor) => isValidAttackLoc(...neighbor));
    // DELETE IF NO ISSUES
    // const _validBlanks = [];

    // for (let i = -1; i < 2; i += 2) {
    //   const newX = x + i;
    //   const newY = y;
    //   if (isValidAttackLoc(newX, newY)) _validBlanks.push([newX, newY]);
    // }

    // for (let i = -1; i < 2; i += 2) {
    //   const newX = x;
    //   const newY = y + i;
    //   if (isValidAttackLoc(newX, newY)) _validBlanks.push([newX, newY]);
    // }

    // return _validBlanks;
  }

  function getRandomBlankNeighbor(loc) {
    // DELETE IF NO ISSUES
    // const blankNeighbors = getBlankNeighbors(...loc);
    // if (blankNeighbors.length === 0) return [];
    // return getRandomItemFromArray(getBlankNeighbors(...loc));

    return getBlankNeighbors(...loc).length === 0
      ? []
      : (0,_Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomItemFromArray)(getBlankNeighbors(...loc));
  }

  return {
    getState,
    getShip,
    getAvailableTargets,
    getQtySunk,
    allSunk,
    isValidPlacement,
    getValidShipPlacements,
    placeShip,
    isValidAttackLoc,
    receiveAttack,
    getBlankNeighbors,
    getRandomBlankNeighbor,
  };
}


/***/ }),

/***/ "./src/Modules/Factory/player-helpers.js":
/*!***********************************************!*\
  !*** ./src/Modules/Factory/player-helpers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendLongestBlankAttack": () => (/* binding */ sendLongestBlankAttack),
/* harmony export */   "sendRandomAttack": () => (/* binding */ sendRandomAttack),
/* harmony export */   "getNextLinearAttack": () => (/* binding */ getNextLinearAttack)
/* harmony export */ });
/* harmony import */ var _Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/helper-functions */ "./src/Modules/Utilities/helper-functions.js");
/* harmony import */ var _gameboard_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard-helpers */ "./src/Modules/Factory/gameboard-helpers.js");



function sendLongestBlankAttack(board) {
  const longestBlanks = (0,_gameboard_helpers__WEBPACK_IMPORTED_MODULE_1__.getLongestBlanks)(board);
  const [nextX, nextY] = (0,_Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomItemFromArray)(longestBlanks);
  const isValidAttack = board.receiveAttack(nextX, nextY);

  return [isValidAttack, [nextX, nextY]];
}

function sendRandomAttack(board) {
  const [nextX, nextY] = (0,_Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomItemFromArray)(board.getAvailableTargets());
  const isValidAttack = board.receiveAttack(nextX, nextY);

  return [isValidAttack, [nextX, nextY]];
}

function getNextLinearAttack([[x1, y1], [x2, y2]]) {
  const nextX = x1 === x2 ? x1 : x2 + Math.sign(x2 - x1);
  const nextY = y1 === y2 ? y1 : y2 + Math.sign(y2 - y1);

  return [nextX, nextY];
}


/***/ }),

/***/ "./src/Modules/Factory/player.js":
/*!***************************************!*\
  !*** ./src/Modules/Factory/player.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/helper-functions */ "./src/Modules/Utilities/helper-functions.js");
/* harmony import */ var _player_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-helpers */ "./src/Modules/Factory/player-helpers.js");



function Player(name) {
  let _name = name;
  let _previousHits = [];

  function getName() {
    return _name;
  }

  function setName(newName) {
    _name = newName;
  }

  function _updatePreviousHits(x, y, board) {
    const targetShip = board.getShip(x, y);

    if (board.getState(x, y) === 'hit') _previousHits.push([x, y]);

    if (targetShip && targetShip.isSunk()) {
      _previousHits = (0,_Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_0__.removeArrayfromNestedArray)(
        _previousHits,
        targetShip.getHitLocations()
      );
    }
  }

  function _attackPreviousHits(board) {
    for (let index = 0; index < _previousHits.length; index += 1) {
      const loc = _previousHits[index];

      if (board.getRandomBlankNeighbor(loc).length > 0) {
        const [nextX, nextY] = board.getRandomBlankNeighbor(loc);
        board.receiveAttack(nextX, nextY);

        if (board.getState(nextX, nextY) === 'hit') {
          _previousHits.push(loc, [nextX, nextY]);
          _previousHits.splice(index, 1);
        }
        return [nextX, nextY];
      }
    }
    return (0,_player_helpers__WEBPACK_IMPORTED_MODULE_1__.sendLongestBlankAttack)(board)[1];
  }

  function sendSmartAttack(board) {
    let nextX;
    let nextY;

    if (_previousHits.length === 0) {
      [, [nextX, nextY]] = (0,_player_helpers__WEBPACK_IMPORTED_MODULE_1__.sendLongestBlankAttack)(board);
    } else if (_previousHits.length === 1) {
      [nextX, nextY] = board.getRandomBlankNeighbor(_previousHits[0]);
      board.receiveAttack(nextX, nextY);
    } else {
      [nextX, nextY] = (0,_player_helpers__WEBPACK_IMPORTED_MODULE_1__.getNextLinearAttack)(_previousHits.slice(-2));

      if (!board.isValidAttackLoc(nextX, nextY)) {
        [nextX, nextY] = (0,_player_helpers__WEBPACK_IMPORTED_MODULE_1__.getNextLinearAttack)(
          _previousHits.slice(0, 2).reverse()
        );
      }

      if (!board.isValidAttackLoc(nextX, nextY))
        return _attackPreviousHits(board);

      board.receiveAttack(nextX, nextY);
    }
    _updatePreviousHits(nextX, nextY, board);
    return [nextX, nextY];
  }

  return {
    getName,
    setName,
    sendSmartAttack,
  };
}


/***/ }),

/***/ "./src/Modules/Factory/ship.js":
/*!*************************************!*\
  !*** ./src/Modules/Factory/ship.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length, name) {
  let _name = name;
  let _length = length;
  if (length <= 0 || length > 10)
    throw new Error('Length must be greater than 0 and less than 11');

  const _hitLocation = [];

  function hit(location) {
    _hitLocation.push(location);
  }

  function getName() {
    return _name;
  }

  function getHitLocations() {
    return _hitLocation;
  }

  function setName(newName) {
    _name = newName;
  }

  function getLength() {
    return _length;
  }

  function setLength(number) {
    _length = number;
  }

  function isSunk() {
    return _hitLocation.length === length;
  }

  return {
    hit,
    getName,
    setName,
    getLength,
    setLength,
    isSunk,
    getHitLocations,
  };
}


/***/ }),

/***/ "./src/Modules/Utilities/helper-functions.js":
/*!***************************************************!*\
  !*** ./src/Modules/Utilities/helper-functions.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateRandInt": () => (/* binding */ generateRandInt),
/* harmony export */   "generateRandBool": () => (/* binding */ generateRandBool),
/* harmony export */   "getRandomItemFromArray": () => (/* binding */ getRandomItemFromArray),
/* harmony export */   "arrayEquals": () => (/* binding */ arrayEquals),
/* harmony export */   "removeArrayfromNestedArray": () => (/* binding */ removeArrayfromNestedArray),
/* harmony export */   "rmUpCaseWhtSpace": () => (/* binding */ rmUpCaseWhtSpace)
/* harmony export */ });
function generateRandInt(upperBound) {
  return Math.floor(Math.random() * upperBound);
}

function generateRandBool() {
  return [true, false][generateRandInt(2)];
}

function getRandomItemFromArray(array) {
  return array[generateRandInt(array.length)];
}

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((value, index) => value === b[index])
  );
}

function removeArrayfromNestedArray(nested, toRemove) {
  return nested.filter((item1) =>
    toRemove.every((item2) => !arrayEquals(item1, item2))
  );
}

function rmUpCaseWhtSpace(string) {
  return string.toLowerCase().split(' ').join('');
}


/***/ }),

/***/ "./src/Modules/constants.js":
/*!**********************************!*\
  !*** ./src/Modules/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipTemplate": () => (/* binding */ shipTemplate),
/* harmony export */   "userConstants": () => (/* binding */ userConstants),
/* harmony export */   "computerConstants": () => (/* binding */ computerConstants)
/* harmony export */ });
const shipTemplate = [
  { length: 5, name: 'Carrier' },
  { length: 4, name: 'Battleship' },
  { length: 3, name: 'Destroyer' },
  { length: 3, name: 'Submarine' },
  { length: 2, name: 'Patrol Boat' },
];

const userConstants = {
  name: 'Friendly Seas',
  boardClass: 'leftBoard',
};

const computerConstants = {
  name: 'Enemy Seas',
  boardClass: 'rightBoard',
};


/***/ }),

/***/ "./src/images/Crosshairs_Red.svg":
/*!***************************************!*\
  !*** ./src/images/Crosshairs_Red.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "664c6356d65867ba071e.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Modules_Control_setup_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/Control/setup-controller */ "./src/Modules/Control/setup-controller.js");
/* harmony import */ var _Modules_Control_ship_placement_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/Control/ship-placement-controller */ "./src/Modules/Control/ship-placement-controller.js");




(0,_Modules_Control_setup_controller__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_Modules_Control_ship_placement_controller__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDc0M7QUFDcUI7O0FBRWhGLDZFQUFTO0FBQ1Qsc0ZBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvQ29udHJvbC9nYW1lcGxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9Db250cm9sL3NldHVwLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0NvbnRyb2wvc2hpcC1wbGFjZW1lbnQtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvRE9NL2RvbS1oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9ET00vcmVuZGVyLWRvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvRGF0YS9nYW1lLW9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0ZhY3RvcnkvZ2FtZWJvYXJkLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0ZhY3RvcnkvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9GYWN0b3J5L3BsYXllci1oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9GYWN0b3J5L3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvRmFjdG9yeS9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9VdGlsaXRpZXMvaGVscGVyLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TeW5jb3BhdGU6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0OndnaHRAODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODAxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXI+aDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLmxlZnRCb2FyZCwgLnJpZ2h0Qm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDI1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbi5ib2FyZFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbi5ib2FyZFN0YXR1cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uYm9sZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5yZWd1bGFyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmJvYXJkSGlnaGxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDM4JSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4jZ2FtZUJvYXJkUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIFNxdWFyZSAqL1xcblxcbi5zcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEthbml0O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uc3F1YXJlID4gaW1nIHtcXG4gICAgY29sb3I6Ymx1ZXZpb2xldDtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCA4NCwgMTQ1KTtcXG59XFxuLmhpdCB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCA3NywgNzcpO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn0gXFxuLm1pc3Mge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi8qIFNoaXAgU3RhdHVzIC8gR3JpZCAqL1xcbi5zaGlwU3RhdHVzIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc2hpcFRpdGxlIHtcXG4gICAgbWFyZ2luOiA1cHggMHB4O1xcbn1cXG4uc2hpcFN1bmsge1xcbiAgICBjb2xvcjogaHNsKDIwNywgODYlLCA2MSUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTpsaW5lLXRocm91Z2g7XFxufVxcbi5zdW5rVGV4dCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8qIEVuZCBHYW1lIE1vZGFsICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbiNlbmRHYW1lQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4jZW5kR2FtZVN0YXR1cyB7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxufVxcbi5yZXN0YXJ0R2FtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDM4JSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5yZXN0YXJ0R2FtZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucG9zdE1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmxlZnRCb2FyZCwgLnJpZ2h0Qm9hcmQge1xcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xcbiAgICB9XFxuICAgICNnYW1lQm9hcmRSb3cge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBLHVCQUF1QjtBQUN2QjtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3luY29wYXRlOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdDp3Z2h0QDgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwMSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuaGVhZGVyPmgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5sZWZ0Qm9hcmQsIC5yaWdodEJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbn1cXG5cXG4uYm9hcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMXB4O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG4uYm9hcmRTdGF0dXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmJvbGQge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ucmVndWxhciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5ib2FyZEhpZ2hsaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDAsIDAlLCAzOCUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuI2dhbWVCb2FyZFJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBTcXVhcmUgKi9cXG5cXG4uc3F1YXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBLYW5pdDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnNxdWFyZSA+IGltZyB7XFxuICAgIGNvbG9yOmJsdWV2aW9sZXQ7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgODQsIDE0NSk7XFxufVxcbi5oaXQge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgNzcsIDc3KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59IFxcbi5taXNzIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBTaGlwIFN0YXR1cyAvIEdyaWQgKi9cXG4uc2hpcFN0YXR1cyB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnNoaXBUaXRsZSB7XFxuICAgIG1hcmdpbjogNXB4IDBweDtcXG59XFxuLnNoaXBTdW5rIHtcXG4gICAgY29sb3I6IGhzbCgyMDcsIDg2JSwgNjElKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6bGluZS10aHJvdWdoO1xcbn1cXG4uc3Vua1RleHQge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBFbmQgR2FtZSBNb2RhbCAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4jZW5kR2FtZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuI2VuZEdhbWVTdGF0dXMge1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG4ucmVzdGFydEdhbWUge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAzOCUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4ucmVzdGFydEdhbWU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnBvc3RNb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5sZWZ0Qm9hcmQsIC5yaWdodEJvYXJkIHtcXG4gICAgICAgIG1hcmdpbjogMjBweDtcXG4gICAgfVxcbiAgICAjZ2FtZUJvYXJkUm93IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgZ2V0QWxsU3F1YXJlcyxcbiAgZ2V0WFlmcm9tRWxlbWVudCxcbiAgcmVtb3ZlQWxsQ2hpbGRyZW4sXG59IGZyb20gJy4uL0RPTS9kb20taGVscGVycyc7XG5pbXBvcnQge1xuICBmb2N1c0JvYXJkLFxuICByZW5kZXJCb2FyZCxcbiAgcmVuZGVyQm9hcmRTdGF0dXMsXG4gIHJlbmRlckJvYXJkWFksXG4gIHJlbmRlck1vZGFsLFxuICByZW5kZXJTaGlwc1N0YXR1cyxcbiAgdXBkYXRlU2hpcHNTdW5rLFxufSBmcm9tICcuLi9ET00vcmVuZGVyLWRvbSc7XG5pbXBvcnQgY3Jvc3NoYWlyIGZyb20gJy4uLy4uL2ltYWdlcy9Dcm9zc2hhaXJzX1JlZC5zdmcnO1xuaW1wb3J0IHsgY29tcHV0ZXIsIHVzZXIgfSBmcm9tICcuLi9EYXRhL2dhbWUtb2JqZWN0cyc7XG5cbmxldCBfYmxvY2tVc2VySW5wdXQ7XG5cbmZ1bmN0aW9uIGxvYWRDcm9zc2hhaXIoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICB0YXJnZXRJY29uLnNyYyA9IGNyb3NzaGFpcjtcbiAgdGFyZ2V0SWNvbi5jbGFzc0xpc3QuYWRkKCdjcm9zc2hhaXInKTtcbiAgZXZlbnQudGFyZ2V0LmFwcGVuZCh0YXJnZXRJY29uKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ3Jvc3NoYWlyKGV2ZW50KSB7XG4gIHJlbW92ZUFsbENoaWxkcmVuKGV2ZW50LnRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIGFkZEhvdmVyQ3Jvc3NoYWlyRUwoKSB7XG4gIGdldEFsbFNxdWFyZXMoY29tcHV0ZXIuYm9hcmRDbGFzcykuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBsb2FkQ3Jvc3NoYWlyKTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJlbW92ZUNyb3NzaGFpcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlQXR0YWNrRXZlbnRMaXN0ZW5lcihzcXVhcmUpIHtcbiAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBsb2FkQ3Jvc3NoYWlyKTtcbiAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZW1vdmVDcm9zc2hhaXIpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2hhbmRsZUF0dGFjayk7XG59XG5cbmZ1bmN0aW9uIF9lbmRHYW1lKHdpbm5lcikge1xuICBjb25zdCBlbmRNZXNzYWdlID1cbiAgICB3aW5uZXIgPT09IHVzZXJcbiAgICAgID8gJ1lvdSBXaW4hIEdvb2Qgam9iIHNpbmtpbmcgYWxsIHlvdXIgb3Bwb25lbnRzIHNoaXBzIPCfmIAnXG4gICAgICA6ICdBbGwgeW91ciBzaGlwcyB3ZXJlIHN1bmsuIFlvdSBsb3N0IPCfmYEnO1xuXG4gIGdldEFsbFNxdWFyZXMoY29tcHV0ZXIuYm9hcmRDbGFzcykuZm9yRWFjaCgoc3EpID0+XG4gICAgX3JlbW92ZUF0dGFja0V2ZW50TGlzdGVuZXIoc3EpXG4gICk7XG4gIHJlbmRlckJvYXJkKHVzZXIuYm9hcmQsIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICByZW5kZXJCb2FyZChjb21wdXRlci5ib2FyZCwgY29tcHV0ZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICB1cGRhdGVTaGlwc1N1bmsoKTtcbiAgcmVuZGVyTW9kYWwoZW5kTWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBUdXJuKCkge1xuICBjb25zdCB0YXJnZXQgPSBjb21wdXRlci5wbGF5ZXIuc2VuZFNtYXJ0QXR0YWNrKHVzZXIuYm9hcmQpO1xuICByZW5kZXJCb2FyZFhZKHVzZXIuYm9hcmQsIHRhcmdldFswXSwgdGFyZ2V0WzFdLCB1c2VyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcbiAgcmVuZGVyQm9hcmRTdGF0dXModXNlci5ib2FyZENsYXNzLCBgYCwgJ2JvbGQnKTtcbiAgdXBkYXRlU2hpcHNTdW5rKHVzZXIuYm9hcmQuZ2V0U2hpcCh0YXJnZXRbMF0sIHRhcmdldFsxXSksIHVzZXIpO1xuXG4gIGlmICh1c2VyLmJvYXJkLmFsbFN1bmsoKSkgX2VuZEdhbWUoY29tcHV0ZXIpO1xuXG4gIGZvY3VzQm9hcmQoY29tcHV0ZXIuYm9hcmRDbGFzcyk7XG4gIHJlbmRlckJvYXJkU3RhdHVzKGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGBQbGFjZSB5b3VyIGF0dGFjayFgLCAnYm9sZCcpO1xuXG4gIF9ibG9ja1VzZXJJbnB1dCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiB1c2VyVHVybih4LCB5KSB7XG4gIF9ibG9ja1VzZXJJbnB1dCA9IHRydWU7XG5cbiAgY29tcHV0ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgcmVuZGVyQm9hcmRYWShjb21wdXRlci5ib2FyZCwgeCwgeSwgY29tcHV0ZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICByZW5kZXJCb2FyZFN0YXR1cyhjb21wdXRlci5ib2FyZENsYXNzLCBgYCwgJ2JvbGQnKTtcbiAgdXBkYXRlU2hpcHNTdW5rKGNvbXB1dGVyLmJvYXJkLmdldFNoaXAoeCwgeSksIGNvbXB1dGVyKTtcblxuICBpZiAoY29tcHV0ZXIuYm9hcmQuYWxsU3VuaygpKSBfZW5kR2FtZSh1c2VyKTtcblxuICBmb2N1c0JvYXJkKHVzZXIuYm9hcmRDbGFzcyk7XG4gIHJlbmRlckJvYXJkU3RhdHVzKHVzZXIuYm9hcmRDbGFzcywgYFRoaW5raW5nLi4uYCwgJ2JvbGQnKTtcblxuICBzZXRUaW1lb3V0KGNvbXBUdXJuLCAwKTsgLy8gY2hhbmdlIHRvIDUwMCAtIDIwMDBtcyBsYXRlciAoIE1hdGgubWF4KDUwMCwgZ2VuZXJhdGVSYW5kSW50KDIwMDApKSkgKVxufVxuXG5mdW5jdGlvbiBfaGFuZGxlQXR0YWNrKGV2ZW50KSB7XG4gIGlmIChfYmxvY2tVc2VySW5wdXQpIHJldHVybjtcblxuICBjb25zdCBzcXVhcmUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNxdWFyZScpO1xuICBfcmVtb3ZlQXR0YWNrRXZlbnRMaXN0ZW5lcihzcXVhcmUpO1xuICByZW1vdmVBbGxDaGlsZHJlbihzcXVhcmUpO1xuXG4gIHVzZXJUdXJuKC4uLmdldFhZZnJvbUVsZW1lbnQoc3F1YXJlKSk7XG59XG5cbmZ1bmN0aW9uIF9zZXR1cEF0dGFja0V2ZW50TGlzdGVuZXIoKSB7XG4gIGdldEFsbFNxdWFyZXMoY29tcHV0ZXIuYm9hcmRDbGFzcykuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2hhbmRsZUF0dGFjayk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIF9ibG9ja1VzZXJJbnB1dCA9IGZhbHNlO1xuICBmb2N1c0JvYXJkKGNvbXB1dGVyLmJvYXJkQ2xhc3MpO1xuXG4gIGFkZEhvdmVyQ3Jvc3NoYWlyRUwoKTtcbiAgX3NldHVwQXR0YWNrRXZlbnRMaXN0ZW5lcigpO1xuXG4gIHJlbmRlckJvYXJkKHVzZXIuYm9hcmQsIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICByZW5kZXJCb2FyZChjb21wdXRlci5ib2FyZCwgY29tcHV0ZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuXG4gIHJlbmRlclNoaXBzU3RhdHVzKCk7XG4gIHJlbmRlckJvYXJkU3RhdHVzKHVzZXIuYm9hcmRDbGFzcywgYGAsICdib2xkJyk7XG4gIHJlbmRlckJvYXJkU3RhdHVzKGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGBQbGFjZSB5b3VyIGF0dGFjayFgLCAnYm9sZCcpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vRmFjdG9yeS9nYW1lYm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9GYWN0b3J5L3BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuLi9GYWN0b3J5L3NoaXAnO1xuaW1wb3J0IHsgc2hpcFRlbXBsYXRlIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIHJlbmRlckdyaWQsXG4gIHJlbmRlckJvYXJkVGl0bGUsXG4gIHJlbmRlckJvYXJkU3RhdHVzLFxuICBmb2N1c0JvYXJkLFxuICBzZXR1cFNoaXBzU3VuayxcbiAgcmVtb3ZlTW9kYWwsXG4gIHJlbW92ZVJlc3RhcnRHYW1lLFxufSBmcm9tICcuLi9ET00vcmVuZGVyLWRvbSc7XG5pbXBvcnQgaW5pdGlhdGVTaGlwUGxhY2VtZW50IGZyb20gJy4vc2hpcC1wbGFjZW1lbnQtY29udHJvbGxlcic7XG5pbXBvcnQgeyB1c2VyLCBjb21wdXRlciB9IGZyb20gJy4uL0RhdGEvZ2FtZS1vYmplY3RzJztcblxuZnVuY3Rpb24gX2dlbmVyYXRlU2hpcHMoc2hpcEluZm8pIHtcbiAgY29uc3Qgc2hpcEFycmF5ID0gW107XG5cbiAgc2hpcEluZm8uZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXBBcnJheS5wdXNoKFNoaXAoc2hpcC5sZW5ndGgsIHNoaXAubmFtZSkpO1xuICB9KTtcblxuICByZXR1cm4gc2hpcEFycmF5O1xufVxuXG5mdW5jdGlvbiBfc2V0dXBHYW1lT2JqZWN0cyhwbGF5ZXIxLCBwbGF5ZXIyLCBzaGlwSW5mbykge1xuICBwbGF5ZXIxLnBsYXllciA9IFBsYXllcihwbGF5ZXIxLm5hbWUpO1xuICBwbGF5ZXIyLnBsYXllciA9IFBsYXllcihwbGF5ZXIyLm5hbWUpO1xuXG4gIHBsYXllcjEuYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgcGxheWVyMi5ib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIHBsYXllcjEuc2hpcHMgPSBfZ2VuZXJhdGVTaGlwcyhzaGlwSW5mbyk7XG4gIHBsYXllcjIuc2hpcHMgPSBfZ2VuZXJhdGVTaGlwcyhzaGlwSW5mbyk7XG59XG5cbmZ1bmN0aW9uIF9zZXR1cERPTShwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gIHJlbmRlckdyaWQocGxheWVyMS5ib2FyZENsYXNzKTtcbiAgcmVuZGVyR3JpZChwbGF5ZXIyLmJvYXJkQ2xhc3MpO1xuXG4gIHJlbmRlckJvYXJkVGl0bGUocGxheWVyMS5wbGF5ZXIuZ2V0TmFtZSgpLCBwbGF5ZXIxLmJvYXJkQ2xhc3MpO1xuICByZW5kZXJCb2FyZFRpdGxlKHBsYXllcjIucGxheWVyLmdldE5hbWUoKSwgcGxheWVyMi5ib2FyZENsYXNzKTtcblxuICByZW5kZXJCb2FyZFN0YXR1cyhwbGF5ZXIxLmJvYXJkQ2xhc3MsICcnLCAnYm9sZCcpOyAvLyBjbGVhcnMgYW55IHByZXZpb3VzIGJvYXJkIHN0YXR1c1xuICByZW5kZXJCb2FyZFN0YXR1cyhwbGF5ZXIyLmJvYXJkQ2xhc3MsICcnLCAnYm9sZCcpO1xuXG4gIHNldHVwU2hpcHNTdW5rKCk7XG4gIGFkZENsaWNrUmVzdGFydEVMKCk7XG5cbiAgZm9jdXNCb2FyZChwbGF5ZXIxLmJvYXJkQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGlja1Jlc3RhcnRFTCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhcnRHYW1lJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfcmVzdGFydEdhbWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX3Jlc3RhcnRHYW1lKCkge1xuICByZW1vdmVNb2RhbCgpO1xuICByZW1vdmVSZXN0YXJ0R2FtZSgpO1xuICBzZXR1cEdhbWUoKTtcbiAgaW5pdGlhdGVTaGlwUGxhY2VtZW50KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwR2FtZSgpIHtcbiAgX3NldHVwR2FtZU9iamVjdHModXNlciwgY29tcHV0ZXIsIHNoaXBUZW1wbGF0ZSk7XG4gIF9zZXR1cERPTSh1c2VyLCBjb21wdXRlcik7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IHsgY29tcHV0ZXIsIHVzZXIgfSBmcm9tICcuLi9EYXRhL2dhbWUtb2JqZWN0cyc7XG5pbXBvcnQgeyByZW5kZXJCb2FyZCwgcmVuZGVyQm9hcmRTdGF0dXMgfSBmcm9tICcuLi9ET00vcmVuZGVyLWRvbSc7XG5pbXBvcnQge1xuICBnZW5lcmF0ZVJhbmRCb29sLFxuICBnZXRSYW5kb21JdGVtRnJvbUFycmF5LFxufSBmcm9tICcuLi9VdGlsaXRpZXMvaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQge1xuICBnZXRTcXVhcmVFbGVtZW50cyxcbiAgZ2V0WFlmcm9tRWxlbWVudCxcbiAgdG9nZ2xlU2hpcCxcbn0gZnJvbSAnLi4vRE9NL2RvbS1oZWxwZXJzJztcbmltcG9ydCB7IGdldEFycmF5Q29vcmRzIH0gZnJvbSAnLi4vRmFjdG9yeS9nYW1lYm9hcmQtaGVscGVycyc7XG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gJy4vZ2FtZXBsYXktY29udHJvbGxlcic7XG5cbmxldCBjdXJyZW50RWxlbWVudHNXaXRoRUw7XG5cbmZ1bmN0aW9uIF9wbGFjZVNoaXBzUmFuZG9tKHBsYXllcikge1xuICBwbGF5ZXIuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IG5leHRWZXJ0ID0gZ2VuZXJhdGVSYW5kQm9vbCgpO1xuICAgIGNvbnN0IHZhbGlkTG9jYXRpb25zID0gcGxheWVyLmJvYXJkLmdldFZhbGlkU2hpcFBsYWNlbWVudHMoc2hpcCwgbmV4dFZlcnQpO1xuICAgIGNvbnN0IFtuZXh0WCwgbmV4dFldID0gZ2V0UmFuZG9tSXRlbUZyb21BcnJheSh2YWxpZExvY2F0aW9ucyk7XG5cbiAgICBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHNoaXAsIG5leHRYLCBuZXh0WSwgbmV4dFZlcnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZUFsbFNoaXBQbGFjZW1lbnRFTCgpIHtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIF9oYW5kbGVSb3RhdGUpO1xuXG4gIGN1cnJlbnRFbGVtZW50c1dpdGhFTC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX2hhbmRsZUhvdmVyKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfaGFuZGxlSG92ZXIpO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlQ2xpY2spO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX2hhbmRsZUhvdmVyKGV2ZW50KSB7XG4gIGNvbnN0IFt4LCB5XSA9IGdldFhZZnJvbUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgY29uc3QgY3VycmVudFNoaXAgPSB1c2VyLnNoaXBzW3VzZXIuc2hpcEluZGV4XTtcbiAgY29uc3QgY3VycmVudFZlcnRpY2FsID0gdXNlci5zaGlwVmVydGljYWw7XG5cbiAgY29uc3QgYXJyYXlDb29yZHMgPSBnZXRBcnJheUNvb3JkcyhcbiAgICBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKSxcbiAgICB4LFxuICAgIHksXG4gICAgY3VycmVudFZlcnRpY2FsXG4gICk7XG4gIGNvbnN0IGFycmF5Q29vcmRFbGVtZW50cyA9IGdldFNxdWFyZUVsZW1lbnRzKGFycmF5Q29vcmRzLCB1c2VyKTtcbiAgdG9nZ2xlU2hpcChhcnJheUNvb3JkRWxlbWVudHMsIGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gX2hhbmRsZVJvdGF0ZShldmVudCkge1xuICBpZiAoZXZlbnQuY29kZSA9PT0gJ0tleVInKSB7XG4gICAgdXNlci5zaGlwVmVydGljYWwgPSAhdXNlci5zaGlwVmVydGljYWw7XG4gICAgX3JlbW92ZUFsbFNoaXBQbGFjZW1lbnRFTCgpO1xuICAgIHJlbmRlckJvYXJkKHVzZXIuYm9hcmQsIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICAgIHBsYWNlU2hpcHNNYW51YWwodXNlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2hhbmRsZUNsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IFt4LCB5XSA9IGdldFhZZnJvbUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgY29uc3QgY3VycmVudFNoaXAgPSB1c2VyLnNoaXBzW3VzZXIuc2hpcEluZGV4XTtcbiAgY29uc3QgY3VycmVudEJvYXJkID0gdXNlci5ib2FyZDtcbiAgY29uc3QgY3VycmVudFZlcnRpY2FsID0gdXNlci5zaGlwVmVydGljYWw7XG5cbiAgY3VycmVudEJvYXJkLnBsYWNlU2hpcChjdXJyZW50U2hpcCwgeCwgeSwgY3VycmVudFZlcnRpY2FsKTtcbiAgX3JlbW92ZUFsbFNoaXBQbGFjZW1lbnRFTCgpO1xuICByZW5kZXJCb2FyZChjdXJyZW50Qm9hcmQsIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICB1c2VyLnNoaXBJbmRleCArPSAxO1xuXG4gIGlmICh1c2VyLnNoaXBzW3VzZXIuc2hpcEluZGV4XSAhPT0gdW5kZWZpbmVkKSBwbGFjZVNoaXBzTWFudWFsKHVzZXIpO1xuICBlbHNlIHN0YXJ0R2FtZSgpO1xufVxuXG5mdW5jdGlvbiBhZGRSb3RhdGVTaGlwRUwoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBfaGFuZGxlUm90YXRlKTtcbn1cblxuZnVuY3Rpb24gYWRkSG92ZXJTaGlwUGxhY2VFTChwbGF5ZXIsIHZhbGlkTG9jYXRpb25zKSB7XG4gIGNvbnN0IHZhbGlkTG9jRWxlbWVudHMgPSBnZXRTcXVhcmVFbGVtZW50cyh2YWxpZExvY2F0aW9ucywgcGxheWVyKTtcbiAgY3VycmVudEVsZW1lbnRzV2l0aEVMID0gdmFsaWRMb2NFbGVtZW50cztcblxuICB2YWxpZExvY0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfaGFuZGxlSG92ZXIpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9oYW5kbGVIb3Zlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDbGlja1NoaXBQbGFjZUVMKHBsYXllciwgdmFsaWRMb2NhdGlvbnMpIHtcbiAgY29uc3QgdmFsaWRMb2NFbGVtZW50cyA9IGdldFNxdWFyZUVsZW1lbnRzKHZhbGlkTG9jYXRpb25zLCBwbGF5ZXIpO1xuXG4gIHZhbGlkTG9jRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlQ2xpY2spO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwc01hbnVhbChwbGF5ZXIpIHtcbiAgY29uc3QgY3VycmVudFNoaXAgPSBwbGF5ZXIuc2hpcHNbcGxheWVyLnNoaXBJbmRleF07XG4gIGNvbnN0IGN1cnJlbnRWZXJ0aWNhbCA9IHBsYXllci5zaGlwVmVydGljYWw7XG5cbiAgY29uc3QgdmFsaWRMb2NhdGlvbnMgPSBwbGF5ZXIuYm9hcmQuZ2V0VmFsaWRTaGlwUGxhY2VtZW50cyhcbiAgICBjdXJyZW50U2hpcCxcbiAgICBjdXJyZW50VmVydGljYWxcbiAgKTtcblxuICBhZGRSb3RhdGVTaGlwRUwoKTtcbiAgYWRkSG92ZXJTaGlwUGxhY2VFTChwbGF5ZXIsIHZhbGlkTG9jYXRpb25zKTtcbiAgYWRkQ2xpY2tTaGlwUGxhY2VFTChwbGF5ZXIsIHZhbGlkTG9jYXRpb25zKTtcblxuICByZW5kZXJCb2FyZFN0YXR1cyhcbiAgICBwbGF5ZXIuYm9hcmRDbGFzcyxcbiAgICBgUGxhY2UgJHtjdXJyZW50U2hpcC5nZXROYW1lKCl9YCxcbiAgICAnYm9sZCdcbiAgKTtcbiAgcmVuZGVyQm9hcmRTdGF0dXMoXG4gICAgcGxheWVyLmJvYXJkQ2xhc3MsXG4gICAgYChQcmVzcyBSIHRvIHJvdGF0ZSBzaGlwKWAsXG4gICAgJ3JlZ3VsYXInLFxuICAgIGZhbHNlXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYXRlU2hpcFBsYWNlbWVudCgpIHtcbiAgdXNlci5zaGlwVmVydGljYWwgPSB0cnVlO1xuICB1c2VyLnNoaXBJbmRleCA9IDA7XG5cbiAgX3BsYWNlU2hpcHNSYW5kb20oY29tcHV0ZXIpO1xuICBwbGFjZVNoaXBzTWFudWFsKHVzZXIpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFNxdWFyZUVsZW1lbnRzKGFycmF5TG9jYXRpb25zLCBwbGF5ZXIpIHtcbiAgcmV0dXJuIGFycmF5TG9jYXRpb25zLm1hcCgobG9jKSA9PlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BsYXllci5ib2FyZENsYXNzfSR7bG9jWzBdfSR7bG9jWzFdfWApXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYWWZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFtOdW1iZXIoZWxlbWVudC5pZC5zbGljZSgtMiwgLTEpKSwgTnVtYmVyKGVsZW1lbnQuaWQuc2xpY2UoLTEpKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTaGlwKGFycmF5RWxlbWVudHMsIGV2ZW50KSB7XG4gIGFycmF5RWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2VlbnRlcicpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgIGVsc2UgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsU3F1YXJlcyhib2FyZENsYXNzKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtib2FyZENsYXNzfSAuc3F1YXJlYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHJtVXBDYXNlV2h0U3BhY2UgfSBmcm9tICcuLi9VdGlsaXRpZXMvaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZHJlbiB9IGZyb20gJy4vZG9tLWhlbHBlcnMnO1xuXG5mdW5jdGlvbiBfcmVuZGVyU3RhdGUoYm9hcmQsIHgsIHksIGxvY2F0aW9uSUQpIHtcbiAgY29uc3Qgc3RhdGUgPSBib2FyZC5nZXRTdGF0ZSh4LCB5KTtcbiAgaWYgKHN0YXRlICE9PSAnYmxhbmsnKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bG9jYXRpb25JRH1gKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChzdGF0ZSk7XG4gICAgc3F1YXJlLnRleHRDb250ZW50ID0gc3RhdGUgPT09ICdoaXQnID8gJ1gnIDogJ08nO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9yZW5kZXJTaGlwcyhib2FyZCwgeCwgeSwgbG9jYXRpb25JRCkge1xuICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtsb2NhdGlvbklEfWApO1xuICBpZiAoYm9hcmQuZ2V0U2hpcCh4LCB5KSAhPT0gdW5kZWZpbmVkKSBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICBlbHNlIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG59XG5cbmZ1bmN0aW9uIF9kaXNwbGF5TW9kYWwoZXZlbnQpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgY29uc3QgcG9zdE1vZGFsUmVzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0TW9kYWwgLnJlc3RhcnRHYW1lJyk7XG4gIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwb3N0TW9kYWxSZXN0YXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNb2RhbChlbmRNZXNzYWdlKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIGNvbnN0IG1vZGFsUmVzdGFydCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0R2FtZScpO1xuXG4gIG1vZGFsUmVzdGFydC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZEdhbWVTdGF0dXMnKS50ZXh0Q29udGVudCA9IGVuZE1lc3NhZ2U7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2Rpc3BsYXlNb2RhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNb2RhbCgpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJlc3RhcnRHYW1lKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGFydEdhbWUnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c0JvYXJkKGJvYXJkU2lkZSkge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubGVmdEJvYXJkLCAucmlnaHRCb2FyZCcpXG4gICAgLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmRIaWdobGlnaHQnKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkU2lkZX1gKS5jbGFzc0xpc3QuYWRkKCdib2FyZEhpZ2hsaWdodCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR3JpZChib2FyZFNpZGUpIHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZFNpZGV9ID4gLmJvYXJkYCk7XG4gIHJlbW92ZUFsbENoaWxkcmVuKGJvYXJkKTtcblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5ICs9IDEpIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4ICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgc3F1YXJlLmlkID0gYm9hcmRTaWRlICsgeCArIHk7XG4gICAgICBib2FyZC5hcHBlbmQoc3F1YXJlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkVGl0bGUodGl0bGUsIGJvYXJkU2lkZSkge1xuICBjb25zdCBib2FyZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmRTaWRlfSA+IC5ib2FyZFRpdGxlYCk7XG4gIGJvYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkU3RhdHVzKFxuICBib2FyZFNpZGUsXG4gIHN0YXR1cyxcbiAgc3R5bGUsXG4gIGNsZWFyU3RhdHVzID0gdHJ1ZVxuKSB7XG4gIGNvbnN0IGJvYXJkU3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLiR7Ym9hcmRTaWRlfSA+IC5ib2FyZFN0YXR1c2BcbiAgKTtcblxuICBpZiAoY2xlYXJTdGF0dXMgPT09IHRydWUpIHJlbW92ZUFsbENoaWxkcmVuKGJvYXJkU3RhdHVzQ29udGFpbmVyKTtcblxuICBjb25zdCBib2FyZFN0YXR1c0RJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZFN0YXR1c0RJVi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcbiAgYm9hcmRTdGF0dXNESVYudGV4dENvbnRlbnQgPSBzdGF0dXM7XG5cbiAgYm9hcmRTdGF0dXNDb250YWluZXIuYXBwZW5kKGJvYXJkU3RhdHVzRElWKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFNoaXBzU3VuaygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1bmtUZXh0LCAuc2hpcFN0YXR1cycpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXBTdW5rJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcFN1bmsnKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaGlwc1N0YXR1cygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXBTdGF0dXMnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2hpcHNTdW5rKHNoaXAsIHBsYXllcikge1xuICBpZiAoc2hpcCAmJiBzaGlwLmlzU3VuaygpKSB7XG4gICAgY29uc3Qgc2hpcFNlbGVjdG9yID0gYC4ke3BsYXllci5ib2FyZENsYXNzfSAuJHtybVVwQ2FzZVdodFNwYWNlKFxuICAgICAgc2hpcC5nZXROYW1lKClcbiAgICApfWA7XG4gICAgY29uc3Qgc2hpcFNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNoaXBTZWxlY3Rvcik7XG4gICAgc2hpcFNwYW4uY2xhc3NMaXN0LmFkZCgnc2hpcFN1bmsnKTtcblxuICAgIHNoaXBTcGFuLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgIHJlbmRlckJvYXJkU3RhdHVzKHBsYXllci5ib2FyZENsYXNzLCBgJHtzaGlwLmdldE5hbWUoKX0gd2FzIHN1bmshYCwgJ2JvbGQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9hcmRYWShib2FyZCwgeCwgeSwgYm9hcmRTaWRlLCBoaWRlU2hpcHMpIHtcbiAgY29uc3QgbG9jYXRpb25JRCA9IGJvYXJkU2lkZSArIHggKyB5O1xuICBpZiAoaGlkZVNoaXBzID09PSBmYWxzZSkgX3JlbmRlclNoaXBzKGJvYXJkLCB4LCB5LCBsb2NhdGlvbklEKTtcbiAgX3JlbmRlclN0YXRlKGJvYXJkLCB4LCB5LCBsb2NhdGlvbklEKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkKGJvYXJkLCBib2FyZFNpZGUsIGhpZGVTaGlwcykge1xuICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5ICs9IDEpIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4ICs9IDEpIHtcbiAgICAgIHJlbmRlckJvYXJkWFkoYm9hcmQsIHgsIHksIGJvYXJkU2lkZSwgaGlkZVNoaXBzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHVzZXJDb25zdGFudHMsIGNvbXB1dGVyQ29uc3RhbnRzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IHVzZXIgPSB7IC4uLnVzZXJDb25zdGFudHMgfTtcbmV4cG9ydCBjb25zdCBjb21wdXRlciA9IHsgLi4uY29tcHV0ZXJDb25zdGFudHMgfTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRBcnJheUNvb3JkcyhzaGlwTGVuZ3RoLCB4LCB5LCBpc1ZlcnRpY2FsKSB7XG4gIGNvbnN0IGFycmF5Q29vcmRzID0gW107XG5cbiAgZm9yIChsZXQgc2hpcExvY2F0aW9uID0gMDsgc2hpcExvY2F0aW9uIDwgc2hpcExlbmd0aDsgc2hpcExvY2F0aW9uICs9IDEpIHtcbiAgICBjb25zdCBuZXdYID0geCArIChpc1ZlcnRpY2FsID09PSBmYWxzZSA/IHNoaXBMb2NhdGlvbiA6IDApO1xuICAgIGNvbnN0IG5ld1kgPSB5ICsgKGlzVmVydGljYWwgPT09IHRydWUgPyBzaGlwTG9jYXRpb24gOiAwKTtcbiAgICBhcnJheUNvb3Jkcy5wdXNoKFtuZXdYLCBuZXdZXSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5Q29vcmRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29vcmRJc1dpdGhpbkJvYXJkKHgsIHksIHNpemUpIHtcbiAgcmV0dXJuIHggPj0gMCAmJiB4IDwgc2l6ZSAmJiB5ID49IDAgJiYgeSA8IHNpemU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb25nZXN0QmxhbmtYKHgsIHksIGJvYXJkKSB7XG4gIGxldCBudW1iZXJCbGFua3MgPSAwO1xuICB3aGlsZSAoYm9hcmQuaXNWYWxpZEF0dGFja0xvYyh4ICsgbnVtYmVyQmxhbmtzLCB5KSkge1xuICAgIG51bWJlckJsYW5rcyArPSAxO1xuICB9XG4gIHJldHVybiBudW1iZXJCbGFua3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb25nZXN0QmxhbmtZKHgsIHksIGJvYXJkKSB7XG4gIGxldCBudW1iZXJCbGFua3MgPSAwO1xuICB3aGlsZSAoYm9hcmQuaXNWYWxpZEF0dGFja0xvYyh4LCB5ICsgbnVtYmVyQmxhbmtzKSkge1xuICAgIG51bWJlckJsYW5rcyArPSAxO1xuICB9XG4gIHJldHVybiBudW1iZXJCbGFua3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb25nZXN0QmxhbmtzKGJvYXJkKSB7XG4gIGxldCBsb25nZXN0QmxhbmtzID0gW107XG4gIGxldCBjdXJyZW50TG9uZ2VzdCA9IDA7XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCArPSAxKSB7XG4gICAgICBjb25zdCBsZW5ndGhYID0gZ2V0TG9uZ2VzdEJsYW5rWCh4LCB5LCBib2FyZCk7XG4gICAgICBjb25zdCBsZW5ndGhZID0gZ2V0TG9uZ2VzdEJsYW5rWSh4LCB5LCBib2FyZCk7XG5cbiAgICAgIGlmIChsZW5ndGhYID4gbGVuZ3RoWSAmJiBsZW5ndGhYID49IGN1cnJlbnRMb25nZXN0KSB7XG4gICAgICAgIGlmIChsZW5ndGhYID4gY3VycmVudExvbmdlc3QpIGxvbmdlc3RCbGFua3MgPSBbXTtcbiAgICAgICAgbG9uZ2VzdEJsYW5rcy5wdXNoKFtNYXRoLmZsb29yKHggKyBsZW5ndGhYIC8gMiksIHldKTtcbiAgICAgICAgY3VycmVudExvbmdlc3QgPSBsZW5ndGhYO1xuICAgICAgfSBlbHNlIGlmIChsZW5ndGhZID4gbGVuZ3RoWCAmJiBsZW5ndGhZID49IGN1cnJlbnRMb25nZXN0KSB7XG4gICAgICAgIGlmIChsZW5ndGhZID4gY3VycmVudExvbmdlc3QpIGxvbmdlc3RCbGFua3MgPSBbXTtcbiAgICAgICAgbG9uZ2VzdEJsYW5rcy5wdXNoKFt4LCBNYXRoLmZsb29yKHkgKyBsZW5ndGhZIC8gMildKTtcbiAgICAgICAgY3VycmVudExvbmdlc3QgPSBsZW5ndGhZO1xuICAgICAgfSBlbHNlIGlmIChsZW5ndGhZID09PSBsZW5ndGhYICYmIGxlbmd0aFggPj0gY3VycmVudExvbmdlc3QpIHtcbiAgICAgICAgaWYgKGxlbmd0aFggPiBjdXJyZW50TG9uZ2VzdCkgbG9uZ2VzdEJsYW5rcyA9IFtdO1xuICAgICAgICBsb25nZXN0QmxhbmtzLnB1c2goXG4gICAgICAgICAgW01hdGguZmxvb3IoeCArIGxlbmd0aFggLyAyKSwgeV0sXG4gICAgICAgICAgW3gsIE1hdGguZmxvb3IoeSArIGxlbmd0aFkgLyAyKV1cbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudExvbmdlc3QgPSBsZW5ndGhYO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb25nZXN0QmxhbmtzO1xufVxuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tSXRlbUZyb21BcnJheSB9IGZyb20gJy4uL1V0aWxpdGllcy9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7IGNvb3JkSXNXaXRoaW5Cb2FyZCwgZ2V0QXJyYXlDb29yZHMgfSBmcm9tICcuL2dhbWVib2FyZC1oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCBfc2l6ZSA9IDEwO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1uZXctYXJyYXlcbiAgY29uc3QgX2JvYXJkID0gWy4uLm5ldyBBcnJheShfc2l6ZSldLm1hcCgoKSA9PiBuZXcgQXJyYXkoX3NpemUpKTtcbiAgY29uc3QgX3NoaXBzID0gW107XG5cbiAgZm9yIChsZXQgeCA9IDA7IHggPCBfc2l6ZTsgeCArPSAxKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBfc2l6ZTsgeSArPSAxKSB7XG4gICAgICBfYm9hcmRbeF1beV0gPSB7XG4gICAgICAgIHNoaXA6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhdGU6ICdibGFuaycsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFN0YXRlKHgsIHkpIHtcbiAgICByZXR1cm4gX2JvYXJkW3hdW3ldLnN0YXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2hpcCh4LCB5KSB7XG4gICAgcmV0dXJuIF9ib2FyZFt4XVt5XS5zaGlwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlVGFyZ2V0cygpIHtcbiAgICBjb25zdCB0YXJnZXRzID0gW107XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBfc2l6ZTsgeCArPSAxKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IF9zaXplOyB5ICs9IDEpIHtcbiAgICAgICAgaWYgKGdldFN0YXRlKHgsIHkpID09PSAnYmxhbmsnKSB0YXJnZXRzLnB1c2goW3gsIHldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldHM7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRRdHlTdW5rKCkge1xuICAgIHJldHVybiBfc2hpcHMucmVkdWNlKFxuICAgICAgKHByZXZpb3VzLCBjdXJyZW50KSA9PiBwcmV2aW91cyArIChjdXJyZW50LmlzU3VuaygpID8gMSA6IDApLFxuICAgICAgMFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBhbGxTdW5rKCkge1xuICAgIGlmIChfc2hpcHMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gX3NoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVmFsaWRQbGFjZW1lbnQoc2hpcExlbmd0aCwgeCwgeSwgaXNWZXJ0aWNhbCkge1xuICAgIHJldHVybiBnZXRBcnJheUNvb3JkcyhzaGlwTGVuZ3RoLCB4LCB5LCBpc1ZlcnRpY2FsKS5ldmVyeShcbiAgICAgICh4eUNvb3JkcykgPT5cbiAgICAgICAgY29vcmRJc1dpdGhpbkJvYXJkKC4uLnh5Q29vcmRzLCBfc2l6ZSkgJiZcbiAgICAgICAgZ2V0U2hpcCguLi54eUNvb3JkcykgPT09IHVuZGVmaW5lZFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWYWxpZFNoaXBQbGFjZW1lbnRzKHNoaXAsIGlzVmVydGljYWwpIHtcbiAgICBjb25zdCB2YWxpZExvY2F0aW9ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4ICs9IDEpIHtcbiAgICAgICAgaWYgKGlzVmFsaWRQbGFjZW1lbnQoc2hpcC5nZXRMZW5ndGgoKSwgeCwgeSwgaXNWZXJ0aWNhbCkpIHtcbiAgICAgICAgICB2YWxpZExvY2F0aW9ucy5wdXNoKFt4LCB5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRMb2NhdGlvbnM7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgaXNWZXJ0aWNhbCkge1xuICAgIGlmIChpc1ZhbGlkUGxhY2VtZW50KHNoaXAuZ2V0TGVuZ3RoKCksIHgsIHksIGlzVmVydGljYWwpKSB7XG4gICAgICBnZXRBcnJheUNvb3JkcyhzaGlwLmdldExlbmd0aCgpLCB4LCB5LCBpc1ZlcnRpY2FsKS5mb3JFYWNoKCh4eUNvb3JkcykgPT4ge1xuICAgICAgICBfYm9hcmRbeHlDb29yZHNbMF1dW3h5Q29vcmRzWzFdXS5zaGlwID0gc2hpcDtcbiAgICAgIH0pO1xuICAgICAgX3NoaXBzLnB1c2goc2hpcCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBpc1ZhbGlkQXR0YWNrTG9jKHgsIHkpIHtcbiAgICByZXR1cm4gY29vcmRJc1dpdGhpbkJvYXJkKHgsIHksIF9zaXplKSAmJiBnZXRTdGF0ZSh4LCB5KSA9PT0gJ2JsYW5rJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGlmICghaXNWYWxpZEF0dGFja0xvYyh4LCB5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGdldFNoaXAoeCwgeSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZ2V0U2hpcCh4LCB5KS5oaXQoW3gsIHldKTtcbiAgICAgIF9ib2FyZFt4XVt5XS5zdGF0ZSA9ICdoaXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBfYm9hcmRbeF1beV0uc3RhdGUgPSAnbWlzcyc7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QmxhbmtOZWlnaGJvcnMoeCwgeSkge1xuICAgIHJldHVybiBbXG4gICAgICBbeCArIDEsIHldLFxuICAgICAgW3ggLSAxLCB5XSxcbiAgICAgIFt4LCB5ICsgMV0sXG4gICAgICBbeCwgeSAtIDFdLFxuICAgIF0uZmlsdGVyKChuZWlnaGJvcikgPT4gaXNWYWxpZEF0dGFja0xvYyguLi5uZWlnaGJvcikpO1xuICAgIC8vIERFTEVURSBJRiBOTyBJU1NVRVNcbiAgICAvLyBjb25zdCBfdmFsaWRCbGFua3MgPSBbXTtcblxuICAgIC8vIGZvciAobGV0IGkgPSAtMTsgaSA8IDI7IGkgKz0gMikge1xuICAgIC8vICAgY29uc3QgbmV3WCA9IHggKyBpO1xuICAgIC8vICAgY29uc3QgbmV3WSA9IHk7XG4gICAgLy8gICBpZiAoaXNWYWxpZEF0dGFja0xvYyhuZXdYLCBuZXdZKSkgX3ZhbGlkQmxhbmtzLnB1c2goW25ld1gsIG5ld1ldKTtcbiAgICAvLyB9XG5cbiAgICAvLyBmb3IgKGxldCBpID0gLTE7IGkgPCAyOyBpICs9IDIpIHtcbiAgICAvLyAgIGNvbnN0IG5ld1ggPSB4O1xuICAgIC8vICAgY29uc3QgbmV3WSA9IHkgKyBpO1xuICAgIC8vICAgaWYgKGlzVmFsaWRBdHRhY2tMb2MobmV3WCwgbmV3WSkpIF92YWxpZEJsYW5rcy5wdXNoKFtuZXdYLCBuZXdZXSk7XG4gICAgLy8gfVxuXG4gICAgLy8gcmV0dXJuIF92YWxpZEJsYW5rcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUJsYW5rTmVpZ2hib3IobG9jKSB7XG4gICAgLy8gREVMRVRFIElGIE5PIElTU1VFU1xuICAgIC8vIGNvbnN0IGJsYW5rTmVpZ2hib3JzID0gZ2V0QmxhbmtOZWlnaGJvcnMoLi4ubG9jKTtcbiAgICAvLyBpZiAoYmxhbmtOZWlnaGJvcnMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gICAgLy8gcmV0dXJuIGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkoZ2V0QmxhbmtOZWlnaGJvcnMoLi4ubG9jKSk7XG5cbiAgICByZXR1cm4gZ2V0QmxhbmtOZWlnaGJvcnMoLi4ubG9jKS5sZW5ndGggPT09IDBcbiAgICAgID8gW11cbiAgICAgIDogZ2V0UmFuZG9tSXRlbUZyb21BcnJheShnZXRCbGFua05laWdoYm9ycyguLi5sb2MpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0U3RhdGUsXG4gICAgZ2V0U2hpcCxcbiAgICBnZXRBdmFpbGFibGVUYXJnZXRzLFxuICAgIGdldFF0eVN1bmssXG4gICAgYWxsU3VuayxcbiAgICBpc1ZhbGlkUGxhY2VtZW50LFxuICAgIGdldFZhbGlkU2hpcFBsYWNlbWVudHMsXG4gICAgcGxhY2VTaGlwLFxuICAgIGlzVmFsaWRBdHRhY2tMb2MsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBnZXRCbGFua05laWdoYm9ycyxcbiAgICBnZXRSYW5kb21CbGFua05laWdoYm9yLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tSXRlbUZyb21BcnJheSB9IGZyb20gJy4uL1V0aWxpdGllcy9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7IGdldExvbmdlc3RCbGFua3MgfSBmcm9tICcuL2dhbWVib2FyZC1oZWxwZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRMb25nZXN0QmxhbmtBdHRhY2soYm9hcmQpIHtcbiAgY29uc3QgbG9uZ2VzdEJsYW5rcyA9IGdldExvbmdlc3RCbGFua3MoYm9hcmQpO1xuICBjb25zdCBbbmV4dFgsIG5leHRZXSA9IGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkobG9uZ2VzdEJsYW5rcyk7XG4gIGNvbnN0IGlzVmFsaWRBdHRhY2sgPSBib2FyZC5yZWNlaXZlQXR0YWNrKG5leHRYLCBuZXh0WSk7XG5cbiAgcmV0dXJuIFtpc1ZhbGlkQXR0YWNrLCBbbmV4dFgsIG5leHRZXV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kUmFuZG9tQXR0YWNrKGJvYXJkKSB7XG4gIGNvbnN0IFtuZXh0WCwgbmV4dFldID0gZ2V0UmFuZG9tSXRlbUZyb21BcnJheShib2FyZC5nZXRBdmFpbGFibGVUYXJnZXRzKCkpO1xuICBjb25zdCBpc1ZhbGlkQXR0YWNrID0gYm9hcmQucmVjZWl2ZUF0dGFjayhuZXh0WCwgbmV4dFkpO1xuXG4gIHJldHVybiBbaXNWYWxpZEF0dGFjaywgW25leHRYLCBuZXh0WV1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dExpbmVhckF0dGFjayhbW3gxLCB5MV0sIFt4MiwgeTJdXSkge1xuICBjb25zdCBuZXh0WCA9IHgxID09PSB4MiA/IHgxIDogeDIgKyBNYXRoLnNpZ24oeDIgLSB4MSk7XG4gIGNvbnN0IG5leHRZID0geTEgPT09IHkyID8geTEgOiB5MiArIE1hdGguc2lnbih5MiAtIHkxKTtcblxuICByZXR1cm4gW25leHRYLCBuZXh0WV07XG59XG4iLCJpbXBvcnQgeyByZW1vdmVBcnJheWZyb21OZXN0ZWRBcnJheSB9IGZyb20gJy4uL1V0aWxpdGllcy9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7IGdldE5leHRMaW5lYXJBdHRhY2ssIHNlbmRMb25nZXN0QmxhbmtBdHRhY2sgfSBmcm9tICcuL3BsYXllci1oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKG5hbWUpIHtcbiAgbGV0IF9uYW1lID0gbmFtZTtcbiAgbGV0IF9wcmV2aW91c0hpdHMgPSBbXTtcblxuICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgIHJldHVybiBfbmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldE5hbWUobmV3TmFtZSkge1xuICAgIF9uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF91cGRhdGVQcmV2aW91c0hpdHMoeCwgeSwgYm9hcmQpIHtcbiAgICBjb25zdCB0YXJnZXRTaGlwID0gYm9hcmQuZ2V0U2hpcCh4LCB5KTtcblxuICAgIGlmIChib2FyZC5nZXRTdGF0ZSh4LCB5KSA9PT0gJ2hpdCcpIF9wcmV2aW91c0hpdHMucHVzaChbeCwgeV0pO1xuXG4gICAgaWYgKHRhcmdldFNoaXAgJiYgdGFyZ2V0U2hpcC5pc1N1bmsoKSkge1xuICAgICAgX3ByZXZpb3VzSGl0cyA9IHJlbW92ZUFycmF5ZnJvbU5lc3RlZEFycmF5KFxuICAgICAgICBfcHJldmlvdXNIaXRzLFxuICAgICAgICB0YXJnZXRTaGlwLmdldEhpdExvY2F0aW9ucygpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9hdHRhY2tQcmV2aW91c0hpdHMoYm9hcmQpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgX3ByZXZpb3VzSGl0cy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgIGNvbnN0IGxvYyA9IF9wcmV2aW91c0hpdHNbaW5kZXhdO1xuXG4gICAgICBpZiAoYm9hcmQuZ2V0UmFuZG9tQmxhbmtOZWlnaGJvcihsb2MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgW25leHRYLCBuZXh0WV0gPSBib2FyZC5nZXRSYW5kb21CbGFua05laWdoYm9yKGxvYyk7XG4gICAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2sobmV4dFgsIG5leHRZKTtcblxuICAgICAgICBpZiAoYm9hcmQuZ2V0U3RhdGUobmV4dFgsIG5leHRZKSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICBfcHJldmlvdXNIaXRzLnB1c2gobG9jLCBbbmV4dFgsIG5leHRZXSk7XG4gICAgICAgICAgX3ByZXZpb3VzSGl0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbbmV4dFgsIG5leHRZXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlbmRMb25nZXN0QmxhbmtBdHRhY2soYm9hcmQpWzFdO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VuZFNtYXJ0QXR0YWNrKGJvYXJkKSB7XG4gICAgbGV0IG5leHRYO1xuICAgIGxldCBuZXh0WTtcblxuICAgIGlmIChfcHJldmlvdXNIaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgWywgW25leHRYLCBuZXh0WV1dID0gc2VuZExvbmdlc3RCbGFua0F0dGFjayhib2FyZCk7XG4gICAgfSBlbHNlIGlmIChfcHJldmlvdXNIaXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgW25leHRYLCBuZXh0WV0gPSBib2FyZC5nZXRSYW5kb21CbGFua05laWdoYm9yKF9wcmV2aW91c0hpdHNbMF0pO1xuICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhuZXh0WCwgbmV4dFkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBbbmV4dFgsIG5leHRZXSA9IGdldE5leHRMaW5lYXJBdHRhY2soX3ByZXZpb3VzSGl0cy5zbGljZSgtMikpO1xuXG4gICAgICBpZiAoIWJvYXJkLmlzVmFsaWRBdHRhY2tMb2MobmV4dFgsIG5leHRZKSkge1xuICAgICAgICBbbmV4dFgsIG5leHRZXSA9IGdldE5leHRMaW5lYXJBdHRhY2soXG4gICAgICAgICAgX3ByZXZpb3VzSGl0cy5zbGljZSgwLCAyKS5yZXZlcnNlKClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFib2FyZC5pc1ZhbGlkQXR0YWNrTG9jKG5leHRYLCBuZXh0WSkpXG4gICAgICAgIHJldHVybiBfYXR0YWNrUHJldmlvdXNIaXRzKGJvYXJkKTtcblxuICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhuZXh0WCwgbmV4dFkpO1xuICAgIH1cbiAgICBfdXBkYXRlUHJldmlvdXNIaXRzKG5leHRYLCBuZXh0WSwgYm9hcmQpO1xuICAgIHJldHVybiBbbmV4dFgsIG5leHRZXTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0TmFtZSxcbiAgICBzZXROYW1lLFxuICAgIHNlbmRTbWFydEF0dGFjayxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobGVuZ3RoLCBuYW1lKSB7XG4gIGxldCBfbmFtZSA9IG5hbWU7XG4gIGxldCBfbGVuZ3RoID0gbGVuZ3RoO1xuICBpZiAobGVuZ3RoIDw9IDAgfHwgbGVuZ3RoID4gMTApXG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZW5ndGggbXVzdCBiZSBncmVhdGVyIHRoYW4gMCBhbmQgbGVzcyB0aGFuIDExJyk7XG5cbiAgY29uc3QgX2hpdExvY2F0aW9uID0gW107XG5cbiAgZnVuY3Rpb24gaGl0KGxvY2F0aW9uKSB7XG4gICAgX2hpdExvY2F0aW9uLnB1c2gobG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gX25hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRIaXRMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIF9oaXRMb2NhdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldE5hbWUobmV3TmFtZSkge1xuICAgIF9uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gX2xlbmd0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldExlbmd0aChudW1iZXIpIHtcbiAgICBfbGVuZ3RoID0gbnVtYmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIHJldHVybiBfaGl0TG9jYXRpb24ubGVuZ3RoID09PSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhpdCxcbiAgICBnZXROYW1lLFxuICAgIHNldE5hbWUsXG4gICAgZ2V0TGVuZ3RoLFxuICAgIHNldExlbmd0aCxcbiAgICBpc1N1bmssXG4gICAgZ2V0SGl0TG9jYXRpb25zLFxuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZEludCh1cHBlckJvdW5kKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB1cHBlckJvdW5kKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZEJvb2woKSB7XG4gIHJldHVybiBbdHJ1ZSwgZmFsc2VdW2dlbmVyYXRlUmFuZEludCgyKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JdGVtRnJvbUFycmF5KGFycmF5KSB7XG4gIHJldHVybiBhcnJheVtnZW5lcmF0ZVJhbmRJbnQoYXJyYXkubGVuZ3RoKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUVxdWFscyhhLCBiKSB7XG4gIHJldHVybiAoXG4gICAgQXJyYXkuaXNBcnJheShhKSAmJlxuICAgIEFycmF5LmlzQXJyYXkoYikgJiZcbiAgICBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiZcbiAgICBhLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBiW2luZGV4XSlcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFycmF5ZnJvbU5lc3RlZEFycmF5KG5lc3RlZCwgdG9SZW1vdmUpIHtcbiAgcmV0dXJuIG5lc3RlZC5maWx0ZXIoKGl0ZW0xKSA9PlxuICAgIHRvUmVtb3ZlLmV2ZXJ5KChpdGVtMikgPT4gIWFycmF5RXF1YWxzKGl0ZW0xLCBpdGVtMikpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBybVVwQ2FzZVdodFNwYWNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5qb2luKCcnKTtcbn1cbiIsImV4cG9ydCBjb25zdCBzaGlwVGVtcGxhdGUgPSBbXG4gIHsgbGVuZ3RoOiA1LCBuYW1lOiAnQ2FycmllcicgfSxcbiAgeyBsZW5ndGg6IDQsIG5hbWU6ICdCYXR0bGVzaGlwJyB9LFxuICB7IGxlbmd0aDogMywgbmFtZTogJ0Rlc3Ryb3llcicgfSxcbiAgeyBsZW5ndGg6IDMsIG5hbWU6ICdTdWJtYXJpbmUnIH0sXG4gIHsgbGVuZ3RoOiAyLCBuYW1lOiAnUGF0cm9sIEJvYXQnIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgdXNlckNvbnN0YW50cyA9IHtcbiAgbmFtZTogJ0ZyaWVuZGx5IFNlYXMnLFxuICBib2FyZENsYXNzOiAnbGVmdEJvYXJkJyxcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlckNvbnN0YW50cyA9IHtcbiAgbmFtZTogJ0VuZW15IFNlYXMnLFxuICBib2FyZENsYXNzOiAncmlnaHRCb2FyZCcsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzZXR1cEdhbWUgZnJvbSAnLi9Nb2R1bGVzL0NvbnRyb2wvc2V0dXAtY29udHJvbGxlcic7XG5pbXBvcnQgaW5pdGlhdGVTaGlwUGxhY2VtZW50IGZyb20gJy4vTW9kdWxlcy9Db250cm9sL3NoaXAtcGxhY2VtZW50LWNvbnRyb2xsZXInO1xuXG5zZXR1cEdhbWUoKTtcbmluaXRpYXRlU2hpcFBsYWNlbWVudCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9