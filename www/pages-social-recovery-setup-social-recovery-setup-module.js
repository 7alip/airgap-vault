(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-social-recovery-setup-social-recovery-setup-module"],{

/***/ "dEnf":
/*!***************************************************************************!*\
  !*** ./src/app/pages/social-recovery-setup/social-recovery-setup.page.ts ***!
  \***************************************************************************/
/*! exports provided: SocialRecoverySetupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoverySetupPage", function() { return SocialRecoverySetupPage; });
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bip39 */ "KckP");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_secret__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/secret */ "C2ta");
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device/device.service */ "2w9O");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");













function SocialRecoverySetupPage_ion_button_21_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SocialRecoverySetupPage_ion_button_21_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); var i_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.setNumberOfShares(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r2 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", i_r2 === ctx_r0.numberOfShares ? "primary" : "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r2, " ");
} }
function SocialRecoverySetupPage_ion_button_26_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SocialRecoverySetupPage_ion_button_26_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); var i_r5 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.setNumberOfRequiredShares(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r5 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", i_r5 === ctx_r1.numberOfRequiredShares ? "primary" : "tertiary")("disabled", i_r5 > ctx_r1.numberOfShares);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r5, " ");
} }
var _c0 = function () { return [2, 3, 4, 5, 6]; };
var SocialRecoverySetupPage = /** @class */ (function () {
    function SocialRecoverySetupPage(secretService, deviceService, navigationService) {
        this.secretService = secretService;
        this.deviceService = deviceService;
        this.navigationService = navigationService;
        this.numberOfShares = 3;
        this.numberOfRequiredShares = 2;
        this.secret = this.navigationService.getState().secret;
    }
    SocialRecoverySetupPage.prototype.ionViewDidEnter = function () {
        this.deviceService.setSecureWindow();
    };
    SocialRecoverySetupPage.prototype.ionViewWillLeave = function () {
        this.deviceService.clearSecureWindow();
    };
    SocialRecoverySetupPage.prototype.setNumberOfShares = function (i) {
        this.numberOfShares = i;
        if (this.numberOfRequiredShares > this.numberOfShares) {
            this.numberOfRequiredShares = this.numberOfShares;
        }
    };
    SocialRecoverySetupPage.prototype.setNumberOfRequiredShares = function (i) {
        this.numberOfRequiredShares = i;
    };
    SocialRecoverySetupPage.prototype.back = function () {
        this.navigationService.back();
    };
    SocialRecoverySetupPage.prototype.next = function () {
        var _this = this;
        this.secretService
            .retrieveEntropyForSecret(this.secret)
            .then(function (entropy) {
            var shares = _models_secret__WEBPACK_IMPORTED_MODULE_1__["MnemonicSecret"].generateSocialRecover(bip39__WEBPACK_IMPORTED_MODULE_0__["entropyToMnemonic"](entropy), _this.numberOfShares, _this.numberOfRequiredShares);
            _this.navigationService
                .routeWithState('/social-recovery-show-share', { shares: shares, currentShare: 0, secret: _this.secret })
                .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    SocialRecoverySetupPage.ɵfac = function SocialRecoverySetupPage_Factory(t) { return new (t || SocialRecoverySetupPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_device_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"])); };
    SocialRecoverySetupPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SocialRecoverySetupPage, selectors: [["airgap-social-recovery-setup"]], decls: 31, vars: 25, consts: [[1, "ion-no-border"], ["slot", "start"], [1, "ion-padding"], [1, "font--weight__med", "ion-padding-bottom"], [1, "font--weight__med"], [1, "ion-padding-bottom"], [1, "ion-padding-bottom", "button--rounded"], ["shape", "round", "color", "tertiary", 3, "color", "click", 4, "ngFor", "ngForOf"], [1, "button--rounded"], ["shape", "round", "color", "tertiary", 3, "color", "disabled", "click", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "click"], ["shape", "round", "color", "tertiary", 3, "color", "click"], ["shape", "round", "color", "tertiary", 3, "color", "disabled", "click"]], template: function SocialRecoverySetupPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-row", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, SocialRecoverySetupPage_ion_button_21_Template, 2, 2, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-row", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, SocialRecoverySetupPage_ion_button_26_Template, 2, 3, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "ion-fab", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "ion-button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SocialRecoverySetupPage_Template_ion_button_click_28_listener() { return ctx.next(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 9, "social-recovery-setup.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 11, "social-recovery-setup.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 13, "social-recovery-setup.secret-shares.label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 15, "social-recovery-setup.secret-shares.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 17, "social-recovery-setup.shares-number_label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](23, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 19, "social-recovery-setup.shares-recovery_label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](24, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 21, "social-recovery-setup.start_label"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".button--rounded[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-end: 0;\n  --padding-start: 0;\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvY2lhbC1yZWNvdmVyeS1zZXR1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzb2NpYWwtcmVjb3Zlcnktc2V0dXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi0tcm91bmRlZCBpb24tYnV0dG9uIHtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuIl19 */"] });
    return SocialRecoverySetupPage;
}());



/***/ }),

/***/ "xc5B":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/social-recovery-setup/social-recovery-setup.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SocialRecoverySetupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoverySetupPageModule", function() { return SocialRecoverySetupPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _social_recovery_setup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social-recovery-setup.page */ "dEnf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var routes = [
    {
        path: '',
        component: _social_recovery_setup_page__WEBPACK_IMPORTED_MODULE_5__["SocialRecoverySetupPage"]
    }
];
var SocialRecoverySetupPageModule = /** @class */ (function () {
    function SocialRecoverySetupPageModule() {
    }
    SocialRecoverySetupPageModule.ɵfac = function SocialRecoverySetupPageModule_Factory(t) { return new (t || SocialRecoverySetupPageModule)(); };
    SocialRecoverySetupPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SocialRecoverySetupPageModule });
    SocialRecoverySetupPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return SocialRecoverySetupPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SocialRecoverySetupPageModule, { declarations: [_social_recovery_setup_page__WEBPACK_IMPORTED_MODULE_5__["SocialRecoverySetupPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-social-recovery-setup-social-recovery-setup-module.js.map