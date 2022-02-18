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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: Syncopate;\n    font-weight: 700;\n    background-color: rgba(0, 0, 0, 0.801);\n    color: white;\n}\nheader>h1 {\n    text-align: center;\n    font-size: 48px;\n}\n\n.leftBoard, .rightBoard {\n    display: flex;\n    flex-direction: column;\n    margin: 25px;\n    padding: 15px;\n    border-radius: 15px;\n    max-width: 450px;\n}\n\n.boardTitle {\n    font-size: 24px;\n    text-align: center;\n}\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 1px;\n    border-width: 1px;\n    border-style: solid;\n    margin: 20px 0px;\n    width: min-content;\n}\n.boardStatus {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    height: 40px;\n    font-size: 18px;\n}\n.bold {\n    font-weight: 700;\n}\n.regular {\n    font-weight: 400;\n}\n\n.boardHighlight {\n    background-color:hsl(0, 0%, 38%);\n    transition: all 0.2s;\n}\n\n#gameBoardRow {\n    display: flex;\n    justify-content: center;\n}\n\n/* Square */\n\n.square {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: Kanit;\n    font-size: 32px;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    border: 1px solid white;\n}\n.square > img {\n    color:blueviolet;\n    height: 85%;\n    width: 85%;\n}\n.ship {\n    background-color: rgb(11, 84, 145);\n}\n.hit {\n    color: rgb(255, 77, 77);\n    border-color: white;\n} \n.miss {\n    color: white;\n}\n/* Ship Status / Grid */\n.shipStatus {\n    margin-top: 15px;\n    font-size: 14px;\n}\n.shipTitle {\n    margin: 5px 0px;\n}\n.shipName {\n    /* display: block; */\n}\n.shipSunk {\n    color: rgb(11, 84, 145);\n    text-decoration-line:line-through;\n}\n.sunkText {\n    color: red;\n    font-weight: 700;\n}\n\n/* End Game Modal */\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n#endGameContainer {\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.7);\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60%;\n    flex-direction: column;\n    align-items: center;\n    \n}\n#endGameStatus {\n    margin: 10px 0px;\n}\n.restartGame {\n    font-family: inherit;\n    color: inherit;\n    padding: 5px 10px;\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: hsl(0, 0%, 38%);\n    box-shadow: 0px 0px 5px 1px rgb(255, 255, 255);\n}\n.restartGame:hover {\n    cursor: pointer;\n    font-weight: 700;\n    box-shadow: 0px 0px 5px 2px rgb(255, 255, 255);\n}\n.hidden {\n    visibility: collapse;\n    display: none;\n}\n.postModal {\n    display: flex;\n    justify-content: center;\n}\n\n\n@media (max-width: 1000px) {\n    .leftBoard, .rightBoard {\n        margin: 20px;\n    }\n    #gameBoardRow {\n        flex-direction: column;\n        align-items: center;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,sCAAsC;IACtC,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,mCAAmC;IACnC,sCAAsC;IACtC,QAAQ;IACR,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;IAChC,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,UAAU;AACd;AACA;IACI,kCAAkC;AACtC;AACA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA,uBAAuB;AACvB;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,uBAAuB;IACvB,iCAAiC;AACrC;AACA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,sBAAsB;IACtB,mBAAmB;;AAEvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,oBAAoB;IACpB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,iCAAiC;IACjC,8CAA8C;AAClD;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,8CAA8C;AAClD;AACA;IACI,oBAAoB;IACpB,aAAa;AACjB;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;;;AAGA;IACI;QACI,YAAY;IAChB;IACA;QACI,sBAAsB;QACtB,mBAAmB;IACvB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@800&display=swap');\n\nbody {\n    font-family: Syncopate;\n    font-weight: 700;\n    background-color: rgba(0, 0, 0, 0.801);\n    color: white;\n}\nheader>h1 {\n    text-align: center;\n    font-size: 48px;\n}\n\n.leftBoard, .rightBoard {\n    display: flex;\n    flex-direction: column;\n    margin: 25px;\n    padding: 15px;\n    border-radius: 15px;\n    max-width: 450px;\n}\n\n.boardTitle {\n    font-size: 24px;\n    text-align: center;\n}\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 1px;\n    border-width: 1px;\n    border-style: solid;\n    margin: 20px 0px;\n    width: min-content;\n}\n.boardStatus {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    height: 40px;\n    font-size: 18px;\n}\n.bold {\n    font-weight: 700;\n}\n.regular {\n    font-weight: 400;\n}\n\n.boardHighlight {\n    background-color:hsl(0, 0%, 38%);\n    transition: all 0.2s;\n}\n\n#gameBoardRow {\n    display: flex;\n    justify-content: center;\n}\n\n/* Square */\n\n.square {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: Kanit;\n    font-size: 32px;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    border: 1px solid white;\n}\n.square > img {\n    color:blueviolet;\n    height: 85%;\n    width: 85%;\n}\n.ship {\n    background-color: rgb(11, 84, 145);\n}\n.hit {\n    color: rgb(255, 77, 77);\n    border-color: white;\n} \n.miss {\n    color: white;\n}\n/* Ship Status / Grid */\n.shipStatus {\n    margin-top: 15px;\n    font-size: 14px;\n}\n.shipTitle {\n    margin: 5px 0px;\n}\n.shipName {\n    /* display: block; */\n}\n.shipSunk {\n    color: rgb(11, 84, 145);\n    text-decoration-line:line-through;\n}\n.sunkText {\n    color: red;\n    font-weight: 700;\n}\n\n/* End Game Modal */\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n#endGameContainer {\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.7);\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60%;\n    flex-direction: column;\n    align-items: center;\n    \n}\n#endGameStatus {\n    margin: 10px 0px;\n}\n.restartGame {\n    font-family: inherit;\n    color: inherit;\n    padding: 5px 10px;\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: hsl(0, 0%, 38%);\n    box-shadow: 0px 0px 5px 1px rgb(255, 255, 255);\n}\n.restartGame:hover {\n    cursor: pointer;\n    font-weight: 700;\n    box-shadow: 0px 0px 5px 2px rgb(255, 255, 255);\n}\n.hidden {\n    visibility: collapse;\n    display: none;\n}\n.postModal {\n    display: flex;\n    justify-content: center;\n}\n\n\n@media (max-width: 1000px) {\n    .leftBoard, .rightBoard {\n        margin: 20px;\n    }\n    #gameBoardRow {\n        flex-direction: column;\n        align-items: center;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/Modules/Constants.js":
/*!**********************************!*\
  !*** ./src/Modules/Constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipTemplate": () => (/* binding */ shipTemplate),
/* harmony export */   "userConstants": () => (/* binding */ userConstants),
/* harmony export */   "computerConstants": () => (/* binding */ computerConstants)
/* harmony export */ });
const shipTemplate = [
    {length: 5, name: 'Carrier'},
    {length: 4, name: 'Battleship'},
    {length: 3, name: 'Destroyer'},
    {length: 3, name: 'Submarine'},
    {length: 2, name: 'Patrol Boat'}
  ];

const userConstants = {
    name: "Friendly Seas",
    boardClass: "leftBoard",
}

const computerConstants = {
    name: "Enemy Seas",
    boardClass: "rightBoard",
}

/***/ }),

/***/ "./src/Modules/Control/gamePlay_controller.js":
/*!****************************************************!*\
  !*** ./src/Modules/Control/gamePlay_controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockUserInput": () => (/* binding */ blockUserInput),
/* harmony export */   "userTurn": () => (/* binding */ userTurn),
/* harmony export */   "compTurn": () => (/* binding */ compTurn),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/dom_helpers */ "./src/Modules/DOM/dom_helpers.js");
/* harmony import */ var _DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/renderDOM */ "./src/Modules/DOM/renderDOM.js");
/* harmony import */ var _UI_gamePlay_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/gamePlay_UI */ "./src/Modules/UI/gamePlay_UI.js");
/* harmony import */ var _Utilities_helper_func__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utilities/helper_func */ "./src/Modules/Utilities/helper_func.js");
/* harmony import */ var _setup_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup_controller */ "./src/Modules/Control/setup_controller.js");






let blockUserInput;

function _endGame(winner) {
    
    let endMsg = (winner === _setup_controller__WEBPACK_IMPORTED_MODULE_4__.user) ?  "You Win! Good job sinking all your opponents ships 😀" : "All your ships were sunk. You lost 🙁";

    (0,_DOM_dom_helpers__WEBPACK_IMPORTED_MODULE_0__.getAllSquares)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.boardClass).forEach((sq) => (0,_UI_gamePlay_UI__WEBPACK_IMPORTED_MODULE_2__.removeAllAttackEL)(sq));
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.board, _setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.boardClass, false);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.board, _setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.boardClass, false);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateShipsSunk)();
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderModal)(endMsg);

    (0,_UI_gamePlay_UI__WEBPACK_IMPORTED_MODULE_2__.addClickRestartEL)();
}

function userTurn(x, y) {
    blockUserInput = true;
    
    _setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.player.sendAttack(x, y, _setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.board);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoardXY)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.board, x, y, _setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.boardClass, false);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.boardClass, ``, 'bold');
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateShipsSunk)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.board.getShip(x, y), _setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer);

    if (_setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.board.allSunk()) return _endGame(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.user);
    
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.focusBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.boardClass);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.boardClass, `Thinking...`, "bold");
    
    setTimeout(compTurn, 0); // change to 500 - 2000ms later ( Math.max(500, generateRandInt(2000))) )
}

function compTurn() {
    const target = _setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.player.sendSmartAttack(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.board);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoardXY)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.board, target[0], target[1], _setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.boardClass, false);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.boardClass, ``, "bold");
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateShipsSunk)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.board.getShip(target[0], target[1]), _setup_controller__WEBPACK_IMPORTED_MODULE_4__.user);

    if (_setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.board.allSunk()) return _endGame(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer);

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.focusBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.boardClass);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.boardClass, `Place your attack!`, 'bold');
    
    blockUserInput = false;
}

function startGame() {
    blockUserInput = false;
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.focusBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.boardClass);
    
    (0,_UI_gamePlay_UI__WEBPACK_IMPORTED_MODULE_2__.addHoverCrosshairEL)();
    (0,_UI_gamePlay_UI__WEBPACK_IMPORTED_MODULE_2__.addClickAttackEL)();

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.board, _setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.boardClass, false);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.board, _setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.boardClass, false);

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderShipsStatus)();
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.user.boardClass, ``, 'bold');
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(_setup_controller__WEBPACK_IMPORTED_MODULE_4__.computer.boardClass, `Place your attack!`, 'bold');
}

/***/ }),

/***/ "./src/Modules/Control/setup_controller.js":
/*!*************************************************!*\
  !*** ./src/Modules/Control/setup_controller.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user": () => (/* binding */ user),
/* harmony export */   "computer": () => (/* binding */ computer),
/* harmony export */   "setupGame": () => (/* binding */ setupGame)
/* harmony export */ });
/* harmony import */ var _Factory_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Factory/Gameboard.js */ "./src/Modules/Factory/Gameboard.js");
/* harmony import */ var _Factory_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Factory/Player */ "./src/Modules/Factory/Player.js");
/* harmony import */ var _Factory_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Factory/Ship */ "./src/Modules/Factory/Ship.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Constants */ "./src/Modules/Constants.js");
/* harmony import */ var _DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DOM/renderDOM */ "./src/Modules/DOM/renderDOM.js");
/* harmony import */ var _UI_gamePlay_UI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/gamePlay_UI.js */ "./src/Modules/UI/gamePlay_UI.js");







let user, computer;

function _generateShips(shipInfo) {
    const shipArray = [];

    shipInfo.forEach(ship => {
      shipArray.push((0,_Factory_Ship__WEBPACK_IMPORTED_MODULE_2__["default"])(ship.length, ship.name));
    });

    return shipArray;
}

