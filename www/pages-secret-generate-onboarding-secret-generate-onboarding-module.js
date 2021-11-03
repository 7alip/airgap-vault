(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-secret-generate-onboarding-secret-generate-onboarding-module"],{

/***/ "/XGh":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/secret-generate-onboarding/secret-generate-onboarding.page.ts ***!
  \*************************************************************************************/
/*! exports provided: SecretGenerateOnboardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretGenerateOnboardingPage", function() { return SecretGenerateOnboardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









var SecretGenerateOnboardingPage = /** @class */ (function () {
    function SecretGenerateOnboardingPage(navigationService, storageService) {
        this.navigationService = navigationService;
        this.storageService = storageService;
    }
    SecretGenerateOnboardingPage.prototype.continue = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.set(_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["VaultStorageKey"].DISCLAIMER_GENERATE_INITIAL, true)];
                    case 1:
                        _a.sent();
                        this.navigationService.route('secret-generate').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__["ErrorCategory"].IONIC_NAVIGATION));
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretGenerateOnboardingPage.ɵfac = function SecretGenerateOnboardingPage_Factory(t) { return new (t || SecretGenerateOnboardingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["VaultStorageService"])); };
    SecretGenerateOnboardingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SecretGenerateOnboardingPage, selectors: [["airgap-secret-generate-onboarding"]], decls: 16, vars: 9, consts: [[1, "ion-no-border"], ["slot", "start"], [1, "ion-padding"], [3, "innerHTML"], [1, "ion-justify-content-center", "ion-padding-vertical"], ["src", "./assets/img/permission_onboarding.svg"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "click"]], template: function SecretGenerateOnboardingPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-row", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-fab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SecretGenerateOnboardingPage_Template_ion_button_click_13_listener() { return ctx.continue(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 3, "secret-generate-onboarding.heading"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 5, "secret-generate-onboarding.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 7, "secret-generate-onboarding.grant-permission_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["img[_ngcontent-%COMP%] {\n  height: 45vh;\n}\n\n\n\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlY3JldC1nZW5lcmF0ZS1vbmJvYXJkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFDQSx5REFBQTs7QUFDQTtFQUNFLFNBQUE7QUFFRiIsImZpbGUiOiJzZWNyZXQtZ2VuZXJhdGUtb25ib2FyZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBoZWlnaHQ6IDQ1dmg7XG59XG4vKiBoMSBtYXJnaW4gZml4IGFzIGlvbi1uby1tYXJnaW4gZG9lc24ndCBzZWVtIHRvIGFwcGx5ICovXG5oMSB7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */"] });
    return SecretGenerateOnboardingPage;
}());



/***/ }),

/***/ "IH1m":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/secret-generate-onboarding/secret-generate-onboarding.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SecretGenerateOnboardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretGenerateOnboardingPageModule", function() { return SecretGenerateOnboardingPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _secret_generate_onboarding_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./secret-generate-onboarding.page */ "/XGh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var routes = [
    {
        path: '',
        component: _secret_generate_onboarding_page__WEBPACK_IMPORTED_MODULE_5__["SecretGenerateOnboardingPage"]
    }
];
var SecretGenerateOnboardingPageModule = /** @class */ (function () {
    function SecretGenerateOnboardingPageModule() {
    }
    SecretGenerateOnboardingPageModule.ɵfac = function SecretGenerateOnboardingPageModule_Factory(t) { return new (t || SecretGenerateOnboardingPageModule)(); };
    SecretGenerateOnboardingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SecretGenerateOnboardingPageModule });
    SecretGenerateOnboardingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return SecretGenerateOnboardingPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SecretGenerateOnboardingPageModule, { declarations: [_secret_generate_onboarding_page__WEBPACK_IMPORTED_MODULE_5__["SecretGenerateOnboardingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-secret-generate-onboarding-secret-generate-onboarding-module.js.map