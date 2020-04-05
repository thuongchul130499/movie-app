(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loading.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loading.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Loading'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Movie.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Movie.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MovieInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .//MovieInfo */ "./resources/js/components/MovieInfo.vue");
/* harmony import */ var _MovieCast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .//MovieCast */ "./resources/js/components/MovieCast.vue");
/* harmony import */ var _MovieImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//MovieImage */ "./resources/js/components/MovieImage.vue");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./resources/js/components/Loading.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Movie',
  components: {
    MovieInfo: _MovieInfo__WEBPACK_IMPORTED_MODULE_0__["default"],
    MovieCast: _MovieCast__WEBPACK_IMPORTED_MODULE_1__["default"],
    MovieImage: _MovieImage__WEBPACK_IMPORTED_MODULE_2__["default"],
    Loading: _Loading__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      movie: {}
    };
  },
  created: function created() {
    var _this = this;

    this.$store.dispatch('App/GET_MOVIE', this.$route.params.id).then(function (e) {
      _this.movie = e.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MovieCast.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MovieCast.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['movie'],
  name: 'MovieCast'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MovieImage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MovieImage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['movie'],
  name: 'MovieImage',
  data: function data() {
    return {
      isOpen: false,
      imageModal: null
    };
  },
  methods: {
    openModal: function openModal(image) {
      this.isOpen = true;
      this.imageModal = image;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MovieInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MovieInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['movie'],
  name: 'MovieInfo',
  data: function data() {
    return {
      isOpen: false
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loading.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loading.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\np {\n    line-height: 1.33em;\n    color: #7E7E7E;\n}\n#loader-wrapper {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1000;\n}\n#loader {\n    display: block;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    width: 150px;\n    height: 150px;\n    margin: -75px 0 0 -75px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #3498db;\n\n    -webkit-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n    animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n#loader:before {\n        content: \"\";\n        position: absolute;\n        top: 5px;\n        left: 5px;\n        right: 5px;\n        bottom: 5px;\n        border-radius: 50%;\n        border: 3px solid transparent;\n        border-top-color: #e74c3c;\n\n        -webkit-animation: spin 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n        animation: spin 3s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n#loader:after {\n        content: \"\";\n        position: absolute;\n        top: 15px;\n        left: 15px;\n        right: 15px;\n        bottom: 15px;\n        border-radius: 50%;\n        border: 3px solid transparent;\n        border-top-color: #f9c922;\n\n        -webkit-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n          animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n@-webkit-keyframes spin {\n0%   {  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n            transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n}\n100% {  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n            transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n}\n}\n@keyframes spin {\n0%   {  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n            transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n}\n100% {  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n            transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loading.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loading.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loading.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loading.vue?vue&type=template&id=6ca9e6be&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loading.vue?vue&type=template&id=6ca9e6be& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "loader-wrapper" } }, [
      _c("div", { attrs: { id: "loader" } }),
      _vm._v(" "),
      _c("div", { staticClass: "loader-section section-left" }),
      _vm._v(" "),
      _c("div", { staticClass: "loader-section section-right" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Movie.vue?vue&type=template&id=191f9fd5&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Movie.vue?vue&type=template&id=191f9fd5& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      Object.keys(_vm.movie).length === 0 && _vm.movie.constructor === Object
        ? _c("Loading")
        : _c(
            "div",
            [
              _c("MovieInfo", { attrs: { movie: _vm.movie } }),
              _vm._v(" "),
              _c("MovieCast", { attrs: { movie: _vm.movie } }),
              _vm._v(" "),
              _c("MovieImage", { attrs: { movie: _vm.movie } })
            ],
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MovieCast.vue?vue&type=template&id=6a07e134&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MovieCast.vue?vue&type=template&id=6a07e134& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "movie-cast border-b border-gray-800" }, [
    _c("div", { staticClass: "container mx-auto px-4 py-16" }, [
      _c("h2", { staticClass: "text-4xl font-semibold" }, [_vm._v("Cast")]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        },
        _vm._l(_vm.movie.cast, function(cast) {
          return _c("div", { key: cast.id, staticClass: "mt-8" }, [
            _c("a", { attrs: { href: "#" } }, [
              _c("img", {
                staticClass:
                  "hover:opacity-75 transition ease-in-out duration-150",
                attrs: {
                  src: "https://image.tmdb.org/t/p/w300/" + cast.profile_path,
                  alt: "actor1"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-2" }, [
              _c(
                "a",
                {
                  staticClass: "text-lg mt-2 hover:text-gray:300",
                  attrs: { href: "#" }
                },
                [_vm._v(_vm._s(cast.name))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-sm text-gray-400" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(cast.character) +
                    "\n                    "
                )
              ])
            ])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MovieImage.vue?vue&type=template&id=63a42736&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MovieImage.vue?vue&type=template&id=63a42736& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "movie-images",
      attrs: { "x-data": "{ isOpen: false, image: ''}" }
    },
    [
      _c("div", { staticClass: "container mx-auto px-4 py-16" }, [
        _c("h2", { staticClass: "text-4xl font-semibold" }, [_vm._v("Images")]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          },
          _vm._l(_vm.movie.images, function(image) {
            return _c("div", { key: image.id, staticClass: "mt-8" }, [
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.openModal(
                        "https://image.tmdb.org/t/p/w500/" + image.file_path
                      )
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass:
                      "hover:opacity-75 transition ease-in-out duration-150",
                    attrs: {
                      src: "https://image.tmdb.org/t/p/w500/" + image.file_path,
                      alt: "image1"
                    }
                  })
                ]
              )
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isOpen,
                expression: "isOpen"
              }
            ],
            staticClass:
              "fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto",
            staticStyle: { "background-color": "rgba(0, 0, 0, .5)" }
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "container mx-auto lg:px-32 rounded-lg overflow-y-auto"
              },
              [
                _c("div", { staticClass: "bg-gray-900 rounded" }, [
                  _c("div", { staticClass: "flex justify-end pr-4 pt-2" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "text-3xl leading-none hover:text-gray-300",
                        on: {
                          click: function($event) {
                            _vm.isOpen = false
                          }
                        }
                      },
                      [_vm._v("×\n                        ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body px-8 py-8 m-auto" }, [
                    _c("img", { attrs: { src: _vm.imageModal, alt: "poster" } })
                  ])
                ])
              ]
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MovieInfo.vue?vue&type=template&id=728a7b23&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MovieInfo.vue?vue&type=template&id=728a7b23& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "movie-info border-b border-gray-800" }, [
    _c(
      "div",
      { staticClass: "container mx-auto px-4 py-16 flex flex-col md:flex-row" },
      [
        _c("div", { staticClass: "flex-none" }, [
          _c("img", {
            staticClass: "w-64 lg:w-96",
            attrs: { src: _vm.movie.poster_path, alt: "parasite" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "md:ml-24" }, [
          _c("h2", { staticClass: "text-4xl mt-4 md:mt-0 font-semibold" }, [
            _vm._v(_vm._s(_vm.movie.title))
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "flex flex-wrap items-center text-gray-400 text-sm"
            },
            [
              _c(
                "svg",
                {
                  staticClass: "fill-current text-orange-500 w-4",
                  attrs: { viewBox: "0 0 24 24" }
                },
                [
                  _c("g", { attrs: { "data-name": "Layer 2" } }, [
                    _c("path", {
                      attrs: {
                        d:
                          "M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z",
                        "data-name": "star"
                      }
                    })
                  ])
                ]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "ml-1" }, [
                _vm._v(_vm._s(_vm.movie.vote_average))
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "mx-2" }, [_vm._v("|")]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.movie.release_date))]),
              _vm._v(" "),
              _c("span", { staticClass: "mx-2" }, [_vm._v("|")]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.movie.genres))])
            ]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "text-gray-300 mt-8" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.movie.overview) +
                "\n            "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-12" }, [
            _c("h4", { staticClass: "text-white font-semibold" }, [
              _vm._v("Featured Crew")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex mt-4" },
              _vm._l(_vm.movie.crew, function(item) {
                return _c("div", { key: item.id, staticClass: "mr-8" }, [
                  _c("div", [_vm._v(_vm._s(item.name))]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-sm text-gray-400" }, [
                    _vm._v(_vm._s(item.job))
                  ])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _vm.movie.videos && _vm.movie.videos.results.length > 0
                ? [
                    _c("div", { staticClass: "mt-12" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "flex inline-flex items-center bg-orange-500 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-orange-600 transition ease-in-out duration-150",
                          on: {
                            click: function($event) {
                              _vm.isOpen = true
                            }
                          }
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "w-6 fill-current",
                              attrs: { viewBox: "0 0 24 24" }
                            },
                            [
                              _c("path", {
                                attrs: { d: "M0 0h24v24H0z", fill: "none" }
                              }),
                              _c("path", {
                                attrs: {
                                  d:
                                    "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "ml-2" }, [
                            _vm._v("Play Trailer")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.isOpen,
                            expression: "isOpen"
                          }
                        ],
                        staticClass:
                          "fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto",
                        staticStyle: { "background-color": "rgba(0, 0, 0, .5)" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "container mx-auto lg:px-32 rounded-lg overflow-y-auto"
                          },
                          [
                            _c("div", { staticClass: "bg-gray-900 rounded" }, [
                              _c(
                                "div",
                                { staticClass: "flex justify-end pr-4 pt-2" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "text-3xl leading-none hover:text-gray-300",
                                      on: {
                                        click: function($event) {
                                          _vm.isOpen = false
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "×\n                                    "
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "modal-body px-8 py-8" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "responsive-container overflow-hidden relative",
                                      staticStyle: { "padding-top": "56.25%" }
                                    },
                                    [
                                      _c("iframe", {
                                        staticClass:
                                          "responsive-iframe absolute top-0 left-0 w-full h-full",
                                        staticStyle: { border: "0" },
                                        attrs: {
                                          src:
                                            "https://www.youtube.com/embed/" +
                                            _vm.movie.videos.results[0].key,
                                          allow: "autoplay; encrypted-media",
                                          allowfullscreen: ""
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Loading.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Loading.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loading_vue_vue_type_template_id_6ca9e6be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading.vue?vue&type=template&id=6ca9e6be& */ "./resources/js/components/Loading.vue?vue&type=template&id=6ca9e6be&");
/* harmony import */ var _Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.vue?vue&type=script&lang=js& */ "./resources/js/components/Loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Loading.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loading_vue_vue_type_template_id_6ca9e6be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loading_vue_vue_type_template_id_6ca9e6be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Loading.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Loading.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Loading.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Loading.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loading.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Loading.vue?vue&type=template&id=6ca9e6be&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Loading.vue?vue&type=template&id=6ca9e6be& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_6ca9e6be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=template&id=6ca9e6be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loading.vue?vue&type=template&id=6ca9e6be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_6ca9e6be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_6ca9e6be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Movie.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Movie.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Movie_vue_vue_type_template_id_191f9fd5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movie.vue?vue&type=template&id=191f9fd5& */ "./resources/js/components/Movie.vue?vue&type=template&id=191f9fd5&");
/* harmony import */ var _Movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Movie.vue?vue&type=script&lang=js& */ "./resources/js/components/Movie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Movie_vue_vue_type_template_id_191f9fd5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Movie_vue_vue_type_template_id_191f9fd5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Movie.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Movie.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Movie.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Movie.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Movie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Movie.vue?vue&type=template&id=191f9fd5&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Movie.vue?vue&type=template&id=191f9fd5& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Movie_vue_vue_type_template_id_191f9fd5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Movie.vue?vue&type=template&id=191f9fd5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Movie.vue?vue&type=template&id=191f9fd5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Movie_vue_vue_type_template_id_191f9fd5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Movie_vue_vue_type_template_id_191f9fd5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/MovieCast.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/MovieCast.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MovieCast_vue_vue_type_template_id_6a07e134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieCast.vue?vue&type=template&id=6a07e134& */ "./resources/js/components/MovieCast.vue?vue&type=template&id=6a07e134&");
/* harmony import */ var _MovieCast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieCast.vue?vue&type=script&lang=js& */ "./resources/js/components/MovieCast.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MovieCast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MovieCast_vue_vue_type_template_id_6a07e134___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MovieCast_vue_vue_type_template_id_6a07e134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MovieCast.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MovieCast.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/MovieCast.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieCast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MovieCast.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MovieCast.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieCast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MovieCast.vue?vue&type=template&id=6a07e134&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/MovieCast.vue?vue&type=template&id=6a07e134& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieCast_vue_vue_type_template_id_6a07e134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MovieCast.vue?vue&type=template&id=6a07e134& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MovieCast.vue?vue&type=template&id=6a07e134&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieCast_vue_vue_type_template_id_6a07e134___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieCast_vue_vue_type_template_id_6a07e134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/MovieImage.vue":
/*!************************************************!*\
  !*** ./resources/js/components/MovieImage.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MovieImage_vue_vue_type_template_id_63a42736___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieImage.vue?vue&type=template&id=63a42736& */ "./resources/js/components/MovieImage.vue?vue&type=template&id=63a42736&");
/* harmony import */ var _MovieImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieImage.vue?vue&type=script&lang=js& */ "./resources/js/components/MovieImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MovieImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MovieImage_vue_vue_type_template_id_63a42736___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MovieImage_vue_vue_type_template_id_63a42736___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MovieImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MovieImage.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/MovieImage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MovieImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MovieImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MovieImage.vue?vue&type=template&id=63a42736&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/MovieImage.vue?vue&type=template&id=63a42736& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieImage_vue_vue_type_template_id_63a42736___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MovieImage.vue?vue&type=template&id=63a42736& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MovieImage.vue?vue&type=template&id=63a42736&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieImage_vue_vue_type_template_id_63a42736___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieImage_vue_vue_type_template_id_63a42736___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/MovieInfo.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/MovieInfo.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MovieInfo_vue_vue_type_template_id_728a7b23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieInfo.vue?vue&type=template&id=728a7b23& */ "./resources/js/components/MovieInfo.vue?vue&type=template&id=728a7b23&");
/* harmony import */ var _MovieInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/MovieInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MovieInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MovieInfo_vue_vue_type_template_id_728a7b23___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MovieInfo_vue_vue_type_template_id_728a7b23___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MovieInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MovieInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/MovieInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MovieInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MovieInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MovieInfo.vue?vue&type=template&id=728a7b23&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/MovieInfo.vue?vue&type=template&id=728a7b23& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieInfo_vue_vue_type_template_id_728a7b23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MovieInfo.vue?vue&type=template&id=728a7b23& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MovieInfo.vue?vue&type=template&id=728a7b23&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieInfo_vue_vue_type_template_id_728a7b23___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieInfo_vue_vue_type_template_id_728a7b23___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);