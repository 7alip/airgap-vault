(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-migration-migration-module"],{

/***/ "FNxK":
/*!******************************************************!*\
  !*** ./src/app/pages/migration/migration.actions.ts ***!
  \******************************************************/
/*! exports provided: viewWillEnter, viewLeft, navigationDataLoading, navigationDataLoaded, invalidData, migrationStarted, finished, paranoiaAccepted, paranoiaRejected, bip39PassphraseProvided, bip39PassphraseRejected, alertDismissed, nextSecret, secretSkipped, allSecretsHandled, nextWallet, walletSkipped, allWalletsHandled, paranoiaDetected, invalidBip39Passphrase, unknownError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewWillEnter", function() { return viewWillEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewLeft", function() { return viewLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationDataLoading", function() { return navigationDataLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationDataLoaded", function() { return navigationDataLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidData", function() { return invalidData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migrationStarted", function() { return migrationStarted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finished", function() { return finished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paranoiaAccepted", function() { return paranoiaAccepted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paranoiaRejected", function() { return paranoiaRejected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bip39PassphraseProvided", function() { return bip39PassphraseProvided; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bip39PassphraseRejected", function() { return bip39PassphraseRejected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertDismissed", function() { return alertDismissed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextSecret", function() { return nextSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secretSkipped", function() { return secretSkipped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allSecretsHandled", function() { return allSecretsHandled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextWallet", function() { return nextWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walletSkipped", function() { return walletSkipped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allWalletsHandled", function() { return allWalletsHandled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paranoiaDetected", function() { return paranoiaDetected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidBip39Passphrase", function() { return invalidBip39Passphrase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownError", function() { return unknownError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var featureName = 'Migration';
/**************** View Lifecycle ****************/
var viewWillEnter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] View Will Enter");
var viewLeft = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] View Left");
/**************** Navigation Data ****************/
var navigationDataLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Navigation Data Loading");
var navigationDataLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Navigation Data Loaded", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var invalidData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Invalid Navigation Data");
/**************** User Interaction ****************/
var migrationStarted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Migration Started");
var finished = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Finished");
var paranoiaAccepted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Paranoia Accepted");
var paranoiaRejected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Paranoia Rejected");
var bip39PassphraseProvided = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] BIP-39 Passphrase Provided", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var bip39PassphraseRejected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] BIP-39 Passphrase rejected");
var alertDismissed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Alert Dismissed", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**************** Internal ****************/
var nextSecret = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Next Secret", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var secretSkipped = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Secret Skipped", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var allSecretsHandled = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] All Secrets Handled");
var nextWallet = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Next Wallet", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var walletSkipped = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Wallet Skipped", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var allWalletsHandled = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] All Wallets Handled");
var paranoiaDetected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Paranoia Detected", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var invalidBip39Passphrase = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Invalid BIP-39 Passphrase", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var unknownError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Unknown Error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "RQmS":
/*!***************************************************!*\
  !*** ./src/app/pages/migration/migration.page.ts ***!
  \***************************************************/
/*! exports provided: MigrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigrationPage", function() { return MigrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _migration_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./migration.actions */ "FNxK");
/* harmony import */ var _migration_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./migration.reducers */ "utEC");
/* harmony import */ var _migration_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./migration.utils */ "xtTx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
















