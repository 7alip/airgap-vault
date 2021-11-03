(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"],{

/***/ "/P9h":
/*!*************************************************************!*\
  !*** ./src/app/components/transaction/transaction.store.ts ***!
  \*************************************************************/
/*! exports provided: TransactionStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionStore", function() { return TransactionStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/component-store */ "ufcJ");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





var initialState = {
    protocolIdentifier: undefined,
    airGapTxs: [],
    aggregatedDetails: undefined
};
var TransactionStore = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TransactionStore, _super);
    function TransactionStore() {
        var _this = _super.call(this, initialState) || this;
        _this.setAirGapTxs = _this.updater(function (_state, airGapTxs) { return ({
            protocolIdentifier: airGapTxs[0].protocolIdentifier,
            airGapTxs: airGapTxs,
            aggregatedDetails: {
                numberOfTxs: airGapTxs.length,
                totalAmount: new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["sumAirGapTxValues"])(airGapTxs, 'amount')),
                totalFees: new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["sumAirGapTxValues"])(airGapTxs, 'fee'))
            }
        }); });
        return _this;
    }
    TransactionStore.prototype.selectProtocolIdentifier = function () {
        return this.select(function (state) { return state.protocolIdentifier; });
    };
    TransactionStore.prototype.selectAirGapTxs = function () {
        return this.select(function (state) { return state.airGapTxs; });
    };
    TransactionStore.prototype.selectAggregatedDetails = function () {
        return this.select(function (state) { return state.aggregatedDetails; });
    };
    TransactionStore.ɵfac = function TransactionStore_Factory(t) { return new (t || TransactionStore)(); };
    TransactionStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TransactionStore, factory: TransactionStore.ɵfac });
    return TransactionStore;
}(_ngrx_component_store__WEBPACK_IMPORTED_MODULE_2__["ComponentStore"]));



/***/ }),

/***/ "3gWE":
/*!***************************************************************************!*\
  !*** ./src/app/components/entropy-progress/entropy-progress.component.ts ***!
  \***************************************************************************/
/*! exports provided: EntropyProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntropyProgressComponent", function() { return EntropyProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var EntropyProgressComponent = /** @class */ (function () {
    function EntropyProgressComponent() {
        this.maxValue = 1;
        this.value = 0;
        this.progressInPercent = 0;
    }
    EntropyProgressComponent.prototype.ngOnChanges = function () {
        this.progressInPercent = this.value > this.maxValue ? 100 : Math.floor((this.value / this.maxValue) * 100);
    };
    EntropyProgressComponent.ɵfac = function EntropyProgressComponent_Factory(t) { return new (t || EntropyProgressComponent)(); };
    EntropyProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntropyProgressComponent, selectors: [["airgap-entropy-progress"]], inputs: { maxValue: "maxValue", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, template: function EntropyProgressComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.progressInPercent, "%");
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRyb3B5LXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return EntropyProgressComponent;
}());



/***/ }),

/***/ "BYgT":
/*!*****************************************************************!*\
  !*** ./src/app/components/transaction/transaction.component.ts ***!
  \*****************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _transaction_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction.store */ "/P9h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _transaction_warning_transaction_warning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transaction-warning/transaction-warning.component */ "DrqP");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @airgap/angular-core */ "138U");








var _c0 = function (a0) { return { protocol: a0, maxDigits: undefined }; };
var _c1 = function (a0) { return { protocol: a0 }; };
function TransactionComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "amountConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "feeConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Operations");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var aggregatedDetails_r4 = ctx.ngIf;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 5, aggregatedDetails_r4.totalAmount.toFixed(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 8, ctx_r2.protocolIdentifier$)))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](aggregatedDetails_r4.numberOfTxs);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 12, aggregatedDetails_r4.totalFees.toFixed(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 15, ctx_r2.protocolIdentifier$)))));
} }
function TransactionComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "airgap-transaction-warning", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "airgap-from-to", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var airGapTx_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("transaction", airGapTx_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("transaction", airGapTx_r5);
} }
function TransactionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TransactionComponent_ng_container_0_ng_container_1_Template, 26, 21, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TransactionComponent_ng_container_0_ng_container_3_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var airGapTxs_r1 = ctx.ngIf;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r0.aggregatedDetails$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", airGapTxs_r1);
} }
var TransactionComponent = /** @class */ (function () {
    function TransactionComponent(store) {
        this.store = store;
        this.protocolIdentifier$ = this.store.selectProtocolIdentifier();
        this.airGapTxs$ = this.store.selectAirGapTxs();
        this.aggregatedDetails$ = this.store.selectAggregatedDetails();
    }
    TransactionComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.airGapTxs !== undefined) {
                    this.store.setAirGapTxs(this.airGapTxs);
                }
                return [2 /*return*/];
            });
        });
    };
    TransactionComponent.ɵfac = function TransactionComponent_Factory(t) { return new (t || TransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_transaction_store__WEBPACK_IMPORTED_MODULE_1__["TransactionStore"])); };
    TransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TransactionComponent, selectors: [["airgap-transaction"]], inputs: { airGapTxs: "airGapTxs" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_transaction_store__WEBPACK_IMPORTED_MODULE_1__["TransactionStore"]])], decls: 2, vars: 3, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ion-padding-bottom", "ion-text-center"], ["size", "4", 1, "content--align__center-center"], ["size", "4"], [3, "transaction"], [1, "ion-padding-horizontal", 3, "transaction"]], template: function TransactionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TransactionComponent_ng_container_0_Template, 4, 4, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.airGapTxs$));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _transaction_warning_transaction_warning_component__WEBPACK_IMPORTED_MODULE_5__["TransactionWarningComponent"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_6__["FromToComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_6__["AmountConverterPipe"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_6__["FeeConverterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return TransactionComponent;
}());



/***/ }),

/***/ "DrqP":
/*!*********************************************************************************!*\
  !*** ./src/app/components/transaction-warning/transaction-warning.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TransactionWarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionWarningComponent", function() { return TransactionWarningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_coinlib_core_interfaces_IAirGapTransaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/coinlib-core/interfaces/IAirGapTransaction */ "/Q1g");
/* harmony import */ var _airgap_coinlib_core_interfaces_IAirGapTransaction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_interfaces_IAirGapTransaction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






