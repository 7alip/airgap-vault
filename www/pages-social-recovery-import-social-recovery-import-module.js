(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-social-recovery-import-social-recovery-import-module"],{

/***/ "5KwK":
/*!**************************************************!*\
  !*** ./src/app/validators/mnemonic.validator.ts ***!
  \**************************************************/
/*! exports provided: MnemonicValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnemonicValidator", function() { return MnemonicValidator; });
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bip39 */ "KckP");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_BIP39Signer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/BIP39Signer */ "yGLx");


var MnemonicValidator = /** @class */ (function () {
    function MnemonicValidator() {
    }
    MnemonicValidator.checkMnemonic = function (mnemonic, wordlist) {
        var words = _models_BIP39Signer__WEBPACK_IMPORTED_MODULE_1__["BIPSigner"].prepareMnemonic(mnemonic).split(' ');
        if (words.length % 3 !== 0) {
            throw new Error('invalid secret');
        }
        words.forEach(function (word) {
            var index = wordlist.indexOf(word);
            if (index === -1) {
                throw new Error('invalid secret');
            }
        });
    };
    MnemonicValidator.isValidShare = function (control) {
        try {
            MnemonicValidator.checkMnemonic(control.value, bip39__WEBPACK_IMPORTED_MODULE_0__["wordlists"].EN); // TODO: Fix typing (check what it actually is)
        }
        catch (e) {
            return {
                'not a social mnemonic share': true
            };
        }
        return null;
    };
    MnemonicValidator.isValid = function (control) {
        if (control.value && _models_BIP39Signer__WEBPACK_IMPORTED_MODULE_1__["BIPSigner"].validateMnemonic(control.value)) {
            return null;
        }
        return {
            'not a mnemonic': true
        };
    };
    return MnemonicValidator;
}());



/***/ }),

/***/ "CyH1":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/social-recovery-import/social-recovery-import.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SocialRecoveryImportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoveryImportPageModule", function() { return SocialRecoveryImportPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _social_recovery_import_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social-recovery-import.page */ "Q77t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var routes = [
    {
        path: '',
        component: _social_recovery_import_page__WEBPACK_IMPORTED_MODULE_5__["SocialRecoveryImportPage"]
    }
];
var SocialRecoveryImportPageModule = /** @class */ (function () {
    function SocialRecoveryImportPageModule() {
    }
    SocialRecoveryImportPageModule.ɵfac = function SocialRecoveryImportPageModule_Factory(t) { return new (t || SocialRecoveryImportPageModule)(); };
    SocialRecoveryImportPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SocialRecoveryImportPageModule });
    SocialRecoveryImportPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return SocialRecoveryImportPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SocialRecoveryImportPageModule, { declarations: [_social_recovery_import_page__WEBPACK_IMPORTED_MODULE_5__["SocialRecoveryImportPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ }),

/***/ "Q77t":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/social-recovery-import/social-recovery-import.page.ts ***!
  \*****************************************************************************/
/*! exports provided: SocialRecoveryImportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoveryImportPage", function() { return SocialRecoveryImportPage; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_secret__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/secret */ "C2ta");
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device/device.service */ "2w9O");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _validators_mnemonic_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validators/mnemonic.validator */ "5KwK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");













