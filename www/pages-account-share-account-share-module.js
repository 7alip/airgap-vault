(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-share-account-share-module"],{

/***/ "KpTN":
/*!***********************************************************!*\
  !*** ./src/app/pages/account-share/account-share.page.ts ***!
  \***********************************************************/
/*! exports provided: AccountSharePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSharePage", function() { return AccountSharePage; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function AccountSharePage_ion_row_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "airgap-iac-qr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("messageDefinitionObjects", ctx_r0.interactionUrl)("level", "L")("size", 300);
} }
function AccountSharePage_ion_row_14_pre_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "pre", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r2.interactionUrl));
} }
function AccountSharePage_ion_row_14_ion_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountSharePage_ion_row_14_ion_button_7_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r4.copyToClipboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Copy data to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountSharePage_ion_row_14_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "QR Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function AccountSharePage_ion_row_14_Template_ion_toggle_ionChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.displayRawData = !ctx_r6.displayRawData; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AccountSharePage_ion_row_14_pre_6_Template, 3, 3, "pre", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AccountSharePage_ion_row_14_ion_button_7_Template, 2, 0, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r1.displayRawData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.displayRawData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.displayRawData);
} }
var AccountSharePage = /** @class */ (function () {
    function AccountSharePage(navigationService, clipboardService) {
        this.navigationService = navigationService;
        this.clipboardService = clipboardService;
        this.interactionUrl = [];
        this.splits = [];
        this.displayRawData = false;
        this.interactionUrl = this.navigationService.getState().interactionUrl;
    }
    AccountSharePage.prototype.done = function () {
        this.navigationService.routeToAccountsTab().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_NAVIGATION));
    };
    AccountSharePage.prototype.copyToClipboard = function () {
        this.clipboardService.copyAndShowToast(JSON.stringify(this.interactionUrl));
    };
    AccountSharePage.ɵfac = function AccountSharePage_Factory(t) { return new (t || AccountSharePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["ClipboardService"])); };
    AccountSharePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AccountSharePage, selectors: [["airgap-account-share"]], decls: 19, vars: 14, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/tabs/tab-accounts"], [1, "ion-padding"], [1, "ion-padding-bottom", 3, "innerHTML"], ["class", "ion-justify-content-center ion-padding-bottom", 4, "ngIf"], [3, "innerHTML"], ["class", "rawdata--container", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "click"], [1, "ion-justify-content-center", "ion-padding-bottom"], [3, "messageDefinitionObjects", "level", "size"], [1, "rawdata--container"], [1, "ion-no-padding"], ["lines", "none", 1, "ion-no-padding"], ["slot", "end", 3, "checked", "ionChange"], ["class", "ion-no-margin", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "ion-no-margin"], [3, "click"]], template: function AccountSharePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "h3", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AccountSharePage_ion_row_10_Template, 2, 3, "ion-row", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AccountSharePage_ion_row_14_Template, 8, 3, "ion-row", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-fab", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountSharePage_Template_ion_button_click_16_listener() { return ctx.done(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "wallet-share.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 8, "wallet-share.heading"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.interactionUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 10, "wallet-share.text"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.interactionUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 12, "wallet-share.done_label"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["IACQrComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["BooleanValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: [".rawdata--container[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-grayLight);\n  padding: 8px;\n}\n\n.rawdata--container.ios[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n\n.rawdata--container.md[_ngcontent-%COMP%] {\n  margin-bottom: var(--margin-bottom);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnQtc2hhcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsNENBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsbUNBQUE7QUFERiIsImZpbGUiOiJhY2NvdW50LXNoYXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYXdkYXRhLS1jb250YWluZXIge1xuICBwcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5TGlnaHQpO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxufVxuXG4ucmF3ZGF0YS0tY29udGFpbmVyLmlvcyB7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbi5yYXdkYXRhLS1jb250YWluZXIubWQge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYXJnaW4tYm90dG9tKTtcbn1cbiJdfQ== */"] });
    return AccountSharePage;
}());



/***/ }),

/***/ "TO0U":
/*!*************************************************************!*\
  !*** ./src/app/pages/account-share/account-share.module.ts ***!
  \*************************************************************/
/*! exports provided: AccountSharePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSharePageModule", function() { return AccountSharePageModule; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _account_share_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-share.page */ "KpTN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










var routes = [
    {
        path: '',
        component: _account_share_page__WEBPACK_IMPORTED_MODULE_7__["AccountSharePage"]
    }
];
var AccountSharePageModule = /** @class */ (function () {
    function AccountSharePageModule() {
    }
    AccountSharePageModule.ɵfac = function AccountSharePageModule_Factory(t) { return new (t || AccountSharePageModule)(); };
    AccountSharePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AccountSharePageModule });
    AccountSharePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]
            ]] });
    return AccountSharePageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AccountSharePageModule, { declarations: [_account_share_page__WEBPACK_IMPORTED_MODULE_7__["AccountSharePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-account-share-account-share-module.js.map