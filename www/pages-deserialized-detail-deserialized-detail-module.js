(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-deserialized-detail-deserialized-detail-module"],{

/***/ "7aZF":
/*!***********************************************************************!*\
  !*** ./src/app/pages/deserialized-detail/deserialized-detail.page.ts ***!
  \***********************************************************************/
/*! exports provided: DeserializedDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeserializedDetailPage", function() { return DeserializedDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _select_account_select_account_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../select-account/select-account.page */ "4Gax");
/* harmony import */ var _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deserialized-detail.actions */ "FUXb");
/* harmony import */ var _deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deserialized-detail.reducer */ "wOr3");
/* harmony import */ var _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deserialized.detail.types */ "sfIs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/transaction/transaction.component */ "BYgT");
/* harmony import */ var _components_message_sign_request_message_sign_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/message-sign-request/message-sign-request.component */ "F2cf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



















function DeserializedDetailPage_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "airgap-transaction", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("airGapTxs", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, ctx_r3.transactionsDetails$).value);
} }
function DeserializedDetailPage_ng_container_8_ion_grid_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-col", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 2, "deserialized-detail.transaction.unreadable_warning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 4, ctx_r4.rawData$).value);
} }
function DeserializedDetailPage_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DeserializedDetailPage_ng_container_8_ng_container_1_Template, 3, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, DeserializedDetailPage_ng_container_8_ion_grid_3_Template, 13, 6, "ion-grid", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, ctx_r0.transactionsDetails$).status === ctx_r0.UIResourceStatus.SUCCESS);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 4, ctx_r0.transactionsDetails$).status === ctx_r0.UIResourceStatus.ERROR && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 6, ctx_r0.rawData$).status === ctx_r0.UIResourceStatus.SUCCESS);
} }
function DeserializedDetailPage_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "airgap-message-sign-request", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("messages", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, ctx_r5.messages$).value);
} }
function DeserializedDetailPage_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DeserializedDetailPage_ng_container_10_ng_container_1_Template, 3, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, ctx_r1.messages$).status === ctx_r1.UIResourceStatus.SUCCESS);
} }
function DeserializedDetailPage_ion_fab_12_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-fab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DeserializedDetailPage_ion_fab_12_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r7.continue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", button_r6, " ");
} }
var DeserializedDetailPage = /** @class */ (function () {
    function DeserializedDetailPage(store, uiEventService, modalController) {
        this.store = store;
        this.uiEventService = uiEventService;
        this.modalController = modalController;
        this.Mode = _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_10__["Mode"];
        this.UIResourceStatus = _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"];
        this.ngDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.mode$ = this.store.select(_deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_9__["selectMode"]);
        this.title$ = this.store.select(_deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_9__["selectTitle"]);
        this.button$ = this.store.select(_deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_9__["selectButton"]);
        this.loader$ = this.store.select(_deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_9__["selectLoader"]);
        this.alert$ = this.store.select(_deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_9__["selectAlert"]);
        this.modal$ = this.store.select(_deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_9__["selectModal"]);
        this.transactionsDetails$ = this.store.select(_deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_9__["selectTransactionsDetails"]);
        this.messages$ = this.store.select(_deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_9__["selectMessagesData"]);
        this.rawData$ = this.store.select(_deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_9__["selectRaw"]);
        // FIXME [#210] set debounce time
        this.loader$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngDestroyed$)).subscribe(this.showOrHideLoader.bind(this));
        this.alert$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngDestroyed$)).subscribe(this.showOrDismissAlert.bind(this));
        this.modal$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngDestroyed$)).subscribe(this.showOrDismissModal.bind(this));
        this.store.dispatch(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_8__["viewInitialization"]());
    }
    DeserializedDetailPage.prototype.ngOnDestroy = function () {
        this.ngDestroyed$.next();
        this.ngDestroyed$.complete();
    };
    DeserializedDetailPage.prototype.continue = function () {
        this.store.dispatch(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_8__["approved"]());
    };
    DeserializedDetailPage.prototype.showOrHideLoader = function (task) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        (_a = this.loadingElement) === null || _a === void 0 ? void 0 : _a.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_LOADER));
                        if (!((task === null || task === void 0 ? void 0 : task.status) === _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING)) return [3 /*break*/, 3];
                        _b = this;
                        return [4 /*yield*/, this.uiEventService.getTranslatedLoader(this.getLoaderData(task.value))
                            // return this.loadingElement.present().catch(handleErrorLocal(ErrorCategory.IONIC_LOADER))
                            // FIXME [#210]: replace with the above once the performance issue is resolved
                        ];
                    case 1:
                        _b.loadingElement = _c.sent();
                        // return this.loadingElement.present().catch(handleErrorLocal(ErrorCategory.IONIC_LOADER))
                        // FIXME [#210]: replace with the above once the performance issue is resolved
                        return [4 /*yield*/, this.loadingElement.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_LOADER))];
                    case 2:
                        // return this.loadingElement.present().catch(handleErrorLocal(ErrorCategory.IONIC_LOADER))
                        // FIXME [#210]: replace with the above once the performance issue is resolved
                        _c.sent();
                        this.store.dispatch(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_8__["continueApproved"]({ userInput: task.userInput }));
                        return [3 /*break*/, 4];
                    case 3:
                        this.loadingElement = undefined;
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DeserializedDetailPage.prototype.showOrDismissAlert = function (alert) {
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
                                _this.store.dispatch(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_8__["alertDismissed"]({ id: alert.id }));
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
    DeserializedDetailPage.prototype.showOrDismissModal = function (modal) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _b, modalOptions, onDismissAction_1, _c;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        (_a = this.modalElement) === null || _a === void 0 ? void 0 : _a.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_MODAL));
                        if (!((modal === null || modal === void 0 ? void 0 : modal.status) === _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING)) return [3 /*break*/, 2];
                        _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.getModalData(modal.value), 2), modalOptions = _b[0], onDismissAction_1 = _b[1];
                        _c = this;
                        return [4 /*yield*/, this.modalController.create(modalOptions)];
                    case 1:
                        _c.modalElement = _d.sent();
                        this.modalElement.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_MODAL));
                        return [2 /*return*/, this.modalElement
                                .onWillDismiss()
                                .then(function (data) {
                                _this.store.dispatch(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_8__["modalDismissed"]({ id: modal.id }));
                                return onDismissAction_1(data);
                            })
                                .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_MODAL))];
                    case 2:
                        this.modalElement = undefined;
                        _d.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DeserializedDetailPage.prototype.getLoaderData = function (task) {
        switch (task) {
            case 'signTransaction':
                return this.signTransactionLoader();
            case 'signMessage':
                return this.signMessageLoader();
            case 'generic':
                return this.genericLoader();
            default:
                Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["assertNever"])('getLoaderData', task);
        }
    };
    DeserializedDetailPage.prototype.signTransactionLoader = function () {
        return {
            message: 'deserialized-detail.loader.sign-transaction.message'
        };
    };
    DeserializedDetailPage.prototype.signMessageLoader = function () {
        return {
            message: 'deserialized-detail.loader.sign-message.message'
        };
    };
    DeserializedDetailPage.prototype.genericLoader = function () {
        return {
            message: 'deserialized-detail.loader.generic.message'
        };
    };
    DeserializedDetailPage.prototype.getAlertData = function (alert) {
        switch (alert.type) {
            case 'bip39Passphrase':
                return this.bip39PassphraseAlert();
            case 'bip39PassphraseError':
                return this.bip39PassphraseErrorAlert();
            case 'secretNotFound':
                return this.secretNotFoundErrorAlert();
            case 'unknownError':
                return this.unknownErrorAlert(alert.message);
            default:
                Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["assertNever"])('getAlertData', alert);
        }
    };
    DeserializedDetailPage.prototype.bip39PassphraseAlert = function () {
        var _this = this;
        return {
            header: 'deserialized-detail.alert.bip39-passphrase.header',
            message: 'deserialized-detail.alert.bip39-passphrase.message',
            backdropDismiss: false,
            inputs: [
                {
                    name: 'bip39Passphrase',
                    type: 'password',
                    placeholder: 'deserialized-detail.alert.bip39-passphrase.input-placeholder_label'
                }
            ],
            buttons: [
                {
                    text: 'deserialized-detail.alert.bip39-passphrase.button_label',
                    handler: function (result) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var passphrase;
                        var _a;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                            passphrase = (_a = result.bip39Passphrase) !== null && _a !== void 0 ? _a : '';
                            this.store.dispatch(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_8__["bip39PassphraseProvided"]({ passphrase: passphrase }));
                            return [2 /*return*/];
                        });
                    }); }
                }
            ]
        };
    };
    DeserializedDetailPage.prototype.bip39PassphraseErrorAlert = function () {
        return {
            header: 'deserialized-detail.alert.bip39-passphrase-error.header',
            message: 'deserialized-detail.alert.bip39-passphrase-error.message',
            backdropDismiss: false,
            buttons: [
                {
                    text: 'deserialized-detail.alert.bip39-passphrase-error.button_label'
                }
            ]
        };
    };
    DeserializedDetailPage.prototype.secretNotFoundErrorAlert = function () {
        return {
            header: 'deserialized-detail.alert.secret-not-found-error.header',
            message: 'deserialized-detail.alert.secret-not-found-error.message',
            backdropDismiss: false,
            buttons: [
                {
                    text: 'deserialized-detail.alert.secret-not-found-error.button_label'
                }
            ]
        };
    };
    DeserializedDetailPage.prototype.unknownErrorAlert = function (message) {
        return {
            header: 'deserialized-detail.alert.unknown-error.header',
            message: message !== null && message !== void 0 ? message : 'deserialized-detail.alert.unknown-error.message',
            backdropDismiss: true,
            buttons: [
                {
                    text: 'deserialized-detail.alert.unknown-error.button_label'
                }
            ]
        };
    };
    DeserializedDetailPage.prototype.getModalData = function (modal) {
        switch (modal) {
            case 'selectSigningAccount':
                return this.selectSigningAccountModal();
            default:
                Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["assertNever"])('getModalData', modal);
        }
    };
    DeserializedDetailPage.prototype.selectSigningAccountModal = function () {
        var _this = this;
        var options = {
            component: _select_account_select_account_page__WEBPACK_IMPORTED_MODULE_7__["SelectAccountPage"],
            componentProps: { type: 'message-signing' }
        };
        var action = function (modalData) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (modalData.data === undefined || typeof modalData.data !== 'string') {
                    return [2 /*return*/];
                }
                this.store.dispatch(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_8__["signingProtocolProvided"]({ protocol: modalData.data }));
                return [2 /*return*/];
            });
        }); };
        return [options, action];
    };
    DeserializedDetailPage.ɵfac = function DeserializedDetailPage_Factory(t) { return new (t || DeserializedDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UiEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"])); };
    DeserializedDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: DeserializedDetailPage, selectors: [["airgap-deserialized-detail"]], decls: 14, vars: 12, consts: [[1, "ion-no-border"], ["slot", "start"], [1, "deserialized-content", "ion-padding"], [4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 4, "ngIf"], [3, "airGapTxs"], ["size", "2", 1, "ion-margin-top"], ["color", "white", "src", "assets/icons/md-warning.svg", 1, "warning-icon"], ["size", "10"], ["size", "12"], [1, "text--selectable", "typography--mono", "word-break__all"], [3, "messages"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "click"], ["slot", "start", "src", "assets/icons/md-check.svg"]], template: function DeserializedDetailPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-back-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, DeserializedDetailPage_ng_container_8_Template, 6, 8, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, DeserializedDetailPage_ng_container_10_Template, 3, 3, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, DeserializedDetailPage_ion_fab_12_Template, 4, 1, "ion-fab", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 4, ctx.title$));
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 6, ctx.mode$) === ctx.Mode.SIGN_TRANSACTION);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 8, ctx.mode$) === ctx.Mode.SIGN_MESSAGE);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](13, 10, ctx.button$));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_13__["TransactionComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _components_message_sign_request_message_sign_request_component__WEBPACK_IMPORTED_MODULE_14__["MessageSignRequestComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: [".warning-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n\n.word-break__all[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n\n.deserialized-content[_ngcontent-%COMP%] {\n  --margin-bottom: 32px;\n  margin-bottom: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rlc2VyaWFsaXplZC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJkZXNlcmlhbGl6ZWQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuaW5nLWljb24ge1xuICBmb250LXNpemU6IDRyZW07XG59XG5cbi53b3JkLWJyZWFrX19hbGwge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5kZXNlcmlhbGl6ZWQtY29udGVudCB7XG4gIC0tbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbiJdfQ== */"] });
    return DeserializedDetailPage;
}());