function TransactionWarningComponent_ion_row_0_ion_col_1_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 7);
} if (rf & 2) {
    var warning_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", warning_r2.icon);
} }
function TransactionWarningComponent_ion_row_0_ion_col_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TransactionWarningComponent_ion_row_0_ion_col_1_ion_icon_2_Template, 1, 1, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var warning_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("detail", false)("color", warning_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", warning_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 5, warning_r2.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 7, warning_r2.description));
} }
function TransactionWarningComponent_ion_row_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TransactionWarningComponent_ion_row_0_ion_col_1_Template, 11, 9, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.warnings);
} }
var TransactionWarningComponent = /** @class */ (function () {
    function TransactionWarningComponent() {
    }
    Object.defineProperty(TransactionWarningComponent.prototype, "transaction", {
        get: function () {
            return this._transaction;
        },
        set: function (value) {
            var _a;
            this._transaction = value;
            if (value) {
                this.warnings = (_a = value.warnings) === null || _a === void 0 ? void 0 : _a.map(function (warning) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, warning), { color: warning.type === _airgap_coinlib_core_interfaces_IAirGapTransaction__WEBPACK_IMPORTED_MODULE_1__["AirGapTransactionWarningType"].SUCCESS
                            ? 'success'
                            : warning.type === _airgap_coinlib_core_interfaces_IAirGapTransaction__WEBPACK_IMPORTED_MODULE_1__["AirGapTransactionWarningType"].NOTE
                                ? 'light'
                                : warning.type === _airgap_coinlib_core_interfaces_IAirGapTransaction__WEBPACK_IMPORTED_MODULE_1__["AirGapTransactionWarningType"].WARNING
                                    ? 'warning'
                                    : warning.type === _airgap_coinlib_core_interfaces_IAirGapTransaction__WEBPACK_IMPORTED_MODULE_1__["AirGapTransactionWarningType"].ERROR
                                        ? 'danger'
                                        : 'primary', icon: warning.icon
                            ? warning.icon
                            : warning.type === _airgap_coinlib_core_interfaces_IAirGapTransaction__WEBPACK_IMPORTED_MODULE_1__["AirGapTransactionWarningType"].SUCCESS
                                ? 'checkmark-circle-outline'
                                : warning.type === _airgap_coinlib_core_interfaces_IAirGapTransaction__WEBPACK_IMPORTED_MODULE_1__["AirGapTransactionWarningType"].NOTE
                                    ? 'information-circle-outline'
                                    : warning.type === _airgap_coinlib_core_interfaces_IAirGapTransaction__WEBPACK_IMPORTED_MODULE_1__["AirGapTransactionWarningType"].WARNING
                                        ? 'warning'
                                        : warning.type === _airgap_coinlib_core_interfaces_IAirGapTransaction__WEBPACK_IMPORTED_MODULE_1__["AirGapTransactionWarningType"].ERROR
                                            ? 'warning'
                                            : 'warning' });
                });
            }
        },
        enumerable: false,
        configurable: true
    });
    TransactionWarningComponent.ɵfac = function TransactionWarningComponent_Factory(t) { return new (t || TransactionWarningComponent)(); };
    TransactionWarningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TransactionWarningComponent, selectors: [["airgap-transaction-warning"]], inputs: { transaction: "transaction" }, decls: 1, vars: 1, consts: [["class", "ion-align-items-center ion-padding-top", 4, "ngIf"], [1, "ion-align-items-center", "ion-padding-top"], ["size", "12", 4, "ngFor", "ngForOf"], ["size", "12"], ["lines", "none", 1, "ion-margin-vertical", 3, "detail", "color"], ["slot", "start", "color", "dark", 3, "name", 4, "ngIf"], ["color", "dark", 1, "ion-text-wrap"], ["slot", "start", "color", "dark", 3, "name"]], template: function TransactionWarningComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TransactionWarningComponent_ion_row_0_Template, 2, 1, "ion-row", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.warnings && ctx.warnings.length > 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbi13YXJuaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return TransactionWarningComponent;
}());



/***/ }),

/***/ "Eyg1":
/*!*************************************************************************************!*\
  !*** ./src/app/components/message-sign-response/message-sign-response.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MessageSignResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSignResponseComponent", function() { return MessageSignResponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




function MessageSignResponseComponent_ng_container_0_pre_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.messageSignResponse));
} }
function MessageSignResponseComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-toggle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function MessageSignResponseComponent_ng_container_0_Template_ion_toggle_ionChange_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleDisplayRawData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MessageSignResponseComponent_ng_container_0_pre_8_Template, 3, 3, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "message-signing-response.text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.displayRawData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.displayRawData);
} }
var MessageSignResponseComponent = /** @class */ (function () {
    function MessageSignResponseComponent() {
        this.displayRawData = false;
    }
    MessageSignResponseComponent.prototype.toggleDisplayRawData = function () {
        this.displayRawData = !this.displayRawData;
    };
    MessageSignResponseComponent.ɵfac = function MessageSignResponseComponent_Factory(t) { return new (t || MessageSignResponseComponent)(); };
    MessageSignResponseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageSignResponseComponent, selectors: [["airgap-message-sign-response"]], inputs: { messageSignResponse: "messageSignResponse" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "rawdata--container"], [1, "ion-no-padding"], ["lines", "none", 1, "ion-no-padding"], ["slot", "end", 3, "checked", "ionChange"], ["class", "ion-no-margin", 4, "ngIf"], [1, "ion-no-margin"]], template: function MessageSignResponseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageSignResponseComponent_ng_container_0_Template, 9, 5, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageSignResponse);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"]], styles: [".ion-no-margin[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lc3NhZ2Utc2lnbi1yZXNwb25zZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJtZXNzYWdlLXNpZ24tcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLW5vLW1hcmdpbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"] });
    return MessageSignResponseComponent;
}());



/***/ }),

/***/ "F2cf":
/*!***********************************************************************************!*\
  !*** ./src/app/components/message-sign-request/message-sign-request.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MessageSignRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSignRequestComponent", function() { return MessageSignRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function MessageSignRequestComponent_ion_row_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "pre", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "message-signing-request.payload_label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, ctx_r0._messages[0].data));
} }
function MessageSignRequestComponent_ion_row_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "pre", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "message-signing-request.blake2b_hash"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1._messages[0].blake2bHash);
} }
var MessageSignRequestComponent = /** @class */ (function () {
    function MessageSignRequestComponent() {
    }
    Object.defineProperty(MessageSignRequestComponent.prototype, "messages", {
        set: function (messages) {
            var _this = this;
            this._messages = messages.map(function (message) {
                var data = _this.hexToReadable(message.data);
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, message), { data: data });
            });
        },
        enumerable: false,
        configurable: true
    });
    MessageSignRequestComponent.prototype.hexToReadable = function (str) {
        var _a;
        var result = '';
        var idx = str.startsWith('0x') ? 2 : 0;
        for (var i = idx; i < str.length; i += 2) {
            result += String.fromCharCode(parseInt(str.substr(i, 2), 16));
        }
        var regex = /[^ A-Za-z0-9_@.,!?/#&+-\d\s:]/g;
        var containsGibberish = ((_a = result.match(regex)) === null || _a === void 0 ? void 0 : _a.length) > 0;
        // if true then the message was most likely not a human readable message encoded in hex
        return containsGibberish ? str : result;
    };
    MessageSignRequestComponent.ɵfac = function MessageSignRequestComponent_Factory(t) { return new (t || MessageSignRequestComponent)(); };
    MessageSignRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessageSignRequestComponent, selectors: [["airgap-message-sign-request"]], inputs: { messages: "messages" }, decls: 2, vars: 2, consts: [["class", "rawdata--container ion-padding-bottom", 4, "ngIf"], ["class", "rawdata--container", 4, "ngIf"], [1, "rawdata--container", "ion-padding-bottom"], [1, "ion-no-padding"], [1, "ion-no-margin"], [1, "rawdata--container"]], template: function MessageSignRequestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MessageSignRequestComponent_ion_row_0_Template, 8, 6, "ion-row", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MessageSignRequestComponent_ion_row_1_Template, 7, 4, "ion-row", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._messages[0]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._messages[0].blake2bHash);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLXNpZ24tcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return MessageSignRequestComponent;
}());



/***/ }),

/***/ "IFyw":
/*!***********************************************************!*\
  !*** ./src/app/pipes/wallet-status/wallet-status.pipe.ts ***!
  \***********************************************************/
/*! exports provided: WalletStatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletStatusPipe", function() { return WalletStatusPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var WalletStatusPipe = /** @class */ (function () {
    function WalletStatusPipe() {
    }
    WalletStatusPipe.prototype.transform = function (items, args) {
        if (!items) {
            return [];
        }
        return items.filter(function (wallet) { return wallet.status === args.status; });
    };
    WalletStatusPipe.ɵfac = function WalletStatusPipe_Factory(t) { return new (t || WalletStatusPipe)(); };
    WalletStatusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "walletStatus", type: WalletStatusPipe, pure: true });
    return WalletStatusPipe;
}());



/***/ }),

/***/ "NXa7":
/*!*****************************************************************!*\
  !*** ./src/app/components/secret-item/secret-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: SecretItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretItemComponent", function() { return SecretItemComponent; });
/* harmony import */ var _models_secret__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/secret */ "C2ta");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