function _setupGameObjects(player1, player2, shipInfo) {
    player1.player = (0,_Factory_Player__WEBPACK_IMPORTED_MODULE_1__["default"])(player1.name);
    player2.player = (0,_Factory_Player__WEBPACK_IMPORTED_MODULE_1__["default"])(player2.name);

    player1.board = (0,_Factory_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    player2.board = (0,_Factory_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    player1.ships = _generateShips(shipInfo);
    player2.ships = _generateShips(shipInfo);
}

function _setupDOM(player1, player2) {
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderGrid)(player1.boardClass);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderGrid)(player2.boardClass);

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardTitle)(player1.player.getName(), player1.boardClass);
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardTitle)(player2.player.getName(), player2.boardClass);

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(player1.boardClass, "", "bold"); // clears any previous board status
    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.renderBoardStatus)(player2.boardClass, "", "bold");

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.setupShipsSunk)();

    (0,_DOM_renderDOM__WEBPACK_IMPORTED_MODULE_4__.focusBoard)(player1.boardClass);
}

function setupGame() {

    user = Object.assign({}, _Constants__WEBPACK_IMPORTED_MODULE_3__.userConstants);
    computer = Object.assign({}, _Constants__WEBPACK_IMPORTED_MODULE_3__.computerConstants);
    
    _setupGameObjects(user, computer, _Constants__WEBPACK_IMPORTED_MODULE_3__.shipTemplate);
    _setupDOM(user, computer);

}

/***/ }),

/***/ "./src/Modules/Control/shipPlacement_controller.js":
/*!*********************************************************!*\
  !*** ./src/Modules/Control/shipPlacement_controller.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeShipsManual": () => (/* binding */ placeShipsManual),
/* harmony export */   "initiateShipPlacement": () => (/* binding */ initiateShipPlacement)
/* harmony export */ });
/* harmony import */ var _setup_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup_controller.js */ "./src/Modules/Control/setup_controller.js");
/* harmony import */ var _DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/renderDOM.js */ "./src/Modules/DOM/renderDOM.js");
/* harmony import */ var _Utilities_helper_func_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities/helper_func.js */ "./src/Modules/Utilities/helper_func.js");
/* harmony import */ var _UI_shipPlacement_UI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/shipPlacement_UI.js */ "./src/Modules/UI/shipPlacement_UI.js");





function _placeShipsRandom(player) {
    player.ships.forEach((ship) => {
    
      let gen_vert = (0,_Utilities_helper_func_js__WEBPACK_IMPORTED_MODULE_2__.generateRandBool)();
      let validLocations = player.board.getValidShipPlacements(ship, player.board, gen_vert);
      let [gen_x, gen_y] = (0,_Utilities_helper_func_js__WEBPACK_IMPORTED_MODULE_2__.getRandomItemFromArray)(validLocations);

      player.board.placeShip(ship, gen_x, gen_y, gen_vert);
    });
}

function placeShipsManual(player) {
    let currentShip = player.ships[player.shipIndex];
    let currentBoard = player.board;
    let currentVertical = player.shipVertical;

    let validLocations = player.board.getValidShipPlacements(currentShip, currentBoard, currentVertical);

    (0,_UI_shipPlacement_UI_js__WEBPACK_IMPORTED_MODULE_3__.addRotateShipEL)();
    (0,_UI_shipPlacement_UI_js__WEBPACK_IMPORTED_MODULE_3__.addHoverShipPlaceEL)(player, validLocations); 
    (0,_UI_shipPlacement_UI_js__WEBPACK_IMPORTED_MODULE_3__.addClickShipPlaceEL)(player, validLocations);

    (0,_DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(
        player.boardClass, 
        `Place ${currentShip.getName()}`, 
        "bold"
    );
    (0,_DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__.renderBoardStatus)(
        player.boardClass,
        `(Press R to rotate ship)`,
        "regular",
        false
    );
}

function initiateShipPlacement() {
    
    _setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical = true;
    _setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex = 0;

    _placeShipsRandom(_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.computer);
    placeShipsManual(_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user);
}

/***/ }),

/***/ "./src/Modules/DOM/dom_helpers.js":
/*!****************************************!*\
  !*** ./src/Modules/DOM/dom_helpers.js ***!
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
    return arrayLocations.map(loc => document.querySelector(`#${player.boardClass}${loc[0]}${loc[1]}`));
}

function getXYfromElement(element) {
    return [Number(element.id.slice(-2, -1)), Number(element.id.slice(-1))];
}

function toggleShip(arrayElements, event) {
    arrayElements.forEach((el) => {
        if (event.type === 'mouseenter') el.classList.add('ship');
        else el.classList.remove('ship');
    });
}

function getAllSquares(boardClass) {
    return document.querySelectorAll(`.${boardClass} .square`);
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
}

/***/ }),

/***/ "./src/Modules/DOM/renderDOM.js":
/*!**************************************!*\
  !*** ./src/Modules/DOM/renderDOM.js ***!
  \**************************************/
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
/* harmony import */ var _Control_setup_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Control/setup_controller */ "./src/Modules/Control/setup_controller.js");
/* harmony import */ var _Utilities_helper_func__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/helper_func */ "./src/Modules/Utilities/helper_func.js");
/* harmony import */ var _dom_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom_helpers */ "./src/Modules/DOM/dom_helpers.js");




function _renderState(board, x, y, locationID) {
  const state = board.getState(x, y);
  if (state !== "blank") {
    const square = document.querySelector(`#${locationID}`);
    square.classList.add(state);
    square.textContent = state === "hit" ? "X" : "O";
  }
}

function _renderShips(board, x, y, locationID) {
  const square = document.querySelector(`#${locationID}`);
  if (board.getShip(x, y) !== null) square.classList.add("ship");
  else square.classList.remove("ship");
}

function renderModal(endMsg) {
  let modal = document.querySelector('.modal');
  let modalRestart = modal.querySelector('.restartGame');
  let postModalRestart = document.querySelector('.postModal .restartGame');

  modalRestart.classList.remove('hidden');
  modal.style.display = "flex";
  document.querySelector('#endGameStatus').textContent = endMsg;
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      postModalRestart.classList.remove('hidden');
    }
  }

}

function removeModal() {
  let modal = document.querySelector('.modal');
  modal.style.display = "none";
}

function removeRestartGame() {
  document.querySelectorAll('.restartGame').forEach((el) => {
    el.classList.add('hidden');
  })
}

function focusBoard(boardSide) {
  document.querySelectorAll('.leftBoard, .rightBoard').forEach(el => el.classList.remove('boardHighlight'));
  document.querySelector(`.${boardSide}`).classList.add('boardHighlight');
}

function renderGrid(boardSide) {
  const board = document.querySelector(`.${boardSide} > .board`);
  (0,_dom_helpers__WEBPACK_IMPORTED_MODULE_2__.removeAllChildren)(board);
  
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.id = boardSide + j + i;
      board.appendChild(square);
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

  if (clearStatus === true) (0,_dom_helpers__WEBPACK_IMPORTED_MODULE_2__.removeAllChildren)(boardStatusContainer);

  const boardStatusDIV = document.createElement("div");
  boardStatusDIV.classList.add(style);
  boardStatusDIV.textContent = status;

  boardStatusContainer.appendChild(boardStatusDIV);
}
function setupShipsSunk() {
  document.querySelectorAll('.sunkText, .shipStatus').forEach((el) => {
    el.classList.add('hidden');
  });
  document.querySelectorAll('.shipSunk').forEach((el) => {
    el.classList.remove('shipSunk');
  })
}

function renderShipsStatus() {
  document.querySelectorAll('.shipStatus').forEach((el) => {
    el.classList.remove('hidden');
  })
}
function updateShipsSunk(ship, player) {
  if (ship && ship.isSunk()) {
    const shipSelector = `.${player.boardClass} .${(0,_Utilities_helper_func__WEBPACK_IMPORTED_MODULE_1__.rmUpCaseWhtSpace)(ship.getName())}`;
    const shipSpan = document.querySelector(shipSelector);
    shipSpan.classList.add('shipSunk');

    shipSpan.nextElementSibling.classList.remove('hidden');

    renderBoardStatus(player.boardClass, `${ship.getName()} was sunk!`, "bold");
  }
}

function renderBoardXY(board, x, y, boardSide, hideShips) {
  const locationID = boardSide + x + y;
  if (hideShips === false) _renderShips(board, x, y, locationID);
  _renderState(board, x, y, locationID);
}

function renderBoard(board, boardSide, hideShips) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      renderBoardXY(board, j, i, boardSide, hideShips);
    }
  }
}








/***/ }),

/***/ "./src/Modules/Factory/Gameboard.js":
/*!******************************************!*\
  !*** ./src/Modules/Factory/Gameboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Utilities_helper_func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/helper_func */ "./src/Modules/Utilities/helper_func.js");


function Gameboard() {
  const _size = 10;
  const _board = [...Array(_size)].map(() => Array(_size));
  const _ships = [];

  for (let i = 0; i < _size; i += 1) {
    for (let j = 0; j < _size; j += 1) {
      _board[i][j] = {
        ship: null, 
        state: 'blank',
      };
    }
  }

  function _coordIsWithinBoard(x, y) {
    return (x >= 0 && x < _size) && (y >= 0 && y < _size);
  } 

  function getState(x, y) {
    return _board[x][y].state;
  }

  function getShip(x, y) {
    return _board[x][y].ship;
  }

  function getAvailableTargets() {
      let targets = [];
      for (let i = 0; i < _size; i += 1) {
        for (let j = 0; j < _size; j += 1) {
          if (getState(i, j) === 'blank') targets.push([i, j]);
        }
      }
      return targets;
  }

  function getQtySunk() {
    return _ships.reduce((prev, curr) => prev + (curr.isSunk() ? 1 : 0), 0);
  }

  function allSunk() {
    if (_ships.length === 0) return false;

    return _ships.every((ship) => ship.isSunk());
  }

  function getArrayCoords (shipLength, x, y, isVertical) {
    const arrayCoords = [];

    for (let i = 0; i < shipLength; i += 1) {
      const newX = x + (isVertical === false ? i : 0);
      const newY = y + (isVertical === true ? i : 0);
      arrayCoords.push([newX, newY]);
    }
    return arrayCoords; 
  }

  function isValidPlacement(shipLength, x, y, isVertical) {

    return getArrayCoords(shipLength, x, y, isVertical).every((xyCoords) => 
      _coordIsWithinBoard(...xyCoords) && getShip(xyCoords[0], xyCoords[1]) === null);
  }

  function getValidShipPlacements(ship, board, isVertical) {
    let validLocations = [];

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (isValidPlacement(ship.getLength(), j, i, isVertical)) {
          validLocations.push([j, i]);
        }
      }
    }

    return validLocations;
  }

  function placeShip(ship, x, y, isVertical) {
    if (isValidPlacement(ship.getLength(), x, y, isVertical)) {

      getArrayCoords(ship.getLength(), x, y, isVertical).forEach((xyCoords) => 
        _board[xyCoords[0]][xyCoords[1]].ship = ship);

      _ships.push(ship);
  
      return true;
    }
    return false;
  }

  function isValidAttackLoc(x, y) {
    return (_coordIsWithinBoard(x, y)) && (getState(x, y) === 'blank');
  }

  function receiveAttack(x, y) {
    if (!isValidAttackLoc(x, y)) return false;

    if (getShip(x, y) !== null) {
      getShip(x, y).hit([x, y]);
      _board[x][y].state = 'hit';
    } else {
      _board[x][y].state = 'miss';
    }
    return true;
  }

  function getBlankNeighbors(x, y) {
    let _validBlanks = [];

    for (let i = -1; i < 2; i += 2) {
      let newX = x + i;
      let newY = y;
      if (isValidAttackLoc(newX, newY)) _validBlanks.push([newX, newY]);
    }

    for (let i = -1; i < 2; i += 2) {
      let newX = x;
      let newY = y + i;
      if (isValidAttackLoc(newX, newY)) _validBlanks.push([newX, newY]);
    }

    return _validBlanks;
  }

  function getRandomBlankNeighbor(loc) {
    let blankNeighbors = getBlankNeighbors(loc[0], loc[1]);
    if (blankNeighbors.length === 0) return [];
    return (0,_Utilities_helper_func__WEBPACK_IMPORTED_MODULE_0__.getRandomItemFromArray)(getBlankNeighbors(loc[0], loc[1]));
  }

  return {
    getState, getShip, getAvailableTargets, getQtySunk, allSunk, getArrayCoords, isValidPlacement, getValidShipPlacements, placeShip, isValidAttackLoc, receiveAttack, getBlankNeighbors, getRandomBlankNeighbor
  };
}


