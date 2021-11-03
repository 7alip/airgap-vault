(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-error-history-error-history-module"],{

/***/ "1LLN":
/*!***********************************************************!*\
  !*** ./src/app/pages/error-history/error-history.page.ts ***!
  \***********************************************************/
/*! exports provided: ErrorHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHistoryPage", function() { return ErrorHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ErrorHistoryPage_ion_card_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Error list is empty! \uD83C\uDF89");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ErrorHistoryPage_ion_card_14_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var error_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](error_r2.title);
} }
function ErrorHistoryPage_ion_card_14_pre_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var error_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](error_r2.detail);
} }
function ErrorHistoryPage_ion_card_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ErrorHistoryPage_ion_card_14_Template_ion_card_click_0_listener() { var error_r2 = ctx.$implicit; return error_r2.expanded = !error_r2.expanded; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ErrorHistoryPage_ion_card_14_ng_container_8_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ErrorHistoryPage_ion_card_14_pre_9_Template, 2, 1, "pre", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 3, error_r2.date, "yyyy-MM-dd HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !error_r2.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", error_r2.expanded);
} }
var ErrorHistoryPage = /** @class */ (function () {
    function ErrorHistoryPage(alertController, clipboardService) {
        this.alertController = alertController;
        this.clipboardService = clipboardService;
        this.errorHistory = [];
    }
    ErrorHistoryPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.updateList();
                return [2 /*return*/];
            });
        });
    };
    ErrorHistoryPage.prototype.updateList = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var logger, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logger = new src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["LocalErrorLogger"]();
                        _a = this;
                        return [4 /*yield*/, logger.getErrorHistory()];
                    case 1: return [4 /*yield*/, (_b.sent()).map(function (error) { return ({
                            date: error[4],
                            title: error[2].split('\n')[0],
                            detail: error[2],
                            expanded: false
                        }); })];
                    case 2:
                        _a.errorHistory = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ErrorHistoryPage.prototype.copyErrorHistory = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.errorHistory.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Copy Error History',
                                subHeader: 'WARNING',
                                message: '<b>It is possible that the error history contains your private keys, so you should ONLY use this feature if you are testing your device without any funds on it.</b><br /><br />If you encounter an error while using AirGap Vault, sending the developers your local error history could help them pinpoint the problem.<br /><br />Send this error history <b>only</b> to hi@airgap.it, along with a detailed description of your problem.',
                                inputs: [
                                    {
                                        name: 'understood',
                                        type: 'checkbox',
                                        label: 'I understand',
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
                                        text: 'Copy',
                                        handler: function (result) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                            var errorHistory;
                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (!result.includes('understood')) return [3 /*break*/, 2];
                                                        return [4 /*yield*/, new src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["LocalErrorLogger"]().getErrorHistoryFormatted()];
                                                    case 1:
                                                        errorHistory = _a.sent();
                                                        this.clipboardService.copyAndShowToast(errorHistory, 'Local error history copied to clipboard');
                                                        _a.label = 2;
                                                    case 2: return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present().catch(Object(src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_ALERT));
                        return [3 /*break*/, 3];
                    case 2: return [2 /*return*/, this.noErrors()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ErrorHistoryPage.prototype.noErrors = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'No errors',
                            message: "No recent errors occured, we can't copy anything to your clipboard.",
                            buttons: [
                                {
                                    text: 'Ok'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present().catch(Object(src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_ALERT));
                        return [2 /*return*/];
                }
            });
        });
    };
    ErrorHistoryPage.prototype.clearErrors = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Clear errors',
                            message: "Do you want to clear your error history?",
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function () {
                                        var logger = new src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["LocalErrorLogger"]();
                                        logger.clearAll();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present().catch(Object(src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_ALERT));
                        alert.onDidDismiss().then(function () {
                            _this.updateList();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ErrorHistoryPage.ɵfac = function ErrorHistoryPage_Factory(t) { return new (t || ErrorHistoryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ClipboardService"])); };
    ErrorHistoryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ErrorHistoryPage, selectors: [["airgap-error-history"]], decls: 15, vars: 2, consts: [["color", "secondary"], ["slot", "start"], ["defaultHref", "/tabs/tab-settings"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "download"], ["slot", "icon-only", "name", "trash"], [4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"], ["fill", "outline", "slot", "end"]], template: function ErrorHistoryPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Error History");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-buttons", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ErrorHistoryPage_Template_ion_button_click_7_listener() { return ctx.copyErrorHistory(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ion-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ErrorHistoryPage_Template_ion_button_click_9_listener() { return ctx.clearErrors(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ErrorHistoryPage_ion_card_13_Template, 3, 0, "ion-card", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ErrorHistoryPage_ion_card_14_Template, 10, 6, "ion-card", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorHistory.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.errorHistory);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1oaXN0b3J5LnBhZ2Uuc2NzcyJ9 */"] });
    return ErrorHistoryPage;
}());



/***/ }),

/***/ "W5pq":
/*!*************************************************************!*\
  !*** ./src/app/pages/error-history/error-history.module.ts ***!
  \*************************************************************/
/*! exports provided: ErrorHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHistoryPageModule", function() { return ErrorHistoryPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _error_history_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-history-routing.module */ "z9AZ");
/* harmony import */ var _error_history_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-history.page */ "1LLN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






var ErrorHistoryPageModule = /** @class */ (function () {
    function ErrorHistoryPageModule() {
    }
    ErrorHistoryPageModule.ɵfac = function ErrorHistoryPageModule_Factory(t) { return new (t || ErrorHistoryPageModule)(); };
    ErrorHistoryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ErrorHistoryPageModule });
    ErrorHistoryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _error_history_routing_module__WEBPACK_IMPORTED_MODULE_3__["ErrorHistoryPageRoutingModule"]]] });
    return ErrorHistoryPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ErrorHistoryPageModule, { declarations: [_error_history_page__WEBPACK_IMPORTED_MODULE_4__["ErrorHistoryPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _error_history_routing_module__WEBPACK_IMPORTED_MODULE_3__["ErrorHistoryPageRoutingModule"]] }); })();


/***/ }),

/***/ "z9AZ":
/*!*********************************************************************!*\
  !*** ./src/app/pages/error-history/error-history-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ErrorHistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHistoryPageRoutingModule", function() { return ErrorHistoryPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _error_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-history.page */ "1LLN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var routes = [
    {
        path: '',
        component: _error_history_page__WEBPACK_IMPORTED_MODULE_1__["ErrorHistoryPage"]
    }
];
var ErrorHistoryPageRoutingModule = /** @class */ (function () {
    function ErrorHistoryPageRoutingModule() {
    }
    ErrorHistoryPageRoutingModule.ɵfac = function ErrorHistoryPageRoutingModule_Factory(t) { return new (t || ErrorHistoryPageRoutingModule)(); };
    ErrorHistoryPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ErrorHistoryPageRoutingModule });
    ErrorHistoryPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return ErrorHistoryPageRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ErrorHistoryPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-error-history-error-history-module.js.map