var SecretItemComponent = /** @class */ (function () {
    function SecretItemComponent() {
    }
    SecretItemComponent.ɵfac = function SecretItemComponent_Factory(t) { return new (t || SecretItemComponent)(); };
    SecretItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SecretItemComponent, selectors: [["airgap-secret-item"]], inputs: { secret: "secret" }, decls: 9, vars: 3, consts: [["lines", "none", "detail", "true"], ["slot", "start"], [1, "secret--label"], ["shape", "round", 3, "color"], ["slot", "icon-only", "src", "assets/icons/md-fiber_pin.svg"], ["slot", "icon-only", "src", "assets/icons/md-group_work.svg"]], template: function SecretItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.secret.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.secret.isParanoia ? "primary" : "tertiary");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.secret.hasSocialRecovery ? "primary" : "tertiary");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]], styles: ["ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.secret--label[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\n  font-weight: 800;\n  font-size: 16px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  --padding-end: 0;\n  --padding-start: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlY3JldC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsNkZBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdGIiwiZmlsZSI6InNlY3JldC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2VjcmV0LS1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCAnTHVjaWRhIFNhbnMgVHlwZXdyaXRlcicsICdMdWNpZGEgVHlwZXdyaXRlcicsIG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbn1cbiJdfQ== */"] });
    return SecretItemComponent;
}());



/***/ }),

/***/ "RLm3":
/*!*******************************************************************************!*\
  !*** ./src/app/components/signed-transaction/signed-transaction.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SignedTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignedTransactionComponent", function() { return SignedTransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_token_TokenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token/TokenService */ "iGg7");
/* harmony import */ var src_app_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _transaction_warning_transaction_warning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../transaction-warning/transaction-warning.component */ "DrqP");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














var _c0 = function (a0) { return { protocol: a0, maxDigits: undefined }; };
var _c1 = function (a0) { return { protocol: a0 }; };
function SignedTransactionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "amountConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "feeConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Operations");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](6, 5, ctx_r0.aggregatedInfo.totalAmount.toFixed(), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c0, ctx_r0.airGapTxs[0].protocolIdentifier))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.aggregatedInfo.numberOfTxs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 8, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](14, 10, ctx_r0.aggregatedInfo.totalFees.toFixed(), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](15, _c1, ctx_r0.airGapTxs[0].protocolIdentifier))));
} }
function SignedTransactionComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "airgap-transaction-warning", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "airgap-from-to", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var airGapTx_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("transaction", airGapTx_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("transaction", airGapTx_r3);
} }
function SignedTransactionComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 2, "signed-transaction.transaction-unreadable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.rawTxData);
} }
var SignedTransactionComponent = /** @class */ (function () {
    function SignedTransactionComponent(protocolService, serializerService, tokenService, secretsService) {
        this.protocolService = protocolService;
        this.serializerService = serializerService;
        this.tokenService = tokenService;
        this.secretsService = secretsService;
        this.fallbackActivated = false;
        //
    }
    SignedTransactionComponent.prototype.ngOnChanges = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, err_1, protocol_1, _b, _c, error_1, e_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.syncProtocolString) return [3 /*break*/, 4];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.serializerService.deserialize(this.syncProtocolString)];
                    case 2:
                        _a.signedTxs = _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _d.sent();
                        console.log('ERROR', err_1);
                        this.fallbackActivated = true;
                        this.rawTxData = this.syncProtocolString;
                        return [3 /*break*/, 4];
                    case 4:
                        if (!this.signedTxs) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.protocolService.getProtocol(this.signedTxs[0].protocol, undefined, false)];
                    case 5:
                        protocol_1 = _d.sent();
                        _d.label = 6;
                    case 6:
                        _d.trys.push([6, 12, , 13]);
                        // tslint:disable-next-line:no-unnecessary-type-assertion
                        _b = this;
                        return [4 /*yield*/, Promise.all(this.signedTxs.map(function (signedTx) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var payload, saplingProtocol;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            payload = signedTx.payload;
                                            return [4 /*yield*/, this.checkIfSaplingTransaction(payload, signedTx.protocol)];
                                        case 1:
                                            if (!_a.sent()) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.getSaplingProtocol()];
                                        case 2:
                                            saplingProtocol = _a.sent();
                                            return [2 /*return*/, saplingProtocol.getTransactionDetailsFromSigned(payload, {
                                                    knownViewingKeys: this.secretsService.getKnownViewingKeys()
                                                })];
                                        case 3: return [2 /*return*/, protocol_1.getTransactionDetailsFromSigned(payload)];
                                    }
                                });
                            }); }))];
                    case 7:
                        // tslint:disable-next-line:no-unnecessary-type-assertion
                        _b.airGapTxs = (_d.sent()).reduce(function (flatten, toFlatten) { return flatten.concat(toFlatten); });
                        if (this.airGapTxs.length > 1 &&
                            this.airGapTxs.every(function (tx) { return tx.protocolIdentifier === _this.airGapTxs[0].protocolIdentifier; })) {
                            this.aggregatedInfo = {
                                numberOfTxs: this.airGapTxs.length,
                                totalAmount: new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["sumAirGapTxValues"])(this.airGapTxs, 'amount')),
                                totalFees: new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["sumAirGapTxValues"])(this.airGapTxs, 'fee'))
                            };
                        }
                        _d.label = 8;
                    case 8:
                        _d.trys.push([8, 10, , 11]);
                        if (this.airGapTxs.length !== 1) {
                            throw Error('TokenTransferDetails returned more than 1 transaction!');
                        }
                        _c = this;
                        return [4 /*yield*/, this.tokenService.getTokenTransferDetailsFromSigned(this.airGapTxs[0], this.signedTxs[0].payload)];
                    case 9:
                        _c.airGapTxs = [
                            _d.sent()
                        ];
                        return [3 /*break*/, 11];
                    case 10:
                        error_1 = _d.sent();
                        console.error('unable to parse token transaction, using ethereum transaction details instead');
                        return [3 /*break*/, 11];
                    case 11:
                        this.fallbackActivated = false;
                        return [3 /*break*/, 13];
                    case 12:
                        e_1 = _d.sent();
                        this.fallbackActivated = true;
                        // tslint:disable-next-line:no-unnecessary-type-assertion
                        this.rawTxData = this.signedTxs[0].payload.transaction;
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    SignedTransactionComponent.prototype.checkIfSaplingTransaction = function (transaction, protocolIdentifier) {
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
                        return [4 /*yield*/, tezosProtocol.getTransactionDetailsFromSigned(transaction)];
                    case 3:
                        txDetails = _a.sent();
                        recipients = txDetails
                            .map(function (details) { return details.to; })
                            .reduce(function (flatten, next) { return flatten.concat(next); }, []);
                        console.log(recipients);
                        return [2 /*return*/, recipients.includes(saplingProtocol.options.config.contractAddress)];
                    case 4: return [2 /*return*/, protocolIdentifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].XTZ_SHIELDED];
                }
            });
        });
    };
    SignedTransactionComponent.prototype.getSaplingProtocol = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.protocolService.getProtocol(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].XTZ_SHIELDED)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    SignedTransactionComponent.ɵfac = function SignedTransactionComponent_Factory(t) { return new (t || SignedTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ProtocolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["SerializerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_token_TokenService__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_5__["SecretsService"])); };
    SignedTransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SignedTransactionComponent, selectors: [["airgap-signed-transaction"]], inputs: { signedTxs: "signedTxs", syncProtocolString: "syncProtocolString" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ion-padding-bottom", "ion-text-center"], ["size", "4", 1, "content--align__center-center"], ["size", "4"], [3, "transaction"], [1, "ion-padding-horizontal", 3, "transaction"], ["size", "2", 1, "ion-margin-top"], ["color", "white", "src", "assets/icons/md-warning.svg", 1, "warning-icon"], ["size", "10"], [1, "text--selectable", "typography--mono", "word-break__all"]], template: function SignedTransactionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SignedTransactionComponent_ng_container_0_Template, 24, 17, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SignedTransactionComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SignedTransactionComponent_ng_container_2_Template, 11, 4, "ng-container", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.airGapTxs && ctx.airGapTxs.length > 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.airGapTxs);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.fallbackActivated);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonCol"], _transaction_warning_transaction_warning_component__WEBPACK_IMPORTED_MODULE_9__["TransactionWarningComponent"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["FromToComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonText"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["AmountConverterPipe"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["FeeConverterPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduZWQtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
    return SignedTransactionComponent;
}());



/***/ }),

/***/ "X4Lx":
/*!*******************************************************************************!*\
  !*** ./src/app/components/secret-option-item/secret-option-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SecretOptionItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretOptionItemComponent", function() { return SecretOptionItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function SecretOptionItemComponent_ion_checkbox_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-checkbox", 7);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.checkboxValue)("disabled", !ctx_r0.enabled);
} }
function SecretOptionItemComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This setting is disabled. Import your secret again to change it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = ["*"];
var SecretOptionItemComponent = /** @class */ (function () {
    function SecretOptionItemComponent() {
        this.enabled = false;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SecretOptionItemComponent.prototype.doAction = function () {
        this.action.emit();
    };
    SecretOptionItemComponent.ɵfac = function SecretOptionItemComponent_Factory(t) { return new (t || SecretOptionItemComponent)(); };
    SecretOptionItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecretOptionItemComponent, selectors: [["airgap-secret-option-item"]], inputs: { enabled: "enabled", active: "active", icon: "icon", checkboxValue: "checkboxValue" }, outputs: { action: "action" }, ngContentSelectors: _c0, decls: 9, vars: 6, consts: [["lines", "none", 1, "ion-no-padding", 3, "disabled", "detail", "click"], ["slot", "start"], [1, "avatar--container", 3, "ngClass"], [3, "src"], ["color", "white", 1, "ion-text-wrap"], ["slot", "end", "class", "ion-no-margin", 3, "ngModel", "disabled", 4, "ngIf"], [4, "ngIf"], ["slot", "end", 1, "ion-no-margin", 3, "ngModel", "disabled"]], template: function SecretOptionItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecretOptionItemComponent_Template_ion_item_click_1_listener() { return ctx.doAction(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-avatar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SecretOptionItemComponent_ion_checkbox_7_Template, 1, 2, "ion-checkbox", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SecretOptionItemComponent_p_8_Template, 2, 0, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.enabled)("detail", ctx.checkboxValue === undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.active ? "background--color__primary" : "background--color__tertiary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icon);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkboxValue !== undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.enabled);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".avatar--container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n.avatar--container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.background--color__primary[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary);\n}\n.background--color__tertiary[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-tertiary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlY3JldC1vcHRpb24taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0FBRUo7QUFDQTtFQUNFLDBDQUFBO0FBRUY7QUFBQTtFQUNFLDJDQUFBO0FBR0YiLCJmaWxlIjoic2VjcmV0LW9wdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhci0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuLmJhY2tncm91bmQtLWNvbG9yX19wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmJhY2tncm91bmQtLWNvbG9yX190ZXJ0aWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG4iXX0= */"] });
    return SecretOptionItemComponent;
}());



/***/ }),

/***/ "di/4":
/*!*****************************************************************!*\
  !*** ./src/app/components/trace-input/trace-input.directive.ts ***!
  \*****************************************************************/
/*! exports provided: TraceInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraceInputDirective", function() { return TraceInputDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



var TraceInputDirective = /** @class */ (function () {
    function TraceInputDirective(elementRef, ngZone, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.mousePos = { x: 0, y: 0 };
        this.lastPos = this.mousePos;
        this.canvas = elementRef.nativeElement;
        var context = this.canvas.getContext('2d');
        if (context) {
            this.context = context;
        }
    }
    TraceInputDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.listen(this.canvas, 'mousedown', function (event) {
            _this.lastPos = _this.getMousePosition(_this.canvas, event);
            _this.mousePos = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.lastPos);
            _this.isDrawing = true;
            _this.startDrawing();
        });
        this.renderer.listen(this.canvas, 'touchstart', function (event) {
            _this.lastPos = _this.getTouchPosition(_this.canvas, event);
            _this.mousePos = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.lastPos);
            _this.isDrawing = true;
            _this.startDrawing();
        });
        this.renderer.listen(this.canvas, 'mouseup', function (event) {
            _this.lastPos = _this.getMousePosition(_this.canvas, event);
            _this.isDrawing = false;
        });
        this.renderer.listen(this.canvas, 'touchend', function (event) {
            _this.lastPos = _this.getTouchPosition(_this.canvas, event);
            _this.isDrawing = false;
        });
        this.renderer.listen(this.canvas, 'mousemove', function (event) {
            _this.mousePos = _this.getMousePosition(_this.canvas, event);
        });
        this.renderer.listen(this.canvas, 'touchmove', function (event) {
            _this.mousePos = _this.getTouchPosition(_this.canvas, event);
        });
    };
    TraceInputDirective.prototype.startDrawing = function () {
        var _this = this;
        if (!this.isDrawing) {
            return;
        }
        this.ngZone.runOutsideAngular(function () {
            requestAnimationFrame(function () {
                _this.renderEntropyDrawing();
            });
        });
    };
    TraceInputDirective.prototype.getMousePosition = function (canvas, event) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    };
    TraceInputDirective.prototype.getTouchPosition = function (canvas, event) {
        var rect = canvas.getBoundingClientRect();
        if (!event.touches[0]) {
            return this.lastPos;
        }
        return {
            x: event.touches[0].clientX - rect.left,
            y: event.touches[0].clientY - rect.top
        };
    };
    TraceInputDirective.prototype.renderEntropyDrawing = function () {
        this.context.strokeStyle = 'rgb(255, 255, 255)';
        this.context.moveTo(this.lastPos.x, this.lastPos.y);
        this.context.lineTo(this.mousePos.x, this.mousePos.y);
        this.lastPos = this.mousePos;
        this.context.stroke();
        this.startDrawing();
    };
    TraceInputDirective.ɵfac = function TraceInputDirective_Factory(t) { return new (t || TraceInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
    TraceInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TraceInputDirective, selectors: [["", "airgapTraceInput", ""]] });
    return TraceInputDirective;
}());



