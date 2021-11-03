(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-danger-zone-danger-zone-module"],{

/***/ "KB3M":
/*!*****************************************************************!*\
  !*** ./src/app/pages/danger-zone/danger-zone-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DangerZonePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangerZonePageRoutingModule", function() { return DangerZonePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _danger_zone_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./danger-zone.page */ "c/SI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var routes = [
    {
        path: '',
        component: _danger_zone_page__WEBPACK_IMPORTED_MODULE_1__["DangerZonePage"]
    }
];
var DangerZonePageRoutingModule = /** @class */ (function () {
    function DangerZonePageRoutingModule() {
    }
    DangerZonePageRoutingModule.ɵfac = function DangerZonePageRoutingModule_Factory(t) { return new (t || DangerZonePageRoutingModule)(); };
    DangerZonePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DangerZonePageRoutingModule });
    DangerZonePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return DangerZonePageRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DangerZonePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "c/SI":
/*!*******************************************************!*\
  !*** ./src/app/pages/danger-zone/danger-zone.page.ts ***!
  \*******************************************************/
/*! exports provided: DangerZonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangerZonePage", function() { return DangerZonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigation/navigation.service */ "r+JB");
/* harmony import */ var src_app_services_secure_storage_secure_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/secure-storage/secure-storage.service */ "iV4W");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "E2f4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");












var DangerZonePage = /** @class */ (function () {
    function DangerZonePage(alertCtrl, translateService, storageService, secureStorage, navigationService) {
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.storageService = storageService;
        this.secureStorage = secureStorage;
        this.navigationService = navigationService;
    }
    DangerZonePage.prototype.ngOnInit = function () { };
    DangerZonePage.prototype.resetVault = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: this.translateService.instant('danger-zone.wipe.alert.title'),
                            message: this.translateService.instant('danger-zone.wipe.alert.message'),
                            buttons: [
                                {
                                    text: this.translateService.instant('danger-zone.wipe.alert.cancel'),
                                    role: 'cancel'
                                },
                                {
                                    text: this.translateService.instant('danger-zone.wipe.alert.ok'),
                                    handler: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        var e_1;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 3, , 4]);
                                                    return [4 /*yield*/, this.secureStorage.wipe()];
                                                case 1:
                                                    _a.sent();
                                                    return [4 /*yield*/, this.storageService.wipe()];
                                                case 2:
                                                    _a.sent();
                                                    return [3 /*break*/, 4];
                                                case 3:
                                                    e_1 = _a.sent();
                                                    console.error('Wiping failed', e_1);
                                                    return [2 /*return*/, this.resetVaultError()];
                                                case 4:
                                                    this.navigationService.route('/').then(function () {
                                                        location.reload();
                                                    });
                                                    return [2 /*return*/];
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
    DangerZonePage.prototype.resetVaultError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: this.translateService.instant('danger-zone.wipe-error.alert.title'),
                            message: this.translateService.instant('danger-zone.wipe-error.alert.message'),
                            buttons: [
                                {
                                    text: this.translateService.instant('danger-zone.wipe-error.alert.ok')
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
    DangerZonePage.ɵfac = function DangerZonePage_Factory(t) { return new (t || DangerZonePage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["VaultStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_secure_storage_secure_storage_service__WEBPACK_IMPORTED_MODULE_4__["SecureStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"])); };
    DangerZonePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DangerZonePage, selectors: [["airgap-danger-zone"]], decls: 16, vars: 9, consts: [["color", "secondary"], ["slot", "start"], ["defaultHref", "/tabs/tab-settings"], [1, "ion-padding"], ["lines", "none", 1, "ion-no-border", "no-padding"], [3, "click"], ["name", "warning", "slot", "start"]], template: function DangerZonePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-list", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-item", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DangerZonePage_Template_ion_item_click_12_listener() { return ctx.resetVault(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, "danger-zone.label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 5, "danger-zone.description"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 7, "danger-zone.wipe_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYW5nZXItem9uZS5wYWdlLnNjc3MifQ== */"] });
    return DangerZonePage;
}());



/***/ }),

/***/ "fmil":
/*!*********************************************************!*\
  !*** ./src/app/pages/danger-zone/danger-zone.module.ts ***!
  \*********************************************************/
/*! exports provided: DangerZonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangerZonePageModule", function() { return DangerZonePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _danger_zone_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./danger-zone-routing.module */ "KB3M");
/* harmony import */ var _danger_zone_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./danger-zone.page */ "c/SI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







var DangerZonePageModule = /** @class */ (function () {
    function DangerZonePageModule() {
    }
    DangerZonePageModule.ɵfac = function DangerZonePageModule_Factory(t) { return new (t || DangerZonePageModule)(); };
    DangerZonePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DangerZonePageModule });
    DangerZonePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _danger_zone_routing_module__WEBPACK_IMPORTED_MODULE_3__["DangerZonePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]] });
    return DangerZonePageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DangerZonePageModule, { declarations: [_danger_zone_page__WEBPACK_IMPORTED_MODULE_4__["DangerZonePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _danger_zone_routing_module__WEBPACK_IMPORTED_MODULE_3__["DangerZonePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-danger-zone-danger-zone-module.js.map