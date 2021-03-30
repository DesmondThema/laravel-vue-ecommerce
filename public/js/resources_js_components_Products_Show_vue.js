(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Products_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Header.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Header.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Header",
  data: function data() {
    return {
      isLoggedIn: false,
      user: null,
      isAdmin: false
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      axios.post('/api/logout').then(function () {
        localStorage.removeItem("auth");

        _this.$router.push({
          name: "products.index"
        });
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.isLoggedIn = !!localStorage.getItem('auth');

    if (this.isLoggedIn) {
      axios.get('/api/user').then(function (res) {
        if (res.data.user_group_id === 2) {
          _this2.isAdmin = true;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Header */ "./resources/js/components/Header.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Header: _Header__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: {
    formatCurrency: function formatCurrency(amount) {
      return amount.toLocaleString('en-ZA', {
        style: 'currency',
        currency: 'ZAR'
      });
    },
    addToCart: function addToCart(product) {
      var auth = localStorage.getItem("auth");

      if (auth) {
        return this.$store.commit('addToCart', product);
      }

      this.$router.push({
        name: "auth.login"
      });
    }
  },
  computed: {
    products: function products() {
      return this.$store.state.products;
    },
    product: function product() {
      var _this = this;

      return this.products.find(function (product) {
        return product.slug === _this.$route.params.slug;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Header.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Header.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_1f42fb90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=1f42fb90&scoped=true& */ "./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&scoped=true&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/components/Header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Header_vue_vue_type_template_id_1f42fb90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Header_vue_vue_type_template_id_1f42fb90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1f42fb90",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products/Show.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Products/Show.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_3722748d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=3722748d& */ "./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Show_vue_vue_type_template_id_3722748d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_3722748d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Header.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Products/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Products/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=template&id=1f42fb90&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3722748d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3722748d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3722748d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=3722748d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "text-gray-700 body-font" }, [
    _c(
      "div",
      {
        staticClass:
          "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      },
      [
        _c(
          "a",
          {
            staticClass:
              "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
            attrs: { href: "/" }
          },
          [
            _c("svg", {
              staticClass:
                "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                viewBox: "0 0 24 24"
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "ml-3 text-xl" }, [
              _vm._v("StreetWare.co.za")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "nav",
          {
            staticClass:
              "md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400\tflex flex-wrap items-center text-base justify-center"
          },
          [
            _c(
              "router-link",
              { staticClass: "mr-5 hover:text-gray-900", attrs: { to: "/" } },
              [_vm._v("\n                Products\n            ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        !_vm.isLoggedIn
          ? _c(
              "router-link",
              {
                staticClass:
                  "inline-flex items-center py-1 px-3 focus:outline-none text-base mt-4 md:mt-0",
                attrs: { to: "/login" }
              },
              [_vm._v(" Login\n        ")]
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.isLoggedIn
          ? _c(
              "router-link",
              {
                staticClass:
                  "inline-flex items-center py-1 px-3 focus:outline-none text-base mt-4 md:mt-0",
                attrs: { to: "/register" }
              },
              [_vm._v(" Register\n        ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.isLoggedIn
          ? _c(
              "router-link",
              {
                staticClass:
                  "inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0",
                attrs: { to: { name: "order.checkout" } }
              },
              [
                _vm._v("\n            Checkout"),
                _c("span", {
                  staticClass: "inline-block ml-1",
                  domProps: {
                    textContent: _vm._s(
                      "(" + _vm.$store.state.cart.length + " items)"
                    )
                  }
                })
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.isLoggedIn
          ? _c(
              "router-link",
              {
                staticClass:
                  "inline-flex items-center py-1 px-3 focus:outline-none text-base mt-4 md:mt-0",
                attrs: { to: "/account" }
              },
              [_vm._v(" Account\n        ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.isLoggedIn && _vm.isAdmin
          ? _c(
              "a",
              {
                staticClass:
                  "inline-flex items-center py-1 px-3 focus:outline-none text-base mt-4 md:mt-0",
                attrs: { href: "/admin" }
              },
              [_vm._v(" Admin\n        ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.isLoggedIn
          ? _c(
              "router-link",
              {
                staticClass:
                  "inline-flex items-center py-1 px-3 focus:outline-none text-base mt-4 md:mt-0",
                attrs: { to: "/logout" },
                nativeOn: {
                  click: function($event) {
                    return _vm.logout($event)
                  }
                }
              },
              [_vm._v(" Logout\n        ")]
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Header"),
      _vm._v(" "),
      _vm.product
        ? _c(
            "section",
            { staticClass: "text-gray-700 body-font overflow-hidden" },
            [
              _c("div", { staticClass: "container px-4 py-24 mx-auto" }, [
                _c("div", { staticClass: "lg:w-3/5 mx-auto flex flex-wrap" }, [
                  _vm.product.file_path == 0
                    ? _c("img", {
                        staticClass:
                          "object-cover object-center w-1/2 h-66 block",
                        attrs: {
                          alt: "ecommerce",
                          src: "/images/palledium.jpeg"
                        }
                      })
                    : _c("img", {
                        staticClass:
                          "object-cover object-center w-1/2 h-66 block",
                        attrs: {
                          alt: "ecommerce",
                          src: "/storage/products/" + _vm.product.file_path
                        }
                      }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                    },
                    [
                      _vm._l(_vm.product.categories, function(category) {
                        return _c("h2", {
                          staticClass:
                            "text-sm title-font text-gray-500 tracking-widest uppercase inline-block mr-2",
                          domProps: { textContent: _vm._s(_vm.product.name) }
                        })
                      }),
                      _vm._v(" "),
                      _c("h1", {
                        staticClass:
                          "text-gray-900 text-3xl title-font font-medium mb-2",
                        domProps: { textContent: _vm._s(_vm.product.name) }
                      }),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "leading-relaxed",
                        domProps: {
                          textContent: _vm._s(_vm.product.description)
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex mt-6 pt-4 border-t-2 border-gray-200"
                        },
                        [
                          _vm.product.discount_price > 0
                            ? _c(
                                "span",
                                {
                                  staticClass:
                                    "title-font font-medium text-2xl text-gray-900"
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        _vm.formatCurrency(
                                          _vm.product.discount_price
                                        )
                                      ) +
                                      "\n                        "
                                  ),
                                  _c("span", { staticClass: "line-through" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.formatCurrency(_vm.product.price)
                                      )
                                    )
                                  ])
                                ]
                              )
                            : _c("span", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      _vm.formatCurrency(_vm.product.price)
                                    ) +
                                    "\n                    "
                                )
                              ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "flex ml-auto text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded",
                              on: {
                                click: function($event) {
                                  return _vm.addToCart(_vm.product)
                                }
                              }
                            },
                            [_vm._v("Add To Cart")]
                          )
                        ]
                      )
                    ],
                    2
                  )
                ])
              ])
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);