/***/ }),

/***/ "etUy":
/*!***********************************************************************!*\
  !*** ./src/app/components/current-secret/current-secret.component.ts ***!
  \***********************************************************************/
/*! exports provided: CurrentSecretComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentSecretComponent", function() { return CurrentSecretComponent; });
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







function CurrentSecretComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.currentSecret$).label, " ");
} }
function CurrentSecretComponent_ion_select_7_ion_select_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var secret_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", secret_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", secret_r3.label, " ");
} }
function CurrentSecretComponent_ion_select_7_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentSecretComponent_ion_select_7_Template_ion_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CurrentSecretComponent_ion_select_7_ion_select_option_2_Template, 3, 2, "ion-select-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx_r1.currentSecret$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx_r1.secrets$));
} }
var CurrentSecretComponent = /** @class */ (function () {
    function CurrentSecretComponent(secretsService) {
        this.secretsService = secretsService;
        this.secrets$ = this.secretsService.getSecretsObservable();
        this.currentSecret$ = this.secretsService.getActiveSecretObservable();
    }
    CurrentSecretComponent.prototype.onChange = function (newSecret) {
        this.secretsService.setActiveSecret(newSecret);
    };
    CurrentSecretComponent.ɵfac = function CurrentSecretComponent_Factory(t) { return new (t || CurrentSecretComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_0__["SecretsService"])); };
    CurrentSecretComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CurrentSecretComponent, selectors: [["airgap-current-secret"]], decls: 10, vars: 13, consts: [["lines", "none", "button", "true", "detail", "false"], ["slot", "start"], ["slot", "end", 4, "ngIf"], ["slot", "end", "interface", "popover", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["slot", "end"], ["slot", "end", "interface", "popover", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function CurrentSecretComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-text", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CurrentSecretComponent_p_4_Template, 3, 3, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CurrentSecretComponent_ion_select_7_Template, 4, 6, "ion-select", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "current-secret.label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, ctx.secrets$) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, ctx.secrets$).length === 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 9, ctx.secrets$) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 11, ctx.secrets$).length > 1);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], encapsulation: 2 });
    return CurrentSecretComponent;
}());



/***/ }),

