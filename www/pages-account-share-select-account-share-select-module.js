(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-share-select-account-share-select-module"],{

/***/ "00lc":
/*!****************************************************************************!*\
  !*** ./src/app/pages/account-share-select/account-share-select.actions.ts ***!
  \****************************************************************************/
/*! exports provided: viewInitialization, initialDataLoaded, secretToggled, syncButtonClicked, alertDismissed, migrationAlertAccepted, walletsNotMigrated, shareUrlGenerated, shareUrlGeneratedExcludedLegacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewInitialization", function() { return viewInitialization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialDataLoaded", function() { return initialDataLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secretToggled", function() { return secretToggled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncButtonClicked", function() { return syncButtonClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertDismissed", function() { return alertDismissed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migrationAlertAccepted", function() { return migrationAlertAccepted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walletsNotMigrated", function() { return walletsNotMigrated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareUrlGenerated", function() { return shareUrlGenerated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareUrlGeneratedExcludedLegacy", function() { return shareUrlGeneratedExcludedLegacy; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var featureName = 'Account Share Select';
/**************** View Lifecycle ****************/
var viewInitialization = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] View Initialization");
var initialDataLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Initial Data Loaded", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**************** User Interaction ****************/
var secretToggled = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Secret Toggled", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var syncButtonClicked = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Sync Button Clicked");
var alertDismissed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Alert Dismissed", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var migrationAlertAccepted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Migration Alert Accepted", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**************** Internal ****************/
var walletsNotMigrated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Wallets Not Migrated");
var shareUrlGenerated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Share URL Generated", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var shareUrlGeneratedExcludedLegacy = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Share URL Generated (Legacy Accounts Excluded)", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "RoA9":
/*!****************************************************************************!*\
  !*** ./src/app/pages/account-share-select/account-share-select.effects.ts ***!
  \****************************************************************************/
/*! exports provided: AccountShareSelectEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountShareSelectEffects", function() { return AccountShareSelectEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/interaction/interaction.service */ "rYTG");
/* harmony import */ var _services_migration_migration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/migration/migration.service */ "RzJf");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _services_share_url_share_url_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/share-url/share-url.service */ "ngeE");
/* harmony import */ var _account_share_select_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-share-select.actions */ "00lc");
/* harmony import */ var _account_share_select_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-share-select.reducers */ "cr/e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");


















var AccountShareSelectEffects = /** @class */ (function () {
    function AccountShareSelectEffects(actions$, store, secretsService, shareUrlService, interactionService, migrationService) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.secretsService = secretsService;
        this.shareUrlService = shareUrlService;
        this.interactionService = interactionService;
        this.migrationService = migrationService;
        this.secrets$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_9__["viewInitialization"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(_this.secretsService.getSecretsObservable()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _ = _b[0], secrets = _b[1];
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_9__["initialDataLoaded"]({ secrets: secrets }));
            }));
        });
        this.shareUrl$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_9__["syncButtonClicked"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(_this.store.select(_account_share_select_reducers__WEBPACK_IMPORTED_MODULE_10__["selectCheckedSecrets"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _ = _b[0], checkedSecrets = _b[1];
                return checkedSecrets.length > 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _ = _b[0], checkedSecrets = _b[1];
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this.generateShareUrl(checkedSecrets)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])());
            }));
        });
        this.sync$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_9__["shareUrlGenerated"], _account_share_select_actions__WEBPACK_IMPORTED_MODULE_9__["migrationAlertAccepted"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (action) {
                _this.syncAccounts(action.shareUrl); // JGD remove typecast
            }));
        }, { dispatch: false });
    }
    AccountShareSelectEffects.prototype.generateShareUrl = function (secrets) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, migratedSecrets, allMigrated, shareUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.migrationService.runSecretsMigration(secrets)];
                    case 1:
                        _b.sent();
                        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.migrationService.deepFilterMigratedSecretsAndWallets(secrets), 2), migratedSecrets = _a[0], allMigrated = _a[1];
                        if (migratedSecrets.length === 0) {
                            return [2 /*return*/, _account_share_select_actions__WEBPACK_IMPORTED_MODULE_9__["walletsNotMigrated"]()];
                        }
                        return [4 /*yield*/, this.shareUrlService.generateShareSecretsURL(migratedSecrets)];
                    case 2:
                        shareUrl = _b.sent();
                        return [2 /*return*/, allMigrated ? _account_share_select_actions__WEBPACK_IMPORTED_MODULE_9__["shareUrlGenerated"]({ shareUrl: shareUrl }) : _account_share_select_actions__WEBPACK_IMPORTED_MODULE_9__["shareUrlGeneratedExcludedLegacy"]({ shareUrl: shareUrl })];
                }
            });
        });
    };
    AccountShareSelectEffects.prototype.syncAccounts = function (shareUrl) {
        this.interactionService.startInteraction({
            operationType: _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionOperationType"].WALLET_SYNC,
            iacMessage: shareUrl
        });
    };
    AccountShareSelectEffects.ɵfac = function AccountShareSelectEffects_Factory(t) { return new (t || AccountShareSelectEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_7__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_share_url_share_url_service__WEBPACK_IMPORTED_MODULE_8__["ShareUrlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_migration_migration_service__WEBPACK_IMPORTED_MODULE_6__["MigrationService"])); };
    AccountShareSelectEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: AccountShareSelectEffects, factory: AccountShareSelectEffects.ɵfac });
    return AccountShareSelectEffects;
}());



