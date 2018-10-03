(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a routerLink=\"/gods\" routerLinkActive=\"active\">Gods</a>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smite.service */ "./src/app/smite.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(smiteService) {
        this.smiteService = smiteService;
        this.title = 'Smite';
        this.getGods();
        console.log(this.gods);
    }
    AppComponent.prototype.getGods = function () {
        var _this = this;
        this.smiteService.getGods()
            .subscribe(function (gods) {
            var arr = Object.values(gods);
            _this.gods = arr;
            console.log(_this.gods);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_smite_service__WEBPACK_IMPORTED_MODULE_1__["SmiteService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_smite_service__WEBPACK_IMPORTED_MODULE_1__["SmiteService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _smite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smite.service */ "./src/app/smite.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _god_detail_god_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./god-detail/god-detail.component */ "./src/app/god-detail/god-detail.component.ts");
/* harmony import */ var _god_list_god_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./god-list/god-list.component */ "./src/app/god-list/god-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var appRoutes = [
    { path: 'gods', component: _god_list_god_list_component__WEBPACK_IMPORTED_MODULE_7__["GodListComponent"] },
    { path: 'gods/:name', component: _god_detail_god_detail_component__WEBPACK_IMPORTED_MODULE_6__["GodDetailComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule(router) {
        // Use a custom replacer to display function names in the route configs
        // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
        // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _god_detail_god_detail_component__WEBPACK_IMPORTED_MODULE_6__["GodDetailComponent"],
                _god_list_god_list_component__WEBPACK_IMPORTED_MODULE_7__["GodListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: false,
                })
            ],
            providers: [_smite_service__WEBPACK_IMPORTED_MODULE_4__["SmiteService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/god-detail/god-detail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/god-detail/god-detail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".god {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    text-align: center;\r\n    width: 180px;\r\n}\r\nimg {\r\n    width: 180px;\r\n    height: 334px;\r\n    background-color: grey;\r\n}\r\n.caption {\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/god-detail/god-detail.component.html":
/*!******************************************************!*\
  !*** ./src/app/god-detail/god-detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"god$ | async as god\">\n  <div class=\"god\">\n    <img src=\"{{god.godCard_URL}}\">\n    <span class=\"caption\"> {{god.Name}} </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/god-detail/god-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/god-detail/god-detail.component.ts ***!
  \****************************************************/
/*! exports provided: GodDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodDetailComponent", function() { return GodDetailComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _smite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../smite.service */ "./src/app/smite.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GodDetailComponent = /** @class */ (function () {
    function GodDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    GodDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.god$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (params) {
            return _this.service.getGod(params.get('name'));
        }));
    };
    GodDetailComponent.prototype.gotoGods = function (god) {
        var godName = god ? god.Name : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/gods', { name: godName }]);
    };
    GodDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-god-detail',
            template: __webpack_require__(/*! ./god-detail.component.html */ "./src/app/god-detail/god-detail.component.html"),
            styles: [__webpack_require__(/*! ./god-detail.component.css */ "./src/app/god-detail/god-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _smite_service__WEBPACK_IMPORTED_MODULE_3__["SmiteService"]])
    ], GodDetailComponent);
    return GodDetailComponent;
}());



/***/ }),

/***/ "./src/app/god-list/god-list.component.css":
/*!*************************************************!*\
  !*** ./src/app/god-list/god-list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".god {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    text-align: center;\r\n    width: 120px;\r\n}\r\nimg {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: grey;\r\n}\r\nimg:hover {\r\n    -webkit-transform: translate(0, -5px);\r\n            transform: translate(0, -5px);\r\n  }\r\n.caption {\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/god-list/god-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/god-list/god-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <title>Title of the document</title>\n</head>\n\n<body>\n    <h1>Smite Gods</h1>\n    <div class=\"god\" *ngFor=\"let god of gods\" [class.selected]=\"god.Name === selectedName\">\n        <a [routerLink]=\"['/gods', god.Name]\" routerLinkActive=\"active\">\n            <img class=\"test\" src=\"{{god.godIcon_URL}}\" alt=\"{{god.Name}}\">\n        </a>\n        <span class=\"caption\"> {{god.Name}} </span>\n    </div>\n    \n  \n</body>\n\n\n\n</html> "

/***/ }),

/***/ "./src/app/god-list/god-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/god-list/god-list.component.ts ***!
  \************************************************/
/*! exports provided: GodListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodListComponent", function() { return GodListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../smite.service */ "./src/app/smite.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GodListComponent = /** @class */ (function () {
    function GodListComponent(smiteService) {
        this.smiteService = smiteService;
        this.title = 'Smite';
        this.getGods();
        console.log(this.gods);
    }
    GodListComponent.prototype.getGods = function () {
        var _this = this;
        this.smiteService.getGods()
            .subscribe(function (gods) {
            var arr = Object.values(gods);
            _this.gods = arr;
            console.log(_this.gods);
        });
    };
    GodListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-god-list',
            template: __webpack_require__(/*! ./god-list.component.html */ "./src/app/god-list/god-list.component.html"),
            providers: [_smite_service__WEBPACK_IMPORTED_MODULE_1__["SmiteService"]],
            styles: [__webpack_require__(/*! ./god-list.component.css */ "./src/app/god-list/god-list.component.css")]
        }),
        __metadata("design:paramtypes", [_smite_service__WEBPACK_IMPORTED_MODULE_1__["SmiteService"]])
    ], GodListComponent);
    return GodListComponent;
}());



/***/ }),

/***/ "./src/app/smite.service.ts":
/*!**********************************!*\
  !*** ./src/app/smite.service.ts ***!
  \**********************************/
/*! exports provided: SmiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmiteService", function() { return SmiteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmiteService = /** @class */ (function () {
    function SmiteService(http) {
        this.http = http;
        this.smiteGodsUrl = '../assets/godsData.json';
    }
    SmiteService.prototype.getGods = function () {
        return this.http.get(this.smiteGodsUrl);
    };
    SmiteService.prototype.getGod = function (name) {
        return this.getGods().pipe(
        // (+) before `id` turns the string into a number
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (gods) { return gods.find(function (god) { return god.Name === name; }); }));
    };
    SmiteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SmiteService);
    return SmiteService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Smite\smite-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map