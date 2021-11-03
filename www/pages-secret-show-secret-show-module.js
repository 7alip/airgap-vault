(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-secret-show-secret-show-module"],{

/***/ "2brG":
/*!*********************************************************!*\
  !*** ./src/app/pages/secret-show/secret-show.module.ts ***!
  \*********************************************************/
/*! exports provided: SecretShowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretShowPageModule", function() { return SecretShowPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _secret_show_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./secret-show.page */ "VQzW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








// import { SecretValidatePageModule } from '../secret-validate/secret-validate.module'
var routes = [
    {
        path: '',
        component: _secret_show_page__WEBPACK_IMPORTED_MODULE_5__["SecretShowPage"]
    }
];
var SecretShowPageModule = /** @class */ (function () {
    function SecretShowPageModule() {
    }
    SecretShowPageModule.ɵfac = function SecretShowPageModule_Factory(t) { return new (t || SecretShowPageModule)(); };
    SecretShowPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SecretShowPageModule });
    SecretShowPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return SecretShowPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SecretShowPageModule, { declarations: [_secret_show_page__WEBPACK_IMPORTED_MODULE_5__["SecretShowPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ }),

/***/ "VQzW":
/*!*******************************************************!*\
  !*** ./src/app/pages/secret-show/secret-show.page.ts ***!
  \*******************************************************/
/*! exports provided: SecretShowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretShowPage", function() { return SecretShowPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "bl9C");
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/device/device.service */ "2w9O");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");













var SecretShowPage = /** @class */ (function () {
    function SecretShowPage(deviceService, navigationService, alertController, translateService) {
        this.deviceService = deviceService;
        this.navigationService = navigationService;
        this.alertController = alertController;
        this.translateService = translateService;
        this.startTime = new Date();
        this.secret = this.navigationService.getState().secret;
    }
    SecretShowPage.prototype.ionViewDidEnter = function () {
        this.deviceService.enableScreenshotProtection({ routeBack: 'secret-setup' });
    };
    SecretShowPage.prototype.ionViewWillLeave = function () {
        this.deviceService.disableScreenshotProtection();
    };
    SecretShowPage.prototype.goToValidateSecret = function () {
        var _this = this;
        if (this.startTime.getTime() + _constants_constants__WEBPACK_IMPORTED_MODULE_4__["SHOW_SECRET_MIN_TIME_IN_SECONDS"] * 1000 > new Date().getTime()) {
            this.translateService
                .get([
                'secret-show.too-fast_alert.title',
                'secret-show.too-fast_alert.heading',
                'secret-show.too-fast_alert.text',
                'secret-show.too-fast_alert.wait_label_p1',
                'secret-show.too-fast_alert.wait_label_p2'
            ])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .subscribe(function (values) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var title, heading, text, waitLabelP1, waitLabelP2, alert;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            title = values['secret-show.too-fast_alert.title'];
                            heading = values['secret-show.too-fast_alert.heading'];
                            text = values['secret-show.too-fast_alert.text'];
                            waitLabelP1 = values['secret-show.too-fast_alert.wait_label_p1'];
                            waitLabelP2 = values['secret-show.too-fast_alert.wait_label_p2'];
                            return [4 /*yield*/, this.alertController.create({
                                    header: title,
                                    message: [
                                        heading,
                                        '<br/>',
                                        text,
                                        '<br/>',
                                        waitLabelP1,
                                        '<strong>',
                                        _constants_constants__WEBPACK_IMPORTED_MODULE_4__["SHOW_SECRET_MIN_TIME_IN_SECONDS"].toString(),
                                        waitLabelP2,
                                        '</strong>'
                                    ].join(''),
                                    buttons: ['Okay']
                                })];
                        case 1:
                            alert = _a.sent();
                            alert.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_ALERT));
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            this.navigationService
                .routeWithState('secret-validate', { secret: this.secret })
                .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_NAVIGATION));
        }
    };
    SecretShowPage.ɵfac = function SecretShowPage_Factory(t) { return new (t || SecretShowPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_device_device_service__WEBPACK_IMPORTED_MODULE_5__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
    SecretShowPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: SecretShowPage, selectors: [["airgap-secret-show"]], decls: 17, vars: 10, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/secret-setup"], [1, "ion-padding", "colored-background"], [1, "ion-padding-bottom"], [1, "typography--mono"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["shape", "round", "color", "primary", 3, "click"]], template: function SecretShowPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-back-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "h6", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "ion-fab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SecretShowPage_Template_ion_button_click_14_listener() { return ctx.goToValidateSecret(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 4, "secret-show.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 6, "secret-show.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.secret.recoverMnemonicFromHex(ctx.secret.secretHex));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 8, "secret-show.next-step_label"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".typography--mono[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n  line-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlY3JldC1zaG93LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJzZWNyZXQtc2hvdy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwb2dyYXBoeS0tbW9ubyB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuIl19 */"] });
    return SecretShowPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-secret-show-secret-show-module.js.map