/***/ }),

/***/ "./src/Modules/Factory/Player.js":
/*!***************************************!*\
  !*** ./src/Modules/Factory/Player.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Utilities_helper_func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/helper_func */ "./src/Modules/Utilities/helper_func.js");


function Player(name) {
  let _name = name;
  let _prevAttackLocation = [];

  function getName() {
    return _name;
  }

  function setName(name) {
    _name = name;
  }

  function sendAttack(x, y, board) {
    return board.receiveAttack(x, y);
  }

  function getLongestBlank_X(x, y, board) {
    let numBlanks = 0;
    while (board.isValidAttackLoc(x + numBlanks, y)) {
      numBlanks++;
    }
    return numBlanks;
  }

  function getLongestBlank_Y(x, y, board) {
    let numBlanks = 0;
    while (board.isValidAttackLoc(x, y + numBlanks)) {
      numBlanks++;
    }
    return numBlanks;
  }

  function getLongestBlanks(board) {
    let longestBlanks = [];
    let currLongest = 0;

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        
        let lenX = getLongestBlank_X(x, y, board);
        let lenY = getLongestBlank_Y(x, y, board);

        if (lenX > lenY && lenX >= currLongest) {
          if (lenX > currLongest) longestBlanks = [];
          longestBlanks.push([Math.floor(x + lenX/2), y]);
          currLongest = lenX;
        
        } else if (lenY > lenX && lenY >= currLongest) {
          if (lenY > currLongest) longestBlanks = [];
          longestBlanks.push([x, Math.floor(y + lenY/2)]);
          currLongest = lenY;
        
        } else if (lenY === lenX && lenX >= currLongest) {
          if (lenX > currLongest) longestBlanks = [];
          longestBlanks.push([Math.floor(x + lenX/2), y]);
          longestBlanks.push([x, Math.floor(y + lenY/2)]);
          currLongest = lenX;
        }
      }
    }

    return longestBlanks;
  }

  function sendAttack_BinarySearch(board) {
    let longestBlanks = getLongestBlanks(board);
    let [nextX, nextY] = (0,_Utilities_helper_func__WEBPACK_IMPORTED_MODULE_0__.getRandomItemFromArray)(longestBlanks);
    const isValidAttack = sendAttack(nextX, nextY, board);
    
    return [isValidAttack, [nextX, nextY]];
  }

  function sendRandomAttack(board) {
    const targetLocation = (0,_Utilities_helper_func__WEBPACK_IMPORTED_MODULE_0__.getRandomItemFromArray)(board.getAvailableTargets());
    const isValidAttack = sendAttack(targetLocation[0], targetLocation[1], board);

    return [isValidAttack, targetLocation];
  }

  function _updatePrevAttackArr(x, y, board) {
    let currShip = board.getShip(x, y);

    if (board.getState(x, y) === 'hit') _prevAttackLocation.push([x, y]); 

    if (currShip && currShip.isSunk()) {
      _prevAttackLocation = (0,_Utilities_helper_func__WEBPACK_IMPORTED_MODULE_0__.removeArrfromNestedArr)(_prevAttackLocation, currShip.getHitLocations());
    }
  }

  function _getNextAttackLoc([[x1, y1], [x2, y2]]) {
    let nextX = x1 === x2 ? x1 : x2 + Math.sign(x2 - x1);
    let nextY = y1 === y2 ? y1 : y2 + Math.sign(y2 - y1);

    return [nextX, nextY];
  }

  function _attackNextValidLoc(board) {
    for (let i = 0; i < _prevAttackLocation.length; i++) {

      let loc = _prevAttackLocation[i];

      if (board.getRandomBlankNeighbor(loc).length > 0) {
        let [nextX, nextY] = board.getRandomBlankNeighbor(loc);
        sendAttack(nextX, nextY, board);

        if (board.getState(nextX, nextY) === 'hit') {
          _prevAttackLocation.push(loc);
          _prevAttackLocation.push([nextX, nextY]);
          _prevAttackLocation.splice(i, 1);
        }
        return [nextX, nextY];
      }
    }
  }

  function sendSmartAttack(board) {

    let nextX, nextY;
 
    if (_prevAttackLocation.length === 0) {
      [,[nextX, nextY]] = sendAttack_BinarySearch(board);
      
    } else if (_prevAttackLocation.length === 1) {
      [nextX, nextY] = board.getRandomBlankNeighbor(_prevAttackLocation[0]);
      sendAttack(nextX, nextY, board);
      
    } else {
      [nextX, nextY] = _getNextAttackLoc(_prevAttackLocation.slice(-2));

      if (!board.isValidAttackLoc(nextX, nextY)) {
        [nextX, nextY] = _getNextAttackLoc(_prevAttackLocation.slice(0, 2).reverse());
      }

      if (!board.isValidAttackLoc(nextX, nextY)) return _attackNextValidLoc(board);

      sendAttack(nextX, nextY, board);
    }
    _updatePrevAttackArr(nextX, nextY, board);
    return [nextX, nextY];
  }

  return { getName, setName, sendRandomAttack, sendAttack, getLongestBlank_X, getLongestBlank_Y, sendSmartAttack };
}


/***/ }),

/***/ "./src/Modules/Factory/Ship.js":
/*!*************************************!*\
  !*** ./src/Modules/Factory/Ship.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length, name) {
  if (length <= 0 || length > 10)
    throw new Error("Length must be greater than 0 and less than 11");

  const _hitLocation = [];

  function hit(location) {
    _hitLocation.push(location);
  }

  function getName() { 
    return name;
  }

  function getHitLocations() {
    return _hitLocation;
  }
  
  function setName(newName) {
    name = newName;
  }

  function getLength() {
    return length;
  }

  function setLength(num) {
    length = num;
  }

  function isSunk() {
    return _hitLocation.length === length;
  }

  return { hit, getName, setName, getLength, setLength, isSunk, getHitLocations };
}


/***/ }),

/***/ "./src/Modules/UI/gamePlay_UI.js":
/*!***************************************!*\
  !*** ./src/Modules/UI/gamePlay_UI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAllAttackEL": () => (/* binding */ removeAllAttackEL),
/* harmony export */   "addHoverCrosshairEL": () => (/* binding */ addHoverCrosshairEL),
/* harmony export */   "addClickAttackEL": () => (/* binding */ addClickAttackEL),
/* harmony export */   "addClickRestartEL": () => (/* binding */ addClickRestartEL)
/* harmony export */ });
/* harmony import */ var _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Control/setup_controller.js */ "./src/Modules/Control/setup_controller.js");
/* harmony import */ var _DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/dom_helpers.js */ "./src/Modules/DOM/dom_helpers.js");
/* harmony import */ var _images_Crosshairs_Red_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/Crosshairs_Red.svg */ "./src/images/Crosshairs_Red.svg");
/* harmony import */ var _Control_gamePlay_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Control/gamePlay_controller.js */ "./src/Modules/Control/gamePlay_controller.js");
/* harmony import */ var _Control_shipPlacement_controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Control/shipPlacement_controller.js */ "./src/Modules/Control/shipPlacement_controller.js");
/* harmony import */ var _DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DOM/renderDOM.js */ "./src/Modules/DOM/renderDOM.js");







function _loadCrosshair(event) {
    const targetIcon = new Image();
    targetIcon.src = _images_Crosshairs_Red_svg__WEBPACK_IMPORTED_MODULE_2__;
    targetIcon.classList.add("crosshair");
    event.target.appendChild(targetIcon);
}

function _removeCrosshair(event) {
    event.target.removeChild(event.target.firstChild);
}

function removeAllAttackEL(square) {
    square.removeEventListener('mouseenter', _loadCrosshair);
    square.removeEventListener('mouseleave', _removeCrosshair);
    square.removeEventListener('click', _handleAttack);
}

function _handleAttack(event) {
    if (_Control_gamePlay_controller_js__WEBPACK_IMPORTED_MODULE_3__.blockUserInput) return;

    let square = event.target.closest('.square');
    removeAllAttackEL(square);
    (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.removeAllChildren)(square);

    (0,_Control_gamePlay_controller_js__WEBPACK_IMPORTED_MODULE_3__.userTurn)(...(0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getXYfromElement)(square));
}

function _restartGame(event) {
    (0,_DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_5__.removeModal)();
    (0,_DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_5__.removeRestartGame)();
    (0,_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.setupGame)();
    (0,_Control_shipPlacement_controller_js__WEBPACK_IMPORTED_MODULE_4__.initiateShipPlacement)();
}

function addHoverCrosshairEL() {
    (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getAllSquares)(_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.computer.boardClass).forEach((sq) => {
        sq.addEventListener('mouseenter', _loadCrosshair);
        sq.addEventListener('mouseleave', _removeCrosshair);
    })
}

function addClickAttackEL() {
    (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getAllSquares)(_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.computer.boardClass).forEach((sq) => {
        sq.addEventListener('click', _handleAttack);
    })
}

function addClickRestartEL() {
    document.querySelectorAll('.restartGame').forEach((el) => {
        el.addEventListener('click', _restartGame);
    })
}

/***/ }),

/***/ "./src/Modules/UI/shipPlacement_UI.js":
/*!********************************************!*\
  !*** ./src/Modules/UI/shipPlacement_UI.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRotateShipEL": () => (/* binding */ addRotateShipEL),
/* harmony export */   "addHoverShipPlaceEL": () => (/* binding */ addHoverShipPlaceEL),
/* harmony export */   "addClickShipPlaceEL": () => (/* binding */ addClickShipPlaceEL)
/* harmony export */ });
/* harmony import */ var _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Control/setup_controller.js */ "./src/Modules/Control/setup_controller.js");
/* harmony import */ var _DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/dom_helpers.js */ "./src/Modules/DOM/dom_helpers.js");
/* harmony import */ var _Control_shipPlacement_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Control/shipPlacement_controller.js */ "./src/Modules/Control/shipPlacement_controller.js");
/* harmony import */ var _DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DOM/renderDOM.js */ "./src/Modules/DOM/renderDOM.js");
/* harmony import */ var _Control_gamePlay_controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Control/gamePlay_controller.js */ "./src/Modules/Control/gamePlay_controller.js");






let currElementsEL;

function _removeAllShipPlacementEL() {
    document.removeEventListener("keydown", _handleRotate);

    currElementsEL.forEach((el) => {
        el.removeEventListener('mouseenter', _handleHover);
        el.removeEventListener('mouseleave', _handleHover);
        el.removeEventListener('click', _handleClick);
    });
}

function _handleRotate(event) {
    if (event.code === "KeyR") {
      _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical = !_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical;
      _removeAllShipPlacementEL();
      (0,_DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.board, _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.boardClass, false);
      (0,_Control_shipPlacement_controller_js__WEBPACK_IMPORTED_MODULE_2__.placeShipsManual)(_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user);
    }
}

function _handleHover(event) {
    let [x, y] = (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getXYfromElement)(event.target);
    let currentShip = _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.ships[_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex];
    let currentBoard = _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.board;
    let currentVertical = _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical;

    let arrayCoords = currentBoard.getArrayCoords(currentShip.getLength(), x, y, currentVertical);
    let arrayCoordElements = (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getSquareElements)(arrayCoords, _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user);
    (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.toggleShip)(arrayCoordElements, event);
}

function _handleClick(event) {
    let [x, y] = (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getXYfromElement)(event.target);
    let currentShip = _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.ships[_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex];
    let currentBoard = _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.board;
    let currentVertical = _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipVertical;

    currentBoard.placeShip(currentShip, x, y, currentVertical);
    _removeAllShipPlacementEL();
    (0,_DOM_renderDOM_js__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(currentBoard, _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.boardClass, false);
    _Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex += 1;

    if (_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.ships[_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user.shipIndex] !== undefined) (0,_Control_shipPlacement_controller_js__WEBPACK_IMPORTED_MODULE_2__.placeShipsManual)(_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_0__.user);
    else (0,_Control_gamePlay_controller_js__WEBPACK_IMPORTED_MODULE_4__.startGame)();
}

function addRotateShipEL() {
    document.addEventListener("keydown", _handleRotate);
}

function addHoverShipPlaceEL(player, validLocations) {
    let validLocElements = (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getSquareElements)(validLocations, player);
    currElementsEL = validLocElements;

    validLocElements.forEach((el) => {
      el.addEventListener('mouseenter', _handleHover);
      el.addEventListener('mouseleave', _handleHover);
    });
}

function addClickShipPlaceEL(player, validLocations) {
    let validLocElements = (0,_DOM_dom_helpers_js__WEBPACK_IMPORTED_MODULE_1__.getSquareElements)(validLocations, player);

    validLocElements.forEach((el) => {
        el.addEventListener('click', _handleClick);
    });
}


/***/ }),

