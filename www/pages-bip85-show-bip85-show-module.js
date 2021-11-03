(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bip85-show-bip85-show-module"],{

/***/ "8ZmZ":
/*!**************************************!*\
  !*** ./src/app/models/BIP85Child.ts ***!
  \**************************************/
/*! exports provided: BIP85Child */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BIP85Child", function() { return BIP85Child; });
/* harmony import */ var wif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wif */ "pQ88");
/* harmony import */ var wif__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wif__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bip32__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bip32 */ "sHUq");
/* harmony import */ var bip32__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bip32__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bip39 */ "KckP");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BIP85__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BIP85 */ "xE8c");




var BIP85Child = /** @class */ (function () {
    function BIP85Child(entropy, type) {
        this.entropy = entropy;
        this.type = type;
    }
    BIP85Child.prototype.toEntropy = function () {
        if (this.type === _BIP85__WEBPACK_IMPORTED_MODULE_3__["BIP85_APPLICATIONS"].XPRV) {
            return this.entropy.slice(64, 128);
        }
        else {
            return this.entropy;
        }
    };
    BIP85Child.prototype.toMnemonic = function () {
        if (this.type !== _BIP85__WEBPACK_IMPORTED_MODULE_3__["BIP85_APPLICATIONS"].BIP39) {
            throw new Error('BIP85Child type is not BIP39');
        }
        return Object(bip39__WEBPACK_IMPORTED_MODULE_2__["entropyToMnemonic"])(this.entropy);
    };
    BIP85Child.prototype.toWIF = function () {
        if (this.type !== _BIP85__WEBPACK_IMPORTED_MODULE_3__["BIP85_APPLICATIONS"].WIF) {
            throw new Error('BIP85Child type is not WIF');
        }
        var buf = Buffer.from(this.entropy, 'hex');
        return Object(wif__WEBPACK_IMPORTED_MODULE_0__["encode"])(128, buf, true);
    };
    BIP85Child.prototype.toXPRV = function () {
        if (this.type !== _BIP85__WEBPACK_IMPORTED_MODULE_3__["BIP85_APPLICATIONS"].XPRV) {
            throw new Error('BIP85Child type is not XPRV');
        }
        var chainCode = Buffer.from(this.entropy.slice(0, 64), 'hex');
        var privateKey = Buffer.from(this.entropy.slice(64, 128), 'hex');
        return Object(bip32__WEBPACK_IMPORTED_MODULE_1__["fromPrivateKey"])(privateKey, chainCode).toBase58();
    };
    return BIP85Child;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "HDXh").Buffer))

/***/ }),

/***/ "Cmri":
/*!***************************************************************!*\
  !*** ./src/app/pages/bip85-show/bip85-show-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: Bip85ShowPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bip85ShowPageRoutingModule", function() { return Bip85ShowPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bip85_show_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bip85-show.page */ "Leae");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var routes = [
    {
        path: '',
        component: _bip85_show_page__WEBPACK_IMPORTED_MODULE_1__["Bip85ShowPage"]
    }
];
var Bip85ShowPageRoutingModule = /** @class */ (function () {
    function Bip85ShowPageRoutingModule() {
    }
    Bip85ShowPageRoutingModule.ɵfac = function Bip85ShowPageRoutingModule_Factory(t) { return new (t || Bip85ShowPageRoutingModule)(); };
    Bip85ShowPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: Bip85ShowPageRoutingModule });
    Bip85ShowPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return Bip85ShowPageRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Bip85ShowPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Leae":
/*!*****************************************************!*\
  !*** ./src/app/pages/bip85-show/bip85-show.page.ts ***!
  \*****************************************************/
/*! exports provided: Bip85ShowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bip85ShowPage", function() { return Bip85ShowPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_models_BIP39Signer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/BIP39Signer */ "yGLx");
/* harmony import */ var src_app_models_BIP85__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/BIP85 */ "xE8c");
/* harmony import */ var src_app_models_secret__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/secret */ "C2ta");
/* harmony import */ var src_app_services_device_device_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/device/device.service */ "2w9O");
/* harmony import */ var src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/error-handler/error-handler.service */ "626a");
/* harmony import */ var src_app_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/navigation/navigation.service */ "r+JB");
/* harmony import */ var src_app_services_secure_storage_secure_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/secure-storage/secure-storage.service */ "iV4W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