/***/ }),

/***/ "Y3LQ":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/account-share-select/account-share-select-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AccountShareSelectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountShareSelectPageRoutingModule", function() { return AccountShareSelectPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_share_select_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-share-select.page */ "iqfO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var routes = [
    {
        path: '',
        component: _account_share_select_page__WEBPACK_IMPORTED_MODULE_1__["AccountShareSelectPage"]
    }
];
var AccountShareSelectPageRoutingModule = /** @class */ (function () {
    function AccountShareSelectPageRoutingModule() {
    }
    AccountShareSelectPageRoutingModule.ɵfac = function AccountShareSelectPageRoutingModule_Factory(t) { return new (t || AccountShareSelectPageRoutingModule)(); };
    AccountShareSelectPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AccountShareSelectPageRoutingModule });
    AccountShareSelectPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return AccountShareSelectPageRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccountShareSelectPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "cr/e":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/account-share-select/account-share-select.reducers.ts ***!
  \*****************************************************************************/
/*! exports provided: initialState, reducer, selectFeatureState, selectSecrets, selectCheckedIds, selectAlert, selectCheckedSecrets, selectIsSecretChecked, selectSyncEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeatureState", function() { return selectFeatureState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSecrets", function() { return selectSecrets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCheckedIds", function() { return selectCheckedIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAlert", function() { return selectAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCheckedSecrets", function() { return selectCheckedSecrets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsSecretChecked", function() { return selectIsSecretChecked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSyncEnabled", function() { return selectSyncEnabled; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _account_share_select_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-share-select.actions */ "00lc");




/**************** Reducers ****************/
var initialState = {
    secrets: {
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].IDLE,
        value: []
    },
    checkedIds: [],
    alert: undefined
};
var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_3__["initialDataLoaded"], function (state, _a) {
    var secrets = _a.secrets;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { secrets: {
            status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].SUCCESS,
            value: secrets
        }, checkedIds: secrets.map(function (secret) { return secret.id; }) }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_3__["secretToggled"], function (state, _a) {
    var secretId = _a.secretId;
    var foundIndex = state.checkedIds.indexOf(secretId);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { checkedIds: foundIndex > -1
            ? state.checkedIds.slice(0, foundIndex).concat(state.checkedIds.slice(foundIndex + 1))
            : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(state.checkedIds, [secretId]) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_3__["walletsNotMigrated"], function (state) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { alert: {
        id: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["generateGUID"])(),
        value: { type: 'walletsNotMigrated' },
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING
    } })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_3__["shareUrlGeneratedExcludedLegacy"], function (state, _a) {
    var shareUrl = _a.shareUrl;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { alert: {
            id: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["generateGUID"])(),
            value: {
                type: 'excludedLegacyAccounts',
                shareUrl: shareUrl
            },
            status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING
        } }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_3__["alertDismissed"], function (state, _a) {
    var id = _a.id;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { alert: state.alert !== undefined
            ? {
                id: state.alert.id,
                value: state.alert.value,
                status: id === state.alert.id ? _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].HANDLED : state.alert.status
            }
            : undefined }));
}));
/**************** Selectors ****************/
var selectFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('accountShareSelect');
var selectSecrets = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) {
    var _a;
    return ({
        status: state.secrets.status,
        value: (_a = state.secrets.value) === null || _a === void 0 ? void 0 : _a.filter(function (secret) { return secret.wallets.length > 0; })
    });
});
var selectCheckedIds = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.checkedIds; });
var selectAlert = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.alert; });
var selectCheckedSecrets = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectSecrets, selectCheckedIds, function (secrets, checked) {
    if (secrets.value === undefined || secrets.value.length === 0) {
        return [];
    }
    var checkedSet = new Set(checked);
    return secrets.value.filter(function (secret) { return checkedSet.has(secret.id); });
});
var selectIsSecretChecked = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectSecrets, selectCheckedIds, function (secrets, checked) {
    if (secrets.value === undefined || secrets.value.length === 0) {
        return {};
    }
    var checkedSet = new Set(checked);
    return secrets.value.reduce(function (record, next) {
        var _a;
        return Object.assign(record, (_a = {}, _a[next.id] = checkedSet.has(next.id), _a));
    }, {});
});
var selectSyncEnabled = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectCheckedIds, function (checked) { return checked.length > 0; });


