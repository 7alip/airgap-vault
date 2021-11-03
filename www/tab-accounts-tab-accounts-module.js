(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-accounts-tab-accounts-module"],{

/***/ "06lq":
/*!***********************************************************!*\
  !*** ./src/app/pages/tab-accounts/tab-accounts.module.ts ***!
  \***********************************************************/
/*! exports provided: TabAccountsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabAccountsPageModule", function() { return TabAccountsPageModule; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _tab_accounts_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab-accounts.page */ "pJcu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











var routes = [
    {
        path: '',
        component: _tab_accounts_page__WEBPACK_IMPORTED_MODULE_8__["TabAccountsPage"]
    }
];
var TabAccountsPageModule = /** @class */ (function () {
    function TabAccountsPageModule() {
    }
    TabAccountsPageModule.ɵfac = function TabAccountsPageModule_Factory(t) { return new (t || TabAccountsPageModule)(); };
    TabAccountsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: TabAccountsPageModule });
    TabAccountsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]
            ]] });
    return TabAccountsPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TabAccountsPageModule, { declarations: [_tab_accounts_page__WEBPACK_IMPORTED_MODULE_8__["TabAccountsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
        _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]] }); })();


/***/ }),

/***/ "BVla":
/*!***********************************************!*\
  !*** ./src/app/services/mode/mode.service.ts ***!
  \***********************************************/
/*! exports provided: ModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeService", function() { return ModeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storage.service */ "E2f4");
/* harmony import */ var _strategy_advanced_mode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strategy/advanced-mode.service */ "tdB+");
/* harmony import */ var _strategy_basic_mode_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./strategy/basic-mode.service */ "GMnZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");








var ModeService = /** @class */ (function () {
    function ModeService(storage, advancedModeService, basicModeService) {
        this.storage = storage;
        this.advancedModeService = advancedModeService;
        this.basicModeService = basicModeService;
    }
    ModeService.prototype.strategy = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var advancedMode;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["VaultStorageKey"].ADVANCED_MODE)];
                    case 1:
                        advancedMode = _a.sent();
                        return [2 /*return*/, advancedMode ? this.advancedModeService : this.basicModeService];
                }
            });
        });
    };
    ModeService.ɵfac = function ModeService_Factory(t) { return new (t || ModeService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__["VaultStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_strategy_advanced_mode_service__WEBPACK_IMPORTED_MODULE_2__["AdvancedModeSerivce"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_strategy_basic_mode_service__WEBPACK_IMPORTED_MODULE_3__["BasicModeService"])); };
    ModeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ModeService, factory: ModeService.ɵfac, providedIn: 'root' });
    return ModeService;
}());



/***/ }),

/***/ "GMnZ":
/*!**************************************************************!*\
  !*** ./src/app/services/mode/strategy/basic-mode.service.ts ***!
  \**************************************************************/
/*! exports provided: BasicModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicModeService", function() { return BasicModeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _interaction_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interaction/interaction.service */ "rYTG");
/* harmony import */ var _migration_migration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../migration/migration.service */ "RzJf");
/* harmony import */ var _secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../secrets/secrets.service */ "ZxHC");
/* harmony import */ var _share_url_share_url_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../share-url/share-url.service */ "ngeE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");













