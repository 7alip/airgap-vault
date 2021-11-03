(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-interaction-selection-interaction-selection-module"],{

/***/ "bh/N":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/interaction-selection/interaction-selection.module.ts ***!
  \*****************************************************************************/
/*! exports provided: InteractionSelectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionSelectionPageModule", function() { return InteractionSelectionPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _interaction_selection_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interaction-selection.page */ "kARY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var routes = [
    {
        path: '',
        component: _interaction_selection_page__WEBPACK_IMPORTED_MODULE_5__["InteractionSelectionPage"]
    }
];
var InteractionSelectionPageModule = /** @class */ (function () {
    function InteractionSelectionPageModule() {
    }
    InteractionSelectionPageModule.ɵfac = function InteractionSelectionPageModule_Factory(t) { return new (t || InteractionSelectionPageModule)(); };
    InteractionSelectionPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: InteractionSelectionPageModule });
    InteractionSelectionPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return InteractionSelectionPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](InteractionSelectionPageModule, { declarations: [_interaction_selection_page__WEBPACK_IMPORTED_MODULE_5__["InteractionSelectionPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ }),

/***/ "kARY":
/*!***************************************************************************!*\
  !*** ./src/app/pages/interaction-selection/interaction-selection.page.ts ***!
  \***************************************************************************/
/*! exports provided: InteractionSelectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionSelectionPage", function() { return InteractionSelectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "E2f4");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/interaction/interaction.service */ "rYTG");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











var InteractionSelectionPage = /** @class */ (function () {
    function InteractionSelectionPage(navigationService, storageService, interactionService) {
        this.navigationService = navigationService;
        this.storageService = storageService;
        this.interactionService = interactionService;
    }
    InteractionSelectionPage.prototype.ionViewDidEnter = function () {
        this.interactionOptions = this.navigationService.getState().interactionOptions;
    };
    InteractionSelectionPage.prototype.selectOfflineDevice = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.interactionOptions.communicationType = _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionCommunicationType"].QR;
                this.goToNextPage();
                return [2 /*return*/];
            });
        });
    };
    InteractionSelectionPage.prototype.selectSameDevice = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.interactionOptions.communicationType = _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionCommunicationType"].DEEPLINK;
                this.goToNextPage();
                return [2 /*return*/];
            });
        });
    };
    InteractionSelectionPage.prototype.goToNextPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var interactionType;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.get(src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["VaultStorageKey"].INTERACTION_TYPE)];
                    case 1:
                        interactionType = _a.sent();
                        if (interactionType === src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["InteractionType"].UNDETERMINED) {
                            this.goToInteractionSelectionSettingsPage(this.interactionOptions);
                        }
                        else {
                            this.interactionService.startInteraction(this.interactionOptions);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InteractionSelectionPage.prototype.goToInteractionSelectionSettingsPage = function (interactionOptions) {
        this.navigationService
            .routeWithState('/interaction-selection-settings', { interactionOptions: interactionOptions })
            .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_NAVIGATION));
    };
    InteractionSelectionPage.ɵfac = function InteractionSelectionPage_Factory(t) { return new (t || InteractionSelectionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["VaultStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"])); };
    InteractionSelectionPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InteractionSelectionPage, selectors: [["airgap-interaction-selection"]], decls: 30, vars: 18, consts: [[1, "ion-no-border"], ["slot", "start"], [1, "ion-padding"], [1, "ion-padding-bottom", 3, "innerHTML"], [1, "ion-justify-content-center"], ["src", "./assets/img/send-one-device.svg"], ["size", "12"], ["color", "primary", "shape", "round", "expand", "block", 3, "click"], [1, "ion-justify-content-center", "ion-padding-top"], ["src", "./assets/img/send-two-device.svg"]], template: function InteractionSelectionPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-row", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-col", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InteractionSelectionPage_Template_ion_button_click_14_listener() { return ctx.selectSameDevice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-row", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-col", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InteractionSelectionPage_Template_ion_button_click_24_listener() { return ctx.selectOfflineDevice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 6, "interaction-selection.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 8, "interaction-selection.heading"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 10, "interaction-selection.same-device_label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 12, "interaction-selection.same-device_info"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 14, "interaction-selection.offline-device_label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 16, "interaction-selection.offline-device_info"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["ion-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ludGVyYWN0aW9uLXNlbGVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoiaW50ZXJhY3Rpb24tc2VsZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yb3cgaW1nIHtcbiAgaGVpZ2h0OiAyMHZoO1xufVxuIl19 */"] });
    return InteractionSelectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-interaction-selection-interaction-selection-module.js.map