function MigrationPage_ion_list_11_ng_container_4_ng_container_4_ion_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-spinner", 21);
} }
function MigrationPage_ion_list_11_ng_container_4_ng_container_4_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 22);
} }
function MigrationPage_ion_list_11_ng_container_4_ng_container_4_ion_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 23);
} }
function MigrationPage_ion_list_11_ng_container_4_ng_container_4_ion_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 24);
} }
function MigrationPage_ion_list_11_ng_container_4_ng_container_4_ion_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 25);
} }
function MigrationPage_ion_list_11_ng_container_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MigrationPage_ion_list_11_ng_container_4_ng_container_4_ion_spinner_1_Template, 1, 0, "ion-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, MigrationPage_ion_list_11_ng_container_4_ng_container_4_ion_icon_2_Template, 1, 0, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, MigrationPage_ion_list_11_ng_container_4_ng_container_4_ion_icon_3_Template, 1, 0, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, MigrationPage_ion_list_11_ng_container_4_ng_container_4_ion_icon_4_Template, 1, 0, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, MigrationPage_ion_list_11_ng_container_4_ng_container_4_ion_icon_5_Template, 1, 0, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var group_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", group_r4.status === "migrating");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", group_r4.status === "migrated");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", group_r4.status === "skipped");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", group_r4.status === "partiallyMigrated");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", group_r4.status === "waiting");
} }
function MigrationPage_ion_list_11_ng_container_4_ion_item_8_ng_container_3_ion_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-spinner", 32);
} }
function MigrationPage_ion_list_11_ng_container_4_ion_item_8_ng_container_3_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 33);
} }
function MigrationPage_ion_list_11_ng_container_4_ion_item_8_ng_container_3_ion_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 34);
} }
function MigrationPage_ion_list_11_ng_container_4_ion_item_8_ng_container_3_ion_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 35);
} }
function MigrationPage_ion_list_11_ng_container_4_ion_item_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MigrationPage_ion_list_11_ng_container_4_ion_item_8_ng_container_3_ion_spinner_1_Template, 1, 0, "ion-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, MigrationPage_ion_list_11_ng_container_4_ion_item_8_ng_container_3_ion_icon_2_Template, 1, 0, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, MigrationPage_ion_list_11_ng_container_4_ion_item_8_ng_container_3_ion_icon_3_Template, 1, 0, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, MigrationPage_ion_list_11_ng_container_4_ion_item_8_ng_container_3_ion_icon_4_Template, 1, 0, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var wallet_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", wallet_r13.status === "migrating");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", wallet_r13.status === "migrated");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", wallet_r13.status === "skipped");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", wallet_r13.status === "waiting");
} }
function MigrationPage_ion_list_11_ng_container_4_ion_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "airgap-account-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, MigrationPage_ion_list_11_ng_container_4_ion_item_8_ng_container_3_Template, 5, 4, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var wallet_r13 = ctx.$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("wallet", wallet_r13.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, ctx_r6.isRunning$) || _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 4, ctx_r6.isDone$));
} }
function MigrationPage_ion_list_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, MigrationPage_ion_list_11_ng_container_4_ng_container_4_Template, 6, 5, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, MigrationPage_ion_list_11_ng_container_4_ion_item_8_Template, 6, 6, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var group_r4 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](group_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 3, ctx_r3.isRunning$) || _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 5, ctx_r3.isDone$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", group_r4.wallets);
} }
function MigrationPage_ion_list_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-list-header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, MigrationPage_ion_list_11_ng_container_4_Template, 9, 7, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "migration.list.header"), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 4, ctx_r0.walletGroups$).value);
} }
function MigrationPage_ion_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MigrationPage_ion_button_14_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r20.run(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx_r1.isRunning$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, "migration.button-run_label"), " ");
} }
function MigrationPage_ion_button_17_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MigrationPage_ion_button_17_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r22.finish(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "migration.button-done_label"), " ");
} }
var MigrationPage = /** @class */ (function () {
    function MigrationPage(store, uiEventService, translateService) {
        this.store = store;
        this.uiEventService = uiEventService;
        this.translateService = translateService;
        this.UIResourceStatus = _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"];
        this.ngDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.walletGroups$ = this.store.select(_migration_reducers__WEBPACK_IMPORTED_MODULE_8__["selectMigrationWalletGroups"]);
        this.isRunning$ = this.store.select(_migration_reducers__WEBPACK_IMPORTED_MODULE_8__["selectIsRunning"]);
        this.isDone$ = this.store.select(_migration_reducers__WEBPACK_IMPORTED_MODULE_8__["selectIsDone"]);
        this.alert$ = this.store.select(_migration_reducers__WEBPACK_IMPORTED_MODULE_8__["selectAlert"]);
        this.alert$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngDestroyed$)).subscribe(this.showOrDismissAlert.bind(this));
    }
    MigrationPage.prototype.ionViewWillEnter = function () {
        this.store.dispatch(_migration_actions__WEBPACK_IMPORTED_MODULE_7__["viewWillEnter"]());
    };
    MigrationPage.prototype.ionViewDidLeave = function () {
        this.store.dispatch(_migration_actions__WEBPACK_IMPORTED_MODULE_7__["viewLeft"]());
    };
    MigrationPage.prototype.ngOnDestroy = function () {
        this.ngDestroyed$.next();
        this.ngDestroyed$.complete();
    };
    MigrationPage.prototype.run = function () {
        this.store.dispatch(_migration_actions__WEBPACK_IMPORTED_MODULE_7__["migrationStarted"]());
    };
    MigrationPage.prototype.finish = function () {
        this.store.dispatch(_migration_actions__WEBPACK_IMPORTED_MODULE_7__["finished"]());
    };
    MigrationPage.prototype.showOrDismissAlert = function (alert) {
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
                                _this.store.dispatch(_migration_actions__WEBPACK_IMPORTED_MODULE_7__["alertDismissed"]({ id: alert.id }));
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
    MigrationPage.prototype.getAlertData = function (alert) {
        switch (alert.type) {
            case 'paranoiaInfo':
                return this.paranoiaInfoAlert(alert.label);
            case 'bip39Passphrase':
                return this.bip39PassphraseAlert(alert.address, alert.protocolName);
            case 'unknownError':
                return this.unknownErrorAlert(alert.message);
            default:
                return {};
        }
    };
    MigrationPage.prototype.paranoiaInfoAlert = function (label) {
        var _this = this;
        return {
            header: 'migration.alert.paranoia-info.header',
            message: this.translateService.instant('migration.alert.paranoia-info.message', {
                label: label
            }),
            backdropDismiss: false,
            buttons: [
                {
                    text: 'migration.alert.paranoia-info.button-skip_label',
                    handler: function () {
                        _this.store.dispatch(_migration_actions__WEBPACK_IMPORTED_MODULE_7__["paranoiaRejected"]());
                    }
                },
                {
                    text: 'migration.alert.paranoia-info.button-ok_label',
                    handler: function () {
                        _this.store.dispatch(_migration_actions__WEBPACK_IMPORTED_MODULE_7__["paranoiaAccepted"]());
                    }
                }
            ]
        };
    };
    MigrationPage.prototype.bip39PassphraseAlert = function (address, protocol) {
        var _this = this;
        return {
            header: 'migration.alert.bip39-passphrase.header',
            message: this.translateService.instant('migration.alert.bip39-passphrase.message', {
                address: Object(_migration_utils__WEBPACK_IMPORTED_MODULE_9__["shortenAddress"])(address),
                protocol: protocol
            }),
            backdropDismiss: false,
            inputs: [
                {
                    name: 'bip39Passphrase',
                    type: 'password',
                    placeholder: 'migration.alert.bip39-passphrase.input-placeholder_label'
                }
            ],
            buttons: [
                {
                    text: 'migration.alert.bip39-passphrase.button-skip_label',
                    handler: function () {
                        _this.store.dispatch(_migration_actions__WEBPACK_IMPORTED_MODULE_7__["bip39PassphraseRejected"]());
                    }
                },
                {
                    text: 'migration.alert.bip39-passphrase.button-ok_label',
                    handler: function (result) {
                        var _a;
                        var passphrase = (_a = result.bip39Passphrase) !== null && _a !== void 0 ? _a : '';
                        _this.store.dispatch(_migration_actions__WEBPACK_IMPORTED_MODULE_7__["bip39PassphraseProvided"]({ passphrase: passphrase }));
                    }
                }
            ]
        };
    };
    MigrationPage.prototype.unknownErrorAlert = function (message) {
        return {
            header: 'migration.alert.unknown-error.header',
            message: message !== null && message !== void 0 ? message : 'migration.alert.unknown-error.message',
            backdropDismiss: true,
            buttons: [
                {
                    text: 'migration.alert.unknown-error.button_label'
                }
            ]
        };
    };
    MigrationPage.ɵfac = function MigrationPage_Factory(t) { return new (t || MigrationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UiEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
    MigrationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: MigrationPage, selectors: [["airgap-migration"]], decls: 20, vars: 19, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/tabs/tab-accounts"], [1, "ion-padding"], [1, "ion-padding-bottom"], ["lines", "none", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "disabled", "click", 4, "ngIf"], ["color", "primary", "shape", "round", 3, "click", 4, "ngIf"], ["lines", "none"], [1, "ion-no-padding"], ["color", "light", 3, "innerHtml"], [4, "ngFor", "ngForOf"], ["detail", "false", 1, "ion-no-padding"], ["color", "light"], [4, "ngIf"], ["name", "lines", "slot", "end", 4, "ngIf"], ["name", "checkmark-done-outline", "slot", "end", 4, "ngIf"], ["name", "close-outline", "slot", "end", 4, "ngIf"], ["name", "alert-outline", "slot", "end", 4, "ngIf"], ["name", "time-outline", "slot", "end", 4, "ngIf"], ["name", "lines", "slot", "end"], ["name", "checkmark-done-outline", "slot", "end"], ["name", "close-outline", "slot", "end"], ["name", "alert-outline", "slot", "end"], ["name", "time-outline", "slot", "end"], [1, "airgap-account-item-migration"], [3, "wallet"], ["name", "lines-small", "slot", "end", 4, "ngIf"], ["name", "checkmark-outline", "size", "small", "slot", "end", 4, "ngIf"], ["name", "close-outline", "size", "small", "slot", "end", 4, "ngIf"], ["name", "time-outline", "size", "small", "slot", "end", 4, "ngIf"], ["name", "lines-small", "slot", "end"], ["name", "checkmark-outline", "size", "small", "slot", "end"], ["name", "close-outline", "size", "small", "slot", "end"], ["name", "time-outline", "size", "small", "slot", "end"], ["color", "primary", "shape", "round", 3, "disabled", "click"], ["color", "primary", "shape", "round", 3, "click"]], template: function MigrationPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-back-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "h3", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, MigrationPage_ion_list_11_Template, 6, 6, "ion-list", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-fab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, MigrationPage_ion_button_14_Template, 4, 6, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, MigrationPage_ion_button_17_Template, 3, 3, "ion-button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 5, "migration.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 7, "migration.heading"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 9, ctx.walletGroups$).status === ctx.UIResourceStatus.SUCCESS);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 11, ctx.walletGroups$).status === ctx.UIResourceStatus.SUCCESS && !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 13, ctx.isDone$));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 15, ctx.walletGroups$).status !== ctx.UIResourceStatus.IDLE && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 17, ctx.isDone$));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonIcon"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["AccountItemComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["ion-icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21pZ3JhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoibWlncmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4iXX0= */"] });
    return MigrationPage;
}());



/***/ }),

