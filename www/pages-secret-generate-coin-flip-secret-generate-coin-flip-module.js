(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-secret-generate-coin-flip-secret-generate-coin-flip-module"],{

/***/ "2Sx9":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/secret-generate-coin-flip/secret-generate-coin-flip-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: SecretGenerateCoinFlipPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretGenerateCoinFlipPageRoutingModule", function() { return SecretGenerateCoinFlipPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _secret_generate_coin_flip_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secret-generate-coin-flip.page */ "KfdH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var routes = [
    {
        path: '',
        component: _secret_generate_coin_flip_page__WEBPACK_IMPORTED_MODULE_1__["SecretGenerateCoinFlipPage"]
    }
];
var SecretGenerateCoinFlipPageRoutingModule = /** @class */ (function () {
    function SecretGenerateCoinFlipPageRoutingModule() {
    }
    SecretGenerateCoinFlipPageRoutingModule.ɵfac = function SecretGenerateCoinFlipPageRoutingModule_Factory(t) { return new (t || SecretGenerateCoinFlipPageRoutingModule)(); };
    SecretGenerateCoinFlipPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SecretGenerateCoinFlipPageRoutingModule });
    SecretGenerateCoinFlipPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return SecretGenerateCoinFlipPageRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SecretGenerateCoinFlipPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "EEqB":
/*!*********************************************************!*\
  !*** ./src/app/services/coin-flip/coin-flip.service.ts ***!
  \*********************************************************/
/*! exports provided: CoinFlipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinFlipService", function() { return CoinFlipService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/utils */ "oCjk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



function binaryToByte(bin) {
    return parseInt(bin, 2);
}
var CoinFlipService = /** @class */ (function () {
    function CoinFlipService() {
    }
    CoinFlipService.prototype.validateInput = function (binaryEntropy) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (typeof binaryEntropy !== 'string') {
                    throw Error('Input needs to be a string');
                }
                if (binaryEntropy.length !== 256) {
                    throw Error('Input length needs to be exactly 256');
                }
                if (!binaryEntropy.split('').every(function (c) { return '01'.includes(c); })) {
                    throw Error('Input can only contain "0" or "1"');
                }
                return [2 /*return*/, true];
            });
        });
    };
    CoinFlipService.prototype.getEntropyFromInput = function (binaryEntropy) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var entropyBytes, entropy;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateInput(binaryEntropy)];
                    case 1:
                        if (!(_a.sent())) {
                            throw new Error('Invalid Coin Flip');
                        }
                        entropyBytes = binaryEntropy.match(/(.{1,8})/g).map(binaryToByte);
                        entropy = Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["toHexString"])(new Uint8Array(entropyBytes));
                        console.log('entropy', entropy);
                        return [2 /*return*/, entropy];
                }
            });
        });
    };
    CoinFlipService.ɵfac = function CoinFlipService_Factory(t) { return new (t || CoinFlipService)(); };
    CoinFlipService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CoinFlipService, factory: CoinFlipService.ɵfac, providedIn: 'root' });
    return CoinFlipService;
}());



/***/ }),

/***/ "KfdH":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/secret-generate-coin-flip/secret-generate-coin-flip.page.ts ***!
  \***********************************************************************************/
/*! exports provided: SecretGenerateCoinFlipPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretGenerateCoinFlipPage", function() { return SecretGenerateCoinFlipPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_secret__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/secret */ "C2ta");
/* harmony import */ var src_app_services_coin_flip_coin_flip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/coin-flip/coin-flip.service */ "EEqB");
/* harmony import */ var src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/error-handler/error-handler.service */ "626a");
/* harmony import */ var src_app_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_grid_input_grid_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/grid-input/grid-input.component */ "kr6l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");