var Bip85ShowPage = /** @class */ (function () {
    function Bip85ShowPage(deviceService, navigationService, secureStorageService) {
        this.deviceService = deviceService;
        this.navigationService = navigationService;
        this.secureStorageService = secureStorageService;
        this.bip39Passphrase = '';
        if (this.navigationService.getState()) {
            this.secret = this.navigationService.getState().secret;
            this.mnemonicLength = this.navigationService.getState().mnemonicLength;
            this.index = this.navigationService.getState().index;
            this.bip39Passphrase = this.navigationService.getState().bip39Passphrase;
            this.generateChildMnemonic(this.secret, this.mnemonicLength, this.index);
        }
    }
    Bip85ShowPage.prototype.ionViewDidEnter = function () {
        this.deviceService.enableScreenshotProtection({ routeBack: 'tab-settings' });
    };
    Bip85ShowPage.prototype.ionViewWillLeave = function () {
        this.deviceService.disableScreenshotProtection();
    };
    Bip85ShowPage.prototype.goToSecretSetupPage = function () {
        var signer = new src_app_models_BIP39Signer__WEBPACK_IMPORTED_MODULE_1__["BIPSigner"]();
        var secret = new src_app_models_secret__WEBPACK_IMPORTED_MODULE_3__["MnemonicSecret"](signer.mnemonicToEntropy(src_app_models_BIP39Signer__WEBPACK_IMPORTED_MODULE_1__["BIPSigner"].prepareMnemonic(this.childMnemonic)));
        this.navigationService
            .routeWithState('secret-add', { secret: new src_app_models_secret__WEBPACK_IMPORTED_MODULE_3__["MnemonicSecret"](secret.secretHex, "BIP85 child of \"" + this.secret.label + "\"") })
            .catch(Object(src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["handleErrorLocal"])(src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorCategory"].IONIC_NAVIGATION));
    };
    Bip85ShowPage.prototype.generateChildMnemonic = function (secret, length, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var secureStorage, secretHex, masterSeed, childEntropy, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secureStorageService.get(secret.id, secret.isParanoia)];
                    case 1:
                        secureStorage = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, secureStorage.getItem(secret.id).then(function (result) { return result.value; })];
                    case 3:
                        secretHex = _a.sent();
                        masterSeed = src_app_models_BIP85__WEBPACK_IMPORTED_MODULE_2__["BIP85"].fromEntropy(secretHex, this.bip39Passphrase);
                        childEntropy = masterSeed.deriveBIP39(0, length, index);
                        this.childMnemonic = childEntropy.toMnemonic();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Bip85ShowPage.ɵfac = function Bip85ShowPage_Factory(t) { return new (t || Bip85ShowPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_device_device_service__WEBPACK_IMPORTED_MODULE_4__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_secure_storage_secure_storage_service__WEBPACK_IMPORTED_MODULE_7__["SecureStorageService"])); };
    Bip85ShowPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: Bip85ShowPage, selectors: [["airgap-bip85-show"]], decls: 27, vars: 18, consts: [[1, "ion-no-border"], ["slot", "start"], [1, "ion-padding"], [1, "ion-padding-bottom"], ["_ngcontent-luc-c184", "", 1, "font--weight__med"], [1, "typography--mono"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["shape", "round", "color", "primary", 3, "click"]], template: function Bip85ShowPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-back-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "h6", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "ion-fab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function Bip85ShowPage_Template_ion_button_click_24_listener() { return ctx.goToSecretSetupPage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 8, "bip85-show.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 10, "bip85-show.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 12, "bip85-show.mnemonic-length"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.mnemonicLength);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 14, "bip85-show.index"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.index);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.childMnemonic);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 16, "bip85-show.add"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaXA4NS1zaG93LnBhZ2Uuc2NzcyJ9 */"] });
    return Bip85ShowPage;
}());



/***/ }),

/***/ "e0f4":
/*!*******************************************************!*\
  !*** ./src/app/pages/bip85-show/bip85-show.module.ts ***!
  \*******************************************************/
