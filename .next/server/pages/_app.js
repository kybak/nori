/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Search/model.js":
/*!************************************!*\
  !*** ./components/Search/model.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resultSlice\": () => (/* binding */ resultSlice),\n/* harmony export */   \"actions\": () => (/* binding */ actions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    loading: false,\n    results: []\n};\nconst resultSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"results\",\n    initialState,\n    reducers: {\n        setLoading: (state, action)=>{\n            state.loading = action.payload;\n        },\n        setResults: (state, action)=>{\n            state.results = action.payload;\n        }\n    }\n});\nconst actions = resultSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resultSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC9tb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQUU5QyxLQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ3BCQyxPQUFPLEVBQUUsS0FBSztJQUNkQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsV0FBVyxHQUFHSiw2REFBVyxDQUFDLENBQUM7SUFDdENLLElBQUksRUFBRSxDQUFTO0lBQ2ZKLFlBQVk7SUFDWkssUUFBUSxFQUFFLENBQUM7UUFDVEMsVUFBVSxHQUFHQyxLQUFLLEVBQUVDLE1BQU0sR0FBSyxDQUFDO1lBQzlCRCxLQUFLLENBQUNOLE9BQU8sR0FBR08sTUFBTSxDQUFDQyxPQUFPO1FBQ2hDLENBQUM7UUFDREMsVUFBVSxHQUFHSCxLQUFLLEVBQUVDLE1BQU0sR0FBSyxDQUFDO1lBQzlCRCxLQUFLLENBQUNMLE9BQU8sR0FBR00sTUFBTSxDQUFDQyxPQUFPO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVNLEtBQUssQ0FBQ0UsT0FBTyxHQUFHUixXQUFXLENBQUNRLE9BQU87QUFFMUMsaUVBQWVSLFdBQVcsQ0FBQ1MsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2gvbW9kZWwuanM/ZjZhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIHJlc3VsdHM6IFtdXG59O1xuXG5leHBvcnQgY29uc3QgcmVzdWx0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwicmVzdWx0c1wiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0TG9hZGluZzogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIHNldFJlc3VsdHM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5yZXN1bHRzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSByZXN1bHRTbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCByZXN1bHRTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsInJlc3VsdHMiLCJyZXN1bHRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldExvYWRpbmciLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRSZXN1bHRzIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Search/model.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-alert */ \"react-alert\");\n/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alert-template-basic */ \"react-alert-template-basic\");\n/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alert_template_basic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Search_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Search/model */ \"./components/Search/model.js\");\n\n/* pages/_app.js */ \n// import Link from \"next/link\";\n\n\n\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_5__.combineReducers)({\n    results: _components_Search_model__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}); // would be in its own file obviously\nconst options = {\n    // you can also just use 'bottom center'\n    position: react_alert__WEBPACK_IMPORTED_MODULE_2__.positions.BOTTOM_CENTER,\n    timeout: 5000,\n    offset: \"30px\",\n    // you can also just use 'scale'\n    transition: react_alert__WEBPACK_IMPORTED_MODULE_2__.transitions.SCALE\n};\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n            store: (0,redux__WEBPACK_IMPORTED_MODULE_5__.createStore)(rootReducer),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_alert__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n                template: (react_alert_template_basic__WEBPACK_IMPORTED_MODULE_3___default()),\n                ...options,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/kush/nori/pages/_app.js\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kush/nori/pages/_app.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/kush/nori/pages/_app.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kush/nori/pages/_app.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEVBQW1CLGtCQUNXO0FBQzlCLEVBQWdDO0FBQytDO0FBQ3pCO0FBQ2hCO0FBQ2M7QUFDRztBQUV2RCxLQUFLLENBQUNRLFdBQVcsR0FBR0gsc0RBQWUsQ0FBQyxDQUFDO0lBQ25DSSxPQUFPLEVBQUVGLGdFQUFjO0FBQ3pCLENBQUMsRUFBRyxDQUFxQztBQUV6QyxLQUFLLENBQUNHLE9BQU8sR0FBRyxDQUFDO0lBQ2YsRUFBd0M7SUFDeENDLFFBQVEsRUFBRVYsZ0VBQXVCO0lBQ2pDWSxPQUFPLEVBQUUsSUFBSTtJQUNiQyxNQUFNLEVBQUUsQ0FBTTtJQUNkLEVBQWdDO0lBQ2hDQyxVQUFVLEVBQUVmLDBEQUFpQjtBQUMvQixDQUFDO1NBRVFpQixLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNLDZFQUNIQyxDQUFHOzhGQWVEbEIsaURBQVE7WUFBQ21CLEtBQUssRUFBRWYsa0RBQVcsQ0FBQ0UsV0FBVztrR0FDckNMLGlEQUFhO2dCQUFDbUIsUUFBUSxFQUFFbEIsbUVBQWE7bUJBQU1NLE9BQU87c0dBQ2hEUSxTQUFTO3VCQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEMsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogcGFnZXMvX2FwcC5qcyAqL1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB0cmFuc2l0aW9ucywgcG9zaXRpb25zLCBQcm92aWRlciBhcyBBbGVydFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWFsZXJ0XCI7XG5pbXBvcnQgQWxlcnRUZW1wbGF0ZSBmcm9tIFwicmVhY3QtYWxlcnQtdGVtcGxhdGUtYmFzaWNcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgcmVzdWx0c1JlZHVjZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoL21vZGVsXCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgcmVzdWx0czogcmVzdWx0c1JlZHVjZXJcbn0pOyAvLyB3b3VsZCBiZSBpbiBpdHMgb3duIGZpbGUgb2J2aW91c2x5XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIC8vIHlvdSBjYW4gYWxzbyBqdXN0IHVzZSAnYm90dG9tIGNlbnRlcidcbiAgcG9zaXRpb246IHBvc2l0aW9ucy5CT1RUT01fQ0VOVEVSLFxuICB0aW1lb3V0OiA1MDAwLFxuICBvZmZzZXQ6IFwiMzBweFwiLFxuICAvLyB5b3UgY2FuIGFsc28ganVzdCB1c2UgJ3NjYWxlJ1xuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ucy5TQ0FMRVxufTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiA8bmF2IGNsYXNzTmFtZT1cImJvcmRlci1iIHAtNlwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj5NZXRhdmVyc2UgTWFya2V0cGxhY2U8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00XCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTQgdGV4dC1waW5rLTUwMFwiPkRhc2hib2FyZDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9saXN0aW5nc1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXItNCB0ZXh0LXBpbmstNTAwXCI+TGlzdGluZ3M8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlLWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTYgdGV4dC1waW5rLTUwMFwiPkNyZWF0ZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+ICovfVxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtjcmVhdGVTdG9yZShyb290UmVkdWNlcil9PlxuICAgICAgICA8QWxlcnRQcm92aWRlciB0ZW1wbGF0ZT17QWxlcnRUZW1wbGF0ZX0gey4uLm9wdGlvbnN9PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9BbGVydFByb3ZpZGVyPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidHJhbnNpdGlvbnMiLCJwb3NpdGlvbnMiLCJQcm92aWRlciIsIkFsZXJ0UHJvdmlkZXIiLCJBbGVydFRlbXBsYXRlIiwiY29tYmluZVJlZHVjZXJzIiwiY3JlYXRlU3RvcmUiLCJyZXN1bHRzUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwicmVzdWx0cyIsIm9wdGlvbnMiLCJwb3NpdGlvbiIsIkJPVFRPTV9DRU5URVIiLCJ0aW1lb3V0Iiwib2Zmc2V0IiwidHJhbnNpdGlvbiIsIlNDQUxFIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXYiLCJzdG9yZSIsInRlbXBsYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-alert":
/*!******************************!*\
  !*** external "react-alert" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-alert");

/***/ }),

/***/ "react-alert-template-basic":
/*!*********************************************!*\
  !*** external "react-alert-template-basic" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-alert-template-basic");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();