/***/ "iGg7":
/*!************************************************!*\
  !*** ./src/app/services/token/TokenService.ts ***!
  \************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService.prototype.getTokenTransferDetailsFromSigned = function (tx, signedTransaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var token, genericErc20, genericRskERC20, ethTransactions, rskTransactions, transactions;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ethTokens"].find(function (token) { return token.contractAddress.toLowerCase() === tx.to[0].toLowerCase(); });
                        if (!token) return [3 /*break*/, 3];
                        genericErc20 = new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["GenericERC20"](new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["EthereumERC20ProtocolOptions"](new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["EthereumProtocolNetwork"](), new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["EthereumERC20ProtocolConfig"](token.symbol, token.name, token.marketSymbol, token.identifier, token.contractAddress, token.decimals)));
                        genericRskERC20 = new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["GenericRskERC20"](new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["RskERC20ProtocolOptions"](new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["RskProtocolNetwork"](), new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["RskERC20ProtocolConfig"](token.symbol, token.name, token.marketSymbol, token.identifier, token.contractAddress, token.decimals)));
                        return [4 /*yield*/, genericErc20.getTransactionDetailsFromSigned(signedTransaction)];
                    case 1:
                        ethTransactions = _a.sent();
                        return [4 /*yield*/, genericRskERC20.getTransactionDetailsFromSigned(signedTransaction)];
                    case 2:
                        rskTransactions = _a.sent();
                        transactions = ethTransactions.concat(rskTransactions);
                        if (transactions.length !== 1) {
                            throw Error('TokenTransferDetails returned more than 1 transaction!');
                        }
                        return [2 /*return*/, transactions[0]];
                    case 3: return [2 /*return*/, tx];
                }
            });
        });
    };
    TokenService.prototype.getTokenTransferDetails = function (tx, unsignedTransaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var token, genericErc20, genericRskERC20, ethTransactions, rskTransactions, transactions;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ethTokens"].find(function (token) { return token.contractAddress.toLowerCase() === tx.to[0].toLowerCase(); });
                        if (!token) return [3 /*break*/, 3];
                        genericErc20 = new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["GenericERC20"](new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["EthereumERC20ProtocolOptions"](new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["EthereumProtocolNetwork"](), new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["EthereumERC20ProtocolConfig"](token.symbol, token.name, token.marketSymbol, token.identifier, token.contractAddress, token.decimals)));
                        genericRskERC20 = new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["GenericRskERC20"](new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["RskERC20ProtocolOptions"](new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["RskProtocolNetwork"](), new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["RskERC20ProtocolConfig"](token.symbol, token.name, token.marketSymbol, token.identifier, token.contractAddress, token.decimals)));
                        return [4 /*yield*/, genericErc20.getTransactionDetails(unsignedTransaction)];
                    case 1:
                        ethTransactions = _a.sent();
                        return [4 /*yield*/, genericRskERC20.getTransactionDetails(unsignedTransaction)];
                    case 2:
                        rskTransactions = _a.sent();
                        transactions = ethTransactions.concat(rskTransactions);
                        if (transactions.length !== 1) {
                            throw Error('TokenTransferDetails returned more than 1 transaction!');
                        }
                        return [2 /*return*/, transactions[0]];
                    case 3: return [2 /*return*/, tx];
                }
            });
        });
    };
    TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(); };
    TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
    return TokenService;
}());



/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _wallet_status_wallet_status_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet-status/wallet-status.pipe */ "IFyw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PipesModule });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[]] });
    return PipesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_wallet_status_wallet_status_pipe__WEBPACK_IMPORTED_MODULE_0__["WalletStatusPipe"]], exports: [_wallet_status_wallet_status_pipe__WEBPACK_IMPORTED_MODULE_0__["WalletStatusPipe"]] }); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _current_secret_current_secret_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./current-secret/current-secret.component */ "etUy");
/* harmony import */ var _entropy_progress_entropy_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entropy-progress/entropy-progress.component */ "3gWE");
/* harmony import */ var _grid_input_grid_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grid-input/grid-input.component */ "kr6l");
/* harmony import */ var _message_sign_request_message_sign_request_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message-sign-request/message-sign-request.component */ "F2cf");
/* harmony import */ var _message_sign_response_message_sign_response_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message-sign-response/message-sign-response.component */ "Eyg1");
/* harmony import */ var _progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./progress-footer/progress-footer.component */ "xjY1");
/* harmony import */ var _secret_item_secret_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./secret-item/secret-item.component */ "NXa7");
/* harmony import */ var _secret_option_item_secret_option_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./secret-option-item/secret-option-item.component */ "X4Lx");
/* harmony import */ var _signed_transaction_signed_transaction_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signed-transaction/signed-transaction.component */ "RLm3");
/* harmony import */ var _touch_entropy_touch_entropy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./touch-entropy/touch-entropy.component */ "soZT");
/* harmony import */ var _trace_input_trace_input_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./trace-input/trace-input.directive */ "di/4");
/* harmony import */ var _transaction_warning_transaction_warning_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./transaction-warning/transaction-warning.component */ "DrqP");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./transaction/transaction.component */ "BYgT");
/* harmony import */ var _verify_key_verify_key_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./verify-key/verify-key.component */ "ut9t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");






















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: ComponentsModule });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]]] });
    return ComponentsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_current_secret_current_secret_component__WEBPACK_IMPORTED_MODULE_7__["CurrentSecretComponent"],
        _entropy_progress_entropy_progress_component__WEBPACK_IMPORTED_MODULE_8__["EntropyProgressComponent"],
        _progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_12__["ProgressFooterComponent"],
        _secret_item_secret_item_component__WEBPACK_IMPORTED_MODULE_13__["SecretItemComponent"],
        _signed_transaction_signed_transaction_component__WEBPACK_IMPORTED_MODULE_15__["SignedTransactionComponent"],
        _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_19__["TransactionComponent"],
        _transaction_warning_transaction_warning_component__WEBPACK_IMPORTED_MODULE_18__["TransactionWarningComponent"],
        _touch_entropy_touch_entropy_component__WEBPACK_IMPORTED_MODULE_16__["TouchEntropyComponent"],
        _trace_input_trace_input_directive__WEBPACK_IMPORTED_MODULE_17__["TraceInputDirective"],
        _verify_key_verify_key_component__WEBPACK_IMPORTED_MODULE_20__["VerifyKeyComponent"],
        _message_sign_request_message_sign_request_component__WEBPACK_IMPORTED_MODULE_10__["MessageSignRequestComponent"],
        _message_sign_response_message_sign_response_component__WEBPACK_IMPORTED_MODULE_11__["MessageSignResponseComponent"],
        _grid_input_grid_input_component__WEBPACK_IMPORTED_MODULE_9__["GridInputComponent"],
        _secret_option_item_secret_option_item_component__WEBPACK_IMPORTED_MODULE_14__["SecretOptionItemComponent"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]], exports: [_current_secret_current_secret_component__WEBPACK_IMPORTED_MODULE_7__["CurrentSecretComponent"],
        _entropy_progress_entropy_progress_component__WEBPACK_IMPORTED_MODULE_8__["EntropyProgressComponent"],
        _progress_footer_progress_footer_component__WEBPACK_IMPORTED_MODULE_12__["ProgressFooterComponent"],
        _secret_item_secret_item_component__WEBPACK_IMPORTED_MODULE_13__["SecretItemComponent"],
        _signed_transaction_signed_transaction_component__WEBPACK_IMPORTED_MODULE_15__["SignedTransactionComponent"],
        _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_19__["TransactionComponent"],
        _transaction_warning_transaction_warning_component__WEBPACK_IMPORTED_MODULE_18__["TransactionWarningComponent"],
        _touch_entropy_touch_entropy_component__WEBPACK_IMPORTED_MODULE_16__["TouchEntropyComponent"],
        _trace_input_trace_input_directive__WEBPACK_IMPORTED_MODULE_17__["TraceInputDirective"],
        _verify_key_verify_key_component__WEBPACK_IMPORTED_MODULE_20__["VerifyKeyComponent"],
        _message_sign_request_message_sign_request_component__WEBPACK_IMPORTED_MODULE_10__["MessageSignRequestComponent"],
        _message_sign_response_message_sign_response_component__WEBPACK_IMPORTED_MODULE_11__["MessageSignResponseComponent"],
        _grid_input_grid_input_component__WEBPACK_IMPORTED_MODULE_9__["GridInputComponent"],
        _secret_option_item_secret_option_item_component__WEBPACK_IMPORTED_MODULE_14__["SecretOptionItemComponent"]] }); })();