/***/ "VKpk":
/*!*****************************************************!*\
  !*** ./src/app/pages/migration/migration.module.ts ***!
  \*****************************************************/
/*! exports provided: MigrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigrationPageModule", function() { return MigrationPageModule; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _migration_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./migration-routing.module */ "uwNS");
/* harmony import */ var _migration_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./migration.effects */ "kyos");
/* harmony import */ var _migration_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./migration.page */ "RQmS");
/* harmony import */ var _migration_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./migration.reducers */ "utEC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");















var MigrationPageModule = /** @class */ (function () {
    function MigrationPageModule() {
    }
    MigrationPageModule.ɵfac = function MigrationPageModule_Factory(t) { return new (t || MigrationPageModule)(); };
    MigrationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: MigrationPageModule });
    MigrationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _migration_routing_module__WEBPACK_IMPORTED_MODULE_8__["MigrationPageRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('migration', _migration_reducers__WEBPACK_IMPORTED_MODULE_11__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_migration_effects__WEBPACK_IMPORTED_MODULE_9__["MigrationEffects"]]),
                _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]
            ]] });
    return MigrationPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](MigrationPageModule, { declarations: [_migration_page__WEBPACK_IMPORTED_MODULE_10__["MigrationPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _migration_routing_module__WEBPACK_IMPORTED_MODULE_8__["MigrationPageRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]] }); })();


