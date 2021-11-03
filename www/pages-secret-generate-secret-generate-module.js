(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-secret-generate-secret-generate-module"],{

/***/ "An6k":
/*!***************************************************************!*\
  !*** ./src/app/pages/secret-generate/secret-generate.page.ts ***!
  \***************************************************************/
/*! exports provided: SecretGeneratePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretGeneratePage", function() { return SecretGeneratePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _components_touch_entropy_touch_entropy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/touch-entropy/touch-entropy.component */ "soZT");
/* harmony import */ var _models_secret__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/secret */ "C2ta");
/* harmony import */ var _services_audio_audio_native_servive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/audio/audio.native.servive */ "n/+6");
/* harmony import */ var _services_camera_camera_native_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/camera/camera.native.service */ "muji");
/* harmony import */ var _services_entropy_entropy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/entropy/entropy.service */ "J3oO");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_gyroscope_gyroscope_native_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/gyroscope/gyroscope.native.service */ "zb04");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _components_entropy_progress_entropy_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/entropy-progress/entropy-progress.component */ "3gWE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

























var _c0 = ["videoElement"];
var _c1 = ["touchEntropy"];
function SecretGeneratePage_video_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "video", 19, 20);
} }
var SecretGeneratePage = /** @class */ (function () {
    function SecretGeneratePage(gyroService, entropyService, cameraService, audioService, navigationService, platform, changeDetectorRef, permissionsService) {
        var _this = this;
        this.gyroService = gyroService;
        this.entropyService = entropyService;
        this.cameraService = cameraService;
        this.audioService = audioService;
        this.navigationService = navigationService;
        this.platform = platform;
        this.changeDetectorRef = changeDetectorRef;
        this.permissionsService = permissionsService;
        this.isBrowser = false;
        this.cameraEnabled = true;
        this.audioEnabled = true;
        this.gyroEnabled = true;
        this.touchEnabled = true;
        this.ENTROPY_STARTUP_TIME = 5;
        this.startupTimeWaited = false;
        this.entropy = {
            isFull: false
        };
        this.isBrowser = !this.platform.is('hybrid');
        if (!this.isBrowser) {
            this.cameraService.setTransparentElementsByTags('ion-toolbar', 'ion-content');
        }
        setTimeout(function () {
            _this.startupTimeWaited = true;
            _this.checkEntropySourceStatus();
        }, this.ENTROPY_STARTUP_TIME * 1000);
    }
    SecretGeneratePage.prototype.checkEntropySourceStatus = function () {
        if (this.startupTimeWaited) {
            this.audioEnabled = this.audioService.getCollectedEntropyPercentage() !== 0;
            this.cameraEnabled = this.cameraService.getCollectedEntropyPercentage() !== 0;
            this.gyroEnabled = this.gyroService.getCollectedEntropyPercentage() !== 0;
            // Touch will never be disabled
        }
    };
    SecretGeneratePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        if (this.isBrowser) {
                            this.cameraService.setVideoElement(this.videoElement);
                        }
                        this.cameraService.viewWillEnter();
                        return [4 /*yield*/, this.permissionsService.requestPermissions([_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["PermissionTypes"].CAMERA, _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["PermissionTypes"].MICROPHONE])];
                    case 2:
                        _a.sent();
                        this.initEntropy();
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretGeneratePage.prototype.initEntropy = function () {
        var _this = this;
        this.entropyService.addEntropySource(this.cameraService);
        this.entropyService.addEntropySource(this.audioService);
        this.entropyService.addEntropySource(this.gyroService);
        this.entropyService.addEntropySource(this.touchEntropy);
        this.entropyService
            .startEntropyCollection()
            .then(function () {
            _this.entropyService
                .getEntropyUpdateObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(200))
                .subscribe(function () {
                _this.checkEntropy();
            });
        })
            .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["ErrorCategory"].ENTROPY_COLLECTION));
    };
    SecretGeneratePage.prototype.checkEntropy = function () {
        this.changeDetectorRef.detectChanges();
        this.checkEntropySourceStatus();
        var enabledSources = [this.audioEnabled, this.cameraEnabled, this.gyroEnabled, this.touchEnabled];
        var percentageNeeded = enabledSources.reduce(function (previous, isEnabled) { return previous + (isEnabled ? 100 : 0); }, 0);
        if (Math.min(100, this.audioService.getCollectedEntropyPercentage()) +
            Math.min(100, this.cameraService.getCollectedEntropyPercentage()) +
            Math.min(100, this.gyroService.getCollectedEntropyPercentage()) +
            Math.min(100, this.touchEntropy.getCollectedEntropyPercentage()) >=
            percentageNeeded) {
            this.entropy.isFull = true;
        }
    };
    SecretGeneratePage.prototype.ionViewWillLeave = function () {
        this.cameraService.viewWillLeave();
    };
    SecretGeneratePage.prototype.ionViewDidLeave = function () {
        this.entropyService.stopEntropyCollection().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["ErrorCategory"].ENTROPY_COLLECTION));
    };
    SecretGeneratePage.prototype.goToSecretRulesPage = function () {
        var _this = this;
        this.entropyService
            .getEntropyAsHex()
            .then(function (hashHex) {
            var secret = new _models_secret__WEBPACK_IMPORTED_MODULE_6__["MnemonicSecret"](hashHex);
            _this.navigationService.routeWithState('secret-rules', { secret: secret }).catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["ErrorCategory"].IONIC_NAVIGATION));
        })
            .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["ErrorCategory"].ENTROPY_COLLECTION));
    };
    SecretGeneratePage.ɵfac = function SecretGeneratePage_Factory(t) { return new (t || SecretGeneratePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gyroscope_gyroscope_native_service__WEBPACK_IMPORTED_MODULE_11__["GyroscopeNativeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_entropy_entropy_service__WEBPACK_IMPORTED_MODULE_9__["EntropyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_camera_camera_native_service__WEBPACK_IMPORTED_MODULE_8__["CameraNativeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_audio_audio_native_servive__WEBPACK_IMPORTED_MODULE_7__["AudioNativeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_12__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["PermissionsService"])); };
    SecretGeneratePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SecretGeneratePage, selectors: [["airgap-secret-generate"]], viewQuery: function SecretGeneratePage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 3);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.videoElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.touchEntropy = _t.first);
        } }, decls: 35, vars: 28, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/secret-setup"], [1, "ion-padding"], ["touchEntropy", ""], ["id", "entropy-description"], [1, "ion-padding-top"], [1, "ion-text-center"], ["color", "white", "src", "assets/icons/md-videocam.svg"], ["id", "entropy-video", 3, "maxValue", "value"], ["color", "white", "src", "assets/icons/md-mic.svg"], ["id", "entropy-audio", 3, "maxValue", "value"], ["color", "white", "src", "assets/icons/md-screen_rotation.svg"], ["id", "entropy-gyro", 3, "maxValue", "value"], ["color", "white", "src", "assets/icons/md-touch_app.svg"], ["id", "entropy-touch", 3, "maxValue", "value"], ["style", "width: 100%;", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "disabled", "click"], [2, "width", "100%"], ["videoElement", ""]], template: function SecretGeneratePage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "airgap-touch-entropy", null, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-col", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "ion-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "airgap-entropy-progress", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-col", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "ion-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "airgap-entropy-progress", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-col", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "airgap-entropy-progress", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-col", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "ion-icon", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "airgap-entropy-progress", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, SecretGeneratePage_video_30_Template, 2, 0, "video", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-fab", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ion-button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SecretGeneratePage_Template_ion_button_click_32_listener() { return ctx.goToSecretRulesPage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 20, "secret-generate.heading"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 22, "secret-generate.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 24, "secret-generate.description"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("opacity", ctx.cameraEnabled ? "1" : "0.2");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("maxValue", 100)("value", ctx.cameraService.getCollectedEntropyPercentage());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("opacity", ctx.audioEnabled ? "1" : "0.2");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("maxValue", 100)("value", ctx.audioService.getCollectedEntropyPercentage());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("opacity", ctx.gyroEnabled ? "1" : "0.2");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("maxValue", 100)("value", ctx.gyroService.getCollectedEntropyPercentage());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("maxValue", 100)("value", _r0.getCollectedEntropyPercentage());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isBrowser);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.entropy.isFull);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 26, "secret-generate.continue_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _components_touch_entropy_touch_entropy_component__WEBPACK_IMPORTED_MODULE_5__["TouchEntropyComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _components_entropy_progress_entropy_progress_component__WEBPACK_IMPORTED_MODULE_13__["EntropyProgressComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n\n.bar-button[_ngcontent-%COMP%], .content[_ngcontent-%COMP%] {\n  color: white;\n}\n\ndiv#overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -99;\n  transform: translateX(-50%) translateY(-50%);\n  background: white;\n  \n}\n\nvideo#bgvid[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  transform: translateX(-50%) translateY(-50%);\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlY3JldC1nZW5lcmF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBOztFQUVFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUlBLDRDQUFBO0VBQ0EsaUJBQUE7RUFBbUIsd0NBQUE7QUFFckI7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFJQSw0Q0FBQTtFQUNBLHNCQUFBO0FBRUYiLCJmaWxlIjoic2VjcmV0LWdlbmVyYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFyLWJ1dHRvbixcbi5jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5kaXYjb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAtOTk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQ6IHdoaXRlOyAvKnJnYmEoY29sb3IoJGNvbG9ycywgc2Vjb25kYXJ5KSwgMC41KTsqL1xufVxuXG52aWRlbyNiZ3ZpZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAtMTAwO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIl19 */"] });
    return SecretGeneratePage;
}());



/***/ }),

/***/ "mM4E":
/*!*****************************************************************!*\
  !*** ./src/app/pages/secret-generate/secret-generate.module.ts ***!
  \*****************************************************************/
/*! exports provided: SecretGeneratePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretGeneratePageModule", function() { return SecretGeneratePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/components.module */ "j1ZV");
/* harmony import */ var _secret_generate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secret-generate.page */ "An6k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









var routes = [
    {
        path: '',
        component: _secret_generate_page__WEBPACK_IMPORTED_MODULE_6__["SecretGeneratePage"]
    }
];
var SecretGeneratePageModule = /** @class */ (function () {
    function SecretGeneratePageModule() {
    }
    SecretGeneratePageModule.ɵfac = function SecretGeneratePageModule_Factory(t) { return new (t || SecretGeneratePageModule)(); };
    SecretGeneratePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SecretGeneratePageModule });
    SecretGeneratePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]] });
    return SecretGeneratePageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SecretGeneratePageModule, { declarations: [_secret_generate_page__WEBPACK_IMPORTED_MODULE_6__["SecretGeneratePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-secret-generate-secret-generate-module.js.map