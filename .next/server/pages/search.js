"use strict";
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
exports.id = "pages/search";
exports.ids = ["pages/search"];
exports.modules = {

/***/ "./components/Search/Search.tsx":
/*!**************************************!*\
  !*** ./components/Search/Search.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ \"./services/index.js\");\n\n\n\n\n\nconst Search = ()=>{\n    const { 0: search , 1: setSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const searchSelector = react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector;\n    console.log(searchSelector);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { data  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(`{ search(quantity: ${search}) { id, quantity } }`, _services__WEBPACK_IMPORTED_MODULE_4__.itemsService.search);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-screen h-screen justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate mb-2\",\n                    style: {\n                        marginRight: \"100px\",\n                        color: \"#5C5D66\"\n                    },\n                    children: \"Search Your NRT\"\n                }, void 0, false, {\n                    fileName: \"/home/kush/nori/components/Search/Search.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none\",\n                            type: \"search\",\n                            name: \"search\",\n                            placeholder: \"Enter a quantity\",\n                            onChange: (e)=>setSearch(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/kush/nori/components/Search/Search.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm\",\n                            onClick: ()=>{},\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/kush/nori/components/Search/Search.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kush/nori/components/Search/Search.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kush/nori/components/Search/Search.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/kush/nori/components/Search/Search.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ3dDO0FBQ3BEO0FBQ3FCO0FBRTdDLEtBQUssQ0FBQ0ssTUFBTSxPQUFhLENBQUM7SUFDeEIsS0FBSyxNQUFFQyxNQUFNLE1BQUVDLFNBQVMsTUFBSVAsK0NBQVEsQ0FBZ0IsSUFBSTtJQUN4RCxLQUFLLENBQUNRLGNBQWMsR0FBOEJQLG9EQUFXO0lBRTdEUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsY0FBYztJQUUxQixLQUFLLENBQUNHLFFBQVEsR0FBR1Qsd0RBQVc7SUFDNUIsS0FBSyxDQUFDLENBQUMsQ0FBQ1UsSUFBSSxFQUFDLENBQUMsR0FBR1QsMENBQU0sRUFDcEIsbUJBQW1CLEVBQUVHLE1BQU0sQ0FBQyxvQkFBb0IsR0FDakRGLDBEQUFtQjtJQUdyQixNQUFNLDZFQUNIUyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUE2RDs4RkFDekVELENBQUc7OzRGQUNERSxDQUFFO29CQUNERCxTQUFTLEVBQUMsQ0FBeUU7b0JBQ25GRSxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0MsV0FBVyxFQUFFLENBQU87d0JBQUVDLEtBQUssRUFBRSxDQUFTO29CQUFDLENBQUM7OEJBQ2xELENBRUQ7Ozs7Ozs0RkFFQ0wsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQTRCOztvR0FDeENLLENBQUs7NEJBQ0pMLFNBQVMsRUFBQyxDQUF5Rjs0QkFDbkdNLElBQUksRUFBQyxDQUFROzRCQUNiQyxJQUFJLEVBQUMsQ0FBUTs0QkFDYkMsV0FBVyxFQUFDLENBQWtCOzRCQUM5QkMsUUFBUSxHQUFFQyxDQUFDLEdBQUlqQixTQUFTLENBQUNpQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7O29HQUd4Q0MsQ0FBTTs0QkFDTFAsSUFBSSxFQUFDLENBQVE7NEJBQ2JOLFNBQVMsRUFBQyxDQUFtUTs0QkFDN1FjLE9BQU8sTUFBUSxDQUFDLENBQUM7c0NBQ2xCLENBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztBQUVELGlFQUFldkIsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoLnRzeD9jNmVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoLCBUeXBlZFVzZVNlbGVjdG9ySG9vayB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyBpdGVtc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXNcIjtcblxuY29uc3QgU2VhcmNoOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBzZWFyY2hTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8YW55PiA9IHVzZVNlbGVjdG9yO1xuXG4gIGNvbnNvbGUubG9nKHNlYXJjaFNlbGVjdG9yKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSPHsgaXRlbXM6IEl0ZW1bXSB8IFtdIH0+KFxuICAgIGB7IHNlYXJjaChxdWFudGl0eTogJHtzZWFyY2h9KSB7IGlkLCBxdWFudGl0eSB9IH1gLFxuICAgIGl0ZW1zU2VydmljZS5zZWFyY2hcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LXNjcmVlbiBoLXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBsZWFkaW5nLTcgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTJ4bCBzbTp0cnVuY2F0ZSBtYi0yXCJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMDBweFwiLCBjb2xvcjogXCIjNUM1RDY2XCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNlYXJjaCBZb3VyIE5SVFxuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBiZy13aGl0ZSBoLTEwIHB4LTUgcHItMTYgcm91bmRlZC1sZyB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIHF1YW50aXR5XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBzaGFkb3ctc20gcHgtNCBweS0yIGJnLWdyZWVuLTYwMCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmVlbi03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctZ3JlZW4tNTAwIHNtOm1sLTMgc206dy1hdXRvIHNtOnRleHQtc21cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwidXNlU1dSIiwiaXRlbXNTZXJ2aWNlIiwiU2VhcmNoIiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2VhcmNoU2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Search/Search.tsx\n");

/***/ }),

