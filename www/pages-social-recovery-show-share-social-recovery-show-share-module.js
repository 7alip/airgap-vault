(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-social-recovery-show-share-social-recovery-show-share-module"],{

/***/ "FTY+":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/social-recovery-show-share/social-recovery-show-share.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SocialRecoveryShowSharePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoveryShowSharePageModule", function() { return SocialRecoveryShowSharePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _social_recovery_show_share_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./social-recovery-show-share.page */ "jTHd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









var routes = [
    {
        path: '',
        component: _social_recovery_show_share_page__WEBPACK_IMPORTED_MODULE_6__["SocialRecoveryShowSharePage"]
    }
];
var SocialRecoveryShowSharePageModule = /** @class */ (function () {
    function SocialRecoveryShowSharePageModule() {
    }
    SocialRecoveryShowSharePageModule.ɵfac = function SocialRecoveryShowSharePageModule_Factory(t) { return new (t || SocialRecoveryShowSharePageModule)(); };
    SocialRecoveryShowSharePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SocialRecoveryShowSharePageModule });
    SocialRecoveryShowSharePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return SocialRecoveryShowSharePageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SocialRecoveryShowSharePageModule, { declarations: [_social_recovery_show_share_page__WEBPACK_IMPORTED_MODULE_6__["SocialRecoveryShowSharePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ }),

/***/ "jTHd":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/social-recovery-show-share/social-recovery-show-share.page.ts ***!
  \*************************************************************************************/
/*! exports provided: SocialRecoveryShowSharePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoveryShowSharePage", function() { return SocialRecoveryShowSharePage; });
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/device/device.service */ "2w9O");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/progress-footer/progress-footer.component */ "xjY1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function SocialRecoveryShowSharePage_h6_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.shares[ctx_r0.currentShare]);
} }
var _c0 = function (a0, a1) { return { currentShare: a0, shareLength: a1 }; };
var SocialRecoveryShowSharePage = /** @class */ (function () {
    function SocialRecoveryShowSharePage(deviceService, navigationService) {
        this.deviceService = deviceService;
        this.navigationService = navigationService;
        this.currentShare = 0;
        this.shares = this.navigationService.getState().shares;
        this.secret = this.navigationService.getState().secret;
    }
    SocialRecoveryShowSharePage.prototype.ionViewDidEnter = function () {
        this.deviceService.enableScreenshotProtection({ routeBack: 'social-recovery-setup' });
        this.currentShare = this.navigationService.getState().currentShare;
    };
    SocialRecoveryShowSharePage.prototype.ionViewWillLeave = function () {
        this.deviceService.disableScreenshotProtection();
    };
    SocialRecoveryShowSharePage.prototype.back = function () {
        this.navigationService.back();
    };
    SocialRecoveryShowSharePage.prototype.next = function () {
        this.navigationService
            .routeWithState('/social-recovery-validate-share', { shares: this.shares, currentShare: this.currentShare, secret: this.secret })
            .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__["ErrorCategory"].IONIC_NAVIGATION));
    };
    SocialRecoveryShowSharePage.ɵfac = function SocialRecoveryShowSharePage_Factory(t) { return new (t || SocialRecoveryShowSharePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_device_device_service__WEBPACK_IMPORTED_MODULE_0__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"])); };
    SocialRecoveryShowSharePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SocialRecoveryShowSharePage, selectors: [["airgap-social-recovery-show-share"]], decls: 15, vars: 17, consts: [[1, "ion-no-border"], [1, "ion-padding"], [1, "font--weight__med", "ion-padding-bottom"], [1, "ion-padding-bottom"], ["class", "typography--mono", 4, "ngIf"], ["color", "primary", 1, "ion-no-border"], [3, "progress", "maxProgress", "rightAction"], [1, "typography--mono"]], template: function SocialRecoveryShowSharePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SocialRecoveryShowSharePage_h6_12_Template, 2, 1, "h6", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-footer", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "airgap-progress-footer", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 7, "social-recovery-show-share.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 9, "social-recovery-show-share.secret-shares_label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](14, _c0, ctx.currentShare + 1, ctx.shares == null ? null : ctx.shares.length)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 12, "social-recovery-show-share.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.shares);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("progress", ctx.currentShare * 2)("maxProgress", ctx.shares.length * 2)("rightAction", ctx.next.bind(ctx));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _components_progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_6__["ProgressFooterComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".typography--mono[_ngcontent-%COMP%] {\n  line-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvY2lhbC1yZWNvdmVyeS1zaG93LXNoYXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoic29jaWFsLXJlY292ZXJ5LXNob3ctc2hhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR5cG9ncmFwaHktLW1vbm8ge1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cbiJdfQ== */"] });
    return SocialRecoveryShowSharePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-social-recovery-show-share-social-recovery-show-share-module.js.map