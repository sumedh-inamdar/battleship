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
/* harmony import */ var _Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utilities/helper-functions */ "./src/Modules/Utilities/helper-functions.js");






let _blockUserInput;

function _loadCrosshair(event) {
  const targetIcon = new Image();
  targetIcon.src = _images_Crosshairs_Red_svg__WEBPACK_IMPORTED_MODULE_2__;
  targetIcon.classList.add('crosshair');
  event.target.append(targetIcon);
}

function _removeCrosshair(event) {
  (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(event.target);
}

function _addHoverCrosshairEL() {
  (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.getAllSquares)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass).forEach((square) => {
    square.addEventListener('mouseenter', _loadCrosshair);
    square.addEventListener('mouseleave', _removeCrosshair);
  });
}

function _removeAttackEventListener(square) {
  square.removeEventListener('mouseenter', _loadCrosshair);
  square.removeEventListener('mouseleave', _removeCrosshair);
  // eslint-disable-next-line no-use-before-define
  square.removeEventListener('click', _handleAttack);
}

function _endGame(winner) {
  const endMessage =
    winner === _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user
      ? 'You Win! Good job sinking all your opponents ships 😀'
      : 'All your ships were sunk. You lost 🙁';

  (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.getAllSquares)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass).forEach((square) =>
    _removeAttackEventListener(square)
  );
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.board, _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, false);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.board, _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, false);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderModal)(endMessage);
}

function _compTurn() {
  const target = _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.player.sendSmartAttack(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.board);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardXY)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.board, target[0], target[1], _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, false);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, ``, 'bold');
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.updateShipsSunk)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.board.getShip(target[0], target[1]), _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user);

  if (_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.board.allSunk()) {
    _endGame(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer);
    return;
  }

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.focusBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, `Place your attack!`, 'bold');

  _blockUserInput = false;
}

function _userTurn(x, y) {
  _blockUserInput = true;

  _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.board.receiveAttack(x, y);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardXY)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.board, x, y, _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, false);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, ``, 'bold');
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.updateShipsSunk)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.board.getShip(x, y), _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer);

  if (_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.board.allSunk()) {
    _endGame(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user);
    return;
  }

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.focusBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.boardClass);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, `Thinking...`, 'bold');

  setTimeout(_compTurn, Math.max(500, (0,_Utilities_helper_functions__WEBPACK_IMPORTED_MODULE_4__.generateRandInt)(2000)));
}

function _handleAttack(event) {
  if (_blockUserInput) return;

  const square = event.target.closest('.square');
  _removeAttackEventListener(square);
  (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(square);

  _userTurn(...(0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.getXYfromElement)(square));
}

function _setupAttackEventListener() {
  (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.getAllSquares)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass).forEach((square) => {
    square.addEventListener('click', _handleAttack);
  });
}

function startGame() {
  _blockUserInput = false;
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.focusBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass);

  _addHoverCrosshairEL();
  _setupAttackEventListener();

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.board, _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.user.boardClass, false);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.board, _Data_game_objects__WEBPACK_IMPORTED_MODULE_3__.computer.boardClass, true);

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
/* harmony export */   "generateShips": () => (/* binding */ generateShips),
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








function generateShips(shipInfo) {
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

  player1.ships = generateShips(shipInfo);
  player2.ships = generateShips(shipInfo);
}

function _setupDOM(player1, player2) {
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.renderGrid)(player1.boardClass);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.renderGrid)(player2.boardClass);

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.renderBoardTitle)(player1.player.getName(), player1.boardClass);
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.renderBoardTitle)(player2.player.getName(), player2.boardClass);

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(player1.boardClass, '', 'bold'); // clears any previous board status
  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(player2.boardClass, '', 'bold');

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.setupShipsSunk)();
  _addClickRestartEL();

  (0,_DOM_render_dom__WEBPACK_IMPORTED_MODULE_4__.focusBoard)(player1.boardClass);
}