var _c0 = function (a0) { return { inputLength: a0 }; };
var SecretGenerateCoinFlipPage = /** @class */ (function () {
    function SecretGenerateCoinFlipPage(navigationService, coinFlipService) {
        this.navigationService = navigationService;
        this.coinFlipService = coinFlipService;
        this.isValid = false;
        this.minLength = 256;
        this.maxLength = 256;
        this.error = '';
        this.entropy = '';
    }
    SecretGenerateCoinFlipPage.prototype.ngOnInit = function () { };
    SecretGenerateCoinFlipPage.prototype.next = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var entropy, secret;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.coinFlipService.getEntropyFromInput(this.entropy)];
                    case 1:
                        entropy = _a.sent();
                        secret = new src_app_models_secret__WEBPACK_IMPORTED_MODULE_2__["MnemonicSecret"](entropy);
                        this.navigationService.routeWithState('secret-rules', { secret: secret }).catch(Object(src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_NAVIGATION));
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretGenerateCoinFlipPage.prototype.updateEntropy = function (input) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.entropy = input;
                this.validateEntropy();
                return [2 /*return*/];
            });
        });
    };
    SecretGenerateCoinFlipPage.prototype.validateEntropy = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.entropy.length !== 256) {
                            this.isValid = false;
                            this.error = '';
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.coinFlipService.validateInput(this.entropy)];
                    case 2:
                        _a.isValid = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        this.isValid = false;
                        this.error = e_1;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SecretGenerateCoinFlipPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(500);
    };
    SecretGenerateCoinFlipPage.ɵfac = function SecretGenerateCoinFlipPage_Factory(t) { return new (t || SecretGenerateCoinFlipPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_coin_flip_coin_flip_service__WEBPACK_IMPORTED_MODULE_3__["CoinFlipService"])); };
    SecretGenerateCoinFlipPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SecretGenerateCoinFlipPage, selectors: [["airgap-secret-generate-coin-flip"]], viewQuery: function SecretGenerateCoinFlipPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        } }, decls: 37, vars: 27, consts: [[1, "ion-no-border"], ["color", "secondary"], ["slot", "start"], ["defaultHref", "/tabs/tab-settings"], [1, "ion-padding-horizontal"], [1, "ion-padding-bottom"], [3, "minLength", "maxLength", "gridWidth", "defaultHeight", "rowAddedEvent", "entropyChanged"], ["inputgrid", ""], [1, "ion-padding"], ["size", "12"], [1, "button--rounded", "ion-justify-content-between"], ["shape", "round", 3, "disabled", "click"], ["color", "tertiary", 3, "disabled", "click"], ["name", "trash-outline"], ["name", "chevron-forward-circle-outline"]], template: function SecretGenerateCoinFlipPage_Template(rf, ctx) { if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "airgap-grid-input", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("rowAddedEvent", function SecretGenerateCoinFlipPage_Template_airgap_grid_input_rowAddedEvent_11_listener() { return ctx.scrollToBottom(); })("entropyChanged", function SecretGenerateCoinFlipPage_Template_airgap_grid_input_entropyChanged_11_listener($event) { return ctx.updateEntropy($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-row", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-col", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ion-col", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "ion-col", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "ion-row", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretGenerateCoinFlipPage_Template_ion_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12); return _r0.add("0"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "ion-button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretGenerateCoinFlipPage_Template_ion_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12); return _r0.add("1"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "ion-button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretGenerateCoinFlipPage_Template_ion_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12); return _r0.remove(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "ion-icon", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "ion-button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretGenerateCoinFlipPage_Template_ion_button_click_34_listener() { return ctx.next(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "ion-icon", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 14, "secret-generate-coin-flip.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 16, "secret-generate-coin-flip.description"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("minLength", ctx.minLength)("maxLength", ctx.maxLength)("gridWidth", 8)("defaultHeight", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](21, 18, "secret-generate-coin-flip.status", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](25, _c0, _r0.entropy.length)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", _r0.entropy.length >= ctx.maxLength);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 21, "secret-generate-coin-flip.head"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", _r0.entropy.length >= ctx.maxLength);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 23, "secret-generate-coin-flip.tail"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", _r0.entropy.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.isValid);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _components_grid_input_grid_input_component__WEBPACK_IMPORTED_MODULE_7__["GridInputComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNyZXQtZ2VuZXJhdGUtY29pbi1mbGlwLnBhZ2Uuc2NzcyJ9 */"] });
    return SecretGenerateCoinFlipPage;
}());



/***/ }),

/***/ "tZ5r":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/secret-generate-coin-flip/secret-generate-coin-flip.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SecretGenerateCoinFlipPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretGenerateCoinFlipPageModule", function() { return SecretGenerateCoinFlipPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _secret_generate_coin_flip_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secret-generate-coin-flip-routing.module */ "2Sx9");
/* harmony import */ var _secret_generate_coin_flip_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./secret-generate-coin-flip.page */ "KfdH");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








var SecretGenerateCoinFlipPageModule = /** @class */ (function () {
    function SecretGenerateCoinFlipPageModule() {
    }
    SecretGenerateCoinFlipPageModule.ɵfac = function SecretGenerateCoinFlipPageModule_Factory(t) { return new (t || SecretGenerateCoinFlipPageModule)(); };
    SecretGenerateCoinFlipPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SecretGenerateCoinFlipPageModule });
    SecretGenerateCoinFlipPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _secret_generate_coin_flip_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecretGenerateCoinFlipPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]] });
    return SecretGenerateCoinFlipPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SecretGenerateCoinFlipPageModule, { declarations: [_secret_generate_coin_flip_page__WEBPACK_IMPORTED_MODULE_4__["SecretGenerateCoinFlipPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _secret_generate_coin_flip_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecretGenerateCoinFlipPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-secret-generate-coin-flip-secret-generate-coin-flip-module.js.map