(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-secret-edit-secret-edit-module~tab-accounts-tab-accounts-module"],{

/***/ "3Pyr":
/*!*******************************************************!*\
  !*** ./src/app/pages/secret-edit/secret-edit.page.ts ***!
  \*******************************************************/
/*! exports provided: SecretEditAction, SecretEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretEditAction", function() { return SecretEditAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretEditPage", function() { return SecretEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _models_secret__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/secret */ "C2ta");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _secret_edit_popover_secret_edit_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secret-edit-popover/secret-edit-popover.component */ "iVvd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_secret_option_item_secret_option_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/secret-option-item/secret-option-item.component */ "X4Lx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");


















function SecretEditPage_ng_container_40_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, "secret-edit.secret-recovery-key.reset-text"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
function SecretEditPage_ng_container_40_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, "secret-edit.secret-recovery-key.generate-text"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
function SecretEditPage_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "airgap-secret-option-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("action", function SecretEditPage_ng_container_40_Template_airgap_secret_option_item_action_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r3.resetRecoveryPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, SecretEditPage_ng_container_40_p_5_Template, 2, 3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, SecretEditPage_ng_container_40_p_6_Template, 2, 3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 5, "secret-edit.secret-recovery-key.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", "assets/icons/md-fiber_pin.svg")("active", ctx_r0.secret.hasRecoveryKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.secret.hasRecoveryKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.secret.hasRecoveryKey);
} }
var SecretEditAction;
(function (SecretEditAction) {
    SecretEditAction[SecretEditAction["SET_RECOVERY_KEY"] = 0] = "SET_RECOVERY_KEY";
})(SecretEditAction || (SecretEditAction = {}));
var SecretEditPage = /** @class */ (function () {
    function SecretEditPage(popoverCtrl, toastCtrl, alertCtrl, translateService, clipboardService, secretsService, navigationService, platform) {
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.clipboardService = clipboardService;
        this.secretsService = secretsService;
        this.navigationService = navigationService;
        this.platform = platform;
        this.isGenerating = false;
        this.isAndroid = false;
        if (this.navigationService.getState()) {
            this.secret = this.navigationService.getState().secret;
            this.isAndroid = this.platform.is('android');
            this.perform(this.navigationService.getState().action);
        }
    }
    SecretEditPage.prototype.confirm = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.secretsService.addOrUpdateSecret(this.secret)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].SECURE_STORAGE)(error_1);
                        // TODO: Show error
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, this.dismiss()];
                    case 4:
                        _a.sent();
                        this.navigationService.route('/account-add').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretEditPage.prototype.dismiss = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                try {
                    return [2 /*return*/, this.navigationService.routeToAccountsTab()];
                }
                catch (error) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    SecretEditPage.prototype.goToSocialRecoverySetup = function () {
        this.navigationService
            .routeWithState('/social-recovery-setup', { secret: this.secret })
            .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
    };
    SecretEditPage.prototype.goToWalletInteraction = function () {
        this.navigationService
            .routeWithState('/interaction-selection-settings', { secret: this.secret, isEdit: true })
            .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
    };
    SecretEditPage.prototype.goToBip85ChildSeed = function () {
        this.navigationService
            .routeWithState('/bip85-generate', { secret: this.secret })
            .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
    };
    SecretEditPage.prototype.resetRecoveryPassword = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var recoveryKey, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.secretsService.resetRecoveryPassword(this.secret)];
                    case 1:
                        recoveryKey = _a.sent();
                        this.showRecoveryKeyAlert(recoveryKey);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.showToast('secret-edit.secret-recovery-key.reset-error');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SecretEditPage.prototype.showMnemonic = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: this.translateService.instant('secret-edit.show-mnemonic.alert.title'),
                            message: this.translateService.instant('secret-edit.show-mnemonic.alert.message'),
                            backdropDismiss: false,
                            inputs: [
                                {
                                    name: 'understood',
                                    type: 'checkbox',
                                    label: this.translateService.instant('secret-edit.show-mnemonic.alert.understood'),
                                    value: 'understood',
                                    checked: false
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
                                        var entropy, secret;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!result.includes('understood')) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, this.secretsService.retrieveEntropyForSecret(this.secret)];
                                                case 1:
                                                    entropy = _a.sent();
                                                    secret = new _models_secret__WEBPACK_IMPORTED_MODULE_2__["MnemonicSecret"](entropy);
                                                    this.navigationService.routeWithState('secret-show', { secret: secret }).catch(function (err) { return console.error(err); });
                                                    _a.label = 2;
                                                case 2: return [2 /*return*/];
                                            }
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
    SecretEditPage.prototype.presentEditPopover = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _secret_edit_popover_secret_edit_popover_component__WEBPACK_IMPORTED_MODULE_6__["SecretEditPopoverComponent"],
                            componentProps: {
                                secret: this.secret,
                                onDelete: function () {
                                    _this.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_MODAL));
                                }
                            },
                            event: event,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_MODAL));
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretEditPage.prototype.perform = function (action) {
        switch (action) {
            case SecretEditAction.SET_RECOVERY_KEY:
                this.resetRecoveryPassword();
                break;
        }
    };
    SecretEditPage.prototype.showToast = function (message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: this.translateService.instant(message),
                            duration: 1000,
                            position: 'top',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_ALERT));
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretEditPage.prototype.showRecoveryKeyAlert = function (recoveryKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: this.translateService.instant('secret-edit.secret-recovery-key.alert.title'),
                            subHeader: this.translateService.instant('secret-edit.secret-recovery-key.description'),
                            message: recoveryKey,
                            buttons: [
                                {
                                    text: this.translateService.instant('secret-edit.secret-recovery-key.alert.copy'),
                                    handler: function () {
                                        _this.clipboardService.copy(recoveryKey);
                                        _this.showToast('secret-edit.secret-recovery-key.copied');
                                    }
                                },
                                {
                                    text: this.translateService.instant('secret-edit.secret-recovery-key.alert.done'),
                                    handler: function () { }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_ALERT));
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretEditPage.ɵfac = function SecretEditPage_Factory(t) { return new (t || SecretEditPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_8__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
    SecretEditPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SecretEditPage, selectors: [["airgap-secret-edit"]], decls: 60, vars: 65, consts: [[1, "ion-no-border"], ["slot", "start"], ["slot", "primary"], [3, "click"], ["slot", "icon-only", "name", "ellipsis-horizontal-outline"], [1, "ion-padding"], [1, "ion-no-padding"], ["color", "white", "position", "floating"], [3, "ngModel", "ngModelChange"], [1, "font--weight__med", "ion-padding-top"], [3, "enabled", "icon", "active", "checkboxValue"], [3, "innerHTML"], [1, "font--weight__med"], [3, "enabled", "icon", "active", "action"], [4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "disabled", "click"], [3, "icon", "active", "action"], [3, "innerHTML", 4, "ngIf"]], template: function SecretEditPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-back-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SecretEditPage_Template_ion_button_click_8_listener($event) { return ctx.presentEditPopover($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-content", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "ion-item", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SecretEditPage_Template_ion_input_ngModelChange_18_listener($event) { return ctx.secret.label = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "airgap-secret-option-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "airgap-secret-option-item", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("action", function SecretEditPage_Template_airgap_secret_option_item_action_34_listener() { return ctx.goToSocialRecoverySetup(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](38, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, SecretEditPage_ng_container_40_Template, 7, 7, "ng-container", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "airgap-secret-option-item", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("action", function SecretEditPage_Template_airgap_secret_option_item_action_44_listener() { return ctx.goToBip85ChildSeed(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](48, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](52, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "airgap-secret-option-item", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("action", function SecretEditPage_Template_airgap_secret_option_item_action_53_listener() { return ctx.showMnemonic(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](54, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "ion-fab", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "ion-button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SecretEditPage_Template_ion_button_click_57_listener() { return ctx.confirm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](59, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", "Edit", " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 33, "secret-edit.title"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 35, "secret-edit.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 37, "secret-edit.secret_input_label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.secret.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](21, 39, "secret-edit.security-level.heading"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](24, 41, "secret-edit.security-level.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("enabled", false)("icon", "assets/icons/md-fiber_pin.svg")("active", ctx.secret.isParanoia)("checkboxValue", ctx.secret.isParanoia);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 43, "secret-edit.passcode.label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](30, 45, "secret-edit.passcode.text"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](33, 47, "secret-edit.secret-recovery.heading"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("enabled", true)("icon", "assets/icons/md-group_work.svg")("active", ctx.secret.hasSocialRecovery);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](37, 49, "secret-edit.social-recovery.label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](39, 51, "secret-edit.social-recovery.text"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isAndroid);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](43, 53, "secret-edit.advanced"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("enabled", true)("icon", "assets/icons/md-swap_horiz.svg")("active", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](47, 55, "secret-edit.bip85.generate"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](49, 57, "secret-edit.bip85.text"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](52, 59, "secret-edit.show-mnemonic.label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("enabled", true)("icon", "assets/icons/md-fiber_pin.svg")("active", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](55, 61, "secret-edit.show-mnemonic.text"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.secret.label.length < 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](59, 63, "secret-edit.confirm_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _components_secret_option_item_secret_option_item_component__WEBPACK_IMPORTED_MODULE_11__["SecretOptionItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFab"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNyZXQtZWRpdC5wYWdlLnNjc3MifQ== */"] });
    return SecretEditPage;
}());



/***/ }),

/***/ "iVvd":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/secret-edit/secret-edit-popover/secret-edit-popover.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SecretEditPopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretEditPopoverComponent", function() { return SecretEditPopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");










var SecretEditPopoverComponent = /** @class */ (function () {
    function SecretEditPopoverComponent(alertCtrl, secretsService, popoverController, translateService) {
        this.alertCtrl = alertCtrl;
        this.secretsService = secretsService;
        this.popoverController = popoverController;
        this.translateService = translateService;
    }
    SecretEditPopoverComponent.prototype.delete = function () {
        var _this = this;
        this.translateService
            .get([
            'secret-edit-delete-popover.title',
            'secret-edit-delete-popover.text',
            'secret-edit-delete-popover.cancel_label',
            'secret-edit-delete-popover.delete_label'
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (values) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var title, message, cancelButton, deleteButton, alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = values['secret-edit-delete-popover.title'];
                        message = values['secret-edit-delete-popover.text'];
                        cancelButton = values['secret-edit-delete-popover.cancel_label'];
                        deleteButton = values['secret-edit-delete-popover.delete_label'];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: title,
                                message: message,
                                buttons: [
                                    {
                                        text: cancelButton,
                                        role: 'cancel',
                                        handler: function () {
                                            _this.popoverController.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_MODAL));
                                        }
                                    },
                                    {
                                        text: deleteButton,
                                        handler: function () {
                                            _this.secretsService.remove(_this.secret).catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].SECURE_STORAGE));
                                            _this.popoverController.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_MODAL));
                                            if (_this.onDelete) {
                                                _this.onDelete();
                                            }
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_ALERT));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    SecretEditPopoverComponent.ɵfac = function SecretEditPopoverComponent_Factory(t) { return new (t || SecretEditPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
    SecretEditPopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SecretEditPopoverComponent, selectors: [["airgap-secret-edit-popover"]], decls: 7, vars: 0, consts: [["lines", "none", 1, "ion-no-padding", "ion-no-margin"], ["button", "", "detail", "false", 3, "click"], ["name", "md-trash", "color", "dark", "slot", "end"]], template: function SecretEditPopoverComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-list", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-list-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-item", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretEditPopoverComponent_Template_ion_item_click_4_listener() { return ctx.delete(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Delete ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNyZXQtZWRpdC1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return SecretEditPopoverComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-secret-edit-secret-edit-module~tab-accounts-tab-accounts-module.js.map