function _addClickRestartEL() {
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
/* harmony export */   "placeShipsRandom": () => (/* binding */ placeShipsRandom),
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

function placeShipsRandom(player) {
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
    _placeShipsManual(_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user);
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

  if (_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.ships[_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex] !== undefined) _placeShipsManual(_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user);
  else (0,_gameplay_controller__WEBPACK_IMPORTED_MODULE_5__["default"])();
}

function _addRotateShipEL() {
  document.addEventListener('keydown', _handleRotate);
}

function _addHoverShipPlaceEL(player, validLocations) {
  const validLocElements = (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_3__.getSquareElements)(validLocations, player);
  currentElementsWithEL = validLocElements;

  validLocElements.forEach((element) => {
    element.addEventListener('mouseenter', _handleHover);
    element.addEventListener('mouseleave', _handleHover);
  });
}

function _addClickShipPlaceEL(player, validLocations) {
  const validLocElements = (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_3__.getSquareElements)(validLocations, player);

  validLocElements.forEach((element) => {
    element.addEventListener('click', _handleClick);
  });
}

function _placeShipsManual(player) {
  const currentShip = player.ships[player.shipIndex];
  const currentVertical = player.shipVertical;

  const validLocations = player.board.getValidShipPlacements(
    currentShip,
    currentVertical
  );

  _addRotateShipEL();
  _addHoverShipPlaceEL(player, validLocations);
  _addClickShipPlaceEL(player, validLocations);

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

  placeShipsRandom(_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.computer);
  _placeShipsManual(_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.user);
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
  }

  function getRandomBlankNeighbor(loc) {
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

  function sendSmartAttack(board, hunting = 'smart') {
    let nextX;
    let nextY;

    if (_previousHits.length === 0) {
      if (hunting === 'smart')
        [, [nextX, nextY]] = (0,_player_helpers__WEBPACK_IMPORTED_MODULE_1__.sendLongestBlankAttack)(board);
      else [, [nextX, nextY]] = (0,_player_helpers__WEBPACK_IMPORTED_MODULE_1__.sendRandomAttack)(board);
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



// import {
//   simulateSmartHunting,
//   simulateRandomAttack,
//   simulateRandomHunting,
// } from './scripts/computer-ai-simulator';

(0,_Modules_Control_setup_controller__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_Modules_Control_ship_placement_controller__WEBPACK_IMPORTED_MODULE_2__["default"])();

// simulator scripts below - not needed for main app
// simulateSmartHunting();
// simulateRandomHunting();
// simulateRandomAttack();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNzQztBQUNxQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsNkVBQVM7QUFDVCxzRkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvQ29udHJvbC9nYW1lcGxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9Db250cm9sL3NldHVwLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0NvbnRyb2wvc2hpcC1wbGFjZW1lbnQtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvRE9NL2RvbS1oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9ET00vcmVuZGVyLWRvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvRGF0YS9nYW1lLW9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0ZhY3RvcnkvZ2FtZWJvYXJkLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0ZhY3RvcnkvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9GYWN0b3J5L3BsYXllci1oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9GYWN0b3J5L3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvRmFjdG9yeS9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9VdGlsaXRpZXMvaGVscGVyLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TeW5jb3BhdGU6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0OndnaHRAODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODAxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXI+aDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLmxlZnRCb2FyZCwgLnJpZ2h0Qm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDI1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbi5ib2FyZFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbi5ib2FyZFN0YXR1cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uYm9sZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5yZWd1bGFyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmJvYXJkSGlnaGxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDM4JSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4jZ2FtZUJvYXJkUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIFNxdWFyZSAqL1xcblxcbi5zcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEthbml0O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uc3F1YXJlID4gaW1nIHtcXG4gICAgY29sb3I6Ymx1ZXZpb2xldDtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCA4NCwgMTQ1KTtcXG59XFxuLmhpdCB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCA3NywgNzcpO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn0gXFxuLm1pc3Mge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi8qIFNoaXAgU3RhdHVzIC8gR3JpZCAqL1xcbi5zaGlwU3RhdHVzIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc2hpcFRpdGxlIHtcXG4gICAgbWFyZ2luOiA1cHggMHB4O1xcbn1cXG4uc2hpcFN1bmsge1xcbiAgICBjb2xvcjogaHNsKDIwNywgODYlLCA2MSUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTpsaW5lLXRocm91Z2g7XFxufVxcbi5zdW5rVGV4dCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8qIEVuZCBHYW1lIE1vZGFsICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbiNlbmRHYW1lQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4jZW5kR2FtZVN0YXR1cyB7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxufVxcbi5yZXN0YXJ0R2FtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDM4JSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5yZXN0YXJ0R2FtZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucG9zdE1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmxlZnRCb2FyZCwgLnJpZ2h0Qm9hcmQge1xcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xcbiAgICB9XFxuICAgICNnYW1lQm9hcmRSb3cge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBLHVCQUF1QjtBQUN2QjtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3luY29wYXRlOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdDp3Z2h0QDgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwMSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuaGVhZGVyPmgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5sZWZ0Qm9hcmQsIC5yaWdodEJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbn1cXG5cXG4uYm9hcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMXB4O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG4uYm9hcmRTdGF0dXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmJvbGQge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ucmVndWxhciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5ib2FyZEhpZ2hsaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDAsIDAlLCAzOCUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuI2dhbWVCb2FyZFJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBTcXVhcmUgKi9cXG5cXG4uc3F1YXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBLYW5pdDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnNxdWFyZSA+IGltZyB7XFxuICAgIGNvbG9yOmJsdWV2aW9sZXQ7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgODQsIDE0NSk7XFxufVxcbi5oaXQge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgNzcsIDc3KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59IFxcbi5taXNzIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBTaGlwIFN0YXR1cyAvIEdyaWQgKi9cXG4uc2hpcFN0YXR1cyB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnNoaXBUaXRsZSB7XFxuICAgIG1hcmdpbjogNXB4IDBweDtcXG59XFxuLnNoaXBTdW5rIHtcXG4gICAgY29sb3I6IGhzbCgyMDcsIDg2JSwgNjElKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6bGluZS10aHJvdWdoO1xcbn1cXG4uc3Vua1RleHQge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBFbmQgR2FtZSBNb2RhbCAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4jZW5kR2FtZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuI2VuZEdhbWVTdGF0dXMge1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG4ucmVzdGFydEdhbWUge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAzOCUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4ucmVzdGFydEdhbWU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnBvc3RNb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5sZWZ0Qm9hcmQsIC5yaWdodEJvYXJkIHtcXG4gICAgICAgIG1hcmdpbjogMjBweDtcXG4gICAgfVxcbiAgICAjZ2FtZUJvYXJkUm93IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgZ2V0QWxsU3F1YXJlcyxcbiAgZ2V0WFlmcm9tRWxlbWVudCxcbiAgcmVtb3ZlQWxsQ2hpbGRyZW4sXG59IGZyb20gJy4uL0RPTS9kb20taGVscGVycyc7XG5pbXBvcnQge1xuICBmb2N1c0JvYXJkLFxuICByZW5kZXJCb2FyZCxcbiAgcmVuZGVyQm9hcmRTdGF0dXMsXG4gIHJlbmRlckJvYXJkWFksXG4gIHJlbmRlck1vZGFsLFxuICByZW5kZXJTaGlwc1N0YXR1cyxcbiAgdXBkYXRlU2hpcHNTdW5rLFxufSBmcm9tICcuLi9ET00vcmVuZGVyLWRvbSc7XG5pbXBvcnQgY3Jvc3NoYWlyIGZyb20gJy4uLy4uL2ltYWdlcy9Dcm9zc2hhaXJzX1JlZC5zdmcnO1xuaW1wb3J0IHsgY29tcHV0ZXIsIHVzZXIgfSBmcm9tICcuLi9EYXRhL2dhbWUtb2JqZWN0cyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRJbnQgfSBmcm9tICcuLi9VdGlsaXRpZXMvaGVscGVyLWZ1bmN0aW9ucyc7XG5cbmxldCBfYmxvY2tVc2VySW5wdXQ7XG5cbmZ1bmN0aW9uIF9sb2FkQ3Jvc3NoYWlyKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgdGFyZ2V0SWNvbi5zcmMgPSBjcm9zc2hhaXI7XG4gIHRhcmdldEljb24uY2xhc3NMaXN0LmFkZCgnY3Jvc3NoYWlyJyk7XG4gIGV2ZW50LnRhcmdldC5hcHBlbmQodGFyZ2V0SWNvbik7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVDcm9zc2hhaXIoZXZlbnQpIHtcbiAgcmVtb3ZlQWxsQ2hpbGRyZW4oZXZlbnQudGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gX2FkZEhvdmVyQ3Jvc3NoYWlyRUwoKSB7XG4gIGdldEFsbFNxdWFyZXMoY29tcHV0ZXIuYm9hcmRDbGFzcykuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfbG9hZENyb3NzaGFpcik7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfcmVtb3ZlQ3Jvc3NoYWlyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVBdHRhY2tFdmVudExpc3RlbmVyKHNxdWFyZSkge1xuICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIF9sb2FkQ3Jvc3NoYWlyKTtcbiAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfcmVtb3ZlQ3Jvc3NoYWlyKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9oYW5kbGVBdHRhY2spO1xufVxuXG5mdW5jdGlvbiBfZW5kR2FtZSh3aW5uZXIpIHtcbiAgY29uc3QgZW5kTWVzc2FnZSA9XG4gICAgd2lubmVyID09PSB1c2VyXG4gICAgICA/ICdZb3UgV2luISBHb29kIGpvYiBzaW5raW5nIGFsbCB5b3VyIG9wcG9uZW50cyBzaGlwcyDwn5iAJ1xuICAgICAgOiAnQWxsIHlvdXIgc2hpcHMgd2VyZSBzdW5rLiBZb3UgbG9zdCDwn5mBJztcblxuICBnZXRBbGxTcXVhcmVzKGNvbXB1dGVyLmJvYXJkQ2xhc3MpLmZvckVhY2goKHNxdWFyZSkgPT5cbiAgICBfcmVtb3ZlQXR0YWNrRXZlbnRMaXN0ZW5lcihzcXVhcmUpXG4gICk7XG4gIHJlbmRlckJvYXJkKHVzZXIuYm9hcmQsIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICByZW5kZXJCb2FyZChjb21wdXRlci5ib2FyZCwgY29tcHV0ZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICByZW5kZXJNb2RhbChlbmRNZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gX2NvbXBUdXJuKCkge1xuICBjb25zdCB0YXJnZXQgPSBjb21wdXRlci5wbGF5ZXIuc2VuZFNtYXJ0QXR0YWNrKHVzZXIuYm9hcmQpO1xuICByZW5kZXJCb2FyZFhZKHVzZXIuYm9hcmQsIHRhcmdldFswXSwgdGFyZ2V0WzFdLCB1c2VyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcbiAgcmVuZGVyQm9hcmRTdGF0dXModXNlci5ib2FyZENsYXNzLCBgYCwgJ2JvbGQnKTtcbiAgdXBkYXRlU2hpcHNTdW5rKHVzZXIuYm9hcmQuZ2V0U2hpcCh0YXJnZXRbMF0sIHRhcmdldFsxXSksIHVzZXIpO1xuXG4gIGlmICh1c2VyLmJvYXJkLmFsbFN1bmsoKSkge1xuICAgIF9lbmRHYW1lKGNvbXB1dGVyKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb2N1c0JvYXJkKGNvbXB1dGVyLmJvYXJkQ2xhc3MpO1xuICByZW5kZXJCb2FyZFN0YXR1cyhjb21wdXRlci5ib2FyZENsYXNzLCBgUGxhY2UgeW91ciBhdHRhY2shYCwgJ2JvbGQnKTtcblxuICBfYmxvY2tVc2VySW5wdXQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX3VzZXJUdXJuKHgsIHkpIHtcbiAgX2Jsb2NrVXNlcklucHV0ID0gdHJ1ZTtcblxuICBjb21wdXRlci5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICByZW5kZXJCb2FyZFhZKGNvbXB1dGVyLmJvYXJkLCB4LCB5LCBjb21wdXRlci5ib2FyZENsYXNzLCBmYWxzZSk7XG4gIHJlbmRlckJvYXJkU3RhdHVzKGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGBgLCAnYm9sZCcpO1xuICB1cGRhdGVTaGlwc1N1bmsoY29tcHV0ZXIuYm9hcmQuZ2V0U2hpcCh4LCB5KSwgY29tcHV0ZXIpO1xuXG4gIGlmIChjb21wdXRlci5ib2FyZC5hbGxTdW5rKCkpIHtcbiAgICBfZW5kR2FtZSh1c2VyKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb2N1c0JvYXJkKHVzZXIuYm9hcmRDbGFzcyk7XG4gIHJlbmRlckJvYXJkU3RhdHVzKHVzZXIuYm9hcmRDbGFzcywgYFRoaW5raW5nLi4uYCwgJ2JvbGQnKTtcblxuICBzZXRUaW1lb3V0KF9jb21wVHVybiwgTWF0aC5tYXgoNTAwLCBnZW5lcmF0ZVJhbmRJbnQoMjAwMCkpKTtcbn1cblxuZnVuY3Rpb24gX2hhbmRsZUF0dGFjayhldmVudCkge1xuICBpZiAoX2Jsb2NrVXNlcklucHV0KSByZXR1cm47XG5cbiAgY29uc3Qgc3F1YXJlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zcXVhcmUnKTtcbiAgX3JlbW92ZUF0dGFja0V2ZW50TGlzdGVuZXIoc3F1YXJlKTtcbiAgcmVtb3ZlQWxsQ2hpbGRyZW4oc3F1YXJlKTtcblxuICBfdXNlclR1cm4oLi4uZ2V0WFlmcm9tRWxlbWVudChzcXVhcmUpKTtcbn1cblxuZnVuY3Rpb24gX3NldHVwQXR0YWNrRXZlbnRMaXN0ZW5lcigpIHtcbiAgZ2V0QWxsU3F1YXJlcyhjb21wdXRlci5ib2FyZENsYXNzKS5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlQXR0YWNrKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgX2Jsb2NrVXNlcklucHV0ID0gZmFsc2U7XG4gIGZvY3VzQm9hcmQoY29tcHV0ZXIuYm9hcmRDbGFzcyk7XG5cbiAgX2FkZEhvdmVyQ3Jvc3NoYWlyRUwoKTtcbiAgX3NldHVwQXR0YWNrRXZlbnRMaXN0ZW5lcigpO1xuXG4gIHJlbmRlckJvYXJkKHVzZXIuYm9hcmQsIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICByZW5kZXJCb2FyZChjb21wdXRlci5ib2FyZCwgY29tcHV0ZXIuYm9hcmRDbGFzcywgdHJ1ZSk7XG5cbiAgcmVuZGVyU2hpcHNTdGF0dXMoKTtcbiAgcmVuZGVyQm9hcmRTdGF0dXModXNlci5ib2FyZENsYXNzLCBgYCwgJ2JvbGQnKTtcbiAgcmVuZGVyQm9hcmRTdGF0dXMoY29tcHV0ZXIuYm9hcmRDbGFzcywgYFBsYWNlIHlvdXIgYXR0YWNrIWAsICdib2xkJyk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9GYWN0b3J5L2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL0ZhY3RvcnkvcGxheWVyJztcbmltcG9ydCBTaGlwIGZyb20gJy4uL0ZhY3Rvcnkvc2hpcCc7XG5pbXBvcnQgeyBzaGlwVGVtcGxhdGUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgcmVuZGVyR3JpZCxcbiAgcmVuZGVyQm9hcmRUaXRsZSxcbiAgcmVuZGVyQm9hcmRTdGF0dXMsXG4gIGZvY3VzQm9hcmQsXG4gIHNldHVwU2hpcHNTdW5rLFxuICByZW1vdmVNb2RhbCxcbiAgcmVtb3ZlUmVzdGFydEdhbWUsXG59IGZyb20gJy4uL0RPTS9yZW5kZXItZG9tJztcbmltcG9ydCBpbml0aWF0ZVNoaXBQbGFjZW1lbnQgZnJvbSAnLi9zaGlwLXBsYWNlbWVudC1jb250cm9sbGVyJztcbmltcG9ydCB7IHVzZXIsIGNvbXB1dGVyIH0gZnJvbSAnLi4vRGF0YS9nYW1lLW9iamVjdHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTaGlwcyhzaGlwSW5mbykge1xuICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcblxuICBzaGlwSW5mby5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcEFycmF5LnB1c2goU2hpcChzaGlwLmxlbmd0aCwgc2hpcC5uYW1lKSk7XG4gIH0pO1xuXG4gIHJldHVybiBzaGlwQXJyYXk7XG59XG5cbmZ1bmN0aW9uIF9zZXR1cEdhbWVPYmplY3RzKHBsYXllcjEsIHBsYXllcjIsIHNoaXBJbmZvKSB7XG4gIHBsYXllcjEucGxheWVyID0gUGxheWVyKHBsYXllcjEubmFtZSk7XG4gIHBsYXllcjIucGxheWVyID0gUGxheWVyKHBsYXllcjIubmFtZSk7XG5cbiAgcGxheWVyMS5ib2FyZCA9IEdhbWVib2FyZCgpO1xuICBwbGF5ZXIyLmJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgcGxheWVyMS5zaGlwcyA9IGdlbmVyYXRlU2hpcHMoc2hpcEluZm8pO1xuICBwbGF5ZXIyLnNoaXBzID0gZ2VuZXJhdGVTaGlwcyhzaGlwSW5mbyk7XG59XG5cbmZ1bmN0aW9uIF9zZXR1cERPTShwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gIHJlbmRlckdyaWQocGxheWVyMS5ib2FyZENsYXNzKTtcbiAgcmVuZGVyR3JpZChwbGF5ZXIyLmJvYXJkQ2xhc3MpO1xuXG4gIHJlbmRlckJvYXJkVGl0bGUocGxheWVyMS5wbGF5ZXIuZ2V0TmFtZSgpLCBwbGF5ZXIxLmJvYXJkQ2xhc3MpO1xuICByZW5kZXJCb2FyZFRpdGxlKHBsYXllcjIucGxheWVyLmdldE5hbWUoKSwgcGxheWVyMi5ib2FyZENsYXNzKTtcblxuICByZW5kZXJCb2FyZFN0YXR1cyhwbGF5ZXIxLmJvYXJkQ2xhc3MsICcnLCAnYm9sZCcpOyAvLyBjbGVhcnMgYW55IHByZXZpb3VzIGJvYXJkIHN0YXR1c1xuICByZW5kZXJCb2FyZFN0YXR1cyhwbGF5ZXIyLmJvYXJkQ2xhc3MsICcnLCAnYm9sZCcpO1xuXG4gIHNldHVwU2hpcHNTdW5rKCk7XG4gIF9hZGRDbGlja1Jlc3RhcnRFTCgpO1xuXG4gIGZvY3VzQm9hcmQocGxheWVyMS5ib2FyZENsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2FkZENsaWNrUmVzdGFydEVMKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGFydEdhbWUnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9yZXN0YXJ0R2FtZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfcmVzdGFydEdhbWUoKSB7XG4gIHJlbW92ZU1vZGFsKCk7XG4gIHJlbW92ZVJlc3RhcnRHYW1lKCk7XG4gIHNldHVwR2FtZSgpO1xuICBpbml0aWF0ZVNoaXBQbGFjZW1lbnQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBHYW1lKCkge1xuICBfc2V0dXBHYW1lT2JqZWN0cyh1c2VyLCBjb21wdXRlciwgc2hpcFRlbXBsYXRlKTtcbiAgX3NldHVwRE9NKHVzZXIsIGNvbXB1dGVyKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgeyBjb21wdXRlciwgdXNlciB9IGZyb20gJy4uL0RhdGEvZ2FtZS1vYmplY3RzJztcbmltcG9ydCB7IHJlbmRlckJvYXJkLCByZW5kZXJCb2FyZFN0YXR1cyB9IGZyb20gJy4uL0RPTS9yZW5kZXItZG9tJztcbmltcG9ydCB7XG4gIGdlbmVyYXRlUmFuZEJvb2wsXG4gIGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXksXG59IGZyb20gJy4uL1V0aWxpdGllcy9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7XG4gIGdldFNxdWFyZUVsZW1lbnRzLFxuICBnZXRYWWZyb21FbGVtZW50LFxuICB0b2dnbGVTaGlwLFxufSBmcm9tICcuLi9ET00vZG9tLWhlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0QXJyYXlDb29yZHMgfSBmcm9tICcuLi9GYWN0b3J5L2dhbWVib2FyZC1oZWxwZXJzJztcbmltcG9ydCBzdGFydEdhbWUgZnJvbSAnLi9nYW1lcGxheS1jb250cm9sbGVyJztcblxubGV0IGN1cnJlbnRFbGVtZW50c1dpdGhFTDtcblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb20ocGxheWVyKSB7XG4gIHBsYXllci5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3QgbmV4dFZlcnQgPSBnZW5lcmF0ZVJhbmRCb29sKCk7XG4gICAgY29uc3QgdmFsaWRMb2NhdGlvbnMgPSBwbGF5ZXIuYm9hcmQuZ2V0VmFsaWRTaGlwUGxhY2VtZW50cyhzaGlwLCBuZXh0VmVydCk7XG4gICAgY29uc3QgW25leHRYLCBuZXh0WV0gPSBnZXRSYW5kb21JdGVtRnJvbUFycmF5KHZhbGlkTG9jYXRpb25zKTtcblxuICAgIHBsYXllci5ib2FyZC5wbGFjZVNoaXAoc2hpcCwgbmV4dFgsIG5leHRZLCBuZXh0VmVydCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlQWxsU2hpcFBsYWNlbWVudEVMKCkge1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgX2hhbmRsZVJvdGF0ZSk7XG5cbiAgY3VycmVudEVsZW1lbnRzV2l0aEVMLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfaGFuZGxlSG92ZXIpO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9oYW5kbGVIb3Zlcik7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9oYW5kbGVDbGljayk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfaGFuZGxlSG92ZXIoZXZlbnQpIHtcbiAgY29uc3QgW3gsIHldID0gZ2V0WFlmcm9tRWxlbWVudChldmVudC50YXJnZXQpO1xuICBjb25zdCBjdXJyZW50U2hpcCA9IHVzZXIuc2hpcHNbdXNlci5zaGlwSW5kZXhdO1xuICBjb25zdCBjdXJyZW50VmVydGljYWwgPSB1c2VyLnNoaXBWZXJ0aWNhbDtcblxuICBjb25zdCBhcnJheUNvb3JkcyA9IGdldEFycmF5Q29vcmRzKFxuICAgIGN1cnJlbnRTaGlwLmdldExlbmd0aCgpLFxuICAgIHgsXG4gICAgeSxcbiAgICBjdXJyZW50VmVydGljYWxcbiAgKTtcbiAgY29uc3QgYXJyYXlDb29yZEVsZW1lbnRzID0gZ2V0U3F1YXJlRWxlbWVudHMoYXJyYXlDb29yZHMsIHVzZXIpO1xuICB0b2dnbGVTaGlwKGFycmF5Q29vcmRFbGVtZW50cywgZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBfaGFuZGxlUm90YXRlKGV2ZW50KSB7XG4gIGlmIChldmVudC5jb2RlID09PSAnS2V5UicpIHtcbiAgICB1c2VyLnNoaXBWZXJ0aWNhbCA9ICF1c2VyLnNoaXBWZXJ0aWNhbDtcbiAgICBfcmVtb3ZlQWxsU2hpcFBsYWNlbWVudEVMKCk7XG4gICAgcmVuZGVyQm9hcmQodXNlci5ib2FyZCwgdXNlci5ib2FyZENsYXNzLCBmYWxzZSk7XG4gICAgX3BsYWNlU2hpcHNNYW51YWwodXNlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2hhbmRsZUNsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IFt4LCB5XSA9IGdldFhZZnJvbUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgY29uc3QgY3VycmVudFNoaXAgPSB1c2VyLnNoaXBzW3VzZXIuc2hpcEluZGV4XTtcbiAgY29uc3QgY3VycmVudEJvYXJkID0gdXNlci5ib2FyZDtcbiAgY29uc3QgY3VycmVudFZlcnRpY2FsID0gdXNlci5zaGlwVmVydGljYWw7XG5cbiAgY3VycmVudEJvYXJkLnBsYWNlU2hpcChjdXJyZW50U2hpcCwgeCwgeSwgY3VycmVudFZlcnRpY2FsKTtcbiAgX3JlbW92ZUFsbFNoaXBQbGFjZW1lbnRFTCgpO1xuICByZW5kZXJCb2FyZChjdXJyZW50Qm9hcmQsIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICB1c2VyLnNoaXBJbmRleCArPSAxO1xuXG4gIGlmICh1c2VyLnNoaXBzW3VzZXIuc2hpcEluZGV4XSAhPT0gdW5kZWZpbmVkKSBfcGxhY2VTaGlwc01hbnVhbCh1c2VyKTtcbiAgZWxzZSBzdGFydEdhbWUoKTtcbn1cblxuZnVuY3Rpb24gX2FkZFJvdGF0ZVNoaXBFTCgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIF9oYW5kbGVSb3RhdGUpO1xufVxuXG5mdW5jdGlvbiBfYWRkSG92ZXJTaGlwUGxhY2VFTChwbGF5ZXIsIHZhbGlkTG9jYXRpb25zKSB7XG4gIGNvbnN0IHZhbGlkTG9jRWxlbWVudHMgPSBnZXRTcXVhcmVFbGVtZW50cyh2YWxpZExvY2F0aW9ucywgcGxheWVyKTtcbiAgY3VycmVudEVsZW1lbnRzV2l0aEVMID0gdmFsaWRMb2NFbGVtZW50cztcblxuICB2YWxpZExvY0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfaGFuZGxlSG92ZXIpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9oYW5kbGVIb3Zlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfYWRkQ2xpY2tTaGlwUGxhY2VFTChwbGF5ZXIsIHZhbGlkTG9jYXRpb25zKSB7XG4gIGNvbnN0IHZhbGlkTG9jRWxlbWVudHMgPSBnZXRTcXVhcmVFbGVtZW50cyh2YWxpZExvY2F0aW9ucywgcGxheWVyKTtcblxuICB2YWxpZExvY0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2hhbmRsZUNsaWNrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIF9wbGFjZVNoaXBzTWFudWFsKHBsYXllcikge1xuICBjb25zdCBjdXJyZW50U2hpcCA9IHBsYXllci5zaGlwc1twbGF5ZXIuc2hpcEluZGV4XTtcbiAgY29uc3QgY3VycmVudFZlcnRpY2FsID0gcGxheWVyLnNoaXBWZXJ0aWNhbDtcblxuICBjb25zdCB2YWxpZExvY2F0aW9ucyA9IHBsYXllci5ib2FyZC5nZXRWYWxpZFNoaXBQbGFjZW1lbnRzKFxuICAgIGN1cnJlbnRTaGlwLFxuICAgIGN1cnJlbnRWZXJ0aWNhbFxuICApO1xuXG4gIF9hZGRSb3RhdGVTaGlwRUwoKTtcbiAgX2FkZEhvdmVyU2hpcFBsYWNlRUwocGxheWVyLCB2YWxpZExvY2F0aW9ucyk7XG4gIF9hZGRDbGlja1NoaXBQbGFjZUVMKHBsYXllciwgdmFsaWRMb2NhdGlvbnMpO1xuXG4gIHJlbmRlckJvYXJkU3RhdHVzKFxuICAgIHBsYXllci5ib2FyZENsYXNzLFxuICAgIGBQbGFjZSAke2N1cnJlbnRTaGlwLmdldE5hbWUoKX1gLFxuICAgICdib2xkJ1xuICApO1xuICByZW5kZXJCb2FyZFN0YXR1cyhcbiAgICBwbGF5ZXIuYm9hcmRDbGFzcyxcbiAgICBgKFByZXNzIFIgdG8gcm90YXRlIHNoaXApYCxcbiAgICAncmVndWxhcicsXG4gICAgZmFsc2VcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhdGVTaGlwUGxhY2VtZW50KCkge1xuICB1c2VyLnNoaXBWZXJ0aWNhbCA9IHRydWU7XG4gIHVzZXIuc2hpcEluZGV4ID0gMDtcblxuICBwbGFjZVNoaXBzUmFuZG9tKGNvbXB1dGVyKTtcbiAgX3BsYWNlU2hpcHNNYW51YWwodXNlcik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3F1YXJlRWxlbWVudHMoYXJyYXlMb2NhdGlvbnMsIHBsYXllcikge1xuICByZXR1cm4gYXJyYXlMb2NhdGlvbnMubWFwKChsb2MpID0+XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGxheWVyLmJvYXJkQ2xhc3N9JHtsb2NbMF19JHtsb2NbMV19YClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhZZnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gW051bWJlcihlbGVtZW50LmlkLnNsaWNlKC0yLCAtMSkpLCBOdW1iZXIoZWxlbWVudC5pZC5zbGljZSgtMSkpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNoaXAoYXJyYXlFbGVtZW50cywgZXZlbnQpIHtcbiAgYXJyYXlFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWVudGVyJykgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgZWxzZSBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxTcXVhcmVzKGJvYXJkQ2xhc3MpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JvYXJkQ2xhc3N9IC5zcXVhcmVgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcm1VcENhc2VXaHRTcGFjZSB9IGZyb20gJy4uL1V0aWxpdGllcy9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkcmVuIH0gZnJvbSAnLi9kb20taGVscGVycyc7XG5cbmZ1bmN0aW9uIF9yZW5kZXJTdGF0ZShib2FyZCwgeCwgeSwgbG9jYXRpb25JRCkge1xuICBjb25zdCBzdGF0ZSA9IGJvYXJkLmdldFN0YXRlKHgsIHkpO1xuICBpZiAoc3RhdGUgIT09ICdibGFuaycpIHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtsb2NhdGlvbklEfWApO1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKHN0YXRlKTtcbiAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBzdGF0ZSA9PT0gJ2hpdCcgPyAnWCcgOiAnTyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3JlbmRlclNoaXBzKGJvYXJkLCB4LCB5LCBsb2NhdGlvbklEKSB7XG4gIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2xvY2F0aW9uSUR9YCk7XG4gIGlmIChib2FyZC5nZXRTaGlwKHgsIHkpICE9PSB1bmRlZmluZWQpIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gIGVsc2Ugc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbn1cblxuZnVuY3Rpb24gX2Rpc3BsYXlNb2RhbChldmVudCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBjb25zdCBwb3N0TW9kYWxSZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RNb2RhbCAucmVzdGFydEdhbWUnKTtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHBvc3RNb2RhbFJlc3RhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck1vZGFsKGVuZE1lc3NhZ2UpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgY29uc3QgbW9kYWxSZXN0YXJ0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnJlc3RhcnRHYW1lJyk7XG5cbiAgbW9kYWxSZXN0YXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kR2FtZVN0YXR1cycpLnRleHRDb250ZW50ID0gZW5kTWVzc2FnZTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfZGlzcGxheU1vZGFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU1vZGFsKCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUmVzdGFydEdhbWUoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXJ0R2FtZScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzQm9hcmQoYm9hcmRTaWRlKSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZWZ0Qm9hcmQsIC5yaWdodEJvYXJkJylcbiAgICAuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdib2FyZEhpZ2hsaWdodCcpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmRTaWRlfWApLmNsYXNzTGlzdC5hZGQoJ2JvYXJkSGlnaGxpZ2h0Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJHcmlkKGJvYXJkU2lkZSkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkU2lkZX0gPiAuYm9hcmRgKTtcbiAgcmVtb3ZlQWxsQ2hpbGRyZW4oYm9hcmQpO1xuXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkgKz0gMSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICBzcXVhcmUuaWQgPSBib2FyZFNpZGUgKyB4ICsgeTtcbiAgICAgIGJvYXJkLmFwcGVuZChzcXVhcmUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9hcmRUaXRsZSh0aXRsZSwgYm9hcmRTaWRlKSB7XG4gIGNvbnN0IGJvYXJkVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZFNpZGV9ID4gLmJvYXJkVGl0bGVgKTtcbiAgYm9hcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9hcmRTdGF0dXMoXG4gIGJvYXJkU2lkZSxcbiAgc3RhdHVzLFxuICBzdHlsZSxcbiAgY2xlYXJTdGF0dXMgPSB0cnVlXG4pIHtcbiAgY29uc3QgYm9hcmRTdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuJHtib2FyZFNpZGV9ID4gLmJvYXJkU3RhdHVzYFxuICApO1xuXG4gIGlmIChjbGVhclN0YXR1cyA9PT0gdHJ1ZSkgcmVtb3ZlQWxsQ2hpbGRyZW4oYm9hcmRTdGF0dXNDb250YWluZXIpO1xuXG4gIGNvbnN0IGJvYXJkU3RhdHVzRElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkU3RhdHVzRElWLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xuICBib2FyZFN0YXR1c0RJVi50ZXh0Q29udGVudCA9IHN0YXR1cztcblxuICBib2FyZFN0YXR1c0NvbnRhaW5lci5hcHBlbmQoYm9hcmRTdGF0dXNESVYpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwU2hpcHNTdW5rKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3Vua1RleHQsIC5zaGlwU3RhdHVzJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcFN1bmsnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwU3VuaycpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNoaXBzU3RhdHVzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcFN0YXR1cycpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTaGlwc1N1bmsoc2hpcCwgcGxheWVyKSB7XG4gIGlmIChzaGlwICYmIHNoaXAuaXNTdW5rKCkpIHtcbiAgICBjb25zdCBzaGlwU2VsZWN0b3IgPSBgLiR7cGxheWVyLmJvYXJkQ2xhc3N9IC4ke3JtVXBDYXNlV2h0U3BhY2UoXG4gICAgICBzaGlwLmdldE5hbWUoKVxuICAgICl9YDtcbiAgICBjb25zdCBzaGlwU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2hpcFNlbGVjdG9yKTtcbiAgICBzaGlwU3Bhbi5jbGFzc0xpc3QuYWRkKCdzaGlwU3VuaycpO1xuXG4gICAgc2hpcFNwYW4ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgcmVuZGVyQm9hcmRTdGF0dXMocGxheWVyLmJvYXJkQ2xhc3MsIGAke3NoaXAuZ2V0TmFtZSgpfSB3YXMgc3VuayFgLCAnYm9sZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZFhZKGJvYXJkLCB4LCB5LCBib2FyZFNpZGUsIGhpZGVTaGlwcykge1xuICBjb25zdCBsb2NhdGlvbklEID0gYm9hcmRTaWRlICsgeCArIHk7XG4gIGlmIChoaWRlU2hpcHMgPT09IGZhbHNlKSBfcmVuZGVyU2hpcHMoYm9hcmQsIHgsIHksIGxvY2F0aW9uSUQpO1xuICBfcmVuZGVyU3RhdGUoYm9hcmQsIHgsIHksIGxvY2F0aW9uSUQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9hcmQoYm9hcmQsIGJvYXJkU2lkZSwgaGlkZVNoaXBzKSB7XG4gIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkgKz0gMSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgcmVuZGVyQm9hcmRYWShib2FyZCwgeCwgeSwgYm9hcmRTaWRlLCBoaWRlU2hpcHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgdXNlckNvbnN0YW50cywgY29tcHV0ZXJDb25zdGFudHMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgdXNlciA9IHsgLi4udXNlckNvbnN0YW50cyB9O1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVyID0geyAuLi5jb21wdXRlckNvbnN0YW50cyB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEFycmF5Q29vcmRzKHNoaXBMZW5ndGgsIHgsIHksIGlzVmVydGljYWwpIHtcbiAgY29uc3QgYXJyYXlDb29yZHMgPSBbXTtcblxuICBmb3IgKGxldCBzaGlwTG9jYXRpb24gPSAwOyBzaGlwTG9jYXRpb24gPCBzaGlwTGVuZ3RoOyBzaGlwTG9jYXRpb24gKz0gMSkge1xuICAgIGNvbnN0IG5ld1ggPSB4ICsgKGlzVmVydGljYWwgPT09IGZhbHNlID8gc2hpcExvY2F0aW9uIDogMCk7XG4gICAgY29uc3QgbmV3WSA9IHkgKyAoaXNWZXJ0aWNhbCA9PT0gdHJ1ZSA/IHNoaXBMb2NhdGlvbiA6IDApO1xuICAgIGFycmF5Q29vcmRzLnB1c2goW25ld1gsIG5ld1ldKTtcbiAgfVxuICByZXR1cm4gYXJyYXlDb29yZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb29yZElzV2l0aGluQm9hcmQoeCwgeSwgc2l6ZSkge1xuICByZXR1cm4geCA+PSAwICYmIHggPCBzaXplICYmIHkgPj0gMCAmJiB5IDwgc2l6ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvbmdlc3RCbGFua1goeCwgeSwgYm9hcmQpIHtcbiAgbGV0IG51bWJlckJsYW5rcyA9IDA7XG4gIHdoaWxlIChib2FyZC5pc1ZhbGlkQXR0YWNrTG9jKHggKyBudW1iZXJCbGFua3MsIHkpKSB7XG4gICAgbnVtYmVyQmxhbmtzICs9IDE7XG4gIH1cbiAgcmV0dXJuIG51bWJlckJsYW5rcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvbmdlc3RCbGFua1koeCwgeSwgYm9hcmQpIHtcbiAgbGV0IG51bWJlckJsYW5rcyA9IDA7XG4gIHdoaWxlIChib2FyZC5pc1ZhbGlkQXR0YWNrTG9jKHgsIHkgKyBudW1iZXJCbGFua3MpKSB7XG4gICAgbnVtYmVyQmxhbmtzICs9IDE7XG4gIH1cbiAgcmV0dXJuIG51bWJlckJsYW5rcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvbmdlc3RCbGFua3MoYm9hcmQpIHtcbiAgbGV0IGxvbmdlc3RCbGFua3MgPSBbXTtcbiAgbGV0IGN1cnJlbnRMb25nZXN0ID0gMDtcblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5ICs9IDEpIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4ICs9IDEpIHtcbiAgICAgIGNvbnN0IGxlbmd0aFggPSBnZXRMb25nZXN0QmxhbmtYKHgsIHksIGJvYXJkKTtcbiAgICAgIGNvbnN0IGxlbmd0aFkgPSBnZXRMb25nZXN0QmxhbmtZKHgsIHksIGJvYXJkKTtcblxuICAgICAgaWYgKGxlbmd0aFggPiBsZW5ndGhZICYmIGxlbmd0aFggPj0gY3VycmVudExvbmdlc3QpIHtcbiAgICAgICAgaWYgKGxlbmd0aFggPiBjdXJyZW50TG9uZ2VzdCkgbG9uZ2VzdEJsYW5rcyA9IFtdO1xuICAgICAgICBsb25nZXN0QmxhbmtzLnB1c2goW01hdGguZmxvb3IoeCArIGxlbmd0aFggLyAyKSwgeV0pO1xuICAgICAgICBjdXJyZW50TG9uZ2VzdCA9IGxlbmd0aFg7XG4gICAgICB9IGVsc2UgaWYgKGxlbmd0aFkgPiBsZW5ndGhYICYmIGxlbmd0aFkgPj0gY3VycmVudExvbmdlc3QpIHtcbiAgICAgICAgaWYgKGxlbmd0aFkgPiBjdXJyZW50TG9uZ2VzdCkgbG9uZ2VzdEJsYW5rcyA9IFtdO1xuICAgICAgICBsb25nZXN0QmxhbmtzLnB1c2goW3gsIE1hdGguZmxvb3IoeSArIGxlbmd0aFkgLyAyKV0pO1xuICAgICAgICBjdXJyZW50TG9uZ2VzdCA9IGxlbmd0aFk7XG4gICAgICB9IGVsc2UgaWYgKGxlbmd0aFkgPT09IGxlbmd0aFggJiYgbGVuZ3RoWCA+PSBjdXJyZW50TG9uZ2VzdCkge1xuICAgICAgICBpZiAobGVuZ3RoWCA+IGN1cnJlbnRMb25nZXN0KSBsb25nZXN0QmxhbmtzID0gW107XG4gICAgICAgIGxvbmdlc3RCbGFua3MucHVzaChcbiAgICAgICAgICBbTWF0aC5mbG9vcih4ICsgbGVuZ3RoWCAvIDIpLCB5XSxcbiAgICAgICAgICBbeCwgTWF0aC5mbG9vcih5ICsgbGVuZ3RoWSAvIDIpXVxuICAgICAgICApO1xuICAgICAgICBjdXJyZW50TG9uZ2VzdCA9IGxlbmd0aFg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvbmdlc3RCbGFua3M7XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21JdGVtRnJvbUFycmF5IH0gZnJvbSAnLi4vVXRpbGl0aWVzL2hlbHBlci1mdW5jdGlvbnMnO1xuaW1wb3J0IHsgY29vcmRJc1dpdGhpbkJvYXJkLCBnZXRBcnJheUNvb3JkcyB9IGZyb20gJy4vZ2FtZWJvYXJkLWhlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IF9zaXplID0gMTA7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLW5ldy1hcnJheVxuICBjb25zdCBfYm9hcmQgPSBbLi4ubmV3IEFycmF5KF9zaXplKV0ubWFwKCgpID0+IG5ldyBBcnJheShfc2l6ZSkpO1xuICBjb25zdCBfc2hpcHMgPSBbXTtcblxuICBmb3IgKGxldCB4ID0gMDsgeCA8IF9zaXplOyB4ICs9IDEpIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IF9zaXplOyB5ICs9IDEpIHtcbiAgICAgIF9ib2FyZFt4XVt5XSA9IHtcbiAgICAgICAgc2hpcDogdW5kZWZpbmVkLFxuICAgICAgICBzdGF0ZTogJ2JsYW5rJyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoeCwgeSkge1xuICAgIHJldHVybiBfYm9hcmRbeF1beV0uc3RhdGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTaGlwKHgsIHkpIHtcbiAgICByZXR1cm4gX2JvYXJkW3hdW3ldLnNoaXA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBdmFpbGFibGVUYXJnZXRzKCkge1xuICAgIGNvbnN0IHRhcmdldHMgPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IF9zaXplOyB4ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgX3NpemU7IHkgKz0gMSkge1xuICAgICAgICBpZiAoZ2V0U3RhdGUoeCwgeSkgPT09ICdibGFuaycpIHRhcmdldHMucHVzaChbeCwgeV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFF0eVN1bmsoKSB7XG4gICAgcmV0dXJuIF9zaGlwcy5yZWR1Y2UoXG4gICAgICAocHJldmlvdXMsIGN1cnJlbnQpID0+IHByZXZpb3VzICsgKGN1cnJlbnQuaXNTdW5rKCkgPyAxIDogMCksXG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbFN1bmsoKSB7XG4gICAgaWYgKF9zaGlwcy5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBfc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNWYWxpZFBsYWNlbWVudChzaGlwTGVuZ3RoLCB4LCB5LCBpc1ZlcnRpY2FsKSB7XG4gICAgcmV0dXJuIGdldEFycmF5Q29vcmRzKHNoaXBMZW5ndGgsIHgsIHksIGlzVmVydGljYWwpLmV2ZXJ5KFxuICAgICAgKHh5Q29vcmRzKSA9PlxuICAgICAgICBjb29yZElzV2l0aGluQm9hcmQoLi4ueHlDb29yZHMsIF9zaXplKSAmJlxuICAgICAgICBnZXRTaGlwKC4uLnh5Q29vcmRzKSA9PT0gdW5kZWZpbmVkXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZhbGlkU2hpcFBsYWNlbWVudHMoc2hpcCwgaXNWZXJ0aWNhbCkge1xuICAgIGNvbnN0IHZhbGlkTG9jYXRpb25zID0gW107XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgICBpZiAoaXNWYWxpZFBsYWNlbWVudChzaGlwLmdldExlbmd0aCgpLCB4LCB5LCBpc1ZlcnRpY2FsKSkge1xuICAgICAgICAgIHZhbGlkTG9jYXRpb25zLnB1c2goW3gsIHldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWxpZExvY2F0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCB4LCB5LCBpc1ZlcnRpY2FsKSB7XG4gICAgaWYgKGlzVmFsaWRQbGFjZW1lbnQoc2hpcC5nZXRMZW5ndGgoKSwgeCwgeSwgaXNWZXJ0aWNhbCkpIHtcbiAgICAgIGdldEFycmF5Q29vcmRzKHNoaXAuZ2V0TGVuZ3RoKCksIHgsIHksIGlzVmVydGljYWwpLmZvckVhY2goKHh5Q29vcmRzKSA9PiB7XG4gICAgICAgIF9ib2FyZFt4eUNvb3Jkc1swXV1beHlDb29yZHNbMV1dLnNoaXAgPSBzaGlwO1xuICAgICAgfSk7XG4gICAgICBfc2hpcHMucHVzaChzaGlwKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVmFsaWRBdHRhY2tMb2MoeCwgeSkge1xuICAgIHJldHVybiBjb29yZElzV2l0aGluQm9hcmQoeCwgeSwgX3NpemUpICYmIGdldFN0YXRlKHgsIHkpID09PSAnYmxhbmsnO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgaWYgKCFpc1ZhbGlkQXR0YWNrTG9jKHgsIHkpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoZ2V0U2hpcCh4LCB5KSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBnZXRTaGlwKHgsIHkpLmhpdChbeCwgeV0pO1xuICAgICAgX2JvYXJkW3hdW3ldLnN0YXRlID0gJ2hpdCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9ib2FyZFt4XVt5XS5zdGF0ZSA9ICdtaXNzJztcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRCbGFua05laWdoYm9ycyh4LCB5KSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIFt4ICsgMSwgeV0sXG4gICAgICBbeCAtIDEsIHldLFxuICAgICAgW3gsIHkgKyAxXSxcbiAgICAgIFt4LCB5IC0gMV0sXG4gICAgXS5maWx0ZXIoKG5laWdoYm9yKSA9PiBpc1ZhbGlkQXR0YWNrTG9jKC4uLm5laWdoYm9yKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSYW5kb21CbGFua05laWdoYm9yKGxvYykge1xuICAgIHJldHVybiBnZXRCbGFua05laWdoYm9ycyguLi5sb2MpLmxlbmd0aCA9PT0gMFxuICAgICAgPyBbXVxuICAgICAgOiBnZXRSYW5kb21JdGVtRnJvbUFycmF5KGdldEJsYW5rTmVpZ2hib3JzKC4uLmxvYykpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRTdGF0ZSxcbiAgICBnZXRTaGlwLFxuICAgIGdldEF2YWlsYWJsZVRhcmdldHMsXG4gICAgZ2V0UXR5U3VuayxcbiAgICBhbGxTdW5rLFxuICAgIGlzVmFsaWRQbGFjZW1lbnQsXG4gICAgZ2V0VmFsaWRTaGlwUGxhY2VtZW50cyxcbiAgICBwbGFjZVNoaXAsXG4gICAgaXNWYWxpZEF0dGFja0xvYyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGdldEJsYW5rTmVpZ2hib3JzLFxuICAgIGdldFJhbmRvbUJsYW5rTmVpZ2hib3IsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21JdGVtRnJvbUFycmF5IH0gZnJvbSAnLi4vVXRpbGl0aWVzL2hlbHBlci1mdW5jdGlvbnMnO1xuaW1wb3J0IHsgZ2V0TG9uZ2VzdEJsYW5rcyB9IGZyb20gJy4vZ2FtZWJvYXJkLWhlbHBlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VuZExvbmdlc3RCbGFua0F0dGFjayhib2FyZCkge1xuICBjb25zdCBsb25nZXN0QmxhbmtzID0gZ2V0TG9uZ2VzdEJsYW5rcyhib2FyZCk7XG4gIGNvbnN0IFtuZXh0WCwgbmV4dFldID0gZ2V0UmFuZG9tSXRlbUZyb21BcnJheShsb25nZXN0QmxhbmtzKTtcbiAgY29uc3QgaXNWYWxpZEF0dGFjayA9IGJvYXJkLnJlY2VpdmVBdHRhY2sobmV4dFgsIG5leHRZKTtcblxuICByZXR1cm4gW2lzVmFsaWRBdHRhY2ssIFtuZXh0WCwgbmV4dFldXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRSYW5kb21BdHRhY2soYm9hcmQpIHtcbiAgY29uc3QgW25leHRYLCBuZXh0WV0gPSBnZXRSYW5kb21JdGVtRnJvbUFycmF5KGJvYXJkLmdldEF2YWlsYWJsZVRhcmdldHMoKSk7XG4gIGNvbnN0IGlzVmFsaWRBdHRhY2sgPSBib2FyZC5yZWNlaXZlQXR0YWNrKG5leHRYLCBuZXh0WSk7XG5cbiAgcmV0dXJuIFtpc1ZhbGlkQXR0YWNrLCBbbmV4dFgsIG5leHRZXV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0TGluZWFyQXR0YWNrKFtbeDEsIHkxXSwgW3gyLCB5Ml1dKSB7XG4gIGNvbnN0IG5leHRYID0geDEgPT09IHgyID8geDEgOiB4MiArIE1hdGguc2lnbih4MiAtIHgxKTtcbiAgY29uc3QgbmV4dFkgPSB5MSA9PT0geTIgPyB5MSA6IHkyICsgTWF0aC5zaWduKHkyIC0geTEpO1xuXG4gIHJldHVybiBbbmV4dFgsIG5leHRZXTtcbn1cbiIsImltcG9ydCB7IHJlbW92ZUFycmF5ZnJvbU5lc3RlZEFycmF5IH0gZnJvbSAnLi4vVXRpbGl0aWVzL2hlbHBlci1mdW5jdGlvbnMnO1xuaW1wb3J0IHtcbiAgZ2V0TmV4dExpbmVhckF0dGFjayxcbiAgc2VuZExvbmdlc3RCbGFua0F0dGFjayxcbiAgc2VuZFJhbmRvbUF0dGFjayxcbn0gZnJvbSAnLi9wbGF5ZXItaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XG4gIGxldCBfbmFtZSA9IG5hbWU7XG4gIGxldCBfcHJldmlvdXNIaXRzID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gX25hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBzZXROYW1lKG5ld05hbWUpIHtcbiAgICBfbmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBfdXBkYXRlUHJldmlvdXNIaXRzKHgsIHksIGJvYXJkKSB7XG4gICAgY29uc3QgdGFyZ2V0U2hpcCA9IGJvYXJkLmdldFNoaXAoeCwgeSk7XG5cbiAgICBpZiAoYm9hcmQuZ2V0U3RhdGUoeCwgeSkgPT09ICdoaXQnKSBfcHJldmlvdXNIaXRzLnB1c2goW3gsIHldKTtcblxuICAgIGlmICh0YXJnZXRTaGlwICYmIHRhcmdldFNoaXAuaXNTdW5rKCkpIHtcbiAgICAgIF9wcmV2aW91c0hpdHMgPSByZW1vdmVBcnJheWZyb21OZXN0ZWRBcnJheShcbiAgICAgICAgX3ByZXZpb3VzSGl0cyxcbiAgICAgICAgdGFyZ2V0U2hpcC5nZXRIaXRMb2NhdGlvbnMoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfYXR0YWNrUHJldmlvdXNIaXRzKGJvYXJkKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IF9wcmV2aW91c0hpdHMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICBjb25zdCBsb2MgPSBfcHJldmlvdXNIaXRzW2luZGV4XTtcblxuICAgICAgaWYgKGJvYXJkLmdldFJhbmRvbUJsYW5rTmVpZ2hib3IobG9jKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IFtuZXh0WCwgbmV4dFldID0gYm9hcmQuZ2V0UmFuZG9tQmxhbmtOZWlnaGJvcihsb2MpO1xuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKG5leHRYLCBuZXh0WSk7XG5cbiAgICAgICAgaWYgKGJvYXJkLmdldFN0YXRlKG5leHRYLCBuZXh0WSkgPT09ICdoaXQnKSB7XG4gICAgICAgICAgX3ByZXZpb3VzSGl0cy5wdXNoKGxvYywgW25leHRYLCBuZXh0WV0pO1xuICAgICAgICAgIF9wcmV2aW91c0hpdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW25leHRYLCBuZXh0WV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZW5kTG9uZ2VzdEJsYW5rQXR0YWNrKGJvYXJkKVsxXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRTbWFydEF0dGFjayhib2FyZCwgaHVudGluZyA9ICdzbWFydCcpIHtcbiAgICBsZXQgbmV4dFg7XG4gICAgbGV0IG5leHRZO1xuXG4gICAgaWYgKF9wcmV2aW91c0hpdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoaHVudGluZyA9PT0gJ3NtYXJ0JylcbiAgICAgICAgWywgW25leHRYLCBuZXh0WV1dID0gc2VuZExvbmdlc3RCbGFua0F0dGFjayhib2FyZCk7XG4gICAgICBlbHNlIFssIFtuZXh0WCwgbmV4dFldXSA9IHNlbmRSYW5kb21BdHRhY2soYm9hcmQpO1xuICAgIH0gZWxzZSBpZiAoX3ByZXZpb3VzSGl0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIFtuZXh0WCwgbmV4dFldID0gYm9hcmQuZ2V0UmFuZG9tQmxhbmtOZWlnaGJvcihfcHJldmlvdXNIaXRzWzBdKTtcbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2sobmV4dFgsIG5leHRZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgW25leHRYLCBuZXh0WV0gPSBnZXROZXh0TGluZWFyQXR0YWNrKF9wcmV2aW91c0hpdHMuc2xpY2UoLTIpKTtcblxuICAgICAgaWYgKCFib2FyZC5pc1ZhbGlkQXR0YWNrTG9jKG5leHRYLCBuZXh0WSkpIHtcbiAgICAgICAgW25leHRYLCBuZXh0WV0gPSBnZXROZXh0TGluZWFyQXR0YWNrKFxuICAgICAgICAgIF9wcmV2aW91c0hpdHMuc2xpY2UoMCwgMikucmV2ZXJzZSgpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICghYm9hcmQuaXNWYWxpZEF0dGFja0xvYyhuZXh0WCwgbmV4dFkpKVxuICAgICAgICByZXR1cm4gX2F0dGFja1ByZXZpb3VzSGl0cyhib2FyZCk7XG5cbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2sobmV4dFgsIG5leHRZKTtcbiAgICB9XG4gICAgX3VwZGF0ZVByZXZpb3VzSGl0cyhuZXh0WCwgbmV4dFksIGJvYXJkKTtcbiAgICByZXR1cm4gW25leHRYLCBuZXh0WV07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgc2V0TmFtZSxcbiAgICBzZW5kU21hcnRBdHRhY2ssXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCwgbmFtZSkge1xuICBsZXQgX25hbWUgPSBuYW1lO1xuICBsZXQgX2xlbmd0aCA9IGxlbmd0aDtcbiAgaWYgKGxlbmd0aCA8PSAwIHx8IGxlbmd0aCA+IDEwKVxuICAgIHRocm93IG5ldyBFcnJvcignTGVuZ3RoIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgYW5kIGxlc3MgdGhhbiAxMScpO1xuXG4gIGNvbnN0IF9oaXRMb2NhdGlvbiA9IFtdO1xuXG4gIGZ1bmN0aW9uIGhpdChsb2NhdGlvbikge1xuICAgIF9oaXRMb2NhdGlvbi5wdXNoKGxvY2F0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIF9uYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SGl0TG9jYXRpb25zKCkge1xuICAgIHJldHVybiBfaGl0TG9jYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBzZXROYW1lKG5ld05hbWUpIHtcbiAgICBfbmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIF9sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRMZW5ndGgobnVtYmVyKSB7XG4gICAgX2xlbmd0aCA9IG51bWJlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICByZXR1cm4gX2hpdExvY2F0aW9uLmxlbmd0aCA9PT0gbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgZ2V0TmFtZSxcbiAgICBzZXROYW1lLFxuICAgIGdldExlbmd0aCxcbiAgICBzZXRMZW5ndGgsXG4gICAgaXNTdW5rLFxuICAgIGdldEhpdExvY2F0aW9ucyxcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRJbnQodXBwZXJCb3VuZCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdXBwZXJCb3VuZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRCb29sKCkge1xuICByZXR1cm4gW3RydWUsIGZhbHNlXVtnZW5lcmF0ZVJhbmRJbnQoMildO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSXRlbUZyb21BcnJheShhcnJheSkge1xuICByZXR1cm4gYXJyYXlbZ2VuZXJhdGVSYW5kSW50KGFycmF5Lmxlbmd0aCldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbHMoYSwgYikge1xuICByZXR1cm4gKFxuICAgIEFycmF5LmlzQXJyYXkoYSkgJiZcbiAgICBBcnJheS5pc0FycmF5KGIpICYmXG4gICAgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmXG4gICAgYS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gYltpbmRleF0pXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBcnJheWZyb21OZXN0ZWRBcnJheShuZXN0ZWQsIHRvUmVtb3ZlKSB7XG4gIHJldHVybiBuZXN0ZWQuZmlsdGVyKChpdGVtMSkgPT5cbiAgICB0b1JlbW92ZS5ldmVyeSgoaXRlbTIpID0+ICFhcnJheUVxdWFscyhpdGVtMSwgaXRlbTIpKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm1VcENhc2VXaHRTcGFjZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykuam9pbignJyk7XG59XG4iLCJleHBvcnQgY29uc3Qgc2hpcFRlbXBsYXRlID0gW1xuICB7IGxlbmd0aDogNSwgbmFtZTogJ0NhcnJpZXInIH0sXG4gIHsgbGVuZ3RoOiA0LCBuYW1lOiAnQmF0dGxlc2hpcCcgfSxcbiAgeyBsZW5ndGg6IDMsIG5hbWU6ICdEZXN0cm95ZXInIH0sXG4gIHsgbGVuZ3RoOiAzLCBuYW1lOiAnU3VibWFyaW5lJyB9LFxuICB7IGxlbmd0aDogMiwgbmFtZTogJ1BhdHJvbCBCb2F0JyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHVzZXJDb25zdGFudHMgPSB7XG4gIG5hbWU6ICdGcmllbmRseSBTZWFzJyxcbiAgYm9hcmRDbGFzczogJ2xlZnRCb2FyZCcsXG59O1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZXJDb25zdGFudHMgPSB7XG4gIG5hbWU6ICdFbmVteSBTZWFzJyxcbiAgYm9hcmRDbGFzczogJ3JpZ2h0Qm9hcmQnLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgc2V0dXBHYW1lIGZyb20gJy4vTW9kdWxlcy9Db250cm9sL3NldHVwLWNvbnRyb2xsZXInO1xuaW1wb3J0IGluaXRpYXRlU2hpcFBsYWNlbWVudCBmcm9tICcuL01vZHVsZXMvQ29udHJvbC9zaGlwLXBsYWNlbWVudC1jb250cm9sbGVyJztcbi8vIGltcG9ydCB7XG4vLyAgIHNpbXVsYXRlU21hcnRIdW50aW5nLFxuLy8gICBzaW11bGF0ZVJhbmRvbUF0dGFjayxcbi8vICAgc2ltdWxhdGVSYW5kb21IdW50aW5nLFxuLy8gfSBmcm9tICcuL3NjcmlwdHMvY29tcHV0ZXItYWktc2ltdWxhdG9yJztcblxuc2V0dXBHYW1lKCk7XG5pbml0aWF0ZVNoaXBQbGFjZW1lbnQoKTtcblxuLy8gc2ltdWxhdG9yIHNjcmlwdHMgYmVsb3cgLSBub3QgbmVlZGVkIGZvciBtYWluIGFwcFxuLy8gc2ltdWxhdGVTbWFydEh1bnRpbmcoKTtcbi8vIHNpbXVsYXRlUmFuZG9tSHVudGluZygpO1xuLy8gc2ltdWxhdGVSYW5kb21BdHRhY2soKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==