/*! exports provided: Bip85ShowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bip85ShowPageModule", function() { return Bip85ShowPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bip85_show_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bip85-show-routing.module */ "Cmri");
/* harmony import */ var _bip85_show_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bip85-show.page */ "Leae");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







var Bip85ShowPageModule = /** @class */ (function () {
    function Bip85ShowPageModule() {
    }
    Bip85ShowPageModule.ɵfac = function Bip85ShowPageModule_Factory(t) { return new (t || Bip85ShowPageModule)(); };
    Bip85ShowPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: Bip85ShowPageModule });
    Bip85ShowPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _bip85_show_routing_module__WEBPACK_IMPORTED_MODULE_3__["Bip85ShowPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]] });
    return Bip85ShowPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](Bip85ShowPageModule, { declarations: [_bip85_show_page__WEBPACK_IMPORTED_MODULE_4__["Bip85ShowPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _bip85_show_routing_module__WEBPACK_IMPORTED_MODULE_3__["Bip85ShowPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();


/***/ }),

/***/ "xE8c":
/*!*********************************!*\
  !*** ./src/app/models/BIP85.ts ***!
  \*********************************/
/*! exports provided: checkValidIndex, hmacSHA512, BIP85_APPLICATIONS, BIP85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkValidIndex", function() { return checkValidIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmacSHA512", function() { return hmacSHA512; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BIP85_APPLICATIONS", function() { return BIP85_APPLICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BIP85", function() { return BIP85; });
/* harmony import */ var bip32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bip32 */ "sHUq");
/* harmony import */ var bip32__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bip32__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bip39 */ "KckP");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BIP85Child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BIP85Child */ "8ZmZ");
/* harmony import */ var create_hmac__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! create-hmac */ "Giow");
/* harmony import */ var create_hmac__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(create_hmac__WEBPACK_IMPORTED_MODULE_3__);




function checkValidIndex(index) {
    return typeof index === 'number' && index >= 0;
}
// Copied from https://github.com/bitcoinjs/bip32/blob/master/ts-src/crypto.ts because it is not exported
function hmacSHA512(key, data) {
    return create_hmac__WEBPACK_IMPORTED_MODULE_3__('sha512', key).update(data).digest();
}
// https://github.com/bitcoin/bips/blob/master/bip-0085.mediawiki
/**
 * Constants defined in BIP-85
 */
var BIP85_KEY = 'bip-entropy-from-k';
var BIP85_DERIVATION_PATH = 83696968;
var BIP85_APPLICATIONS;
(function (BIP85_APPLICATIONS) {
    BIP85_APPLICATIONS[BIP85_APPLICATIONS["BIP39"] = 39] = "BIP39";
    BIP85_APPLICATIONS[BIP85_APPLICATIONS["WIF"] = 2] = "WIF";
    BIP85_APPLICATIONS[BIP85_APPLICATIONS["XPRV"] = 32] = "XPRV";
    BIP85_APPLICATIONS[BIP85_APPLICATIONS["HEX"] = 128169] = "HEX";
})(BIP85_APPLICATIONS || (BIP85_APPLICATIONS = {}));
/**
 * Derive BIP-39 child entropy from a BIP-32 root key
 */
