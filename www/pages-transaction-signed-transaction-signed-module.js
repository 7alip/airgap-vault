(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transaction-signed-transaction-signed-module"],{

/***/ "uMJp":
/*!***********************************************************************!*\
  !*** ./src/app/pages/transaction-signed/transaction-signed.module.ts ***!
  \***********************************************************************/
/*! exports provided: TransactionSignedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionSignedPageModule", function() { return TransactionSignedPageModule; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _transaction_signed_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transaction-signed.page */ "vLy2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










var routes = [
    {
        path: '',
        component: _transaction_signed_page__WEBPACK_IMPORTED_MODULE_7__["TransactionSignedPage"]
    }
];
var TransactionSignedPageModule = /** @class */ (function () {
    function TransactionSignedPageModule() {
    }
    TransactionSignedPageModule.ɵfac = function TransactionSignedPageModule_Factory(t) { return new (t || TransactionSignedPageModule)(); };
    TransactionSignedPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: TransactionSignedPageModule });
    TransactionSignedPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]
            ]] });
    return TransactionSignedPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TransactionSignedPageModule, { declarations: [_transaction_signed_page__WEBPACK_IMPORTED_MODULE_7__["TransactionSignedPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]] }); })();


/***/ }),

/***/ "vLy2":
/*!*********************************************************************!*\
  !*** ./src/app/pages/transaction-signed/transaction-signed.page.ts ***!
  \*********************************************************************/
/*! exports provided: TransactionSignedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionSignedPage", function() { return TransactionSignedPage; });
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _components_message_sign_response_message_sign_response_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/message-sign-response/message-sign-response.component */ "Eyg1");
/* harmony import */ var _components_signed_transaction_signed_transaction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/signed-transaction/signed-transaction.component */ "RLm3");











function TransactionSignedPage_airgap_iac_qr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "airgap-iac-qr", 10);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("level", "L")("messageDefinitionObjects", ctx_r0.interactionUrl)("size", 300);
} }
function TransactionSignedPage_airgap_qr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "airgap-qr", 11);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("level", "L")("qrdata", ctx_r1.signedTxs)("size", 300);
} }
function TransactionSignedPage_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "airgap-message-sign-response", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("messageSignResponse", ctx_r2.messageSignResponse);
} }
function TransactionSignedPage_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "airgap-signed-transaction", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("signedTxs", ctx_r3.interactionUrl);
} }
var TransactionQRType;
(function (TransactionQRType) {
    TransactionQRType[TransactionQRType["SignedAirGap"] = 0] = "SignedAirGap";
    TransactionQRType[TransactionQRType["SignedRaw"] = 1] = "SignedRaw";
})(TransactionQRType || (TransactionQRType = {}));
var TransactionSignedPage = /** @class */ (function () {
    function TransactionSignedPage(navigationService, translateService) {
        this.navigationService = navigationService;
        this.translateService = translateService;
        this.qrType = 0;
        this.interactionUrl = this.navigationService.getState().interactionUrl;
        this.wallets = this.navigationService.getState().wallets;
        this.signedTxs = this.navigationService.getState().signedTxs;
        this.translationKey = this.navigationService.getState().translationKey;
        this.pageTitle = this.translateService.instant(this.translationKey + ".title");
        this.heading = this.translateService.instant(this.translationKey + ".heading");
        this.messageSignResponse = this.navigationService.getState().messageSignResponse;
    }
    TransactionSignedPage.prototype.done = function () {
        this.navigationService.routeToAccountsTab().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_0__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_0__["ErrorCategory"].IONIC_NAVIGATION));
    };
    TransactionSignedPage.ɵfac = function TransactionSignedPage_Factory(t) { return new (t || TransactionSignedPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
    TransactionSignedPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TransactionSignedPage, selectors: [["airgap-transaction-signed"]], decls: 17, vars: 9, consts: [[1, "ion-no-border"], ["slot", "start"], [1, "ion-padding"], [3, "innerHTML"], [1, "ion-justify-content-center", "ion-padding-top"], [3, "level", "messageDefinitionObjects", "size", 4, "ngIf"], [3, "level", "qrdata", "size", 4, "ngIf"], [4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "click"], [3, "level", "messageDefinitionObjects", "size"], [3, "level", "qrdata", "size"], [3, "messageSignResponse"], [3, "signedTxs"]], template: function TransactionSignedPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-row", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, TransactionSignedPage_airgap_iac_qr_9_Template, 1, 3, "airgap-iac-qr", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, TransactionSignedPage_airgap_qr_10_Template, 1, 3, "airgap-qr", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, TransactionSignedPage_ng_container_11_Template, 2, 1, "ng-container", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TransactionSignedPage_ng_container_12_Template, 2, 1, "ng-container", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-fab", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionSignedPage_Template_ion_button_click_14_listener() { return ctx.done(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.pageTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.heading, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.interactionUrl && ctx.qrType === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signedTxs && ctx.qrType === 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.messageSignResponse);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signedTxs);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 7, "transaction-signed.done_label"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_6__["IACQrComponent"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_6__["QrComponent"], _components_message_sign_response_message_sign_response_component__WEBPACK_IMPORTED_MODULE_7__["MessageSignResponseComponent"], _components_signed_transaction_signed_transaction_component__WEBPACK_IMPORTED_MODULE_8__["SignedTransactionComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["airgap-qr[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 340px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYW5zYWN0aW9uLXNpZ25lZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InRyYW5zYWN0aW9uLXNpZ25lZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhaXJnYXAtcXIge1xuICB3aWR0aDogMzQwcHg7XG4gIGhlaWdodDogMzQwcHg7XG59XG4iXX0= */"] });
    return TransactionSignedPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-transaction-signed-transaction-signed-module.js.map