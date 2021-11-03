(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-settings-tab-settings-module"],{

/***/ "T2rt":
/*!***********************************************************!*\
  !*** ./src/app/pages/tab-settings/tab-settings.module.ts ***!
  \***********************************************************/
/*! exports provided: TabSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSettingsPageModule", function() { return TabSettingsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _tab_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-settings.page */ "YpCX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









var routes = [
    {
        path: '',
        component: _tab_settings_page__WEBPACK_IMPORTED_MODULE_6__["TabSettingsPage"]
    }
];
var TabSettingsPageModule = /** @class */ (function () {
    function TabSettingsPageModule() {
    }
    TabSettingsPageModule.ɵfac = function TabSettingsPageModule_Factory(t) { return new (t || TabSettingsPageModule)(); };
    TabSettingsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: TabSettingsPageModule });
    TabSettingsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return TabSettingsPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TabSettingsPageModule, { declarations: [_tab_settings_page__WEBPACK_IMPORTED_MODULE_6__["TabSettingsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ }),

/***/ "YpCX":
/*!*********************************************************!*\
  !*** ./src/app/pages/tab-settings/tab-settings.page.ts ***!
  \*********************************************************/
/*! exports provided: TabSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSettingsPage", function() { return TabSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var src_app_services_iac_iac_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/iac/iac.service */ "wTY4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_secret_item_secret_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/secret-item/secret-item.component */ "NXa7");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
















function TabSettingsPage_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "airgap-secret-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TabSettingsPage_ng_container_21_Template_airgap_secret_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); var secret_r1 = ctx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r2.goToEditSecret(secret_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var secret_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("secret", secret_r1);
} }
var TabSettingsPage = /** @class */ (function () {
    function TabSettingsPage(serializerService, secretsService, alertController, toastController, iacService, clipboardService, navigationService) {
        this.serializerService = serializerService;
        this.secretsService = secretsService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.iacService = iacService;
        this.clipboardService = clipboardService;
        this.navigationService = navigationService;
        this.secrets = this.secretsService.getSecretsObservable();
    }
    TabSettingsPage.prototype.goToNewSecret = function () {
        this.navigationService.route('/secret-setup').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_NAVIGATION));
    };
    TabSettingsPage.prototype.goToEditSecret = function (secret) {
        this.navigationService.routeWithState('/secret-edit', { secret: secret }).catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_NAVIGATION));
    };
    TabSettingsPage.prototype.goToInteractionSettings = function () {
        this.navigationService.route('/interaction-selection-settings').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_NAVIGATION));
    };
    TabSettingsPage.prototype.goToErrorHistory = function () {
        this.navigationService.route('/error-history').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_NAVIGATION));
    };
    TabSettingsPage.prototype.deleteSecret = function (secret) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete ' + secret.label,
                            subHeader: 'Are you sure you want to delete ' + secret.label + '?',
                            buttons: [
                                {
                                    text: 'Delete',
                                    handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        var toast;
                                        var _this = this;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    this.secretsService.remove(secret).catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].SECURE_STORAGE));
                                                    return [4 /*yield*/, this.toastController.create({
                                                            message: 'Secret deleted',
                                                            duration: 5000,
                                                            buttons: [
                                                                {
                                                                    text: 'Undo',
                                                                    role: 'cancel'
                                                                }
                                                            ]
                                                        })];
                                                case 1:
                                                    toast = _a.sent();
                                                    toast.onDidDismiss().then(function (role) {
                                                        if (role === 'close') {
                                                            _this.secretsService.addOrUpdateSecret(secret).catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].SECURE_STORAGE));
                                                        }
                                                    });
                                                    toast.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_ALERT));
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                },
                                {
                                    text: 'Cancel'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_ALERT));
                        return [2 /*return*/];
                }
            });
        });
    };
    TabSettingsPage.prototype.goToAbout = function () {
        this.navigationService.route('/about').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_NAVIGATION));
    };
    TabSettingsPage.prototype.goToInteractionHistory = function () {
        this.navigationService.route('/interaction-history').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_NAVIGATION));
    };
    TabSettingsPage.prototype.goToQrSettings = function () {
        this.navigationService.route('/qr-settings').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_NAVIGATION));
    };
    TabSettingsPage.prototype.goToDangerZone = function () {
        this.navigationService.route('/danger-zone').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_NAVIGATION));
    };
    TabSettingsPage.prototype.pasteClipboard = function () {
        var _this = this;
        this.clipboardService.paste().then(function (text) {
            console.log('pasteClipboard', text);
            _this.iacService.handleRequest(text, _airgap_angular_core__WEBPACK_IMPORTED_MODULE_5__["IACMessageTransport"].PASTE).catch(function (err) { return console.error(err); });
        }, function (err) {
            console.error('Error: ' + err);
        });
    };
    TabSettingsPage.ɵfac = function TabSettingsPage_Factory(t) { return new (t || TabSettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_5__["SerializerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_4__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_iac_iac_service__WEBPACK_IMPORTED_MODULE_6__["IACService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_5__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"])); };
    TabSettingsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TabSettingsPage, selectors: [["airgap-tab-settings"]], decls: 53, vars: 33, consts: [[1, "ion-no-border"], ["color", "secondary"], ["lines", "none", "detail", "true", 3, "click"], ["slot", "start", "name", "information-circle-outline"], [4, "ngFor", "ngForOf"], [1, "ion-padding", "ion-justify-content-end"], ["color", "secondary", "shape", "round", 3, "click"], ["slot", "start", "name", "add"], ["lines", "none", 1, "ion-no-border"], ["lines", "none", 1, "ion-no-margin"], [3, "click"], ["name", "return-up-forward-outline", "slot", "start"], ["name", "qr-code-outline", "slot", "start"], ["src", "assets/icons/md-swap_horiz.svg", "slot", "start"], ["name", "bug-outline", "slot", "start"], ["name", "warning", "slot", "start"], [1, "ion-padding", 3, "secret", "click"]], template: function TabSettingsPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-list-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ion-item", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TabSettingsPage_Template_ion_item_click_11_listener() { return ctx.goToAbout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "ion-list-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, TabSettingsPage_ng_container_21_Template, 2, 1, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "ion-row", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TabSettingsPage_Template_ion_button_click_24_listener() { return ctx.goToNewSecret(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "ion-list", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "ion-list-header", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TabSettingsPage_Template_ion_item_click_34_listener() { return ctx.pasteClipboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "ion-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TabSettingsPage_Template_ion_item_click_38_listener() { return ctx.goToQrSettings(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "ion-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TabSettingsPage_Template_ion_item_click_42_listener() { return ctx.goToInteractionSettings(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "ion-icon", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TabSettingsPage_Template_ion_item_click_46_listener() { return ctx.goToErrorHistory(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "ion-icon", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, " Local Error History ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "ion-item", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TabSettingsPage_Template_ion_item_click_49_listener() { return ctx.goToDangerZone(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "ion-icon", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](52, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 11, "tab-settings.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 13, "tab-settings.information_label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 15, "tab-settings.about"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 17, "tab-settings.secrets_label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 19, ctx.secrets));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 21, "tab-settings.add-settings_label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 23, "tab-settings.interaction-options_label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](37, 25, "tab-settings.paste-from-clipboard_label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](41, 27, "tab-settings.qr-advanced-settings_label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](45, 29, "tab-settings.interaction-settings_label"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](52, 31, "tab-settings.danger-zone_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _components_secret_item_secret_item_component__WEBPACK_IMPORTED_MODULE_9__["SecretItemComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItc2V0dGluZ3MucGFnZS5zY3NzIn0= */"] });
    return TabSettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab-settings-tab-settings-module.js.map