/***/ }),

/***/ "dval":
/*!***************************************************************************!*\
  !*** ./src/app/pages/account-share-select/account-share-select.module.ts ***!
  \***************************************************************************/
/*! exports provided: AccountShareSelectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountShareSelectPageModule", function() { return AccountShareSelectPageModule; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _account_share_select_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account-share-select-routing.module */ "Y3LQ");
/* harmony import */ var _account_share_select_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-share-select.effects */ "RoA9");
/* harmony import */ var _account_share_select_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-share-select.page */ "iqfO");
/* harmony import */ var _account_share_select_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account-share-select.reducers */ "cr/e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");















var AccountShareSelectPageModule = /** @class */ (function () {
    function AccountShareSelectPageModule() {
    }
    AccountShareSelectPageModule.ɵfac = function AccountShareSelectPageModule_Factory(t) { return new (t || AccountShareSelectPageModule)(); };
    AccountShareSelectPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AccountShareSelectPageModule });
    AccountShareSelectPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _account_share_select_routing_module__WEBPACK_IMPORTED_MODULE_8__["AccountShareSelectPageRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('accountShareSelect', _account_share_select_reducers__WEBPACK_IMPORTED_MODULE_11__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_account_share_select_effects__WEBPACK_IMPORTED_MODULE_9__["AccountShareSelectEffects"]]),
                _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]
            ]] });
    return AccountShareSelectPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AccountShareSelectPageModule, { declarations: [_account_share_select_page__WEBPACK_IMPORTED_MODULE_10__["AccountShareSelectPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _account_share_select_routing_module__WEBPACK_IMPORTED_MODULE_8__["AccountShareSelectPageRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]] }); })();


/***/ }),

/***/ "iqfO":
/*!*************************************************************************!*\
  !*** ./src/app/pages/account-share-select/account-share-select.page.ts ***!
  \*************************************************************************/