function SocialRecoveryImportPage_ion_button_15_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SocialRecoveryImportPage_ion_button_15_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); var i_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.setNumberOfShares(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r2 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", i_r2 === ctx_r0.numberOfShares ? "primary" : "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r2, " ");
} }
function SocialRecoveryImportPage_ion_list_16_ion_item_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SocialRecoveryImportPage_ion_list_16_ion_item_2_Template_ion_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); var i_r6 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return (ctx_r7.shares[i_r6] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r6 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, "social-recovery-import.share-recovery.label"), " ", i_r6 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlName", "share_" + i_r6)("ngModel", ctx_r5.shares[i_r6]);
} }
function SocialRecoveryImportPage_ion_list_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SocialRecoveryImportPage_ion_list_16_ion_item_2_Template, 5, 6, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.socialRecoveryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.getNumberArray(ctx_r1.numberOfShares));
} }
var _c0 = function () { return [2, 3, 4, 5, 6]; };
var SocialRecoveryImportPage = /** @class */ (function () {
    function SocialRecoveryImportPage(deviceService, navigationService, formBuilder) {
        this.deviceService = deviceService;
        this.navigationService = navigationService;
        this.formBuilder = formBuilder;
        this.setNumberOfShares(2);
    }
    SocialRecoveryImportPage.prototype.ionViewDidEnter = function () {
        this.deviceService.enableScreenshotProtection({ routeBack: 'secret-setup' });
    };
    SocialRecoveryImportPage.prototype.ionViewWillLeave = function () {
        this.deviceService.disableScreenshotProtection();
    };
    SocialRecoveryImportPage.prototype.setNumberOfShares = function (i) {
        var _this = this;
        this.numberOfShares = i;
        this.shares = Array(i);
        var formGroup = {};
        this.getNumberArray(i).forEach(function (i) {
            formGroup['share_' + i.toString()] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_mnemonic_validator__WEBPACK_IMPORTED_MODULE_5__["MnemonicValidator"].isValidShare])];
            if (_this.socialRecoveryForm && _this.socialRecoveryForm.value['share_' + i.toString()]) {
                formGroup['share_' + i.toString()][0] = _this.socialRecoveryForm.value['share_' + i.toString()];
            }
        });
        this.socialRecoveryForm = this.formBuilder.group(formGroup);
    };
    SocialRecoveryImportPage.prototype.recover = function () {
        try {
            var secretString = _models_secret__WEBPACK_IMPORTED_MODULE_1__["MnemonicSecret"].recoverSecretFromShares(this.shares);
            this.navigationService
                .routeWithState('secret-add', { secret: new _models_secret__WEBPACK_IMPORTED_MODULE_1__["MnemonicSecret"](secretString, 'Recovery by Social Recovery') })
                .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
        }
        catch (error) {
            console.log('oops');
        }
    };
    SocialRecoveryImportPage.prototype.back = function () {
        this.navigationService.back();
    };
    SocialRecoveryImportPage.prototype.getNumberArray = function (numberOfElements) {
        return Array(numberOfElements)
            .fill(0)
            .map(function (_value, index) { return index; });
    };
    SocialRecoveryImportPage.ɵfac = function SocialRecoveryImportPage_Factory(t) { return new (t || SocialRecoveryImportPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_device_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
    SocialRecoveryImportPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SocialRecoveryImportPage, selectors: [["airgap-social-recovery-import"]], decls: 21, vars: 16, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/secret-setup"], [1, "ion-padding"], [1, "ion-padding-bottom"], [1, "font--weight__med"], [1, "button--rounded"], ["shape", "round", "color", "secondary-light", 3, "color", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "disabled", "click"], ["shape", "round", "color", "secondary-light", 3, "color", "click"], [3, "formGroup"], ["class", "ion-no-padding ion-margin-bottom", 4, "ngFor", "ngForOf"], [1, "ion-no-padding", "ion-margin-bottom"], ["color", "primary", "position", "stacked"], ["placeholder", "duck goose dinosaur ...", 3, "formControlName", "ngModel", "ngModelChange"]], template: function SocialRecoveryImportPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ion-row", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, SocialRecoveryImportPage_ion_button_15_Template, 2, 2, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SocialRecoveryImportPage_ion_list_16_Template, 3, 2, "ion-list", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-fab", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SocialRecoveryImportPage_Template_ion_button_click_18_listener() { return ctx.recover(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 7, "social-recovery-import.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 9, "social-recovery-import.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 11, "social-recovery-import.share-recovery.heading"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.shares);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.socialRecoveryForm.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 13, "social-recovery-import.recover_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonList"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".button--rounded[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-end: 0;\n  --padding-start: 0;\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvY2lhbC1yZWNvdmVyeS1pbXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic29jaWFsLXJlY292ZXJ5LWltcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLS1yb3VuZGVkIGlvbi1idXR0b24ge1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4iXX0= */"] });
    return SocialRecoveryImportPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-social-recovery-import-social-recovery-import-module.js.map