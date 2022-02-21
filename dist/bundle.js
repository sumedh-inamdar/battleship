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

  _placeShipsRandom(_Data_game_objects__WEBPACK_IMPORTED_MODULE_0__.computer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNzQztBQUNxQjs7QUFFaEYsNkVBQVM7QUFDVCxzRkFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9Db250cm9sL2dhbWVwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0NvbnRyb2wvc2V0dXAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvQ29udHJvbC9zaGlwLXBsYWNlbWVudC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9ET00vZG9tLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0RPTS9yZW5kZXItZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9EYXRhL2dhbWUtb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvRmFjdG9yeS9nYW1lYm9hcmQtaGVscGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvRmFjdG9yeS9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0ZhY3RvcnkvcGxheWVyLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0ZhY3RvcnkvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9GYWN0b3J5L3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL1V0aWxpdGllcy9oZWxwZXItZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVN5bmNvcGF0ZTp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FuaXQ6d2dodEA4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbmhlYWRlcj5oMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4ubGVmdEJvYXJkLCAucmlnaHRCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMjVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXG59XFxuXFxuLmJvYXJkVGl0bGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDFweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuLmJvYXJkU3RhdHVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnJlZ3VsYXIge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYm9hcmRIaWdobGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAwJSwgMzglKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbiNnYW1lQm9hcmRSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogU3F1YXJlICovXFxuXFxuLnNxdWFyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogS2FuaXQ7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5zcXVhcmUgPiBpbWcge1xcbiAgICBjb2xvcjpibHVldmlvbGV0O1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDg0LCAxNDUpO1xcbn1cXG4uaGl0IHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDc3LCA3Nyk7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufSBcXG4ubWlzcyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogU2hpcCBTdGF0dXMgLyBHcmlkICovXFxuLnNoaXBTdGF0dXMge1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5zaGlwVGl0bGUge1xcbiAgICBtYXJnaW46IDVweCAwcHg7XFxufVxcbi5zaGlwU3VuayB7XFxuICAgIGNvbG9yOiBoc2woMjA3LCA4NiUsIDYxJSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOmxpbmUtdGhyb3VnaDtcXG59XFxuLnN1bmtUZXh0IHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLyogRW5kIEdhbWUgTW9kYWwgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuI2VuZEdhbWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcbiNlbmRHYW1lU3RhdHVzIHtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG59XFxuLnJlc3RhcnRHYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMzglKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLnJlc3RhcnRHYW1lOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wb3N0TW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAubGVmdEJvYXJkLCAucmlnaHRCb2FyZCB7XFxuICAgICAgICBtYXJnaW46IDIwcHg7XFxuICAgIH1cXG4gICAgI2dhbWVCb2FyZFJvdyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TeW5jb3BhdGU6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0OndnaHRAODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODAxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXI+aDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLmxlZnRCb2FyZCwgLnJpZ2h0Qm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDI1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbi5ib2FyZFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbi5ib2FyZFN0YXR1cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uYm9sZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5yZWd1bGFyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmJvYXJkSGlnaGxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDM4JSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4jZ2FtZUJvYXJkUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIFNxdWFyZSAqL1xcblxcbi5zcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEthbml0O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uc3F1YXJlID4gaW1nIHtcXG4gICAgY29sb3I6Ymx1ZXZpb2xldDtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCA4NCwgMTQ1KTtcXG59XFxuLmhpdCB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCA3NywgNzcpO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn0gXFxuLm1pc3Mge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi8qIFNoaXAgU3RhdHVzIC8gR3JpZCAqL1xcbi5zaGlwU3RhdHVzIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc2hpcFRpdGxlIHtcXG4gICAgbWFyZ2luOiA1cHggMHB4O1xcbn1cXG4uc2hpcFN1bmsge1xcbiAgICBjb2xvcjogaHNsKDIwNywgODYlLCA2MSUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTpsaW5lLXRocm91Z2g7XFxufVxcbi5zdW5rVGV4dCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8qIEVuZCBHYW1lIE1vZGFsICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbiNlbmRHYW1lQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4jZW5kR2FtZVN0YXR1cyB7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxufVxcbi5yZXN0YXJ0R2FtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDM4JSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5yZXN0YXJ0R2FtZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucG9zdE1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmxlZnRCb2FyZCwgLnJpZ2h0Qm9hcmQge1xcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xcbiAgICB9XFxuICAgICNnYW1lQm9hcmRSb3cge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBnZXRBbGxTcXVhcmVzLFxuICBnZXRYWWZyb21FbGVtZW50LFxuICByZW1vdmVBbGxDaGlsZHJlbixcbn0gZnJvbSAnLi4vRE9NL2RvbS1oZWxwZXJzJztcbmltcG9ydCB7XG4gIGZvY3VzQm9hcmQsXG4gIHJlbmRlckJvYXJkLFxuICByZW5kZXJCb2FyZFN0YXR1cyxcbiAgcmVuZGVyQm9hcmRYWSxcbiAgcmVuZGVyTW9kYWwsXG4gIHJlbmRlclNoaXBzU3RhdHVzLFxuICB1cGRhdGVTaGlwc1N1bmssXG59IGZyb20gJy4uL0RPTS9yZW5kZXItZG9tJztcbmltcG9ydCBjcm9zc2hhaXIgZnJvbSAnLi4vLi4vaW1hZ2VzL0Nyb3NzaGFpcnNfUmVkLnN2Zyc7XG5pbXBvcnQgeyBjb21wdXRlciwgdXNlciB9IGZyb20gJy4uL0RhdGEvZ2FtZS1vYmplY3RzJztcbmltcG9ydCB7IGdlbmVyYXRlUmFuZEludCB9IGZyb20gJy4uL1V0aWxpdGllcy9oZWxwZXItZnVuY3Rpb25zJztcblxubGV0IF9ibG9ja1VzZXJJbnB1dDtcblxuZnVuY3Rpb24gX2xvYWRDcm9zc2hhaXIoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICB0YXJnZXRJY29uLnNyYyA9IGNyb3NzaGFpcjtcbiAgdGFyZ2V0SWNvbi5jbGFzc0xpc3QuYWRkKCdjcm9zc2hhaXInKTtcbiAgZXZlbnQudGFyZ2V0LmFwcGVuZCh0YXJnZXRJY29uKTtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZUNyb3NzaGFpcihldmVudCkge1xuICByZW1vdmVBbGxDaGlsZHJlbihldmVudC50YXJnZXQpO1xufVxuXG5mdW5jdGlvbiBfYWRkSG92ZXJDcm9zc2hhaXJFTCgpIHtcbiAgZ2V0QWxsU3F1YXJlcyhjb21wdXRlci5ib2FyZENsYXNzKS5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIF9sb2FkQ3Jvc3NoYWlyKTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9yZW1vdmVDcm9zc2hhaXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZUF0dGFja0V2ZW50TGlzdGVuZXIoc3F1YXJlKSB7XG4gIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX2xvYWRDcm9zc2hhaXIpO1xuICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9yZW1vdmVDcm9zc2hhaXIpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2hhbmRsZUF0dGFjayk7XG59XG5cbmZ1bmN0aW9uIF9lbmRHYW1lKHdpbm5lcikge1xuICBjb25zdCBlbmRNZXNzYWdlID1cbiAgICB3aW5uZXIgPT09IHVzZXJcbiAgICAgID8gJ1lvdSBXaW4hIEdvb2Qgam9iIHNpbmtpbmcgYWxsIHlvdXIgb3Bwb25lbnRzIHNoaXBzIPCfmIAnXG4gICAgICA6ICdBbGwgeW91ciBzaGlwcyB3ZXJlIHN1bmsuIFlvdSBsb3N0IPCfmYEnO1xuXG4gIGdldEFsbFNxdWFyZXMoY29tcHV0ZXIuYm9hcmRDbGFzcykuZm9yRWFjaCgoc3F1YXJlKSA9PlxuICAgIF9yZW1vdmVBdHRhY2tFdmVudExpc3RlbmVyKHNxdWFyZSlcbiAgKTtcbiAgcmVuZGVyQm9hcmQodXNlci5ib2FyZCwgdXNlci5ib2FyZENsYXNzLCBmYWxzZSk7XG4gIHJlbmRlckJvYXJkKGNvbXB1dGVyLmJvYXJkLCBjb21wdXRlci5ib2FyZENsYXNzLCBmYWxzZSk7XG4gIHJlbmRlck1vZGFsKGVuZE1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBfY29tcFR1cm4oKSB7XG4gIGNvbnN0IHRhcmdldCA9IGNvbXB1dGVyLnBsYXllci5zZW5kU21hcnRBdHRhY2sodXNlci5ib2FyZCk7XG4gIHJlbmRlckJvYXJkWFkodXNlci5ib2FyZCwgdGFyZ2V0WzBdLCB0YXJnZXRbMV0sIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICByZW5kZXJCb2FyZFN0YXR1cyh1c2VyLmJvYXJkQ2xhc3MsIGBgLCAnYm9sZCcpO1xuICB1cGRhdGVTaGlwc1N1bmsodXNlci5ib2FyZC5nZXRTaGlwKHRhcmdldFswXSwgdGFyZ2V0WzFdKSwgdXNlcik7XG5cbiAgaWYgKHVzZXIuYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgX2VuZEdhbWUoY29tcHV0ZXIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvY3VzQm9hcmQoY29tcHV0ZXIuYm9hcmRDbGFzcyk7XG4gIHJlbmRlckJvYXJkU3RhdHVzKGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGBQbGFjZSB5b3VyIGF0dGFjayFgLCAnYm9sZCcpO1xuXG4gIF9ibG9ja1VzZXJJbnB1dCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBfdXNlclR1cm4oeCwgeSkge1xuICBfYmxvY2tVc2VySW5wdXQgPSB0cnVlO1xuXG4gIGNvbXB1dGVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIHJlbmRlckJvYXJkWFkoY29tcHV0ZXIuYm9hcmQsIHgsIHksIGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcbiAgcmVuZGVyQm9hcmRTdGF0dXMoY29tcHV0ZXIuYm9hcmRDbGFzcywgYGAsICdib2xkJyk7XG4gIHVwZGF0ZVNoaXBzU3Vuayhjb21wdXRlci5ib2FyZC5nZXRTaGlwKHgsIHkpLCBjb21wdXRlcik7XG5cbiAgaWYgKGNvbXB1dGVyLmJvYXJkLmFsbFN1bmsoKSkge1xuICAgIF9lbmRHYW1lKHVzZXIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvY3VzQm9hcmQodXNlci5ib2FyZENsYXNzKTtcbiAgcmVuZGVyQm9hcmRTdGF0dXModXNlci5ib2FyZENsYXNzLCBgVGhpbmtpbmcuLi5gLCAnYm9sZCcpO1xuXG4gIHNldFRpbWVvdXQoX2NvbXBUdXJuLCBNYXRoLm1heCg1MDAsIGdlbmVyYXRlUmFuZEludCgyMDAwKSkpO1xufVxuXG5mdW5jdGlvbiBfaGFuZGxlQXR0YWNrKGV2ZW50KSB7XG4gIGlmIChfYmxvY2tVc2VySW5wdXQpIHJldHVybjtcblxuICBjb25zdCBzcXVhcmUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNxdWFyZScpO1xuICBfcmVtb3ZlQXR0YWNrRXZlbnRMaXN0ZW5lcihzcXVhcmUpO1xuICByZW1vdmVBbGxDaGlsZHJlbihzcXVhcmUpO1xuXG4gIF91c2VyVHVybiguLi5nZXRYWWZyb21FbGVtZW50KHNxdWFyZSkpO1xufVxuXG5mdW5jdGlvbiBfc2V0dXBBdHRhY2tFdmVudExpc3RlbmVyKCkge1xuICBnZXRBbGxTcXVhcmVzKGNvbXB1dGVyLmJvYXJkQ2xhc3MpLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9oYW5kbGVBdHRhY2spO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBfYmxvY2tVc2VySW5wdXQgPSBmYWxzZTtcbiAgZm9jdXNCb2FyZChjb21wdXRlci5ib2FyZENsYXNzKTtcblxuICBfYWRkSG92ZXJDcm9zc2hhaXJFTCgpO1xuICBfc2V0dXBBdHRhY2tFdmVudExpc3RlbmVyKCk7XG5cbiAgcmVuZGVyQm9hcmQodXNlci5ib2FyZCwgdXNlci5ib2FyZENsYXNzLCBmYWxzZSk7XG4gIHJlbmRlckJvYXJkKGNvbXB1dGVyLmJvYXJkLCBjb21wdXRlci5ib2FyZENsYXNzLCB0cnVlKTtcblxuICByZW5kZXJTaGlwc1N0YXR1cygpO1xuICByZW5kZXJCb2FyZFN0YXR1cyh1c2VyLmJvYXJkQ2xhc3MsIGBgLCAnYm9sZCcpO1xuICByZW5kZXJCb2FyZFN0YXR1cyhjb21wdXRlci5ib2FyZENsYXNzLCBgUGxhY2UgeW91ciBhdHRhY2shYCwgJ2JvbGQnKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4uL0ZhY3RvcnkvZ2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vRmFjdG9yeS9wbGF5ZXInO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi4vRmFjdG9yeS9zaGlwJztcbmltcG9ydCB7IHNoaXBUZW1wbGF0ZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICByZW5kZXJHcmlkLFxuICByZW5kZXJCb2FyZFRpdGxlLFxuICByZW5kZXJCb2FyZFN0YXR1cyxcbiAgZm9jdXNCb2FyZCxcbiAgc2V0dXBTaGlwc1N1bmssXG4gIHJlbW92ZU1vZGFsLFxuICByZW1vdmVSZXN0YXJ0R2FtZSxcbn0gZnJvbSAnLi4vRE9NL3JlbmRlci1kb20nO1xuaW1wb3J0IGluaXRpYXRlU2hpcFBsYWNlbWVudCBmcm9tICcuL3NoaXAtcGxhY2VtZW50LWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgdXNlciwgY29tcHV0ZXIgfSBmcm9tICcuLi9EYXRhL2dhbWUtb2JqZWN0cyc7XG5cbmZ1bmN0aW9uIF9nZW5lcmF0ZVNoaXBzKHNoaXBJbmZvKSB7XG4gIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuXG4gIHNoaXBJbmZvLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwQXJyYXkucHVzaChTaGlwKHNoaXAubGVuZ3RoLCBzaGlwLm5hbWUpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNoaXBBcnJheTtcbn1cblxuZnVuY3Rpb24gX3NldHVwR2FtZU9iamVjdHMocGxheWVyMSwgcGxheWVyMiwgc2hpcEluZm8pIHtcbiAgcGxheWVyMS5wbGF5ZXIgPSBQbGF5ZXIocGxheWVyMS5uYW1lKTtcbiAgcGxheWVyMi5wbGF5ZXIgPSBQbGF5ZXIocGxheWVyMi5uYW1lKTtcblxuICBwbGF5ZXIxLmJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIHBsYXllcjIuYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBwbGF5ZXIxLnNoaXBzID0gX2dlbmVyYXRlU2hpcHMoc2hpcEluZm8pO1xuICBwbGF5ZXIyLnNoaXBzID0gX2dlbmVyYXRlU2hpcHMoc2hpcEluZm8pO1xufVxuXG5mdW5jdGlvbiBfc2V0dXBET00ocGxheWVyMSwgcGxheWVyMikge1xuICByZW5kZXJHcmlkKHBsYXllcjEuYm9hcmRDbGFzcyk7XG4gIHJlbmRlckdyaWQocGxheWVyMi5ib2FyZENsYXNzKTtcblxuICByZW5kZXJCb2FyZFRpdGxlKHBsYXllcjEucGxheWVyLmdldE5hbWUoKSwgcGxheWVyMS5ib2FyZENsYXNzKTtcbiAgcmVuZGVyQm9hcmRUaXRsZShwbGF5ZXIyLnBsYXllci5nZXROYW1lKCksIHBsYXllcjIuYm9hcmRDbGFzcyk7XG5cbiAgcmVuZGVyQm9hcmRTdGF0dXMocGxheWVyMS5ib2FyZENsYXNzLCAnJywgJ2JvbGQnKTsgLy8gY2xlYXJzIGFueSBwcmV2aW91cyBib2FyZCBzdGF0dXNcbiAgcmVuZGVyQm9hcmRTdGF0dXMocGxheWVyMi5ib2FyZENsYXNzLCAnJywgJ2JvbGQnKTtcblxuICBzZXR1cFNoaXBzU3VuaygpO1xuICBfYWRkQ2xpY2tSZXN0YXJ0RUwoKTtcblxuICBmb2N1c0JvYXJkKHBsYXllcjEuYm9hcmRDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9hZGRDbGlja1Jlc3RhcnRFTCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhcnRHYW1lJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfcmVzdGFydEdhbWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX3Jlc3RhcnRHYW1lKCkge1xuICByZW1vdmVNb2RhbCgpO1xuICByZW1vdmVSZXN0YXJ0R2FtZSgpO1xuICBzZXR1cEdhbWUoKTtcbiAgaW5pdGlhdGVTaGlwUGxhY2VtZW50KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwR2FtZSgpIHtcbiAgX3NldHVwR2FtZU9iamVjdHModXNlciwgY29tcHV0ZXIsIHNoaXBUZW1wbGF0ZSk7XG4gIF9zZXR1cERPTSh1c2VyLCBjb21wdXRlcik7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IHsgY29tcHV0ZXIsIHVzZXIgfSBmcm9tICcuLi9EYXRhL2dhbWUtb2JqZWN0cyc7XG5pbXBvcnQgeyByZW5kZXJCb2FyZCwgcmVuZGVyQm9hcmRTdGF0dXMgfSBmcm9tICcuLi9ET00vcmVuZGVyLWRvbSc7XG5pbXBvcnQge1xuICBnZW5lcmF0ZVJhbmRCb29sLFxuICBnZXRSYW5kb21JdGVtRnJvbUFycmF5LFxufSBmcm9tICcuLi9VdGlsaXRpZXMvaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQge1xuICBnZXRTcXVhcmVFbGVtZW50cyxcbiAgZ2V0WFlmcm9tRWxlbWVudCxcbiAgdG9nZ2xlU2hpcCxcbn0gZnJvbSAnLi4vRE9NL2RvbS1oZWxwZXJzJztcbmltcG9ydCB7IGdldEFycmF5Q29vcmRzIH0gZnJvbSAnLi4vRmFjdG9yeS9nYW1lYm9hcmQtaGVscGVycyc7XG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gJy4vZ2FtZXBsYXktY29udHJvbGxlcic7XG5cbmxldCBjdXJyZW50RWxlbWVudHNXaXRoRUw7XG5cbmZ1bmN0aW9uIF9wbGFjZVNoaXBzUmFuZG9tKHBsYXllcikge1xuICBwbGF5ZXIuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IG5leHRWZXJ0ID0gZ2VuZXJhdGVSYW5kQm9vbCgpO1xuICAgIGNvbnN0IHZhbGlkTG9jYXRpb25zID0gcGxheWVyLmJvYXJkLmdldFZhbGlkU2hpcFBsYWNlbWVudHMoc2hpcCwgbmV4dFZlcnQpO1xuICAgIGNvbnN0IFtuZXh0WCwgbmV4dFldID0gZ2V0UmFuZG9tSXRlbUZyb21BcnJheSh2YWxpZExvY2F0aW9ucyk7XG5cbiAgICBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHNoaXAsIG5leHRYLCBuZXh0WSwgbmV4dFZlcnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZUFsbFNoaXBQbGFjZW1lbnRFTCgpIHtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIF9oYW5kbGVSb3RhdGUpO1xuXG4gIGN1cnJlbnRFbGVtZW50c1dpdGhFTC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX2hhbmRsZUhvdmVyKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfaGFuZGxlSG92ZXIpO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlQ2xpY2spO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX2hhbmRsZUhvdmVyKGV2ZW50KSB7XG4gIGNvbnN0IFt4LCB5XSA9IGdldFhZZnJvbUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgY29uc3QgY3VycmVudFNoaXAgPSB1c2VyLnNoaXBzW3VzZXIuc2hpcEluZGV4XTtcbiAgY29uc3QgY3VycmVudFZlcnRpY2FsID0gdXNlci5zaGlwVmVydGljYWw7XG5cbiAgY29uc3QgYXJyYXlDb29yZHMgPSBnZXRBcnJheUNvb3JkcyhcbiAgICBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKSxcbiAgICB4LFxuICAgIHksXG4gICAgY3VycmVudFZlcnRpY2FsXG4gICk7XG4gIGNvbnN0IGFycmF5Q29vcmRFbGVtZW50cyA9IGdldFNxdWFyZUVsZW1lbnRzKGFycmF5Q29vcmRzLCB1c2VyKTtcbiAgdG9nZ2xlU2hpcChhcnJheUNvb3JkRWxlbWVudHMsIGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gX2hhbmRsZVJvdGF0ZShldmVudCkge1xuICBpZiAoZXZlbnQuY29kZSA9PT0gJ0tleVInKSB7XG4gICAgdXNlci5zaGlwVmVydGljYWwgPSAhdXNlci5zaGlwVmVydGljYWw7XG4gICAgX3JlbW92ZUFsbFNoaXBQbGFjZW1lbnRFTCgpO1xuICAgIHJlbmRlckJvYXJkKHVzZXIuYm9hcmQsIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICAgIF9wbGFjZVNoaXBzTWFudWFsKHVzZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9oYW5kbGVDbGljayhldmVudCkge1xuICBjb25zdCBbeCwgeV0gPSBnZXRYWWZyb21FbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gIGNvbnN0IGN1cnJlbnRTaGlwID0gdXNlci5zaGlwc1t1c2VyLnNoaXBJbmRleF07XG4gIGNvbnN0IGN1cnJlbnRCb2FyZCA9IHVzZXIuYm9hcmQ7XG4gIGNvbnN0IGN1cnJlbnRWZXJ0aWNhbCA9IHVzZXIuc2hpcFZlcnRpY2FsO1xuXG4gIGN1cnJlbnRCb2FyZC5wbGFjZVNoaXAoY3VycmVudFNoaXAsIHgsIHksIGN1cnJlbnRWZXJ0aWNhbCk7XG4gIF9yZW1vdmVBbGxTaGlwUGxhY2VtZW50RUwoKTtcbiAgcmVuZGVyQm9hcmQoY3VycmVudEJvYXJkLCB1c2VyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcbiAgdXNlci5zaGlwSW5kZXggKz0gMTtcblxuICBpZiAodXNlci5zaGlwc1t1c2VyLnNoaXBJbmRleF0gIT09IHVuZGVmaW5lZCkgX3BsYWNlU2hpcHNNYW51YWwodXNlcik7XG4gIGVsc2Ugc3RhcnRHYW1lKCk7XG59XG5cbmZ1bmN0aW9uIF9hZGRSb3RhdGVTaGlwRUwoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBfaGFuZGxlUm90YXRlKTtcbn1cblxuZnVuY3Rpb24gX2FkZEhvdmVyU2hpcFBsYWNlRUwocGxheWVyLCB2YWxpZExvY2F0aW9ucykge1xuICBjb25zdCB2YWxpZExvY0VsZW1lbnRzID0gZ2V0U3F1YXJlRWxlbWVudHModmFsaWRMb2NhdGlvbnMsIHBsYXllcik7XG4gIGN1cnJlbnRFbGVtZW50c1dpdGhFTCA9IHZhbGlkTG9jRWxlbWVudHM7XG5cbiAgdmFsaWRMb2NFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX2hhbmRsZUhvdmVyKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfaGFuZGxlSG92ZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX2FkZENsaWNrU2hpcFBsYWNlRUwocGxheWVyLCB2YWxpZExvY2F0aW9ucykge1xuICBjb25zdCB2YWxpZExvY0VsZW1lbnRzID0gZ2V0U3F1YXJlRWxlbWVudHModmFsaWRMb2NhdGlvbnMsIHBsYXllcik7XG5cbiAgdmFsaWRMb2NFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9oYW5kbGVDbGljayk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfcGxhY2VTaGlwc01hbnVhbChwbGF5ZXIpIHtcbiAgY29uc3QgY3VycmVudFNoaXAgPSBwbGF5ZXIuc2hpcHNbcGxheWVyLnNoaXBJbmRleF07XG4gIGNvbnN0IGN1cnJlbnRWZXJ0aWNhbCA9IHBsYXllci5zaGlwVmVydGljYWw7XG5cbiAgY29uc3QgdmFsaWRMb2NhdGlvbnMgPSBwbGF5ZXIuYm9hcmQuZ2V0VmFsaWRTaGlwUGxhY2VtZW50cyhcbiAgICBjdXJyZW50U2hpcCxcbiAgICBjdXJyZW50VmVydGljYWxcbiAgKTtcblxuICBfYWRkUm90YXRlU2hpcEVMKCk7XG4gIF9hZGRIb3ZlclNoaXBQbGFjZUVMKHBsYXllciwgdmFsaWRMb2NhdGlvbnMpO1xuICBfYWRkQ2xpY2tTaGlwUGxhY2VFTChwbGF5ZXIsIHZhbGlkTG9jYXRpb25zKTtcblxuICByZW5kZXJCb2FyZFN0YXR1cyhcbiAgICBwbGF5ZXIuYm9hcmRDbGFzcyxcbiAgICBgUGxhY2UgJHtjdXJyZW50U2hpcC5nZXROYW1lKCl9YCxcbiAgICAnYm9sZCdcbiAgKTtcbiAgcmVuZGVyQm9hcmRTdGF0dXMoXG4gICAgcGxheWVyLmJvYXJkQ2xhc3MsXG4gICAgYChQcmVzcyBSIHRvIHJvdGF0ZSBzaGlwKWAsXG4gICAgJ3JlZ3VsYXInLFxuICAgIGZhbHNlXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYXRlU2hpcFBsYWNlbWVudCgpIHtcbiAgdXNlci5zaGlwVmVydGljYWwgPSB0cnVlO1xuICB1c2VyLnNoaXBJbmRleCA9IDA7XG5cbiAgX3BsYWNlU2hpcHNSYW5kb20oY29tcHV0ZXIpO1xuICBfcGxhY2VTaGlwc01hbnVhbCh1c2VyKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTcXVhcmVFbGVtZW50cyhhcnJheUxvY2F0aW9ucywgcGxheWVyKSB7XG4gIHJldHVybiBhcnJheUxvY2F0aW9ucy5tYXAoKGxvYykgPT5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwbGF5ZXIuYm9hcmRDbGFzc30ke2xvY1swXX0ke2xvY1sxXX1gKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WFlmcm9tRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbTnVtYmVyKGVsZW1lbnQuaWQuc2xpY2UoLTIsIC0xKSksIE51bWJlcihlbGVtZW50LmlkLnNsaWNlKC0xKSldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU2hpcChhcnJheUVsZW1lbnRzLCBldmVudCkge1xuICBhcnJheUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZW50ZXInKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICBlbHNlIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFNxdWFyZXMoYm9hcmRDbGFzcykge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Ym9hcmRDbGFzc30gLnNxdWFyZWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4ocGFyZW50KSB7XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBybVVwQ2FzZVdodFNwYWNlIH0gZnJvbSAnLi4vVXRpbGl0aWVzL2hlbHBlci1mdW5jdGlvbnMnO1xuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGRyZW4gfSBmcm9tICcuL2RvbS1oZWxwZXJzJztcblxuZnVuY3Rpb24gX3JlbmRlclN0YXRlKGJvYXJkLCB4LCB5LCBsb2NhdGlvbklEKSB7XG4gIGNvbnN0IHN0YXRlID0gYm9hcmQuZ2V0U3RhdGUoeCwgeSk7XG4gIGlmIChzdGF0ZSAhPT0gJ2JsYW5rJykge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2xvY2F0aW9uSUR9YCk7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoc3RhdGUpO1xuICAgIHNxdWFyZS50ZXh0Q29udGVudCA9IHN0YXRlID09PSAnaGl0JyA/ICdYJyA6ICdPJztcbiAgfVxufVxuXG5mdW5jdGlvbiBfcmVuZGVyU2hpcHMoYm9hcmQsIHgsIHksIGxvY2F0aW9uSUQpIHtcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bG9jYXRpb25JRH1gKTtcbiAgaWYgKGJvYXJkLmdldFNoaXAoeCwgeSkgIT09IHVuZGVmaW5lZCkgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgZWxzZSBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xufVxuXG5mdW5jdGlvbiBfZGlzcGxheU1vZGFsKGV2ZW50KSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIGNvbnN0IHBvc3RNb2RhbFJlc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdE1vZGFsIC5yZXN0YXJ0R2FtZScpO1xuICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcG9zdE1vZGFsUmVzdGFydC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTW9kYWwoZW5kTWVzc2FnZSkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBjb25zdCBtb2RhbFJlc3RhcnQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydEdhbWUnKTtcblxuICBtb2RhbFJlc3RhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmRHYW1lU3RhdHVzJykudGV4dENvbnRlbnQgPSBlbmRNZXNzYWdlO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9kaXNwbGF5TW9kYWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSZXN0YXJ0R2FtZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhcnRHYW1lJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9jdXNCb2FyZChib2FyZFNpZGUpIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLmxlZnRCb2FyZCwgLnJpZ2h0Qm9hcmQnKVxuICAgIC5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkSGlnaGxpZ2h0JykpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZFNpZGV9YCkuY2xhc3NMaXN0LmFkZCgnYm9hcmRIaWdobGlnaHQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdyaWQoYm9hcmRTaWRlKSB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmRTaWRlfSA+IC5ib2FyZGApO1xuICByZW1vdmVBbGxDaGlsZHJlbihib2FyZCk7XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCArPSAxKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgIHNxdWFyZS5pZCA9IGJvYXJkU2lkZSArIHggKyB5O1xuICAgICAgYm9hcmQuYXBwZW5kKHNxdWFyZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZFRpdGxlKHRpdGxlLCBib2FyZFNpZGUpIHtcbiAgY29uc3QgYm9hcmRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkU2lkZX0gPiAuYm9hcmRUaXRsZWApO1xuICBib2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZFN0YXR1cyhcbiAgYm9hcmRTaWRlLFxuICBzdGF0dXMsXG4gIHN0eWxlLFxuICBjbGVhclN0YXR1cyA9IHRydWVcbikge1xuICBjb25zdCBib2FyZFN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC4ke2JvYXJkU2lkZX0gPiAuYm9hcmRTdGF0dXNgXG4gICk7XG5cbiAgaWYgKGNsZWFyU3RhdHVzID09PSB0cnVlKSByZW1vdmVBbGxDaGlsZHJlbihib2FyZFN0YXR1c0NvbnRhaW5lcik7XG5cbiAgY29uc3QgYm9hcmRTdGF0dXNESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmRTdGF0dXNESVYuY2xhc3NMaXN0LmFkZChzdHlsZSk7XG4gIGJvYXJkU3RhdHVzRElWLnRleHRDb250ZW50ID0gc3RhdHVzO1xuXG4gIGJvYXJkU3RhdHVzQ29udGFpbmVyLmFwcGVuZChib2FyZFN0YXR1c0RJVik7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTaGlwc1N1bmsoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdW5rVGV4dCwgLnNoaXBTdGF0dXMnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwU3VuaycpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBTdW5rJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2hpcHNTdGF0dXMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwU3RhdHVzJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNoaXBzU3VuayhzaGlwLCBwbGF5ZXIpIHtcbiAgaWYgKHNoaXAgJiYgc2hpcC5pc1N1bmsoKSkge1xuICAgIGNvbnN0IHNoaXBTZWxlY3RvciA9IGAuJHtwbGF5ZXIuYm9hcmRDbGFzc30gLiR7cm1VcENhc2VXaHRTcGFjZShcbiAgICAgIHNoaXAuZ2V0TmFtZSgpXG4gICAgKX1gO1xuICAgIGNvbnN0IHNoaXBTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzaGlwU2VsZWN0b3IpO1xuICAgIHNoaXBTcGFuLmNsYXNzTGlzdC5hZGQoJ3NoaXBTdW5rJyk7XG5cbiAgICBzaGlwU3Bhbi5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICByZW5kZXJCb2FyZFN0YXR1cyhwbGF5ZXIuYm9hcmRDbGFzcywgYCR7c2hpcC5nZXROYW1lKCl9IHdhcyBzdW5rIWAsICdib2xkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkWFkoYm9hcmQsIHgsIHksIGJvYXJkU2lkZSwgaGlkZVNoaXBzKSB7XG4gIGNvbnN0IGxvY2F0aW9uSUQgPSBib2FyZFNpZGUgKyB4ICsgeTtcbiAgaWYgKGhpZGVTaGlwcyA9PT0gZmFsc2UpIF9yZW5kZXJTaGlwcyhib2FyZCwgeCwgeSwgbG9jYXRpb25JRCk7XG4gIF9yZW5kZXJTdGF0ZShib2FyZCwgeCwgeSwgbG9jYXRpb25JRCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZChib2FyZCwgYm9hcmRTaWRlLCBoaWRlU2hpcHMpIHtcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCArPSAxKSB7XG4gICAgICByZW5kZXJCb2FyZFhZKGJvYXJkLCB4LCB5LCBib2FyZFNpZGUsIGhpZGVTaGlwcyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyB1c2VyQ29uc3RhbnRzLCBjb21wdXRlckNvbnN0YW50cyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCB1c2VyID0geyAuLi51c2VyQ29uc3RhbnRzIH07XG5leHBvcnQgY29uc3QgY29tcHV0ZXIgPSB7IC4uLmNvbXB1dGVyQ29uc3RhbnRzIH07XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0QXJyYXlDb29yZHMoc2hpcExlbmd0aCwgeCwgeSwgaXNWZXJ0aWNhbCkge1xuICBjb25zdCBhcnJheUNvb3JkcyA9IFtdO1xuXG4gIGZvciAobGV0IHNoaXBMb2NhdGlvbiA9IDA7IHNoaXBMb2NhdGlvbiA8IHNoaXBMZW5ndGg7IHNoaXBMb2NhdGlvbiArPSAxKSB7XG4gICAgY29uc3QgbmV3WCA9IHggKyAoaXNWZXJ0aWNhbCA9PT0gZmFsc2UgPyBzaGlwTG9jYXRpb24gOiAwKTtcbiAgICBjb25zdCBuZXdZID0geSArIChpc1ZlcnRpY2FsID09PSB0cnVlID8gc2hpcExvY2F0aW9uIDogMCk7XG4gICAgYXJyYXlDb29yZHMucHVzaChbbmV3WCwgbmV3WV0pO1xuICB9XG4gIHJldHVybiBhcnJheUNvb3Jkcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvb3JkSXNXaXRoaW5Cb2FyZCh4LCB5LCBzaXplKSB7XG4gIHJldHVybiB4ID49IDAgJiYgeCA8IHNpemUgJiYgeSA+PSAwICYmIHkgPCBzaXplO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9uZ2VzdEJsYW5rWCh4LCB5LCBib2FyZCkge1xuICBsZXQgbnVtYmVyQmxhbmtzID0gMDtcbiAgd2hpbGUgKGJvYXJkLmlzVmFsaWRBdHRhY2tMb2MoeCArIG51bWJlckJsYW5rcywgeSkpIHtcbiAgICBudW1iZXJCbGFua3MgKz0gMTtcbiAgfVxuICByZXR1cm4gbnVtYmVyQmxhbmtzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9uZ2VzdEJsYW5rWSh4LCB5LCBib2FyZCkge1xuICBsZXQgbnVtYmVyQmxhbmtzID0gMDtcbiAgd2hpbGUgKGJvYXJkLmlzVmFsaWRBdHRhY2tMb2MoeCwgeSArIG51bWJlckJsYW5rcykpIHtcbiAgICBudW1iZXJCbGFua3MgKz0gMTtcbiAgfVxuICByZXR1cm4gbnVtYmVyQmxhbmtzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9uZ2VzdEJsYW5rcyhib2FyZCkge1xuICBsZXQgbG9uZ2VzdEJsYW5rcyA9IFtdO1xuICBsZXQgY3VycmVudExvbmdlc3QgPSAwO1xuXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkgKz0gMSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgY29uc3QgbGVuZ3RoWCA9IGdldExvbmdlc3RCbGFua1goeCwgeSwgYm9hcmQpO1xuICAgICAgY29uc3QgbGVuZ3RoWSA9IGdldExvbmdlc3RCbGFua1koeCwgeSwgYm9hcmQpO1xuXG4gICAgICBpZiAobGVuZ3RoWCA+IGxlbmd0aFkgJiYgbGVuZ3RoWCA+PSBjdXJyZW50TG9uZ2VzdCkge1xuICAgICAgICBpZiAobGVuZ3RoWCA+IGN1cnJlbnRMb25nZXN0KSBsb25nZXN0QmxhbmtzID0gW107XG4gICAgICAgIGxvbmdlc3RCbGFua3MucHVzaChbTWF0aC5mbG9vcih4ICsgbGVuZ3RoWCAvIDIpLCB5XSk7XG4gICAgICAgIGN1cnJlbnRMb25nZXN0ID0gbGVuZ3RoWDtcbiAgICAgIH0gZWxzZSBpZiAobGVuZ3RoWSA+IGxlbmd0aFggJiYgbGVuZ3RoWSA+PSBjdXJyZW50TG9uZ2VzdCkge1xuICAgICAgICBpZiAobGVuZ3RoWSA+IGN1cnJlbnRMb25nZXN0KSBsb25nZXN0QmxhbmtzID0gW107XG4gICAgICAgIGxvbmdlc3RCbGFua3MucHVzaChbeCwgTWF0aC5mbG9vcih5ICsgbGVuZ3RoWSAvIDIpXSk7XG4gICAgICAgIGN1cnJlbnRMb25nZXN0ID0gbGVuZ3RoWTtcbiAgICAgIH0gZWxzZSBpZiAobGVuZ3RoWSA9PT0gbGVuZ3RoWCAmJiBsZW5ndGhYID49IGN1cnJlbnRMb25nZXN0KSB7XG4gICAgICAgIGlmIChsZW5ndGhYID4gY3VycmVudExvbmdlc3QpIGxvbmdlc3RCbGFua3MgPSBbXTtcbiAgICAgICAgbG9uZ2VzdEJsYW5rcy5wdXNoKFxuICAgICAgICAgIFtNYXRoLmZsb29yKHggKyBsZW5ndGhYIC8gMiksIHldLFxuICAgICAgICAgIFt4LCBNYXRoLmZsb29yKHkgKyBsZW5ndGhZIC8gMildXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRMb25nZXN0ID0gbGVuZ3RoWDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbG9uZ2VzdEJsYW5rcztcbn1cbiIsImltcG9ydCB7IGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkgfSBmcm9tICcuLi9VdGlsaXRpZXMvaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBjb29yZElzV2l0aGluQm9hcmQsIGdldEFycmF5Q29vcmRzIH0gZnJvbSAnLi9nYW1lYm9hcmQtaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3QgX3NpemUgPSAxMDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tbmV3LWFycmF5XG4gIGNvbnN0IF9ib2FyZCA9IFsuLi5uZXcgQXJyYXkoX3NpemUpXS5tYXAoKCkgPT4gbmV3IEFycmF5KF9zaXplKSk7XG4gIGNvbnN0IF9zaGlwcyA9IFtdO1xuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgX3NpemU7IHggKz0gMSkge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgX3NpemU7IHkgKz0gMSkge1xuICAgICAgX2JvYXJkW3hdW3ldID0ge1xuICAgICAgICBzaGlwOiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXRlOiAnYmxhbmsnLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTdGF0ZSh4LCB5KSB7XG4gICAgcmV0dXJuIF9ib2FyZFt4XVt5XS5zdGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNoaXAoeCwgeSkge1xuICAgIHJldHVybiBfYm9hcmRbeF1beV0uc2hpcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEF2YWlsYWJsZVRhcmdldHMoKSB7XG4gICAgY29uc3QgdGFyZ2V0cyA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgX3NpemU7IHggKz0gMSkge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBfc2l6ZTsgeSArPSAxKSB7XG4gICAgICAgIGlmIChnZXRTdGF0ZSh4LCB5KSA9PT0gJ2JsYW5rJykgdGFyZ2V0cy5wdXNoKFt4LCB5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UXR5U3VuaygpIHtcbiAgICByZXR1cm4gX3NoaXBzLnJlZHVjZShcbiAgICAgIChwcmV2aW91cywgY3VycmVudCkgPT4gcHJldmlvdXMgKyAoY3VycmVudC5pc1N1bmsoKSA/IDEgOiAwKSxcbiAgICAgIDBcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsU3VuaygpIHtcbiAgICBpZiAoX3NoaXBzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIF9zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1ZhbGlkUGxhY2VtZW50KHNoaXBMZW5ndGgsIHgsIHksIGlzVmVydGljYWwpIHtcbiAgICByZXR1cm4gZ2V0QXJyYXlDb29yZHMoc2hpcExlbmd0aCwgeCwgeSwgaXNWZXJ0aWNhbCkuZXZlcnkoXG4gICAgICAoeHlDb29yZHMpID0+XG4gICAgICAgIGNvb3JkSXNXaXRoaW5Cb2FyZCguLi54eUNvb3JkcywgX3NpemUpICYmXG4gICAgICAgIGdldFNoaXAoLi4ueHlDb29yZHMpID09PSB1bmRlZmluZWRcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFsaWRTaGlwUGxhY2VtZW50cyhzaGlwLCBpc1ZlcnRpY2FsKSB7XG4gICAgY29uc3QgdmFsaWRMb2NhdGlvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCArPSAxKSB7XG4gICAgICAgIGlmIChpc1ZhbGlkUGxhY2VtZW50KHNoaXAuZ2V0TGVuZ3RoKCksIHgsIHksIGlzVmVydGljYWwpKSB7XG4gICAgICAgICAgdmFsaWRMb2NhdGlvbnMucHVzaChbeCwgeV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkTG9jYXRpb25zO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIHgsIHksIGlzVmVydGljYWwpIHtcbiAgICBpZiAoaXNWYWxpZFBsYWNlbWVudChzaGlwLmdldExlbmd0aCgpLCB4LCB5LCBpc1ZlcnRpY2FsKSkge1xuICAgICAgZ2V0QXJyYXlDb29yZHMoc2hpcC5nZXRMZW5ndGgoKSwgeCwgeSwgaXNWZXJ0aWNhbCkuZm9yRWFjaCgoeHlDb29yZHMpID0+IHtcbiAgICAgICAgX2JvYXJkW3h5Q29vcmRzWzBdXVt4eUNvb3Jkc1sxXV0uc2hpcCA9IHNoaXA7XG4gICAgICB9KTtcbiAgICAgIF9zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNWYWxpZEF0dGFja0xvYyh4LCB5KSB7XG4gICAgcmV0dXJuIGNvb3JkSXNXaXRoaW5Cb2FyZCh4LCB5LCBfc2l6ZSkgJiYgZ2V0U3RhdGUoeCwgeSkgPT09ICdibGFuayc7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBpZiAoIWlzVmFsaWRBdHRhY2tMb2MoeCwgeSkpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChnZXRTaGlwKHgsIHkpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGdldFNoaXAoeCwgeSkuaGl0KFt4LCB5XSk7XG4gICAgICBfYm9hcmRbeF1beV0uc3RhdGUgPSAnaGl0JztcbiAgICB9IGVsc2Uge1xuICAgICAgX2JvYXJkW3hdW3ldLnN0YXRlID0gJ21pc3MnO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJsYW5rTmVpZ2hib3JzKHgsIHkpIHtcbiAgICByZXR1cm4gW1xuICAgICAgW3ggKyAxLCB5XSxcbiAgICAgIFt4IC0gMSwgeV0sXG4gICAgICBbeCwgeSArIDFdLFxuICAgICAgW3gsIHkgLSAxXSxcbiAgICBdLmZpbHRlcigobmVpZ2hib3IpID0+IGlzVmFsaWRBdHRhY2tMb2MoLi4ubmVpZ2hib3IpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUJsYW5rTmVpZ2hib3IobG9jKSB7XG4gICAgcmV0dXJuIGdldEJsYW5rTmVpZ2hib3JzKC4uLmxvYykubGVuZ3RoID09PSAwXG4gICAgICA/IFtdXG4gICAgICA6IGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkoZ2V0QmxhbmtOZWlnaGJvcnMoLi4ubG9jKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFN0YXRlLFxuICAgIGdldFNoaXAsXG4gICAgZ2V0QXZhaWxhYmxlVGFyZ2V0cyxcbiAgICBnZXRRdHlTdW5rLFxuICAgIGFsbFN1bmssXG4gICAgaXNWYWxpZFBsYWNlbWVudCxcbiAgICBnZXRWYWxpZFNoaXBQbGFjZW1lbnRzLFxuICAgIHBsYWNlU2hpcCxcbiAgICBpc1ZhbGlkQXR0YWNrTG9jLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgZ2V0QmxhbmtOZWlnaGJvcnMsXG4gICAgZ2V0UmFuZG9tQmxhbmtOZWlnaGJvcixcbiAgfTtcbn1cbiIsImltcG9ydCB7IGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkgfSBmcm9tICcuLi9VdGlsaXRpZXMvaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBnZXRMb25nZXN0QmxhbmtzIH0gZnJvbSAnLi9nYW1lYm9hcmQtaGVscGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kTG9uZ2VzdEJsYW5rQXR0YWNrKGJvYXJkKSB7XG4gIGNvbnN0IGxvbmdlc3RCbGFua3MgPSBnZXRMb25nZXN0QmxhbmtzKGJvYXJkKTtcbiAgY29uc3QgW25leHRYLCBuZXh0WV0gPSBnZXRSYW5kb21JdGVtRnJvbUFycmF5KGxvbmdlc3RCbGFua3MpO1xuICBjb25zdCBpc1ZhbGlkQXR0YWNrID0gYm9hcmQucmVjZWl2ZUF0dGFjayhuZXh0WCwgbmV4dFkpO1xuXG4gIHJldHVybiBbaXNWYWxpZEF0dGFjaywgW25leHRYLCBuZXh0WV1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZFJhbmRvbUF0dGFjayhib2FyZCkge1xuICBjb25zdCBbbmV4dFgsIG5leHRZXSA9IGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkoYm9hcmQuZ2V0QXZhaWxhYmxlVGFyZ2V0cygpKTtcbiAgY29uc3QgaXNWYWxpZEF0dGFjayA9IGJvYXJkLnJlY2VpdmVBdHRhY2sobmV4dFgsIG5leHRZKTtcblxuICByZXR1cm4gW2lzVmFsaWRBdHRhY2ssIFtuZXh0WCwgbmV4dFldXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRMaW5lYXJBdHRhY2soW1t4MSwgeTFdLCBbeDIsIHkyXV0pIHtcbiAgY29uc3QgbmV4dFggPSB4MSA9PT0geDIgPyB4MSA6IHgyICsgTWF0aC5zaWduKHgyIC0geDEpO1xuICBjb25zdCBuZXh0WSA9IHkxID09PSB5MiA/IHkxIDogeTIgKyBNYXRoLnNpZ24oeTIgLSB5MSk7XG5cbiAgcmV0dXJuIFtuZXh0WCwgbmV4dFldO1xufVxuIiwiaW1wb3J0IHsgcmVtb3ZlQXJyYXlmcm9tTmVzdGVkQXJyYXkgfSBmcm9tICcuLi9VdGlsaXRpZXMvaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBnZXROZXh0TGluZWFyQXR0YWNrLCBzZW5kTG9uZ2VzdEJsYW5rQXR0YWNrIH0gZnJvbSAnLi9wbGF5ZXItaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XG4gIGxldCBfbmFtZSA9IG5hbWU7XG4gIGxldCBfcHJldmlvdXNIaXRzID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gX25hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBzZXROYW1lKG5ld05hbWUpIHtcbiAgICBfbmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBfdXBkYXRlUHJldmlvdXNIaXRzKHgsIHksIGJvYXJkKSB7XG4gICAgY29uc3QgdGFyZ2V0U2hpcCA9IGJvYXJkLmdldFNoaXAoeCwgeSk7XG5cbiAgICBpZiAoYm9hcmQuZ2V0U3RhdGUoeCwgeSkgPT09ICdoaXQnKSBfcHJldmlvdXNIaXRzLnB1c2goW3gsIHldKTtcblxuICAgIGlmICh0YXJnZXRTaGlwICYmIHRhcmdldFNoaXAuaXNTdW5rKCkpIHtcbiAgICAgIF9wcmV2aW91c0hpdHMgPSByZW1vdmVBcnJheWZyb21OZXN0ZWRBcnJheShcbiAgICAgICAgX3ByZXZpb3VzSGl0cyxcbiAgICAgICAgdGFyZ2V0U2hpcC5nZXRIaXRMb2NhdGlvbnMoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfYXR0YWNrUHJldmlvdXNIaXRzKGJvYXJkKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IF9wcmV2aW91c0hpdHMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICBjb25zdCBsb2MgPSBfcHJldmlvdXNIaXRzW2luZGV4XTtcblxuICAgICAgaWYgKGJvYXJkLmdldFJhbmRvbUJsYW5rTmVpZ2hib3IobG9jKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IFtuZXh0WCwgbmV4dFldID0gYm9hcmQuZ2V0UmFuZG9tQmxhbmtOZWlnaGJvcihsb2MpO1xuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKG5leHRYLCBuZXh0WSk7XG5cbiAgICAgICAgaWYgKGJvYXJkLmdldFN0YXRlKG5leHRYLCBuZXh0WSkgPT09ICdoaXQnKSB7XG4gICAgICAgICAgX3ByZXZpb3VzSGl0cy5wdXNoKGxvYywgW25leHRYLCBuZXh0WV0pO1xuICAgICAgICAgIF9wcmV2aW91c0hpdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW25leHRYLCBuZXh0WV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZW5kTG9uZ2VzdEJsYW5rQXR0YWNrKGJvYXJkKVsxXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRTbWFydEF0dGFjayhib2FyZCkge1xuICAgIGxldCBuZXh0WDtcbiAgICBsZXQgbmV4dFk7XG5cbiAgICBpZiAoX3ByZXZpb3VzSGl0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIFssIFtuZXh0WCwgbmV4dFldXSA9IHNlbmRMb25nZXN0QmxhbmtBdHRhY2soYm9hcmQpO1xuICAgIH0gZWxzZSBpZiAoX3ByZXZpb3VzSGl0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIFtuZXh0WCwgbmV4dFldID0gYm9hcmQuZ2V0UmFuZG9tQmxhbmtOZWlnaGJvcihfcHJldmlvdXNIaXRzWzBdKTtcbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2sobmV4dFgsIG5leHRZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgW25leHRYLCBuZXh0WV0gPSBnZXROZXh0TGluZWFyQXR0YWNrKF9wcmV2aW91c0hpdHMuc2xpY2UoLTIpKTtcblxuICAgICAgaWYgKCFib2FyZC5pc1ZhbGlkQXR0YWNrTG9jKG5leHRYLCBuZXh0WSkpIHtcbiAgICAgICAgW25leHRYLCBuZXh0WV0gPSBnZXROZXh0TGluZWFyQXR0YWNrKFxuICAgICAgICAgIF9wcmV2aW91c0hpdHMuc2xpY2UoMCwgMikucmV2ZXJzZSgpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICghYm9hcmQuaXNWYWxpZEF0dGFja0xvYyhuZXh0WCwgbmV4dFkpKVxuICAgICAgICByZXR1cm4gX2F0dGFja1ByZXZpb3VzSGl0cyhib2FyZCk7XG5cbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2sobmV4dFgsIG5leHRZKTtcbiAgICB9XG4gICAgX3VwZGF0ZVByZXZpb3VzSGl0cyhuZXh0WCwgbmV4dFksIGJvYXJkKTtcbiAgICByZXR1cm4gW25leHRYLCBuZXh0WV07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgc2V0TmFtZSxcbiAgICBzZW5kU21hcnRBdHRhY2ssXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCwgbmFtZSkge1xuICBsZXQgX25hbWUgPSBuYW1lO1xuICBsZXQgX2xlbmd0aCA9IGxlbmd0aDtcbiAgaWYgKGxlbmd0aCA8PSAwIHx8IGxlbmd0aCA+IDEwKVxuICAgIHRocm93IG5ldyBFcnJvcignTGVuZ3RoIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgYW5kIGxlc3MgdGhhbiAxMScpO1xuXG4gIGNvbnN0IF9oaXRMb2NhdGlvbiA9IFtdO1xuXG4gIGZ1bmN0aW9uIGhpdChsb2NhdGlvbikge1xuICAgIF9oaXRMb2NhdGlvbi5wdXNoKGxvY2F0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIF9uYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SGl0TG9jYXRpb25zKCkge1xuICAgIHJldHVybiBfaGl0TG9jYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBzZXROYW1lKG5ld05hbWUpIHtcbiAgICBfbmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIF9sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRMZW5ndGgobnVtYmVyKSB7XG4gICAgX2xlbmd0aCA9IG51bWJlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICByZXR1cm4gX2hpdExvY2F0aW9uLmxlbmd0aCA9PT0gbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgZ2V0TmFtZSxcbiAgICBzZXROYW1lLFxuICAgIGdldExlbmd0aCxcbiAgICBzZXRMZW5ndGgsXG4gICAgaXNTdW5rLFxuICAgIGdldEhpdExvY2F0aW9ucyxcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRJbnQodXBwZXJCb3VuZCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdXBwZXJCb3VuZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRCb29sKCkge1xuICByZXR1cm4gW3RydWUsIGZhbHNlXVtnZW5lcmF0ZVJhbmRJbnQoMildO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSXRlbUZyb21BcnJheShhcnJheSkge1xuICByZXR1cm4gYXJyYXlbZ2VuZXJhdGVSYW5kSW50KGFycmF5Lmxlbmd0aCldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbHMoYSwgYikge1xuICByZXR1cm4gKFxuICAgIEFycmF5LmlzQXJyYXkoYSkgJiZcbiAgICBBcnJheS5pc0FycmF5KGIpICYmXG4gICAgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmXG4gICAgYS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gYltpbmRleF0pXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBcnJheWZyb21OZXN0ZWRBcnJheShuZXN0ZWQsIHRvUmVtb3ZlKSB7XG4gIHJldHVybiBuZXN0ZWQuZmlsdGVyKChpdGVtMSkgPT5cbiAgICB0b1JlbW92ZS5ldmVyeSgoaXRlbTIpID0+ICFhcnJheUVxdWFscyhpdGVtMSwgaXRlbTIpKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm1VcENhc2VXaHRTcGFjZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykuam9pbignJyk7XG59XG4iLCJleHBvcnQgY29uc3Qgc2hpcFRlbXBsYXRlID0gW1xuICB7IGxlbmd0aDogNSwgbmFtZTogJ0NhcnJpZXInIH0sXG4gIHsgbGVuZ3RoOiA0LCBuYW1lOiAnQmF0dGxlc2hpcCcgfSxcbiAgeyBsZW5ndGg6IDMsIG5hbWU6ICdEZXN0cm95ZXInIH0sXG4gIHsgbGVuZ3RoOiAzLCBuYW1lOiAnU3VibWFyaW5lJyB9LFxuICB7IGxlbmd0aDogMiwgbmFtZTogJ1BhdHJvbCBCb2F0JyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHVzZXJDb25zdGFudHMgPSB7XG4gIG5hbWU6ICdGcmllbmRseSBTZWFzJyxcbiAgYm9hcmRDbGFzczogJ2xlZnRCb2FyZCcsXG59O1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZXJDb25zdGFudHMgPSB7XG4gIG5hbWU6ICdFbmVteSBTZWFzJyxcbiAgYm9hcmRDbGFzczogJ3JpZ2h0Qm9hcmQnLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgc2V0dXBHYW1lIGZyb20gJy4vTW9kdWxlcy9Db250cm9sL3NldHVwLWNvbnRyb2xsZXInO1xuaW1wb3J0IGluaXRpYXRlU2hpcFBsYWNlbWVudCBmcm9tICcuL01vZHVsZXMvQ29udHJvbC9zaGlwLXBsYWNlbWVudC1jb250cm9sbGVyJztcblxuc2V0dXBHYW1lKCk7XG5pbml0aWF0ZVNoaXBQbGFjZW1lbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==