/*! exports provided: AccountShareSelectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountShareSelectPage", function() { return AccountShareSelectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _account_share_select_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-share-select.actions */ "00lc");
/* harmony import */ var _account_share_select_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account-share-select.reducers */ "cr/e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function AccountShareSelectPage_ion_list_10_ng_container_1_ion_list_6_airgap_account_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "airgap-account-item", 14);
} if (rf & 2) {
    var wallet_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("wallet", wallet_r5);
} }
var _c0 = function (a0) { return { status: a0 }; };
function AccountShareSelectPage_ion_list_10_ng_container_1_ion_list_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AccountShareSelectPage_ion_list_10_ng_container_1_ion_list_6_airgap_account_item_1_Template, 1, 1, "airgap-account-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "walletFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var secret_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, secret_r2.wallets, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](4, _c0, ctx_r3.AirGapWalletStatus.ACTIVE)));
} }
function AccountShareSelectPage_ion_list_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-checkbox", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function AccountShareSelectPage_ion_list_10_ng_container_1_Template_ion_checkbox_ionChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8); var secret_r2 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r7.toggleSecret(secret_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, AccountShareSelectPage_ion_list_10_ng_container_1_ion_list_6_Template, 3, 6, "ion-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var secret_r2 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](secret_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 3, ctx_r1.isChecked$)[secret_r2.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 5, ctx_r1.isChecked$)[secret_r2.id]);
} }
function AccountShareSelectPage_ion_list_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AccountShareSelectPage_ion_list_10_ng_container_1_Template, 8, 7, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r0.secrets$).value);
} }
var AccountShareSelectPage = /** @class */ (function () {
    function AccountShareSelectPage(store, uiEventService) {
        this.store = store;
        this.uiEventService = uiEventService;
        this.UIResourceStatus = _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"];
        this.AirGapWalletStatus = _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"];
        this.ngDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.secrets$ = this.store.select(_account_share_select_reducers__WEBPACK_IMPORTED_MODULE_8__["selectSecrets"]);
        this.isChecked$ = this.store.select(_account_share_select_reducers__WEBPACK_IMPORTED_MODULE_8__["selectIsSecretChecked"]);
        this.syncEnabled$ = this.store.select(_account_share_select_reducers__WEBPACK_IMPORTED_MODULE_8__["selectSyncEnabled"]);
        this.alert$ = this.store.select(_account_share_select_reducers__WEBPACK_IMPORTED_MODULE_8__["selectAlert"]);
        this.alert$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngDestroyed$)).subscribe(this.showOrDismissAlert.bind(this));
        this.store.dispatch(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_7__["viewInitialization"]());
    }
    AccountShareSelectPage.prototype.ngOnDestroy = function () {
        this.ngDestroyed$.next();
        this.ngDestroyed$.complete();
    };
    AccountShareSelectPage.prototype.toggleSecret = function (secret) {
        this.store.dispatch(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_7__["secretToggled"]({ secretId: secret.id }));
    };
    AccountShareSelectPage.prototype.sync = function () {
        this.store.dispatch(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_7__["syncButtonClicked"]());
    };
    AccountShareSelectPage.prototype.showOrDismissAlert = function (alert) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _b;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        (_a = this.alertElement) === null || _a === void 0 ? void 0 : _a.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_ALERT));
                        if (!((alert === null || alert === void 0 ? void 0 : alert.status) === _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING)) return [3 /*break*/, 2];
                        _b = this;
                        return [4 /*yield*/, this.uiEventService.getTranslatedAlert(this.getAlertData(alert.value))];
                    case 1:
                        _b.alertElement = _c.sent();
                        this.alertElement.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_ALERT));
                        return [2 /*return*/, this.alertElement
                                .onWillDismiss()
                                .then(function () {
                                _this.store.dispatch(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_7__["alertDismissed"]({ id: alert.id }));
                            })
                                .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_ALERT))];
                    case 2:
                        this.alertElement = undefined;
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountShareSelectPage.prototype.getAlertData = function (alert) {
        switch (alert.type) {
            case 'walletsNotMigrated':
                return this.walletsNotMigratedAlert();
            case 'excludedLegacyAccounts':
                return this.excludedLegacyAccountsAlert(alert.shareUrl);
            case 'unknownError':
                return this.unknownErrorAlert(alert.message);
            default:
                return {};
        }
    };
    AccountShareSelectPage.prototype.walletsNotMigratedAlert = function () {
        return {
            header: 'wallet-share-select.alert.wallets-not-migrated.header',
            message: 'wallet-share-select.alert.wallets-not-migrated.message',
            backdropDismiss: true,
            buttons: [
                {
                    text: 'wallet-share-select.alert.wallets-not-migrated.button_label'
                }
            ]
        };
    };
    AccountShareSelectPage.prototype.excludedLegacyAccountsAlert = function (shareUrl) {
        var _this = this;
        return {
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
                        _this.store.dispatch(_account_share_select_actions__WEBPACK_IMPORTED_MODULE_7__["migrationAlertAccepted"]({ shareUrl: shareUrl }));
                    }
                }
            ]
        };
    };
    AccountShareSelectPage.prototype.unknownErrorAlert = function (message) {
        return {
            header: 'wallet-share-select.alert.unknown-error.header',
            message: message !== null && message !== void 0 ? message : 'wallet-share-select.alert.unknown-error.message',
            backdropDismiss: true,
            buttons: [
                {
                    text: 'wallet-share-select.alert.unknown-error.button_label'
                }
            ]
        };
    };
    AccountShareSelectPage.ɵfac = function AccountShareSelectPage_Factory(t) { return new (t || AccountShareSelectPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UiEventService"])); };
    AccountShareSelectPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AccountShareSelectPage, selectors: [["airgap-account-share-select"]], decls: 17, vars: 15, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/tabs/tab-accounts"], [1, "ion-padding"], [1, "ion-padding-bottom", 3, "innerHTML"], ["lines", "none", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "disabled", "click"], ["lines", "none"], [4, "ngFor", "ngForOf"], ["detail", "false", 1, "ion-no-padding"], [1, "white"], ["slot", "end", "color", "primary", 3, "checked", "ionChange"], [3, "wallet", 4, "ngFor", "ngForOf"], [3, "wallet"]], template: function AccountShareSelectPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-back-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "h3", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, AccountShareSelectPage_ion_list_10_Template, 3, 3, "ion-list", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-fab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AccountShareSelectPage_Template_ion_button_click_13_listener() { return ctx.sync(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 5, "wallet-share-select.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 7, "wallet-share-select.heading"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 9, ctx.secrets$).status === ctx.UIResourceStatus.SUCCESS);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 11, ctx.syncEnabled$));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 13, "wallet-share-select.sync_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["BooleanValueAccessor"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["AccountItemComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["WalletFilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXNoYXJlLXNlbGVjdC5wYWdlLnNjc3MifQ== */"] });
    return AccountShareSelectPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-share-select-account-share-select-module.js.map