var BIP85 = /** @class */ (function () {
    function BIP85(node) {
        this.node = node;
    }
    BIP85.prototype.deriveBIP39 = function (language, words, index) {
        if (index === void 0) { index = 0; }
        if (!checkValidIndex(index)) {
            throw new Error('BIP39 invalid index');
        }
        if (typeof language !== 'number') {
            throw new Error('BIP39 invalid language type');
        }
        if (!(language >= 0 && language <= 8)) {
            throw new Error('BIP39 invalid language');
        }
        var entropyLength = (function () {
            switch (words) {
                case 12:
                    return 16;
                case 18:
                    return 24;
                case 24:
                    return 32;
                default:
                    throw new Error('BIP39 invalid mnemonic length');
            }
        })();
        var entropy = this.derive("m/" + BIP85_DERIVATION_PATH + "'/" + BIP85_APPLICATIONS.BIP39 + "'/" + language + "'/" + words + "'/" + index + "'", entropyLength);
        return new _BIP85Child__WEBPACK_IMPORTED_MODULE_2__["BIP85Child"](entropy, BIP85_APPLICATIONS.BIP39);
    };
    BIP85.prototype.deriveWIF = function (index) {
        if (index === void 0) { index = 0; }
        if (!checkValidIndex(index)) {
            throw new Error('WIF invalid index');
        }
        var entropy = this.derive("m/" + BIP85_DERIVATION_PATH + "'/" + BIP85_APPLICATIONS.WIF + "'/" + index + "'", 32);
        return new _BIP85Child__WEBPACK_IMPORTED_MODULE_2__["BIP85Child"](entropy, BIP85_APPLICATIONS.WIF);
    };
    BIP85.prototype.deriveXPRV = function (index) {
        if (index === void 0) { index = 0; }
        if (!checkValidIndex(index)) {
            throw new Error('XPRV invalid index');
        }
        var entropy = this.derive("m/" + BIP85_DERIVATION_PATH + "'/" + BIP85_APPLICATIONS.XPRV + "'/" + index + "'", 64);
        return new _BIP85Child__WEBPACK_IMPORTED_MODULE_2__["BIP85Child"](entropy, BIP85_APPLICATIONS.XPRV);
    };
    BIP85.prototype.deriveHex = function (numBytes, index) {
        if (index === void 0) { index = 0; }
        if (!checkValidIndex(index)) {
            throw new Error('HEX invalid index');
        }
        if (typeof numBytes !== 'number') {
            throw new Error('HEX invalid byte length type');
        }
        if (numBytes < 16 || numBytes > 64) {
            throw new Error('HEX invalid byte length');
        }
        var entropy = this.derive("m/" + BIP85_DERIVATION_PATH + "'/" + BIP85_APPLICATIONS.HEX + "'/" + numBytes + "'/" + index + "'", numBytes);
        return new _BIP85Child__WEBPACK_IMPORTED_MODULE_2__["BIP85Child"](entropy, BIP85_APPLICATIONS.HEX);
    };
    BIP85.prototype.derive = function (path, bytesLength) {
        if (bytesLength === void 0) { bytesLength = 64; }
        var childNode = this.node.derivePath(path);
        var childPrivateKey = childNode.privateKey; // Child derived from root key always has private key
        var hash = hmacSHA512(Buffer.from(BIP85_KEY), childPrivateKey);
        var truncatedHash = hash.slice(0, bytesLength);
        var childEntropy = truncatedHash.toString('hex');
        return childEntropy;
    };
    BIP85.fromBase58 = function (bip32seed) {
        var node = Object(bip32__WEBPACK_IMPORTED_MODULE_0__["fromBase58"])(bip32seed);
        if (node.depth !== 0) {
            throw new Error('Expected master, got child');
        }
        return new BIP85(node);
    };
    BIP85.fromSeed = function (bip32seed) {
        var node = Object(bip32__WEBPACK_IMPORTED_MODULE_0__["fromSeed"])(bip32seed);
        if (node.depth !== 0) {
            throw new Error('Expected master, got child');
        }
        return new BIP85(node);
    };
    BIP85.fromEntropy = function (entropy, password) {
        if (password === void 0) { password = ''; }
        var mnemonic = Object(bip39__WEBPACK_IMPORTED_MODULE_1__["entropyToMnemonic"])(entropy);
        return BIP85.fromMnemonic(mnemonic, password);
    };
    BIP85.fromMnemonic = function (mnemonic, password) {
        if (password === void 0) { password = ''; }
        if (!Object(bip39__WEBPACK_IMPORTED_MODULE_1__["validateMnemonic"])(mnemonic)) {
            throw new Error('Invalid mnemonic');
        }
        var seed = Object(bip39__WEBPACK_IMPORTED_MODULE_1__["mnemonicToSeedSync"])(mnemonic, password);
        return BIP85.fromSeed(seed);
    };
    return BIP85;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "HDXh").Buffer))

/***/ })

}]);
//# sourceMappingURL=pages-bip85-show-bip85-show-module.js.map