/***/ }),

/***/ "kr6l":
/*!***************************************************************!*\
  !*** ./src/app/components/grid-input/grid-input.component.ts ***!
  \***************************************************************/
/*! exports provided: GridInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridInputComponent", function() { return GridInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




var _c0 = function (a0) { return { active: a0 }; };
var _c1 = function (a0) { return { width: a0 }; };
function GridInputComponent_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridInputComponent_tr_1_td_1_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var col_r3 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.setCaret(col_r3.position); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r3 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, col_r3.position === ctx_r2.caretPosition))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, ctx_r2.calculatedWidth));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](col_r3.position + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", col_r3.value, " ");
} }
function GridInputComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GridInputComponent_tr_1_td_1_Template, 6, 8, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r1);
} }
var GridInputComponent = /** @class */ (function () {
    function GridInputComponent() {
        this.caretPosition = 0;
        this.minLength = 0;
        this.entropy = '';
        this.gridWidth = 5;
        this.defaultHeight = 4;
        this.calculatedWidth = '20%';
        this.rowAddedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.entropyChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GridInputComponent.prototype.ngOnInit = function () {
        this.createGrid();
        this.calculatedWidth = (100 / this.gridWidth).toString() + '%';
    };
    GridInputComponent.prototype.add = function (char) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var str, nextPosition;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.caretPosition >= this.entropy.length) {
                    this.entropy += char;
                }
                else {
                    str = this.entropy;
                    this.entropy = str.substring(0, this.caretPosition + 1) + char + str.substring(this.caretPosition + 1);
                }
                nextPosition = this.caretPosition + 1;
                this.setCaret(nextPosition);
                this.calculateGrid();
                return [2 /*return*/];
            });
        });
    };
    GridInputComponent.prototype.remove = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var len, str, nextPosition;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.caretPosition >= this.entropy.length) {
                    len = this.entropy.length;
                    this.entropy = this.entropy.substring(0, len - 1);
                }
                else {
                    str = this.entropy;
                    this.entropy = str.substring(0, this.caretPosition) + str.substring(this.caretPosition + 1);
                }
                nextPosition = this.caretPosition - 1;
                this.setCaret(nextPosition);
                this.calculateGrid();
                return [2 /*return*/];
            });
        });
    };
    GridInputComponent.prototype.setCaret = function (position) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.caretPosition =
                    position >= this.maxLength ? this.maxLength - 1 : position > this.entropy.length ? this.entropy.length : position < 0 ? 0 : position;
                return [2 /*return*/];
            });
        });
    };
    GridInputComponent.prototype.calculateGrid = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var gridWidth, maxLength, gridHeight, i, x, y, newValue;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                gridWidth = this.gridWidth;
                maxLength = Math.min(this.entropy.length + 1, (_a = this.maxLength) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER);
                gridHeight = Math.ceil(maxLength / gridWidth);
                if (gridHeight > this.grid.length) {
                    this.createGrid(gridHeight);
                    this.rowAddedEvent.emit();
                }
                else {
                    i = 0;
                    for (x = 0; x < this.grid.length; x++) {
                        for (y = 0; y < this.grid[x].length; y++) {
                            newValue = this.entropy[i];
                            if (this.grid[x][y].value !== newValue) {
                                this.grid[x][y].value = newValue;
                            }
                            i++;
                        }
                    }
                }
                this.entropyChanged.emit(this.entropy);
                return [2 /*return*/];
            });
        });
    };
    GridInputComponent.prototype.createGrid = function (gridHeight) {
        var _this = this;
        if (gridHeight === void 0) { gridHeight = 0; }
        this.grid = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(new Array(Math.max(this.defaultHeight, gridHeight))).map(function (_, i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(new Array(_this.gridWidth)).map(function (_, y) { return ({ position: i * _this.gridWidth + y, value: _this.entropy[i * _this.gridWidth + y] }); });
        });
    };
    GridInputComponent.ɵfac = function GridInputComponent_Factory(t) { return new (t || GridInputComponent)(); };
    GridInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GridInputComponent, selectors: [["airgap-grid-input"]], inputs: { minLength: "minLength", maxLength: "maxLength", gridWidth: "gridWidth", defaultHeight: "defaultHeight" }, outputs: { rowAddedEvent: "rowAddedEvent", entropyChanged: "entropyChanged" }, decls: 2, vars: 1, consts: [["width", "100%"], [4, "ngFor", "ngForOf"], [3, "ngClass", "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "ngStyle", "click"]], template: function GridInputComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GridInputComponent_tr_1_Template, 2, 1, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.grid);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".active[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary);\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  height: 6vh;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dyaWQtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiZ3JpZC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG50ZCB7XG4gIGhlaWdodDogNnZoO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"] });
    return GridInputComponent;
}());



/***/ }),

/***/ "soZT":
/*!*********************************************************************!*\
  !*** ./src/app/components/touch-entropy/touch-entropy.component.ts ***!
  \*********************************************************************/
/*! exports provided: TouchEntropyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchEntropyComponent", function() { return TouchEntropyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/workers/entropyCalculatorWorker */ "PdrP");
/* harmony import */ var _services_entropy_IEntropyGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/entropy/IEntropyGenerator */ "DT0N");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _trace_input_trace_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trace-input/trace-input.directive */ "di/4");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