/***/ }),

/***/ "FUXb":
/*!**************************************************************************!*\
  !*** ./src/app/pages/deserialized-detail/deserialized-detail.actions.ts ***!
  \**************************************************************************/
/*! exports provided: viewInitialization, navigationDataLoading, navigationDataLoaded, navigationDataLoadingError, invalidData, approved, continueApproved, alertDismissed, modalDismissed, bip39PassphraseProvided, signingProtocolProvided, runningBlockingTask, transactionsSigned, messagesSigned, loaderDismissed, secretNotFound, protocolNotFound, invalidBip39Passphrase, unknownError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewInitialization", function() { return viewInitialization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationDataLoading", function() { return navigationDataLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationDataLoaded", function() { return navigationDataLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationDataLoadingError", function() { return navigationDataLoadingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidData", function() { return invalidData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approved", function() { return approved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continueApproved", function() { return continueApproved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertDismissed", function() { return alertDismissed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalDismissed", function() { return modalDismissed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bip39PassphraseProvided", function() { return bip39PassphraseProvided; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signingProtocolProvided", function() { return signingProtocolProvided; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runningBlockingTask", function() { return runningBlockingTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionsSigned", function() { return transactionsSigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messagesSigned", function() { return messagesSigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loaderDismissed", function() { return loaderDismissed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secretNotFound", function() { return secretNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protocolNotFound", function() { return protocolNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidBip39Passphrase", function() { return invalidBip39Passphrase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownError", function() { return unknownError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// [#210]
var featureName = 'Deserialized Detail';
/**************** View Lifecycle ****************/
var viewInitialization = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] View Initialization");
/**************** Navigation Data ****************/
var navigationDataLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Navigation Data Loading");
var navigationDataLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Navigation Data Loaded", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var navigationDataLoadingError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Navigation Data Loading Error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var invalidData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Invalid Navigation Data");
/**************** User Interaction ****************/
var approved = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Approved");
// FIXME [#210]: remove once the performance issue is resolved
var continueApproved = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Continue Approved", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// [#210]
var alertDismissed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Alert Dismissed", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var modalDismissed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Modal Dismissed", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var bip39PassphraseProvided = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] BIP-39 Passphrase Provided", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var signingProtocolProvided = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Signing Protocol Provided", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/**************** Internal ****************/
// export const runningBlockingTask = createAction(`[${featureName}] Running Blocking Task`, props<{ task: Task }>())
// FIXME [#210] replace with the above once the performance issue is resolved
var runningBlockingTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Running Blocking Task", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// [#210]
var transactionsSigned = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Transactions Signed", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var messagesSigned = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Messages Signed", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loaderDismissed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Loader Dismissed", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var secretNotFound = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Secret Not Found");
var protocolNotFound = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Protocol Not Found");
var invalidBip39Passphrase = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Invalid BIP-39 Passphrase");
var unknownError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[" + featureName + "] Unknown Error", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "OoaO":
/*!**************************************************************************!*\
  !*** ./src/app/pages/deserialized-detail/deserialized-detail.effects.ts ***!
  \**************************************************************************/
