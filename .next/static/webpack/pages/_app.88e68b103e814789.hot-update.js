"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Search/model.js":
/*!************************************!*\
  !*** ./components/Search/model.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resultSlice\": function() { return /* binding */ resultSlice; },\n/* harmony export */   \"actions\": function() { return /* binding */ actions; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar initialState = {\n    loading: false,\n    results: []\n};\nvar resultSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"results\",\n    initialState: initialState,\n    reducers: {\n        setLoading: function(state, action) {\n            state.results = action.payload;\n        }\n    }\n});\nvar actions = resultSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (resultSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC9tb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThDO0FBRTlDLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQUM7SUFDcEJDLE9BQU8sRUFBRSxLQUFLO0lBQ2RDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDYixDQUFDO0FBRU0sR0FBSyxDQUFDQyxXQUFXLEdBQUdKLDZEQUFXLENBQUMsQ0FBQztJQUN0Q0ssSUFBSSxFQUFFLENBQVM7SUFDZkosWUFBWSxFQUFaQSxZQUFZO0lBQ1pLLFFBQVEsRUFBRSxDQUFDO1FBQ1RDLFVBQVUsRUFBRSxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELE1BQU0sRUFBSyxDQUFDO1lBQzlCQyxLQUFLLENBQUNOLE9BQU8sR0FBR0ssTUFBTSxDQUFDRSxPQUFPO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVNLEdBQUssQ0FBQ0MsT0FBTyxHQUFHUCxXQUFXLENBQUNPLE9BQU87QUFFMUMsK0RBQWVQLFdBQVcsQ0FBQ1EsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoL21vZGVsLmpzP2Y2YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICByZXN1bHRzOiBbXVxufTtcblxuZXhwb3J0IGNvbnN0IHJlc3VsdFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInJlc3VsdHNcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldExvYWRpbmc6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5yZXN1bHRzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSByZXN1bHRTbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCByZXN1bHRTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsInJlc3VsdHMiLCJyZXN1bHRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldExvYWRpbmciLCJhY3Rpb24iLCJzdGF0ZSIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Search/model.js\n");

/***/ })

});