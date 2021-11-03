(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-address-account-address-module"],{

/***/ "9MgY":
/*!*****************************************************************!*\
  !*** ./src/app/pages/account-address/account-address.module.ts ***!
  \*****************************************************************/
/*! exports provided: AccountAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountAddressPageModule", function() { return AccountAddressPageModule; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _account_address_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-address.page */ "e3K2");
/* harmony import */ var _account_edit_popover_account_edit_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account-edit-popover/account-edit-popover.component */ "INGF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











var routes = [
    {
        path: '',
        component: _account_address_page__WEBPACK_IMPORTED_MODULE_7__["AccountAddressPage"]
    }
];
var AccountAddressPageModule = /** @class */ (function () {
    function AccountAddressPageModule() {
    }
    AccountAddressPageModule.ɵfac = function AccountAddressPageModule_Factory(t) { return new (t || AccountAddressPageModule)(); };
    AccountAddressPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AccountAddressPageModule });
    AccountAddressPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]
            ]] });
    return AccountAddressPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AccountAddressPageModule, { declarations: [_account_address_page__WEBPACK_IMPORTED_MODULE_7__["AccountAddressPage"], _account_edit_popover_account_edit_popover_component__WEBPACK_IMPORTED_MODULE_8__["AccountEditPopoverComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]] }); })();


/***/ }),

/***/ "INGF":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/account-address/account-edit-popover/account-edit-popover.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AccountEditPopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditPopoverComponent", function() { return AccountEditPopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");












