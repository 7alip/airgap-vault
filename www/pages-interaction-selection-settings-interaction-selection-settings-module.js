(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-interaction-selection-settings-interaction-selection-settings-module"],{

/***/ "EeFB":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/interaction-selection-settings/interaction-selection-settings.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: InteractionSelectionSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionSelectionSettingsPageModule", function() { return InteractionSelectionSettingsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _interaction_selection_settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interaction-selection-settings.page */ "umNc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var routes = [
    {
        path: '',
        component: _interaction_selection_settings_page__WEBPACK_IMPORTED_MODULE_5__["InteractionSelectionSettingsPage"]
    }
];
var InteractionSelectionSettingsPageModule = /** @class */ (function () {
    function InteractionSelectionSettingsPageModule() {
    }
    InteractionSelectionSettingsPageModule.ɵfac = function InteractionSelectionSettingsPageModule_Factory(t) { return new (t || InteractionSelectionSettingsPageModule)(); };
    InteractionSelectionSettingsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: InteractionSelectionSettingsPageModule });
    InteractionSelectionSettingsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return InteractionSelectionSettingsPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](InteractionSelectionSettingsPageModule, { declarations: [_interaction_selection_settings_page__WEBPACK_IMPORTED_MODULE_5__["InteractionSelectionSettingsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ }),

/***/ "umNc":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/interaction-selection-settings/interaction-selection-settings.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: InteractionSelectionSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionSelectionSettingsPage", function() { return InteractionSelectionSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "E2f4");
/* harmony import */ var _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/interaction/interaction.service */ "rYTG");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");












function InteractionSelectionSettingsPage_h3_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, "interaction-selection-settings.same-device_heading"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function InteractionSelectionSettingsPage_h3_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, "interaction-selection-settings.offline-device_heading"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
var InteractionSelectionSettingsPage = /** @class */ (function () {
    function InteractionSelectionSettingsPage(navigationService, interactionService, storageService) {
        this.navigationService = navigationService;
        this.interactionService = interactionService;
        this.storageService = storageService;
        this.interactionType = src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["InteractionType"];
        this.isEdit = false;
        this.interactionOptions = this.navigationService.getState().interactionOptions;
    }
    InteractionSelectionSettingsPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storageService.get(src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["VaultStorageKey"].INTERACTION_TYPE)];
                    case 1:
                        _a.selectedType = _b.sent();
                        if (this.selectedType === src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["InteractionType"].UNDETERMINED) {
                            if (this.interactionOptions) {
                                this.selectedType =
                                    this.interactionOptions.communicationType === _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionCommunicationType"].QR
                                        ? src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["InteractionType"].QR_CODE
                                        : this.interactionOptions.communicationType === _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionCommunicationType"].DEEPLINK
                                            ? src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["InteractionType"].DEEPLINK
                                            : undefined;
                            }
                            else {
                                this.selectedType = src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["InteractionType"].ALWAYS_ASK;
                            }
                        }
                        this.initialType = this.selectedType;
                        return [2 /*return*/];
                }
            });
        });
    };
    InteractionSelectionSettingsPage.prototype.goToNextPage = function () {
        if (this.selectedType) {
            this.storageService.set(src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["VaultStorageKey"].INTERACTION_TYPE, this.selectedType);
        }
        if (this.interactionOptions) {
            this.interactionService.startInteraction(this.interactionOptions);
        }
        else {
            this.navigationService.back();
        }
    };
    InteractionSelectionSettingsPage.ɵfac = function InteractionSelectionSettingsPage_Factory(t) { return new (t || InteractionSelectionSettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["VaultStorageService"])); };
    InteractionSelectionSettingsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: InteractionSelectionSettingsPage, selectors: [["airgap-interaction-selection-settings"]], decls: 37, vars: 27, consts: [[1, "ion-no-border"], ["slot", "start"], [1, "ion-padding"], [3, "innerHTML", 4, "ngIf"], ["lines", "none", 1, "ion-padding-vertical"], [3, "ngModel", "ngModelChange"], ["detail", "false", 1, "ion-no-padding"], ["color", "white"], ["slot", "end", 1, "ion-no-margin", 3, "value"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "click"], [3, "innerHTML"]], template: function InteractionSelectionSettingsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InteractionSelectionSettingsPage_h3_8_Template, 2, 3, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InteractionSelectionSettingsPage_h3_9_Template, 2, 3, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-list", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-radio-group", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InteractionSelectionSettingsPage_Template_ion_radio_group_ngModelChange_14_listener($event) { return ctx.selectedType = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-item", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "ion-radio", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-item", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ion-label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "ion-radio", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ion-item", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ion-label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "ion-radio", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ion-fab", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ion-button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InteractionSelectionSettingsPage_Template_ion_button_click_34_listener() { return ctx.goToNextPage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 13, "interaction-selection-settings.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.initialType === ctx.interactionType.DEEPLINK);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.initialType === ctx.interactionType.QR_CODE);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 15, "interaction-selection-settings.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedType);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 17, "interaction-selection-settings.selector.always"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.interactionType.ALWAYS_ASK);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 19, "interaction-selection-settings.selector.same-device"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.interactionType.DEEPLINK);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 21, "interaction-selection-settings.selector.offline-device"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.interactionType.QR_CODE);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 23, "interaction-selection-settings.description"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 25, "interaction-selection-settings.continue_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcmFjdGlvbi1zZWxlY3Rpb24tc2V0dGluZ3MucGFnZS5zY3NzIn0= */"] });
    return InteractionSelectionSettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-interaction-selection-settings-interaction-selection-settings-module.js.map