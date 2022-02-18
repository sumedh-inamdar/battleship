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

  }

  function getLongestBlanks(board) {
    let longestBlanks = [];
    let currLongest = 0;
    let currLength = 0;
    let start, end;

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        if (board.getState(x, y) === 'blank') {
          
        }
      }
    }
  }

  function sendAttack_BinarySearch(board) {
    // find longest segment of 'blank' spaces and add to array
    // discard any segments shorter than longest
    let longestBlanks = getLongestBlanks(board); //array of midpoints
    
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
      [,[nextX, nextY]] = sendRandomAttack(board);
      
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

  return { getName, setName, sendRandomAttack, sendAttack, sendSmartAttack };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysa0hBQWtILGtCQUFrQjtBQUNwSSw0SEFBNEg7QUFDNUg7QUFDQSxnREFBZ0QsNkJBQTZCLHVCQUF1Qiw2Q0FBNkMsbUJBQW1CLEdBQUcsYUFBYSx5QkFBeUIsc0JBQXNCLEdBQUcsNkJBQTZCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsdUJBQXVCLEdBQUcsaUJBQWlCLHNCQUFzQix5QkFBeUIsR0FBRyxVQUFVLG9CQUFvQiwwQ0FBMEMsNkNBQTZDLGVBQWUsd0JBQXdCLDBCQUEwQix1QkFBdUIseUJBQXlCLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsOEJBQThCLHlCQUF5QixtQkFBbUIsc0JBQXNCLEdBQUcsU0FBUyx1QkFBdUIsR0FBRyxZQUFZLHVCQUF1QixHQUFHLHFCQUFxQix1Q0FBdUMsMkJBQTJCLEdBQUcsbUJBQW1CLG9CQUFvQiw4QkFBOEIsR0FBRyw2QkFBNkIsb0JBQW9CLDBCQUEwQiw4QkFBOEIseUJBQXlCLHNCQUFzQixrQkFBa0IsbUJBQW1CLHdCQUF3Qix5QkFBeUIsOEJBQThCLEdBQUcsaUJBQWlCLHVCQUF1QixrQkFBa0IsaUJBQWlCLEdBQUcsU0FBUyx5Q0FBeUMsR0FBRyxRQUFRLDhCQUE4QiwwQkFBMEIsSUFBSSxTQUFTLG1CQUFtQixHQUFHLHlDQUF5Qyx1QkFBdUIsc0JBQXNCLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyxhQUFhLHlCQUF5QixLQUFLLGFBQWEsOEJBQThCLHdDQUF3QyxHQUFHLGFBQWEsaUJBQWlCLHVCQUF1QixHQUFHLGtDQUFrQyxvQkFBb0Isc0JBQXNCLGlCQUFpQixjQUFjLGFBQWEsa0JBQWtCLG1CQUFtQixxQkFBcUIsMkNBQTJDLEdBQUcsdUJBQXVCLG9CQUFvQiwyQ0FBMkMsbUJBQW1CLG9CQUFvQiw2QkFBNkIsaUJBQWlCLDZCQUE2QiwwQkFBMEIsU0FBUyxrQkFBa0IsdUJBQXVCLEdBQUcsZ0JBQWdCLDJCQUEyQixxQkFBcUIsd0JBQXdCLDhCQUE4QiwwQkFBMEIsd0NBQXdDLHFEQUFxRCxHQUFHLHNCQUFzQixzQkFBc0IsdUJBQXVCLHFEQUFxRCxHQUFHLFdBQVcsMkJBQTJCLG9CQUFvQixHQUFHLGNBQWMsb0JBQW9CLDhCQUE4QixHQUFHLGtDQUFrQywrQkFBK0IsdUJBQXVCLE9BQU8scUJBQXFCLGlDQUFpQyw4QkFBOEIsT0FBTyxHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxrR0FBa0csbUJBQW1CLHNGQUFzRixVQUFVLDZCQUE2Qix1QkFBdUIsNkNBQTZDLG1CQUFtQixHQUFHLGFBQWEseUJBQXlCLHNCQUFzQixHQUFHLDZCQUE2QixvQkFBb0IsNkJBQTZCLG1CQUFtQixvQkFBb0IsMEJBQTBCLHVCQUF1QixHQUFHLGlCQUFpQixzQkFBc0IseUJBQXlCLEdBQUcsVUFBVSxvQkFBb0IsMENBQTBDLDZDQUE2QyxlQUFlLHdCQUF3QiwwQkFBMEIsdUJBQXVCLHlCQUF5QixHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLDhCQUE4Qix5QkFBeUIsbUJBQW1CLHNCQUFzQixHQUFHLFNBQVMsdUJBQXVCLEdBQUcsWUFBWSx1QkFBdUIsR0FBRyxxQkFBcUIsdUNBQXVDLDJCQUEyQixHQUFHLG1CQUFtQixvQkFBb0IsOEJBQThCLEdBQUcsNkJBQTZCLG9CQUFvQiwwQkFBMEIsOEJBQThCLHlCQUF5QixzQkFBc0Isa0JBQWtCLG1CQUFtQix3QkFBd0IseUJBQXlCLDhCQUE4QixHQUFHLGlCQUFpQix1QkFBdUIsa0JBQWtCLGlCQUFpQixHQUFHLFNBQVMseUNBQXlDLEdBQUcsUUFBUSw4QkFBOEIsMEJBQTBCLElBQUksU0FBUyxtQkFBbUIsR0FBRyx5Q0FBeUMsdUJBQXVCLHNCQUFzQixHQUFHLGNBQWMsc0JBQXNCLEdBQUcsYUFBYSx5QkFBeUIsS0FBSyxhQUFhLDhCQUE4Qix3Q0FBd0MsR0FBRyxhQUFhLGlCQUFpQix1QkFBdUIsR0FBRyxrQ0FBa0Msb0JBQW9CLHNCQUFzQixpQkFBaUIsY0FBYyxhQUFhLGtCQUFrQixtQkFBbUIscUJBQXFCLDJDQUEyQyxHQUFHLHVCQUF1QixvQkFBb0IsMkNBQTJDLG1CQUFtQixvQkFBb0IsNkJBQTZCLGlCQUFpQiw2QkFBNkIsMEJBQTBCLFNBQVMsa0JBQWtCLHVCQUF1QixHQUFHLGdCQUFnQiwyQkFBMkIscUJBQXFCLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLHdDQUF3QyxxREFBcUQsR0FBRyxzQkFBc0Isc0JBQXNCLHVCQUF1QixxREFBcUQsR0FBRyxXQUFXLDJCQUEyQixvQkFBb0IsR0FBRyxjQUFjLG9CQUFvQiw4QkFBOEIsR0FBRyxrQ0FBa0MsK0JBQStCLHVCQUF1QixPQUFPLHFCQUFxQixpQ0FBaUMsOEJBQThCLE9BQU8sR0FBRyxtQkFBbUI7QUFDdnVQO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmTztBQUNQLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssOEJBQThCO0FBQ25DLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCbUQ7QUFDNkc7QUFDaEQ7QUFDckQ7QUFDUDs7QUFFN0M7O0FBRVA7QUFDQTtBQUNBLDZCQUE2QixtREFBSTs7QUFFakMsSUFBSSwrREFBYSxDQUFDLGtFQUFtQixrQkFBa0Isa0VBQWlCO0FBQ3hFLElBQUksMkRBQVcsQ0FBQyx5REFBVSxFQUFFLDhEQUFlO0FBQzNDLElBQUksMkRBQVcsQ0FBQyw2REFBYyxFQUFFLGtFQUFtQjtBQUNuRCxJQUFJLCtEQUFlO0FBQ25CLElBQUksMkRBQVc7O0FBRWYsSUFBSSxrRUFBaUI7QUFDckI7O0FBRU87QUFDUDtBQUNBO0FBQ0EsSUFBSSxxRUFBc0IsT0FBTyw2REFBYztBQUMvQyxJQUFJLDZEQUFhLENBQUMsNkRBQWMsUUFBUSxrRUFBbUI7QUFDM0QsSUFBSSxpRUFBaUIsQ0FBQyxrRUFBbUI7QUFDekMsSUFBSSwrREFBZSxDQUFDLHFFQUFzQixRQUFRLHVEQUFROztBQUUxRCxRQUFRLHFFQUFzQixvQkFBb0IsbURBQUk7QUFDdEQ7QUFDQSxJQUFJLDBEQUFVLENBQUMsOERBQWU7QUFDOUIsSUFBSSxpRUFBaUIsQ0FBQyw4REFBZTtBQUNyQztBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFTztBQUNQLG1CQUFtQiw4RUFBK0IsQ0FBQyx5REFBVTtBQUM3RCxJQUFJLDZEQUFhLENBQUMseURBQVUsd0JBQXdCLDhEQUFlO0FBQ25FLElBQUksaUVBQWlCLENBQUMsOERBQWU7QUFDckMsSUFBSSwrREFBZSxDQUFDLGlFQUFrQix3QkFBd0IsbURBQUk7O0FBRWxFLFFBQVEsaUVBQWtCLG9CQUFvQix1REFBUTs7QUFFdEQsSUFBSSwwREFBVSxDQUFDLGtFQUFtQjtBQUNsQyxJQUFJLGlFQUFpQixDQUFDLGtFQUFtQjtBQUN6QztBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLElBQUksMERBQVUsQ0FBQyxrRUFBbUI7QUFDbEM7QUFDQSxJQUFJLG9FQUFtQjtBQUN2QixJQUFJLGlFQUFnQjs7QUFFcEIsSUFBSSwyREFBVyxDQUFDLHlEQUFVLEVBQUUsOERBQWU7QUFDM0MsSUFBSSwyREFBVyxDQUFDLDZEQUFjLEVBQUUsa0VBQW1COztBQUVuRCxJQUFJLGlFQUFpQjtBQUNyQixJQUFJLGlFQUFpQixDQUFDLDhEQUFlO0FBQ3JDLElBQUksaUVBQWlCLENBQUMsa0VBQW1CO0FBQ3pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVnRDtBQUNUO0FBQ0o7QUFDMkM7QUFDOEM7QUFDbkU7O0FBRWxEOztBQUVQO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIseURBQUk7QUFDekIsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDJEQUFNO0FBQzNCLHFCQUFxQiwyREFBTTs7QUFFM0Isb0JBQW9CLGlFQUFTO0FBQzdCLG9CQUFvQixpRUFBUzs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSwwREFBVTtBQUNkLElBQUksMERBQVU7O0FBRWQsSUFBSSxnRUFBZ0I7QUFDcEIsSUFBSSxnRUFBZ0I7O0FBRXBCLElBQUksaUVBQWlCLGtDQUFrQztBQUN2RCxJQUFJLGlFQUFpQjs7QUFFckIsSUFBSSw4REFBYzs7QUFFbEIsSUFBSSwwREFBVTtBQUNkOztBQUVPOztBQUVQLDJCQUEyQixFQUFFLHFEQUFhO0FBQzFDLCtCQUErQixFQUFFLHlEQUFpQjtBQUNsRDtBQUNBLHNDQUFzQyxvREFBWTtBQUNsRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEdUQ7QUFDQztBQUMrQjtBQUNlOztBQUV0RztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkVBQWdCO0FBQ3JDO0FBQ0EsMkJBQTJCLGlGQUFzQjs7QUFFakQ7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSx3RUFBZTtBQUNuQixJQUFJLDRFQUFtQjtBQUN2QixJQUFJLDRFQUFtQjs7QUFFdkIsSUFBSSxvRUFBaUI7QUFDckI7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQSxJQUFJLG9FQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLElBQUksbUVBQWlCO0FBQ3JCLElBQUksZ0VBQWM7O0FBRWxCLHNCQUFzQiwwREFBUTtBQUM5QixxQkFBcUIsc0RBQUk7QUFDekI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DTztBQUNQLGdFQUFnRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsT0FBTztBQUNwRzs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUCx5Q0FBeUMsWUFBWTtBQUNyRDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI2RDtBQUNEO0FBQ1Y7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxXQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7O0FBRU87QUFDUCwyQ0FBMkMsV0FBVztBQUN0RCxFQUFFLCtEQUFpQjtBQUNuQjtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsZ0RBQWdELFdBQVc7QUFDM0Q7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVztBQUNuQjs7QUFFQSw0QkFBNEIsK0RBQWlCOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNPO0FBQ1A7QUFDQSw2QkFBNkIsbUJBQW1CLEdBQUcsd0VBQWdCLGlCQUFpQjtBQUNwRjtBQUNBOztBQUVBOztBQUVBLDRDQUE0QyxnQkFBZ0I7QUFDNUQ7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1Asa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSWtFOztBQUVuRDtBQUNmO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsV0FBVztBQUM3QixvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixXQUFXO0FBQ2pDLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4RUFBc0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SXlIOztBQUUxRztBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0EseUJBQXlCLDhFQUFzQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQiw4RUFBc0I7QUFDakQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCLDhFQUFzQjtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdDQUFnQzs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7OztBQ3RIZTtBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DcUU7QUFDc0I7QUFDbkM7QUFDcUI7QUFDRTtBQUNWOztBQUVyRTtBQUNBO0FBQ0EscUJBQXFCLHVEQUFTO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsMkVBQWM7O0FBRXRCO0FBQ0E7QUFDQSxJQUFJLHNFQUFpQjs7QUFFckIsSUFBSSx5RUFBUSxJQUFJLHFFQUFnQjtBQUNoQzs7QUFFQTtBQUNBLElBQUksOERBQVc7QUFDZixJQUFJLG9FQUFpQjtBQUNyQixJQUFJLHVFQUFTO0FBQ2IsSUFBSSwyRkFBcUI7QUFDekI7O0FBRU87QUFDUCxJQUFJLGtFQUFhLENBQUMsNkVBQW1CO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUCxJQUFJLGtFQUFhLENBQUMsNkVBQW1CO0FBQ3JDO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURzRDtBQUNrQztBQUNmO0FBQ3ZCO0FBQ1k7O0FBRTlEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLE1BQU0sMkVBQWlCLElBQUksMkVBQWlCO0FBQzVDO0FBQ0EsTUFBTSw4REFBVyxDQUFDLG9FQUFVLEVBQUUseUVBQWU7QUFDN0MsTUFBTSxzRkFBZ0IsQ0FBQyw4REFBSTtBQUMzQjtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHFFQUFnQjtBQUNqQyxzQkFBc0Isb0VBQVUsQ0FBQyx3RUFBYztBQUMvQyx1QkFBdUIsb0VBQVU7QUFDakMsMEJBQTBCLDJFQUFpQjs7QUFFM0M7QUFDQSw2QkFBNkIsc0VBQWlCLGNBQWMsOERBQUk7QUFDaEUsSUFBSSwrREFBVTtBQUNkOztBQUVBO0FBQ0EsaUJBQWlCLHFFQUFnQjtBQUNqQyxzQkFBc0Isb0VBQVUsQ0FBQyx3RUFBYztBQUMvQyx1QkFBdUIsb0VBQVU7QUFDakMsMEJBQTBCLDJFQUFpQjs7QUFFM0M7QUFDQTtBQUNBLElBQUksOERBQVcsZUFBZSx5RUFBZTtBQUM3QyxJQUFJLHdFQUFjOztBQUVsQixRQUFRLG9FQUFVLENBQUMsd0VBQWMsaUJBQWlCLHNGQUFnQixDQUFDLDhEQUFJO0FBQ3ZFLFNBQVMsMEVBQVM7QUFDbEI7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1AsMkJBQTJCLHNFQUFpQjtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUCwyQkFBMkIsc0VBQWlCOztBQUU1QztBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQzZDO0FBQ2lCOztBQUVuRiwrRUFBUztBQUNULGdHQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvQ29udHJvbC9nYW1lUGxheV9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9Db250cm9sL3NldHVwX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0NvbnRyb2wvc2hpcFBsYWNlbWVudF9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9ET00vZG9tX2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0RPTS9yZW5kZXJET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0ZhY3RvcnkvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9GYWN0b3J5L1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvRmFjdG9yeS9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9VSS9nYW1lUGxheV9VSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvVUkvc2hpcFBsYWNlbWVudF9VSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvVXRpbGl0aWVzL2hlbHBlcl9mdW5jLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TeW5jb3BhdGU6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0OndnaHRAODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODAxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXI+aDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLmxlZnRCb2FyZCwgLnJpZ2h0Qm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDI1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbi5ib2FyZFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbi5ib2FyZFN0YXR1cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uYm9sZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5yZWd1bGFyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmJvYXJkSGlnaGxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDM4JSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4jZ2FtZUJvYXJkUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIFNxdWFyZSAqL1xcblxcbi5zcXVhcmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEthbml0O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uc3F1YXJlID4gaW1nIHtcXG4gICAgY29sb3I6Ymx1ZXZpb2xldDtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCA4NCwgMTQ1KTtcXG59XFxuLmhpdCB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCA3NywgNzcpO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn0gXFxuLm1pc3Mge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi8qIFNoaXAgU3RhdHVzIC8gR3JpZCAqL1xcbi5zaGlwU3RhdHVzIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc2hpcFRpdGxlIHtcXG4gICAgbWFyZ2luOiA1cHggMHB4O1xcbn1cXG4uc2hpcE5hbWUge1xcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cXG59XFxuLnNoaXBTdW5rIHtcXG4gICAgY29sb3I6IHJnYigxMSwgODQsIDE0NSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOmxpbmUtdGhyb3VnaDtcXG59XFxuLnN1bmtUZXh0IHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLyogRW5kIEdhbWUgTW9kYWwgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuI2VuZEdhbWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcbiNlbmRHYW1lU3RhdHVzIHtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG59XFxuLnJlc3RhcnRHYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMzglKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLnJlc3RhcnRHYW1lOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wb3N0TW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAubGVmdEJvYXJkLCAucmlnaHRCb2FyZCB7XFxuICAgICAgICBtYXJnaW46IDIwcHg7XFxuICAgIH1cXG4gICAgI2dhbWVCb2FyZFJvdyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVN5bmNvcGF0ZTp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FuaXQ6d2dodEA4MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbmhlYWRlcj5oMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4ubGVmdEJvYXJkLCAucmlnaHRCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMjVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXG59XFxuXFxuLmJvYXJkVGl0bGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDFweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuLmJvYXJkU3RhdHVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnJlZ3VsYXIge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYm9hcmRIaWdobGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAwJSwgMzglKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbiNnYW1lQm9hcmRSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogU3F1YXJlICovXFxuXFxuLnNxdWFyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogS2FuaXQ7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5zcXVhcmUgPiBpbWcge1xcbiAgICBjb2xvcjpibHVldmlvbGV0O1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDg0LCAxNDUpO1xcbn1cXG4uaGl0IHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDc3LCA3Nyk7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufSBcXG4ubWlzcyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogU2hpcCBTdGF0dXMgLyBHcmlkICovXFxuLnNoaXBTdGF0dXMge1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5zaGlwVGl0bGUge1xcbiAgICBtYXJnaW46IDVweCAwcHg7XFxufVxcbi5zaGlwTmFtZSB7XFxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xcbn1cXG4uc2hpcFN1bmsge1xcbiAgICBjb2xvcjogcmdiKDExLCA4NCwgMTQ1KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6bGluZS10aHJvdWdoO1xcbn1cXG4uc3Vua1RleHQge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBFbmQgR2FtZSBNb2RhbCAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4jZW5kR2FtZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuI2VuZEdhbWVTdGF0dXMge1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG4ucmVzdGFydEdhbWUge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAzOCUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4ucmVzdGFydEdhbWU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnBvc3RNb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5sZWZ0Qm9hcmQsIC5yaWdodEJvYXJkIHtcXG4gICAgICAgIG1hcmdpbjogMjBweDtcXG4gICAgfVxcbiAgICAjZ2FtZUJvYXJkUm93IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IHNoaXBUZW1wbGF0ZSA9IFtcbiAgICB7bGVuZ3RoOiA1LCBuYW1lOiAnQ2Fycmllcid9LFxuICAgIHtsZW5ndGg6IDQsIG5hbWU6ICdCYXR0bGVzaGlwJ30sXG4gICAge2xlbmd0aDogMywgbmFtZTogJ0Rlc3Ryb3llcid9LFxuICAgIHtsZW5ndGg6IDMsIG5hbWU6ICdTdWJtYXJpbmUnfSxcbiAgICB7bGVuZ3RoOiAyLCBuYW1lOiAnUGF0cm9sIEJvYXQnfVxuICBdO1xuXG5leHBvcnQgY29uc3QgdXNlckNvbnN0YW50cyA9IHtcbiAgICBuYW1lOiBcIkZyaWVuZGx5IFNlYXNcIixcbiAgICBib2FyZENsYXNzOiBcImxlZnRCb2FyZFwiLFxufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZXJDb25zdGFudHMgPSB7XG4gICAgbmFtZTogXCJFbmVteSBTZWFzXCIsXG4gICAgYm9hcmRDbGFzczogXCJyaWdodEJvYXJkXCIsXG59IiwiaW1wb3J0IHsgZ2V0QWxsU3F1YXJlcyB9IGZyb20gXCIuLi9ET00vZG9tX2hlbHBlcnNcIjtcbmltcG9ydCB7IGZvY3VzQm9hcmQsIHJlbmRlckJvYXJkLCByZW5kZXJCb2FyZFN0YXR1cywgcmVuZGVyQm9hcmRYWSwgcmVuZGVyRW5kZ2FtZU1zZywgcmVuZGVyTW9kYWwsIHJlbmRlclNoaXBzU3RhdHVzLCB1cGRhdGVTaGlwc1N1bmsgfSBmcm9tIFwiLi4vRE9NL3JlbmRlckRPTVwiO1xuaW1wb3J0IHsgYWRkQ2xpY2tBdHRhY2tFTCwgYWRkQ2xpY2tSZXN0YXJ0RUwsIGFkZEhvdmVyQ3Jvc3NoYWlyRUwsIHJlbW92ZUFsbEF0dGFja0VMIH0gZnJvbSBcIi4uL1VJL2dhbWVQbGF5X1VJXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRJbnQgfSBmcm9tIFwiLi4vVXRpbGl0aWVzL2hlbHBlcl9mdW5jXCI7XG5pbXBvcnQgeyBjb21wdXRlciwgdXNlciB9IGZyb20gXCIuL3NldHVwX2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGxldCBibG9ja1VzZXJJbnB1dDtcblxuZnVuY3Rpb24gX2VuZEdhbWUod2lubmVyKSB7XG4gICAgXG4gICAgbGV0IGVuZE1zZyA9ICh3aW5uZXIgPT09IHVzZXIpID8gIFwiWW91IFdpbiEgR29vZCBqb2Igc2lua2luZyBhbGwgeW91ciBvcHBvbmVudHMgc2hpcHMg8J+YgFwiIDogXCJBbGwgeW91ciBzaGlwcyB3ZXJlIHN1bmsuIFlvdSBsb3N0IPCfmYFcIjtcblxuICAgIGdldEFsbFNxdWFyZXMoY29tcHV0ZXIuYm9hcmRDbGFzcykuZm9yRWFjaCgoc3EpID0+IHJlbW92ZUFsbEF0dGFja0VMKHNxKSk7XG4gICAgcmVuZGVyQm9hcmQodXNlci5ib2FyZCwgdXNlci5ib2FyZENsYXNzLCBmYWxzZSk7XG4gICAgcmVuZGVyQm9hcmQoY29tcHV0ZXIuYm9hcmQsIGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcbiAgICB1cGRhdGVTaGlwc1N1bmsoKTtcbiAgICByZW5kZXJNb2RhbChlbmRNc2cpO1xuXG4gICAgYWRkQ2xpY2tSZXN0YXJ0RUwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJUdXJuKHgsIHkpIHtcbiAgICBibG9ja1VzZXJJbnB1dCA9IHRydWU7XG4gICAgXG4gICAgdXNlci5wbGF5ZXIuc2VuZEF0dGFjayh4LCB5LCBjb21wdXRlci5ib2FyZCk7XG4gICAgcmVuZGVyQm9hcmRYWShjb21wdXRlci5ib2FyZCwgeCwgeSwgY29tcHV0ZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICAgIHJlbmRlckJvYXJkU3RhdHVzKGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGBgLCAnYm9sZCcpO1xuICAgIHVwZGF0ZVNoaXBzU3Vuayhjb21wdXRlci5ib2FyZC5nZXRTaGlwKHgsIHkpLCBjb21wdXRlcik7XG5cbiAgICBpZiAoY29tcHV0ZXIuYm9hcmQuYWxsU3VuaygpKSByZXR1cm4gX2VuZEdhbWUodXNlcik7XG4gICAgXG4gICAgZm9jdXNCb2FyZCh1c2VyLmJvYXJkQ2xhc3MpO1xuICAgIHJlbmRlckJvYXJkU3RhdHVzKHVzZXIuYm9hcmRDbGFzcywgYFRoaW5raW5nLi4uYCwgXCJib2xkXCIpO1xuICAgIFxuICAgIHNldFRpbWVvdXQoY29tcFR1cm4sIDApOyAvLyBjaGFuZ2UgdG8gNTAwIC0gMjAwMG1zIGxhdGVyICggTWF0aC5tYXgoNTAwLCBnZW5lcmF0ZVJhbmRJbnQoMjAwMCkpKSApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wVHVybigpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBjb21wdXRlci5wbGF5ZXIuc2VuZFNtYXJ0QXR0YWNrKHVzZXIuYm9hcmQpO1xuICAgIHJlbmRlckJvYXJkWFkodXNlci5ib2FyZCwgdGFyZ2V0WzBdLCB0YXJnZXRbMV0sIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICAgIHJlbmRlckJvYXJkU3RhdHVzKHVzZXIuYm9hcmRDbGFzcywgYGAsIFwiYm9sZFwiKTtcbiAgICB1cGRhdGVTaGlwc1N1bmsodXNlci5ib2FyZC5nZXRTaGlwKHRhcmdldFswXSwgdGFyZ2V0WzFdKSwgdXNlcik7XG5cbiAgICBpZiAodXNlci5ib2FyZC5hbGxTdW5rKCkpIHJldHVybiBfZW5kR2FtZShjb21wdXRlcik7XG5cbiAgICBmb2N1c0JvYXJkKGNvbXB1dGVyLmJvYXJkQ2xhc3MpO1xuICAgIHJlbmRlckJvYXJkU3RhdHVzKGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGBQbGFjZSB5b3VyIGF0dGFjayFgLCAnYm9sZCcpO1xuICAgIFxuICAgIGJsb2NrVXNlcklucHV0ID0gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgYmxvY2tVc2VySW5wdXQgPSBmYWxzZTtcbiAgICBmb2N1c0JvYXJkKGNvbXB1dGVyLmJvYXJkQ2xhc3MpO1xuICAgIFxuICAgIGFkZEhvdmVyQ3Jvc3NoYWlyRUwoKTtcbiAgICBhZGRDbGlja0F0dGFja0VMKCk7XG5cbiAgICByZW5kZXJCb2FyZCh1c2VyLmJvYXJkLCB1c2VyLmJvYXJkQ2xhc3MsIGZhbHNlKTtcbiAgICByZW5kZXJCb2FyZChjb21wdXRlci5ib2FyZCwgY29tcHV0ZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuXG4gICAgcmVuZGVyU2hpcHNTdGF0dXMoKTtcbiAgICByZW5kZXJCb2FyZFN0YXR1cyh1c2VyLmJvYXJkQ2xhc3MsIGBgLCAnYm9sZCcpO1xuICAgIHJlbmRlckJvYXJkU3RhdHVzKGNvbXB1dGVyLmJvYXJkQ2xhc3MsIGBQbGFjZSB5b3VyIGF0dGFjayFgLCAnYm9sZCcpO1xufSIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4uL0ZhY3RvcnkvR2FtZWJvYXJkLmpzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9GYWN0b3J5L1BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL0ZhY3RvcnkvU2hpcFwiO1xuaW1wb3J0IHsgc2hpcFRlbXBsYXRlLCB1c2VyQ29uc3RhbnRzLCBjb21wdXRlckNvbnN0YW50cyB9IGZyb20gJy4uL0NvbnN0YW50cyc7XG5pbXBvcnQgeyByZW5kZXJHcmlkLCByZW5kZXJCb2FyZFRpdGxlLCByZW5kZXJCb2FyZFN0YXR1cywgZm9jdXNCb2FyZCwgc2V0dXBTaGlwc1N1bmssIHJlbmRlck1vZGFsIH0gZnJvbSAnLi4vRE9NL3JlbmRlckRPTSc7XG5pbXBvcnQgeyBhZGRDbGlja1Jlc3RhcnRFTCB9IGZyb20gXCIuLi9VSS9nYW1lUGxheV9VSS5qc1wiO1xuXG5leHBvcnQgbGV0IHVzZXIsIGNvbXB1dGVyO1xuXG5mdW5jdGlvbiBfZ2VuZXJhdGVTaGlwcyhzaGlwSW5mbykge1xuICAgIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuXG4gICAgc2hpcEluZm8uZm9yRWFjaChzaGlwID0+IHtcbiAgICAgIHNoaXBBcnJheS5wdXNoKFNoaXAoc2hpcC5sZW5ndGgsIHNoaXAubmFtZSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBBcnJheTtcbn1cblxuZnVuY3Rpb24gX3NldHVwR2FtZU9iamVjdHMocGxheWVyMSwgcGxheWVyMiwgc2hpcEluZm8pIHtcbiAgICBwbGF5ZXIxLnBsYXllciA9IFBsYXllcihwbGF5ZXIxLm5hbWUpO1xuICAgIHBsYXllcjIucGxheWVyID0gUGxheWVyKHBsYXllcjIubmFtZSk7XG5cbiAgICBwbGF5ZXIxLmJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgcGxheWVyMi5ib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gICAgcGxheWVyMS5zaGlwcyA9IF9nZW5lcmF0ZVNoaXBzKHNoaXBJbmZvKTtcbiAgICBwbGF5ZXIyLnNoaXBzID0gX2dlbmVyYXRlU2hpcHMoc2hpcEluZm8pO1xufVxuXG5mdW5jdGlvbiBfc2V0dXBET00ocGxheWVyMSwgcGxheWVyMikge1xuICAgIHJlbmRlckdyaWQocGxheWVyMS5ib2FyZENsYXNzKTtcbiAgICByZW5kZXJHcmlkKHBsYXllcjIuYm9hcmRDbGFzcyk7XG5cbiAgICByZW5kZXJCb2FyZFRpdGxlKHBsYXllcjEucGxheWVyLmdldE5hbWUoKSwgcGxheWVyMS5ib2FyZENsYXNzKTtcbiAgICByZW5kZXJCb2FyZFRpdGxlKHBsYXllcjIucGxheWVyLmdldE5hbWUoKSwgcGxheWVyMi5ib2FyZENsYXNzKTtcblxuICAgIHJlbmRlckJvYXJkU3RhdHVzKHBsYXllcjEuYm9hcmRDbGFzcywgXCJcIiwgXCJib2xkXCIpOyAvLyBjbGVhcnMgYW55IHByZXZpb3VzIGJvYXJkIHN0YXR1c1xuICAgIHJlbmRlckJvYXJkU3RhdHVzKHBsYXllcjIuYm9hcmRDbGFzcywgXCJcIiwgXCJib2xkXCIpO1xuXG4gICAgc2V0dXBTaGlwc1N1bmsoKTtcblxuICAgIGZvY3VzQm9hcmQocGxheWVyMS5ib2FyZENsYXNzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwR2FtZSgpIHtcblxuICAgIHVzZXIgPSBPYmplY3QuYXNzaWduKHt9LCB1c2VyQ29uc3RhbnRzKTtcbiAgICBjb21wdXRlciA9IE9iamVjdC5hc3NpZ24oe30sIGNvbXB1dGVyQ29uc3RhbnRzKTtcbiAgICBcbiAgICBfc2V0dXBHYW1lT2JqZWN0cyh1c2VyLCBjb21wdXRlciwgc2hpcFRlbXBsYXRlKTtcbiAgICBfc2V0dXBET00odXNlciwgY29tcHV0ZXIpO1xuXG59IiwiaW1wb3J0IHsgdXNlciwgY29tcHV0ZXIgfSBmcm9tICcuL3NldHVwX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgcmVuZGVyQm9hcmRTdGF0dXMgfSBmcm9tICcuLi9ET00vcmVuZGVyRE9NLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlUmFuZEJvb2wsIGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkgfSBmcm9tICcuLi9VdGlsaXRpZXMvaGVscGVyX2Z1bmMuanMnO1xuaW1wb3J0IHsgYWRkUm90YXRlU2hpcEVMLCBhZGRIb3ZlclNoaXBQbGFjZUVMLCBhZGRDbGlja1NoaXBQbGFjZUVMIH0gZnJvbSAnLi4vVUkvc2hpcFBsYWNlbWVudF9VSS5qcyc7XG5cbmZ1bmN0aW9uIF9wbGFjZVNoaXBzUmFuZG9tKHBsYXllcikge1xuICAgIHBsYXllci5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgXG4gICAgICBsZXQgZ2VuX3ZlcnQgPSBnZW5lcmF0ZVJhbmRCb29sKCk7XG4gICAgICBsZXQgdmFsaWRMb2NhdGlvbnMgPSBwbGF5ZXIuYm9hcmQuZ2V0VmFsaWRTaGlwUGxhY2VtZW50cyhzaGlwLCBwbGF5ZXIuYm9hcmQsIGdlbl92ZXJ0KTtcbiAgICAgIGxldCBbZ2VuX3gsIGdlbl95XSA9IGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkodmFsaWRMb2NhdGlvbnMpO1xuXG4gICAgICBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHNoaXAsIGdlbl94LCBnZW5feSwgZ2VuX3ZlcnQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwc01hbnVhbChwbGF5ZXIpIHtcbiAgICBsZXQgY3VycmVudFNoaXAgPSBwbGF5ZXIuc2hpcHNbcGxheWVyLnNoaXBJbmRleF07XG4gICAgbGV0IGN1cnJlbnRCb2FyZCA9IHBsYXllci5ib2FyZDtcbiAgICBsZXQgY3VycmVudFZlcnRpY2FsID0gcGxheWVyLnNoaXBWZXJ0aWNhbDtcblxuICAgIGxldCB2YWxpZExvY2F0aW9ucyA9IHBsYXllci5ib2FyZC5nZXRWYWxpZFNoaXBQbGFjZW1lbnRzKGN1cnJlbnRTaGlwLCBjdXJyZW50Qm9hcmQsIGN1cnJlbnRWZXJ0aWNhbCk7XG5cbiAgICBhZGRSb3RhdGVTaGlwRUwoKTtcbiAgICBhZGRIb3ZlclNoaXBQbGFjZUVMKHBsYXllciwgdmFsaWRMb2NhdGlvbnMpOyBcbiAgICBhZGRDbGlja1NoaXBQbGFjZUVMKHBsYXllciwgdmFsaWRMb2NhdGlvbnMpO1xuXG4gICAgcmVuZGVyQm9hcmRTdGF0dXMoXG4gICAgICAgIHBsYXllci5ib2FyZENsYXNzLCBcbiAgICAgICAgYFBsYWNlICR7Y3VycmVudFNoaXAuZ2V0TmFtZSgpfWAsIFxuICAgICAgICBcImJvbGRcIlxuICAgICk7XG4gICAgcmVuZGVyQm9hcmRTdGF0dXMoXG4gICAgICAgIHBsYXllci5ib2FyZENsYXNzLFxuICAgICAgICBgKFByZXNzIFIgdG8gcm90YXRlIHNoaXApYCxcbiAgICAgICAgXCJyZWd1bGFyXCIsXG4gICAgICAgIGZhbHNlXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYXRlU2hpcFBsYWNlbWVudCgpIHtcbiAgICBcbiAgICB1c2VyLnNoaXBWZXJ0aWNhbCA9IHRydWU7XG4gICAgdXNlci5zaGlwSW5kZXggPSAwO1xuXG4gICAgX3BsYWNlU2hpcHNSYW5kb20oY29tcHV0ZXIpO1xuICAgIHBsYWNlU2hpcHNNYW51YWwodXNlcik7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFNxdWFyZUVsZW1lbnRzKGFycmF5TG9jYXRpb25zLCBwbGF5ZXIpIHtcbiAgICByZXR1cm4gYXJyYXlMb2NhdGlvbnMubWFwKGxvYyA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwbGF5ZXIuYm9hcmRDbGFzc30ke2xvY1swXX0ke2xvY1sxXX1gKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYWWZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gW051bWJlcihlbGVtZW50LmlkLnNsaWNlKC0yLCAtMSkpLCBOdW1iZXIoZWxlbWVudC5pZC5zbGljZSgtMSkpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNoaXAoYXJyYXlFbGVtZW50cywgZXZlbnQpIHtcbiAgICBhcnJheUVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2VlbnRlcicpIGVsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgZWxzZSBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxTcXVhcmVzKGJvYXJkQ2xhc3MpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Ym9hcmRDbGFzc30gLnNxdWFyZWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4ocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb21wdXRlciwgdXNlciB9IGZyb20gXCIuLi9Db250cm9sL3NldHVwX2NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHJtVXBDYXNlV2h0U3BhY2UgfSBmcm9tIFwiLi4vVXRpbGl0aWVzL2hlbHBlcl9mdW5jXCI7XG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZHJlbiB9IGZyb20gXCIuL2RvbV9oZWxwZXJzXCI7XG5cbmZ1bmN0aW9uIF9yZW5kZXJTdGF0ZShib2FyZCwgeCwgeSwgbG9jYXRpb25JRCkge1xuICBjb25zdCBzdGF0ZSA9IGJvYXJkLmdldFN0YXRlKHgsIHkpO1xuICBpZiAoc3RhdGUgIT09IFwiYmxhbmtcIikge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2xvY2F0aW9uSUR9YCk7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoc3RhdGUpO1xuICAgIHNxdWFyZS50ZXh0Q29udGVudCA9IHN0YXRlID09PSBcImhpdFwiID8gXCJYXCIgOiBcIk9cIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBfcmVuZGVyU2hpcHMoYm9hcmQsIHgsIHksIGxvY2F0aW9uSUQpIHtcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bG9jYXRpb25JRH1gKTtcbiAgaWYgKGJvYXJkLmdldFNoaXAoeCwgeSkgIT09IG51bGwpIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgZWxzZSBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNb2RhbChlbmRNc2cpIHtcbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIGxldCBtb2RhbFJlc3RhcnQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydEdhbWUnKTtcbiAgbGV0IHBvc3RNb2RhbFJlc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdE1vZGFsIC5yZXN0YXJ0R2FtZScpO1xuXG4gIG1vZGFsUmVzdGFydC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kR2FtZVN0YXR1cycpLnRleHRDb250ZW50ID0gZW5kTXNnO1xuICBcbiAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHBvc3RNb2RhbFJlc3RhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU1vZGFsKCkge1xuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUmVzdGFydEdhbWUoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXJ0R2FtZScpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c0JvYXJkKGJvYXJkU2lkZSkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVmdEJvYXJkLCAucmlnaHRCb2FyZCcpLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmRIaWdobGlnaHQnKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkU2lkZX1gKS5jbGFzc0xpc3QuYWRkKCdib2FyZEhpZ2hsaWdodCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR3JpZChib2FyZFNpZGUpIHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZFNpZGV9ID4gLmJvYXJkYCk7XG4gIHJlbW92ZUFsbENoaWxkcmVuKGJvYXJkKTtcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgc3F1YXJlLmlkID0gYm9hcmRTaWRlICsgaiArIGk7XG4gICAgICBib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9hcmRUaXRsZSh0aXRsZSwgYm9hcmRTaWRlKSB7XG4gIGNvbnN0IGJvYXJkVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZFNpZGV9ID4gLmJvYXJkVGl0bGVgKTtcbiAgYm9hcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9hcmRTdGF0dXMoXG4gIGJvYXJkU2lkZSxcbiAgc3RhdHVzLFxuICBzdHlsZSxcbiAgY2xlYXJTdGF0dXMgPSB0cnVlXG4pIHtcbiAgY29uc3QgYm9hcmRTdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuJHtib2FyZFNpZGV9ID4gLmJvYXJkU3RhdHVzYFxuICApO1xuXG4gIGlmIChjbGVhclN0YXR1cyA9PT0gdHJ1ZSkgcmVtb3ZlQWxsQ2hpbGRyZW4oYm9hcmRTdGF0dXNDb250YWluZXIpO1xuXG4gIGNvbnN0IGJvYXJkU3RhdHVzRElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9hcmRTdGF0dXNESVYuY2xhc3NMaXN0LmFkZChzdHlsZSk7XG4gIGJvYXJkU3RhdHVzRElWLnRleHRDb250ZW50ID0gc3RhdHVzO1xuXG4gIGJvYXJkU3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkU3RhdHVzRElWKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFNoaXBzU3VuaygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1bmtUZXh0LCAuc2hpcFN0YXR1cycpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcFN1bmsnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBTdW5rJyk7XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaGlwc1N0YXR1cygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXBTdGF0dXMnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNoaXBzU3VuayhzaGlwLCBwbGF5ZXIpIHtcbiAgaWYgKHNoaXAgJiYgc2hpcC5pc1N1bmsoKSkge1xuICAgIGNvbnN0IHNoaXBTZWxlY3RvciA9IGAuJHtwbGF5ZXIuYm9hcmRDbGFzc30gLiR7cm1VcENhc2VXaHRTcGFjZShzaGlwLmdldE5hbWUoKSl9YDtcbiAgICBjb25zdCBzaGlwU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2hpcFNlbGVjdG9yKTtcbiAgICBzaGlwU3Bhbi5jbGFzc0xpc3QuYWRkKCdzaGlwU3VuaycpO1xuXG4gICAgc2hpcFNwYW4ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgcmVuZGVyQm9hcmRTdGF0dXMocGxheWVyLmJvYXJkQ2xhc3MsIGAke3NoaXAuZ2V0TmFtZSgpfSB3YXMgc3VuayFgLCBcImJvbGRcIik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkWFkoYm9hcmQsIHgsIHksIGJvYXJkU2lkZSwgaGlkZVNoaXBzKSB7XG4gIGNvbnN0IGxvY2F0aW9uSUQgPSBib2FyZFNpZGUgKyB4ICsgeTtcbiAgaWYgKGhpZGVTaGlwcyA9PT0gZmFsc2UpIF9yZW5kZXJTaGlwcyhib2FyZCwgeCwgeSwgbG9jYXRpb25JRCk7XG4gIF9yZW5kZXJTdGF0ZShib2FyZCwgeCwgeSwgbG9jYXRpb25JRCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZChib2FyZCwgYm9hcmRTaWRlLCBoaWRlU2hpcHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICByZW5kZXJCb2FyZFhZKGJvYXJkLCBqLCBpLCBib2FyZFNpZGUsIGhpZGVTaGlwcyk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBnZXRSYW5kb21JdGVtRnJvbUFycmF5IH0gZnJvbSBcIi4uL1V0aWxpdGllcy9oZWxwZXJfZnVuY1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IF9zaXplID0gMTA7XG4gIGNvbnN0IF9ib2FyZCA9IFsuLi5BcnJheShfc2l6ZSldLm1hcCgoKSA9PiBBcnJheShfc2l6ZSkpO1xuICBjb25zdCBfc2hpcHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IF9zaXplOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IF9zaXplOyBqICs9IDEpIHtcbiAgICAgIF9ib2FyZFtpXVtqXSA9IHtcbiAgICAgICAgc2hpcDogbnVsbCwgXG4gICAgICAgIHN0YXRlOiAnYmxhbmsnLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY29vcmRJc1dpdGhpbkJvYXJkKHgsIHkpIHtcbiAgICByZXR1cm4gKHggPj0gMCAmJiB4IDwgX3NpemUpICYmICh5ID49IDAgJiYgeSA8IF9zaXplKTtcbiAgfSBcblxuICBmdW5jdGlvbiBnZXRTdGF0ZSh4LCB5KSB7XG4gICAgcmV0dXJuIF9ib2FyZFt4XVt5XS5zdGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNoaXAoeCwgeSkge1xuICAgIHJldHVybiBfYm9hcmRbeF1beV0uc2hpcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEF2YWlsYWJsZVRhcmdldHMoKSB7XG4gICAgICBsZXQgdGFyZ2V0cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc2l6ZTsgaSArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX3NpemU7IGogKz0gMSkge1xuICAgICAgICAgIGlmIChnZXRTdGF0ZShpLCBqKSA9PT0gJ2JsYW5rJykgdGFyZ2V0cy5wdXNoKFtpLCBqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXRzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UXR5U3VuaygpIHtcbiAgICByZXR1cm4gX3NoaXBzLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiArIChjdXJyLmlzU3VuaygpID8gMSA6IDApLCAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbFN1bmsoKSB7XG4gICAgaWYgKF9zaGlwcy5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBfc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb29yZHMgKHNoaXBMZW5ndGgsIHgsIHksIGlzVmVydGljYWwpIHtcbiAgICBjb25zdCBhcnJheUNvb3JkcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5ld1ggPSB4ICsgKGlzVmVydGljYWwgPT09IGZhbHNlID8gaSA6IDApO1xuICAgICAgY29uc3QgbmV3WSA9IHkgKyAoaXNWZXJ0aWNhbCA9PT0gdHJ1ZSA/IGkgOiAwKTtcbiAgICAgIGFycmF5Q29vcmRzLnB1c2goW25ld1gsIG5ld1ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5Q29vcmRzOyBcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVmFsaWRQbGFjZW1lbnQoc2hpcExlbmd0aCwgeCwgeSwgaXNWZXJ0aWNhbCkge1xuXG4gICAgcmV0dXJuIGdldEFycmF5Q29vcmRzKHNoaXBMZW5ndGgsIHgsIHksIGlzVmVydGljYWwpLmV2ZXJ5KCh4eUNvb3JkcykgPT4gXG4gICAgICBfY29vcmRJc1dpdGhpbkJvYXJkKC4uLnh5Q29vcmRzKSAmJiBnZXRTaGlwKHh5Q29vcmRzWzBdLCB4eUNvb3Jkc1sxXSkgPT09IG51bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFsaWRTaGlwUGxhY2VtZW50cyhzaGlwLCBib2FyZCwgaXNWZXJ0aWNhbCkge1xuICAgIGxldCB2YWxpZExvY2F0aW9ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGlzVmFsaWRQbGFjZW1lbnQoc2hpcC5nZXRMZW5ndGgoKSwgaiwgaSwgaXNWZXJ0aWNhbCkpIHtcbiAgICAgICAgICB2YWxpZExvY2F0aW9ucy5wdXNoKFtqLCBpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRMb2NhdGlvbnM7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgaXNWZXJ0aWNhbCkge1xuICAgIGlmIChpc1ZhbGlkUGxhY2VtZW50KHNoaXAuZ2V0TGVuZ3RoKCksIHgsIHksIGlzVmVydGljYWwpKSB7XG5cbiAgICAgIGdldEFycmF5Q29vcmRzKHNoaXAuZ2V0TGVuZ3RoKCksIHgsIHksIGlzVmVydGljYWwpLmZvckVhY2goKHh5Q29vcmRzKSA9PiBcbiAgICAgICAgX2JvYXJkW3h5Q29vcmRzWzBdXVt4eUNvb3Jkc1sxXV0uc2hpcCA9IHNoaXApO1xuXG4gICAgICBfc2hpcHMucHVzaChzaGlwKTtcbiAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNWYWxpZEF0dGFja0xvYyh4LCB5KSB7XG4gICAgcmV0dXJuIChfY29vcmRJc1dpdGhpbkJvYXJkKHgsIHkpKSAmJiAoZ2V0U3RhdGUoeCwgeSkgPT09ICdibGFuaycpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgaWYgKCFpc1ZhbGlkQXR0YWNrTG9jKHgsIHkpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoZ2V0U2hpcCh4LCB5KSAhPT0gbnVsbCkge1xuICAgICAgZ2V0U2hpcCh4LCB5KS5oaXQoW3gsIHldKTtcbiAgICAgIF9ib2FyZFt4XVt5XS5zdGF0ZSA9ICdoaXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBfYm9hcmRbeF1beV0uc3RhdGUgPSAnbWlzcyc7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QmxhbmtOZWlnaGJvcnMoeCwgeSkge1xuICAgIGxldCBfdmFsaWRCbGFua3MgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAtMTsgaSA8IDI7IGkgKz0gMikge1xuICAgICAgbGV0IG5ld1ggPSB4ICsgaTtcbiAgICAgIGxldCBuZXdZID0geTtcbiAgICAgIGlmIChpc1ZhbGlkQXR0YWNrTG9jKG5ld1gsIG5ld1kpKSBfdmFsaWRCbGFua3MucHVzaChbbmV3WCwgbmV3WV0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAtMTsgaSA8IDI7IGkgKz0gMikge1xuICAgICAgbGV0IG5ld1ggPSB4O1xuICAgICAgbGV0IG5ld1kgPSB5ICsgaTtcbiAgICAgIGlmIChpc1ZhbGlkQXR0YWNrTG9jKG5ld1gsIG5ld1kpKSBfdmFsaWRCbGFua3MucHVzaChbbmV3WCwgbmV3WV0pO1xuICAgIH1cblxuICAgIHJldHVybiBfdmFsaWRCbGFua3M7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSYW5kb21CbGFua05laWdoYm9yKGxvYykge1xuICAgIGxldCBibGFua05laWdoYm9ycyA9IGdldEJsYW5rTmVpZ2hib3JzKGxvY1swXSwgbG9jWzFdKTtcbiAgICBpZiAoYmxhbmtOZWlnaGJvcnMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkoZ2V0QmxhbmtOZWlnaGJvcnMobG9jWzBdLCBsb2NbMV0pKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0U3RhdGUsIGdldFNoaXAsIGdldEF2YWlsYWJsZVRhcmdldHMsIGdldFF0eVN1bmssIGFsbFN1bmssIGdldEFycmF5Q29vcmRzLCBpc1ZhbGlkUGxhY2VtZW50LCBnZXRWYWxpZFNoaXBQbGFjZW1lbnRzLCBwbGFjZVNoaXAsIGlzVmFsaWRBdHRhY2tMb2MsIHJlY2VpdmVBdHRhY2ssIGdldEJsYW5rTmVpZ2hib3JzLCBnZXRSYW5kb21CbGFua05laWdoYm9yXG4gIH07XG59XG4iLCJpbXBvcnQgeyBnZXROZXh0QXR0YWNrTG9jLCBnZXRSYW5kb21JdGVtRnJvbUFycmF5LCBhcnJheUVxdWFscywgcmVtb3ZlQXJyZnJvbU5lc3RlZEFyciB9IGZyb20gXCIuLi9VdGlsaXRpZXMvaGVscGVyX2Z1bmNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKG5hbWUpIHtcbiAgbGV0IF9uYW1lID0gbmFtZTtcbiAgbGV0IF9wcmV2QXR0YWNrTG9jYXRpb24gPSBbXTtcblxuICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgIHJldHVybiBfbmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldE5hbWUobmFtZSkge1xuICAgIF9uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRBdHRhY2soeCwgeSwgYm9hcmQpIHtcbiAgICByZXR1cm4gYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExvbmdlc3RCbGFua19YKHgsIHksIGJvYXJkKSB7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExvbmdlc3RCbGFua3MoYm9hcmQpIHtcbiAgICBsZXQgbG9uZ2VzdEJsYW5rcyA9IFtdO1xuICAgIGxldCBjdXJyTG9uZ2VzdCA9IDA7XG4gICAgbGV0IGN1cnJMZW5ndGggPSAwO1xuICAgIGxldCBzdGFydCwgZW5kO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgICAgaWYgKGJvYXJkLmdldFN0YXRlKHgsIHkpID09PSAnYmxhbmsnKSB7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZW5kQXR0YWNrX0JpbmFyeVNlYXJjaChib2FyZCkge1xuICAgIC8vIGZpbmQgbG9uZ2VzdCBzZWdtZW50IG9mICdibGFuaycgc3BhY2VzIGFuZCBhZGQgdG8gYXJyYXlcbiAgICAvLyBkaXNjYXJkIGFueSBzZWdtZW50cyBzaG9ydGVyIHRoYW4gbG9uZ2VzdFxuICAgIGxldCBsb25nZXN0QmxhbmtzID0gZ2V0TG9uZ2VzdEJsYW5rcyhib2FyZCk7IC8vYXJyYXkgb2YgbWlkcG9pbnRzXG4gICAgXG4gICAgbGV0IFtuZXh0WCwgbmV4dFldID0gZ2V0UmFuZG9tSXRlbUZyb21BcnJheShsb25nZXN0QmxhbmtzKTtcbiAgICBjb25zdCBpc1ZhbGlkQXR0YWNrID0gc2VuZEF0dGFjayhuZXh0WCwgbmV4dFksIGJvYXJkKTtcbiAgICByZXR1cm4gW2lzVmFsaWRBdHRhY2ssIFtuZXh0WCwgbmV4dFldXTtcbiAgICBcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRSYW5kb21BdHRhY2soYm9hcmQpIHtcbiAgICBjb25zdCB0YXJnZXRMb2NhdGlvbiA9IGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkoYm9hcmQuZ2V0QXZhaWxhYmxlVGFyZ2V0cygpKTtcbiAgICBjb25zdCBpc1ZhbGlkQXR0YWNrID0gc2VuZEF0dGFjayh0YXJnZXRMb2NhdGlvblswXSwgdGFyZ2V0TG9jYXRpb25bMV0sIGJvYXJkKTtcblxuICAgIHJldHVybiBbaXNWYWxpZEF0dGFjaywgdGFyZ2V0TG9jYXRpb25dO1xuICB9XG5cbiAgZnVuY3Rpb24gX3VwZGF0ZVByZXZBdHRhY2tBcnIoeCwgeSwgYm9hcmQpIHtcbiAgICBsZXQgY3VyclNoaXAgPSBib2FyZC5nZXRTaGlwKHgsIHkpO1xuXG4gICAgaWYgKGJvYXJkLmdldFN0YXRlKHgsIHkpID09PSAnaGl0JykgX3ByZXZBdHRhY2tMb2NhdGlvbi5wdXNoKFt4LCB5XSk7IFxuXG4gICAgaWYgKGN1cnJTaGlwICYmIGN1cnJTaGlwLmlzU3VuaygpKSB7XG4gICAgICBfcHJldkF0dGFja0xvY2F0aW9uID0gcmVtb3ZlQXJyZnJvbU5lc3RlZEFycihfcHJldkF0dGFja0xvY2F0aW9uLCBjdXJyU2hpcC5nZXRIaXRMb2NhdGlvbnMoKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2dldE5leHRBdHRhY2tMb2MoW1t4MSwgeTFdLCBbeDIsIHkyXV0pIHtcbiAgICBsZXQgbmV4dFggPSB4MSA9PT0geDIgPyB4MSA6IHgyICsgTWF0aC5zaWduKHgyIC0geDEpO1xuICAgIGxldCBuZXh0WSA9IHkxID09PSB5MiA/IHkxIDogeTIgKyBNYXRoLnNpZ24oeTIgLSB5MSk7XG5cbiAgICByZXR1cm4gW25leHRYLCBuZXh0WV07XG4gIH1cblxuICBmdW5jdGlvbiBfYXR0YWNrTmV4dFZhbGlkTG9jKGJvYXJkKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcHJldkF0dGFja0xvY2F0aW9uLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIGxldCBsb2MgPSBfcHJldkF0dGFja0xvY2F0aW9uW2ldO1xuXG4gICAgICBpZiAoYm9hcmQuZ2V0UmFuZG9tQmxhbmtOZWlnaGJvcihsb2MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IFtuZXh0WCwgbmV4dFldID0gYm9hcmQuZ2V0UmFuZG9tQmxhbmtOZWlnaGJvcihsb2MpO1xuICAgICAgICBzZW5kQXR0YWNrKG5leHRYLCBuZXh0WSwgYm9hcmQpO1xuXG4gICAgICAgIGlmIChib2FyZC5nZXRTdGF0ZShuZXh0WCwgbmV4dFkpID09PSAnaGl0Jykge1xuICAgICAgICAgIF9wcmV2QXR0YWNrTG9jYXRpb24ucHVzaChsb2MpO1xuICAgICAgICAgIF9wcmV2QXR0YWNrTG9jYXRpb24ucHVzaChbbmV4dFgsIG5leHRZXSk7XG4gICAgICAgICAgX3ByZXZBdHRhY2tMb2NhdGlvbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtuZXh0WCwgbmV4dFldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRTbWFydEF0dGFjayhib2FyZCkge1xuXG4gICAgbGV0IG5leHRYLCBuZXh0WTtcbiBcbiAgICBpZiAoX3ByZXZBdHRhY2tMb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIFssW25leHRYLCBuZXh0WV1dID0gc2VuZFJhbmRvbUF0dGFjayhib2FyZCk7XG4gICAgICBcbiAgICB9IGVsc2UgaWYgKF9wcmV2QXR0YWNrTG9jYXRpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICBbbmV4dFgsIG5leHRZXSA9IGJvYXJkLmdldFJhbmRvbUJsYW5rTmVpZ2hib3IoX3ByZXZBdHRhY2tMb2NhdGlvblswXSk7XG4gICAgICBzZW5kQXR0YWNrKG5leHRYLCBuZXh0WSwgYm9hcmQpO1xuICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIFtuZXh0WCwgbmV4dFldID0gX2dldE5leHRBdHRhY2tMb2MoX3ByZXZBdHRhY2tMb2NhdGlvbi5zbGljZSgtMikpO1xuXG4gICAgICBpZiAoIWJvYXJkLmlzVmFsaWRBdHRhY2tMb2MobmV4dFgsIG5leHRZKSkge1xuICAgICAgICBbbmV4dFgsIG5leHRZXSA9IF9nZXROZXh0QXR0YWNrTG9jKF9wcmV2QXR0YWNrTG9jYXRpb24uc2xpY2UoMCwgMikucmV2ZXJzZSgpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFib2FyZC5pc1ZhbGlkQXR0YWNrTG9jKG5leHRYLCBuZXh0WSkpIHJldHVybiBfYXR0YWNrTmV4dFZhbGlkTG9jKGJvYXJkKTtcblxuICAgICAgc2VuZEF0dGFjayhuZXh0WCwgbmV4dFksIGJvYXJkKTtcbiAgICB9XG4gICAgX3VwZGF0ZVByZXZBdHRhY2tBcnIobmV4dFgsIG5leHRZLCBib2FyZCk7XG4gICAgcmV0dXJuIFtuZXh0WCwgbmV4dFldO1xuICB9XG5cbiAgcmV0dXJuIHsgZ2V0TmFtZSwgc2V0TmFtZSwgc2VuZFJhbmRvbUF0dGFjaywgc2VuZEF0dGFjaywgc2VuZFNtYXJ0QXR0YWNrIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCwgbmFtZSkge1xuICBpZiAobGVuZ3RoIDw9IDAgfHwgbGVuZ3RoID4gMTApXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTGVuZ3RoIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgYW5kIGxlc3MgdGhhbiAxMVwiKTtcblxuICBjb25zdCBfaGl0TG9jYXRpb24gPSBbXTtcblxuICBmdW5jdGlvbiBoaXQobG9jYXRpb24pIHtcbiAgICBfaGl0TG9jYXRpb24ucHVzaChsb2NhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXROYW1lKCkgeyBcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEhpdExvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gX2hpdExvY2F0aW9uO1xuICB9XG4gIFxuICBmdW5jdGlvbiBzZXROYW1lKG5ld05hbWUpIHtcbiAgICBuYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TGVuZ3RoKG51bSkge1xuICAgIGxlbmd0aCA9IG51bTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICByZXR1cm4gX2hpdExvY2F0aW9uLmxlbmd0aCA9PT0gbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHsgaGl0LCBnZXROYW1lLCBzZXROYW1lLCBnZXRMZW5ndGgsIHNldExlbmd0aCwgaXNTdW5rLCBnZXRIaXRMb2NhdGlvbnMgfTtcbn1cbiIsImltcG9ydCB7IGNvbXB1dGVyLCBzZXR1cEdhbWUgfSBmcm9tIFwiLi4vQ29udHJvbC9zZXR1cF9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyBnZXRBbGxTcXVhcmVzLCBnZXRYWWZyb21FbGVtZW50LCByZW1vdmVBbGxDaGlsZHJlbiB9IGZyb20gXCIuLi9ET00vZG9tX2hlbHBlcnMuanNcIjtcbmltcG9ydCBjcm9zc2hhaXIgZnJvbSBcIi4uLy4uL2ltYWdlcy9Dcm9zc2hhaXJzX1JlZC5zdmdcIjtcbmltcG9ydCB7IHVzZXJUdXJuLCBibG9ja1VzZXJJbnB1dCB9IGZyb20gXCIuLi9Db250cm9sL2dhbWVQbGF5X2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IGluaXRpYXRlU2hpcFBsYWNlbWVudCB9IGZyb20gXCIuLi9Db250cm9sL3NoaXBQbGFjZW1lbnRfY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgcmVtb3ZlTW9kYWwsIHJlbW92ZVJlc3RhcnRHYW1lIH0gZnJvbSBcIi4uL0RPTS9yZW5kZXJET00uanNcIjtcblxuZnVuY3Rpb24gX2xvYWRDcm9zc2hhaXIoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgdGFyZ2V0SWNvbi5zcmMgPSBjcm9zc2hhaXI7XG4gICAgdGFyZ2V0SWNvbi5jbGFzc0xpc3QuYWRkKFwiY3Jvc3NoYWlyXCIpO1xuICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZCh0YXJnZXRJY29uKTtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZUNyb3NzaGFpcihldmVudCkge1xuICAgIGV2ZW50LnRhcmdldC5yZW1vdmVDaGlsZChldmVudC50YXJnZXQuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxBdHRhY2tFTChzcXVhcmUpIHtcbiAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIF9sb2FkQ3Jvc3NoYWlyKTtcbiAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9yZW1vdmVDcm9zc2hhaXIpO1xuICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9oYW5kbGVBdHRhY2spO1xufVxuXG5mdW5jdGlvbiBfaGFuZGxlQXR0YWNrKGV2ZW50KSB7XG4gICAgaWYgKGJsb2NrVXNlcklucHV0KSByZXR1cm47XG5cbiAgICBsZXQgc3F1YXJlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zcXVhcmUnKTtcbiAgICByZW1vdmVBbGxBdHRhY2tFTChzcXVhcmUpO1xuICAgIHJlbW92ZUFsbENoaWxkcmVuKHNxdWFyZSk7XG5cbiAgICB1c2VyVHVybiguLi5nZXRYWWZyb21FbGVtZW50KHNxdWFyZSkpO1xufVxuXG5mdW5jdGlvbiBfcmVzdGFydEdhbWUoZXZlbnQpIHtcbiAgICByZW1vdmVNb2RhbCgpO1xuICAgIHJlbW92ZVJlc3RhcnRHYW1lKCk7XG4gICAgc2V0dXBHYW1lKCk7XG4gICAgaW5pdGlhdGVTaGlwUGxhY2VtZW50KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIb3ZlckNyb3NzaGFpckVMKCkge1xuICAgIGdldEFsbFNxdWFyZXMoY29tcHV0ZXIuYm9hcmRDbGFzcykuZm9yRWFjaCgoc3EpID0+IHtcbiAgICAgICAgc3EuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIF9sb2FkQ3Jvc3NoYWlyKTtcbiAgICAgICAgc3EuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9yZW1vdmVDcm9zc2hhaXIpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGlja0F0dGFja0VMKCkge1xuICAgIGdldEFsbFNxdWFyZXMoY29tcHV0ZXIuYm9hcmRDbGFzcykuZm9yRWFjaCgoc3EpID0+IHtcbiAgICAgICAgc3EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlQXR0YWNrKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xpY2tSZXN0YXJ0RUwoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhcnRHYW1lJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfcmVzdGFydEdhbWUpO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuLi9Db250cm9sL3NldHVwX2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IGdldFNxdWFyZUVsZW1lbnRzLCBnZXRYWWZyb21FbGVtZW50LCB0b2dnbGVTaGlwIH0gZnJvbSBcIi4uL0RPTS9kb21faGVscGVycy5qc1wiO1xuaW1wb3J0IHsgcGxhY2VTaGlwc01hbnVhbCB9IGZyb20gXCIuLi9Db250cm9sL3NoaXBQbGFjZW1lbnRfY29udHJvbGxlci5qc1wiXG5pbXBvcnQgeyByZW5kZXJCb2FyZCB9IGZyb20gXCIuLi9ET00vcmVuZGVyRE9NLmpzXCI7XG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi4vQ29udHJvbC9nYW1lUGxheV9jb250cm9sbGVyLmpzXCI7XG5cbmxldCBjdXJyRWxlbWVudHNFTDtcblxuZnVuY3Rpb24gX3JlbW92ZUFsbFNoaXBQbGFjZW1lbnRFTCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBfaGFuZGxlUm90YXRlKTtcblxuICAgIGN1cnJFbGVtZW50c0VMLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfaGFuZGxlSG92ZXIpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgX2hhbmRsZUhvdmVyKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlQ2xpY2spO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfaGFuZGxlUm90YXRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiS2V5UlwiKSB7XG4gICAgICB1c2VyLnNoaXBWZXJ0aWNhbCA9ICF1c2VyLnNoaXBWZXJ0aWNhbDtcbiAgICAgIF9yZW1vdmVBbGxTaGlwUGxhY2VtZW50RUwoKTtcbiAgICAgIHJlbmRlckJvYXJkKHVzZXIuYm9hcmQsIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICAgICAgcGxhY2VTaGlwc01hbnVhbCh1c2VyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9oYW5kbGVIb3ZlcihldmVudCkge1xuICAgIGxldCBbeCwgeV0gPSBnZXRYWWZyb21FbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgbGV0IGN1cnJlbnRTaGlwID0gdXNlci5zaGlwc1t1c2VyLnNoaXBJbmRleF07XG4gICAgbGV0IGN1cnJlbnRCb2FyZCA9IHVzZXIuYm9hcmQ7XG4gICAgbGV0IGN1cnJlbnRWZXJ0aWNhbCA9IHVzZXIuc2hpcFZlcnRpY2FsO1xuXG4gICAgbGV0IGFycmF5Q29vcmRzID0gY3VycmVudEJvYXJkLmdldEFycmF5Q29vcmRzKGN1cnJlbnRTaGlwLmdldExlbmd0aCgpLCB4LCB5LCBjdXJyZW50VmVydGljYWwpO1xuICAgIGxldCBhcnJheUNvb3JkRWxlbWVudHMgPSBnZXRTcXVhcmVFbGVtZW50cyhhcnJheUNvb3JkcywgdXNlcik7XG4gICAgdG9nZ2xlU2hpcChhcnJheUNvb3JkRWxlbWVudHMsIGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gX2hhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgbGV0IFt4LCB5XSA9IGdldFhZZnJvbUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgICBsZXQgY3VycmVudFNoaXAgPSB1c2VyLnNoaXBzW3VzZXIuc2hpcEluZGV4XTtcbiAgICBsZXQgY3VycmVudEJvYXJkID0gdXNlci5ib2FyZDtcbiAgICBsZXQgY3VycmVudFZlcnRpY2FsID0gdXNlci5zaGlwVmVydGljYWw7XG5cbiAgICBjdXJyZW50Qm9hcmQucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCB4LCB5LCBjdXJyZW50VmVydGljYWwpO1xuICAgIF9yZW1vdmVBbGxTaGlwUGxhY2VtZW50RUwoKTtcbiAgICByZW5kZXJCb2FyZChjdXJyZW50Qm9hcmQsIHVzZXIuYm9hcmRDbGFzcywgZmFsc2UpO1xuICAgIHVzZXIuc2hpcEluZGV4ICs9IDE7XG5cbiAgICBpZiAodXNlci5zaGlwc1t1c2VyLnNoaXBJbmRleF0gIT09IHVuZGVmaW5lZCkgcGxhY2VTaGlwc01hbnVhbCh1c2VyKTtcbiAgICBlbHNlIHN0YXJ0R2FtZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUm90YXRlU2hpcEVMKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIF9oYW5kbGVSb3RhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG92ZXJTaGlwUGxhY2VFTChwbGF5ZXIsIHZhbGlkTG9jYXRpb25zKSB7XG4gICAgbGV0IHZhbGlkTG9jRWxlbWVudHMgPSBnZXRTcXVhcmVFbGVtZW50cyh2YWxpZExvY2F0aW9ucywgcGxheWVyKTtcbiAgICBjdXJyRWxlbWVudHNFTCA9IHZhbGlkTG9jRWxlbWVudHM7XG5cbiAgICB2YWxpZExvY0VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX2hhbmRsZUhvdmVyKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfaGFuZGxlSG92ZXIpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xpY2tTaGlwUGxhY2VFTChwbGF5ZXIsIHZhbGlkTG9jYXRpb25zKSB7XG4gICAgbGV0IHZhbGlkTG9jRWxlbWVudHMgPSBnZXRTcXVhcmVFbGVtZW50cyh2YWxpZExvY2F0aW9ucywgcGxheWVyKTtcblxuICAgIHZhbGlkTG9jRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlQ2xpY2spO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZEludCh1cHBlckJvdW5kKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHVwcGVyQm91bmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kQm9vbCgpIHtcbiAgICByZXR1cm4gW3RydWUsIGZhbHNlXVtnZW5lcmF0ZVJhbmRJbnQoMildO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSXRlbUZyb21BcnJheShhcnJheSkge1xuICAgIHJldHVybiBhcnJheVtnZW5lcmF0ZVJhbmRJbnQoYXJyYXkubGVuZ3RoKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUVxdWFscyhhLCBiKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSkgJiZcbiAgICAgIEFycmF5LmlzQXJyYXkoYikgJiZcbiAgICAgIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJlxuICAgICAgYS5ldmVyeSgodmFsLCBpbmRleCkgPT4gdmFsID09PSBiW2luZGV4XSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBcnJmcm9tTmVzdGVkQXJyKG5lc3RlZCwgdG9SZW1vdmUpIHtcbiAgICByZXR1cm4gbmVzdGVkLmZpbHRlcihpdGVtMSA9PiBcbiAgICAgICAgdG9SZW1vdmUuZXZlcnkoaXRlbTIgPT4gXG4gICAgICAgICAgICAhYXJyYXlFcXVhbHMoaXRlbTEsIGl0ZW0yKSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm1VcENhc2VXaHRTcGFjZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5qb2luKCcnKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2V0dXBHYW1lIH0gZnJvbSAnLi9Nb2R1bGVzL0NvbnRyb2wvc2V0dXBfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBpbml0aWF0ZVNoaXBQbGFjZW1lbnQgfSBmcm9tICcuL01vZHVsZXMvQ29udHJvbC9zaGlwUGxhY2VtZW50X2NvbnRyb2xsZXInO1xuXG5zZXR1cEdhbWUoKTtcbmluaXRpYXRlU2hpcFBsYWNlbWVudCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9