var AccountEditPopoverComponent = /** @class */ (function () {
    function AccountEditPopoverComponent(alertCtrl, clipboardService, secretsService, popoverController, translateService) {
        this.alertCtrl = alertCtrl;
        this.clipboardService = clipboardService;
        this.secretsService = secretsService;
        this.popoverController = popoverController;
        this.translateService = translateService;
    }
    AccountEditPopoverComponent.prototype.copyAddressToClipboard = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clipboardService.copyAndShowToast(this.wallet.receivingPublicAddress, this.translateService.instant('wallet-edit-delete-popover.confirm_address_copy'))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.popoverController.dismiss()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountEditPopoverComponent.prototype.copyShareUrlToClipboard = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.clipboardService).copyAndShowToast;
                        return [4 /*yield*/, this.getWalletShareUrl()];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent(), this.translateService.instant('wallet-edit-delete-popover.confirm_sync_code_copy')])];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.popoverController.dismiss()];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountEditPopoverComponent.prototype.delete = function () {
        var _this = this;
        this.translateService
            .get([
            'wallet-edit-delete-popover.account-removal_alert.title',
            'wallet-edit-delete-popover.account-removal_alert.text',
            'wallet-edit-delete-popover.account-removal_alert.cancel_label',
            'wallet-edit-delete-popover.account-removal_alert.delete_label'
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (values) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var title, message, cancelButton, deleteButton, alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = values['wallet-edit-delete-popover.account-removal_alert.title'];
                        message = values['wallet-edit-delete-popover.account-removal_alert.text'];
                        cancelButton = values['wallet-edit-delete-popover.account-removal_alert.cancel_label'];
                        deleteButton = values['wallet-edit-delete-popover.account-removal_alert.delete_label'];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: title,
                                message: message,
                                buttons: [
                                    {
                                        text: cancelButton,
                                        role: 'cancel',
                                        handler: function () {
                                            _this.popoverController.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorCategory"].IONIC_ALERT));
                                        }
                                    },
                                    {
                                        text: deleteButton,
                                        handler: function () {
                                            alert.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorCategory"].IONIC_ALERT));
                                            _this.secretsService
                                                .removeWallet(_this.wallet)
                                                .then(function () {
                                                _this.popoverController.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorCategory"].IONIC_ALERT));
                                                if (_this.onDelete) {
                                                    _this.onDelete();
                                                }
                                            })
                                                .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorCategory"].SECURE_STORAGE));
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorCategory"].IONIC_ALERT));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AccountEditPopoverComponent.ɵfac = function AccountEditPopoverComponent_Factory(t) { return new (t || AccountEditPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_4__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_6__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
    AccountEditPopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AccountEditPopoverComponent, selectors: [["airgap-account-edit-popover"]], decls: 17, vars: 12, consts: [["lines", "none", 1, "ion-no-padding", "ion-no-margin"], ["button", "", "detail", "false", 3, "click"], ["name", "clipboard-outline", "color", "dark", "slot", "end"], ["name", "trash", "color", "dark", "slot", "end"]], template: function AccountEditPopoverComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-list", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-list-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-item", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountEditPopoverComponent_Template_ion_item_click_5_listener() { return ctx.copyAddressToClipboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ion-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ion-item", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountEditPopoverComponent_Template_ion_item_click_9_listener() { return ctx.copyShareUrlToClipboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ion-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ion-item", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountEditPopoverComponent_Template_ion_item_click_13_listener() { return ctx.delete(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, "wallet-edit-delete-popover.settings_label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 6, "wallet-edit-delete-popover.copy_label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 8, "wallet-edit-delete-popover.copy_sync_code"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 10, "wallet-edit-delete-popover.account-removal_alert.delete_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWVkaXQtcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AccountEditPopoverComponent;
}());



/***/ }),

/***/ "e3K2":
/*!***************************************************************!*\
  !*** ./src/app/pages/account-address/account-address.page.ts ***!
  \***************************************************************/
/*! exports provided: AccountAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountAddressPage", function() { return AccountAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/interaction/interaction.service */ "rYTG");
/* harmony import */ var _services_migration_migration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/migration/migration.service */ "RzJf");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _services_share_url_share_url_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/share-url/share-url.service */ "ngeE");
/* harmony import */ var _utils_migration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/migration */ "RYuY");
/* harmony import */ var _account_edit_popover_account_edit_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-edit-popover/account-edit-popover.component */ "INGF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


















var AccountAddressPage = /** @class */ (function () {
    function AccountAddressPage(popoverCtrl, clipboardService, shareUrlService, interactionService, navigationService, uiEventService, migrationService, deepLinkService) {
        this.popoverCtrl = popoverCtrl;
        this.clipboardService = clipboardService;
        this.shareUrlService = shareUrlService;
        this.interactionService = interactionService;
        this.navigationService = navigationService;
        this.uiEventService = uiEventService;
        this.migrationService = migrationService;
        this.deepLinkService = deepLinkService;
        this.wallet = this.navigationService.getState().wallet;
    }
    AccountAddressPage.prototype.done = function () {
        this.navigationService.routeToAccountsTab().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
    };
    AccountAddressPage.prototype.share = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitWalletShareUrl()];
                    case 1:
                        _a.sent();
                        this.interactionService.startInteraction({
                            operationType: _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionOperationType"].WALLET_SYNC,
                            iacMessage: this.shareObject
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountAddressPage.prototype.presentEditPopover = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _account_edit_popover_account_edit_popover_component__WEBPACK_IMPORTED_MODULE_9__["AccountEditPopoverComponent"],
                            componentProps: {
                                wallet: this.wallet,
                                getWalletShareUrl: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.waitWalletShareUrl()];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/, this.walletShareUrl];
                                        }
                                    });
                                }); },
                                onDelete: function () {
                                    _this.navigationService.back();
                                }
                            },
                            event: event,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [2 /*return*/, popover.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_ALERT))];
                }
            });
        });
    };
    AccountAddressPage.prototype.copyAddressToClipboard = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clipboardService.copyAndShowToast(this.wallet.receivingPublicAddress)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountAddressPage.prototype.waitWalletShareUrl = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.prepareSyncObject()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.deepLinkService.generateDeepLinkUrl(this.shareObject)];
                    case 2:
                        _a.walletShareUrl = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountAddressPage.prototype.prepareSyncObject = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.shareObject !== undefined) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.migrationService.runWalletsMigration([this.wallet])];
                    case 1:
                        _a.sent();
                        if (!!Object(_utils_migration__WEBPACK_IMPORTED_MODULE_8__["isWalletMigrated"])(this.wallet)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.showWalletNotMigratedAlert()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Promise.reject('Cannot create share URL, wallet data is incomplete')];
                    case 3:
                        if (this.shareObjectPromise === undefined) {
                            this.shareObjectPromise = new Promise(function (resolve) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var shareObject;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.shareUrlService.generateShareWalletURL(this.wallet)];
                                        case 1:
                                            shareObject = _a.sent();
                                            resolve(shareObject);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }).then(function (shareObject) {
                                _this.shareObject = shareObject;
                                _this.shareObjectPromise = undefined;
                            });
                        }
                        return [2 /*return*/, this.shareObjectPromise];
                }
            });
        });
    };
    AccountAddressPage.prototype.showWalletNotMigratedAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.uiEventService.showTranslatedAlert({
                        header: 'wallet-address.alert.wallet-not-migrated.header',
                        message: 'wallet-address.alert.wallet-not-migrated.message',
                        buttons: [
                            {
                                text: 'wallet-address.alert.wallet-not-migrated.button_label'
                            }
                        ]
                    })];
            });
        });
    };
    AccountAddressPage.ɵfac = function AccountAddressPage_Factory(t) { return new (t || AccountAddressPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_share_url_share_url_service__WEBPACK_IMPORTED_MODULE_7__["ShareUrlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UiEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_migration_migration_service__WEBPACK_IMPORTED_MODULE_5__["MigrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["DeeplinkService"])); };
    AccountAddressPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: AccountAddressPage, selectors: [["airgap-account-address"]], decls: 40, vars: 24, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/tabs/tab-accounts"], ["slot", "primary"], [3, "click"], ["slot", "icon-only", "name", "ellipsis-vertical"], [1, "ion-padding"], [3, "address"], [3, "symbol"], [1, "ion-no-margin"], [1, "selectable", "typography--mono", 3, "click"], [1, "selectable", "typography--mono"], [1, "ion-justify-content-center", "ion-padding-bottom"], [3, "qrdata", "level", "size"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "light", "shape", "round", 3, "click"], ["color", "primary", "shape", "round", 3, "click"]], template: function AccountAddressPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-back-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-buttons", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AccountAddressPage_Template_ion_button_click_8_listener($event) { return ctx.presentEditPopover($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "ion-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "ion-content", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-row", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-avatar");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "airgap-identicon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "airgap-currency-symbol", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "h2", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AccountAddressPage_Template_span_click_23_listener() { return ctx.copyAddressToClipboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "ion-row", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "airgap-qr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "ion-fab", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "ion-button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AccountAddressPage_Template_ion_button_click_34_listener() { return ctx.share(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "ion-button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AccountAddressPage_Template_ion_button_click_37_listener() { return ctx.done(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 14, "wallet-address.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("address", ctx.wallet.receivingPublicAddress);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("symbol", ctx.wallet.protocol.symbol);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx.wallet.protocol.name, " ", ctx.wallet.protocol.symbol, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 16, "wallet-address.address_label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.wallet.receivingPublicAddress);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](27, 18, "wallet-address.path_label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.wallet.derivationPath);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("qrdata", ctx.wallet.receivingPublicAddress)("level", "L")("size", 300);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](36, 20, "wallet-address.sync_label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](39, 22, "wallet-address.done_label"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["IdenticonComponent"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["CurrencySymbolComponent"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["QrComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: ["airgap-currency-symbol[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 32px;\n  width: 32px;\n  left: 40px;\n  top: 40px;\n}\n\nairgap-identicon[_ngcontent-%COMP%], airgap-identicon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], ion-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnQtYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFDQTs7O0VBR0UsV0FBQTtFQUNBLFlBQUE7QUFFRiIsImZpbGUiOiJhY2NvdW50LWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWlyZ2FwLWN1cnJlbmN5LXN5bWJvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgbGVmdDogNDBweDtcbiAgdG9wOiA0MHB4O1xufVxuYWlyZ2FwLWlkZW50aWNvbixcbmFpcmdhcC1pZGVudGljb24gaW1nLFxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG4iXX0= */"] });
    return AccountAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-address-account-address-module.js.map