var _c0 = ["canvas"];
var blobURL = window.URL.createObjectURL(new Blob([_assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_2__["default"]]));
var entropyCalculatorWorker = new Worker(blobURL);
var TouchEntropyComponent = /** @class */ (function () {
    function TouchEntropyComponent(renderer) {
        var _this = this;
        this.renderer = renderer;
        this.cursorSize = 2;
        this.randomFactorInPercent = 10;
        this.cursorColor = 'white';
        this.collectedEntropyPercentage = 0;
        this.isDrawing = false;
        this.entropyObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            entropyCalculatorWorker.onmessage = function (event) {
                _this.collectedEntropyPercentage += event.data.entropyMeasure;
                observer.next({ entropyHex: event.data.entropyHex });
            };
            _this.handler = function (numbers) {
                var buffer1 = _this.arrayBufferFromIntArray(numbers);
                entropyCalculatorWorker.postMessage({ entropyBuffer: buffer1 }, [buffer1]);
            };
        });
    }
    TouchEntropyComponent.prototype.ngAfterViewInit = function () {
        this.canvas = this.canvasRef.nativeElement;
        this.initCanvas();
    };
    TouchEntropyComponent.prototype.initCanvas = function () {
        var _this = this;
        if (!this.isCanvasReady()) {
            setTimeout(function () {
                _this.initCanvas();
            }, 50);
            return;
        }
        this.canvas.setAttribute('height', this.canvas.parentElement.getBoundingClientRect().height + "px"); // We know parentElement needs to be defined here because we check it in the ready function
        this.canvas.setAttribute('width', this.canvas.parentElement.getBoundingClientRect().width + "px"); // We know parentElement needs to be defined here because we check it in the ready function
        var context = this.canvas.getContext('2d');
        if (context) {
            this.context = context;
        }
        this.context.fillStyle = this.cursorColor;
        this.rectangle = this.canvas.getBoundingClientRect();
    };
    TouchEntropyComponent.prototype.isCanvasReady = function () {
        if (this.canvas.parentElement) {
            return this.canvas.parentElement.getBoundingClientRect().height > 0;
        }
        else {
            return false;
        }
    };
    TouchEntropyComponent.prototype.start = function () {
        var _this = this;
        this.collectedEntropyPercentage = 0;
        return new Promise(function (resolve) {
            _this.renderer.listen(_this.canvas, 'mousedown', function () {
                _this.isDrawing = true;
            });
            _this.renderer.listen(_this.canvas, 'touchstart', function () {
                _this.isDrawing = true;
            });
            _this.renderer.listen(_this.canvas, 'mouseup', function () {
                _this.isDrawing = false;
            });
            _this.renderer.listen(_this.canvas, 'touchend', function () {
                _this.isDrawing = false;
            });
            _this.renderer.listen(_this.canvas, 'mousemove', function (event) {
                if (_this.isDrawing) {
                    _this.collectEntropy(event.clientX, event.clientY);
                }
            });
            _this.renderer.listen(_this.canvas, 'touchmove', function (event) {
                if (_this.isDrawing) {
                    _this.collectEntropy(event.touches[0].clientX, event.touches[0].clientY);
                }
            });
            resolve();
        });
    };
    TouchEntropyComponent.prototype.stop = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.isDrawing = false;
            resolve();
        });
    };
    TouchEntropyComponent.prototype.collectEntropy = function (x, y) {
        var currX = Math.ceil(((x - this.rectangle.left) / (this.rectangle.right - this.rectangle.left)) * this.canvas.width);
        var currY = Math.ceil(((y - this.rectangle.top) / (this.rectangle.bottom - this.rectangle.top)) * this.canvas.height) - 56;
        if (this.getRandomIntInclusive(0, 100) <= this.randomFactorInPercent) {
            var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart
                ? window.performance.now() + window.performance.timing.navigationStart
                : Date.now();
            if (this.handler) {
                this.handler([currX, currY, timeStampInMs]);
            }
        }
    };
    TouchEntropyComponent.prototype.getEntropyUpdateObservable = function () {
        return this.entropyObservable;
    };
    TouchEntropyComponent.prototype.getRandomIntInclusive = function (min, max) {
        var randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        var randomNumber = randomBuffer[0] / (0xffffffff + 1);
        var roundedMin = Math.ceil(min);
        var roundedMax = Math.floor(max);
        return Math.floor(randomNumber * (roundedMax - roundedMin + 1)) + roundedMin;
    };
    TouchEntropyComponent.prototype.arrayBufferFromIntArray = function (array) {
        var buffer = new ArrayBuffer(array.length * 2);
        var bufView = new Uint8Array(buffer);
        for (var i = 0; i < array.length; i++) {
            bufView[i] = Math.abs(array[i] * 10000);
        }
        return buffer;
    };
    TouchEntropyComponent.prototype.getCollectedEntropyPercentage = function () {
        return this.collectedEntropyPercentage / 10;
    };
    TouchEntropyComponent.ɵfac = function TouchEntropyComponent_Factory(t) { return new (t || TouchEntropyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    TouchEntropyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TouchEntropyComponent, selectors: [["airgap-touch-entropy"]], viewQuery: function TouchEntropyComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
        } }, inputs: { cursorSize: "cursorSize", randomFactorInPercent: "randomFactorInPercent", cursorColor: "cursorColor" }, decls: 6, vars: 3, consts: [[1, "ion-align-items-center", "ion-justify-content-center", "touch-entropy__container"], ["airgapTraceInput", ""], ["canvas", ""]], template: function TouchEntropyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "touch-entropy.text"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _trace_input_trace_input_directive__WEBPACK_IMPORTED_MODULE_5__["TraceInputDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".touch-entropy__container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 25vh;\n}\n.touch-entropy__container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 1px solid;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RvdWNoLWVudHJvcHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJ0b3VjaC1lbnRyb3B5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvdWNoLWVudHJvcHlfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNXZoO1xuICBjYW52YXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG59XG4iXX0= */"] });
    return TouchEntropyComponent;
}());



/***/ }),

/***/ "ut9t":
/*!***************************************************************!*\
  !*** ./src/app/components/verify-key/verify-key.component.ts ***!
  \***************************************************************/
/*! exports provided: VerifyKeyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyKeyComponent", function() { return VerifyKeyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bip39 */ "KckP");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-sha3 */ "HFX+");
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_sha3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







