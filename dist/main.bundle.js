webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/album/album.component.css":
/***/ (function(module, exports) {

module.exports = ".pointer-cls{\r\n    cursor: pointer !important;\r\n}\r\n.card {\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  max-width: 300px;\r\n  margin: auto;\r\n  font-family: arial;\r\n  max-height: 330px;\r\n  border: 2px solid #000;\r\n  border-radius: 0.4em;\r\n  position: relative;\r\n  background-color: #F0F0F0;\r\n}\r\n.photo-container{\r\n    position: relative;\r\n    height: 350px;\r\n    width: 100%;\r\n}\r\n.photo-container img{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 200px;\r\n}\r\n.col-xs-4{\r\n    width: 25%;\r\n}\r\n.card strong span{\r\n    font-weight: 100 !important;\r\n}\r\n.clickToView {\r\n  color: red;\r\n  margin-bottom: 15px;\r\n  font-size: 14px;\r\n}\r\nbutton {\r\n  border: none;\r\n  outline: 0;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  font-size: 18px;\r\n}\r\na {\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  color: black;\r\n}\r\nbutton:hover, a:hover {\r\n  opacity: 0.7;\r\n}\r\n#overlay{\r\n    position: fixed;\r\n    background-color: #000;\r\n    opacity: 0.7;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n#Modal{\r\n    position: absolute;\r\n    top: 3em;\r\n    left: 10%;\r\n    width: 85%;\r\n    margin: 0 auto;\r\n    border: 8px double black;\r\n}\r\n.modal-body{\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n.closeModal{\r\n    float: right;\r\n    font-size: 2.5em;\r\n    font-weight: 700;\r\n    font-family: cursive;\r\n}\r\n.modal-photo-container{\r\n    width: 200px;\r\n    border: 2px solid #000;\r\n    border-radius: 0.4em;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    display: inline-block;\r\n}\r\n.modal-photo{\r\n    margin: 0 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/album/album.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-bottom:3em;\">\r\n    <div *ngIf=\"(userSelect != ' ');then singleUser else multipleUsers\"></div>\r\n    <ng-template #singleUser>\r\n        <div class=\"col-xs-12\" *ngFor=\"let album of albums\">\r\n            <div class=\"card\" [hidden]=\"!(userSelect == album.userId)\">\r\n                <h6>{{album.title}}</h6>\r\n                <strong class=\"userName\">{{getUser(album.userId).name}}</strong>\r\n                <strong class=\"clickToView pointer-cls\" (click)=\"openModal(album)\">Click to view album</strong>\r\n                <div class=\"photo-container\" *ngIf=\"album.photos\">\r\n                    <img [src]=\"album.photos[0].thumbnailUrl || ''\" width=\"100%\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template #multipleUsers>\r\n        <div class=\"col-xs-4\" *ngFor=\"let album of albums\">\r\n            <div class=\"card\">\r\n                <h6>{{album.title}}</h6>\r\n                <strong class=\"userName\">{{getUser(album.userId).name}}</strong>\r\n                <strong class=\"clickToView pointer-cls\" (click)=\"openModal(album)\">Click to view album</strong>\r\n                <div class=\"photo-container\" *ngIf=\"album.photos\">\r\n                    <img *ngIf=\"album.photos\" [src]=\"album.photos[0].thumbnailUrl || ''\" width=\"100%\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n<div id=\"overlay\" class=\"pointer-cls\" (click)=\"isModalOpen = false\" *ngIf=\"isModalOpen\"></div>\r\n<!-- modal -->\r\n<div id=\"Modal\" *ngIf=\"isModalOpen\">\r\n  <!-- dialog -->\r\n  <div class=\"modal-dialogs\">\r\n    <!-- content -->\r\n    <div class=\"modal-content\">\r\n      <!-- header -->\r\n      <div class=\"modal-header bg-primary text-white\">\r\n          <h1 id=\"myModalLabel\"class=\"modal-title\">\r\n              {{selectedAlbum.title}}\r\n          </h1>\r\n          <span (click)=\"isModalOpen = false\" class=\"closeModal pointer-cls\">X</span>\r\n      </div>\r\n      <!-- header -->\r\n      <!-- body -->\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-photo-container\" *ngFor=\"let photo of selectedAlbum.photos\">\r\n            <div class=\"modal-title-photo\">\r\n                {{photo.title}}\r\n            </div>\r\n            <div class=\"modal-photo\">\r\n                <img [src]=\"photo.thumbnailUrl\" />\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <!-- body -->\r\n      <!-- footer -->\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-secondary pointer-cls\" (click)=\"isModalOpen = false\">close</button>\r\n      </div>\r\n      <!-- footer -->\r\n    </div>\r\n    <!-- content -->\r\n  </div>\r\n  <!-- dialog -->\r\n</div>\r\n<!-- modal -->\r\n"

/***/ }),

