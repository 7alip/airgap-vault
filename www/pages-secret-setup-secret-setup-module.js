(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-secret-setup-secret-setup-module"],{

/***/ "HBY7":
/*!*********************************************************!*\
  !*** ./src/app/pages/secret-setup/secret-setup.page.ts ***!
  \*********************************************************/
/*! exports provided: SecretSetupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretSetupPage", function() { return SecretSetupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device/device.service */ "2w9O");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
















function SecretSetupPage_ion_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-buttons", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SecretSetupPage_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretSetupPage_ng_container_36_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r2.goToDiceRollPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretSetupPage_ng_container_36_Template_ion_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r4.goToCoinFlipPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, "secret-setup.dice-roll.label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 6, "secret-setup.dice-roll.text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 8, "secret-setup.coin-flip.label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 10, "secret-setup.coin-flip.text"));
} }
var SecretSetupPage = /** @class */ (function () {
    function SecretSetupPage(navigationService, secretsService, deviceService, storageService) {
        this.navigationService = navigationService;
        this.secretsService = secretsService;
        this.deviceService = deviceService;
        this.storageService = storageService;
        this.canGoBack = false;
        this.isAdvancedMode = false;
    }
    SecretSetupPage.prototype.ngOnInit = function () {
        var _this = this;
        this.secretsService
            .getSecretsObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(function (secrets) {
            if (secrets.length > 0) {
                _this.canGoBack = true;
            }
        });
    };
    SecretSetupPage.prototype.ionViewDidEnter = function () {
        this.deviceService.setSecureWindow();
    };
    SecretSetupPage.prototype.ionViewWillLeave = function () {
        this.deviceService.clearSecureWindow();
    };
    SecretSetupPage.prototype.goToGenerate = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var hasShownDisclaimer;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.get(_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["VaultStorageKey"].DISCLAIMER_GENERATE_INITIAL)];
                    case 1:
                        hasShownDisclaimer = _a.sent();
                        if (hasShownDisclaimer) {
                            this.navigationService.route('/secret-generate').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
                        }
                        else {
                            this.navigationService.route('/secret-generate-onboarding').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretSetupPage.prototype.goToImport = function () {
        this.navigationService.route('/secret-import').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
    };
    SecretSetupPage.prototype.goToSocialRecoveryImport = function () {
        this.navigationService.route('/social-recovery-import').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
    };
    SecretSetupPage.prototype.goToDiceRollPage = function () {
        this.navigationService.route('/secret-generate-dice').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
    };
    SecretSetupPage.prototype.goToCoinFlipPage = function () {
        this.navigationService.route('/secret-generate-coin-flip').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
    };
    SecretSetupPage.ɵfac = function SecretSetupPage_Factory(t) { return new (t || SecretSetupPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_device_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["VaultStorageService"])); };
    SecretSetupPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SecretSetupPage, selectors: [["airgap-secret-setup"]], decls: 37, vars: 30, consts: [[1, "ion-no-border"], [4, "ngIf"], [1, "ion-padding"], [1, "ion-padding-bottom"], ["color", "primary", "shape", "round", 1, "ion-margin-top", 3, "click"], ["slot", "start", "src", "assets/icons/md-edit.svg"], ["color", "tertiary", "shape", "round", 3, "click"], ["slot", "start", "src", "assets/icons/md-vertical_align_bottom.svg"], ["slot", "start", "src", "assets/icons/md-people.svg"], ["lines", "none", 1, "ion-padding-vertical", "ion-margin-bottom"], [1, "font--weight__med"], ["color", "primary", "slot", "end", 3, "ngModel", "ngModelChange"], ["slot", "start"], ["slot", "start", "name", "dice-outline"], ["slot", "start", "name", "ellipse-outline"]], template: function SecretSetupPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SecretSetupPage_ion_toolbar_1_Template, 3, 0, "ion-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ion-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretSetupPage_Template_ion_button_click_9_listener() { return ctx.goToGenerate(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ion-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretSetupPage_Template_ion_button_click_16_listener() { return ctx.goToImport(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretSetupPage_Template_ion_button_click_23_listener() { return ctx.goToSocialRecoveryImport(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "ion-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "ion-list", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "ion-item", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "ion-label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "ion-toggle", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SecretSetupPage_Template_ion_toggle_ngModelChange_35_listener($event) { return ctx.isAdvancedMode = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, SecretSetupPage_ng_container_36_Template, 15, 12, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.canGoBack);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 12, "secret-setup.heading"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 14, "secret-setup.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 16, "secret-setup.generate.label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 18, "secret-setup.generate.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 20, "secret-setup.import.label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 22, "secret-setup.import.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 24, "secret-setup.social-recovery.label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 26, "secret-setup.social-recovery.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 28, "wallet-select-coins.advanced_label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.isAdvancedMode);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isAdvancedMode);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonBackButtonDelegate"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNyZXQtc2V0dXAucGFnZS5zY3NzIn0= */"] });
    return SecretSetupPage;
}());



/***/ }),

/***/ "xijH":
/*!***********************************************************!*\
  !*** ./src/app/pages/secret-setup/secret-setup.module.ts ***!
  \***********************************************************/
/*! exports provided: SecretSetupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretSetupPageModule", function() { return SecretSetupPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _secret_setup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./secret-setup.page */ "HBY7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var routes = [
    {
        path: '',
        component: _secret_setup_page__WEBPACK_IMPORTED_MODULE_5__["SecretSetupPage"]
    }
];
var SecretSetupPageModule = /** @class */ (function () {
    function SecretSetupPageModule() {
    }
    SecretSetupPageModule.ɵfac = function SecretSetupPageModule_Factory(t) { return new (t || SecretSetupPageModule)(); };
    SecretSetupPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SecretSetupPageModule });
    SecretSetupPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return SecretSetupPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SecretSetupPageModule, { declarations: [_secret_setup_page__WEBPACK_IMPORTED_MODULE_5__["SecretSetupPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-secret-setup-secret-setup-module.js.map