/*! exports provided: DeserializedDetailEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeserializedDetailEffects", function() { return DeserializedDetailEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bip39 */ "KckP");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/interaction/interaction.service */ "rYTG");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./deserialized-detail.actions */ "FUXb");
/* harmony import */ var _deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deserialized-detail.reducer */ "wOr3");
/* harmony import */ var _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./deserialized.detail.types */ "sfIs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");























var DeserializedDetailEffects = /** @class */ (function () {
    function DeserializedDetailEffects(actions$, store, navigationService, translateService, protocolService, secretsService, keyPairService, transactionService, interactionService) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.navigationService = navigationService;
        this.translateService = translateService;
        this.protocolService = protocolService;
        this.secretsService = secretsService;
        this.keyPairService = keyPairService;
        this.transactionService = transactionService;
        this.interactionService = interactionService;
        this.navigationData$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["viewInitialization"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["navigationDataLoading"]()), Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(_this.loadNavigationData()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())); }));
        });
        // FIXME [#210]:
        // We can no longer execute the signing step as a single action due to Sapling heavy computational transaction signing
        // https://gitlab.papers.tech/papers/airgap/airgap-vault/-/issues/210
        // public approved$ = createEffect(() =>
        //   this.actions$.pipe(
        //     ofType(actions.approved, actions.bip39PassphraseProvided, actions.signingProtocolProvided),
        //     concatMap((action) => from([action]).pipe(withLatestFrom(this.store.select(fromDeserializedDetail.selectFinalPayload)))),
        //     switchMap(([action, payload]) => {
        //       const userInput = {
        //         bip39Passphrase: 'passphrase' in action ? action.passphrase : undefined,
        //         protocol: 'protocol' in action ? action.protocol : undefined
        //       }
        //       return concat(
        //         of(actions.runningBlockingTask({ task: this.identifyPayloadTask(payload) })),
        //         from(this.handlePayload(payload, userInput)).pipe(first())
        //       )
        //     })
        //   )
        // )
        // [#210]
        // FIXME [#210]: replace with the above once the performance issue is resolved
        this.approved$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["approved"], _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["bip39PassphraseProvided"], _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["signingProtocolProvided"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (action) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])([action]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["withLatestFrom"])(_this.store.select(_deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_13__["selectFinalPayload"]))); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), action = _b[0], payload = _b[1];
                var userInput = {
                    bip39Passphrase: 'passphrase' in action ? action.passphrase : undefined,
                    protocol: 'protocol' in action ? action.protocol : undefined
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["runningBlockingTask"]({ task: _this.identifyPayloadTask(payload), userInput: userInput })));
            }));
        });
        // [#210]
        // FIXME [#210]: remove once the performance issue is resolved
        this.continueApproved$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["continueApproved"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (action) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])([action]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["withLatestFrom"])(_this.store.select(_deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_13__["selectFinalPayload"]))); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), action = _b[0], payload = _b[1];
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(_this.handlePayload(payload, action.userInput)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])());
            }));
        });
        // [#210]
        this.navigateWithSignedTransactions$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["transactionsSigned"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (action) { return _this.navigateWithSignedTransactions(action.transactions); }));
        }, { dispatch: false });
        this.navigateWithSignedMessages$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["messagesSigned"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (action) { return _this.navigateWithSignedMessages(action.messages); }));
        }, { dispatch: false });
    }
    DeserializedDetailEffects.prototype.loadNavigationData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var state, _a, messageType, mode, title, button, raw, _b, transactions, messages, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        state = this.navigationService.getState();
                        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.getPageTypes(state.type), 2), messageType = _a[1];
                        mode = this.getMode(state.type);
                        if (!(messageType !== undefined && mode !== undefined && state.transactionInfos !== undefined)) return [3 /*break*/, 5];
                        title = this.translateService.instant("deserialized-detail." + messageType + ".title");
                        button = this.translateService.instant("deserialized-detail." + messageType + ".button_label");
                        raw = this.signTransactionInfoToRaw(state.transactionInfos);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all([
                                this.signTransactionInfoToUnsignedTransactions(state.transactionInfos),
                                this.signTransactionInfoToUnsignedMessages(state.transactionInfos)
                            ])];
                    case 2:
                        _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"].apply(void 0, [_c.sent(), 2]), transactions = _b[0], messages = _b[1];
                        return [2 /*return*/, _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["navigationDataLoaded"]({ mode: mode, title: title, button: button, transactions: transactions, messages: messages, raw: raw })];
                    case 3:
                        error_1 = _c.sent();
                        // tslint:disable-next-line: no-console
                        console.warn(error_1);
                        return [2 /*return*/, _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["navigationDataLoadingError"]({ mode: mode, title: title, button: button, raw: raw })];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["invalidData"]()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DeserializedDetailEffects.prototype.getPageTypes = function (iacMessageType) {
        var actionType;
        if (iacMessageType === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignRequest || iacMessageType === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].MessageSignRequest) {
            actionType = 'request';
        }
        else if (iacMessageType === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignResponse || iacMessageType === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].MessageSignResponse) {
            actionType = 'response';
        }
        var messageType;
        if (iacMessageType === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignRequest || iacMessageType === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignResponse) {
            messageType = 'transaction';
        }
        else if (iacMessageType === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].MessageSignRequest || iacMessageType === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].MessageSignResponse) {
            messageType = 'message';
        }
        return [actionType, messageType];
    };
    DeserializedDetailEffects.prototype.getMode = function (iacMessageType) {
        switch (iacMessageType) {
            case _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignRequest:
                return _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_14__["Mode"].SIGN_TRANSACTION;
            case _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].MessageSignRequest:
                return _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_14__["Mode"].SIGN_MESSAGE;
            default:
                return undefined;
        }
    };
    DeserializedDetailEffects.prototype.signTransactionInfoToRaw = function (transactionInfo) {
        var transactions = transactionInfo.map(function (info) {
            switch (info.signTransactionRequest.type) {
                case _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignRequest:
                    return info.signTransactionRequest.payload.transaction;
                case _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignResponse:
                    return info.signTransactionRequest.payload.transaction;
                default:
                    return info.signTransactionRequest.payload;
            }
        });
        var toStringify = transactions.length > 1 ? transactions : transactions[0];
        return JSON.stringify(toStringify);
    };
    DeserializedDetailEffects.prototype.signTransactionInfoToUnsignedTransactions = function (transactionInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, Promise.all(transactionInfo
                        .map(function (info) { return [info.wallet, info.signTransactionRequest]; })
                        .filter(function (_a) {
                        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _ = _b[0], request = _b[1];
                        return request.type === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignRequest;
                    })
                        .map(function (_a) {
                        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), wallet = _b[0], request = _b[1];
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var details, _c, _d, _e;
                            var _f;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_g) {
                                switch (_g.label) {
                                    case 0: return [4 /*yield*/, this.checkIfSaplingTransaction(request.payload, request.protocol)];
                                    case 1:
                                        if (!_g.sent()) return [3 /*break*/, 4];
                                        _d = (_c = this.transactionService).getDetailsFromIACMessages;
                                        _e = [[request]];
                                        _f = {};
                                        return [4 /*yield*/, this.getSaplingProtocol()];
                                    case 2: return [4 /*yield*/, _d.apply(_c, _e.concat([(_f.overrideProtocol = _g.sent(),
                                                _f.data = {
                                                    knownViewingKeys: this.secretsService.getKnownViewingKeys()
                                                },
                                                _f)]))];
                                    case 3:
                                        details = _g.sent();
                                        return [3 /*break*/, 6];
                                    case 4: return [4 /*yield*/, this.transactionService.getDetailsFromIACMessages([request])];
                                    case 5:
                                        details = _g.sent();
                                        _g.label = 6;
                                    case 6: return [2 /*return*/, {
                                            type: 'unsigned',
                                            id: request.id,
                                            details: details,
                                            data: request.payload,
                                            wallet: wallet,
                                            originalProtocolIdentifier: request.protocol !== wallet.protocol.symbol ? request.protocol : undefined
                                        }];
                                }
                            });
                        });
                    }))];
            });
        });
    };
    DeserializedDetailEffects.prototype.signTransactionInfoToUnsignedMessages = function (transactionInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, Promise.all(transactionInfo
                        .map(function (info) { return [info.wallet, info.signTransactionRequest]; })
                        .filter(function (_a) {
                        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _ = _b[0], request = _b[1];
                        return request.type === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].MessageSignRequest;
                    })
                        .map(function (_a) {
                        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), wallet = _b[0], request = _b[1];
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var data, blake2bHash, cryptoClient;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        data = request.payload;
                                        if (!(request.protocol === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].XTZ)) return [3 /*break*/, 2];
                                        cryptoClient = new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["TezosCryptoClient"]();
                                        return [4 /*yield*/, cryptoClient.blake2bLedgerHash(data.message)];
                                    case 1:
                                        blake2bHash = _c.sent();
                                        _c.label = 2;
                                    case 2: return [2 /*return*/, {
                                            type: 'unsigned',
                                            id: request.id,
                                            protocol: request.protocol,
                                            data: data,
                                            blake2bHash: blake2bHash,
                                            wallet: wallet,
                                            originalProtocolIdentifier: request.protocol !== wallet.protocol.symbol ? request.protocol : undefined
                                        }];
                                }
                            });
                        });
                    }))];
            });
        });
    };
    DeserializedDetailEffects.prototype.identifyPayloadTask = function (payload) {
        switch (payload.mode) {
            case _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_14__["Mode"].SIGN_TRANSACTION:
                return 'signTransaction';
            case _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_14__["Mode"].SIGN_MESSAGE:
                return 'signMessage';
            default:
                return 'generic';
        }
    };
    DeserializedDetailEffects.prototype.handlePayload = function (payload, userInput) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (payload.mode) {
                    case _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_14__["Mode"].SIGN_TRANSACTION:
                        return [2 /*return*/, this.signTransactions(payload.data, userInput.bip39Passphrase)];
                    case _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_14__["Mode"].SIGN_MESSAGE:
                        return [2 /*return*/, this.signMessages(payload.data, userInput.bip39Passphrase, userInput.protocol)];
                    default:
                        Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["assertNever"])('handlePayload', payload);
                }
                return [2 /*return*/];
            });
        });
    };
    DeserializedDetailEffects.prototype.signTransactions = function (unsignedTransactions, bip39Passphrase) {
        var _a, _b;
        if (bip39Passphrase === void 0) { bip39Passphrase = ''; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var signedTransactions, error_2;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all(unsignedTransactions.map(function (transaction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var signed;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.signTransaction(transaction.wallet, transaction.data, bip39Passphrase)];
                                        case 1:
                                            signed = _a.sent();
                                            return [2 /*return*/, {
                                                    type: 'signed',
                                                    id: transaction.id,
                                                    details: transaction.details,
                                                    data: {
                                                        accountIdentifier: transaction.wallet.publicKey.substr(-6),
                                                        transaction: signed,
                                                        callbackURL: transaction.data.callbackURL
                                                    },
                                                    wallet: transaction.wallet,
                                                    originalProtocolIdentifier: transaction.originalProtocolIdentifier
                                                }];
                                    }
                                });
                            }); }))];
                    case 1:
                        signedTransactions = _c.sent();
                        return [2 /*return*/, _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["transactionsSigned"]({ transactions: signedTransactions })];
                    case 2:
                        error_2 = _c.sent();
                        // tslint:disable-next-line: no-console
                        console.warn(error_2);
                        if ((_a = error_2.message) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith('secret not found')) {
                            return [2 /*return*/, _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["secretNotFound"]()];
                        }
                        else if ((_b = error_2.message) === null || _b === void 0 ? void 0 : _b.toLowerCase().startsWith('invalid bip-39 passphrase')) {
                            return [2 /*return*/, _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["invalidBip39Passphrase"]()];
                        }
                        return [2 /*return*/, _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["unknownError"]({ message: typeof error_2 === 'string' ? error_2 : error_2.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DeserializedDetailEffects.prototype.signTransaction = function (wallet, transaction, bip39Passphrase) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var secret, entropy, mnemonic;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        secret = this.secretsService.findByPublicKey(wallet.publicKey);
                        if (secret === undefined) {
                            throw new Error('Secret not found');
                        }
                        return [4 /*yield*/, this.secretsService.retrieveEntropyForSecret(secret)];
                    case 1:
                        entropy = _a.sent();
                        mnemonic = bip39__WEBPACK_IMPORTED_MODULE_6__["entropyToMnemonic"](entropy);
                        return [2 /*return*/, this.keyPairService.signWithWallet(wallet, transaction, mnemonic, bip39Passphrase)];
                }
            });
        });
    };
    DeserializedDetailEffects.prototype.signMessages = function (unsignedMessages, bip39Passphrase, protocolIdentifier) {
        var _a, _b, _c;
        if (bip39Passphrase === void 0) { bip39Passphrase = ''; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var signedMessages, error_3;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all(unsignedMessages.map(function (message) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var signature;
                                var _a;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.signMessage(message.data, bip39Passphrase, message.wallet, protocolIdentifier)];
                                        case 1:
                                            signature = _b.sent();
                                            return [2 /*return*/, {
                                                    type: 'signed',
                                                    id: message.id,
                                                    protocol: (_a = message.protocol) !== null && _a !== void 0 ? _a : protocolIdentifier,
                                                    data: {
                                                        message: message.data.message,
                                                        publicKey: message.data.publicKey,
                                                        signature: signature,
                                                        callbackURL: message.data.callbackURL
                                                    },
                                                    wallet: message.wallet,
                                                    originalProtocolIdentifier: message.originalProtocolIdentifier
                                                }];
                                    }
                                });
                            }); }))];
                    case 1:
                        signedMessages = _d.sent();
                        return [2 /*return*/, _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["messagesSigned"]({ messages: signedMessages })];
                    case 2:
                        error_3 = _d.sent();
                        // tslint:disable-next-line: no-console
                        console.warn(error_3);
                        if ((_a = error_3.message) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith('secret not found')) {
                            return [2 /*return*/, _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["secretNotFound"]()];
                        }
                        else if ((_b = error_3.message) === null || _b === void 0 ? void 0 : _b.toLowerCase().startsWith('protocol not found')) {
                            return [2 /*return*/, _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["protocolNotFound"]()];
                        }
                        else if ((_c = error_3.message) === null || _c === void 0 ? void 0 : _c.toLowerCase().startsWith('invalid bip-39 passphrase')) {
                            return [2 /*return*/, _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["invalidBip39Passphrase"]()];
                        }
                        return [2 /*return*/, _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_12__["unknownError"]({ message: typeof error_3 === 'string' ? error_3 : error_3.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DeserializedDetailEffects.prototype.signMessage = function (message, bip39Passphrase, wallet, protocolIdentifier) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var secret, entropy, mnemonic, protocol, _b, error_4;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        secret = wallet !== undefined
                            ? (_a = this.secretsService.findByPublicKey(wallet.publicKey)) !== null && _a !== void 0 ? _a : this.secretsService.getActiveSecret() : this.secretsService.getActiveSecret();
                        if (secret === undefined) {
                            throw new Error('Secret not found');
                        }
                        return [4 /*yield*/, this.secretsService.retrieveEntropyForSecret(secret)];
                    case 1:
                        entropy = _c.sent();
                        mnemonic = bip39__WEBPACK_IMPORTED_MODULE_6__["entropyToMnemonic"](entropy);
                        if (!(wallet !== undefined)) return [3 /*break*/, 2];
                        return [2 /*return*/, this.keyPairService.signWithWallet(wallet, message, mnemonic, bip39Passphrase)];
                    case 2:
                        protocol = void 0;
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 7, , 8]);
                        if (!(protocolIdentifier !== undefined)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.protocolService.getProtocol(protocolIdentifier, undefined, false)];
                    case 4:
                        _b = _c.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        _b = undefined;
                        _c.label = 6;
                    case 6:
                        protocol = _b;
                        return [3 /*break*/, 8];
                    case 7:
                        error_4 = _c.sent();
                        // tslint:disable-next-line: no-console
                        console.warn(error_4);
                        protocol = undefined;
                        return [3 /*break*/, 8];
                    case 8:
                        if (protocol === undefined) {
                            throw new Error('Protocol not found');
                        }
                        return [2 /*return*/, this.keyPairService.signWithProtocol(protocol, message, mnemonic, bip39Passphrase, false, protocol.standardDerivationPath)];
                }
            });
        });
    };
    DeserializedDetailEffects.prototype.navigateWithSignedTransactions = function (transactions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var messages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generateTransactionIACMessages(transactions)];
                    case 1:
                        messages = _a.sent();
                        this.interactionService.startInteraction({
                            operationType: _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_9__["InteractionOperationType"].TRANSACTION_BROADCAST,
                            iacMessage: messages,
                            wallets: transactions.map(function (transaction) { return transaction.wallet; }),
                            signedTxs: transactions.map(function (transaction) { return transaction.data.transaction; })
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DeserializedDetailEffects.prototype.generateTransactionIACMessages = function (transactions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var signResponses;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                signResponses = transactions.map(function (transaction) {
                    var _a;
                    return ({
                        id: transaction.id,
                        protocol: (_a = transaction.originalProtocolIdentifier) !== null && _a !== void 0 ? _a : transaction.wallet.protocol.identifier,
                        type: _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignResponse,
                        payload: {
                            accountIdentifier: transaction.data.accountIdentifier,
                            transaction: transaction.data.transaction,
                            from: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["flattenAirGapTxAddresses"])(transaction.details, 'from'),
                            to: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["flattenAirGapTxAddresses"])(transaction.details, 'to'),
                            amount: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["sumAirGapTxValues"])(transaction.details, 'amount'),
                            fee: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["sumAirGapTxValues"])(transaction.details, 'fee')
                        }
                    });
                });
                return [2 /*return*/, signResponses];
            });
        });
    };
    DeserializedDetailEffects.prototype.navigateWithSignedMessages = function (messages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var iacMessages;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generateIACMessages(messages)];
                    case 1:
                        iacMessages = _a.sent();
                        this.interactionService.startInteraction({
                            operationType: _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_9__["InteractionOperationType"].MESSAGE_SIGN_REQUEST,
                            iacMessage: iacMessages,
                            messageSignResponse: messages[0] !== undefined
                                ? {
                                    message: messages[0].data.message,
                                    publicKey: messages[0].data.publicKey,
                                    signature: messages[0].data.signature
                                }
                                : undefined
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DeserializedDetailEffects.prototype.generateIACMessages = function (messages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var signResponses;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                signResponses = messages.map(function (message) {
                    var _a;
                    return ({
                        id: message.id,
                        protocol: (_a = message.originalProtocolIdentifier) !== null && _a !== void 0 ? _a : message.protocol,
                        type: _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].MessageSignResponse,
                        payload: {
                            message: message.data.message,
                            publicKey: message.data.publicKey,
                            signature: message.data.signature
                        }
                    });
                });
                return [2 /*return*/, signResponses];
            });
        });
    };
    DeserializedDetailEffects.prototype.checkIfSaplingTransaction = function (transaction, protocolIdentifier) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var tezosProtocol, saplingProtocol, txDetails, recipients;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(protocolIdentifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].XTZ)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.protocolService.getProtocol(protocolIdentifier)];
                    case 1:
                        tezosProtocol = _a.sent();
                        return [4 /*yield*/, this.getSaplingProtocol()];
                    case 2:
                        saplingProtocol = _a.sent();
                        return [4 /*yield*/, tezosProtocol.getTransactionDetails(transaction)];
                    case 3:
                        txDetails = _a.sent();
                        recipients = txDetails
                            .map(function (details) { return details.to; })
                            .reduce(function (flatten, next) { return flatten.concat(next); }, []);
                        return [2 /*return*/, recipients.includes(saplingProtocol.options.config.contractAddress)];
                    case 4: return [2 /*return*/, protocolIdentifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].XTZ_SHIELDED];
                }
            });
        });
    };
    DeserializedDetailEffects.prototype.getSaplingProtocol = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.protocolService.getProtocol(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].XTZ_SHIELDED)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    DeserializedDetailEffects.ɵfac = function DeserializedDetailEffects_Factory(t) { return new (t || DeserializedDetailEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_10__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ProtocolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_11__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyPairService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_9__["InteractionService"])); };
    DeserializedDetailEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({ token: DeserializedDetailEffects, factory: DeserializedDetailEffects.ɵfac });
    return DeserializedDetailEffects;
}());



