(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-secret-import-secret-import-module"],{

/***/ "FNk8":
/*!***********************************************************!*\
  !*** ./src/app/pages/secret-import/secret-import.page.ts ***!
  \***********************************************************/
/*! exports provided: SecretImportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretImportPage", function() { return SecretImportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _models_BIP39Signer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/BIP39Signer */ "yGLx");
/* harmony import */ var _models_secret__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/secret */ "C2ta");
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/device/device.service */ "2w9O");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bip39 */ "KckP");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_mnemonic_keyboard_mnemonic_keyboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/mnemonic-keyboard/mnemonic-keyboard.component */ "T6+c");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

















function SecretImportPage_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SecretImportPage_ng_container_13_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); var i_r4 = ctx.index; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r5.selectWord(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var word_r3 = ctx.$implicit;
    var i_r4 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("btn-current", i_r4 === ctx_r0.selectedWordIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", i_r4 === ctx_r0.selectedWordIndex ? "transparent" : "tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.maskWords ? "***" : word_r3, " ");
} }
function SecretImportPage_ion_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SecretImportPage_ion_button_14_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r7.selectWord(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("btn-blank", ctx_r1.selectedWordIndex !== -1)("btn-current", ctx_r1.selectedWordIndex === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", "transparent");
} }
function SecretImportPage_div_16_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SecretImportPage_div_16_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12); var word_r10 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r11.wordSelected(word_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var word_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](word_r10);
} }
function SecretImportPage_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " To generate a valid 24 word mnemonic, one of the following words is your last word. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SecretImportPage_div_16_ion_button_2_Template, 2, 1, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.lastWordOptions);
} }
var SecretImportPage = /** @class */ (function () {
    function SecretImportPage(deviceService, navigationService, alertController) {
        var _this = this;
        this.deviceService = deviceService;
        this.navigationService = navigationService;
        this.alertController = alertController;
        this.secretWords = [];
        this.selectedWordIndex = 0;
        this.selectedWord = '';
        this.maskWords = false;
        this.wordList = bip39__WEBPACK_IMPORTED_MODULE_7__["wordlists"].EN;
        this.lastWordOptions = [];
        this.setWordEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.secretWordsValid = this.setWordEmitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function () {
            return _this.isValid();
        }));
    }
    SecretImportPage.prototype.selectWord = function (index) {
        var _a;
        console.log(index);
        this.selectedWordIndex = index;
        this.selectedWord = this.secretWords[this.selectedWordIndex];
        if (this.selectedWordIndex === 0 && !this.selectedWord) {
            this.selectedWordIndex = -1;
        }
        this.setWordEmitter.next((_a = this.selectedWord) !== null && _a !== void 0 ? _a : '');
    };
    SecretImportPage.prototype.wordSelected = function (word) {
        var _a;
        if (typeof word === 'undefined') {
            if (this.selectedWordIndex >= 0) {
                this.secretWords.splice(this.selectedWordIndex, 1);
                this.selectWord(Math.max(this.selectedWordIndex - 1, 0));
            }
            else if (this.selectedWordIndex === -1) {
                this.selectWord(this.secretWords.length - 1);
            }
            return;
        }
        if (this.selectedWordIndex === -1) {
            this.secretWords.push(word);
        }
        else {
            this.secretWords[this.selectedWordIndex] = word;
        }
        this.selectedWordIndex = -1;
        this.selectedWord = '';
        this.getLastWord();
        this.setWordEmitter.next((_a = this.selectedWord) !== null && _a !== void 0 ? _a : '');
    };
    SecretImportPage.prototype.ionViewDidEnter = function () {
        this.deviceService.enableScreenshotProtection({ routeBack: 'secret-setup' });
    };
    SecretImportPage.prototype.ionViewWillLeave = function () {
        this.deviceService.disableScreenshotProtection();
    };
    SecretImportPage.prototype.isValid = function () {
        return _models_BIP39Signer__WEBPACK_IMPORTED_MODULE_2__["BIPSigner"].validateMnemonic(this.secretWords.join(' '));
    };
    SecretImportPage.prototype.goToSecretSetupPage = function () {
        var signer = new _models_BIP39Signer__WEBPACK_IMPORTED_MODULE_2__["BIPSigner"]();
        var secret = new _models_secret__WEBPACK_IMPORTED_MODULE_3__["MnemonicSecret"](signer.mnemonicToEntropy(_models_BIP39Signer__WEBPACK_IMPORTED_MODULE_2__["BIPSigner"].prepareMnemonic(this.secretWords.join(' '))));
        this.navigationService.routeWithState('secret-add', { secret: secret }).catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorCategory"].IONIC_NAVIGATION));
    };
    SecretImportPage.prototype.paste = function (text) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!_models_BIP39Signer__WEBPACK_IMPORTED_MODULE_2__["BIPSigner"].validateMnemonic(text)) return [3 /*break*/, 1];
                        this.secretWords = text.split(' ');
                        this.selectedWordIndex = -1;
                        this.selectedWord = '';
                        this.setWordEmitter.next((_a = this.selectedWord) !== null && _a !== void 0 ? _a : '');
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.alertController.create({
                            header: 'Invalid Mnemonic',
                            message: 'The text in your clipboard is not a valid mnemonic.',
                            backdropDismiss: false,
                            buttons: [
                                {
                                    text: 'Ok'
                                }
                            ]
                        })];
                    case 2:
                        alert_1 = _b.sent();
                        alert_1.present();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SecretImportPage.prototype.mask = function (enabled) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.maskWords = enabled;
                return [2 /*return*/];
            });
        });
    };
    SecretImportPage.prototype.getLastWord = function () {
        var e_1, _a;
        var options = [];
        if (this.secretWords.length === 23) {
            try {
                // The last word is 3 bits entropy and 8 bits checksum of the entropy. But because there are only 2048 words, it's fast to just try all combinations and the code is a lot easier, so we do that.
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(bip39__WEBPACK_IMPORTED_MODULE_7__["wordlists"].EN), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var word = _c.value;
                    if (bip39__WEBPACK_IMPORTED_MODULE_7__["validateMnemonic"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.secretWords, [word]).join(' '))) {
                        options.push(word);
                        console.log('LAST WORD', word);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        this.lastWordOptions = options;
    };
    SecretImportPage.ɵfac = function SecretImportPage_Factory(t) { return new (t || SecretImportPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_device_device_service__WEBPACK_IMPORTED_MODULE_4__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"])); };
    SecretImportPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SecretImportPage, selectors: [["airgap-secret-import"]], decls: 24, vars: 13, consts: [[1, "ion-no-border"], ["transparent", ""], ["slot", "start"], ["defaultHref", "/secret-setup"], [1, "ion-no-padding"], [1, "ion-padding-horizontal"], [1, "secret--container-45", "ion-align-items-center"], [1, "secret--container__inner", "ion-justify-content-center"], [4, "ngFor", "ngForOf"], ["style", "max-width: 75px; min-width: 60px;", "shape", "round", "size", "small", "class", "typography--mono", 3, "btn-blank", "btn-current", "color", "click", 4, "ngIf"], [4, "ngIf"], [3, "setWord", "wordSelected", "pasted", "maskInput"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "disabled", "click"], ["shape", "round", "size", "small", 1, "typography--mono", 2, "max-width", "75px", "min-width", "60px", 3, "color", "click"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function SecretImportPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-buttons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-back-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Select the correct word for this position.");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "ion-row", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-col");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-row", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, SecretImportPage_ng_container_13_Template, 3, 4, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, SecretImportPage_ion_button_14_Template, 1, 5, "ion-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, SecretImportPage_div_16_Template, 3, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "airgap-mnemonic-keyboard", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("wordSelected", function SecretImportPage_Template_airgap_mnemonic_keyboard_wordSelected_18_listener($event) { return ctx.wordSelected($event); })("pasted", function SecretImportPage_Template_airgap_mnemonic_keyboard_pasted_18_listener($event) { return ctx.paste($event); })("maskInput", function SecretImportPage_Template_airgap_mnemonic_keyboard_maskInput_18_listener($event) { return ctx.mask($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "ion-fab", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "ion-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SecretImportPage_Template_ion_button_click_20_listener() { return ctx.goToSecretSetupPage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 7, "secret-import.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.secretWords);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.secretWords.length < 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.lastWordOptions.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("setWord", ctx.setWordEmitter);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 9, ctx.secretWordsValid));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 11, "secret-edit.confirm_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], src_app_components_mnemonic_keyboard_mnemonic_keyboard_component__WEBPACK_IMPORTED_MODULE_12__["MnemonicKeyboardComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["ion-textarea[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\n  font-weight: 600;\n  text-transform: lowercase;\n  height: 24vh;\n}\n\n.secret--container-45[_ngcontent-%COMP%] {\n  height: calc(45% - 36px);\n}\n\n.secret--container-55[_ngcontent-%COMP%] {\n  height: calc(55%- 36px);\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 2px dashed var(--ion-color-primary);\n  border-style: none none dashed;\n  margin: 8px 0;\n}\n\n.word-placeholder[_ngcontent-%COMP%] {\n  min-width: 48px;\n}\n\n.size__xs[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.typography--mono[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n\n.btn-current[_ngcontent-%COMP%] {\n  border: 2px dashed var(--ion-color-primary);\n  border-radius: 25px;\n}\n\n.btn-blank[_ngcontent-%COMP%] {\n  border: 2px dashed var(--ion-color-tertiary);\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlY3JldC1pbXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkZBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRDQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzZWNyZXQtaW1wb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCAnTHVjaWRhIFNhbnMgVHlwZXdyaXRlcicsICdMdWNpZGEgVHlwZXdyaXRlcicsIG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgaGVpZ2h0OiAyNHZoO1xufVxuXG4uc2VjcmV0LS1jb250YWluZXItNDUge1xuICBoZWlnaHQ6IGNhbGMoNDUlIC0gMzZweCk7XG59XG5cbi5zZWNyZXQtLWNvbnRhaW5lci01NSB7XG4gIGhlaWdodDogY2FsYyg1NSUtIDM2cHgpO1xufVxuXG5ociB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1zdHlsZTogbm9uZSBub25lIGRhc2hlZDtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLndvcmQtcGxhY2Vob2xkZXIge1xuICBtaW4td2lkdGg6IDQ4cHg7XG59XG5cbi5zaXplX194cyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnR5cG9ncmFwaHktLW1vbm8ge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG4uYnRuLWN1cnJlbnQge1xuICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uYnRuLWJsYW5rIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4iXX0= */"] });
    return SecretImportPage;
}());



/***/ }),