/***/ "./src/Modules/Utilities/helper_func.js":
/*!**********************************************!*\
  !*** ./src/Modules/Utilities/helper_func.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateRandInt": () => (/* binding */ generateRandInt),
/* harmony export */   "generateRandBool": () => (/* binding */ generateRandBool),
/* harmony export */   "getRandomItemFromArray": () => (/* binding */ getRandomItemFromArray),
/* harmony export */   "arrayEquals": () => (/* binding */ arrayEquals),
/* harmony export */   "removeArrfromNestedArr": () => (/* binding */ removeArrfromNestedArr),
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
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}

function removeArrfromNestedArr(nested, toRemove) {
    return nested.filter(item1 => 
        toRemove.every(item2 => 
            !arrayEquals(item1, item2)));
}

function rmUpCaseWhtSpace(str) {
    return str.toLowerCase().split(' ').join('');
}

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
/* harmony import */ var _Modules_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/Control/setup_controller.js */ "./src/Modules/Control/setup_controller.js");
/* harmony import */ var _Modules_Control_shipPlacement_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/Control/shipPlacement_controller */ "./src/Modules/Control/shipPlacement_controller.js");




(0,_Modules_Control_setup_controller_js__WEBPACK_IMPORTED_MODULE_1__.setupGame)();
(0,_Modules_Control_shipPlacement_controller__WEBPACK_IMPORTED_MODULE_2__.initiateShipPlacement)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUM2QztBQUNpQjs7QUFFbkYsK0VBQVM7QUFDVCxnR0FBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0NvbnRyb2wvZ2FtZVBsYXlfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvQ29udHJvbC9zZXR1cF9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9Db250cm9sL3NoaXBQbGFjZW1lbnRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvRE9NL2RvbV9oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9ET00vcmVuZGVyRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9GYWN0b3J5L0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvRmFjdG9yeS9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0ZhY3RvcnkvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvVUkvZ2FtZVBsYXlfVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL1VJL3NoaXBQbGFjZW1lbnRfVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL1V0aWxpdGllcy9oZWxwZXJfZnVuYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3luY29wYXRlOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdDp3Z2h0QDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwMSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuaGVhZGVyPmgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5sZWZ0Qm9hcmQsIC5yaWdodEJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbn1cXG5cXG4uYm9hcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMXB4O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG4uYm9hcmRTdGF0dXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmJvbGQge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ucmVndWxhciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5ib2FyZEhpZ2hsaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aHNsKDAsIDAlLCAzOCUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuI2dhbWVCb2FyZFJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBTcXVhcmUgKi9cXG5cXG4uc3F1YXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBLYW5pdDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnNxdWFyZSA+IGltZyB7XFxuICAgIGNvbG9yOmJsdWV2aW9sZXQ7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgODQsIDE0NSk7XFxufVxcbi5oaXQge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgNzcsIDc3KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59IFxcbi5taXNzIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBTaGlwIFN0YXR1cyAvIEdyaWQgKi9cXG4uc2hpcFN0YXR1cyB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnNoaXBUaXRsZSB7XFxuICAgIG1hcmdpbjogNXB4IDBweDtcXG59XFxuLnNoaXBOYW1lIHtcXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXFxufVxcbi5zaGlwU3VuayB7XFxuICAgIGNvbG9yOiByZ2IoMTEsIDg0LCAxNDUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTpsaW5lLXRocm91Z2g7XFxufVxcbi5zdW5rVGV4dCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8qIEVuZCBHYW1lIE1vZGFsICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbiNlbmRHYW1lQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4jZW5kR2FtZVN0YXR1cyB7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxufVxcbi5yZXN0YXJ0R2FtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDM4JSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5yZXN0YXJ0R2FtZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucG9zdE1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmxlZnRCb2FyZCwgLnJpZ2h0Qm9hcmQge1xcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xcbiAgICB9XFxuICAgICNnYW1lQm9hcmRSb3cge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBLHVCQUF1QjtBQUN2QjtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TeW5jb3BhdGU6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0OndnaHRAODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODAxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXI+aDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLmxlZnRCb2FyZCwgLnJpZ2h0Qm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDI1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbi5ib2FyZFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbi5ib2FyZFN0YXR1cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uYm9sZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5yZWd1bGFyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmJvYXJkSGlnaGxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDM4JSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4jZ2FtZUJvYXJkUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIFNxdWFyZSAqL1xcblxcbi5zcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEthbml0O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uc3F1YXJlID4gaW1nIHtcXG4gICAgY29sb3I6Ymx1ZXZpb2xldDtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCA4NCwgMTQ1KTtcXG59XFxuLmhpdCB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCA3NywgNzcpO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn0gXFxuLm1pc3Mge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi8qIFNoaXAgU3RhdHVzIC8gR3JpZCAqL1xcbi5zaGlwU3RhdHVzIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc2hpcFRpdGxlIHtcXG4gICAgbWFyZ2luOiA1cHggMHB4O1xcbn1cXG4uc2hpcE5hbWUge1xcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cXG59XFxuLnNoaXBTdW5rIHtcXG4gICAgY29sb3I6IHJnYigxMSwgODQsIDE0NSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOmxpbmUtdGhyb3VnaDtcXG59XFxuLnN1bmtUZXh0IHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLyogRW5kIEdhbWUgTW9kYWwgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuI2VuZEdhbWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcbiNlbmRHYW1lU3RhdHVzIHtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG59XFxuLnJlc3RhcnRHYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMzglKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLnJlc3RhcnRHYW1lOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wb3N0TW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAubGVmdEJvYXJkLCAucmlnaHRCb2FyZCB7XFxuICAgICAgICBtYXJnaW46IDIwcHg7XFxuICAgIH1cXG4gICAgI2dhbWVCb2FyZFJvdyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBzaGlwVGVtcGxhdGUgPSBbXG4gICAge2xlbmd0aDogNSwgbmFtZTogJ0NhcnJpZXInfSxcbiAgICB7bGVuZ3RoOiA0LCBuYW1lOiAnQmF0dGxlc2hpcCd9LFxuICAgIHtsZW5ndGg6IDMsIG5hbWU6ICdEZXN0cm95ZXInfSxcbiAgICB7bGVuZ3RoOiAzLCBuYW1lOiAnU3VibWFyaW5lJ30sXG4gICAge2xlbmd0aDogMiwgbmFtZTogJ1BhdHJvbCBCb2F0J31cbiAgXTtcblxuZXhwb3J0IGNvbnN0IHVzZXJDb25zdGFudHMgPSB7XG4gICAgbmFtZTogXCJGcmllbmRseSBTZWFzXCIsXG4gICAgYm9hcmRDbGFzczogXCJsZWZ0Qm9hcmRcIixcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVyQ29uc3RhbnRzID0ge1xuICAgIG5hbWU6IFwiRW5lbXkgU2Vhc1wiLFxuICAgIGJvYXJkQ2xhc3M6IFwicmlnaHRCb2FyZFwiLFxufSIsImltcG9ydCB7IGdldEFsbFNxdWFyZXMgfSBmcm9tIFwiLi4vRE9NL2RvbV9oZWxwZXJzXCI7XG5pbXBvcnQgeyBmb2N1c0JvYXJkLCByZW5kZXJCb2FyZCwgcmVuZGVyQm9hcmRTdGF0dXMsIHJlbmRlckJvYXJkWFksIHJlbmRlckVuZGdhbWVNc2csIHJlbmRlck1vZGFsLCByZW5kZXJTaGlwc1N0YXR1cywgdXBkYXRlU2hpcHNTdW5rIH0gZnJvbSBcIi4uL0RPTS9yZW5kZXJET01cIjtcbmltcG9ydCB7IGFkZENsaWNrQXR0YWNrRUwsIGFkZENsaWNrUmVzdGFydEVMLCBhZGRIb3ZlckNyb3NzaGFpckVMLCByZW1vdmVBbGxBdHRhY2tFTCB9IGZyb20gXCIuLi9VSS9nYW1lUGxheV9VSVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kSW50IH0gZnJvbSBcIi4uL1V0aWxpdGllcy9oZWxwZXJfZnVuY1wiO1xuaW1wb3J0IHsgY29tcHV0ZXIsIHVzZXIgfSBmcm9tIFwiLi9zZXR1cF9jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBsZXQgYmxvY2tVc2VySW5wdXQ7XG5cbmZ1bmN0aW9uIF9lbmRHYW1lKHdpbm5lcikge1xuICAgIFxuICAgIGxldCBlbmRNc2cgPSAod2lubmVyID09PSB1c2VyKSA/ICBcIllvdSBXaW4hIEdvb2Qgam9iIHNpbmtpbmcgYWxsIHlvdXIgb3Bwb25lbnRzIHNoaXBzIPCfmIBcIiA6IFwiQWxsIHlvdXIgc2hpcHMgd2VyZSBzdW5rLiBZb3UgbG9zdCDwn5mBXCI7XG5cbiAgICBnZXRBbGxTcXVhcmVzKGNvbXB1dGVyLmJvYXJkQ2xhc3MpLmZvckVhY2goKHNxKSA9PiByZW1vdmVBbGxBdHRhY2tFTChzcSkpO1xuICAgIHJlbmRlckJvYXJkKHVzZXIuYm9hcmQsIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICAgIHJlbmRlckJvYXJkKGNvbXB1dGVyLmJvYXJkLCBjb21wdXRlci5ib2FyZENsYXNzLCBmYWxzZSk7XG4gICAgdXBkYXRlU2hpcHNTdW5rKCk7XG4gICAgcmVuZGVyTW9kYWwoZW5kTXNnKTtcblxuICAgIGFkZENsaWNrUmVzdGFydEVMKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VyVHVybih4LCB5KSB7XG4gICAgYmxvY2tVc2VySW5wdXQgPSB0cnVlO1xuICAgIFxuICAgIHVzZXIucGxheWVyLnNlbmRBdHRhY2soeCwgeSwgY29tcHV0ZXIuYm9hcmQpO1xuICAgIHJlbmRlckJvYXJkWFkoY29tcHV0ZXIuYm9hcmQsIHgsIHksIGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcbiAgICByZW5kZXJCb2FyZFN0YXR1cyhjb21wdXRlci5ib2FyZENsYXNzLCBgYCwgJ2JvbGQnKTtcbiAgICB1cGRhdGVTaGlwc1N1bmsoY29tcHV0ZXIuYm9hcmQuZ2V0U2hpcCh4LCB5KSwgY29tcHV0ZXIpO1xuXG4gICAgaWYgKGNvbXB1dGVyLmJvYXJkLmFsbFN1bmsoKSkgcmV0dXJuIF9lbmRHYW1lKHVzZXIpO1xuICAgIFxuICAgIGZvY3VzQm9hcmQodXNlci5ib2FyZENsYXNzKTtcbiAgICByZW5kZXJCb2FyZFN0YXR1cyh1c2VyLmJvYXJkQ2xhc3MsIGBUaGlua2luZy4uLmAsIFwiYm9sZFwiKTtcbiAgICBcbiAgICBzZXRUaW1lb3V0KGNvbXBUdXJuLCAwKTsgLy8gY2hhbmdlIHRvIDUwMCAtIDIwMDBtcyBsYXRlciAoIE1hdGgubWF4KDUwMCwgZ2VuZXJhdGVSYW5kSW50KDIwMDApKSkgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcFR1cm4oKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gY29tcHV0ZXIucGxheWVyLnNlbmRTbWFydEF0dGFjayh1c2VyLmJvYXJkKTtcbiAgICByZW5kZXJCb2FyZFhZKHVzZXIuYm9hcmQsIHRhcmdldFswXSwgdGFyZ2V0WzFdLCB1c2VyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcbiAgICByZW5kZXJCb2FyZFN0YXR1cyh1c2VyLmJvYXJkQ2xhc3MsIGBgLCBcImJvbGRcIik7XG4gICAgdXBkYXRlU2hpcHNTdW5rKHVzZXIuYm9hcmQuZ2V0U2hpcCh0YXJnZXRbMF0sIHRhcmdldFsxXSksIHVzZXIpO1xuXG4gICAgaWYgKHVzZXIuYm9hcmQuYWxsU3VuaygpKSByZXR1cm4gX2VuZEdhbWUoY29tcHV0ZXIpO1xuXG4gICAgZm9jdXNCb2FyZChjb21wdXRlci5ib2FyZENsYXNzKTtcbiAgICByZW5kZXJCb2FyZFN0YXR1cyhjb21wdXRlci5ib2FyZENsYXNzLCBgUGxhY2UgeW91ciBhdHRhY2shYCwgJ2JvbGQnKTtcbiAgICBcbiAgICBibG9ja1VzZXJJbnB1dCA9IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGJsb2NrVXNlcklucHV0ID0gZmFsc2U7XG4gICAgZm9jdXNCb2FyZChjb21wdXRlci5ib2FyZENsYXNzKTtcbiAgICBcbiAgICBhZGRIb3ZlckNyb3NzaGFpckVMKCk7XG4gICAgYWRkQ2xpY2tBdHRhY2tFTCgpO1xuXG4gICAgcmVuZGVyQm9hcmQodXNlci5ib2FyZCwgdXNlci5ib2FyZENsYXNzLCBmYWxzZSk7XG4gICAgcmVuZGVyQm9hcmQoY29tcHV0ZXIuYm9hcmQsIGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcblxuICAgIHJlbmRlclNoaXBzU3RhdHVzKCk7XG4gICAgcmVuZGVyQm9hcmRTdGF0dXModXNlci5ib2FyZENsYXNzLCBgYCwgJ2JvbGQnKTtcbiAgICByZW5kZXJCb2FyZFN0YXR1cyhjb21wdXRlci5ib2FyZENsYXNzLCBgUGxhY2UgeW91ciBhdHRhY2shYCwgJ2JvbGQnKTtcbn0iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuLi9GYWN0b3J5L0dhbWVib2FyZC5qc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vRmFjdG9yeS9QbGF5ZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuLi9GYWN0b3J5L1NoaXBcIjtcbmltcG9ydCB7IHNoaXBUZW1wbGF0ZSwgdXNlckNvbnN0YW50cywgY29tcHV0ZXJDb25zdGFudHMgfSBmcm9tICcuLi9Db25zdGFudHMnO1xuaW1wb3J0IHsgcmVuZGVyR3JpZCwgcmVuZGVyQm9hcmRUaXRsZSwgcmVuZGVyQm9hcmRTdGF0dXMsIGZvY3VzQm9hcmQsIHNldHVwU2hpcHNTdW5rLCByZW5kZXJNb2RhbCB9IGZyb20gJy4uL0RPTS9yZW5kZXJET00nO1xuaW1wb3J0IHsgYWRkQ2xpY2tSZXN0YXJ0RUwgfSBmcm9tIFwiLi4vVUkvZ2FtZVBsYXlfVUkuanNcIjtcblxuZXhwb3J0IGxldCB1c2VyLCBjb21wdXRlcjtcblxuZnVuY3Rpb24gX2dlbmVyYXRlU2hpcHMoc2hpcEluZm8pIHtcbiAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcblxuICAgIHNoaXBJbmZvLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICBzaGlwQXJyYXkucHVzaChTaGlwKHNoaXAubGVuZ3RoLCBzaGlwLm5hbWUpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwQXJyYXk7XG59XG5cbmZ1bmN0aW9uIF9zZXR1cEdhbWVPYmplY3RzKHBsYXllcjEsIHBsYXllcjIsIHNoaXBJbmZvKSB7XG4gICAgcGxheWVyMS5wbGF5ZXIgPSBQbGF5ZXIocGxheWVyMS5uYW1lKTtcbiAgICBwbGF5ZXIyLnBsYXllciA9IFBsYXllcihwbGF5ZXIyLm5hbWUpO1xuXG4gICAgcGxheWVyMS5ib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIHBsYXllcjIuYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICAgIHBsYXllcjEuc2hpcHMgPSBfZ2VuZXJhdGVTaGlwcyhzaGlwSW5mbyk7XG4gICAgcGxheWVyMi5zaGlwcyA9IF9nZW5lcmF0ZVNoaXBzKHNoaXBJbmZvKTtcbn1cblxuZnVuY3Rpb24gX3NldHVwRE9NKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICByZW5kZXJHcmlkKHBsYXllcjEuYm9hcmRDbGFzcyk7XG4gICAgcmVuZGVyR3JpZChwbGF5ZXIyLmJvYXJkQ2xhc3MpO1xuXG4gICAgcmVuZGVyQm9hcmRUaXRsZShwbGF5ZXIxLnBsYXllci5nZXROYW1lKCksIHBsYXllcjEuYm9hcmRDbGFzcyk7XG4gICAgcmVuZGVyQm9hcmRUaXRsZShwbGF5ZXIyLnBsYXllci5nZXROYW1lKCksIHBsYXllcjIuYm9hcmRDbGFzcyk7XG5cbiAgICByZW5kZXJCb2FyZFN0YXR1cyhwbGF5ZXIxLmJvYXJkQ2xhc3MsIFwiXCIsIFwiYm9sZFwiKTsgLy8gY2xlYXJzIGFueSBwcmV2aW91cyBib2FyZCBzdGF0dXNcbiAgICByZW5kZXJCb2FyZFN0YXR1cyhwbGF5ZXIyLmJvYXJkQ2xhc3MsIFwiXCIsIFwiYm9sZFwiKTtcblxuICAgIHNldHVwU2hpcHNTdW5rKCk7XG5cbiAgICBmb2N1c0JvYXJkKHBsYXllcjEuYm9hcmRDbGFzcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEdhbWUoKSB7XG5cbiAgICB1c2VyID0gT2JqZWN0LmFzc2lnbih7fSwgdXNlckNvbnN0YW50cyk7XG4gICAgY29tcHV0ZXIgPSBPYmplY3QuYXNzaWduKHt9LCBjb21wdXRlckNvbnN0YW50cyk7XG4gICAgXG4gICAgX3NldHVwR2FtZU9iamVjdHModXNlciwgY29tcHV0ZXIsIHNoaXBUZW1wbGF0ZSk7XG4gICAgX3NldHVwRE9NKHVzZXIsIGNvbXB1dGVyKTtcblxufSIsImltcG9ydCB7IHVzZXIsIGNvbXB1dGVyIH0gZnJvbSAnLi9zZXR1cF9jb250cm9sbGVyLmpzJztcbmltcG9ydCB7IHJlbmRlckJvYXJkU3RhdHVzIH0gZnJvbSAnLi4vRE9NL3JlbmRlckRPTS5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRCb29sLCBnZXRSYW5kb21JdGVtRnJvbUFycmF5IH0gZnJvbSAnLi4vVXRpbGl0aWVzL2hlbHBlcl9mdW5jLmpzJztcbmltcG9ydCB7IGFkZFJvdGF0ZVNoaXBFTCwgYWRkSG92ZXJTaGlwUGxhY2VFTCwgYWRkQ2xpY2tTaGlwUGxhY2VFTCB9IGZyb20gJy4uL1VJL3NoaXBQbGFjZW1lbnRfVUkuanMnO1xuXG5mdW5jdGlvbiBfcGxhY2VTaGlwc1JhbmRvbShwbGF5ZXIpIHtcbiAgICBwbGF5ZXIuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIFxuICAgICAgbGV0IGdlbl92ZXJ0ID0gZ2VuZXJhdGVSYW5kQm9vbCgpO1xuICAgICAgbGV0IHZhbGlkTG9jYXRpb25zID0gcGxheWVyLmJvYXJkLmdldFZhbGlkU2hpcFBsYWNlbWVudHMoc2hpcCwgcGxheWVyLmJvYXJkLCBnZW5fdmVydCk7XG4gICAgICBsZXQgW2dlbl94LCBnZW5feV0gPSBnZXRSYW5kb21JdGVtRnJvbUFycmF5KHZhbGlkTG9jYXRpb25zKTtcblxuICAgICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcChzaGlwLCBnZW5feCwgZ2VuX3ksIGdlbl92ZXJ0KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU2hpcHNNYW51YWwocGxheWVyKSB7XG4gICAgbGV0IGN1cnJlbnRTaGlwID0gcGxheWVyLnNoaXBzW3BsYXllci5zaGlwSW5kZXhdO1xuICAgIGxldCBjdXJyZW50Qm9hcmQgPSBwbGF5ZXIuYm9hcmQ7XG4gICAgbGV0IGN1cnJlbnRWZXJ0aWNhbCA9IHBsYXllci5zaGlwVmVydGljYWw7XG5cbiAgICBsZXQgdmFsaWRMb2NhdGlvbnMgPSBwbGF5ZXIuYm9hcmQuZ2V0VmFsaWRTaGlwUGxhY2VtZW50cyhjdXJyZW50U2hpcCwgY3VycmVudEJvYXJkLCBjdXJyZW50VmVydGljYWwpO1xuXG4gICAgYWRkUm90YXRlU2hpcEVMKCk7XG4gICAgYWRkSG92ZXJTaGlwUGxhY2VFTChwbGF5ZXIsIHZhbGlkTG9jYXRpb25zKTsgXG4gICAgYWRkQ2xpY2tTaGlwUGxhY2VFTChwbGF5ZXIsIHZhbGlkTG9jYXRpb25zKTtcblxuICAgIHJlbmRlckJvYXJkU3RhdHVzKFxuICAgICAgICBwbGF5ZXIuYm9hcmRDbGFzcywgXG4gICAgICAgIGBQbGFjZSAke2N1cnJlbnRTaGlwLmdldE5hbWUoKX1gLCBcbiAgICAgICAgXCJib2xkXCJcbiAgICApO1xuICAgIHJlbmRlckJvYXJkU3RhdHVzKFxuICAgICAgICBwbGF5ZXIuYm9hcmRDbGFzcyxcbiAgICAgICAgYChQcmVzcyBSIHRvIHJvdGF0ZSBzaGlwKWAsXG4gICAgICAgIFwicmVndWxhclwiLFxuICAgICAgICBmYWxzZVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWF0ZVNoaXBQbGFjZW1lbnQoKSB7XG4gICAgXG4gICAgdXNlci5zaGlwVmVydGljYWwgPSB0cnVlO1xuICAgIHVzZXIuc2hpcEluZGV4ID0gMDtcblxuICAgIF9wbGFjZVNoaXBzUmFuZG9tKGNvbXB1dGVyKTtcbiAgICBwbGFjZVNoaXBzTWFudWFsKHVzZXIpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRTcXVhcmVFbGVtZW50cyhhcnJheUxvY2F0aW9ucywgcGxheWVyKSB7XG4gICAgcmV0dXJuIGFycmF5TG9jYXRpb25zLm1hcChsb2MgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGxheWVyLmJvYXJkQ2xhc3N9JHtsb2NbMF19JHtsb2NbMV19YCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WFlmcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIFtOdW1iZXIoZWxlbWVudC5pZC5zbGljZSgtMiwgLTEpKSwgTnVtYmVyKGVsZW1lbnQuaWQuc2xpY2UoLTEpKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTaGlwKGFycmF5RWxlbWVudHMsIGV2ZW50KSB7XG4gICAgYXJyYXlFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZW50ZXInKSBlbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIGVsc2UgZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsU3F1YXJlcyhib2FyZENsYXNzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JvYXJkQ2xhc3N9IC5zcXVhcmVgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29tcHV0ZXIsIHVzZXIgfSBmcm9tIFwiLi4vQ29udHJvbC9zZXR1cF9jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBybVVwQ2FzZVdodFNwYWNlIH0gZnJvbSBcIi4uL1V0aWxpdGllcy9oZWxwZXJfZnVuY1wiO1xuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGRyZW4gfSBmcm9tIFwiLi9kb21faGVscGVyc1wiO1xuXG5mdW5jdGlvbiBfcmVuZGVyU3RhdGUoYm9hcmQsIHgsIHksIGxvY2F0aW9uSUQpIHtcbiAgY29uc3Qgc3RhdGUgPSBib2FyZC5nZXRTdGF0ZSh4LCB5KTtcbiAgaWYgKHN0YXRlICE9PSBcImJsYW5rXCIpIHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtsb2NhdGlvbklEfWApO1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKHN0YXRlKTtcbiAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBzdGF0ZSA9PT0gXCJoaXRcIiA/IFwiWFwiIDogXCJPXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3JlbmRlclNoaXBzKGJvYXJkLCB4LCB5LCBsb2NhdGlvbklEKSB7XG4gIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2xvY2F0aW9uSUR9YCk7XG4gIGlmIChib2FyZC5nZXRTaGlwKHgsIHkpICE9PSBudWxsKSBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gIGVsc2Ugc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTW9kYWwoZW5kTXNnKSB7XG4gIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBsZXQgbW9kYWxSZXN0YXJ0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnJlc3RhcnRHYW1lJyk7XG4gIGxldCBwb3N0TW9kYWxSZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RNb2RhbCAucmVzdGFydEdhbWUnKTtcblxuICBtb2RhbFJlc3RhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZEdhbWVTdGF0dXMnKS50ZXh0Q29udGVudCA9IGVuZE1zZztcbiAgXG4gIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBwb3N0TW9kYWxSZXN0YXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNb2RhbCgpIHtcbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJlc3RhcnRHYW1lKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGFydEdhbWUnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9jdXNCb2FyZChib2FyZFNpZGUpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxlZnRCb2FyZCwgLnJpZ2h0Qm9hcmQnKS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXJkSGlnaGxpZ2h0JykpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZFNpZGV9YCkuY2xhc3NMaXN0LmFkZCgnYm9hcmRIaWdobGlnaHQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdyaWQoYm9hcmRTaWRlKSB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmRTaWRlfSA+IC5ib2FyZGApO1xuICByZW1vdmVBbGxDaGlsZHJlbihib2FyZCk7XG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICAgIHNxdWFyZS5pZCA9IGJvYXJkU2lkZSArIGogKyBpO1xuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkVGl0bGUodGl0bGUsIGJvYXJkU2lkZSkge1xuICBjb25zdCBib2FyZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmRTaWRlfSA+IC5ib2FyZFRpdGxlYCk7XG4gIGJvYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkU3RhdHVzKFxuICBib2FyZFNpZGUsXG4gIHN0YXR1cyxcbiAgc3R5bGUsXG4gIGNsZWFyU3RhdHVzID0gdHJ1ZVxuKSB7XG4gIGNvbnN0IGJvYXJkU3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLiR7Ym9hcmRTaWRlfSA+IC5ib2FyZFN0YXR1c2BcbiAgKTtcblxuICBpZiAoY2xlYXJTdGF0dXMgPT09IHRydWUpIHJlbW92ZUFsbENoaWxkcmVuKGJvYXJkU3RhdHVzQ29udGFpbmVyKTtcblxuICBjb25zdCBib2FyZFN0YXR1c0RJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvYXJkU3RhdHVzRElWLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xuICBib2FyZFN0YXR1c0RJVi50ZXh0Q29udGVudCA9IHN0YXR1cztcblxuICBib2FyZFN0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZFN0YXR1c0RJVik7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTaGlwc1N1bmsoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdW5rVGV4dCwgLnNoaXBTdGF0dXMnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXBTdW5rJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwU3VuaycpO1xuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2hpcHNTdGF0dXMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwU3RhdHVzJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfSlcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTaGlwc1N1bmsoc2hpcCwgcGxheWVyKSB7XG4gIGlmIChzaGlwICYmIHNoaXAuaXNTdW5rKCkpIHtcbiAgICBjb25zdCBzaGlwU2VsZWN0b3IgPSBgLiR7cGxheWVyLmJvYXJkQ2xhc3N9IC4ke3JtVXBDYXNlV2h0U3BhY2Uoc2hpcC5nZXROYW1lKCkpfWA7XG4gICAgY29uc3Qgc2hpcFNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNoaXBTZWxlY3Rvcik7XG4gICAgc2hpcFNwYW4uY2xhc3NMaXN0LmFkZCgnc2hpcFN1bmsnKTtcblxuICAgIHNoaXBTcGFuLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgIHJlbmRlckJvYXJkU3RhdHVzKHBsYXllci5ib2FyZENsYXNzLCBgJHtzaGlwLmdldE5hbWUoKX0gd2FzIHN1bmshYCwgXCJib2xkXCIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZFhZKGJvYXJkLCB4LCB5LCBib2FyZFNpZGUsIGhpZGVTaGlwcykge1xuICBjb25zdCBsb2NhdGlvbklEID0gYm9hcmRTaWRlICsgeCArIHk7XG4gIGlmIChoaWRlU2hpcHMgPT09IGZhbHNlKSBfcmVuZGVyU2hpcHMoYm9hcmQsIHgsIHksIGxvY2F0aW9uSUQpO1xuICBfcmVuZGVyU3RhdGUoYm9hcmQsIHgsIHksIGxvY2F0aW9uSUQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9hcmQoYm9hcmQsIGJvYXJkU2lkZSwgaGlkZVNoaXBzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgcmVuZGVyQm9hcmRYWShib2FyZCwgaiwgaSwgYm9hcmRTaWRlLCBoaWRlU2hpcHMpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tSXRlbUZyb21BcnJheSB9IGZyb20gXCIuLi9VdGlsaXRpZXMvaGVscGVyX2Z1bmNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCBfc2l6ZSA9IDEwO1xuICBjb25zdCBfYm9hcmQgPSBbLi4uQXJyYXkoX3NpemUpXS5tYXAoKCkgPT4gQXJyYXkoX3NpemUpKTtcbiAgY29uc3QgX3NoaXBzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc2l6ZTsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBfc2l6ZTsgaiArPSAxKSB7XG4gICAgICBfYm9hcmRbaV1bal0gPSB7XG4gICAgICAgIHNoaXA6IG51bGwsIFxuICAgICAgICBzdGF0ZTogJ2JsYW5rJyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Nvb3JkSXNXaXRoaW5Cb2FyZCh4LCB5KSB7XG4gICAgcmV0dXJuICh4ID49IDAgJiYgeCA8IF9zaXplKSAmJiAoeSA+PSAwICYmIHkgPCBfc2l6ZSk7XG4gIH0gXG5cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoeCwgeSkge1xuICAgIHJldHVybiBfYm9hcmRbeF1beV0uc3RhdGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTaGlwKHgsIHkpIHtcbiAgICByZXR1cm4gX2JvYXJkW3hdW3ldLnNoaXA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBdmFpbGFibGVUYXJnZXRzKCkge1xuICAgICAgbGV0IHRhcmdldHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3NpemU7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IF9zaXplOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAoZ2V0U3RhdGUoaSwgaikgPT09ICdibGFuaycpIHRhcmdldHMucHVzaChbaSwgal0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFF0eVN1bmsoKSB7XG4gICAgcmV0dXJuIF9zaGlwcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgKyAoY3Vyci5pc1N1bmsoKSA/IDEgOiAwKSwgMCk7XG4gIH1cblxuICBmdW5jdGlvbiBhbGxTdW5rKCkge1xuICAgIGlmIChfc2hpcHMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gX3NoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29vcmRzIChzaGlwTGVuZ3RoLCB4LCB5LCBpc1ZlcnRpY2FsKSB7XG4gICAgY29uc3QgYXJyYXlDb29yZHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuZXdYID0geCArIChpc1ZlcnRpY2FsID09PSBmYWxzZSA/IGkgOiAwKTtcbiAgICAgIGNvbnN0IG5ld1kgPSB5ICsgKGlzVmVydGljYWwgPT09IHRydWUgPyBpIDogMCk7XG4gICAgICBhcnJheUNvb3Jkcy5wdXNoKFtuZXdYLCBuZXdZXSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheUNvb3JkczsgXG4gIH1cblxuICBmdW5jdGlvbiBpc1ZhbGlkUGxhY2VtZW50KHNoaXBMZW5ndGgsIHgsIHksIGlzVmVydGljYWwpIHtcblxuICAgIHJldHVybiBnZXRBcnJheUNvb3JkcyhzaGlwTGVuZ3RoLCB4LCB5LCBpc1ZlcnRpY2FsKS5ldmVyeSgoeHlDb29yZHMpID0+IFxuICAgICAgX2Nvb3JkSXNXaXRoaW5Cb2FyZCguLi54eUNvb3JkcykgJiYgZ2V0U2hpcCh4eUNvb3Jkc1swXSwgeHlDb29yZHNbMV0pID09PSBudWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZhbGlkU2hpcFBsYWNlbWVudHMoc2hpcCwgYm9hcmQsIGlzVmVydGljYWwpIHtcbiAgICBsZXQgdmFsaWRMb2NhdGlvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChpc1ZhbGlkUGxhY2VtZW50KHNoaXAuZ2V0TGVuZ3RoKCksIGosIGksIGlzVmVydGljYWwpKSB7XG4gICAgICAgICAgdmFsaWRMb2NhdGlvbnMucHVzaChbaiwgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkTG9jYXRpb25zO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIHgsIHksIGlzVmVydGljYWwpIHtcbiAgICBpZiAoaXNWYWxpZFBsYWNlbWVudChzaGlwLmdldExlbmd0aCgpLCB4LCB5LCBpc1ZlcnRpY2FsKSkge1xuXG4gICAgICBnZXRBcnJheUNvb3JkcyhzaGlwLmdldExlbmd0aCgpLCB4LCB5LCBpc1ZlcnRpY2FsKS5mb3JFYWNoKCh4eUNvb3JkcykgPT4gXG4gICAgICAgIF9ib2FyZFt4eUNvb3Jkc1swXV1beHlDb29yZHNbMV1dLnNoaXAgPSBzaGlwKTtcblxuICAgICAgX3NoaXBzLnB1c2goc2hpcCk7XG4gIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVmFsaWRBdHRhY2tMb2MoeCwgeSkge1xuICAgIHJldHVybiAoX2Nvb3JkSXNXaXRoaW5Cb2FyZCh4LCB5KSkgJiYgKGdldFN0YXRlKHgsIHkpID09PSAnYmxhbmsnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGlmICghaXNWYWxpZEF0dGFja0xvYyh4LCB5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGdldFNoaXAoeCwgeSkgIT09IG51bGwpIHtcbiAgICAgIGdldFNoaXAoeCwgeSkuaGl0KFt4LCB5XSk7XG4gICAgICBfYm9hcmRbeF1beV0uc3RhdGUgPSAnaGl0JztcbiAgICB9IGVsc2Uge1xuICAgICAgX2JvYXJkW3hdW3ldLnN0YXRlID0gJ21pc3MnO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJsYW5rTmVpZ2hib3JzKHgsIHkpIHtcbiAgICBsZXQgX3ZhbGlkQmxhbmtzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gLTE7IGkgPCAyOyBpICs9IDIpIHtcbiAgICAgIGxldCBuZXdYID0geCArIGk7XG4gICAgICBsZXQgbmV3WSA9IHk7XG4gICAgICBpZiAoaXNWYWxpZEF0dGFja0xvYyhuZXdYLCBuZXdZKSkgX3ZhbGlkQmxhbmtzLnB1c2goW25ld1gsIG5ld1ldKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gLTE7IGkgPCAyOyBpICs9IDIpIHtcbiAgICAgIGxldCBuZXdYID0geDtcbiAgICAgIGxldCBuZXdZID0geSArIGk7XG4gICAgICBpZiAoaXNWYWxpZEF0dGFja0xvYyhuZXdYLCBuZXdZKSkgX3ZhbGlkQmxhbmtzLnB1c2goW25ld1gsIG5ld1ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3ZhbGlkQmxhbmtzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tQmxhbmtOZWlnaGJvcihsb2MpIHtcbiAgICBsZXQgYmxhbmtOZWlnaGJvcnMgPSBnZXRCbGFua05laWdoYm9ycyhsb2NbMF0sIGxvY1sxXSk7XG4gICAgaWYgKGJsYW5rTmVpZ2hib3JzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBnZXRSYW5kb21JdGVtRnJvbUFycmF5KGdldEJsYW5rTmVpZ2hib3JzKGxvY1swXSwgbG9jWzFdKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFN0YXRlLCBnZXRTaGlwLCBnZXRBdmFpbGFibGVUYXJnZXRzLCBnZXRRdHlTdW5rLCBhbGxTdW5rLCBnZXRBcnJheUNvb3JkcywgaXNWYWxpZFBsYWNlbWVudCwgZ2V0VmFsaWRTaGlwUGxhY2VtZW50cywgcGxhY2VTaGlwLCBpc1ZhbGlkQXR0YWNrTG9jLCByZWNlaXZlQXR0YWNrLCBnZXRCbGFua05laWdoYm9ycywgZ2V0UmFuZG9tQmxhbmtOZWlnaGJvclxuICB9O1xufVxuIiwiaW1wb3J0IHsgZ2V0TmV4dEF0dGFja0xvYywgZ2V0UmFuZG9tSXRlbUZyb21BcnJheSwgYXJyYXlFcXVhbHMsIHJlbW92ZUFycmZyb21OZXN0ZWRBcnIgfSBmcm9tIFwiLi4vVXRpbGl0aWVzL2hlbHBlcl9mdW5jXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XG4gIGxldCBfbmFtZSA9IG5hbWU7XG4gIGxldCBfcHJldkF0dGFja0xvY2F0aW9uID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gX25hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBzZXROYW1lKG5hbWUpIHtcbiAgICBfbmFtZSA9IG5hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBzZW5kQXR0YWNrKHgsIHksIGJvYXJkKSB7XG4gICAgcmV0dXJuIGJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMb25nZXN0QmxhbmtfWCh4LCB5LCBib2FyZCkge1xuICAgIGxldCBudW1CbGFua3MgPSAwO1xuICAgIHdoaWxlIChib2FyZC5pc1ZhbGlkQXR0YWNrTG9jKHggKyBudW1CbGFua3MsIHkpKSB7XG4gICAgICBudW1CbGFua3MrKztcbiAgICB9XG4gICAgcmV0dXJuIG51bUJsYW5rcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExvbmdlc3RCbGFua19ZKHgsIHksIGJvYXJkKSB7XG4gICAgbGV0IG51bUJsYW5rcyA9IDA7XG4gICAgd2hpbGUgKGJvYXJkLmlzVmFsaWRBdHRhY2tMb2MoeCwgeSArIG51bUJsYW5rcykpIHtcbiAgICAgIG51bUJsYW5rcysrO1xuICAgIH1cbiAgICByZXR1cm4gbnVtQmxhbmtzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TG9uZ2VzdEJsYW5rcyhib2FyZCkge1xuICAgIGxldCBsb25nZXN0QmxhbmtzID0gW107XG4gICAgbGV0IGN1cnJMb25nZXN0ID0gMDtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgbGVuWCA9IGdldExvbmdlc3RCbGFua19YKHgsIHksIGJvYXJkKTtcbiAgICAgICAgbGV0IGxlblkgPSBnZXRMb25nZXN0QmxhbmtfWSh4LCB5LCBib2FyZCk7XG5cbiAgICAgICAgaWYgKGxlblggPiBsZW5ZICYmIGxlblggPj0gY3Vyckxvbmdlc3QpIHtcbiAgICAgICAgICBpZiAobGVuWCA+IGN1cnJMb25nZXN0KSBsb25nZXN0QmxhbmtzID0gW107XG4gICAgICAgICAgbG9uZ2VzdEJsYW5rcy5wdXNoKFtNYXRoLmZsb29yKHggKyBsZW5YLzIpLCB5XSk7XG4gICAgICAgICAgY3Vyckxvbmdlc3QgPSBsZW5YO1xuICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmIChsZW5ZID4gbGVuWCAmJiBsZW5ZID49IGN1cnJMb25nZXN0KSB7XG4gICAgICAgICAgaWYgKGxlblkgPiBjdXJyTG9uZ2VzdCkgbG9uZ2VzdEJsYW5rcyA9IFtdO1xuICAgICAgICAgIGxvbmdlc3RCbGFua3MucHVzaChbeCwgTWF0aC5mbG9vcih5ICsgbGVuWS8yKV0pO1xuICAgICAgICAgIGN1cnJMb25nZXN0ID0gbGVuWTtcbiAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAobGVuWSA9PT0gbGVuWCAmJiBsZW5YID49IGN1cnJMb25nZXN0KSB7XG4gICAgICAgICAgaWYgKGxlblggPiBjdXJyTG9uZ2VzdCkgbG9uZ2VzdEJsYW5rcyA9IFtdO1xuICAgICAgICAgIGxvbmdlc3RCbGFua3MucHVzaChbTWF0aC5mbG9vcih4ICsgbGVuWC8yKSwgeV0pO1xuICAgICAgICAgIGxvbmdlc3RCbGFua3MucHVzaChbeCwgTWF0aC5mbG9vcih5ICsgbGVuWS8yKV0pO1xuICAgICAgICAgIGN1cnJMb25nZXN0ID0gbGVuWDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsb25nZXN0QmxhbmtzO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VuZEF0dGFja19CaW5hcnlTZWFyY2goYm9hcmQpIHtcbiAgICBsZXQgbG9uZ2VzdEJsYW5rcyA9IGdldExvbmdlc3RCbGFua3MoYm9hcmQpO1xuICAgIGxldCBbbmV4dFgsIG5leHRZXSA9IGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkobG9uZ2VzdEJsYW5rcyk7XG4gICAgY29uc3QgaXNWYWxpZEF0dGFjayA9IHNlbmRBdHRhY2sobmV4dFgsIG5leHRZLCBib2FyZCk7XG4gICAgXG4gICAgcmV0dXJuIFtpc1ZhbGlkQXR0YWNrLCBbbmV4dFgsIG5leHRZXV07XG4gIH1cblxuICBmdW5jdGlvbiBzZW5kUmFuZG9tQXR0YWNrKGJvYXJkKSB7XG4gICAgY29uc3QgdGFyZ2V0TG9jYXRpb24gPSBnZXRSYW5kb21JdGVtRnJvbUFycmF5KGJvYXJkLmdldEF2YWlsYWJsZVRhcmdldHMoKSk7XG4gICAgY29uc3QgaXNWYWxpZEF0dGFjayA9IHNlbmRBdHRhY2sodGFyZ2V0TG9jYXRpb25bMF0sIHRhcmdldExvY2F0aW9uWzFdLCBib2FyZCk7XG5cbiAgICByZXR1cm4gW2lzVmFsaWRBdHRhY2ssIHRhcmdldExvY2F0aW9uXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF91cGRhdGVQcmV2QXR0YWNrQXJyKHgsIHksIGJvYXJkKSB7XG4gICAgbGV0IGN1cnJTaGlwID0gYm9hcmQuZ2V0U2hpcCh4LCB5KTtcblxuICAgIGlmIChib2FyZC5nZXRTdGF0ZSh4LCB5KSA9PT0gJ2hpdCcpIF9wcmV2QXR0YWNrTG9jYXRpb24ucHVzaChbeCwgeV0pOyBcblxuICAgIGlmIChjdXJyU2hpcCAmJiBjdXJyU2hpcC5pc1N1bmsoKSkge1xuICAgICAgX3ByZXZBdHRhY2tMb2NhdGlvbiA9IHJlbW92ZUFycmZyb21OZXN0ZWRBcnIoX3ByZXZBdHRhY2tMb2NhdGlvbiwgY3VyclNoaXAuZ2V0SGl0TG9jYXRpb25zKCkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXROZXh0QXR0YWNrTG9jKFtbeDEsIHkxXSwgW3gyLCB5Ml1dKSB7XG4gICAgbGV0IG5leHRYID0geDEgPT09IHgyID8geDEgOiB4MiArIE1hdGguc2lnbih4MiAtIHgxKTtcbiAgICBsZXQgbmV4dFkgPSB5MSA9PT0geTIgPyB5MSA6IHkyICsgTWF0aC5zaWduKHkyIC0geTEpO1xuXG4gICAgcmV0dXJuIFtuZXh0WCwgbmV4dFldO1xuICB9XG5cbiAgZnVuY3Rpb24gX2F0dGFja05leHRWYWxpZExvYyhib2FyZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3ByZXZBdHRhY2tMb2NhdGlvbi5sZW5ndGg7IGkrKykge1xuXG4gICAgICBsZXQgbG9jID0gX3ByZXZBdHRhY2tMb2NhdGlvbltpXTtcblxuICAgICAgaWYgKGJvYXJkLmdldFJhbmRvbUJsYW5rTmVpZ2hib3IobG9jKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBbbmV4dFgsIG5leHRZXSA9IGJvYXJkLmdldFJhbmRvbUJsYW5rTmVpZ2hib3IobG9jKTtcbiAgICAgICAgc2VuZEF0dGFjayhuZXh0WCwgbmV4dFksIGJvYXJkKTtcblxuICAgICAgICBpZiAoYm9hcmQuZ2V0U3RhdGUobmV4dFgsIG5leHRZKSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICBfcHJldkF0dGFja0xvY2F0aW9uLnB1c2gobG9jKTtcbiAgICAgICAgICBfcHJldkF0dGFja0xvY2F0aW9uLnB1c2goW25leHRYLCBuZXh0WV0pO1xuICAgICAgICAgIF9wcmV2QXR0YWNrTG9jYXRpb24uc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbbmV4dFgsIG5leHRZXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZW5kU21hcnRBdHRhY2soYm9hcmQpIHtcblxuICAgIGxldCBuZXh0WCwgbmV4dFk7XG4gXG4gICAgaWYgKF9wcmV2QXR0YWNrTG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBbLFtuZXh0WCwgbmV4dFldXSA9IHNlbmRBdHRhY2tfQmluYXJ5U2VhcmNoKGJvYXJkKTtcbiAgICAgIFxuICAgIH0gZWxzZSBpZiAoX3ByZXZBdHRhY2tMb2NhdGlvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIFtuZXh0WCwgbmV4dFldID0gYm9hcmQuZ2V0UmFuZG9tQmxhbmtOZWlnaGJvcihfcHJldkF0dGFja0xvY2F0aW9uWzBdKTtcbiAgICAgIHNlbmRBdHRhY2sobmV4dFgsIG5leHRZLCBib2FyZCk7XG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgW25leHRYLCBuZXh0WV0gPSBfZ2V0TmV4dEF0dGFja0xvYyhfcHJldkF0dGFja0xvY2F0aW9uLnNsaWNlKC0yKSk7XG5cbiAgICAgIGlmICghYm9hcmQuaXNWYWxpZEF0dGFja0xvYyhuZXh0WCwgbmV4dFkpKSB7XG4gICAgICAgIFtuZXh0WCwgbmV4dFldID0gX2dldE5leHRBdHRhY2tMb2MoX3ByZXZBdHRhY2tMb2NhdGlvbi5zbGljZSgwLCAyKS5yZXZlcnNlKCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWJvYXJkLmlzVmFsaWRBdHRhY2tMb2MobmV4dFgsIG5leHRZKSkgcmV0dXJuIF9hdHRhY2tOZXh0VmFsaWRMb2MoYm9hcmQpO1xuXG4gICAgICBzZW5kQXR0YWNrKG5leHRYLCBuZXh0WSwgYm9hcmQpO1xuICAgIH1cbiAgICBfdXBkYXRlUHJldkF0dGFja0FycihuZXh0WCwgbmV4dFksIGJvYXJkKTtcbiAgICByZXR1cm4gW25leHRYLCBuZXh0WV07XG4gIH1cblxuICByZXR1cm4geyBnZXROYW1lLCBzZXROYW1lLCBzZW5kUmFuZG9tQXR0YWNrLCBzZW5kQXR0YWNrLCBnZXRMb25nZXN0QmxhbmtfWCwgZ2V0TG9uZ2VzdEJsYW5rX1ksIHNlbmRTbWFydEF0dGFjayB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChsZW5ndGgsIG5hbWUpIHtcbiAgaWYgKGxlbmd0aCA8PSAwIHx8IGxlbmd0aCA+IDEwKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkxlbmd0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwIGFuZCBsZXNzIHRoYW4gMTFcIik7XG5cbiAgY29uc3QgX2hpdExvY2F0aW9uID0gW107XG5cbiAgZnVuY3Rpb24gaGl0KGxvY2F0aW9uKSB7XG4gICAgX2hpdExvY2F0aW9uLnB1c2gobG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TmFtZSgpIHsgXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRIaXRMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIF9oaXRMb2NhdGlvbjtcbiAgfVxuICBcbiAgZnVuY3Rpb24gc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgbmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldExlbmd0aChudW0pIHtcbiAgICBsZW5ndGggPSBudW07XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIF9oaXRMb2NhdGlvbi5sZW5ndGggPT09IGxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB7IGhpdCwgZ2V0TmFtZSwgc2V0TmFtZSwgZ2V0TGVuZ3RoLCBzZXRMZW5ndGgsIGlzU3VuaywgZ2V0SGl0TG9jYXRpb25zIH07XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlciwgc2V0dXBHYW1lIH0gZnJvbSBcIi4uL0NvbnRyb2wvc2V0dXBfY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgZ2V0QWxsU3F1YXJlcywgZ2V0WFlmcm9tRWxlbWVudCwgcmVtb3ZlQWxsQ2hpbGRyZW4gfSBmcm9tIFwiLi4vRE9NL2RvbV9oZWxwZXJzLmpzXCI7XG5pbXBvcnQgY3Jvc3NoYWlyIGZyb20gXCIuLi8uLi9pbWFnZXMvQ3Jvc3NoYWlyc19SZWQuc3ZnXCI7XG5pbXBvcnQgeyB1c2VyVHVybiwgYmxvY2tVc2VySW5wdXQgfSBmcm9tIFwiLi4vQ29udHJvbC9nYW1lUGxheV9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyBpbml0aWF0ZVNoaXBQbGFjZW1lbnQgfSBmcm9tIFwiLi4vQ29udHJvbC9zaGlwUGxhY2VtZW50X2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IHJlbW92ZU1vZGFsLCByZW1vdmVSZXN0YXJ0R2FtZSB9IGZyb20gXCIuLi9ET00vcmVuZGVyRE9NLmpzXCI7XG5cbmZ1bmN0aW9uIF9sb2FkQ3Jvc3NoYWlyKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHRhcmdldEljb24uc3JjID0gY3Jvc3NoYWlyO1xuICAgIHRhcmdldEljb24uY2xhc3NMaXN0LmFkZChcImNyb3NzaGFpclwiKTtcbiAgICBldmVudC50YXJnZXQuYXBwZW5kQ2hpbGQodGFyZ2V0SWNvbik7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVDcm9zc2hhaXIoZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQucmVtb3ZlQ2hpbGQoZXZlbnQudGFyZ2V0LmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQXR0YWNrRUwoc3F1YXJlKSB7XG4gICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfbG9hZENyb3NzaGFpcik7XG4gICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfcmVtb3ZlQ3Jvc3NoYWlyKTtcbiAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlQXR0YWNrKTtcbn1cblxuZnVuY3Rpb24gX2hhbmRsZUF0dGFjayhldmVudCkge1xuICAgIGlmIChibG9ja1VzZXJJbnB1dCkgcmV0dXJuO1xuXG4gICAgbGV0IHNxdWFyZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc3F1YXJlJyk7XG4gICAgcmVtb3ZlQWxsQXR0YWNrRUwoc3F1YXJlKTtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihzcXVhcmUpO1xuXG4gICAgdXNlclR1cm4oLi4uZ2V0WFlmcm9tRWxlbWVudChzcXVhcmUpKTtcbn1cblxuZnVuY3Rpb24gX3Jlc3RhcnRHYW1lKGV2ZW50KSB7XG4gICAgcmVtb3ZlTW9kYWwoKTtcbiAgICByZW1vdmVSZXN0YXJ0R2FtZSgpO1xuICAgIHNldHVwR2FtZSgpO1xuICAgIGluaXRpYXRlU2hpcFBsYWNlbWVudCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG92ZXJDcm9zc2hhaXJFTCgpIHtcbiAgICBnZXRBbGxTcXVhcmVzKGNvbXB1dGVyLmJvYXJkQ2xhc3MpLmZvckVhY2goKHNxKSA9PiB7XG4gICAgICAgIHNxLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfbG9hZENyb3NzaGFpcik7XG4gICAgICAgIHNxLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfcmVtb3ZlQ3Jvc3NoYWlyKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xpY2tBdHRhY2tFTCgpIHtcbiAgICBnZXRBbGxTcXVhcmVzKGNvbXB1dGVyLmJvYXJkQ2xhc3MpLmZvckVhY2goKHNxKSA9PiB7XG4gICAgICAgIHNxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2hhbmRsZUF0dGFjayk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsaWNrUmVzdGFydEVMKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXJ0R2FtZScpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3Jlc3RhcnRHYW1lKTtcbiAgICB9KVxufSIsImltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi4vQ29udHJvbC9zZXR1cF9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyBnZXRTcXVhcmVFbGVtZW50cywgZ2V0WFlmcm9tRWxlbWVudCwgdG9nZ2xlU2hpcCB9IGZyb20gXCIuLi9ET00vZG9tX2hlbHBlcnMuanNcIjtcbmltcG9ydCB7IHBsYWNlU2hpcHNNYW51YWwgfSBmcm9tIFwiLi4vQ29udHJvbC9zaGlwUGxhY2VtZW50X2NvbnRyb2xsZXIuanNcIlxuaW1wb3J0IHsgcmVuZGVyQm9hcmQgfSBmcm9tIFwiLi4vRE9NL3JlbmRlckRPTS5qc1wiO1xuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSBcIi4uL0NvbnRyb2wvZ2FtZVBsYXlfY29udHJvbGxlci5qc1wiO1xuXG5sZXQgY3VyckVsZW1lbnRzRUw7XG5cbmZ1bmN0aW9uIF9yZW1vdmVBbGxTaGlwUGxhY2VtZW50RUwoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgX2hhbmRsZVJvdGF0ZSk7XG5cbiAgICBjdXJyRWxlbWVudHNFTC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX2hhbmRsZUhvdmVyKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9oYW5kbGVIb3Zlcik7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2hhbmRsZUNsaWNrKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2hhbmRsZVJvdGF0ZShldmVudCkge1xuICAgIGlmIChldmVudC5jb2RlID09PSBcIktleVJcIikge1xuICAgICAgdXNlci5zaGlwVmVydGljYWwgPSAhdXNlci5zaGlwVmVydGljYWw7XG4gICAgICBfcmVtb3ZlQWxsU2hpcFBsYWNlbWVudEVMKCk7XG4gICAgICByZW5kZXJCb2FyZCh1c2VyLmJvYXJkLCB1c2VyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcbiAgICAgIHBsYWNlU2hpcHNNYW51YWwodXNlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfaGFuZGxlSG92ZXIoZXZlbnQpIHtcbiAgICBsZXQgW3gsIHldID0gZ2V0WFlmcm9tRWxlbWVudChldmVudC50YXJnZXQpO1xuICAgIGxldCBjdXJyZW50U2hpcCA9IHVzZXIuc2hpcHNbdXNlci5zaGlwSW5kZXhdO1xuICAgIGxldCBjdXJyZW50Qm9hcmQgPSB1c2VyLmJvYXJkO1xuICAgIGxldCBjdXJyZW50VmVydGljYWwgPSB1c2VyLnNoaXBWZXJ0aWNhbDtcblxuICAgIGxldCBhcnJheUNvb3JkcyA9IGN1cnJlbnRCb2FyZC5nZXRBcnJheUNvb3JkcyhjdXJyZW50U2hpcC5nZXRMZW5ndGgoKSwgeCwgeSwgY3VycmVudFZlcnRpY2FsKTtcbiAgICBsZXQgYXJyYXlDb29yZEVsZW1lbnRzID0gZ2V0U3F1YXJlRWxlbWVudHMoYXJyYXlDb29yZHMsIHVzZXIpO1xuICAgIHRvZ2dsZVNoaXAoYXJyYXlDb29yZEVsZW1lbnRzLCBldmVudCk7XG59XG5cbmZ1bmN0aW9uIF9oYW5kbGVDbGljayhldmVudCkge1xuICAgIGxldCBbeCwgeV0gPSBnZXRYWWZyb21FbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgbGV0IGN1cnJlbnRTaGlwID0gdXNlci5zaGlwc1t1c2VyLnNoaXBJbmRleF07XG4gICAgbGV0IGN1cnJlbnRCb2FyZCA9IHVzZXIuYm9hcmQ7XG4gICAgbGV0IGN1cnJlbnRWZXJ0aWNhbCA9IHVzZXIuc2hpcFZlcnRpY2FsO1xuXG4gICAgY3VycmVudEJvYXJkLnBsYWNlU2hpcChjdXJyZW50U2hpcCwgeCwgeSwgY3VycmVudFZlcnRpY2FsKTtcbiAgICBfcmVtb3ZlQWxsU2hpcFBsYWNlbWVudEVMKCk7XG4gICAgcmVuZGVyQm9hcmQoY3VycmVudEJvYXJkLCB1c2VyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcbiAgICB1c2VyLnNoaXBJbmRleCArPSAxO1xuXG4gICAgaWYgKHVzZXIuc2hpcHNbdXNlci5zaGlwSW5kZXhdICE9PSB1bmRlZmluZWQpIHBsYWNlU2hpcHNNYW51YWwodXNlcik7XG4gICAgZWxzZSBzdGFydEdhbWUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJvdGF0ZVNoaXBFTCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBfaGFuZGxlUm90YXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhvdmVyU2hpcFBsYWNlRUwocGxheWVyLCB2YWxpZExvY2F0aW9ucykge1xuICAgIGxldCB2YWxpZExvY0VsZW1lbnRzID0gZ2V0U3F1YXJlRWxlbWVudHModmFsaWRMb2NhdGlvbnMsIHBsYXllcik7XG4gICAgY3VyckVsZW1lbnRzRUwgPSB2YWxpZExvY0VsZW1lbnRzO1xuXG4gICAgdmFsaWRMb2NFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIF9oYW5kbGVIb3Zlcik7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgX2hhbmRsZUhvdmVyKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsaWNrU2hpcFBsYWNlRUwocGxheWVyLCB2YWxpZExvY2F0aW9ucykge1xuICAgIGxldCB2YWxpZExvY0VsZW1lbnRzID0gZ2V0U3F1YXJlRWxlbWVudHModmFsaWRMb2NhdGlvbnMsIHBsYXllcik7XG5cbiAgICB2YWxpZExvY0VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2hhbmRsZUNsaWNrKTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRJbnQodXBwZXJCb3VuZCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB1cHBlckJvdW5kKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZEJvb2woKSB7XG4gICAgcmV0dXJuIFt0cnVlLCBmYWxzZV1bZ2VuZXJhdGVSYW5kSW50KDIpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkoYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXlbZ2VuZXJhdGVSYW5kSW50KGFycmF5Lmxlbmd0aCldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpICYmXG4gICAgICBBcnJheS5pc0FycmF5KGIpICYmXG4gICAgICBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiZcbiAgICAgIGEuZXZlcnkoKHZhbCwgaW5kZXgpID0+IHZhbCA9PT0gYltpbmRleF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQXJyZnJvbU5lc3RlZEFycihuZXN0ZWQsIHRvUmVtb3ZlKSB7XG4gICAgcmV0dXJuIG5lc3RlZC5maWx0ZXIoaXRlbTEgPT4gXG4gICAgICAgIHRvUmVtb3ZlLmV2ZXJ5KGl0ZW0yID0+IFxuICAgICAgICAgICAgIWFycmF5RXF1YWxzKGl0ZW0xLCBpdGVtMikpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJtVXBDYXNlV2h0U3BhY2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykuam9pbignJyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNldHVwR2FtZSB9IGZyb20gJy4vTW9kdWxlcy9Db250cm9sL3NldHVwX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgaW5pdGlhdGVTaGlwUGxhY2VtZW50IH0gZnJvbSAnLi9Nb2R1bGVzL0NvbnRyb2wvc2hpcFBsYWNlbWVudF9jb250cm9sbGVyJztcblxuc2V0dXBHYW1lKCk7XG5pbml0aWF0ZVNoaXBQbGFjZW1lbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==