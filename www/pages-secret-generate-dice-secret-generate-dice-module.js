(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-secret-generate-dice-secret-generate-dice-module"],{

/***/ "05Nj":
/*!***************************************************************************!*\
  !*** ./src/app/pages/secret-generate-dice/secret-generate-dice.module.ts ***!
  \***************************************************************************/
/*! exports provided: SecretGenerateDicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretGenerateDicePageModule", function() { return SecretGenerateDicePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _secret_generate_dice_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secret-generate-dice-routing.module */ "KHNY");
/* harmony import */ var _secret_generate_dice_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./secret-generate-dice.page */ "77MI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








var SecretGenerateDicePageModule = /** @class */ (function () {
    function SecretGenerateDicePageModule() {
    }
    SecretGenerateDicePageModule.ɵfac = function SecretGenerateDicePageModule_Factory(t) { return new (t || SecretGenerateDicePageModule)(); };
    SecretGenerateDicePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SecretGenerateDicePageModule });
    SecretGenerateDicePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _secret_generate_dice_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecretGenerateDicePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]] });
    return SecretGenerateDicePageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SecretGenerateDicePageModule, { declarations: [_secret_generate_dice_page__WEBPACK_IMPORTED_MODULE_4__["SecretGenerateDicePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _secret_generate_dice_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecretGenerateDicePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();


/***/ }),

/***/ "77MI":
/*!*************************************************************************!*\
  !*** ./src/app/pages/secret-generate-dice/secret-generate-dice.page.ts ***!
  \*************************************************************************/
/*! exports provided: SecretGenerateDicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretGenerateDicePage", function() { return SecretGenerateDicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_models_secret__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/secret */ "C2ta");
/* harmony import */ var src_app_services_dice_roll_dice_roll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dice-roll/dice-roll.service */ "mk/M");
/* harmony import */ var src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/error-handler/error-handler.service */ "626a");
/* harmony import */ var src_app_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_grid_input_grid_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/grid-input/grid-input.component */ "kr6l");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");