/***/ }),

/***/ "jC73":
/*!********************************!*\
  !*** ./src/app/utils/retry.ts ***!
  \********************************/
/*! exports provided: retry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

function retry(setup) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var result, currentAction, args, error_1, nextAction;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    args = setup.initArgs;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    currentAction = 'abort';
                    return [4 /*yield*/, setup.action(args)];
                case 2:
                    result = _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    return [4 /*yield*/, setup.onFailure(error_1)];
                case 4:
                    nextAction = _a.sent();
                    currentAction = nextAction.type;
                    args = nextAction.nextArgs;
                    return [3 /*break*/, 5];
                case 5:
                    if (currentAction === 'retry') return [3 /*break*/, 1];
                    _a.label = 6;
                case 6: return [2 /*return*/, result];
            }
        });
    });
}


/***/ }),

/***/ "kyos":
/*!******************************************************!*\
  !*** ./src/app/pages/migration/migration.effects.ts ***!
  \******************************************************/
/*! exports provided: MigrationEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigrationEffects", function() { return MigrationEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bip39 */ "KckP");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_migration_migration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/migration/migration.service */ "RzJf");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _utils_migration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/migration */ "RYuY");
/* harmony import */ var _utils_retry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/retry */ "jC73");
/* harmony import */ var _migration_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./migration.actions */ "FNxK");
/* harmony import */ var _migration_reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./migration.reducers */ "utEC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");





