/***/ "./src/app/album/album.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service_service__ = __webpack_require__("./src/app/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumComponent = /** @class */ (function () {
    function AlbumComponent(activatedRoute, dataService) {
        var _this = this;
        this.isModalOpen = false;
        dataService.getUsers().subscribe(function (users) { return _this.users = users; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log(_this.users); });
        dataService.getAlbums().subscribe(function (albums) { return _this.albums = albums; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log(_this.albums); });
        dataService.getPhotos().subscribe(function (photos) {
            _this.photos = photos;
            var _loop_1 = function (i) {
                var x = _this.albums.findIndex(function (o) { return o.id == _this.photos[i].albumId; });
                if (x == -1) {
                    return "continue";
                }
                if (typeof _this.albums[x]["photos"] === 'undefined') {
                    _this.albums[x]["photos"] = [];
                }
                _this.albums[x]["photos"].push(_this.photos[i]);
            };
            for (var i = 0; i < _this.photos.length; i++) {
                _loop_1(i);
            }
        }, function (error) { return console.error('Error: ' + error); }, function () { return console.log(_this.photos); });
        activatedRoute.paramMap.subscribe(function (params) {
            _this.userSelect = params.get('id');
        });
    }
    AlbumComponent.prototype.getUser = function (userId) {
        if (this.users) {
            var x = this.users.filter(function (o) { return o.id == userId; });
            return x[0];
        }
        else {
            return '';
        }
    };
    AlbumComponent.prototype.openModal = function (album) {
        this.selectedAlbum = album;
        this.isModalOpen = true;
        console.log(album);
    };
    AlbumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-album',
            template: __webpack_require__("./src/app/album/album.component.html"),
            styles: [__webpack_require__("./src/app/album/album.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__data_service_service__["a" /* DataService */]])
    ], AlbumComponent);
    return AlbumComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.router.navigate(['./Posts']);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_component__ = __webpack_require__("./src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__info_info_component__ = __webpack_require__("./src/app/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__album_album_component__ = __webpack_require__("./src/app/album/album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_service_service__ = __webpack_require__("./src/app/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routerConfig = [
    { path: 'Posts', component: __WEBPACK_IMPORTED_MODULE_6__post_post_component__["a" /* PostComponent */] },
    { path: 'Albums/:id', component: __WEBPACK_IMPORTED_MODULE_8__album_album_component__["a" /* AlbumComponent */] },
    { path: 'Users/:id', component: __WEBPACK_IMPORTED_MODULE_7__info_info_component__["a" /* InfoComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_7__info_info_component__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__album_album_component__["a" /* AlbumComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routerConfig, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__data_service_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getPosts = function () {
        return this._http.get('https://jsonplaceholder.typicode.com/posts').map(function (response) { return response.json(); });
    };
    DataService.prototype.getComments = function () {
        return this._http.get('https://jsonplaceholder.typicode.com/comments').map(function (response) { return response.json(); });
    };
    DataService.prototype.getUsers = function () {
        return this._http.get('https://jsonplaceholder.typicode.com/users').map(function (response) { return response.json(); });
    };
    DataService.prototype.getAlbums = function () {
        return this._http.get('https://jsonplaceholder.typicode.com/albums').map(function (response) { return response.json(); });
    };
    DataService.prototype.getPhotos = function () {
        return this._http.get('https://jsonplaceholder.typicode.com/photos').map(function (response) { return response.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/info/info.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  max-width: 300px;\r\n  margin: auto;\r\n  font-family: arial;\r\n  max-height: 330px;\r\n  border: 2px solid #000;\r\n  border-radius: 0.4em;\r\n}\r\n\r\n.col-xs-4{\r\n    width: 25%;\r\n}\r\n\r\n.card strong span{\r\n    font-weight: 100 !important;\r\n}\r\n\r\n.email {\r\n  color: red;\r\n  margin-bottom: 15px;\r\n  font-size: 14px;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  outline: 0;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  font-size: 18px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  color: black;\r\n}\r\n\r\nbutton:hover, a:hover {\r\n  opacity: 0.7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-bottom:3em;\">\r\n    <div *ngIf=\"(userSelect != ' ');then singleUser else multipleUsers\"></div>\r\n    <ng-template #singleUser>\r\n        <div class=\"col-xs-12\" *ngFor=\"let user of users\">\r\n            <div class=\"card\" [hidden]=\"!(userSelect == user.id)\">\r\n                <h4>{{user.name}}</h4>\r\n                <strong class=\"email\">{{user.email}}</strong>\r\n                <strong>Address: <span>{{user.address.street + \" \" + user.address.suite + \", \" + user.address.city + \" \" + user.address.zipcode}}</span></strong>\r\n                <strong>Phone:   <span>{{user.phone}}</span></strong>\r\n                <strong>Website: <span>{{user.website}}</span></strong>\r\n                <strong>Company: <span>{{user.company.name}}</span></strong>\r\n                <button (click)=\"redirect(user.id)\">View Album</button>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template #multipleUsers>\r\n        <div class=\"col-xs-4\" *ngFor=\"let user of users\">\r\n            <div class=\"card\">\r\n                <h4>{{user.name}}</h4>\r\n                <strong class=\"email\">{{user.email}}</strong>\r\n                <strong>Address: <span>{{user.address.street + \" \" + user.address.suite + \", \" + user.address.city + \" \" + user.address.zipcode}}</span></strong>\r\n                <strong>Phone:   <span>{{user.phone}}</span></strong>\r\n                <strong>Website: <span>{{user.website}}</span></strong>\r\n                <strong>Company: <span>{{user.company.name}}</span></strong>\r\n                <button (click)=\"redirect(user.id)\">View Album</button>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service_service__ = __webpack_require__("./src/app/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoComponent = /** @class */ (function () {
    function InfoComponent(router, activatedRoute, dataService) {
        var _this = this;
        this.router = router;
        this.userSelect = "None";
        dataService.getUsers().subscribe(function (users) { return _this.users = users; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log(_this.users); });
        activatedRoute.paramMap.subscribe(function (params) {
            _this.userSelect = params.get('id');
        });
        console.log(typeof this.userSelect);
    }
    InfoComponent.prototype.redirect = function (userId) {
        this.router.navigate(['./Albums', userId]);
    };
    InfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-info',
            template: __webpack_require__("./src/app/info/info.component.html"),
            styles: [__webpack_require__("./src/app/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__data_service_service__["a" /* DataService */]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = "// GLOBAL STYLES:\r\n.container{\r\n    background-color: #fff;\r\n}\r\nheader{\r\n   text-align:center;\r\n   width: 100%;\r\n   background-color: #6076ff;\r\n   color: aliceblue;\r\n   font-size: 2em;\r\n}\r\nnav{\r\n   margin: 0 auto;\r\n   text-align:center;\r\n   bottom: 0;\r\n   left: 0;\r\n   position: fixed;\r\n   width: 100%;\r\n}\r\nnav ul{\r\n   margin: 0 auto;\r\n}\r\nnav ul li{\r\n   background-color: #6076ff;\r\n   border-right: 1px solid #000;\r\n   color: aliceblue;\r\n   margin: 0 auto;\r\n   display: inline-block;\r\n   text-align:center;\r\n   width: 33.3333333333%;\r\n}\r\nnav ul li a{\r\n   color: aliceblue;\r\n   width: 100%;\r\n}\r\n.active{\r\n    background-color:  #3b68ff !important;\r\n    border-top: 3px solid #000;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    {{currLink}}\n</header>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n    <nav class=\"navbar-fixed-bottom\">\n      <ul class=\"nav nav-pills\">\n        <li class=\"nav-item\" >\n          <a [routerLink]=\"['Posts']\" routerLinkActive=\"active\" class=\"nav-link\">Posts</a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['Albums/ ']\" routerLinkActive=\"active\" class=\"nav-link\">Albums</a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['Users/ ']\" routerLinkActive=\"active\" class=\"nav-link\">Users</a>\n        </li>\n      </ul>\n    </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        var _this = this;
        this.router = router;
        this.currLink = "Posts";
        router.events.subscribe(function (val) {
            _this.currLink = _this.router.url.split('/')[1];
        });
    }
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/***/ (function(module, exports) {

module.exports = ".right-profile{\r\n    float: right;\r\n    color: yellow;\r\n    cursor: pointer;\r\n}\r\n.comments{\r\n    border: 1px solid #000;\r\n    border-radius: 0.4em;\r\n    padding: 5px;\r\n}\r\n.comments h5{\r\n    color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngFor=\"let post of posts; let i = index\" style=\"margin-bottom:3em;\">\r\n    <h5 class=\"card-header bg-primary text-white\">\r\n        Posted By: {{getUser(post.userId).name}}\r\n        <span (click)=\"redirect(post.userId, 'Users')\" class=\"right-profile\">Go to Profile</span>\r\n        <span (click)=\"redirect(post.userId, 'Albums')\" class=\"right-profile\">Go to Albums &nbsp; &nbsp; &nbsp;</span>\r\n    </h5>\r\n    <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{post.title}}</h5>\r\n        <p class=\"card-text\">{{post.body}}</p>\r\n        <button type=\"button\" class=\"btn btn-success\" *ngIf=\"showCommentsIdx != i\" (click)=\"showCommentsIdx = i\">Show Comments</button>\r\n        <button type=\"button\" class=\"btn btn-success\" *ngIf=\"showCommentsIdx == i\" (click)=\"showCommentsIdx = -1\">Hide Comments</button>\r\n        <div class=\"card-body\" *ngIf=\"showCommentsIdx == i\">\r\n            <div class=\"comments\" *ngFor=\"let comment of post.comments\">\r\n                <h5 class=\"card-title\">{{comment.email}}</h5>\r\n                <h6 class=\"card-title\">{{comment.name}}</h6>\r\n                <p class=\"card-text\">{{comment.body}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service_service__ = __webpack_require__("./src/app/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostComponent = /** @class */ (function () {
    function PostComponent(router, dataService) {
        var _this = this;
        this.router = router;
        this.showComments = false;
        dataService.getUsers().subscribe(function (users) { return _this.users = users; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log(_this.users); });
        dataService.getPosts().subscribe(function (posts) { return _this.posts = posts; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log(_this.posts); });
        dataService.getComments().subscribe(function (comments) {
            _this.comments = comments;
            var _loop_1 = function (i) {
                var x = _this.posts.findIndex(function (o) { return o.id == _this.comments[i].postId; });
                if (x == -1) {
                    return "continue";
                }
                if (typeof _this.posts[x]["comments"] === 'undefined') {
                    _this.posts[x]["comments"] = [];
                }
                _this.posts[x]["comments"].push(_this.comments[i]);
            };
            for (var i = 0; i < _this.comments.length; i++) {
                _loop_1(i);
            }
        }, function (error) { return console.error('Error: ' + error); }, function () { return console.log(_this.comments); });
    }
    PostComponent.prototype.getUser = function (userId) {
        if (this.users) {
            var x = this.users.filter(function (o) { return o.id == userId; });
            return x[0];
        }
        else {
            return '';
        }
    };
    PostComponent.prototype.redirect = function (userId, goTo) {
        var x = "./" + goTo;
        this.router.navigate([x, userId]);
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("./src/app/post/post.component.html"),
            styles: [__webpack_require__("./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service_service__["a" /* DataService */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map