var BasicModeService = /** @class */ (function () {
    function BasicModeService(secretsService, shareUrlService, interactionService, migrationService, uiEventService) {
        this.secretsService = secretsService;
        this.shareUrlService = shareUrlService;
        this.interactionService = interactionService;
        this.migrationService = migrationService;
        this.uiEventService = uiEventService;
    }
    BasicModeService.prototype.syncAll = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var secrets, _a, migratedSecrets, allMigrated, shareUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.secretsService.getSecretsObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).toPromise()];
                    case 1:
                        secrets = _b.sent();
                        return [4 /*yield*/, this.migrationService.runSecretsMigration(secrets)];
                    case 2:
                        _b.sent();
                        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.migrationService.deepFilterMigratedSecretsAndWallets(secrets), 2), migratedSecrets = _a[0], allMigrated = _a[1];
                        if (!(migratedSecrets.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.showNoMigratedWalletsAlert()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                    case 4: return [4 /*yield*/, this.shareUrlService.generateShareSecretsURL(migratedSecrets)];
                    case 5:
                        shareUrl = _b.sent();
                        if (!allMigrated) return [3 /*break*/, 6];
                        this.syncAccounts(shareUrl);
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.showExcludedLegacyAccountsAlert(shareUrl)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    BasicModeService.prototype.syncAccounts = function (shareUrl) {
        this.interactionService.startInteraction({
            operationType: _interaction_interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionOperationType"].WALLET_SYNC,
            iacMessage: shareUrl // JGD rename shareUrl
        });
    };
    BasicModeService.prototype.showNoMigratedWalletsAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uiEventService.showTranslatedAlert({
                            header: 'wallet-share-select.alert.wallets-not-migrated.header',
                            message: 'wallet-share-select.alert.wallets-not-migrated.message',
                            backdropDismiss: true,
                            buttons: [
                                {
                                    text: 'wallet-share-select.alert.wallets-not-migrated.button_label'
                                }
                            ]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BasicModeService.prototype.showExcludedLegacyAccountsAlert = function (shareUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uiEventService.showTranslatedAlert({
                            header: 'wallet-share-select.alert.excluded-legacy-accounts.header',
                            message: 'wallet-share-select.alert.excluded-legacy-accounts.message',
                            backdropDismiss: true,
                            buttons: [
                                {
                                    text: 'wallet-share-select.alert.excluded-legacy-accounts.button-reject_label'
                                },
                                {
                                    text: 'wallet-share-select.alert.excluded-legacy-accounts.button-accept_label',
                                    handler: function () {
                                        _this.syncAccounts(shareUrl);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BasicModeService.ɵfac = function BasicModeService_Factory(t) { return new (t || BasicModeService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_share_url_share_url_service__WEBPACK_IMPORTED_MODULE_6__["ShareUrlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_migration_migration_service__WEBPACK_IMPORTED_MODULE_4__["MigrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UiEventService"])); };
    BasicModeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: BasicModeService, factory: BasicModeService.ɵfac, providedIn: 'root' });
    return BasicModeService;
}());



/***/ }),

/***/ "pJcu":
/*!*********************************************************!*\
  !*** ./src/app/pages/tab-accounts/tab-accounts.page.ts ***!
  \*********************************************************/
/*! exports provided: TabAccountsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabAccountsPage", function() { return TabAccountsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_mode_mode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/mode/mode.service */ "BVla");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _secret_edit_secret_edit_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../secret-edit/secret-edit.page */ "3Pyr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_current_secret_current_secret_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/current-secret/current-secret.component */ "etUy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


















function TabAccountsPage_ion_content_10_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TabAccountsPage_ion_content_10_ion_item_1_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r4.navigateToRecoverySettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 2, "tab-wallets.generate-recovery-key.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 4, "tab-wallets.generate-recovery-key.description"));
} }
function TabAccountsPage_ion_content_10_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "airgap-account-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TabAccountsPage_ion_content_10_ng_container_3_Template_airgap_account_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8); var wallet_r6 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r7.goToReceiveAddress(wallet_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var wallet_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("wallet", wallet_r6);
} }
function TabAccountsPage_ion_content_10_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 1, "tab-wallets.empty-state_text"));
} }
var _c0 = function (a0, a1) { return { status: a0, symbol: a1 }; };
function TabAccountsPage_ion_content_10_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, TabAccountsPage_ion_content_10_ion_item_1_Template, 10, 6, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, TabAccountsPage_ion_content_10_ng_container_3_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "walletFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, TabAccountsPage_ion_content_10_div_7_Template, 6, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "walletFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-fab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-fab-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-fab-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "ion-fab-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TabAccountsPage_ion_content_10_Template_ion_fab_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r9.syncWallets(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-fab-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TabAccountsPage_ion_content_10_Template_ion_fab_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r11.addWallet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.isAndroid && ctx_r0.activeSecret && !ctx_r0.activeSecret.hasRecoveryKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](4, 3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 6, ctx_r0.wallets$), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](13, _c0, ctx_r0.AirGapWalletStatus.ACTIVE, ctx_r0.symbolFilter)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.wallets$ && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](8, 8, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 11, ctx_r0.wallets$), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](16, _c0, ctx_r0.AirGapWalletStatus.ACTIVE, ctx_r0.symbolFilter)).length === 0);
} }
var TabAccountsPage = /** @class */ (function () {
    function TabAccountsPage(platform, secretsService, navigationService, modeService) {
        this.platform = platform;
        this.secretsService = secretsService;
        this.navigationService = navigationService;
        this.modeService = modeService;
        this.wallets$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.AirGapWalletStatus = _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["AirGapWalletStatus"];
        this.secrets = this.secretsService.getSecretsObservable();
        this.isAndroid = this.platform.is('android');
    }
    TabAccountsPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.secretsService.getActiveSecretObservable().subscribe(function (secret) {
                    if (secret && secret.wallets) {
                        _this.activeSecret = secret;
                        _this.wallets$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(secret.wallets));
                    }
                });
                this.secrets.subscribe(function (secrets) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        if (secrets.length === 0) {
                            this.navigationService.route('/secret-setup/initial').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_NAVIGATION));
                        }
                        return [2 /*return*/];
                    });
                }); }); // We should never unsubscribe, because we need to watch this in case a user deletes all his secrets
                return [2 /*return*/];
            });
        });
    };
    TabAccountsPage.prototype.goToReceiveAddress = function (wallet) {
        this.navigationService.routeWithState('/account-address', { wallet: wallet }).catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_NAVIGATION));
    };
    TabAccountsPage.prototype.filterItems = function (event) {
        function isValidSymbol(data) {
            return data && typeof data === 'string' && data !== '';
        }
        var value = event.target.value;
        this.symbolFilter = isValidSymbol(value) ? value.trim().toLowerCase() : undefined;
    };
    TabAccountsPage.prototype.syncWallets = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var strategy;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modeService.strategy()];
                    case 1:
                        strategy = _a.sent();
                        return [4 /*yield*/, strategy.syncAll()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabAccountsPage.prototype.addWallet = function () {
        this.navigationService.route('/account-add').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_NAVIGATION));
    };
    TabAccountsPage.prototype.navigateToRecoverySettings = function () {
        this.navigationService
            .routeWithState('/secret-edit', {
            secret: this.activeSecret,
            action: _secret_edit_secret_edit_page__WEBPACK_IMPORTED_MODULE_8__["SecretEditAction"].SET_RECOVERY_KEY
        })
            .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_NAVIGATION));
    };
    TabAccountsPage.ɵfac = function TabAccountsPage_Factory(t) { return new (t || TabAccountsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_7__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_mode_mode_service__WEBPACK_IMPORTED_MODULE_5__["ModeService"])); };
    TabAccountsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: TabAccountsPage, selectors: [["airgap-tab-accounts"]], decls: 11, vars: 7, consts: [[1, "ion-no-border"], ["color", "secondary"], [3, "placeholder", "ionInput"], ["class", "ion-padding-horizontal", 4, "ngIf"], [1, "ion-padding-horizontal"], ["lines", "none", "detail", "true", "class", "ion-margin-vertical", "color", "warning", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "empty-list", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["name", "chevron-up-outline"], ["side", "top"], ["color", "secondary", 3, "click"], ["name", "sync-outline"], ["name", "add"], ["lines", "none", "detail", "true", "color", "warning", 1, "ion-margin-vertical", 3, "click"], ["name", "exit", "slot", "start", "color", "dark"], ["color", "dark", 1, "ion-text-wrap"], [3, "wallet", "click"], [1, "empty-list"], ["src", "./assets/img/no-wallet-added-onboarding.svg"]], template: function TabAccountsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "airgap-current-secret");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-searchbar", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionInput", function TabAccountsPage_Template_ion_searchbar_ionInput_8_listener($event) { return ctx.filterItems($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, TabAccountsPage_ion_content_10_Template, 18, 19, "ion-content", 3);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 3, "tab-wallets.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 5, "tab-wallets.search_placeholder"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.wallets$);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _components_current_secret_current_secret_component__WEBPACK_IMPORTED_MODULE_10__["CurrentSecretComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_12__["AccountItemComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_12__["WalletFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".empty-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  font-weight: 100;\n  font-size: 1.4rem;\n  height: 100%;\n}\n.empty-list[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 8rem;\n}\n.empty-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYi1hY2NvdW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQTtBQUNBO0VBU0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFQRjtBQVJFO0VBQ0UsZUFBQTtBQVVKO0FBUEU7RUFDRSxZQUFBO0FBU0oiLCJmaWxlIjoidGFiLWFjY291bnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBFbXB0eSAqKi9cbi5lbXB0eS1saXN0IHtcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgfVxuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICB9XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });
    return TabAccountsPage;
}());



/***/ }),

/***/ "tdB+":
/*!*****************************************************************!*\
  !*** ./src/app/services/mode/strategy/advanced-mode.service.ts ***!
  \*****************************************************************/
/*! exports provided: AdvancedModeSerivce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedModeSerivce", function() { return AdvancedModeSerivce; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error-handler/error-handler.service */ "626a");
/* harmony import */ var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation/navigation.service */ "r+JB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





var AdvancedModeSerivce = /** @class */ (function () {
    function AdvancedModeSerivce(navigationService) {
        this.navigationService = navigationService;
    }
    AdvancedModeSerivce.prototype.syncAll = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navigationService.route('/account-share-select').catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__["ErrorCategory"].IONIC_NAVIGATION))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedModeSerivce.ɵfac = function AdvancedModeSerivce_Factory(t) { return new (t || AdvancedModeSerivce)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"])); };
    AdvancedModeSerivce.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AdvancedModeSerivce, factory: AdvancedModeSerivce.ɵfac, providedIn: 'root' });
    return AdvancedModeSerivce;
}());



/***/ })

}]);
//# sourceMappingURL=tab-accounts-tab-accounts-module.js.map