/***/ }),

/***/ "ob9J":
/*!*************************************************************************!*\
  !*** ./src/app/pages/deserialized-detail/deserialized-detail.module.ts ***!
  \*************************************************************************/
/*! exports provided: DeserializedDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeserializedDetailPageModule", function() { return DeserializedDetailPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _deserialized_detail_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deserialized-detail.effects */ "OoaO");
/* harmony import */ var _deserialized_detail_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deserialized-detail.page */ "7aZF");
/* harmony import */ var _deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deserialized-detail.reducer */ "wOr3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");















var routes = [
    {
        path: '',
        component: _deserialized_detail_page__WEBPACK_IMPORTED_MODULE_9__["DeserializedDetailPage"]
    }
];
var DeserializedDetailPageModule = /** @class */ (function () {
    function DeserializedDetailPageModule() {
    }
    DeserializedDetailPageModule.ɵfac = function DeserializedDetailPageModule_Factory(t) { return new (t || DeserializedDetailPageModule)(); };
    DeserializedDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: DeserializedDetailPageModule });
    DeserializedDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('deserializedDetail', _deserialized_detail_reducer__WEBPACK_IMPORTED_MODULE_10__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_deserialized_detail_effects__WEBPACK_IMPORTED_MODULE_8__["DeserializedDetailEffects"]])
            ]] });
    return DeserializedDetailPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](DeserializedDetailPageModule, { declarations: [_deserialized_detail_page__WEBPACK_IMPORTED_MODULE_9__["DeserializedDetailPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"]] }); })();


