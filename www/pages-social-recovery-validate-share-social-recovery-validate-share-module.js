(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-social-recovery-validate-share-social-recovery-validate-share-module"],{

/***/ "17zy":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/social-recovery-validate-share/social-recovery-validate-share.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: SocialRecoveryValidateSharePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoveryValidateSharePage", function() { return SocialRecoveryValidateSharePage; });
/* harmony import */ var _components_verify_key_verify_key_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/verify-key/verify-key.component */ "ut9t");
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/device/device.service */ "2w9O");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/progress-footer/progress-footer.component */ "xjY1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














var _c0 = ["verify"];
function SocialRecoveryValidateSharePage_airgap_verify_key_9_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "airgap-verify-key", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onComplete", function SocialRecoveryValidateSharePage_airgap_verify_key_9_Template_airgap_verify_key_onComplete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.onComplete($event); })("onContinue", function SocialRecoveryValidateSharePage_airgap_verify_key_9_Template_airgap_verify_key_onContinue_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.onContinue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("secret", ctx_r0.shares[ctx_r0.currentShare]);
} }
var SocialRecoveryValidateSharePage = /** @class */ (function () {
    function SocialRecoveryValidateSharePage(deviceService, navigationService, secretsService) {
        this.deviceService = deviceService;
        this.navigationService = navigationService;
        this.secretsService = secretsService;
        this.validated = false;
        this.shares = this.navigationService.getState().shares;
        this.secret = this.navigationService.getState().secret;
        this.currentShare = this.navigationService.getState().currentShare;
    }
    SocialRecoveryValidateSharePage.prototype.ionViewDidEnter = function () {
        this.deviceService.enableScreenshotProtection({ routeBack: 'social-recovery-setup' });
    };
    SocialRecoveryValidateSharePage.prototype.ionViewWillLeave = function () {
        this.deviceService.disableScreenshotProtection();
    };
    SocialRecoveryValidateSharePage.prototype.onComplete = function (isCorrect) {
        this.validated = isCorrect;
    };
    SocialRecoveryValidateSharePage.prototype.onContinue = function () {
        this.next.bind(this)();
    };
    SocialRecoveryValidateSharePage.prototype.back = function () {
        this.navigationService.back();
    };
    SocialRecoveryValidateSharePage.prototype.next = function () {
        var _this = this;
        if (this.shares.length === this.currentShare + 1) {
            this.secret.hasSocialRecovery = true;
            this.secretsService
                .addOrUpdateSecret(this.secret)
                .then(function () {
                // TODO: Route back to secret detail page
                _this.navigationService.route('/tabs/tab-settings').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_NAVIGATION));
            })
                .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].SECURE_STORAGE));
        }
        else {
            this.navigationService
                .routeWithState('/social-recovery-show-share', { shares: this.shares, currentShare: this.currentShare + 1, secret: this.secret })
                .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_NAVIGATION));
        }
    };
    SocialRecoveryValidateSharePage.ɵfac = function SocialRecoveryValidateSharePage_Factory(t) { return new (t || SocialRecoveryValidateSharePage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_device_device_service__WEBPACK_IMPORTED_MODULE_1__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_4__["SecretsService"])); };
    SocialRecoveryValidateSharePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SocialRecoveryValidateSharePage, selectors: [["airgap-social-recovery-validate-share"]], viewQuery: function SocialRecoveryValidateSharePage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.verify = _t.first);
        } }, decls: 12, vars: 12, consts: [[1, "ion-no-border"], [1, "ion-padding-horizontal"], [3, "secret", "onComplete", "onContinue", 4, "ngIf"], ["color", "primary", 1, "ion-no-border"], [3, "rightEnabled", "progress", "maxProgress", "rightAction", "rightLabel"], [3, "secret", "onComplete", "onContinue"], ["verify", ""]], template: function SocialRecoveryValidateSharePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SocialRecoveryValidateSharePage_airgap_verify_key_9_Template, 2, 1, "airgap-verify-key", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-footer", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "airgap-progress-footer", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 8, "social-recovery-validate-share.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 10, "social-recovery-validate-share.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.shares);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rightEnabled", ctx.validated)("progress", ctx.currentShare * 2 + 1)("maxProgress", ctx.shares.length * 2)("rightAction", ctx.next.bind(ctx))("rightLabel", ctx.shares.length - 1 === ctx.currentShare ? "Finish" : "Next");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonFooter"], _components_progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_8__["ProgressFooterComponent"], _components_verify_key_verify_key_component__WEBPACK_IMPORTED_MODULE_0__["VerifyKeyComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtcmVjb3ZlcnktdmFsaWRhdGUtc2hhcmUucGFnZS5zY3NzIn0= */"] });
    return SocialRecoveryValidateSharePage;
}());



/***/ }),

/***/ "PPkV":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/social-recovery-validate-share/social-recovery-validate-share.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: SocialRecoveryValidateSharePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoveryValidateSharePageModule", function() { return SocialRecoveryValidateSharePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _social_recovery_validate_share_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./social-recovery-validate-share.page */ "17zy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









var routes = [
    {
        path: '',
        component: _social_recovery_validate_share_page__WEBPACK_IMPORTED_MODULE_6__["SocialRecoveryValidateSharePage"]
    }
];
var SocialRecoveryValidateSharePageModule = /** @class */ (function () {
    function SocialRecoveryValidateSharePageModule() {
    }
    SocialRecoveryValidateSharePageModule.ɵfac = function SocialRecoveryValidateSharePageModule_Factory(t) { return new (t || SocialRecoveryValidateSharePageModule)(); };
    SocialRecoveryValidateSharePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SocialRecoveryValidateSharePageModule });
    SocialRecoveryValidateSharePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return SocialRecoveryValidateSharePageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SocialRecoveryValidateSharePageModule, { declarations: [_social_recovery_validate_share_page__WEBPACK_IMPORTED_MODULE_6__["SocialRecoveryValidateSharePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-social-recovery-validate-share-social-recovery-validate-share-module.js.map