/***/ "JVMs":
/*!*************************************************************!*\
  !*** ./src/app/pages/secret-import/secret-import.module.ts ***!
  \*************************************************************/
/*! exports provided: SecretImportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretImportPageModule", function() { return SecretImportPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_mnemonic_keyboard_mnemonic_keyboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/mnemonic-keyboard/mnemonic-keyboard.component */ "T6+c");
/* harmony import */ var _secret_import_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secret-import.page */ "FNk8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









var routes = [
    {
        path: '',
        component: _secret_import_page__WEBPACK_IMPORTED_MODULE_6__["SecretImportPage"]
    }
];
var SecretImportPageModule = /** @class */ (function () {
    function SecretImportPageModule() {
    }
    SecretImportPageModule.ɵfac = function SecretImportPageModule_Factory(t) { return new (t || SecretImportPageModule)(); };
    SecretImportPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SecretImportPageModule });
    SecretImportPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return SecretImportPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SecretImportPageModule, { declarations: [_secret_import_page__WEBPACK_IMPORTED_MODULE_6__["SecretImportPage"], src_app_components_mnemonic_keyboard_mnemonic_keyboard_component__WEBPACK_IMPORTED_MODULE_5__["MnemonicKeyboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ }),

/***/ "T6+c":
/*!*****************************************************************************!*\
  !*** ./src/app/components/mnemonic-keyboard/mnemonic-keyboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MnemonicKeyboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnemonicKeyboardComponent", function() { return MnemonicKeyboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bip39 */ "KckP");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function MnemonicKeyboardComponent_ion_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MnemonicKeyboardComponent_ion_button_4_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var suggestion_r3 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.selectWord(suggestion_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var suggestion_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", suggestion_r3, " ");
} }
function MnemonicKeyboardComponent_ion_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " no suggestions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", "secondary");
} }
function MnemonicKeyboardComponent_div_6_ion_button_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function MnemonicKeyboardComponent_div_6_ion_button_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var letter_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", letter_r8.letter, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function MnemonicKeyboardComponent_div_6_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MnemonicKeyboardComponent_div_6_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); var letter_r8 = ctx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.selectLetter(letter_r8.letter); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MnemonicKeyboardComponent_div_6_ion_button_1_ng_container_1_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MnemonicKeyboardComponent_div_6_ion_button_1_ng_container_2_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var letter_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "key-" + letter_r8.letter)("color", letter_r8.active ? "primary" : "tertiary")("disabled", !letter_r8.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", letter_r8.letter === "{backspace}");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", letter_r8.letter !== "{backspace}");
} }
function MnemonicKeyboardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MnemonicKeyboardComponent_div_6_ion_button_1_Template, 3, 5, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", row_r6);
} }
function shuffle(arr) {
    var _a;
    var array = arr.split('');
    var currentIndex = array.length;
    var randomIndex;
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])([array[randomIndex], array[currentIndex]], 2), array[currentIndex] = _a[0], array[randomIndex] = _a[1];
    }
    return array.join('');
}
var ALPHABET = 'qwertyuiopasdfghjklzxcvbnm';
var MnemonicKeyboardComponent = /** @class */ (function () {
    function MnemonicKeyboardComponent(clipboardService) {
        this.clipboardService = clipboardService;
        this.text = '';
        this.wordlist = bip39__WEBPACK_IMPORTED_MODULE_3__["wordlists"].EN;
        this.wordSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.pasted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._maskInput = false;
        this.maskInput = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.suggestions = [];
        this.validLetters = ALPHABET;
        this.shuffled = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.paintKeyboard();
    }
    MnemonicKeyboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.setWord) {
            this.subscriptions.add(this.setWord.subscribe(function (word) {
                _this.setText(word);
            }));
        }
    };
    MnemonicKeyboardComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    MnemonicKeyboardComponent.prototype.paintKeyboard = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var filtered, numberOfItems, set_1, alphabet, letters, firstRow, secondRow, thirdRow;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.wordlist) {
                    filtered = this.wordlist.filter(function (word) { return word.startsWith(_this.text); });
                    numberOfItems = 3;
                    this.suggestions = filtered.slice(0, numberOfItems);
                    set_1 = new Set();
                    filtered.forEach(function (word) {
                        set_1.add(word[_this.text.length]);
                    });
                    this.validLetters = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(set_1.values()).join('');
                }
                else {
                    this.validLetters = ALPHABET;
                }
                alphabet = ALPHABET;
                letters = (this.shuffled ? shuffle(alphabet) : alphabet).split('').map(function (letter) {
                    return { letter: letter, enabled: _this.validLetters.includes(letter), active: false };
                });
                firstRow = 10;
                secondRow = 9;
                thirdRow = 7;
                this.rows = [];
                this.rows.push(letters.splice(0, firstRow));
                this.rows.push(letters.splice(0, secondRow));
                this.rows.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(letters.splice(0, thirdRow), [{ letter: '{backspace}', enabled: this.text.length > 0, active: false }]));
                return [2 /*return*/];
            });
        });
    };
    MnemonicKeyboardComponent.prototype.selectLetter = function (letter) {
        if (letter === '{backspace}') {
            this.removeLetter();
        }
        else {
            this.addLetter(letter);
        }
        this.paintKeyboard();
    };
    MnemonicKeyboardComponent.prototype.selectWord = function (word) {
        this.wordSelected.next(word);
    };
    MnemonicKeyboardComponent.prototype.addLetter = function (char) {
        var _this = this;
        this.text += char;
        var hasExactMatch = this.wordlist.filter(function (word) { return word === _this.text; }).length > 0;
        if (hasExactMatch) {
            this.selectWord(this.text);
        }
    };
    MnemonicKeyboardComponent.prototype.removeLetter = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var len;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                len = this.text.length;
                this.text = this.text.substring(0, len - 1);
                return [2 /*return*/];
            });
        });
    };
    MnemonicKeyboardComponent.prototype.toggleShuffled = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.shuffled = !this.shuffled;
                this.paintKeyboard();
                return [2 /*return*/];
            });
        });
    };
    MnemonicKeyboardComponent.prototype.delete = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.wordSelected.next(undefined);
                return [2 /*return*/];
            });
        });
    };
    MnemonicKeyboardComponent.prototype.setText = function (text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.text = text;
                this.suggestions = [];
                this.paintKeyboard();
                return [2 /*return*/];
            });
        });
    };
    MnemonicKeyboardComponent.prototype.paste = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var text;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clipboardService.paste()];
                    case 1:
                        text = _a.sent();
                        this.pasted.emit(text);
                        return [2 /*return*/];
                }
            });
        });
    };
    MnemonicKeyboardComponent.prototype.scramble = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._maskInput = !this._maskInput;
                this.maskInput.emit(this._maskInput);
                return [2 /*return*/];
            });
        });
    };
    MnemonicKeyboardComponent.ɵfac = function MnemonicKeyboardComponent_Factory(t) { return new (t || MnemonicKeyboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ClipboardService"])); };
    MnemonicKeyboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MnemonicKeyboardComponent, selectors: [["airgap-mnemonic-keyboard"]], inputs: { setWord: "setWord", wordlist: "wordlist" }, outputs: { wordSelected: "wordSelected", pasted: "pasted", maskInput: "maskInput" }, decls: 16, vars: 5, consts: [[1, "input--container"], [1, "typography--mono"], [1, "suggestion--container"], ["shape", "round", "size", "small", "class", "typography--mono lowercase", 3, "color", "click", 4, "ngFor", "ngForOf"], ["shape", "round", "size", "small", "class", "typography--mono lowercase", 3, "color", 4, "ngIf"], ["class", "content--align__center-center", 4, "ngFor", "ngForOf"], [1, "content--align__center-center", "actions--container"], [3, "click"], ["name", "trash-outline"], ["name", "shuffle-outline"], ["name", "clipboard-outline"], [3, "name"], ["shape", "round", "size", "small", 1, "typography--mono", "lowercase", 3, "color", "click"], ["shape", "round", "size", "small", 1, "typography--mono", "lowercase", 3, "color"], [1, "content--align__center-center"], ["size", "small", "class", "typography--mono lowercase", 3, "id", "color", "disabled", "click", 4, "ngFor", "ngForOf"], ["size", "small", 1, "typography--mono", "lowercase", 3, "id", "color", "disabled", "click"], [4, "ngIf"], ["name", "backspace-outline"], [3, "innerHTML"]], template: function MnemonicKeyboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-row", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MnemonicKeyboardComponent_ion_button_4_Template, 2, 2, "ion-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MnemonicKeyboardComponent_ion_button_5_Template, 2, 1, "ion-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MnemonicKeyboardComponent_div_6_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MnemonicKeyboardComponent_Template_ion_button_click_8_listener() { return ctx.delete(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MnemonicKeyboardComponent_Template_ion_button_click_10_listener() { return ctx.toggleShuffled(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MnemonicKeyboardComponent_Template_ion_button_click_12_listener() { return ctx.paste(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MnemonicKeyboardComponent_Template_ion_button_click_14_listener() { return ctx.scramble(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ion-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.text);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.suggestions);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.suggestions.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.rows);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx._maskInput ? "eye-outline" : "eye-off-outline");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"]], styles: [".lowercase[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n\n.suggestion--container[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  min-height: 2.5rem;\n}\n\n.input--container[_ngcontent-%COMP%] {\n  min-height: 1.5rem;\n}\n\n.actions--container[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21uZW1vbmljLWtleWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtBQUlGIiwiZmlsZSI6Im1uZW1vbmljLWtleWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvd2VyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG4uc3VnZ2VzdGlvbi0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIG1pbi1oZWlnaHQ6IDIuNXJlbTtcbn1cbi5pbnB1dC0tY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMS41cmVtO1xufVxuLmFjdGlvbnMtLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG59XG4iXX0= */"] });
    return MnemonicKeyboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-secret-import-secret-import-module.js.map