/***/ }),

/***/ "sfIs":
/*!************************************************************************!*\
  !*** ./src/app/pages/deserialized-detail/deserialized.detail.types.ts ***!
  \************************************************************************/
/*! exports provided: Mode, isDeserializedTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mode", function() { return Mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeserializedTransaction", function() { return isDeserializedTransaction; });
var Mode;
(function (Mode) {
    Mode[Mode["SIGN_TRANSACTION"] = 0] = "SIGN_TRANSACTION";
    Mode[Mode["SIGN_MESSAGE"] = 1] = "SIGN_MESSAGE";
})(Mode || (Mode = {}));
function isDeserializedTransaction(data) {
    return data instanceof Object && 'type' in data && 'details' in data && 'data' in data && 'wallet' in data;
}


/***/ }),

/***/ "wOr3":
/*!**************************************************************************!*\
  !*** ./src/app/pages/deserialized-detail/deserialized-detail.reducer.ts ***!
  \**************************************************************************/
/*! exports provided: reducer, selectFeatureState, selectMode, selectTitle, selectButton, selectLoader, selectAlert, selectModal, selectTransactions, selectUnsignedTransactions, selectSignedTransactions, selectTransactionsDetails, selectUnsignedTransactionsDetails, selectSignedTransactionsDetails, selectMessages, selectUnsignedMessages, selectMessagesData, selectUnsignedMessagesData, selectRaw, selectFinalPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeatureState", function() { return selectFeatureState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMode", function() { return selectMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTitle", function() { return selectTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectButton", function() { return selectButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoader", function() { return selectLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAlert", function() { return selectAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectModal", function() { return selectModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTransactions", function() { return selectTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnsignedTransactions", function() { return selectUnsignedTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSignedTransactions", function() { return selectSignedTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTransactionsDetails", function() { return selectTransactionsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnsignedTransactionsDetails", function() { return selectUnsignedTransactionsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSignedTransactionsDetails", function() { return selectSignedTransactionsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMessages", function() { return selectMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnsignedMessages", function() { return selectUnsignedMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMessagesData", function() { return selectMessagesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnsignedMessagesData", function() { return selectUnsignedMessagesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRaw", function() { return selectRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFinalPayload", function() { return selectFinalPayload; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deserialized-detail.actions */ "FUXb");
/* harmony import */ var _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deserialized.detail.types */ "sfIs");