/***/ "./pages/search.tsx":
/*!**************************!*\
  !*** ./pages/search.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Search_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Search/Search */ \"./components/Search/Search.tsx\");\n\n\nconst SearchPage = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search_Search__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/kush/nori/pages/search.tsx\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2dEO0FBRWhELEtBQUssQ0FBQ0MsVUFBVSxPQUFhLENBQUM7SUFDNUIsTUFBTSw2RUFBRUQsaUVBQU07Ozs7O0FBQ2hCLENBQUM7QUFFRCxpRUFBZUMsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VhcmNoLnRzeD9jM2JhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2hcIjtcblxuY29uc3QgU2VhcmNoUGFnZTogRkMgPSAoKSA9PiB7XG4gIHJldHVybiA8U2VhcmNoPjwvU2VhcmNoPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2U7XG4iXSwibmFtZXMiOlsiU2VhcmNoIiwiU2VhcmNoUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search.tsx\n");

/***/ }),

/***/ "./services/index.js":
/*!***************************!*\
  !*** ./services/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemsService\": () => (/* reexport safe */ _items_service__WEBPACK_IMPORTED_MODULE_0__.itemsService)\n/* harmony export */ });\n/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.service */ \"./services/items.service.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZpY2VzL2luZGV4LmpzPzQ3NTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgaXRlbXNTZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbXMuc2VydmljZVwiO1xuIl0sIm5hbWVzIjpbIml0ZW1zU2VydmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/index.js\n");

/***/ }),

/***/ "./services/items.service.ts":
/*!***********************************!*\
  !*** ./services/items.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemsService\": () => (/* binding */ itemsService)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\nconst itemsService = {\n    getItems: (query)=>(0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(\"/api/items\", query)\n    ,\n    search: (query)=>(0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(\"/api/search\", query)\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9pdGVtcy5zZXJ2aWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUVsQyxLQUFLLENBQUNDLFlBQVksR0FBZSxDQUFDO0lBQ3ZDQyxRQUFRLEdBQUVDLEtBQUssR0FBSUgsd0RBQU8sQ0FBQyxDQUFZLGFBQUVHLEtBQUs7O0lBQzlDQyxNQUFNLEdBQUVELEtBQUssR0FBSUgsd0RBQU8sQ0FBQyxDQUFhLGNBQUVHLEtBQUs7QUFDL0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZpY2VzL2l0ZW1zLnNlcnZpY2UudHM/NmZlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuXG5leHBvcnQgY29uc3QgaXRlbXNTZXJ2aWNlOiBBUElTZXJ2aWNlID0ge1xuICBnZXRJdGVtczogcXVlcnkgPT4gcmVxdWVzdChcIi9hcGkvaXRlbXNcIiwgcXVlcnkpLFxuICBzZWFyY2g6IHF1ZXJ5ID0+IHJlcXVlc3QoXCIvYXBpL3NlYXJjaFwiLCBxdWVyeSlcbn07XG4iXSwibmFtZXMiOlsicmVxdWVzdCIsIml0ZW1zU2VydmljZSIsImdldEl0ZW1zIiwicXVlcnkiLCJzZWFyY2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/items.service.ts\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/search.tsx"));
module.exports = __webpack_exports__;

})();