var _c0 = function (a0, a1) { return { inputLength: a0, entropyBits: a1 }; };
var SecretGenerateDicePage = /** @class */ (function () {
    function SecretGenerateDicePage(alertController, translateService, navigationService, diceRollService) {
        this.alertController = alertController;
        this.translateService = translateService;
        this.navigationService = navigationService;
        this.diceRollService = diceRollService;
        this.isValid = false;
        this.minLength = 99;
        this.error = '';
        this.entropyBits = 0;
        this.diceRollType = src_app_services_dice_roll_dice_roll_service__WEBPACK_IMPORTED_MODULE_4__["DiceRollType"].DEFAULT;
        this.entropy = '';
    }
    SecretGenerateDicePage.prototype.ngOnInit = function () { };
    SecretGenerateDicePage.prototype.next = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var entropy, secret;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diceRollService.getEntropyFromInput(this.entropy, this.diceRollType)];
                    case 1:
                        entropy = _a.sent();
                        secret = new src_app_models_secret__WEBPACK_IMPORTED_MODULE_3__["MnemonicSecret"](entropy);
                        this.navigationService.routeWithState('secret-rules', { secret: secret }).catch(Object(src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["handleErrorLocal"])(src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorCategory"].IONIC_NAVIGATION));
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretGenerateDicePage.prototype.updateEntropy = function (input) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.entropy = input;
                this.entropyBits = 2.585 * this.entropy.length;
                this.validateEntropy();
                return [2 /*return*/];
            });
        });
    };
    SecretGenerateDicePage.prototype.validateEntropy = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.entropy.length < 99) {
                            this.isValid = false;
                            this.error = '';
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.diceRollService.validateInput(this.entropy)];
                    case 2:
                        _a.isValid = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        this.isValid = false;
                        this.error = e_1;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SecretGenerateDicePage.prototype.switchInputType = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.diceRollType === src_app_services_dice_roll_dice_roll_service__WEBPACK_IMPORTED_MODULE_4__["DiceRollType"].DEFAULT) {
                    this.diceRollType = src_app_services_dice_roll_dice_roll_service__WEBPACK_IMPORTED_MODULE_4__["DiceRollType"].COLDCARD;
                }
                else {
                    this.diceRollType = src_app_services_dice_roll_dice_roll_service__WEBPACK_IMPORTED_MODULE_4__["DiceRollType"].DEFAULT;
                }
                return [2 /*return*/];
            });
        });
    };
    SecretGenerateDicePage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(500);
    };
    SecretGenerateDicePage.prototype.selectInputType = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: this.translateService.instant('secret-generate-dice-roll.type-alert.header'),
                            message: this.translateService.instant('secret-generate-dice-roll.type-alert.message'),
                            backdropDismiss: false,
                            inputs: [
                                {
                                    name: 'default',
                                    type: 'radio',
                                    label: this.translateService.instant('secret-generate-dice-roll.type-alert.default'),
                                    value: src_app_services_dice_roll_dice_roll_service__WEBPACK_IMPORTED_MODULE_4__["DiceRollType"].DEFAULT,
                                    checked: this.diceRollType === src_app_services_dice_roll_dice_roll_service__WEBPACK_IMPORTED_MODULE_4__["DiceRollType"].DEFAULT
                                },
                                {
                                    name: 'coldcard',
                                    type: 'radio',
                                    label: this.translateService.instant('secret-generate-dice-roll.type-alert.coldcard'),
                                    value: src_app_services_dice_roll_dice_roll_service__WEBPACK_IMPORTED_MODULE_4__["DiceRollType"].COLDCARD,
                                    checked: this.diceRollType === src_app_services_dice_roll_dice_roll_service__WEBPACK_IMPORTED_MODULE_4__["DiceRollType"].COLDCARD
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Ok',
                                    handler: function (result) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            this.diceRollType = result;
                                            return [2 /*return*/];
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretGenerateDicePage.ɵfac = function SecretGenerateDicePage_Factory(t) { return new (t || SecretGenerateDicePage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_dice_roll_dice_roll_service__WEBPACK_IMPORTED_MODULE_4__["DiceRollService"])); };
    SecretGenerateDicePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SecretGenerateDicePage, selectors: [["airgap-secret-generate-dice"]], viewQuery: function SecretGenerateDicePage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        } }, decls: 43, vars: 21, consts: [[1, "ion-no-border"], ["color", "secondary"], ["slot", "start"], ["defaultHref", "/tabs/tab-settings"], ["slot", "end", 3, "click"], ["slot", "icon-only", "name", "options-outline"], [1, "ion-padding-horizontal"], [1, "ion-padding-bottom"], [3, "minLength", "gridWidth", "defaultHeight", "rowAddedEvent", "entropyChanged"], ["inputgrid", ""], [1, "ion-padding"], ["size", "12"], [1, "button--rounded", "ion-justify-content-between"], ["shape", "round", 3, "click"], ["color", "tertiary", 3, "disabled", "click"], ["name", "trash-outline"], ["name", "chevron-forward-circle-outline"]], template: function SecretGenerateDicePage_Template(rf, ctx) { if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-back-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-buttons", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretGenerateDicePage_Template_ion_buttons_click_7_listener() { return ctx.selectInputType(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "ion-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ion-content", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "airgap-grid-input", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("rowAddedEvent", function SecretGenerateDicePage_Template_airgap_grid_input_rowAddedEvent_13_listener() { return ctx.scrollToBottom(); })("entropyChanged", function SecretGenerateDicePage_Template_airgap_grid_input_entropyChanged_13_listener($event) { return ctx.updateEntropy($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ion-footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "ion-row", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "ion-col", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "ion-col", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "ion-row", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretGenerateDicePage_Template_ion_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14); return _r0.add("1"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretGenerateDicePage_Template_ion_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14); return _r0.add("2"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretGenerateDicePage_Template_ion_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14); return _r0.add("3"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretGenerateDicePage_Template_ion_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14); return _r0.add("4"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretGenerateDicePage_Template_ion_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14); return _r0.add("5"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretGenerateDicePage_Template_ion_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14); return _r0.add("6"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "6");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "ion-button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretGenerateDicePage_Template_ion_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14); return _r0.remove(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "ion-icon", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "ion-button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SecretGenerateDicePage_Template_ion_button_click_40_listener() { return ctx.next(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "ion-icon", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 8, "secret-generate-dice-roll.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 10, "secret-generate-dice-roll.description"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("minLength", ctx.minLength)("gridWidth", 10)("defaultHeight", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](20, 12, "secret-generate-dice-roll.status", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](18, _c0, _r0.entropy.length, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](21, 15, ctx.entropyBits, "1.0-1"))), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", _r0.entropy.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isValid);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _components_grid_input_grid_input_component__WEBPACK_IMPORTED_MODULE_8__["GridInputComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: [".button--rounded[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-end: 0;\n  --padding-start: 0;\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlY3JldC1nZW5lcmF0ZS1kaWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNlY3JldC1nZW5lcmF0ZS1kaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tLXJvdW5kZWQgaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbiJdfQ== */"] });
    return SecretGenerateDicePage;
}());