// tslint:disable: typedef
// tslint:disable: max-file-line-count




/**************** STATE ****************/
var MAX_BIP39_PASSPHRASE_TRIES = 1;
/**************** Reducers ****************/
var initialState = {
    mode: undefined,
    title: '',
    button: undefined,
    loader: undefined,
    alert: undefined,
    modal: undefined,
    transactions: {
        value: undefined,
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].IDLE
    },
    messages: {
        value: undefined,
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].IDLE
    },
    raw: {
        value: undefined,
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].IDLE
    },
    bip39PassphraseTries: 0
};
var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__["navigationDataLoading"], function (state) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { loader: undefined, alert: undefined, modal: undefined, transactions: {
        value: state.transactions.value,
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].LOADING
    }, messages: {
        value: state.messages.value,
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].LOADING
    }, raw: {
        value: state.raw.value,
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].LOADING
    } })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__["navigationDataLoaded"], function (state, _a) {
    var mode = _a.mode, title = _a.title, button = _a.button, transactions = _a.transactions, messages = _a.messages, raw = _a.raw;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { mode: mode,
        title: title,
        button: button, loader: undefined, alert: undefined, modal: undefined, transactions: {
            value: transactions,
            status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].SUCCESS
        }, messages: {
            value: messages,
            status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].SUCCESS
        }, raw: {
            value: raw,
            status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].SUCCESS
        } }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__["navigationDataLoadingError"], function (state, _a) {
    var mode = _a.mode, title = _a.title, button = _a.button, raw = _a.raw;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { mode: mode,
        title: title,
        button: button, loader: undefined, alert: undefined, modal: undefined, transactions: {
            value: undefined,
            status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].ERROR
        }, messages: {
            value: undefined,
            status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].ERROR
        }, raw: {
            value: raw,
            status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].SUCCESS
        } }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__["transactionsSigned"], function (state, _a) {
    var _b;
    var transactions = _a.transactions;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { loader: undefined, alert: undefined, transactions: {
            value: ((_b = state.transactions.value) !== null && _b !== void 0 ? _b : []).concat(transactions),
            status: state.transactions.status
        } }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__["messagesSigned"], function (state, _a) {
    var _b;
    var messages = _a.messages;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { loader: undefined, alert: undefined, modal: undefined, messages: {
            value: ((_b = state.messages.value) !== null && _b !== void 0 ? _b : []).concat(messages),
            status: state.transactions.status
        } }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__["loaderDismissed"], function (state, _a) {
    var id = _a.id;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { loader: state.loader !== undefined
            ? {
                id: state.loader.id,
                value: state.loader.value,
                status: id === state.loader.id ? _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].HANDLED : state.loader.status,
                userInput: id === state.loader.id ? {} : state.loader.userInput
            }
            : undefined }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__["alertDismissed"], function (state, _a) {
    var id = _a.id;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { alert: state.alert !== undefined
            ? {
                id: state.alert.id,
                value: state.alert.value,
                status: id === state.alert.id ? _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].HANDLED : state.alert.status
            }
            : undefined, modal: undefined }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__["modalDismissed"], function (state, _a) {
    var id = _a.id;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { alert: undefined, modal: state.modal !== undefined
            ? {
                id: state.modal.id,
                value: state.modal.value,
                status: id === state.modal.id ? _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].HANDLED : state.modal.status
            }
            : undefined }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__["invalidBip39Passphrase"], function (state) {
    return state.bip39PassphraseTries < MAX_BIP39_PASSPHRASE_TRIES
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { loader: undefined, alert: {
                id: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["generateGUID"])(),
                value: { type: 'bip39Passphrase' },
                status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING
            }, modal: undefined, bip39PassphraseTries: state.bip39PassphraseTries + 1 }) : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { loader: undefined, alert: {
            id: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["generateGUID"])(),
            value: { type: 'bip39PassphraseError' },
            status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING
        }, modal: undefined, bip39PassphraseTries: 0 });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__["secretNotFound"], function (state) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { alert: {
        id: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["generateGUID"])(),
        value: { type: 'secretNotFound' },
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING
    }, modal: undefined })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__["protocolNotFound"], function (state) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { loader: undefined, alert: undefined, modal: {
        id: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["generateGUID"])(),
        value: 'selectSigningAccount',
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING
    } })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__["runningBlockingTask"], function (state, _a) {
    var task = _a.task, userInput = _a.userInput;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { loader: {
            id: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["generateGUID"])(),
            value: task,
            status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING,
            userInput: userInput
        } }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_deserialized_detail_actions__WEBPACK_IMPORTED_MODULE_3__["unknownError"], function (state, _a) {
    var message = _a.message;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { loader: undefined, alert: {
            id: Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["generateGUID"])(),
            value: {
                type: 'unknownError',
                message: (message === null || message === void 0 ? void 0 : message.length) > 0 ? message : undefined
            },
            status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIActionStatus"].PENDING
        }, modal: undefined }));
}));
/**************** Selectors ****************/
var selectFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('deserializedDetail');
var selectMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.mode; });
var selectTitle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.title; });
var selectButton = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.button; });
var selectLoader = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.loader; });
var selectAlert = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.alert; });
var selectModal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.modal; });
var selectTransactions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.transactions; });
var createSelectTransaction = function (type) {
    return function (transactions) {
        var _a;
        return ({
            value: (_a = transactions.value) === null || _a === void 0 ? void 0 : _a.filter(function (transaction) { return transaction.type === type; }),
            status: transactions.status
        });
    };
};
var selectUnsignedTransactions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectTransactions, createSelectTransaction('unsigned'));
var selectSignedTransactions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectTransactions, createSelectTransaction('signed'));
var getTransactionsDetails = function (transactions, type) {
    var _a;
    var details = (_a = transactions.value) === null || _a === void 0 ? void 0 : _a.filter(function (transaction) { return (type !== undefined ? transaction.type === type : true); }).map(function (transaction) { return transaction.details; });
    return {
        value: details !== undefined ? Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["flattened"])(details) : undefined,
        status: transactions.status
    };
};
var selectTransactionsDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectMode, selectTransactions, function (mode, transactions) {
    switch (mode) {
        case _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_4__["Mode"].SIGN_TRANSACTION:
            return getTransactionsDetails(transactions, 'unsigned');
        default:
            return {
                value: undefined,
                status: transactions.status
            };
    }
});
var selectUnsignedTransactionsDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectUnsignedTransactions, getTransactionsDetails);
var selectSignedTransactionsDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectSignedTransactions, getTransactionsDetails);
var selectMessages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.messages; });
var createSelectMessage = function (type) {
    return function (messages) {
        var _a;
        return ({
            value: (_a = messages.value) === null || _a === void 0 ? void 0 : _a.filter(function (message) { return message.type === type; }),
            status: messages.status
        });
    };
};
var selectUnsignedMessages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectMessages, createSelectMessage('unsigned'));
var getMessagesData = function (messages, type) {
    var _a;
    var details = (_a = messages.value) === null || _a === void 0 ? void 0 : _a.filter(function (message) { return (type !== undefined ? message.type === type : true); }).map(function (message) {
        var blake2bHash = message.type === 'unsigned' ? message.blake2bHash : undefined;
        return { data: message.data.message, blake2bHash: blake2bHash };
    });
    return {
        value: details,
        status: messages.status
    };
};
var selectMessagesData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectMode, selectMessages, function (mode, messages) {
    switch (mode) {
        case _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_4__["Mode"].SIGN_MESSAGE:
            return getMessagesData(messages, 'unsigned');
        default:
            return {
                value: undefined,
                status: messages.status
            };
    }
});
var selectUnsignedMessagesData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectUnsignedMessages, getMessagesData);
var selectRaw = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.raw; });
var selectFinalPayload = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectMode, selectUnsignedTransactions, selectSignedTransactions, selectUnsignedMessages, function (mode, unsignedTransactions, _signedTransactions, unsignedMessages) {
    switch (mode) {
        case _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_4__["Mode"].SIGN_TRANSACTION:
            return {
                mode: mode,
                data: unsignedTransactions.value
            };
        case _deserialized_detail_types__WEBPACK_IMPORTED_MODULE_4__["Mode"].SIGN_MESSAGE:
            return {
                mode: mode,
                data: unsignedMessages.value
            };
        default:
            Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["assertNever"])('selectFinalPayload', mode);
    }
});


/***/ })

}]);
//# sourceMappingURL=pages-deserialized-detail-deserialized-detail-module.js.map