var PromiseKey;
(function (PromiseKey) {
    PromiseKey["PARANOIA_ACCEPTED"] = "paranoiaAccepted";
    PromiseKey["BIP39_PASSPHRASE"] = "bip39Passphrase";
})(PromiseKey || (PromiseKey = {}));
var MigrationEffects = /** @class */ (function () {
    function MigrationEffects(actions$, store, navigationService, secretsService, migrationService) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.navigationService = navigationService;
        this.secretsService = secretsService;
        this.migrationService = migrationService;
        this.exposedPromises = new _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ExposedPromiseRegistry"]();
        this.navigationData$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["viewWillEnter"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(_this.secretsService.getSecretsObservable()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _ = _b[0], secrets = _b[1];
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["navigationDataLoading"]()), Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this.loadNavigationData(secrets)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()));
            }));
        });
        this.migrationProgress$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["migrationStarted"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(_this.store.select(_migration_reducers__WEBPACK_IMPORTED_MODULE_14__["selectTargetSecrets"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(_this.store.select(_migration_reducers__WEBPACK_IMPORTED_MODULE_14__["selectTargetWalletKeys"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (_a) {
                var _b;
                var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_c[0], 2), _ = _d[0], secrets = _d[1], targetWalletKeys = _c[1];
                return _this.migrate((_b = secrets.value) !== null && _b !== void 0 ? _b : [], targetWalletKeys);
            }));
        });
        this.paranoiaAccepted$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["paranoiaAccepted"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
                _this.exposedPromises.resolve(PromiseKey.PARANOIA_ACCEPTED, true);
            }));
        }, { dispatch: false });
        this.paranoiaRejected$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["paranoiaRejected"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
                _this.exposedPromises.resolve(PromiseKey.PARANOIA_ACCEPTED, false);
            }));
        }, { dispatch: false });
        this.bip39Passphrase$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["bip39PassphraseProvided"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (action) {
                _this.exposedPromises.resolve(PromiseKey.BIP39_PASSPHRASE, action.passphrase);
            }));
        }, { dispatch: false });
        this.bip39PassphraseRejected$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["bip39PassphraseRejected"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
                _this.exposedPromises.resolve(PromiseKey.BIP39_PASSPHRASE, undefined);
            }));
        }, { dispatch: false });
        this.finished$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["finished"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
                _this.finish();
            }));
        }, { dispatch: false });
        this.onLeft$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["viewLeft"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
                _this.callCallbacks();
            }));
        }, { dispatch: false });
    }
    MigrationEffects.prototype.loadNavigationData = function (allSecrets) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var state, _a, secrets, targetWalletKeys;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                state = this.navigationService.getState();
                this.onSuccess = state.onSuccess;
                this.onError = state.onError;
                _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.getSecretsAndTargetWalletKeys(state, allSecrets), 2), secrets = _a[0], targetWalletKeys = _a[1];
                return [2 /*return*/, secrets !== undefined && targetWalletKeys !== undefined
                        ? _migration_actions__WEBPACK_IMPORTED_MODULE_13__["navigationDataLoaded"]({ secrets: secrets, targetWalletKeys: targetWalletKeys })
                        : _migration_actions__WEBPACK_IMPORTED_MODULE_13__["invalidData"]()];
            });
        });
    };
    MigrationEffects.prototype.getSecretsAndTargetWalletKeys = function (state, allSecrets) {
        if (state.secrets !== undefined) {
            var secrets = state.secrets.filter(function (secret) { return !Object(_utils_migration__WEBPACK_IMPORTED_MODULE_11__["isSecretMigrated"])(secret); });
            var walletKeys = Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["flattened"])(secrets.map(function (secret) {
                return secret.wallets
                    .filter(function (wallet) { return wallet.status === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE && !Object(_utils_migration__WEBPACK_IMPORTED_MODULE_11__["isWalletMigrated"])(wallet); })
                    .map(function (wallet) { return wallet.publicKey; });
            }));
            return [secrets, walletKeys];
        }
        if (state.wallets !== undefined) {
            var wallets = state.wallets;
            var walletKeys = wallets
                .filter(function (wallet) { return !Object(_utils_migration__WEBPACK_IMPORTED_MODULE_11__["isWalletMigrated"])(wallet); })
                .map(function (wallet) { return wallet.publicKey; });
            var walletKeysSet_1 = new Set(walletKeys);
            var secrets = allSecrets.filter(function (secret) {
                return secret.wallets.some(function (wallet) { return walletKeysSet_1.has(wallet.publicKey); });
            });
            return [secrets, walletKeys];
        }
        return [undefined, undefined];
    };
    MigrationEffects.prototype.migrate = function (secrets, targetWalletKeys) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (subscriber) {
            // tslint:disable-next-line: no-floating-promises
            new Promise(function (resolve) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var targetWalletKeysSet, secrets_1, secrets_1_1, secret, e_1_1;
                var e_1, _a;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            targetWalletKeysSet = new Set(targetWalletKeys);
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 6, 7, 8]);
                            secrets_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(secrets), secrets_1_1 = secrets_1.next();
                            _b.label = 2;
                        case 2:
                            if (!!secrets_1_1.done) return [3 /*break*/, 5];
                            secret = secrets_1_1.value;
                            return [4 /*yield*/, this.migrateSecret(subscriber, secret, targetWalletKeysSet)];
                        case 3:
                            _b.sent();
                            _b.label = 4;
                        case 4:
                            secrets_1_1 = secrets_1.next();
                            return [3 /*break*/, 2];
                        case 5: return [3 /*break*/, 8];
                        case 6:
                            e_1_1 = _b.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 8];
                        case 7:
                            try {
                                if (secrets_1_1 && !secrets_1_1.done && (_a = secrets_1.return)) _a.call(secrets_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                            return [7 /*endfinally*/];
                        case 8:
                            subscriber.next(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["allSecretsHandled"]());
                            resolve();
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (error) {
                subscriber.next(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["unknownError"]({ message: typeof error === 'string' ? error : error.message }));
            })
                .finally(function () {
                subscriber.complete();
            });
        });
    };
    MigrationEffects.prototype.migrateSecret = function (subscriber, secret, targetWalletKeys) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var paranoiaAccepted, entropy, mnemonic, _a, _b, wallet, e_2_1;
            var e_2, _c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        subscriber.next(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["nextSecret"]({ id: secret.id }));
                        if (!secret.isParanoia) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.waitForParanoiaAccepted(subscriber, secret)];
                    case 1:
                        paranoiaAccepted = _d.sent();
                        if (!paranoiaAccepted) {
                            subscriber.next(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["secretSkipped"]({ id: secret.id }));
                            return [2 /*return*/];
                        }
                        _d.label = 2;
                    case 2: return [4 /*yield*/, this.secretsService.retrieveEntropyForSecret(secret)];
                    case 3:
                        entropy = _d.sent();
                        mnemonic = Object(bip39__WEBPACK_IMPORTED_MODULE_5__["entropyToMnemonic"])(entropy);
                        return [4 /*yield*/, this.migrationService.migrateSecret(secret, { mnemonic: mnemonic, persist: false })];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 10, 11, 12]);
                        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(secret.wallets.filter(function (wallet) { return targetWalletKeys.has(wallet.publicKey); })), _b = _a.next();
                        _d.label = 6;
                    case 6:
                        if (!!_b.done) return [3 /*break*/, 9];
                        wallet = _b.value;
                        return [4 /*yield*/, this.migrateWallet(subscriber, wallet, mnemonic)];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8:
                        _b = _a.next();
                        return [3 /*break*/, 6];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 12:
                        subscriber.next(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["allWalletsHandled"]());
                        return [4 /*yield*/, this.secretsService.addOrUpdateSecret(secret, { setActive: false })];
                    case 13:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MigrationEffects.prototype.waitForParanoiaAccepted = function (subscriber, secret) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                subscriber.next(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["paranoiaDetected"]({ secretId: secret.id }));
                return [2 /*return*/, this.exposedPromises.yield(PromiseKey.PARANOIA_ACCEPTED)];
            });
        });
    };
    MigrationEffects.prototype.migrateWallet = function (subscriber, wallet, mnemonic) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        subscriber.next(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["nextWallet"]({ publicKey: wallet.publicKey }));
                        return [4 /*yield*/, Object(_utils_retry__WEBPACK_IMPORTED_MODULE_12__["retry"])({
                                initArgs: '',
                                action: function (bip39Passphrase) { return _this.migrationService.migrateWallet(wallet, { mnemonic: mnemonic, bip39Passphrase: bip39Passphrase, persist: false }); },
                                onFailure: function (error) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                    var bip39Passphrase;
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!this.isInvalidBip39PassphraseError(error)) return [3 /*break*/, 2];
                                                return [4 /*yield*/, this.askForBip39Passphrase(subscriber, wallet)];
                                            case 1:
                                                bip39Passphrase = _a.sent();
                                                if (bip39Passphrase === undefined) {
                                                    subscriber.next(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["walletSkipped"]({ publicKey: wallet.publicKey }));
                                                    return [2 /*return*/, { type: 'abort' }];
                                                }
                                                return [2 /*return*/, {
                                                        type: 'retry',
                                                        nextArgs: bip39Passphrase
                                                    }];
                                            case 2:
                                                subscriber.next(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["unknownError"]({ message: typeof error === 'string' ? error : error.message }));
                                                return [2 /*return*/, { type: 'abort' }];
                                        }
                                    });
                                }); }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MigrationEffects.prototype.askForBip39Passphrase = function (subscriber, wallet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                subscriber.next(_migration_actions__WEBPACK_IMPORTED_MODULE_13__["invalidBip39Passphrase"]({ protocolIdentifier: wallet.protocol.identifier, publicKey: wallet.publicKey }));
                return [2 /*return*/, this.exposedPromises.yield(PromiseKey.BIP39_PASSPHRASE)];
            });
        });
    };
    MigrationEffects.prototype.finish = function () {
        this.navigationService.back();
    };
    MigrationEffects.prototype.callCallbacks = function () {
        if (this.onSuccess !== undefined) {
            this.onSuccess();
        }
    };
    MigrationEffects.prototype.isInvalidBip39PassphraseError = function (error) {
        var _a;
        return (_a = error.message) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith('invalid bip-39 passphrase');
    };
    MigrationEffects.ɵfac = function MigrationEffects_Factory(t) { return new (t || MigrationEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_10__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_services_migration_migration_service__WEBPACK_IMPORTED_MODULE_8__["MigrationService"])); };
    MigrationEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({ token: MigrationEffects, factory: MigrationEffects.ɵfac });
    return MigrationEffects;
}());