function VerifyKeyComponent_ng_container_3_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyKeyComponent_ng_container_3_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.selectWord(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("size__xs", ctx_r6.splittedSecret.length > 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r6.selectedWordIndex === i_r5 ? "primary" : "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.currentWords[i_r5], " ");
} }
function VerifyKeyComponent_ng_container_3_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyKeyComponent_ng_container_3_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.selectEmptySpot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("size__xs", ctx_r7.splittedSecret.length > 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", i_r5 === ctx_r7.emptySpot(ctx_r7.currentWords) ? "primary" : "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r5 + 1, " ");
} }
function VerifyKeyComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerifyKeyComponent_ng_container_3_ion_button_1_Template, 2, 4, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerifyKeyComponent_ng_container_3_ion_button_2_Template, 2, 4, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var i_r5 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentWords[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.currentWords[i_r5]);
} }
function VerifyKeyComponent_ion_col_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "verify-key.incorrect_text"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function VerifyKeyComponent_ion_col_7_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyKeyComponent_ion_col_7_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.continue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "verify-key.success_text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "verify-key.continue_label"), " ");
} }
function VerifyKeyComponent_ion_col_8_ion_row_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyKeyComponent_ion_col_8_ion_row_1_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var word_r18 = ctx.$implicit; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.useWord(word_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var word_r18 = ctx.$implicit;
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r17.isSelectedWord(word_r18) ? "primary" : "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", word_r18, " ");
} }
function VerifyKeyComponent_ion_col_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerifyKeyComponent_ion_col_8_ion_row_1_Template, 4, 2, "ion-row", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.promptedWords);
} }
var ADDITIONAL_WORDS = 2;
var VerifyKeyComponent = /** @class */ (function () {
    function VerifyKeyComponent() {
        this.onContinue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isCompleted = false;
        this.splittedSecret = [];
        this.currentWords = [];
        this.promptedWords = [];
        this.selectedWordIndex = null;
    }
    VerifyKeyComponent.prototype.ngOnInit = function () {
        this.splittedSecret = this.secret.toLowerCase().split(' ');
        this.reset();
    };
    VerifyKeyComponent.prototype.continue = function () {
        this.onContinue.emit();
    };
    VerifyKeyComponent.prototype.promptNextWord = function () {
        var _this = this;
        this.promptedWords = [];
        var correctWord = this.splittedSecret[this.emptySpot(this.currentWords)];
        this.promptedWords.push(correctWord);
        var wordList = bip39__WEBPACK_IMPORTED_MODULE_1__["wordlists"].EN;
        for (var i = 0; i < ADDITIONAL_WORDS; i++) {
            var filteredList = wordList.filter(function (originalWord) { return !_this.splittedSecret.find(function (word) { return word === originalWord; }); });
            var hashedWord = Object(js_sha3__WEBPACK_IMPORTED_MODULE_2__["sha3_256"])(correctWord);
            for (var hashRuns = 0; hashRuns <= i; hashRuns++) {
                hashedWord = Object(js_sha3__WEBPACK_IMPORTED_MODULE_2__["sha3_256"])(hashedWord);
            }
            var additionalWord = filteredList[this.stringToIntHash(hashedWord, 0, filteredList.length)];
            this.promptedWords.push(additionalWord);
        }
        this.promptedWords = this.shuffle(this.promptedWords);
    };
    VerifyKeyComponent.prototype.shuffle = function (a) {
        var counter = a.length;
        while (counter > 0) {
            var index = Math.floor(Math.random() * counter);
            counter--;
            var temp = a[counter];
            a[counter] = a[index];
            a[index] = temp;
        }
        return a;
    };
    VerifyKeyComponent.prototype.stringToIntHash = function (str, lowerbound, upperbound) {
        var result = 0;
        for (var i = 0; i < str.length; i++) {
            result = result + str.charCodeAt(i);
        }
        return (result % (upperbound - lowerbound)) + lowerbound;
    };
    VerifyKeyComponent.prototype.isSelectedWord = function (word) {
        if (this.selectedWordIndex !== null) {
            return this.currentWords[this.selectedWordIndex] === word;
        }
        return false;
    };
    VerifyKeyComponent.prototype.selectEmptySpot = function () {
        this.selectedWordIndex = null;
        this.promptNextWord();
    };
    VerifyKeyComponent.prototype.useWord = function (word) {
        var index = this.emptySpot(this.currentWords);
        // unselect any selected words
        this.selectedWordIndex = null;
        this.currentWords[index] = word;
        // prompt next word
        if (!this.isFull() && index < this.splittedSecret.length - 1) {
            this.promptNextWord();
            return;
        }
        if (this.isFull()) {
            // if all words are placed, check for correctness, else next
            this.promptedWords = [];
            this.setCompletedState(this.isCorrect());
        }
    };
    VerifyKeyComponent.prototype.setCompletedState = function (state) {
        this.isCompleted = state;
        this.onComplete.emit(state);
    };
    VerifyKeyComponent.prototype.emptySpot = function (array) {
        if (this.selectedWordIndex !== null) {
            return this.selectedWordIndex;
        }
        return array.findIndex(function (word) { return word === null; });
    };
    VerifyKeyComponent.prototype.selectWord = function (index) {
        this.selectedWordIndex = index;
        this.promptNextWord();
    };
    VerifyKeyComponent.prototype.reset = function () {
        this.selectedWordIndex = null;
        this.currentWords = Array(this.splittedSecret.length).fill(null);
        this.promptNextWord();
    };
    VerifyKeyComponent.prototype.isFull = function () {
        return this.currentWords.filter(function (word) { return word !== null; }).length === this.splittedSecret.length;
    };
    VerifyKeyComponent.prototype.isCorrect = function () {
        return (this.currentWords
            .map(function (word) { return (word ? word : '-'); })
            .join(' ')
            .trim() === this.secret.trim());
    };
    VerifyKeyComponent.ɵfac = function VerifyKeyComponent_Factory(t) { return new (t || VerifyKeyComponent)(); };
    VerifyKeyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerifyKeyComponent, selectors: [["airgap-verify-key"]], inputs: { secret: "secret" }, outputs: { onContinue: "onContinue", onComplete: "onComplete" }, decls: 9, vars: 4, consts: [[1, "secret--container-60", "ion-align-items-center"], [1, "secret--container__inner", "ion-justify-content-center"], [4, "ngFor", "ngForOf"], [1, "secret--container-40", "ion-align-items-center"], ["id", "error", "class", "ion-padding", 4, "ngIf"], ["id", "message", "class", "ion-padding-top ion-padding-horizontal", 4, "ngIf"], ["id", "wordSelector", "class", "ion-padding-top", 4, "ngIf"], ["shape", "round", "size", "small", "class", "typography--mono", 3, "size__xs", "color", "click", 4, "ngIf"], ["shape", "round", "fill", "outline", "size", "small", "class", "typography--mono", "class", "word-placeholder", 3, "size__xs", "color", "click", 4, "ngIf"], ["shape", "round", "size", "small", 1, "typography--mono", 3, "color", "click"], ["shape", "round", "fill", "outline", "size", "small", 1, "word-placeholder", 3, "color", "click"], ["id", "error", 1, "ion-padding"], [3, "innerHTML"], ["id", "message", 1, "ion-padding-top", "ion-padding-horizontal"], [1, "ion-padding-bottom"], ["color", "primary", "expand", "block", "shape", "round", 3, "click"], ["id", "wordSelector", 1, "ion-padding-top"], ["class", "ion-padding-horizontal", 4, "ngFor", "ngForOf"], [1, "ion-padding-horizontal"], ["expand", "block", "shape", "round", 1, "typography--mono", 3, "color", "click"]], template: function VerifyKeyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VerifyKeyComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-row", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VerifyKeyComponent_ion_col_6_Template, 3, 3, "ion-col", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VerifyKeyComponent_ion_col_7_Template, 7, 6, "ion-col", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VerifyKeyComponent_ion_col_8_Template, 2, 1, "ion-col", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.splittedSecret);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCompleted && !ctx.isCorrect() && ctx.promptedWords.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCompleted && ctx.isCorrect() && ctx.promptedWords.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.promptedWords.length > 0);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".secret--container-60[_ngcontent-%COMP%] {\n  height: calc(60% - 36px);\n}\n\n.secret--container-40[_ngcontent-%COMP%] {\n  height: calc(40%- 36px);\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 2px dashed var(--ion-color-primary);\n  border-style: none none dashed;\n  margin: 8px 0;\n}\n\n.word-placeholder[_ngcontent-%COMP%] {\n  min-width: 48px;\n}\n\n.size__xs[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.typography--mono[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZlcmlmeS1rZXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQUNGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLDJDQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSx5QkFBQTtBQU1GIiwiZmlsZSI6InZlcmlmeS1rZXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjcmV0LS1jb250YWluZXItNjAge1xuICBoZWlnaHQ6IGNhbGMoNjAlIC0gMzZweCk7XG59XG4uc2VjcmV0LS1jb250YWluZXItNDAge1xuICBoZWlnaHQ6IGNhbGMoNDAlLSAzNnB4KTtcbn1cbmhyIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgZGFzaGVkO1xuICBtYXJnaW46IDhweCAwO1xufVxuLndvcmQtcGxhY2Vob2xkZXIge1xuICBtaW4td2lkdGg6IDQ4cHg7XG59XG4uc2l6ZV9feHMge1xuICBmb250LXNpemU6IDExcHg7XG59XG4udHlwb2dyYXBoeS0tbW9ubyB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG4iXX0= */"] });
    return VerifyKeyComponent;
}());



/***/ }),

/***/ "xjY1":
/*!*************************************************************************!*\
  !*** ./src/app/components/progress-footer/progress-footer.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProgressFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressFooterComponent", function() { return ProgressFooterComponent; });
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ProgressFooterComponent_ion_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 8);
} if (rf & 2) {
    var n_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.progress === n_r1 ? "tertiary" : "light");
} }
var ProgressFooterComponent = /** @class */ (function () {
    function ProgressFooterComponent(navigationSerivce) {
        var _this = this;
        this.navigationSerivce = navigationSerivce;
        this.progress = 0;
        this.maxProgress = 1;
        this.rightEnabled = true;
        this.rightLabel = 'Next';
        // make sure to bind the context / method.bind(this)
        this.leftAction = function () {
            _this.navigationSerivce.back();
        };
        this.leftEnabled = true;
        this.leftLabel = 'Back';
        this.progressArray = [];
    }
    ProgressFooterComponent.prototype.ngOnInit = function () {
        this.progressArray = new Array(this.maxProgress).fill(0).map(function (_value, index) { return index; });
        if (!this.rightAction) {
            throw new Error('ProgressFooterComponent: No "rightAction" method passed');
        }
    };
    ProgressFooterComponent.ɵfac = function ProgressFooterComponent_Factory(t) { return new (t || ProgressFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_0__["NavigationService"])); };
    ProgressFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProgressFooterComponent, selectors: [["airgap-progress-footer"]], inputs: { progress: "progress", maxProgress: "maxProgress", rightAction: "rightAction", rightEnabled: "rightEnabled", rightLabel: "rightLabel", leftAction: "leftAction", leftEnabled: "leftEnabled", leftLabel: "leftLabel" }, decls: 13, vars: 5, consts: [["color", "primary", 1, "ion-no-padding"], ["size", "3", 1, "ion-no-padding"], ["color", "light", "fill", "clear", 3, "disabled", "click"], ["name", "md-arrow-dropleft"], ["size", "6", 1, "ion-no-padding"], [1, "full--height", "ion-justify-content-center", "ion-align-items-center"], ["name", "md-radio-button-on", 3, "color", 4, "ngFor", "ngForOf"], ["name", "md-arrow-dropright"], ["name", "md-radio-button-on", 3, "color"]], template: function ProgressFooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProgressFooterComponent_Template_ion_button_click_3_listener() { return ctx.leftAction(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProgressFooterComponent_ion_icon_8_Template, 1, 1, "ion-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-col", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProgressFooterComponent_Template_ion_button_click_10_listener() { return ctx.rightAction(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.leftEnabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.leftLabel, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.progressArray);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.rightEnabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.rightLabel, " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".full--height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2dyZXNzLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJwcm9ncmVzcy1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC0taGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });
    return ProgressFooterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6.js.map