/***/ }),

/***/ "KHNY":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/secret-generate-dice/secret-generate-dice-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SecretGenerateDicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretGenerateDicePageRoutingModule", function() { return SecretGenerateDicePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _secret_generate_dice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secret-generate-dice.page */ "77MI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var routes = [
    {
        path: '',
        component: _secret_generate_dice_page__WEBPACK_IMPORTED_MODULE_1__["SecretGenerateDicePage"]
    }
];
var SecretGenerateDicePageRoutingModule = /** @class */ (function () {
    function SecretGenerateDicePageRoutingModule() {
    }
    SecretGenerateDicePageRoutingModule.ɵfac = function SecretGenerateDicePageRoutingModule_Factory(t) { return new (t || SecretGenerateDicePageRoutingModule)(); };
    SecretGenerateDicePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SecretGenerateDicePageRoutingModule });
    SecretGenerateDicePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return SecretGenerateDicePageRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SecretGenerateDicePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "mk/M":
/*!*********************************************************!*\
  !*** ./src/app/services/dice-roll/dice-roll.service.ts ***!
  \*********************************************************/
/*! exports provided: DiceRollType, DiceRollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceRollType", function() { return DiceRollType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceRollService", function() { return DiceRollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var create_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! create-hash */ "mObS");
/* harmony import */ var create_hash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(create_hash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/utils */ "oCjk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var DiceRollType;
(function (DiceRollType) {
    DiceRollType[DiceRollType["DEFAULT"] = 0] = "DEFAULT";
    DiceRollType[DiceRollType["COLDCARD"] = 1] = "COLDCARD";
})(DiceRollType || (DiceRollType = {}));
var DiceRollService = /** @class */ (function () {
    function DiceRollService() {
        this.emptyEntropy = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
    }
    DiceRollService.prototype.transformEntropy = function (diceEntropy, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (type === DiceRollType.COLDCARD) {
                    return [2 /*return*/, diceEntropy.replace(/6/g, '0')];
                }
                return [2 /*return*/, diceEntropy];
            });
        });
    };
    DiceRollService.prototype.validateInput = function (diceEntropy) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (typeof diceEntropy !== 'string') {
                    throw Error('Input needs to be a string');
                }
                if (diceEntropy.length < 99) {
                    throw Error('Input length needs to be longer than 99');
                }
                if (!diceEntropy.split('').every(function (c) { return '123456'.includes(c); })) {
                    throw Error('Input can only contain "1", "2", "3", "4", "5" and "6"');
                }
                return [2 /*return*/, true];
            });
        });
    };
    DiceRollService.prototype.getEntropyFromInput = function (diceEntropy, type) {
        if (type === void 0) { type = DiceRollType.DEFAULT; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var transformedEntropy, hash, entropy;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateInput(diceEntropy)];
                    case 1:
                        if (!(_a.sent())) {
                            throw new Error('Invalid diceEntropy');
                        }
                        return [4 /*yield*/, this.transformEntropy(diceEntropy, type)];
                    case 2:
                        transformedEntropy = _a.sent();
                        hash = create_hash__WEBPACK_IMPORTED_MODULE_1__('sha256').update(transformedEntropy).digest();
                        entropy = Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_2__["toHexString"])(hash);
                        if (entropy === this.emptyEntropy) {
                            throw new Error('Warning! Input is emtpy');
                        }
                        return [2 /*return*/, entropy];
                }
            });
        });
    };
    DiceRollService.ɵfac = function DiceRollService_Factory(t) { return new (t || DiceRollService)(); };
    DiceRollService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DiceRollService, factory: DiceRollService.ɵfac, providedIn: 'root' });
    return DiceRollService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-secret-generate-dice-secret-generate-dice-module.js.map