/***/ }),

/***/ "utEC":
/*!*******************************************************!*\
  !*** ./src/app/pages/migration/migration.reducers.ts ***!
  \*******************************************************/
/*! exports provided: initialState, reducer, selectFeatureState, selectTargetSecrets, selectTargetWalletKeys, selectHandledSecretIds, selectHandledWalletKeys, selectCurrentlyHandledSecretId, selectCurrentlyHandledWalletKey, selectAlert, selectMigrationWalletGroups, selectIsRunning, selectIsDone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeatureState", function() { return selectFeatureState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTargetSecrets", function() { return selectTargetSecrets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTargetWalletKeys", function() { return selectTargetWalletKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHandledSecretIds", function() { return selectHandledSecretIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHandledWalletKeys", function() { return selectHandledWalletKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentlyHandledSecretId", function() { return selectCurrentlyHandledSecretId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentlyHandledWalletKey", function() { return selectCurrentlyHandledWalletKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAlert", function() { return selectAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMigrationWalletGroups", function() { return selectMigrationWalletGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsRunning", function() { return selectIsRunning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsDone", function() { return selectIsDone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _migration_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./migration.actions */ "FNxK");
/* harmony import */ var _migration_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./migration.utils */ "xtTx");
/**************** STATE ****************/





/**************** Reducers ****************/
var initialState = {
    targetSecrets: {
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].IDLE,
        value: []
    },
    targetWalletKeys: [],
    handledSecretIds: [],
    handledWalletKeys: [],
    currentlyHandledSecretId: undefined,
    currentlyHandledWalletKey: undefined,
    alert: undefined
};
var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_migration_actions__WEBPACK_IMPORTED_MODULE_3__["navigationDataLoading"], function (state) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { targetSecrets: {
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].LOADING,
        value: state.targetSecrets.value
    } })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_migration_actions__WEBPACK_IMPORTED_MODULE_3__["navigationDataLoaded"], function (state, _a) {
    var secrets = _a.secrets, targetWalletKeys = _a.targetWalletKeys;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { targetSecrets: {
            status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].SUCCESS,
            value: secrets
        }, targetWalletKeys: targetWalletKeys, handledSecretIds: [], handledWalletKeys: [], currentlyHandledSecretId: undefined, currentlyHandledWalletKey: undefined, alert: undefined }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_migration_actions__WEBPACK_IMPORTED_MODULE_3__["invalidData"], function (state) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { targetSecrets: {
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].ERROR,
        value: state.targetSecrets.value
    } })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_migration_actions__WEBPACK_IMPORTED_MODULE_3__["nextSecret"], function (state, _a) {
    var id = _a.id;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { handledSecretIds: state.currentlyHandledSecretId !== undefined ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(state.handledSecretIds, [state.currentlyHandledSecretId]) : state.handledSecretIds, currentlyHandledSecretId: id }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_migration_actions__WEBPACK_IMPORTED_MODULE_3__["secretSkipped"], function (state, _a) {
    var _b, _c;
    var id = _a.id;
    var secret = (_b = state.targetSecrets.value) === null || _b === void 0 ? void 0 : _b.find(function (secret) { return secret.id === id; });
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { handledWalletKeys: state.handledWalletKeys.concat((_c = secret === null || secret === void 0 ? void 0 : secret.wallets.map(function (wallet) { return wallet.publicKey; })) !== null && _c !== void 0 ? _c : []) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_migration_actions__WEBPACK_IMPORTED_MODULE_3__["allSecretsHandled"], function (state) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { handledSecretIds: state.currentlyHandledSecretId !== undefined ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(state.handledSecretIds, [state.currentlyHandledSecretId]) : state.handledSecretIds, currentlyHandledSecretId: undefined })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_migration_actions__WEBPACK_IMPORTED_MODULE_3__["nextWallet"], function (state, _a) {
    var publicKey = _a.publicKey;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { handledWalletKeys: state.currentlyHandledWalletKey !== undefined
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(state.handledWalletKeys, [state.currentlyHandledWalletKey]) : state.handledWalletKeys, currentlyHandledWalletKey: publicKey }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_migration_actions__WEBPACK_IMPORTED_MODULE_3__["allWalletsHandled"], function (state) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { handledWalletKeys: state.currentlyHandledWalletKey !== undefined
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(state.handledWalletKeys, [state.currentlyHandledWalletKey]) : state.handledWalletKeys, currentlyHandledWalletKey: undefined })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_migration_actions__WEBPACK_IMPORTED_MODULE_3__["paranoiaDetected"], function (state, _a) {
    var _b;
    var secretId = _a.secretId;
    var secret = (_b = state.targetSecrets.value) === null || _b === void 0 ? void 0 : _b.find(function (secret) { return secret.id === secretId; });
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { alert: secret !== undefined
            ? {
                id: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["generateGUID"])(),
                value: {
                    type: 'paranoiaInfo',
                    label: secret.label
                },
                status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING
            }
            : state.alert });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_migration_actions__WEBPACK_IMPORTED_MODULE_3__["invalidBip39Passphrase"], function (state, _a) {
    var e_1, _b, e_2, _c;
    var _d;
    var protocolIdentifier = _a.protocolIdentifier, publicKey = _a.publicKey;
    var wallet;
    try {
        for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])((_d = state.targetSecrets.value) !== null && _d !== void 0 ? _d : []), _f = _e.next(); !_f.done; _f = _e.next()) {
            var secret = _f.value;
            try {
                for (var _g = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(secret.wallets)), _h = _g.next(); !_h.done; _h = _g.next()) {
                    var _wallet = _h.value;
                    if (_wallet.protocol.identifier === protocolIdentifier && _wallet.publicKey === publicKey) {
                        wallet = _wallet;
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { alert: wallet !== undefined
            ? {
                id: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["generateGUID"])(),
                value: {
                    type: 'bip39Passphrase',
                    protocolName: wallet.protocol.name,
                    address: wallet.receivingPublicAddress
                },
                status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING
            }
            : state.alert });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_migration_actions__WEBPACK_IMPORTED_MODULE_3__["unknownError"], function (state, _a) {
    var message = _a.message;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { alert: {
            id: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["generateGUID"])(),
            value: {
                type: 'unknownError',
                message: (message === null || message === void 0 ? void 0 : message.length) > 0 ? message : undefined
            },
            status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING
        } }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_migration_actions__WEBPACK_IMPORTED_MODULE_3__["alertDismissed"], function (state, _a) {
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
var selectFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('migration');
var selectTargetSecrets = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.targetSecrets; });
var selectTargetWalletKeys = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.targetWalletKeys; });
var selectHandledSecretIds = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.handledSecretIds; });
var selectHandledWalletKeys = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.handledWalletKeys; });
var selectCurrentlyHandledSecretId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.currentlyHandledSecretId; });
var selectCurrentlyHandledWalletKey = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.currentlyHandledWalletKey; });
var selectAlert = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.alert; });
var selectMigrationWalletGroups = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectTargetSecrets, selectTargetWalletKeys, selectHandledWalletKeys, selectCurrentlyHandledSecretId, selectCurrentlyHandledWalletKey, function (targetSecrets, targetWalletKeys, handledWalletKeys, currentlyHandledSecretId, currentlyHandledWalletKey) {
    var e_3, _a;
    var groups = [];
    if (targetSecrets.value !== undefined && targetSecrets.value.length > 0) {
        var targetWalletKeysSet_1 = new Set(targetWalletKeys);
        var handledWalletKeysSet_1 = new Set(handledWalletKeys);
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(targetSecrets.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var secret = _c.value;
                var wallets = secret.wallets
                    .filter(function (wallet) { return targetWalletKeysSet_1.has(wallet.publicKey); })
                    .map(function (wallet) { return ({
                    status: Object(_migration_utils__WEBPACK_IMPORTED_MODULE_4__["getWalletMigrationStatus"])(wallet, { currentlyHandled: currentlyHandledWalletKey, alreadyHandled: handledWalletKeysSet_1 }),
                    data: wallet
                }); });
                groups.push({
                    id: secret.id,
                    label: secret.label,
                    status: Object(_migration_utils__WEBPACK_IMPORTED_MODULE_4__["getWalletGroupMigrationStatus"])(secret, wallets, { currentlyHandled: currentlyHandledSecretId }),
                    wallets: wallets
                });
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    return {
        status: targetSecrets.status,
        value: groups
    };
});
var selectIsRunning = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectCurrentlyHandledSecretId, selectCurrentlyHandledWalletKey, function (currentlyHandledSecretId, currentlyHandledWalletKey) {
    return currentlyHandledSecretId !== undefined || currentlyHandledWalletKey !== undefined;
});
var selectIsDone = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectTargetSecrets, selectTargetWalletKeys, selectHandledSecretIds, selectHandledWalletKeys, selectCurrentlyHandledSecretId, selectCurrentlyHandledWalletKey, function (targetSecrets, targetWalletKeys, handledSecretIds, handledWalletKeys, currentlyHandledSecretId, currentlyHandledWalletKey) {
    var _a, _b;
    return handledSecretIds.length >= ((_b = (_a = targetSecrets.value) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) &&
        handledWalletKeys.length >= targetWalletKeys.length &&
        currentlyHandledSecretId === undefined &&
        currentlyHandledWalletKey === undefined;
});


/***/ }),

/***/ "uwNS":
/*!*************************************************************!*\
  !*** ./src/app/pages/migration/migration-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MigrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigrationPageRoutingModule", function() { return MigrationPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _migration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./migration.page */ "RQmS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var routes = [
    {
        path: '',
        component: _migration_page__WEBPACK_IMPORTED_MODULE_1__["MigrationPage"]
    }
];
var MigrationPageRoutingModule = /** @class */ (function () {
    function MigrationPageRoutingModule() {
    }
    MigrationPageRoutingModule.ɵfac = function MigrationPageRoutingModule_Factory(t) { return new (t || MigrationPageRoutingModule)(); };
    MigrationPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MigrationPageRoutingModule });
    MigrationPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return MigrationPageRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MigrationPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xtTx":
/*!****************************************************!*\
  !*** ./src/app/pages/migration/migration.utils.ts ***!
  \****************************************************/
/*! exports provided: getWalletMigrationStatus, getWalletGroupMigrationStatus, shortenAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWalletMigrationStatus", function() { return getWalletMigrationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWalletGroupMigrationStatus", function() { return getWalletGroupMigrationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortenAddress", function() { return shortenAddress; });
/* harmony import */ var _utils_migration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/migration */ "RYuY");

function getWalletMigrationStatus(wallet, options) {
    if (wallet.publicKey === options.currentlyHandled) {
        return 'migrating';
    }
    if (options.alreadyHandled.has(wallet.publicKey)) {
        return Object(_utils_migration__WEBPACK_IMPORTED_MODULE_0__["isWalletMigrated"])(wallet) ? 'migrated' : 'skipped';
    }
    return 'waiting';
}
function getWalletGroupMigrationStatus(secret, wallets, options) {
    var statusCounter = {
        waiting: 0,
        migrating: 0,
        migrated: 0,
        skipped: 0
    };
    wallets.forEach(function (wallet) {
        statusCounter[wallet.status]++;
    });
    if (secret.id === options.currentlyHandled) {
        return 'migrating';
    }
    else if (statusCounter.migrated === wallets.length) {
        return 'migrated';
    }
    else if (statusCounter.skipped === wallets.length) {
        return 'skipped';
    }
    else if (statusCounter.waiting === wallets.length) {
        return 'waiting';
    }
    else if (statusCounter.migrating > 0) {
        return 'migrating';
    }
    else if (statusCounter.migrated + statusCounter.skipped === wallets.length) {
        return 'partiallyMigrated';
    }
    else {
        return 'waiting';
    }
}
function shortenAddress(address) {
    return address.length > 12 ? address.slice(0, 5) + "..." + address.slice(-5) : address;
}


/***/ })

}]);
//# sourceMappingURL=pages-migration-migration-module.js.map