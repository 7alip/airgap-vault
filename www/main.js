(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/7alip/code/rsk/wallets/airgap/airgap-vault/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1hK3":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/distribution-onboarding/distribution-onboarding.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DistributionOnboardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionOnboardingPageModule", function() { return DistributionOnboardingPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _distribution_onboarding_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./distribution-onboarding.page */ "DVyR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var routes = [
    {
        path: '',
        component: _distribution_onboarding_page__WEBPACK_IMPORTED_MODULE_5__["DistributionOnboardingPage"]
    }
];
var DistributionOnboardingPageModule = /** @class */ (function () {
    function DistributionOnboardingPageModule() {
    }
    DistributionOnboardingPageModule.ɵfac = function DistributionOnboardingPageModule_Factory(t) { return new (t || DistributionOnboardingPageModule)(); };
    DistributionOnboardingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DistributionOnboardingPageModule });
    DistributionOnboardingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return DistributionOnboardingPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DistributionOnboardingPageModule, { declarations: [_distribution_onboarding_page__WEBPACK_IMPORTED_MODULE_5__["DistributionOnboardingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2w9O":
/*!***************************************************!*\
  !*** ./src/app/services/device/device.service.ts ***!
  \***************************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pages_warning_modal_warning_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/warning-modal/warning-modal.page */ "Xq9M");
/* harmony import */ var _error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-handler/error-handler.service */ "626a");
/* harmony import */ var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.service */ "r+JB");
/* harmony import */ var src_app_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/capacitor-plugins/injection-tokens */ "Bpmc");










var DeviceService = /** @class */ (function () {
    function DeviceService(ngZone, platform, modalController, navigationService, securityUtils) {
        this.ngZone = ngZone;
        this.platform = platform;
        this.modalController = modalController;
        this.navigationService = navigationService;
        this.securityUtils = securityUtils;
        this.screenCaptureStateChangedListeners = [];
        this.screenshotTakenListeners = [];
    }
    DeviceService.prototype.enableScreenshotProtection = function (options) {
        var _this = this;
        this.setSecureWindow();
        this.onScreenCaptureStateChanged(function (captured) {
            if (captured) {
                _this.presentModal(_pages_warning_modal_warning_modal_page__WEBPACK_IMPORTED_MODULE_3__["WarningModalPage"], { errorType: _pages_warning_modal_warning_modal_page__WEBPACK_IMPORTED_MODULE_3__["Warning"].SCREENSHOT }, function () {
                    options ? _this.navigationService.routeBack(options.routeBack) : _this.navigationService.back();
                }).catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].INIT_CHECK));
            }
        });
        this.onScreenshotTaken(function () {
            _this.presentModal(_pages_warning_modal_warning_modal_page__WEBPACK_IMPORTED_MODULE_3__["WarningModalPage"], { errorType: _pages_warning_modal_warning_modal_page__WEBPACK_IMPORTED_MODULE_3__["Warning"].SCREENSHOT }, function () {
                options ? _this.navigationService.routeBack(options.routeBack) : _this.navigationService.back();
            }).catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].INIT_CHECK));
        });
    };
    DeviceService.prototype.disableScreenshotProtection = function () {
        this.clearSecureWindow();
        this.removeScreenCaptureObservers();
        this.removeScreenshotObservers();
    };
    DeviceService.prototype.presentModal = function (page, properties, callback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: page,
                            componentProps: properties,
                            backdropDismiss: false
                        })];
                    case 1:
                        modal = _a.sent();
                        modal
                            .onDidDismiss()
                            .then(function () {
                            callback();
                        })
                            .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_MODAL));
                        modal
                            .present()
                            .then(function () {
                            console.log('check modal presented');
                        })
                            .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].IONIC_MODAL));
                        return [2 /*return*/];
                }
            });
        });
    };
    DeviceService.prototype.checkForRoot = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('hybrid')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.securityUtils.assessDeviceIntegrity()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, !result.value];
                    case 2:
                        console.warn('root detection skipped - no supported platform');
                        return [2 /*return*/, false];
                }
            });
        });
    };
    DeviceService.prototype.onScreenCaptureStateChanged = function (callback) {
        var _this = this;
        if (this.platform.is('ios') && this.platform.is('hybrid')) {
            var listener = this.securityUtils.addListener('screenCaptureStateChanged', function (event) {
                _this.ngZone.run(function () {
                    callback(event.captured);
                });
            });
            this.screenCaptureStateChangedListeners.push(listener);
        }
    };
    DeviceService.prototype.setSecureWindow = function () {
        if (this.platform.is('android') && this.platform.is('hybrid')) {
            this.securityUtils.setWindowSecureFlag();
        }
    };
    DeviceService.prototype.clearSecureWindow = function () {
        if (this.platform.is('android') && this.platform.is('hybrid')) {
            this.securityUtils.clearWindowSecureFlag();
        }
    };
    DeviceService.prototype.removeScreenCaptureObservers = function () {
        if (this.platform.is('ios') && this.platform.is('hybrid')) {
            this.removeListeners(this.screenCaptureStateChangedListeners);
            this.screenCaptureStateChangedListeners = [];
        }
    };
    DeviceService.prototype.onScreenshotTaken = function (callback) {
        var _this = this;
        if (this.platform.is('ios') && this.platform.is('hybrid')) {
            var listener = this.securityUtils.addListener('screenshotTaken', function () {
                _this.ngZone.run(function () {
                    callback();
                });
            });
            this.screenCaptureStateChangedListeners.push(listener);
        }
    };
    DeviceService.prototype.removeScreenshotObservers = function () {
        if (this.platform.is('ios') && this.platform.is('hybrid')) {
            this.removeListeners(this.screenshotTakenListeners);
            this.screenshotTakenListeners = [];
        }
    };
    DeviceService.prototype.checkForElectron = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0];
            });
        });
    };
    DeviceService.prototype.removeListeners = function (listeners) {
        listeners.forEach(function (listener) {
            listener.remove();
        });
    };
    DeviceService.ɵfac = function DeviceService_Factory(t) { return new (t || DeviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_6__["SECURITY_UTILS_PLUGIN"])); };
    DeviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeviceService, factory: DeviceService.ɵfac, providedIn: 'root' });
    return DeviceService;
}());



/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "626a":
/*!*****************************************************************!*\
  !*** ./src/app/services/error-handler/error-handler.service.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorCategory, LocalErrorLogger, handleErrorIgnore, handleErrorLocal, ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCategory", function() { return ErrorCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalErrorLogger", function() { return LocalErrorLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleErrorIgnore", function() { return handleErrorIgnore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleErrorLocal", function() { return handleErrorLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



var ErrorCategory;
(function (ErrorCategory) {
    ErrorCategory["CORDOVA_PLUGIN"] = "cordova_plugin";
    ErrorCategory["IONIC_MODAL"] = "ionic_modal";
    ErrorCategory["IONIC_ALERT"] = "ionic_alert";
    ErrorCategory["IONIC_LOADER"] = "ionic_loader";
    ErrorCategory["IONIC_NAVIGATION"] = "navigation";
    ErrorCategory["WALLET_SERVICE"] = "wallet_service";
    ErrorCategory["SCHEME_ROUTING"] = "scheme_routing";
    ErrorCategory["SECURE_STORAGE"] = "secure_storage";
    ErrorCategory["INIT_CHECK"] = "init_check";
    ErrorCategory["ENTROPY_COLLECTION"] = "entropy_collection";
    ErrorCategory["INTERACTION_SERVICE"] = "interaction_service";
    ErrorCategory["DEEPLINK_SERVICE"] = "deeplink_service";
    ErrorCategory["OTHER"] = "other";
})(ErrorCategory || (ErrorCategory = {}));
var NUMBER_OF_ERRORS_CACHED = 100;
var LocalErrorLogger = /** @class */ (function () {
    function LocalErrorLogger() {
        this.errorHistoryKey = 'airgap-vault:ERROR_HISTORY';
    }
    LocalErrorLogger.prototype.addLog = function (category, error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var storedErrors;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getErrorHistory()];
                    case 1:
                        storedErrors = (_a.sent()).slice(0, NUMBER_OF_ERRORS_CACHED - 1);
                        storedErrors.unshift([category, error.name, error.message, error.stack, new Date().getTime()]);
                        localStorage.setItem(this.errorHistoryKey, JSON.stringify(storedErrors));
                        return [2 /*return*/];
                }
            });
        });
    };
    LocalErrorLogger.prototype.getErrorHistory = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                try {
                    return [2 /*return*/, JSON.parse(localStorage.getItem(this.errorHistoryKey)) || []];
                }
                catch (e) {
                    return [2 /*return*/, []];
                }
                return [2 /*return*/];
            });
        });
    };
    LocalErrorLogger.prototype.getErrorHistoryFormatted = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var errorHistory;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getErrorHistory()];
                    case 1:
                        errorHistory = _a.sent();
                        return [2 /*return*/, errorHistory
                                .map(function (_a) {
                                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 5), category = _b[0], name = _b[1], message = _b[2], stack = _b[3], date = _b[4];
                                return "[" + category + "](" + date + ")\n" + name + ":\n" + message + "\n" + stack;
                            })
                                .join('\n\n')];
                }
            });
        });
    };
    LocalErrorLogger.prototype.clearAll = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                localStorage.setItem(this.errorHistoryKey, JSON.stringify([]));
                return [2 /*return*/];
            });
        });
    };
    return LocalErrorLogger;
}());

var errorLogger = new LocalErrorLogger();
var handleErrorLocal = function (category) {
    return function (error) {
        console.log('saving error locally, category', category);
        errorLogger.addLog(category, error);
    };
};
var handleErrorIgnore = function (error) {
    console.log('ignoring error');
    console.error(error.originalError || error);
};

var ErrorHandlerService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorHandlerService, _super);
    function ErrorHandlerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorHandlerService.prototype.handleError = function (error) {
        _super.prototype.handleError.call(this, error);
        handleErrorLocal(ErrorCategory.OTHER)(error);
    };
    ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return ɵErrorHandlerService_BaseFactory(t || ErrorHandlerService); };
    ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac });
    return ErrorHandlerService;
}(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]));

var ɵErrorHandlerService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ErrorHandlerService);


/***/ }),

/***/ 7:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "8koN":
/*!***********************************************************!*\
  !*** ./src/app/services/camera/camera.browser.service.ts ***!
  \***********************************************************/
/*! exports provided: CameraBrowserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraBrowserService", function() { return CameraBrowserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/workers/entropyCalculatorWorker */ "PdrP");
/* harmony import */ var _entropy_IEntropyGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entropy/IEntropyGenerator */ "DT0N");





var blobURL = window.URL.createObjectURL(new Blob([_assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_2__["default"]]));
var entropyCalculatorWorker = new Worker(blobURL);
var CameraBrowserService = /** @class */ (function () {
    function CameraBrowserService() {
        var _this = this;
        this.VIDEO_FREQUENCY = 2000;
        this.collectedEntropyPercentage = 0;
        this.entropyObservable = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            entropyCalculatorWorker.onmessage = function (event) {
                _this.collectedEntropyPercentage += event.data.entropyMeasure;
                observer.next({ entropyHex: event.data.entropyHex });
            };
            _this.handler = function (buffer1) {
                var uintArray = _this.arrayBufferFromUint8Array(buffer1);
                entropyCalculatorWorker.postMessage({
                    entropyBuffer: uintArray
                }, [uintArray]);
            };
        });
    }
    CameraBrowserService.prototype.setTransparentElementsByTags = function () {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _[_i] = arguments[_i];
        }
        // empty
    };
    CameraBrowserService.prototype.viewWillLeave = function () {
        // empty
    };
    CameraBrowserService.prototype.viewWillEnter = function () {
        // empty
    };
    CameraBrowserService.prototype.start = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var constraints = {
                video: true,
                audio: false
            };
            _this.collectedEntropyPercentage = 0;
            var video = _this.videoElement.nativeElement;
            navigator.mediaDevices
                .getUserMedia(constraints)
                .then(function (stream) {
                _this.videoStream = stream;
                video.srcObject = stream;
                video.play();
                resolve();
            })
                .catch(function (err) {
                console.log('error in camera.brower.service', err);
                resolve();
            });
            _this.cameraInterval = window.setInterval(function () {
                if (video.videoWidth === 0) {
                    return;
                }
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                if (context) {
                    context.drawImage(video, 0, 0);
                    var buffer = context.getImageData(0, 0, video.videoWidth, video.videoHeight).data;
                    _this.handler(buffer);
                }
                else {
                    console.error('context is undefined');
                }
            }, _this.VIDEO_FREQUENCY / 5);
        });
    };
    CameraBrowserService.prototype.stop = function () {
        if (this.cameraInterval) {
            clearInterval(this.cameraInterval);
        }
        try {
            this.videoStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
        catch (e) {
            console.log(e);
        }
        return Promise.resolve();
    };
    CameraBrowserService.prototype.getEntropyUpdateObservable = function () {
        return this.entropyObservable;
    };
    CameraBrowserService.prototype.getCollectedEntropyPercentage = function () {
        return this.collectedEntropyPercentage;
    };
    CameraBrowserService.prototype.setVideoElement = function (element) {
        this.videoElement = element;
    };
    CameraBrowserService.prototype.arrayBufferFromUint8Array = function (uintArray) {
        var buffer = new ArrayBuffer(uintArray.length);
        var bufView = new Uint8Array(buffer);
        for (var i = 0; i < uintArray.length; i++) {
            bufView[i] = uintArray[i];
        }
        return buffer;
    };
    CameraBrowserService.ɵfac = function CameraBrowserService_Factory(t) { return new (t || CameraBrowserService)(); };
    CameraBrowserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CameraBrowserService, factory: CameraBrowserService.ɵfac, providedIn: 'root' });
    return CameraBrowserService;
}());



/***/ }),

/***/ "903B":
/*!*********************************************************!*\
  !*** ./src/app/services/audio/audio.browser.service.ts ***!
  \*********************************************************/
/*! exports provided: AudioBrowserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioBrowserService", function() { return AudioBrowserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/workers/entropyCalculatorWorker */ "PdrP");
/* harmony import */ var _entropy_IEntropyGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entropy/IEntropyGenerator */ "DT0N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var blobURL = window.URL.createObjectURL(new Blob([_assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_1__["default"]]));
var entropyCalculatorWorker = new Worker(blobURL);
var AudioBrowserService = /** @class */ (function () {
    function AudioBrowserService() {
        var _this = this;
        this.ENTROPY_SIZE = 4096;
        this.collectedEntropyPercentage = 0;
        this.entropyObservable = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            entropyCalculatorWorker.onmessage = function (event) {
                _this.collectedEntropyPercentage += event.data.entropyMeasure;
                observer.next({
                    entropyHex: event.data.entropyHex
                });
            };
            _this.handler = function (event) {
                var data = event.inputBuffer.getChannelData(0);
                var buffer1 = _this.arrayBufferFromIntArray(data);
                entropyCalculatorWorker.postMessage({ entropyBuffer: buffer1 }, [buffer1]);
            };
        });
        // polyfill getUserMedia
        navigator.getUserMedia =
            navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia;
    }
    AudioBrowserService.prototype.start = function () {
        var _this = this;
        this.collectedEntropyPercentage = 0;
        return new Promise(function (resolve) {
            navigator.getUserMedia({ video: false, audio: true }, function (stream) {
                var audioContext = new AudioContext();
                var microphoneStreamSource = audioContext.createMediaStreamSource(stream);
                var scriptProcessor = audioContext.createScriptProcessor(_this.ENTROPY_SIZE, 1, 1);
                scriptProcessor.onaudioprocess = function (event) {
                    _this.handler(event);
                };
                microphoneStreamSource.connect(scriptProcessor);
                scriptProcessor.connect(audioContext.destination);
                resolve();
            }, function (err) {
                console.log('error in audio.browser.service:', err);
                resolve();
            });
        });
    };
    AudioBrowserService.prototype.stop = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.microphoneStreamSource) {
                _this.microphoneStreamSource.stop();
                _this.microphoneStreamSource.disconnect();
            }
            if (_this.scriptProcessor) {
                _this.scriptProcessor.stop();
                _this.scriptProcessor.disconnect();
            }
            resolve();
        });
    };
    AudioBrowserService.prototype.getEntropyUpdateObservable = function () {
        return this.entropyObservable;
    };
    AudioBrowserService.prototype.arrayBufferFromIntArray = function (array) {
        var buffer = new ArrayBuffer(array.length);
        var bufView = new Float32Array(buffer);
        for (var i = 0; i < array.length; i++) {
            bufView[i] = array[i];
        }
        return buffer;
    };
    AudioBrowserService.prototype.getCollectedEntropyPercentage = function () {
        return this.collectedEntropyPercentage / 200;
    };
    AudioBrowserService.ɵfac = function AudioBrowserService_Factory(t) { return new (t || AudioBrowserService)(); };
    AudioBrowserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AudioBrowserService, factory: AudioBrowserService.ɵfac, providedIn: 'root' });
    return AudioBrowserService;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bpmc":
/*!*******************************************************!*\
  !*** ./src/app/capacitor-plugins/injection-tokens.ts ***!
  \*******************************************************/
/*! exports provided: CAMERA_PREVIEW_PLUGIN, SAPLING_PLUGIN, SECURITY_UTILS_PLUGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_PREVIEW_PLUGIN", function() { return CAMERA_PREVIEW_PLUGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAPLING_PLUGIN", function() { return SAPLING_PLUGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECURITY_UTILS_PLUGIN", function() { return SECURITY_UTILS_PLUGIN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var CAMERA_PREVIEW_PLUGIN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CameraPreviewPlugin');
var SAPLING_PLUGIN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('SaplingPlugin');
var SECURITY_UTILS_PLUGIN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('SecurityUtilsPlugin');


/***/ }),

/***/ "C2ta":
/*!**********************************!*\
  !*** ./src/app/models/secret.ts ***!
  \**********************************/
/*! exports provided: SecretType, MnemonicSecret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretType", function() { return SecretType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnemonicSecret", function() { return MnemonicSecret; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "o9EK");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bip32__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bip32 */ "sHUq");
/* harmony import */ var bip32__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bip32__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "oCjk");
/* harmony import */ var _BIP39Signer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BIP39Signer */ "yGLx");





var signer = new _BIP39Signer__WEBPACK_IMPORTED_MODULE_4__["BIPSigner"]();
// TODO: Implement capabilities
// enum MnemonicSecretCapability {
//   ALLOW_SHOW_SECRET = 'ALLOW_SHOW_SECRET',
//   ALLOW_SOCIAL_RECOVERY = 'ALLOW_SOCIAL_RECOVERY',
//   ALLOW_BIP85 = 'ALLOW_BIP85',
// }
var SecretType;
(function (SecretType) {
    SecretType["MNEMONIC"] = "mnemonic";
    //   TWOFACTOR = 'twofactor',
    //   TEXT = 'text',
    //   SSH = 'ssh',
    //   PGP = 'pgp'
})(SecretType || (SecretType = {}));
// interface SecretAction {
//   type: SecretType
//   key: string
//   title: string
//   description: string
//   icon: string
//   canBeDisabled: boolean
// }
var Secret = /** @class */ (function () {
    function Secret() {
        this.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID();
    }
    // public actions: SecretAction[] = []
    Secret.prototype.getIdentifier = function () {
        return this.id;
    };
    Secret.prototype.flushSecret = function () {
        delete this.secretHex;
    };
    return Secret;
}());
var MnemonicSecret = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MnemonicSecret, _super);
    function MnemonicSecret(seed, label, isParanoia, hasRecoveryKey) {
        if (label === void 0) { label = ''; }
        if (isParanoia === void 0) { isParanoia = false; }
        if (hasRecoveryKey === void 0) { hasRecoveryKey = false; }
        var _this = _super.call(this) || this;
        _this.label = label;
        _this.isParanoia = isParanoia;
        _this.hasRecoveryKey = hasRecoveryKey;
        // this.isDuress = false
        _this.type = SecretType.MNEMONIC;
        if (seed !== null) {
            _this.secretHex = _this.getEntropyFromMnemonic(seed);
            _this.fingerprint = _this.getFingerprintFromMnemonic(seed);
        }
        return _this;
    }
    MnemonicSecret.prototype.recoverMnemonicFromHex = function (hex) {
        return signer.entropyToMnemonic(hex);
    };
    MnemonicSecret.prototype.hasTwofactor = function () {
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["toBoolean"])(this.twofactor) && this.twofactor.length > 0;
    };
    MnemonicSecret.generateSocialRecover = function (secret, numberOfShares, threshold) {
        return signer.generateSocialRecover(secret, numberOfShares, threshold);
    };
    MnemonicSecret.recoverSecretFromShares = function (shares) {
        return signer.recoverKey(shares);
    };
    MnemonicSecret.init = function (obj) {
        return Object.assign(new MnemonicSecret(null, obj.label), obj);
    };
    MnemonicSecret.prototype.getEntropyFromMnemonic = function (mnemonic) {
        return this.isMnemonic(mnemonic) ? signer.mnemonicToEntropy(mnemonic) : mnemonic;
    };
    MnemonicSecret.prototype.getMnemonicFromEntropy = function (entropy) {
        return this.isMnemonic(entropy) ? entropy : signer.entropyToMnemonic(entropy);
    };
    MnemonicSecret.prototype.getFingerprintFromMnemonic = function (entropy) {
        var mnemonic = this.getMnemonicFromEntropy(entropy);
        var seed = signer.mnemonicToSeedSync(mnemonic);
        return Object(bip32__WEBPACK_IMPORTED_MODULE_2__["fromSeed"])(seed).fingerprint.toString('hex');
    };
    MnemonicSecret.prototype.isMnemonic = function (data) {
        // TODO: better check whether this is a mnemonic (validate)
        return data && data.indexOf(' ') > -1;
    };
    return MnemonicSecret;
}(Secret));



/***/ }),

/***/ "CF35":
/*!**********************************************!*\
  !*** ./src/app/functions/exposed-promise.ts ***!
  \**********************************************/
/*! exports provided: exposedPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exposedPromise", function() { return exposedPromise; });
function notInitialized() {
    throw new Error('ExposedPromise not initialized yet.');
}
function exposedPromise() {
    var resolve = notInitialized;
    var reject = notInitialized;
    // tslint:disable-next-line:promise-must-complete
    var promise = new Promise(function (innerResolve, innerReject) {
        resolve = innerResolve;
        reject = innerReject;
    });
    return { promise: promise, resolve: resolve, reject: reject };
}


/***/ }),

/***/ "DNNV":
/*!*********************************************************!*\
  !*** ./src/app/pages/introduction/introduction.page.ts ***!
  \*********************************************************/
/*! exports provided: IntroductionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionPage", function() { return IntroductionPage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function IntroductionPage_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-row", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, "introduction.highest.text"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 8, "introduction.vault.heading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 10, "introduction.vault.text"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 12, "introduction.communication.highest_text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 14, "introduction.wallet.heading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 16, "introduction.wallet.text"));
} }
function IntroductionPage_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-row", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, "introduction.medium.text"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 8, "introduction.vault.heading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 10, "introduction.vault.text"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 12, "introduction.communication.medium_text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 14, "introduction.wallet.heading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 16, "introduction.wallet.text"));
} }
var IntroductionPage = /** @class */ (function () {
    function IntroductionPage(modalController, platform, storageService) {
        this.modalController = modalController;
        this.platform = platform;
        this.storageService = storageService;
        this.security = 'highest';
    }
    IntroductionPage.prototype.accept = function () {
        var _this = this;
        this.storageService
            .set(_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["VaultStorageKey"].INTRODUCTION_INITIAL, true)
            .then(function () {
            _this.modalController.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__["ErrorCategory"].IONIC_MODAL));
        })
            .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_1__["ErrorCategory"].SECURE_STORAGE));
    };
    IntroductionPage.prototype.downloadClient = function () {
        this.openUrl('https://github.com/airgap-it');
    };
    IntroductionPage.prototype.downloadApp = function () {
        // This should open App Store and not InAppBrowser
        if (this.platform.is('android')) {
            window.open('https://play.google.com/store/apps/details?id=it.airgap.wallet');
        }
        else if (this.platform.is('ios')) {
            window.open('itms-apps://itunes.apple.com/app/id1420996542'); // AirGap Wallet
        }
    };
    IntroductionPage.prototype.openUrl = function (url) {
        if (this.platform.is('ios') || this.platform.is('android')) {
            cordova.InAppBrowser.open(url, '_system', 'location=true');
        }
        else {
            window.open(url, '_blank');
        }
    };
    IntroductionPage.ɵfac = function IntroductionPage_Factory(t) { return new (t || IntroductionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["VaultStorageService"])); };
    IntroductionPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: IntroductionPage, selectors: [["airgap-introduction"]], decls: 22, vars: 18, consts: [[1, "ion-no-border"], [1, "ion-padding"], [3, "ngModel", "ngModelChange"], ["value", "highest"], ["value", "medium"], [4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["shape", "round", "color", "light", 3, "click"], ["shape", "round", "color", "primary", 3, "click"], [3, "innerHTML"], [1, "ion-align-items-center"], ["size", "5"], ["src", "assets/img/AirGap_Onboarding_Vault.svg"], ["size", "7"], [1, "ion-padding-vertical", "ion-align-items-center"], ["size", "5", 1, "d-flex", "ion-justify-content-center"], ["src", "assets/img/qrcode.svg", 1, "connector--img"], [1, "ion-padding-top", "ion-align-items-center"], ["src", "assets/img/AirGap_Onboarding_Wallet.svg"], ["src", "assets/img/clone.svg", 1, "connector--img"]], template: function IntroductionPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-segment", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function IntroductionPage_Template_ion_segment_ngModelChange_6_listener($event) { return ctx.security = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-segment-button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-segment-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, IntroductionPage_ng_container_13_Template, 30, 18, "ng-container", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, IntroductionPage_ng_container_14_Template, 30, 18, "ng-container", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-fab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IntroductionPage_Template_ion_button_click_16_listener() { return ctx.downloadApp(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IntroductionPage_Template_ion_button_click_19_listener() { return ctx.accept(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 8, "introduction.title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.security);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 10, "introduction.highest.label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 12, "introduction.medium.label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.security === "highest");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.security === "medium");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 14, "introduction.wallet_install_label"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 16, "introduction.continue_label"));
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSegmentButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCol"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".connector--img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ludHJvZHVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImludHJvZHVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29ubmVjdG9yLS1pbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuIl19 */"] });
    return IntroductionPage;
}());



/***/ }),

/***/ "DT0N":
/*!*******************************************************!*\
  !*** ./src/app/services/entropy/IEntropyGenerator.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "DVyR":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/distribution-onboarding/distribution-onboarding.page.ts ***!
  \*******************************************************************************/
/*! exports provided: DistributionOnboardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionOnboardingPage", function() { return DistributionOnboardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








var DistributionOnboardingPage = /** @class */ (function () {
    function DistributionOnboardingPage(modalController, storageService) {
        this.modalController = modalController;
        this.storageService = storageService;
    }
    DistributionOnboardingPage.prototype.next = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.slides.slideNext();
                return [2 /*return*/];
            });
        });
    };
    DistributionOnboardingPage.prototype.accept = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.set(_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["VaultStorageKey"].DISCLAIMER_ELECTRON, true)];
                    case 1:
                        _a.sent();
                        this.modalController.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_MODAL));
                        return [2 /*return*/];
                }
            });
        });
    };
    DistributionOnboardingPage.ɵfac = function DistributionOnboardingPage_Factory(t) { return new (t || DistributionOnboardingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["VaultStorageService"])); };
    DistributionOnboardingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DistributionOnboardingPage, selectors: [["airgap-distribution-onboarding"]], viewQuery: function DistributionOnboardingPage_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], 3);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
        } }, decls: 28, vars: 18, consts: [[1, "ion-padding"], [1, "ion-padding-vertical", "ion-text-left"], [3, "innerHTML"], [1, "ion-no-border"], ["transparent", "", 1, "ion-padding"], [1, "ion-justify-content-end"], ["color", "primary", "shape", "round", 3, "click"]], template: function DistributionOnboardingPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-slides");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-slide");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-row", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-footer", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-toolbar", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-row", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DistributionOnboardingPage_Template_ion_button_click_12_listener() { return ctx.next(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-slide");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-row", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-footer", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-toolbar", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ion-row", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DistributionOnboardingPage_Template_ion_button_click_25_listener() { return ctx.accept(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 6, "distribution-onboarding.ask-permission.heading"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 8, "distribution-onboarding.ask-permission.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 10, "next"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 12, "distribution-onboarding.no-vm.heading"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 14, "distribution-onboarding.no-vm.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 16, "distribution-onboarding.understood_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXN0cmlidXRpb24tb25ib2FyZGluZy5wYWdlLnNjc3MifQ== */"] });
    return DistributionOnboardingPage;
}());



/***/ }),

/***/ "E2f4":
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/*! exports provided: InteractionType, InstallationType, VaultStorageKey, VaultStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionType", function() { return InteractionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationType", function() { return InstallationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultStorageKey", function() { return VaultStorageKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultStorageService", function() { return VaultStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
var _a;





var InteractionType;
(function (InteractionType) {
    InteractionType["UNDETERMINED"] = "UNDETERMINED";
    InteractionType["ALWAYS_ASK"] = "ALWAYS_ASK";
    InteractionType["DEEPLINK"] = "DEEPLINK";
    InteractionType["QR_CODE"] = "QR_CODE";
})(InteractionType || (InteractionType = {}));
var InstallationType;
(function (InstallationType) {
    InstallationType["UNDETERMINED"] = "UNDETERMINED";
    InstallationType["ONLINE"] = "ONLINE";
    InstallationType["OFFLINE"] = "OFFLINE";
})(InstallationType || (InstallationType = {}));
var VaultStorageKey;
(function (VaultStorageKey) {
    VaultStorageKey["DISCLAIMER_GENERATE_INITIAL"] = "DISCLAIMER_GENERATE_INITIAL";
    VaultStorageKey["DISCLAIMER_INITIAL"] = "DISCLAIMER_INITIAL";
    VaultStorageKey["DISCLAIMER_HIDE_LOCAL_AUTH_ONBOARDING"] = "DISCLAIMER_HIDE_LOCAL_AUTH_ONBOARDING";
    VaultStorageKey["DISCLAIMER_ELECTRON"] = "DISCLAIMER_ELECTRON";
    VaultStorageKey["INTRODUCTION_INITIAL"] = "INTRODUCTION_INITIAL";
    VaultStorageKey["ADVANCED_MODE"] = "ADVANCED_MODE";
    VaultStorageKey["INTERACTION_TYPE"] = "INTERACTION_TYPE";
    VaultStorageKey["INSTALLATION_TYPE"] = "INSTALLATION_TYPE";
    VaultStorageKey["AIRGAP_SECRET_LIST"] = "airgap-secret-list";
})(VaultStorageKey || (VaultStorageKey = {}));
var defaultValues = (_a = {},
    _a[VaultStorageKey.DISCLAIMER_GENERATE_INITIAL] = false,
    _a[VaultStorageKey.DISCLAIMER_INITIAL] = false,
    _a[VaultStorageKey.DISCLAIMER_HIDE_LOCAL_AUTH_ONBOARDING] = false,
    _a[VaultStorageKey.DISCLAIMER_ELECTRON] = false,
    _a[VaultStorageKey.INTRODUCTION_INITIAL] = false,
    _a[VaultStorageKey.ADVANCED_MODE] = false,
    _a[VaultStorageKey.INTERACTION_TYPE] = InteractionType.UNDETERMINED,
    _a[VaultStorageKey.INSTALLATION_TYPE] = InstallationType.UNDETERMINED,
    _a[VaultStorageKey.AIRGAP_SECRET_LIST] = [],
    _a);
var VaultStorageService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VaultStorageService, _super);
    function VaultStorageService(storage) {
        return _super.call(this, storage, defaultValues) || this;
    }
    VaultStorageService.prototype.wipe = function () {
        return this.storage.clear();
    };
    VaultStorageService.ɵfac = function VaultStorageService_Factory(t) { return new (t || VaultStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"])); };
    VaultStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: VaultStorageService, factory: VaultStorageService.ɵfac, providedIn: 'root' });
    return VaultStorageService;
}(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["BaseStorage"]));



/***/ }),

/***/ "EK3o":
/*!*******************************************************************!*\
  !*** ./src/app/services/sapling-native/sapling-native.service.ts ***!
  \*******************************************************************/
/*! exports provided: SaplingNativeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaplingNativeService", function() { return SaplingNativeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../..//capacitor-plugins/injection-tokens */ "Bpmc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





var SaplingNativeService = /** @class */ (function () {
    function SaplingNativeService(sapling, platform) {
        this.sapling = sapling;
        this.platform = platform;
    }
    SaplingNativeService.prototype.createExternalMethodProvider = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isSupported, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.platform.is('capacitor') && !this.platform.is('electron');
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sapling.isSupported()];
                    case 1:
                        _a = (_b.sent()).isSupported;
                        _b.label = 2;
                    case 2:
                        isSupported = _a;
                        return [2 /*return*/, isSupported
                                ? {
                                    initParameters: this.initParameters(this.sapling),
                                    withProvingContext: this.withProvingContext(this.sapling),
                                    prepareSpendDescription: this.prepareSpendDescription(this.sapling),
                                    preparePartialOutputDescription: this.preparePartialOutputDescription(this.sapling),
                                    createBindingSignature: this.createBindingSignature(this.sapling)
                                }
                                : undefined];
                }
            });
        });
    };
    SaplingNativeService.prototype.initParameters = function (saplingPlugin) {
        var _this = this;
        return function (_spendParams, _outputParams) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, saplingPlugin.initParameters()];
            });
        }); };
    };
    SaplingNativeService.prototype.withProvingContext = function (saplingPlugin) {
        var _this = this;
        return function (action) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var context, transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, saplingPlugin.initProvingContext()];
                    case 1:
                        context = (_a.sent()).context;
                        return [4 /*yield*/, action(parseInt(context))];
                    case 2:
                        transaction = _a.sent();
                        return [4 /*yield*/, saplingPlugin.dropProvingContext({ context: context })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, transaction];
                }
            });
        }); };
    };
    SaplingNativeService.prototype.prepareSpendDescription = function (saplingPlugin) {
        var _this = this;
        return function (context, spendingKey, address, rcm, ar, value, root, merklePath) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var spendDescriptionHex, spendDescription;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, saplingPlugin.prepareSpendDescription({
                            context: context.toString(),
                            spendingKey: spendingKey.toString('hex'),
                            address: address.toString('hex'),
                            rcm: rcm,
                            ar: ar.toString('hex'),
                            value: value,
                            root: root,
                            merklePath: merklePath
                        })];
                    case 1:
                        spendDescriptionHex = (_a.sent()).spendDescription;
                        spendDescription = Buffer.from(spendDescriptionHex, 'hex');
                        return [2 /*return*/, {
                                cv: spendDescription.slice(0, 32) /* 32 bytes */,
                                rt: spendDescription.slice(32, 64) /* 32 bytes */,
                                nf: spendDescription.slice(64, 96) /* 32 bytes */,
                                rk: spendDescription.slice(96, 128) /* 32 bytes */,
                                proof: spendDescription.slice(128, 320) /* 48 + 96 + 48 bytes */
                            }];
                }
            });
        }); };
    };
    SaplingNativeService.prototype.preparePartialOutputDescription = function (saplingPlugin) {
        var _this = this;
        return function (context, address, rcm, esk, value) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var outputDescriptionHex, outputDescription;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, saplingPlugin.preparePartialOutputDescription({
                            context: context.toString(),
                            address: address.toString('hex'),
                            rcm: rcm.toString('hex'),
                            esk: esk.toString('hex'),
                            value: value
                        })];
                    case 1:
                        outputDescriptionHex = (_a.sent()).outputDescription;
                        outputDescription = Buffer.from(outputDescriptionHex, 'hex');
                        return [2 /*return*/, {
                                cv: outputDescription.slice(0, 32) /* 32 bytes */,
                                cm: outputDescription.slice(32, 64) /* 32 bytes */,
                                proof: outputDescription.slice(64, 256) /* 48 + 96 + 48 bytes */
                            }];
                }
            });
        }); };
    };
    SaplingNativeService.prototype.createBindingSignature = function (saplingPlugin) {
        var _this = this;
        return function (context, balance, sighash) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var bindingSignature;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, saplingPlugin.createBindingSignature({
                            context: context.toString(),
                            balance: balance,
                            sighash: sighash.toString('hex')
                        })];
                    case 1:
                        bindingSignature = (_a.sent()).bindingSignature;
                        return [2 /*return*/, Buffer.from(bindingSignature, 'hex')];
                }
            });
        }); };
    };
    SaplingNativeService.ɵfac = function SaplingNativeService_Factory(t) { return new (t || SaplingNativeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_2__["SAPLING_PLUGIN"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
    SaplingNativeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SaplingNativeService, factory: SaplingNativeService.ɵfac, providedIn: 'root' });
    return SaplingNativeService;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "HDXh").Buffer))

/***/ }),

/***/ "J3oO":
/*!*****************************************************!*\
  !*** ./src/app/services/entropy/entropy.service.ts ***!
  \*****************************************************/
/*! exports provided: EntropyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntropyService", function() { return EntropyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-sha3 */ "HFX+");
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_sha3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _assets_workers_hashWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/workers/hashWorker */ "n7uL");
/* harmony import */ var _error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../error-handler/error-handler.service */ "626a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






var blobURL = window.URL.createObjectURL(new Blob([_assets_workers_hashWorker__WEBPACK_IMPORTED_MODULE_3__["default"]]));
var hashWorker = new Worker(blobURL);
var EntropyService = /** @class */ (function () {
    function EntropyService() {
        var _this = this;
        this.ENTROPY_SIZE = 4096;
        this.entropyGenerators = [];
        this.entropySubscriptions = [];
        this.entropyUpdateObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.entropyUpdateObserver = observer;
        });
    }
    EntropyService.prototype.addEntropySource = function (entropyGenerator) {
        this.entropyGenerators.push(entropyGenerator);
    };
    EntropyService.prototype.getEntropyUpdateObservable = function () {
        return this.entropyUpdateObservable;
    };
    EntropyService.prototype.startEntropyCollection = function () {
        var e_1, _a;
        var _this = this;
        var promises = [];
        var secureRandomArray = new Uint8Array(this.ENTROPY_SIZE);
        window.crypto.getRandomValues(secureRandomArray);
        hashWorker.postMessage({ call: 'init', secureRandom: Array.from(secureRandomArray) });
        var _loop_1 = function (generator) {
            promises.push(generator
                .start()
                .then(function () {
                var entropySubscription = generator.getEntropyUpdateObservable().subscribe(function (result) {
                    try {
                        hashWorker.postMessage({ entropyHex: result.entropyHex, call: 'update' });
                    }
                    catch (error) {
                        console.warn(error);
                    }
                    if (_this.entropyUpdateObserver) {
                        _this.entropyUpdateObserver.next(void 0);
                    }
                    else {
                        console.warn('entropyUpdateObserver is undefined!');
                    }
                });
                _this.entropySubscriptions.push(entropySubscription);
                return;
            })
                .catch(function (error) {
                console.warn('generator start error', error);
            }));
        };
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.entropyGenerators), _c = _b.next(); !_c.done; _c = _b.next()) {
                var generator = _c.value;
                _loop_1(generator);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Promise.all(promises);
    };
    EntropyService.prototype.stopEntropyCollection = function () {
        var _this = this;
        var promises = [];
        return new Promise(function (resolve) {
            // clear collection interval
            for (var i = 0; i < _this.entropySubscriptions.length; i++) {
                _this.entropySubscriptions[i].unsubscribe();
            }
            _this.entropySubscriptions = [];
            // stop entropy sources
            for (var i = 0; i < _this.entropyGenerators.length; i++) {
                console.log('stopping entropy source...');
                promises.push(_this.entropyGenerators[i].stop());
            }
            _this.entropyGenerators = [];
            Promise.all(promises)
                .then(function () {
                resolve();
            })
                .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].ENTROPY_COLLECTION));
        });
    };
    EntropyService.prototype.getEntropyAsHex = function () {
        var _this = this;
        return new Promise(function (resolve) {
            hashWorker.onmessage = function (event) {
                var secureRandomArray = new Uint8Array(_this.ENTROPY_SIZE);
                window.crypto.getRandomValues(secureRandomArray);
                var hash = js_sha3__WEBPACK_IMPORTED_MODULE_1__["sha3_256"].create();
                hash.update(event.data.hash);
                hash.update(secureRandomArray);
                resolve(hash.hex());
            };
            hashWorker.postMessage({ call: 'digest' });
        });
    };
    EntropyService.ɵfac = function EntropyService_Factory(t) { return new (t || EntropyService)(); };
    EntropyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: EntropyService, factory: EntropyService.ɵfac, providedIn: 'root' });
    return EntropyService;
}());



/***/ }),

/***/ "K2IO":
/*!*******************************************************************!*\
  !*** ./src/app/services/secure-storage/secure-storage.factory.ts ***!
  \*******************************************************************/
/*! exports provided: SecureStorageFactoryDepHolder, SecureStorageFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureStorageFactoryDepHolder", function() { return SecureStorageFactoryDepHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureStorageFactory", function() { return SecureStorageFactory; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _secure_storage_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secure-storage.mock */ "iXoj");
/* harmony import */ var _secure_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secure-storage.service */ "iV4W");
/* harmony import */ var src_app_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/capacitor-plugins/injection-tokens */ "Bpmc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






var SecureStorageFactoryDepHolder = /** @class */ (function () {
    function SecureStorageFactoryDepHolder(platform, securityUtils) {
        this.platform = platform;
        this.securityUtils = securityUtils;
    }
    SecureStorageFactoryDepHolder.ɵfac = function SecureStorageFactoryDepHolder_Factory(t) { return new (t || SecureStorageFactoryDepHolder)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_3__["SECURITY_UTILS_PLUGIN"])); };
    SecureStorageFactoryDepHolder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SecureStorageFactoryDepHolder, factory: SecureStorageFactoryDepHolder.ɵfac });
    return SecureStorageFactoryDepHolder;
}());

function SecureStorageFactory(depHolder) {
    if (depHolder.platform.is('hybrid')) {
        return new _secure_storage_service__WEBPACK_IMPORTED_MODULE_2__["SecureStorageService"](depHolder.securityUtils);
    }
    else {
        return new _secure_storage_mock__WEBPACK_IMPORTED_MODULE_1__["SecureStorageServiceMock"]();
    }
}


/***/ }),

/***/ "LlJE":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/local-authentication-onboarding/local-authentication-onboarding.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: LocalAuthenticationOnboardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalAuthenticationOnboardingPage", function() { return LocalAuthenticationOnboardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








var LocalAuthenticationOnboardingPage = /** @class */ (function () {
    function LocalAuthenticationOnboardingPage(modalController, storageService) {
        this.modalController = modalController;
        this.storageService = storageService;
    }
    LocalAuthenticationOnboardingPage.prototype.authenticate = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.set(_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["VaultStorageKey"].DISCLAIMER_HIDE_LOCAL_AUTH_ONBOARDING, true)];
                    case 1:
                        _a.sent();
                        this.modalController.dismiss({ authenticated: true }).catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_MODAL));
                        return [2 /*return*/];
                }
            });
        });
    };
    LocalAuthenticationOnboardingPage.ɵfac = function LocalAuthenticationOnboardingPage_Factory(t) { return new (t || LocalAuthenticationOnboardingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["VaultStorageService"])); };
    LocalAuthenticationOnboardingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LocalAuthenticationOnboardingPage, selectors: [["airgap-local-authentication-onboarding"]], decls: 14, vars: 9, consts: [[1, "ion-no-border"], [1, "ion-padding"], ["classs", "ion-no-margin", 3, "innerHTML"], [1, "ion-justify-content-center", "ion-padding-vertical"], ["src", "assets/img/local_authentication_onboarding.svg", 1, "ion-padding-vertical"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["default", "", "color", "primary", "shape", "round", 3, "click"]], template: function LocalAuthenticationOnboardingPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-row", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-fab", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LocalAuthenticationOnboardingPage_Template_ion_button_click_11_listener() { return ctx.authenticate(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, "local-authentication-onboarding.heading"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 5, "local-authentication-onboarding.text"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 7, "local-authentication-onboarding.authenticate_label"), " ");
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["img[_ngcontent-%COMP%] {\n  height: 45vh;\n}\n\n\n\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvY2FsLWF1dGhlbnRpY2F0aW9uLW9uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUNBLHlEQUFBOztBQUNBO0VBQ0UsU0FBQTtBQUVGIiwiZmlsZSI6ImxvY2FsLWF1dGhlbnRpY2F0aW9uLW9uYm9hcmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgaGVpZ2h0OiA0NXZoO1xufVxuLyogaDEgbWFyZ2luIGZpeCBhcyBpb24tbm8tbWFyZ2luIGRvZXNuJ3Qgc2VlbSB0byBhcHBseSAqL1xuaDEge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"] });
    return LocalAuthenticationOnboardingPage;
}());



/***/ }),

/***/ "PdrP":
/*!*******************************************************!*\
  !*** ./src/assets/workers/entropyCalculatorWorker.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// self.importScripts('sha3.min.js') replaced to work in blob
var entropyCalculatorWorkerJS = "!function(){\"use strict\";function t(t,e,r){this.blocks=[],this.s=[],this.padding=e,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n)this.s[n]=0}function e(e,r,n){t.call(this,e,r,n)}var r=\"input is invalid type\",n=\"object\"==typeof window,i=n?window:{};i.JS_SHA3_NO_WINDOW&&(n=!1);var o=!n&&\"object\"==typeof self;!i.JS_SHA3_NO_NODE_JS&&\"object\"==typeof process&&process.versions&&process.versions.node?i=global:o&&(i=self);var s=!i.JS_SHA3_NO_COMMON_JS&&\"object\"==typeof module&&module.exports,a=\"function\"==typeof define&&define.amd,u=!i.JS_SHA3_NO_ARRAY_BUFFER&&\"undefined\"!=typeof ArrayBuffer,f=\"0123456789abcdef\".split(\"\"),c=[4,1024,262144,67108864],h=[0,8,16,24],p=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],d=[224,256,384,512],l=[128,256],y=[\"hex\",\"buffer\",\"arrayBuffer\",\"array\",\"digest\"],b={128:168,256:136};!i.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return\"[object Array]\"===Object.prototype.toString.call(t)}),!u||!i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return\"object\"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});for(var A=function(e,r,n){return function(i){return new t(e,r,e).update(i)[n]()}},v=function(e,r,n){return function(i,o){return new t(e,r,o).update(i)[n]()}},B=function(t,e,r){return function(e,n,i,o){return S[\"cshake\"+t].update(e,n,i,o)[r]()}},g=function(t,e,r){return function(e,n,i,o){return S[\"kmac\"+t].update(e,n,i,o)[r]()}},w=function(t,e,r,n){for(var i=0;i<y.length;++i){var o=y[i];t[o]=e(r,n,o)}return t},_=function(e,r){var n=A(e,r,\"hex\");return n.create=function(){return new t(e,r,e)},n.update=function(t){return n.create().update(t)},w(n,A,e,r)},k=[{name:\"keccak\",padding:[1,256,65536,16777216],bits:d,createMethod:_},{name:\"sha3\",padding:[6,1536,393216,100663296],bits:d,createMethod:_},{name:\"shake\",padding:[31,7936,2031616,520093696],bits:l,createMethod:function(e,r){var n=v(e,r,\"hex\");return n.create=function(n){return new t(e,r,n)},n.update=function(t,e){return n.create(e).update(t)},w(n,v,e,r)}},{name:\"cshake\",padding:c,bits:l,createMethod:function(e,r){var n=b[e],i=B(e,0,\"hex\");return i.create=function(i,o,s){return o||s?new t(e,r,i).bytepad([o,s],n):S[\"shake\"+e].create(i)},i.update=function(t,e,r,n){return i.create(e,r,n).update(t)},w(i,B,e,r)}},{name:\"kmac\",padding:c,bits:l,createMethod:function(t,r){var n=b[t],i=g(t,0,\"hex\");return i.create=function(i,o,s){return new e(t,r,o).bytepad([\"KMAC\",s],n).bytepad([i],n)},i.update=function(t,e,r,n){return i.create(t,r,n).update(e)},w(i,g,t,r)}}],S={},C=[],x=0;x<k.length;++x)for(var m=k[x],O=m.bits,z=0;z<O.length;++z){var N=m.name+\"_\"+O[z];if(C.push(N),S[N]=m.createMethod(O[z],m.padding),\"sha3\"!==m.name){var j=m.name+O[z];C.push(j),S[j]=S[N]}}t.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if(\"string\"!==n){if(\"object\"!==n)throw r;if(null===t)throw r;if(u&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||u&&ArrayBuffer.isView(t)))throw r;e=!0}for(var i,o,s=this.blocks,a=this.byteCount,f=t.length,c=this.blockCount,p=0,d=this.s;p<f;){if(this.reset)for(this.reset=!1,s[0]=this.block,i=1;i<c+1;++i)s[i]=0;if(e)for(i=this.start;p<f&&i<a;++p)s[i>>2]|=t[p]<<h[3&i++];else for(i=this.start;p<f&&i<a;++p)(o=t.charCodeAt(p))<128?s[i>>2]|=o<<h[3&i++]:o<2048?(s[i>>2]|=(192|o>>6)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):o<55296||o>=57344?(s[i>>2]|=(224|o>>12)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++p)),s[i>>2]|=(240|o>>18)<<h[3&i++],s[i>>2]|=(128|o>>12&63)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]);if(this.lastByteIndex=i,i>=a){for(this.start=i-a,this.block=s[c],i=0;i<c;++i)d[i]^=s[i];J(d),this.reset=!0}else this.start=i}return this}},t.prototype.encode=function(t,e){var r=255&t,n=1,i=[r];for(r=255&(t>>=8);r>0;)i.unshift(r),r=255&(t>>=8),++n;return e?i.push(n):i.unshift(n),this.update(i),i.length},t.prototype.encodeString=function(t){var e,n=typeof t;if(\"string\"!==n){if(\"object\"!==n)throw r;if(null===t)throw r;if(u&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||u&&ArrayBuffer.isView(t)))throw r;e=!0}var i=0,o=t.length;if(e)i=o;else for(var s=0;s<t.length;++s){var a=t.charCodeAt(s);a<128?i+=1:a<2048?i+=2:a<55296||a>=57344?i+=3:(a=65536+((1023&a)<<10|1023&t.charCodeAt(++s)),i+=4)}return i+=this.encode(8*i),this.update(t),i},t.prototype.bytepad=function(t,e){for(var r=this.encode(e),n=0;n<t.length;++n)r+=this.encodeString(t[n]);var i=e-r%e,o=[];return o.length=i,this.update(o),this},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex,r=this.blockCount,n=this.s;if(t[e>>2]|=this.padding[3&e],this.lastByteIndex===this.byteCount)for(t[0]=t[r],e=1;e<r+1;++e)t[e]=0;for(t[r-1]|=2147483648,e=0;e<r;++e)n[e]^=t[e];J(n)}},t.prototype.toString=t.prototype.hex=function(){this.finalize();for(var t,e=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a=\"\";s<n;){for(o=0;o<e&&s<n;++o,++s)t=r[o],a+=f[t>>4&15]+f[15&t]+f[t>>12&15]+f[t>>8&15]+f[t>>20&15]+f[t>>16&15]+f[t>>28&15]+f[t>>24&15];s%e==0&&(J(r),o=0)}return i&&(t=r[o],a+=f[t>>4&15]+f[15&t],i>1&&(a+=f[t>>12&15]+f[t>>8&15]),i>2&&(a+=f[t>>20&15]+f[t>>16&15])),a},t.prototype.arrayBuffer=function(){this.finalize();var t,e=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a=this.outputBits>>3;t=i?new ArrayBuffer(n+1<<2):new ArrayBuffer(a);for(var u=new Uint32Array(t);s<n;){for(o=0;o<e&&s<n;++o,++s)u[s]=r[o];s%e==0&&J(r)}return i&&(u[o]=r[o],t=t.slice(0,a)),t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.digest=t.prototype.array=function(){this.finalize();for(var t,e,r=this.blockCount,n=this.s,i=this.outputBlocks,o=this.extraBytes,s=0,a=0,u=[];a<i;){for(s=0;s<r&&a<i;++s,++a)t=a<<2,e=n[s],u[t]=255&e,u[t+1]=e>>8&255,u[t+2]=e>>16&255,u[t+3]=e>>24&255;a%r==0&&J(n)}return o&&(t=a<<2,e=n[s],u[t]=255&e,o>1&&(u[t+1]=e>>8&255),o>2&&(u[t+2]=e>>16&255)),u},(e.prototype=new t).finalize=function(){return this.encode(this.outputBits,!0),t.prototype.finalize.call(this)};var J=function(t){var e,r,n,i,o,s,a,u,f,c,h,d,l,y,b,A,v,B,g,w,_,k,S,C,x,m,O,z,N,j,J,M,H,I,R,E,U,V,F,D,W,Y,K,q,G,L,P,Q,T,X,Z,$,tt,et,rt,nt,it,ot,st,at,ut,ft,ct;for(n=0;n<48;n+=2)i=t[0]^t[10]^t[20]^t[30]^t[40],o=t[1]^t[11]^t[21]^t[31]^t[41],s=t[2]^t[12]^t[22]^t[32]^t[42],a=t[3]^t[13]^t[23]^t[33]^t[43],u=t[4]^t[14]^t[24]^t[34]^t[44],f=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],h=t[7]^t[17]^t[27]^t[37]^t[47],e=(d=t[8]^t[18]^t[28]^t[38]^t[48])^(s<<1|a>>>31),r=(l=t[9]^t[19]^t[29]^t[39]^t[49])^(a<<1|s>>>31),t[0]^=e,t[1]^=r,t[10]^=e,t[11]^=r,t[20]^=e,t[21]^=r,t[30]^=e,t[31]^=r,t[40]^=e,t[41]^=r,e=i^(u<<1|f>>>31),r=o^(f<<1|u>>>31),t[2]^=e,t[3]^=r,t[12]^=e,t[13]^=r,t[22]^=e,t[23]^=r,t[32]^=e,t[33]^=r,t[42]^=e,t[43]^=r,e=s^(c<<1|h>>>31),r=a^(h<<1|c>>>31),t[4]^=e,t[5]^=r,t[14]^=e,t[15]^=r,t[24]^=e,t[25]^=r,t[34]^=e,t[35]^=r,t[44]^=e,t[45]^=r,e=u^(d<<1|l>>>31),r=f^(l<<1|d>>>31),t[6]^=e,t[7]^=r,t[16]^=e,t[17]^=r,t[26]^=e,t[27]^=r,t[36]^=e,t[37]^=r,t[46]^=e,t[47]^=r,e=c^(i<<1|o>>>31),r=h^(o<<1|i>>>31),t[8]^=e,t[9]^=r,t[18]^=e,t[19]^=r,t[28]^=e,t[29]^=r,t[38]^=e,t[39]^=r,t[48]^=e,t[49]^=r,y=t[0],b=t[1],L=t[11]<<4|t[10]>>>28,P=t[10]<<4|t[11]>>>28,z=t[20]<<3|t[21]>>>29,N=t[21]<<3|t[20]>>>29,at=t[31]<<9|t[30]>>>23,ut=t[30]<<9|t[31]>>>23,Y=t[40]<<18|t[41]>>>14,K=t[41]<<18|t[40]>>>14,I=t[2]<<1|t[3]>>>31,R=t[3]<<1|t[2]>>>31,A=t[13]<<12|t[12]>>>20,v=t[12]<<12|t[13]>>>20,Q=t[22]<<10|t[23]>>>22,T=t[23]<<10|t[22]>>>22,j=t[33]<<13|t[32]>>>19,J=t[32]<<13|t[33]>>>19,ft=t[42]<<2|t[43]>>>30,ct=t[43]<<2|t[42]>>>30,et=t[5]<<30|t[4]>>>2,rt=t[4]<<30|t[5]>>>2,E=t[14]<<6|t[15]>>>26,U=t[15]<<6|t[14]>>>26,B=t[25]<<11|t[24]>>>21,g=t[24]<<11|t[25]>>>21,X=t[34]<<15|t[35]>>>17,Z=t[35]<<15|t[34]>>>17,M=t[45]<<29|t[44]>>>3,H=t[44]<<29|t[45]>>>3,C=t[6]<<28|t[7]>>>4,x=t[7]<<28|t[6]>>>4,nt=t[17]<<23|t[16]>>>9,it=t[16]<<23|t[17]>>>9,V=t[26]<<25|t[27]>>>7,F=t[27]<<25|t[26]>>>7,w=t[36]<<21|t[37]>>>11,_=t[37]<<21|t[36]>>>11,$=t[47]<<24|t[46]>>>8,tt=t[46]<<24|t[47]>>>8,q=t[8]<<27|t[9]>>>5,G=t[9]<<27|t[8]>>>5,m=t[18]<<20|t[19]>>>12,O=t[19]<<20|t[18]>>>12,ot=t[29]<<7|t[28]>>>25,st=t[28]<<7|t[29]>>>25,D=t[38]<<8|t[39]>>>24,W=t[39]<<8|t[38]>>>24,k=t[48]<<14|t[49]>>>18,S=t[49]<<14|t[48]>>>18,t[0]=y^~A&B,t[1]=b^~v&g,t[10]=C^~m&z,t[11]=x^~O&N,t[20]=I^~E&V,t[21]=R^~U&F,t[30]=q^~L&Q,t[31]=G^~P&T,t[40]=et^~nt&ot,t[41]=rt^~it&st,t[2]=A^~B&w,t[3]=v^~g&_,t[12]=m^~z&j,t[13]=O^~N&J,t[22]=E^~V&D,t[23]=U^~F&W,t[32]=L^~Q&X,t[33]=P^~T&Z,t[42]=nt^~ot&at,t[43]=it^~st&ut,t[4]=B^~w&k,t[5]=g^~_&S,t[14]=z^~j&M,t[15]=N^~J&H,t[24]=V^~D&Y,t[25]=F^~W&K,t[34]=Q^~X&$,t[35]=T^~Z&tt,t[44]=ot^~at&ft,t[45]=st^~ut&ct,t[6]=w^~k&y,t[7]=_^~S&b,t[16]=j^~M&C,t[17]=J^~H&x,t[26]=D^~Y&I,t[27]=W^~K&R,t[36]=X^~$&q,t[37]=Z^~tt&G,t[46]=at^~ft&et,t[47]=ut^~ct&rt,t[8]=k^~y&A,t[9]=S^~b&v,t[18]=M^~C&m,t[19]=H^~x&O,t[28]=Y^~I&E,t[29]=K^~R&U,t[38]=$^~q&L,t[39]=tt^~G&P,t[48]=ft^~et&nt,t[49]=ct^~rt&it,t[0]^=p[n],t[1]^=p[n+1]};if(s)module.exports=S;else{for(x=0;x<C.length;++x)i[C[x]]=S[C[x]];a&&define(function(){return S})}}();\n\nlet previousEntropyArray = []\n\nself.onmessage = function (event) {\n  const entropyArray = new Uint8Array(event.data.entropyBuffer)\n  self.calcEntropy(previousEntropyArray, entropyArray)\n  previousEntropyArray = entropyArray\n}\n\nself.calcEntropy = function (byteArrayA, byteArrayB) {\n  let sum = 0\n  if (byteArrayB.length >0 && byteArrayA.length > 0) {\n\n    for (let i = 0; i < Math.min(byteArrayA.length, byteArrayB.length); i++) {\n      sum += Math.abs(byteArrayA[i] - byteArrayB[i])\n    }\n\n    const entropyMeasure = sum / byteArrayA.length\n    const hash = sha3_256.create()\n    hash.update(byteArrayB)\n    self.postMessage({entropyMeasure: entropyMeasure, entropyHex: hash.hex()})\n  }\n}";
/* harmony default export */ __webpack_exports__["default"] = (entropyCalculatorWorkerJS);


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core_protocols_tezos_sapling_TezosSaplingProtocolOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core/protocols/tezos/sapling/TezosSaplingProtocolOptions */ "cHOc");
/* harmony import */ var _airgap_coinlib_core_protocols_tezos_sapling_TezosSaplingProtocolOptions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_protocols_tezos_sapling_TezosSaplingProtocolOptions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _airgap_coinlib_core_protocols_tezos_sapling_TezosShieldedTezProtocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @airgap/coinlib-core/protocols/tezos/sapling/TezosShieldedTezProtocol */ "UOYm");
/* harmony import */ var _airgap_coinlib_core_protocols_tezos_sapling_TezosShieldedTezProtocol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_protocols_tezos_sapling_TezosShieldedTezProtocol__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/status-bar */ "cnT8");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./capacitor-plugins/injection-tokens */ "Bpmc");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/constants */ "bl9C");
/* harmony import */ var _functions_exposed_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functions/exposed-promise */ "CF35");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_iac_iac_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/iac/iac.service */ "wTY4");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/navigation/navigation.service */ "r+JB");
/* harmony import */ var _services_sapling_native_sapling_native_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/sapling-native/sapling-native.service */ "EK3o");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _services_startup_checks_startup_checks_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/startup-checks/startup-checks.service */ "gV6y");



























var AppComponent = /** @class */ (function () {
    function AppComponent(platform, startupChecks, iacService, languageService, protocolService, secretsService, ngZone, navigationService, httpClient, saplingNativeService, app, securityUtils, splashScreen, statusBar) {
        this.platform = platform;
        this.startupChecks = startupChecks;
        this.iacService = iacService;
        this.languageService = languageService;
        this.protocolService = protocolService;
        this.secretsService = secretsService;
        this.ngZone = ngZone;
        this.navigationService = navigationService;
        this.httpClient = httpClient;
        this.saplingNativeService = saplingNativeService;
        this.app = app;
        this.securityUtils = securityUtils;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        // Sometimes the deeplink was registered before the root page was set
        // This resulted in the root page "overwriting" the deep-linked page
        this.isInitialized = Object(_functions_exposed_promise__WEBPACK_IMPORTED_MODULE_11__["exposedPromise"])();
        // We set the app as started so no "error alert" will be shown in case the app fails to load. See error-check.js for details.
        window.airGapHasStarted = true;
        this.initializeApp().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].OTHER));
    }
    AppComponent.prototype.initializeApp = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([this.platform.ready(), this.initializeTranslations(), this.initializeProtocols()])];
                    case 1:
                        _a.sent();
                        if (!this.platform.is('hybrid')) return [3 /*break*/, 3];
                        this.statusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_6__["Style"].Dark });
                        this.statusBar.setBackgroundColor({ color: '#311B58' });
                        this.splashScreen.hide();
                        return [4 /*yield*/, this.securityUtils.toggleAutomaticAuthentication({ automatic: true })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.initChecks();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.initChecks = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.startupChecks.initChecks()];
                    case 1:
                        _a.sent();
                        this.isInitialized.resolve();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        this.app.addListener('appUrlOpen', function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var _this = this;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.isInitialized.promise];
                                    case 1:
                                        _a.sent();
                                        if (data.url === _constants_constants__WEBPACK_IMPORTED_MODULE_10__["DEEPLINK_VAULT_PREFIX"] || data.url.startsWith(_constants_constants__WEBPACK_IMPORTED_MODULE_10__["DEEPLINK_VAULT_ADD_ACCOUNT"])) {
                                            console.log('Successfully matched route', data.url);
                                            this.secretsService
                                                .getSecretsObservable()
                                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
                                                .subscribe(function (secrets) {
                                                if (secrets.length > 0) {
                                                    _this.ngZone
                                                        .run(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                                        var protocol;
                                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                            this.navigationService.routeToAccountsTab().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].IONIC_NAVIGATION));
                                                            protocol = data.url.substr(_constants_constants__WEBPACK_IMPORTED_MODULE_10__["DEEPLINK_VAULT_ADD_ACCOUNT"].length);
                                                            if (protocol.length > 0) {
                                                                this.navigationService
                                                                    .routeWithState('account-add', { protocol: protocol })
                                                                    .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].IONIC_NAVIGATION));
                                                            }
                                                            else {
                                                                this.navigationService.route('account-add').catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].IONIC_NAVIGATION));
                                                            }
                                                            return [2 /*return*/];
                                                        });
                                                    }); })
                                                        .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].OTHER));
                                                }
                                            });
                                        }
                                        else {
                                            this.ngZone.run(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                    this.iacService.handleRequest(data.url, _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["IACMessageTransport"].DEEPLINK).catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].SCHEME_ROUTING));
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.initializeTranslations = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.languageService.init({
                        supportedLanguages: ['en', 'de', 'zh-cn'],
                        defaultLanguage: 'en'
                    })];
            });
        });
    };
    AppComponent.prototype.initializeProtocols = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var externalMethodProvider, shieldedTezProtocol, _a, _b, _c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.saplingNativeService.createExternalMethodProvider()];
                    case 1:
                        externalMethodProvider = _d.sent();
                        shieldedTezProtocol = new _airgap_coinlib_core_protocols_tezos_sapling_TezosShieldedTezProtocol__WEBPACK_IMPORTED_MODULE_3__["TezosShieldedTezProtocol"](new _airgap_coinlib_core_protocols_tezos_sapling_TezosSaplingProtocolOptions__WEBPACK_IMPORTED_MODULE_2__["TezosSaplingProtocolOptions"](undefined, new _airgap_coinlib_core_protocols_tezos_sapling_TezosSaplingProtocolOptions__WEBPACK_IMPORTED_MODULE_2__["TezosShieldedTezProtocolConfig"](undefined, undefined, undefined, externalMethodProvider)));
                        this.protocolService.init({
                            extraActiveProtocols: [shieldedTezProtocol]
                        });
                        _b = (_a = shieldedTezProtocol).initParameters;
                        return [4 /*yield*/, this.getSaplingParams('spend')];
                    case 2:
                        _c = [_d.sent()];
                        return [4 /*yield*/, this.getSaplingParams('output')];
                    case 3: return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent()]))];
                    case 4:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.getSaplingParams = function (type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.platform.is('hybrid')) {
                            // Sapling params are read and used in a native plugin, there's no need to read them in the Ionic part
                            return [2 /*return*/, Buffer.alloc(0)];
                        }
                        return [4 /*yield*/, this.httpClient
                                .get("./assets/sapling/sapling-" + type + ".params", { responseType: 'arraybuffer' })
                                .toPromise()];
                    case 1:
                        params = _a.sent();
                        return [2 /*return*/, Buffer.from(params)];
                }
            });
        });
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_startup_checks_startup_checks_service__WEBPACK_IMPORTED_MODULE_17__["StartupChecksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_iac_iac_service__WEBPACK_IMPORTED_MODULE_13__["IACService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ProtocolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_16__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_14__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_sapling_native_sapling_native_service__WEBPACK_IMPORTED_MODULE_15__["SaplingNativeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_PLUGIN"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_9__["SECURITY_UTILS_PLUGIN"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["SPLASH_SCREEN_PLUGIN"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["STATUS_BAR_PLUGIN"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["airgap-root"]], decls: 2, vars: 1, consts: [[3, "swipeGesture"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-app");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-router-outlet", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("swipeGesture", false);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRouterOutlet"]], encapsulation: 2 });
    return AppComponent;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "HDXh").Buffer))

/***/ }),

/***/ "Tr6M":
/*!**************************************!*\
  !*** ./src/app/config/app-config.ts ***!
  \**************************************/
/*! exports provided: appConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
var appConfig = {
    app: {
        name: 'AirGap Vault',
        urlScheme: 'airgap-vault',
        universalLink: 'vault.airgap.it'
    },
    otherApp: {
        name: 'AirGap Wallet',
        urlScheme: 'airgap-wallet',
        universalLink: 'wallet.airgap.it'
    }
};


/***/ }),

/***/ "WwTs":
/*!***********************************************************!*\
  !*** ./src/app/services/entropy/dummy.entropy.service.ts ***!
  \***********************************************************/
/*! exports provided: DummyEntropyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyEntropyService", function() { return DummyEntropyService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _entropy_IEntropyGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entropy/IEntropyGenerator */ "DT0N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var DummyEntropyService = /** @class */ (function () {
    function DummyEntropyService() {
    }
    DummyEntropyService.prototype.start = function () {
        return Promise.resolve();
    };
    DummyEntropyService.prototype.stop = function () {
        return Promise.resolve();
    };
    DummyEntropyService.prototype.getEntropyUpdateObservable = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            observer.next({
                entropyHex: ''
            });
        });
    };
    DummyEntropyService.prototype.getCollectedEntropyPercentage = function () {
        return 0;
    };
    DummyEntropyService.ɵfac = function DummyEntropyService_Factory(t) { return new (t || DummyEntropyService)(); };
    DummyEntropyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DummyEntropyService, factory: DummyEntropyService.ɵfac, providedIn: 'root' });
    return DummyEntropyService;
}());



/***/ }),

/***/ "Xq9M":
/*!***********************************************************!*\
  !*** ./src/app/pages/warning-modal/warning-modal.page.ts ***!
  \***********************************************************/
/*! exports provided: Warning, WarningModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warning", function() { return Warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningModalPage", function() { return WarningModalPage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_secure_storage_secure_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/secure-storage/secure-storage.service */ "iV4W");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage/storage.service */ "E2f4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");












function WarningModalPage_ion_row_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function WarningModalPage_ion_fab_7_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-fab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WarningModalPage_ion_fab_7_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.handler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.buttonText);
} }
var Warning;
(function (Warning) {
    Warning[Warning["SECURE_STORAGE"] = 0] = "SECURE_STORAGE";
    Warning[Warning["ROOT"] = 1] = "ROOT";
    Warning[Warning["SCREENSHOT"] = 2] = "SCREENSHOT";
    Warning[Warning["NETWORK"] = 3] = "NETWORK";
    Warning[Warning["INITIAL_DISCLAIMER"] = 4] = "INITIAL_DISCLAIMER";
})(Warning || (Warning = {}));
var WarningModalPage = /** @class */ (function () {
    function WarningModalPage(navParams, secureStorageService, modalController, storageService, translateService) {
        this.navParams = navParams;
        this.secureStorageService = secureStorageService;
        this.modalController = modalController;
        this.storageService = storageService;
        this.translateService = translateService;
        this.imageUrl = undefined;
        this.handler = function () { return undefined; };
        this.buttonText = undefined;
    }
    WarningModalPage.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.errorType === Warning.ROOT) {
            this.translateService.get(['warnings-modal.root.title', 'warnings-modal.root.description']).subscribe(function (values) {
                _this.title = values['warnings-modal.root.title'];
                _this.description = values['warnings-modal.root.description'];
            });
            this.imageUrl = './assets/img/root_detection.svg';
            this.handler = function () { return undefined; };
        }
        if (this.errorType === Warning.SCREENSHOT) {
            this.translateService.get(['warnings-modal.screenshot.title', 'warnings-modal.screenshot.description']).subscribe(function (values) {
                _this.title = values['warnings-modal.screenshot.title'];
                _this.description = values['warnings-modal.screenshot.description'];
            });
            this.imageUrl = './assets/img/screenshot_detected.svg';
            this.buttonText = 'Ok';
            this.handler = function () {
                _this.modalController.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_MODAL));
            };
        }
        if (this.errorType === Warning.SECURE_STORAGE) {
            this.translateService
                .get([
                'warnings-modal.secure-storage.title',
                'warnings-modal.secure-storage.description',
                'warnings-modal.secure-storage.button-text_label'
            ])
                .subscribe(function (values) {
                _this.title = values['warnings-modal.secure-storage.title'];
                _this.description = values['warnings-modal.secure-storage.description'];
                _this.buttonText = values['warnings-modal.secure-storage.button-text_label'];
            });
            this.imageUrl = './assets/img/screenshot_detected.svg';
            this.handler = function () {
                _this.secureStorageService.secureDevice().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].SECURE_STORAGE));
            };
        }
        if (this.errorType === Warning.NETWORK) {
            this.translateService.get(['warnings-modal.network.title', 'warnings-modal.network.description']).subscribe(function (values) {
                _this.title = values['warnings-modal.network.title'];
                _this.description = values['warnings-modal.network.description'];
            });
            this.imageUrl = './assets/img/network_connection.svg';
            this.handler = function () { return undefined; };
        }
        if (this.errorType === Warning.INITIAL_DISCLAIMER) {
            this.translateService
                .get([
                'warnings-modal.disclaimer.title',
                'warnings-modal.disclaimer.text',
                'warnings-modal.disclaimer.disclaimer-list.text',
                'warnings-modal.disclaimer.disclaimer-list.item-1_text',
                'warnings-modal.disclaimer.disclaimer-list.item-2_text',
                'warnings-modal.disclaimer.description',
                'warnings-modal.disclaimer.understood_label'
            ])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                .subscribe(function (values) {
                var title = values['warnings-modal.disclaimer.title'];
                var text = values['warnings-modal.disclaimer.text'];
                var listText = values['warnings-modal.disclaimer.disclaimer-list.text'];
                var listItem1Text = values['warnings-modal.disclaimer.disclaimer-list.item-1_text'];
                var listItem2Text = values['warnings-modal.disclaimer.disclaimer-list.item-2_text'];
                var descriptionText = values['warnings-modal.disclaimer.description'];
                var understoodLabel = values['warnings-modal.disclaimer.understood_label'];
                _this.title = title;
                _this.description = [
                    '<p><strong>',
                    text,
                    '</strong></p><p>',
                    listText,
                    '<ul><li>',
                    listItem1Text,
                    '</li><li>',
                    listItem2Text,
                    '</li></ul></p><p>',
                    descriptionText,
                    '</p>'
                ].join('');
                _this.imageUrl = undefined;
                _this.buttonText = understoodLabel;
                _this.handler = function () {
                    _this.storageService
                        .set(_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["VaultStorageKey"].DISCLAIMER_INITIAL, true)
                        .then(function () {
                        _this.modalController.dismiss().catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_MODAL));
                    })
                        .catch(Object(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].SECURE_STORAGE));
                };
            });
        }
    };
    WarningModalPage.ɵfac = function WarningModalPage_Factory(t) { return new (t || WarningModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_secure_storage_secure_storage_service__WEBPACK_IMPORTED_MODULE_4__["SecureStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["VaultStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
    WarningModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: WarningModalPage, selectors: [["airgap-warning-modal"]], decls: 8, vars: 4, consts: [["transparent", "", 1, "ion-no-border"], ["transparent", ""], [1, "ion-padding-horizontal", 3, "innerHtml"], ["class", "ion-justify-content-center", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 4, "ngIf"], [1, "ion-justify-content-center"], [1, "warning-img", 3, "src"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["default", "", "color", "primary", "shape", "round", "item-right", "", 3, "click"]], template: function WarningModalPage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-row", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, WarningModalPage_ion_row_6_Template, 2, 1, "ion-row", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, WarningModalPage_ion_fab_7_Template, 3, 1, "ion-fab", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", ctx.description, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.imageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.buttonText);
        } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"]], styles: [".warning-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dhcm5pbmctbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJ3YXJuaW5nLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuaW5nLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwdmg7XG59XG4iXX0= */"] });
    return WarningModalPage;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_angular_ngrx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-ngrx */ "vYFO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/app */ "Ktnr");
/* harmony import */ var _capacitor_app_launcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/app-launcher */ "S1f9");
/* harmony import */ var _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/clipboard */ "PJjM");
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/splash-screen */ "4scA");
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @capacitor/status-bar */ "cnT8");
/* harmony import */ var _ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/device-motion/ngx */ "sxZc");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "mtRb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.reducers */ "xxnn");
/* harmony import */ var _capacitor_plugins_definitions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./capacitor-plugins/definitions */ "f+EC");
/* harmony import */ var _capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./capacitor-plugins/injection-tokens */ "Bpmc");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./config/app-config */ "Tr6M");
/* harmony import */ var _pages_distribution_onboarding_distribution_onboarding_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/distribution-onboarding/distribution-onboarding.module */ "1hK3");
/* harmony import */ var _pages_introduction_introduction_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/introduction/introduction.module */ "j3ST");
/* harmony import */ var _pages_local_authentication_onboarding_local_authentication_onboarding_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/local-authentication-onboarding/local-authentication-onboarding.module */ "hElH");
/* harmony import */ var _pages_warning_modal_warning_modal_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/warning-modal/warning-modal.module */ "bZdr");
/* harmony import */ var _services_audio_audio_factory__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/audio/audio.factory */ "mqxi");
/* harmony import */ var _services_audio_audio_native_servive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/audio/audio.native.servive */ "n/+6");
/* harmony import */ var _services_camera_camera_factory__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/camera/camera.factory */ "o0it");
/* harmony import */ var _services_camera_camera_native_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/camera/camera.native.service */ "muji");
/* harmony import */ var _services_device_device_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/device/device.service */ "2w9O");
/* harmony import */ var _services_entropy_entropy_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/entropy/entropy.service */ "J3oO");
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/error-handler/error-handler.service */ "626a");
/* harmony import */ var _services_gyroscope_gyroscope_factory__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/gyroscope/gyroscope.factory */ "vgt4");
/* harmony import */ var _services_gyroscope_gyroscope_native_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/gyroscope/gyroscope.native.service */ "zb04");
/* harmony import */ var _services_iac_iac_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/iac/iac.service */ "wTY4");
/* harmony import */ var _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/interaction/interaction.service */ "rYTG");
/* harmony import */ var _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/secrets/secrets.service */ "ZxHC");
/* harmony import */ var _services_secure_storage_secure_storage_factory__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/secure-storage/secure-storage.factory */ "K2IO");
/* harmony import */ var _services_secure_storage_secure_storage_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/secure-storage/secure-storage.service */ "iV4W");
/* harmony import */ var _services_share_url_share_url_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/share-url/share-url.service */ "ngeE");
/* harmony import */ var _services_startup_checks_startup_checks_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/startup-checks/startup-checks.service */ "gV6y");
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/storage/storage.service */ "E2f4");
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @capacitor/filesystem */ "F7bV");





















































function createTranslateLoader(http) {
    return new _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapTranslateLoader"](http, { prefix: './assets/i18n/', suffix: '.json' });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
            { provide: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_PLUGIN"], useValue: _capacitor_app__WEBPACK_IMPORTED_MODULE_7__["App"] },
            { provide: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INFO_PLUGIN"], useValue: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AppInfo"] },
            { provide: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_LAUNCHER_PLUGIN"], useValue: _capacitor_app_launcher__WEBPACK_IMPORTED_MODULE_8__["AppLauncher"] },
            { provide: _capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_23__["CAMERA_PREVIEW_PLUGIN"], useValue: _capacitor_plugins_definitions__WEBPACK_IMPORTED_MODULE_22__["CameraPreview"] },
            { provide: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["CLIPBOARD_PLUGIN"], useValue: _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_9__["Clipboard"] },
            { provide: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["FILESYSTEM_PLUGIN"], useValue: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_46__["Filesystem"] },
            { provide: _capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_23__["SAPLING_PLUGIN"], useValue: _capacitor_plugins_definitions__WEBPACK_IMPORTED_MODULE_22__["SaplingNative"] },
            { provide: _capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_23__["SECURITY_UTILS_PLUGIN"], useValue: _capacitor_plugins_definitions__WEBPACK_IMPORTED_MODULE_22__["SecurityUtils"] },
            { provide: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["SPLASH_SCREEN_PLUGIN"], useValue: _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"] },
            { provide: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["STATUS_BAR_PLUGIN"], useValue: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_11__["StatusBar"] },
            { provide: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_CONFIG"], useValue: _config_app_config__WEBPACK_IMPORTED_MODULE_24__["appConfig"] },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"], useClass: _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_35__["ErrorHandlerService"] },
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_13__["Diagnostic"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonicRouteStrategy"] },
            _ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_12__["DeviceMotion"],
            _services_audio_audio_native_servive__WEBPACK_IMPORTED_MODULE_30__["AudioNativeService"],
            _services_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_40__["SecretsService"],
            _services_secure_storage_secure_storage_service__WEBPACK_IMPORTED_MODULE_42__["SecureStorageService"],
            _services_device_device_service__WEBPACK_IMPORTED_MODULE_33__["DeviceService"],
            _services_camera_camera_native_service__WEBPACK_IMPORTED_MODULE_32__["CameraNativeService"],
            _services_entropy_entropy_service__WEBPACK_IMPORTED_MODULE_34__["EntropyService"],
            _services_gyroscope_gyroscope_native_service__WEBPACK_IMPORTED_MODULE_37__["GyroscopeNativeService"],
            _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["QrScannerService"],
            _services_startup_checks_startup_checks_service__WEBPACK_IMPORTED_MODULE_44__["StartupChecksService"],
            _services_iac_iac_service__WEBPACK_IMPORTED_MODULE_38__["IACService"],
            _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["ClipboardService"],
            _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["PermissionsService"],
            _services_share_url_share_url_service__WEBPACK_IMPORTED_MODULE_43__["ShareUrlService"],
            _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_35__["ErrorHandlerService"],
            _services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_39__["InteractionService"],
            _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["DeeplinkService"],
            _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["SerializerService"],
            _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_45__["VaultStorageService"],
            _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["UiEventService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"],
            _services_secure_storage_secure_storage_factory__WEBPACK_IMPORTED_MODULE_41__["SecureStorageFactoryDepHolder"],
            _services_camera_camera_factory__WEBPACK_IMPORTED_MODULE_31__["CameraFactoryDepHolder"],
            {
                provide: _services_secure_storage_secure_storage_service__WEBPACK_IMPORTED_MODULE_42__["SecureStorageService"],
                useFactory: _services_secure_storage_secure_storage_factory__WEBPACK_IMPORTED_MODULE_41__["SecureStorageFactory"],
                deps: [_services_secure_storage_secure_storage_factory__WEBPACK_IMPORTED_MODULE_41__["SecureStorageFactoryDepHolder"]]
            },
            {
                provide: _services_camera_camera_native_service__WEBPACK_IMPORTED_MODULE_32__["CameraNativeService"],
                useFactory: _services_camera_camera_factory__WEBPACK_IMPORTED_MODULE_31__["CameraFactory"],
                deps: [_services_camera_camera_factory__WEBPACK_IMPORTED_MODULE_31__["CameraFactoryDepHolder"]]
            },
            {
                provide: _services_audio_audio_native_servive__WEBPACK_IMPORTED_MODULE_30__["AudioNativeService"],
                useFactory: _services_audio_audio_factory__WEBPACK_IMPORTED_MODULE_29__["AudioServiceFactory"],
                deps: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["PermissionsService"]]
            },
            {
                provide: _services_gyroscope_gyroscope_native_service__WEBPACK_IMPORTED_MODULE_37__["GyroscopeNativeService"],
                useFactory: _services_gyroscope_gyroscope_factory__WEBPACK_IMPORTED_MODULE_36__["GyroscopeServiceFactory"],
                deps: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"], _ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_12__["DeviceMotion"]]
            }
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_21__["reducers"], {
                    metaReducers: _app_reducers__WEBPACK_IMPORTED_MODULE_21__["metaReducers"],
                    /* temporary fix for `ERROR TypeError: Cannot freeze array buffer views with elements` */
                    runtimeChecks: {
                        strictStateImmutability: false,
                        strictActionImmutability: false
                    }
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsModule"].forRoot(),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonicModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["IonicStorageModule"].forRoot({
                    name: '__airgap_storage',
                    driverOrder: ['sqlite', 'localstorage']
                }),
                _pages_warning_modal_warning_modal_module__WEBPACK_IMPORTED_MODULE_28__["WarningModalPageModule"],
                _pages_introduction_introduction_module__WEBPACK_IMPORTED_MODULE_26__["IntroductionPageModule"],
                _pages_distribution_onboarding_distribution_onboarding_module__WEBPACK_IMPORTED_MODULE_25__["DistributionOnboardingPageModule"],
                _pages_local_authentication_onboarding_local_authentication_onboarding_module__WEBPACK_IMPORTED_MODULE_27__["LocalAuthenticationOnboardingPageModule"],
                _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"],
                _airgap_angular_ngrx__WEBPACK_IMPORTED_MODULE_1__["AirGapAngularNgRxModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsRootModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonicModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["IonicStorageModule"], _pages_warning_modal_warning_modal_module__WEBPACK_IMPORTED_MODULE_28__["WarningModalPageModule"],
        _pages_introduction_introduction_module__WEBPACK_IMPORTED_MODULE_26__["IntroductionPageModule"],
        _pages_distribution_onboarding_distribution_onboarding_module__WEBPACK_IMPORTED_MODULE_25__["DistributionOnboardingPageModule"],
        _pages_local_authentication_onboarding_local_authentication_onboarding_module__WEBPACK_IMPORTED_MODULE_27__["LocalAuthenticationOnboardingPageModule"],
        _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"],
        _airgap_angular_ngrx__WEBPACK_IMPORTED_MODULE_1__["AirGapAngularNgRxModule"]] }); })();


/***/ }),

/***/ "ZxHC":
/*!*****************************************************!*\
  !*** ./src/app/services/secrets/secrets.service.ts ***!
  \*****************************************************/
/*! exports provided: SecretsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretsService", function() { return SecretsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var bip32__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bip32 */ "sHUq");
/* harmony import */ var bip32__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bip32__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bip39 */ "KckP");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_secret__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/secret */ "C2ta");
/* harmony import */ var _error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../error-handler/error-handler.service */ "626a");
/* harmony import */ var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../navigation/navigation.service */ "r+JB");
/* harmony import */ var _secure_storage_secure_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../secure-storage/secure-storage.service */ "iV4W");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../storage/storage.service */ "E2f4");
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bitcoinjs-lib */ "WdoV");
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var bs58check__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bs58check */ "b3gk");
/* harmony import */ var bs58check__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bs58check__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");




















var ExtendedPublicKey = /** @class */ (function () {
    function ExtendedPublicKey(extendedPublicKey) {
        this.rawKey = bs58check__WEBPACK_IMPORTED_MODULE_13__["decode"](extendedPublicKey).slice(4);
    }
    ExtendedPublicKey.prototype.toXpub = function () {
        return this.addPrefix('0488b21e');
    };
    ExtendedPublicKey.prototype.toYPub = function () {
        return this.addPrefix('049d7cb2');
    };
    ExtendedPublicKey.prototype.toZPub = function () {
        return this.addPrefix('04b24746');
    };
    ExtendedPublicKey.prototype.addPrefix = function (prefix) {
        var data = Buffer.concat([Buffer.from(prefix, 'hex'), this.rawKey]);
        return bs58check__WEBPACK_IMPORTED_MODULE_13__["encode"](data);
    };
    return ExtendedPublicKey;
}());
var SecretsService = /** @class */ (function () {
    function SecretsService(secureStorageService, storageService, protocolService, navigationService, loadingCtrl, alertCtrl) {
        this.secureStorageService = secureStorageService;
        this.storageService = storageService;
        this.protocolService = protocolService;
        this.navigationService = navigationService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.secretsList = [];
        this.activeSecret$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"](1);
        this.secrets$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"](1);
        this.ready = this.init();
    }
    SecretsService.prototype.init = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var secrets;
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.read()];
                    case 1:
                        secrets = _b.sent();
                        (_a = this.secretsList).push.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(secrets.map(function (obj) { return _models_secret__WEBPACK_IMPORTED_MODULE_7__["MnemonicSecret"].init(obj); })));
                        this.secrets$.next(this.secretsList);
                        this.activeSecret = this.secretsList[0];
                        this.activeSecret$.next(this.activeSecret);
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretsService.prototype.isReady = function () {
        return this.ready;
    };
    SecretsService.prototype.read = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var rawSecretsPayload, secrets, k, secret, serializedWallets, wallets;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.get(_storage_storage_service__WEBPACK_IMPORTED_MODULE_11__["VaultStorageKey"].AIRGAP_SECRET_LIST)
                        // necessary due to double serialization bug we had
                    ];
                    case 1:
                        rawSecretsPayload = _a.sent();
                        secrets = typeof rawSecretsPayload === 'string' ? JSON.parse(rawSecretsPayload) : rawSecretsPayload;
                        if (!secrets) {
                            secrets = [];
                        }
                        k = 0;
                        _a.label = 2;
                    case 2:
                        if (!(k < secrets.length)) return [3 /*break*/, 6];
                        secret = secrets[k];
                        if (!secret.wallets) return [3 /*break*/, 4];
                        serializedWallets = secret.wallets;
                        return [4 /*yield*/, Promise.all(serializedWallets.map(function (serializedWallet) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var protocol, airGapWallet;
                                var _a, _b;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                                    switch (_c.label) {
                                        case 0: return [4 /*yield*/, this.protocolService
                                                .getProtocol(serializedWallet.protocolIdentifier)
                                                .catch(function (error) {
                                                console.error(error);
                                                return undefined;
                                            })];
                                        case 1:
                                            protocol = _c.sent();
                                            if (protocol === undefined) {
                                                return [2 /*return*/, undefined];
                                            }
                                            airGapWallet = new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWallet"](protocol, serializedWallet.publicKey, serializedWallet.isExtendedPublicKey, serializedWallet.derivationPath, (_a = serializedWallet.masterFingerprint) !== null && _a !== void 0 ? _a : '', (_b = serializedWallet.status) !== null && _b !== void 0 ? _b : _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE);
                                            airGapWallet.addresses = serializedWallet.addresses;
                                            return [2 /*return*/, airGapWallet];
                                    }
                                });
                            }); }))];
                    case 3:
                        wallets = (_a.sent()).filter(function (wallet) { return wallet !== undefined; });
                        secrets[k].wallets = wallets;
                        return [3 /*break*/, 5];
                    case 4:
                        secrets[k].wallets = [];
                        _a.label = 5;
                    case 5:
                        k++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/, secrets];
                }
            });
        });
    };
    SecretsService.prototype.addOrUpdateSecret = function (secret, options) {
        if (options === void 0) { options = { setActive: true }; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var secureStorage;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!secret.wallets) {
                            secret.wallets = [];
                        }
                        if (!!secret.secretHex) return [3 /*break*/, 1];
                        this.secretsList[this.secretsList.findIndex(function (item) { return item.id === secret.id; })] = secret;
                        if (options.setActive) {
                            this.setActiveSecret(secret);
                        }
                        return [2 /*return*/, this.persist()];
                    case 1: return [4 /*yield*/, this.secureStorageService.get(secret.id, secret.isParanoia)];
                    case 2:
                        secureStorage = _a.sent();
                        return [4 /*yield*/, secureStorage.setItem(secret.id, secret.secretHex)];
                    case 3:
                        _a.sent();
                        secret.flushSecret();
                        // It's a new secret, push to array
                        if (this.secretsList.findIndex(function (item) { return item.id === secret.id; }) === -1) {
                            this.secretsList.push(secret);
                            this.secrets$.next(this.secretsList);
                        }
                        if (options.setActive) {
                            this.setActiveSecret(secret);
                        }
                        return [2 /*return*/, this.persist()];
                }
            });
        });
    };
    SecretsService.prototype.remove = function (secret) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var secureStorage;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secureStorageService.get(secret.id, secret.isParanoia)];
                    case 1:
                        secureStorage = _a.sent();
                        return [4 /*yield*/, secureStorage.removeItem(secret.id)];
                    case 2:
                        _a.sent();
                        this.secretsList.splice(this.secretsList.indexOf(secret), 1);
                        this.secrets$.next(this.secretsList);
                        if (this.activeSecret === secret) {
                            this.setActiveSecret(this.secretsList[0]);
                        }
                        return [4 /*yield*/, this.persist()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretsService.prototype.resetRecoveryPassword = function (secret) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var secureStorage, secretHex, error_1;
            var _this = this;
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
                        return [2 /*return*/, secureStorage.setupRecoveryPassword(secret.id, secretHex).then(function (result) {
                                secret.hasRecoveryKey = true;
                                _this.addOrUpdateSecret(secret);
                                return result.recoveryKey;
                            })];
                    case 4:
                        error_1 = _a.sent();
                        if (error_1.message.startsWith('Could not read from the secure storage.')) {
                            this.handleCorruptedSecret(error_1);
                        }
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SecretsService.prototype.retrieveEntropyForSecret = function (secret) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var secureStorage;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secureStorageService.get(secret.id, secret.isParanoia)];
                    case 1:
                        secureStorage = _a.sent();
                        return [2 /*return*/, secureStorage
                                .getItem(secret.id)
                                .then(function (result) {
                                return result.value;
                            })
                                .catch(function (error) {
                                if (error.message.startsWith('Could not read from the secure storage.')) {
                                    _this.handleCorruptedSecret(error);
                                }
                                throw error;
                            })];
                }
            });
        });
    };
    SecretsService.prototype.findByFingerprint = function (fingerprint) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.secretsList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var secret = _c.value;
                var foundWallet = secret.wallets.find(function (wallet) { return wallet.masterFingerprint === fingerprint; });
                if (foundWallet !== undefined) {
                    return secret;
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
        return undefined;
    };
    SecretsService.prototype.findByPublicKey = function (pubKey) {
        var e_2, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.secretsList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var secret = _c.value;
                var foundWallet = secret.wallets.find(function (wallet) { return wallet.publicKey === pubKey; });
                if (foundWallet !== undefined) {
                    return secret;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return undefined;
    };
    SecretsService.prototype.getWallets = function () {
        var e_3, _a;
        var walletList = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.secretsList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var secret = _c.value;
                walletList.push.apply(walletList, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(secret.wallets));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return walletList;
    };
    SecretsService.prototype.removeWallet = function (wallet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var secret;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                secret = this.findByPublicKey(wallet.publicKey);
                if (!secret) {
                    return [2 /*return*/, undefined];
                }
                wallet.status = _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].DELETED;
                return [2 /*return*/, this.addOrUpdateSecret(secret)];
            });
        });
    };
    SecretsService.prototype.findWalletByPublicKeyAndProtocolIdentifier = function (pubKey, protocolIdentifier) {
        var secret = this.findByPublicKey(pubKey);
        if (!secret) {
            return undefined;
        }
        var foundWallet = secret.wallets.find(function (wallet) { return wallet.publicKey === pubKey && wallet.protocol.identifier === protocolIdentifier; });
        return foundWallet;
    };
    SecretsService.prototype.findWalletByFingerprintDerivationPathAndProtocolIdentifier = function (fingerprint, protocolIdentifier, derivationPath, publicKey) {
        var secret = this.findByFingerprint(fingerprint);
        if (!secret) {
            return undefined;
        }
        var foundWallet = secret.wallets.find(function (wallet) {
            var match = wallet.masterFingerprint === fingerprint && wallet.protocol.identifier === protocolIdentifier;
            if (match) {
                if (!derivationPath.startsWith(wallet.derivationPath)) {
                    return false;
                }
                // This uses the same logic to find child key as "sign" method in the BitcoinSegwitProtocol
                var bip32PK = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_12__["bip32"].fromBase58(new ExtendedPublicKey(wallet.publicKey).toXpub());
                var cutoffFrom = derivationPath.lastIndexOf("'") || derivationPath.lastIndexOf('h');
                var childPath = derivationPath.substr(cutoffFrom + 2);
                var walletPublicKey = bip32PK.derivePath(childPath).publicKey;
                return publicKey.equals(walletPublicKey);
            }
            return false;
        });
        return foundWallet;
    };
    SecretsService.prototype.findBaseWalletByPublicKeyAndProtocolIdentifier = function (pubKey, protocolIdentifier) {
        var secret = this.findByPublicKey(pubKey);
        if (!secret) {
            return undefined;
        }
        return secret.wallets.find(function (wallet) { return wallet.publicKey === pubKey && protocolIdentifier.startsWith(wallet.protocol.identifier); });
    };
    SecretsService.prototype.getActiveSecret = function () {
        return this.activeSecret || this.secretsList[0];
    };
    SecretsService.prototype.setActiveSecret = function (secret) {
        this.activeSecret = secret;
        this.activeSecret$.next(secret);
    };
    SecretsService.prototype.getActiveSecretObservable = function () {
        return this.activeSecret$.asObservable();
    };
    SecretsService.prototype.getSecretsObservable = function () {
        return this.secrets$.asObservable();
    };
    SecretsService.prototype.persist = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var rawSecretsPayload, storedSecrets, secrets;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.secretsList.forEach(function (secret) {
                            secret.flushSecret();
                        });
                        return [4 /*yield*/, this.storageService.get(_storage_storage_service__WEBPACK_IMPORTED_MODULE_11__["VaultStorageKey"].AIRGAP_SECRET_LIST)
                            // necessary due to double serialization bug we had
                        ];
                    case 1:
                        rawSecretsPayload = _a.sent();
                        storedSecrets = typeof rawSecretsPayload === 'string' ? JSON.parse(rawSecretsPayload) : rawSecretsPayload;
                        secrets = this.secretsList.map(function (secret) {
                            var storedSecret = storedSecrets.find(function (storedSecret) { return storedSecret.id === secret.getIdentifier(); });
                            if (storedSecret === undefined) {
                                return secret;
                            }
                            var wallets = secret.wallets.slice(0);
                            var _loop_1 = function (i) {
                                var serializedWallet = storedSecret.wallets[i];
                                var found = wallets.find(function (wallet) {
                                    return isAirGapWallet(wallet) &&
                                        wallet.protocol.identifier === serializedWallet.protocolIdentifier &&
                                        wallet.publicKey === serializedWallet.publicKey;
                                });
                                if (found === undefined) {
                                    wallets.push(serializedWallet);
                                }
                            };
                            for (var i = 0; i < storedSecret.wallets.length; ++i) {
                                _loop_1(i);
                            }
                            var result = _models_secret__WEBPACK_IMPORTED_MODULE_7__["MnemonicSecret"].init(secret);
                            result.wallets = wallets;
                            return result;
                        });
                        return [2 /*return*/, this.storageService.set(_storage_storage_service__WEBPACK_IMPORTED_MODULE_11__["VaultStorageKey"].AIRGAP_SECRET_LIST, secrets)];
                }
            });
        });
    };
    SecretsService.prototype.updateWallet = function (wallet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var secret;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        secret = this.findByPublicKey(wallet.publicKey);
                        if (secret === undefined) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.addOrUpdateSecret(secret)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretsService.prototype.addWallets = function (configs) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading, secret, entropy_1, createdOrUpdated, _c, createdWallets, updatedWallets, error_2, header, message;
            var _d;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Deriving your wallet...'
                        })];
                    case 1:
                        loading = _e.sent();
                        loading.present().catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].IONIC_LOADER));
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 7, , 8]);
                        secret = this.getActiveSecret();
                        return [4 /*yield*/, this.retrieveEntropyForSecret(secret)];
                    case 3:
                        entropy_1 = _e.sent();
                        return [4 /*yield*/, Promise.all(configs.map(function (config) { return _this.activateOrCreateWallet(entropy_1, config); }))];
                    case 4:
                        createdOrUpdated = (_e.sent()).filter(function (createdOrUpdated) { return createdOrUpdated !== undefined; });
                        _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["merged"])(createdOrUpdated), 2), createdWallets = _c[0], updatedWallets = _c[1];
                        if (!(createdWallets.length > 0 || updatedWallets.length > 0)) return [3 /*break*/, 6];
                        (_d = secret.wallets).push.apply(_d, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(createdWallets));
                        return [4 /*yield*/, this.addOrUpdateSecret(secret)];
                    case 5:
                        _e.sent();
                        _e.label = 6;
                    case 6:
                        loading.dismiss().catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].IONIC_LOADER));
                        return [3 /*break*/, 8];
                    case 7:
                        error_2 = _e.sent();
                        loading.dismiss().catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].IONIC_LOADER));
                        header = void 0;
                        message = void 0;
                        // minimal solution without dependency
                        if ((_a = error_2.message) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith('Expected BIP32 derivation path')) {
                            message = 'Expected BIP32 derivation path, got invalid string';
                        }
                        else if ((_b = error_2.message) === null || _b === void 0 ? void 0 : _b.toLowerCase().startsWith('wallet already exists')) {
                            header = 'Wallet already exists';
                            message = 'You already have added this specific wallet. Please change its derivation path to add another address (advanced mode).';
                        }
                        if (message) {
                            this.showAlert(header !== null && header !== void 0 ? header : 'Error', message).catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].IONIC_ALERT));
                        }
                        throw error_2;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SecretsService.prototype.activateOrCreateWallet = function (entropy, config) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var newWallet, existingWallet;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createNewWallet(entropy, config)];
                    case 1:
                        newWallet = _a.sent();
                        existingWallet = this.findWalletByPublicKeyAndProtocolIdentifier(newWallet.publicKey, newWallet.protocol.identifier);
                        if (existingWallet === undefined) {
                            return [2 /*return*/, [newWallet, undefined]];
                        }
                        else if (newWallet.status === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE && existingWallet.status !== _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE) {
                            existingWallet.status = _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE;
                            return [2 /*return*/, [undefined, existingWallet]];
                        }
                        else if (newWallet.status === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE && existingWallet.status === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE) {
                            throw new Error('Wallet already exists');
                        }
                        else {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretsService.prototype.createNewWallet = function (entropy, config) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var protocol, mnemonic, seed, bip32Node, publicKey, fingerprint, wallet, addresses;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.protocolService.getProtocol(config.protocolIdentifier)];
                    case 1:
                        protocol = _a.sent();
                        mnemonic = bip39__WEBPACK_IMPORTED_MODULE_5__["entropyToMnemonic"](entropy);
                        return [4 /*yield*/, bip39__WEBPACK_IMPORTED_MODULE_5__["mnemonicToSeed"](mnemonic, config.bip39Passphrase)];
                    case 2:
                        seed = _a.sent();
                        bip32Node = bip32__WEBPACK_IMPORTED_MODULE_4__["fromSeed"](seed);
                        return [4 /*yield*/, protocol.getPublicKeyFromMnemonic(mnemonic, config.customDerivationPath, config.bip39Passphrase)];
                    case 3:
                        publicKey = _a.sent();
                        fingerprint = bip32Node.fingerprint.toString('hex');
                        wallet = new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWallet"](protocol, publicKey, config.isHDWallet, config.customDerivationPath, fingerprint, config.isActive ? _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE : _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].HIDDEN);
                        return [4 /*yield*/, wallet.deriveAddresses(1)];
                    case 4:
                        addresses = _a.sent();
                        wallet.addresses = addresses;
                        return [2 /*return*/, wallet];
                }
            });
        });
    };
    SecretsService.prototype.getKnownViewingKeys = function () {
        return this.getWallets()
            .filter(function (wallet) { return wallet.protocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].XTZ_SHIELDED; })
            .map(function (wallet) { return wallet.publicKey; });
    };
    SecretsService.prototype.showAlert = function (title, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
                            backdropDismiss: false,
                            buttons: [
                                {
                                    text: 'Okay!',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present().catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].IONIC_ALERT));
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretsService.prototype.handleCorruptedSecret = function (error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        error.message += ' Please, re-import your secret.';
                        error.ignore = true;
                        return [4 /*yield*/, this.showAlert('Error', error.message)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navigationService.routeToAccountsTab(true)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretsService.ɵfac = function SecretsService_Factory(t) { return new (t || SecretsService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_secure_storage_secure_storage_service__WEBPACK_IMPORTED_MODULE_10__["SecureStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_11__["VaultStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ProtocolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"])); };
    SecretsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({ token: SecretsService, factory: SecretsService.ɵfac, providedIn: 'root' });
    return SecretsService;
}());

function isAirGapWallet(value) {
    return value.protocol !== undefined;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "HDXh").Buffer))

/***/ }),

/***/ "bZdr":
/*!*************************************************************!*\
  !*** ./src/app/pages/warning-modal/warning-modal.module.ts ***!
  \*************************************************************/
/*! exports provided: WarningModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningModalPageModule", function() { return WarningModalPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _warning_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warning-modal.page */ "Xq9M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var routes = [
    {
        path: '',
        component: _warning_modal_page__WEBPACK_IMPORTED_MODULE_5__["WarningModalPage"]
    }
];
var WarningModalPageModule = /** @class */ (function () {
    function WarningModalPageModule() {
    }
    WarningModalPageModule.ɵfac = function WarningModalPageModule_Factory(t) { return new (t || WarningModalPageModule)(); };
    WarningModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: WarningModalPageModule });
    WarningModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return WarningModalPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](WarningModalPageModule, { declarations: [_warning_modal_page__WEBPACK_IMPORTED_MODULE_5__["WarningModalPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ }),

/***/ "bl9C":
/*!****************************************!*\
  !*** ./src/app/constants/constants.ts ***!
  \****************************************/
/*! exports provided: ENTROPY_SIZE, SHOW_SECRET_MIN_TIME_IN_SECONDS, DEEPLINK_VAULT_PREFIX, DEEPLINK_VAULT_ADD_ACCOUNT, BIP39_PASSPHRASE_ENABLED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTROPY_SIZE", function() { return ENTROPY_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_SECRET_MIN_TIME_IN_SECONDS", function() { return SHOW_SECRET_MIN_TIME_IN_SECONDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEPLINK_VAULT_PREFIX", function() { return DEEPLINK_VAULT_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEPLINK_VAULT_ADD_ACCOUNT", function() { return DEEPLINK_VAULT_ADD_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BIP39_PASSPHRASE_ENABLED", function() { return BIP39_PASSPHRASE_ENABLED; });
var ENTROPY_SIZE = 4096;
var SHOW_SECRET_MIN_TIME_IN_SECONDS = 30;
var DEEPLINK_VAULT_PREFIX = "airgap-vault://";
var DEEPLINK_VAULT_ADD_ACCOUNT = DEEPLINK_VAULT_PREFIX + "add-account/";
var BIP39_PASSPHRASE_ENABLED = true;


/***/ }),

/***/ "f+EC":
/*!**************************************************!*\
  !*** ./src/app/capacitor-plugins/definitions.ts ***!
  \**************************************************/
/*! exports provided: CameraPreview, SaplingNative, SecurityUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPreview", function() { return CameraPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaplingNative", function() { return SaplingNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityUtils", function() { return SecurityUtils; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

var CameraPreview = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('CameraPreview');
var SaplingNative = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('SaplingNative');
var SecurityUtils = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('SecurityUtils');


/***/ }),

/***/ "gV6y":
/*!*******************************************************************!*\
  !*** ./src/app/services/startup-checks/startup-checks.service.ts ***!
  \*******************************************************************/
/*! exports provided: StartupChecksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupChecksService", function() { return StartupChecksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pages_distribution_onboarding_distribution_onboarding_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/distribution-onboarding/distribution-onboarding.page */ "DVyR");
/* harmony import */ var _pages_introduction_introduction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/introduction/introduction.page */ "DNNV");
/* harmony import */ var _pages_warning_modal_warning_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/warning-modal/warning-modal.page */ "Xq9M");
/* harmony import */ var _device_device_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../device/device.service */ "2w9O");
/* harmony import */ var _error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error-handler/error-handler.service */ "626a");
/* harmony import */ var _secure_storage_secure_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../secure-storage/secure-storage.service */ "iV4W");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../storage/storage.service */ "E2f4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");














var StartupChecksService = /** @class */ (function () {
    function StartupChecksService(secureStorageService, deviceService, modalController, storageService) {
        var _this = this;
        this.secureStorageService = secureStorageService;
        this.deviceService = deviceService;
        this.modalController = modalController;
        this.storageService = storageService;
        this.checks = [
            {
                name: 'rootCheck',
                expectedOutcome: false,
                check: function () { return _this.deviceService.checkForRoot(); },
                failureConsequence: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.presentModal(_pages_warning_modal_warning_modal_page__WEBPACK_IMPORTED_MODULE_4__["WarningModalPage"], { errorType: _pages_warning_modal_warning_modal_page__WEBPACK_IMPORTED_MODULE_4__["Warning"].ROOT }).catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].INIT_CHECK))];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }
            },
            {
                name: 'deviceSecureCheck',
                expectedOutcome: true,
                check: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var result;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.secureStorageService.isDeviceSecure()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, Boolean(result.value).valueOf()];
                        }
                    });
                }); },
                failureConsequence: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.presentModal(_pages_warning_modal_warning_modal_page__WEBPACK_IMPORTED_MODULE_4__["WarningModalPage"], { errorType: _pages_warning_modal_warning_modal_page__WEBPACK_IMPORTED_MODULE_4__["Warning"].SECURE_STORAGE }).catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].INIT_CHECK))];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }
            },
            {
                name: 'disclaimerAcceptedCheck',
                expectedOutcome: true,
                check: function () { return _this.storageService.get(_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__["VaultStorageKey"].DISCLAIMER_INITIAL); },
                failureConsequence: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.presentModal(_pages_warning_modal_warning_modal_page__WEBPACK_IMPORTED_MODULE_4__["WarningModalPage"], { errorType: _pages_warning_modal_warning_modal_page__WEBPACK_IMPORTED_MODULE_4__["Warning"].INITIAL_DISCLAIMER }).catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].INIT_CHECK))];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }
            },
            {
                name: 'introductionAcceptedCheck',
                expectedOutcome: true,
                check: function () { return _this.storageService.get(_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__["VaultStorageKey"].INTRODUCTION_INITIAL); },
                failureConsequence: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.presentModal(_pages_introduction_introduction_page__WEBPACK_IMPORTED_MODULE_3__["IntroductionPage"], {}).catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].INIT_CHECK))];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }
            },
            {
                name: 'electronCheck',
                expectedOutcome: true,
                check: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var isElectron, hasShownDisclaimer;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, deviceService.checkForElectron()];
                            case 1:
                                isElectron = _a.sent();
                                return [4 /*yield*/, this.storageService.get(_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__["VaultStorageKey"].DISCLAIMER_ELECTRON)];
                            case 2:
                                hasShownDisclaimer = _a.sent();
                                return [2 /*return*/, !isElectron || hasShownDisclaimer];
                        }
                    });
                }); },
                failureConsequence: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.presentModal(_pages_distribution_onboarding_distribution_onboarding_page__WEBPACK_IMPORTED_MODULE_2__["DistributionOnboardingPage"], {}).catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].INIT_CHECK))];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }
            }
        ];
    }
    StartupChecksService.prototype.presentModal = function (page, properties) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var modal;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.modalController.create({
                                        component: page,
                                        componentProps: properties,
                                        backdropDismiss: false
                                    })];
                                case 1:
                                    modal = _a.sent();
                                    modal
                                        .present()
                                        .then(function () {
                                        console.log('check modal presented');
                                    })
                                        .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_MODAL));
                                    modal
                                        .onDidDismiss()
                                        .then(function () {
                                        resolve();
                                    })
                                        .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_MODAL));
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    StartupChecksService.prototype.initChecks = function () {
        var _this = this;
        return new Promise(function (resolve) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _a, _b, check, e_1_1;
            var e_1, _c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 6, 7, 8]);
                        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.checks), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 5];
                        check = _b.value;
                        return [4 /*yield*/, check.check()];
                    case 2:
                        if (!(+(_d.sent()) !== +check.expectedOutcome)) return [3 /*break*/, 4];
                        return [4 /*yield*/, check.failureConsequence()];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    StartupChecksService.ɵfac = function StartupChecksService_Factory(t) { return new (t || StartupChecksService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_secure_storage_secure_storage_service__WEBPACK_IMPORTED_MODULE_7__["SecureStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_device_device_service__WEBPACK_IMPORTED_MODULE_5__["DeviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__["VaultStorageService"])); };
    StartupChecksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: StartupChecksService, factory: StartupChecksService.ɵfac, providedIn: 'root' });
    return StartupChecksService;
}());



/***/ }),

/***/ "hElH":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/local-authentication-onboarding/local-authentication-onboarding.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: LocalAuthenticationOnboardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalAuthenticationOnboardingPageModule", function() { return LocalAuthenticationOnboardingPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _local_authentication_onboarding_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-authentication-onboarding.page */ "LlJE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var routes = [
    {
        path: '',
        component: _local_authentication_onboarding_page__WEBPACK_IMPORTED_MODULE_5__["LocalAuthenticationOnboardingPage"]
    }
];
var LocalAuthenticationOnboardingPageModule = /** @class */ (function () {
    function LocalAuthenticationOnboardingPageModule() {
    }
    LocalAuthenticationOnboardingPageModule.ɵfac = function LocalAuthenticationOnboardingPageModule_Factory(t) { return new (t || LocalAuthenticationOnboardingPageModule)(); };
    LocalAuthenticationOnboardingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: LocalAuthenticationOnboardingPageModule });
    LocalAuthenticationOnboardingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return LocalAuthenticationOnboardingPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LocalAuthenticationOnboardingPageModule, { declarations: [_local_authentication_onboarding_page__WEBPACK_IMPORTED_MODULE_5__["LocalAuthenticationOnboardingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ }),

/***/ "iV4W":
/*!*******************************************************************!*\
  !*** ./src/app/services/secure-storage/secure-storage.service.ts ***!
  \*******************************************************************/
/*! exports provided: SecureStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureStorageService", function() { return SecureStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/capacitor-plugins/injection-tokens */ "Bpmc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var SecureStorageService = /** @class */ (function () {
    function SecureStorageService(securityUtils) {
        this.securityUtils = securityUtils;
    }
    SecureStorageService.prototype.isDeviceSecure = function () {
        return this.securityUtils.isDeviceSecure({
            alias: 'airgap-secure-storage',
            isParanoia: false
        });
    };
    SecureStorageService.prototype.secureDevice = function () {
        return this.securityUtils.secureDevice({
            alias: 'airgap-secure-storage',
            isParanoia: false
        });
    };
    SecureStorageService.prototype.get = function (alias, isParanoia) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var securityUtils;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        securityUtils = this.securityUtils;
                        return [4 /*yield*/, securityUtils.initStorage({
                                alias: alias,
                                isParanoia: isParanoia
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                init: function () {
                                    return securityUtils.initStorage({
                                        alias: alias,
                                        isParanoia: isParanoia
                                    });
                                },
                                setItem: function (key, value) {
                                    return securityUtils.setItem({
                                        alias: alias,
                                        isParanoia: isParanoia,
                                        key: key,
                                        value: value
                                    });
                                },
                                setupRecoveryPassword: function (key, value) {
                                    return securityUtils.setupRecoveryPassword({
                                        alias: alias,
                                        isParanoia: isParanoia,
                                        key: key,
                                        value: value
                                    });
                                },
                                getItem: function (key) {
                                    return securityUtils
                                        .getItem({
                                        alias: alias,
                                        isParanoia: isParanoia,
                                        key: key
                                    })
                                        .catch(function (error) {
                                        var errorMessage;
                                        if (typeof error === 'string') {
                                            errorMessage = error;
                                        }
                                        else if (error instanceof Object && typeof error.message === 'string') {
                                            errorMessage = error.message;
                                        }
                                        if (errorMessage && errorMessage.toLowerCase().includes('item corrupted')) {
                                            throw new Error('Could not read from the secure storage.');
                                        }
                                        if (errorMessage && errorMessage.toLowerCase().includes('wrong paranoia password')) {
                                            throw new Error('Wrong passphrase.');
                                        }
                                        throw error;
                                    });
                                },
                                removeItem: function (key) {
                                    return securityUtils.removeItem({
                                        alias: alias,
                                        isParanoia: isParanoia,
                                        key: key
                                    });
                                }
                            }];
                }
            });
        });
    };
    SecureStorageService.prototype.wipe = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Wipe the whole secure storage
                    return [4 /*yield*/, this.securityUtils.destroy()];
                    case 1:
                        // Wipe the whole secure storage
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SecureStorageService.ɵfac = function SecureStorageService_Factory(t) { return new (t || SecureStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_1__["SECURITY_UTILS_PLUGIN"])); };
    SecureStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SecureStorageService, factory: SecureStorageService.ɵfac, providedIn: 'root' });
    return SecureStorageService;
}());



/***/ }),

/***/ "iXoj":
/*!****************************************************************!*\
  !*** ./src/app/services/secure-storage/secure-storage.mock.ts ***!
  \****************************************************************/
/*! exports provided: SecureStorageServiceMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureStorageServiceMock", function() { return SecureStorageServiceMock; });
/* harmony import */ var _error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../error-handler/error-handler.service */ "626a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var SecureStorageServiceMock = /** @class */ (function () {
    function SecureStorageServiceMock() {
        this.isSecure = 1;
        console.log('SecureStorageServiceMock constructor');
    }
    SecureStorageServiceMock.prototype.isDeviceSecure = function () {
        var _this = this;
        return new Promise(function (resolve) {
            console.warn('SecureStorageServiceMock - This Device is NOT secured');
            resolve({ value: _this.isSecure });
        });
    };
    SecureStorageServiceMock.prototype.secureDevice = function () {
        return new Promise(function (resolve) {
            console.warn('SecureStorageServiceMock - This Device is NOT secured');
            resolve();
        });
    };
    SecureStorageServiceMock.prototype.get = function (alias, _isParanoia) {
        console.log('SecureStorageServiceMock - creating new storage', alias);
        var secureStorage = {
            init: function () {
                console.warn('SecureStorageServiceMock - init');
                return new Promise(function (resolve) {
                    resolve();
                });
            },
            setItem: function (key, value) {
                console.warn('SecureStorageServiceMock - setItem', key, value);
                localStorage.setItem(alias + '-' + key, value);
                return new Promise(function (resolve) {
                    resolve();
                });
            },
            getItem: function (key) {
                console.warn('SecureStorageServiceMock - getItem', key);
                var result = localStorage.getItem(alias + '-' + key);
                return new Promise(function (resolve) {
                    resolve({ value: result });
                });
            },
            setupRecoveryPassword: function (key, value) {
                console.warn('SecureStorageServiceMock - setupRecoveryPassword', key, value);
                var recoverString = ''; // TODO: mock it
                localStorage.setItem(alias + '-' + key + '_' + recoverString, value);
                return new Promise(function (resolve) {
                    resolve(recoverString);
                });
            },
            removeItem: function (key) {
                console.warn('SecureStorageServiceMock - removeItem', key);
                localStorage.removeItem(alias + '-' + key);
                return new Promise(function (resolve) {
                    resolve({});
                });
            }
        };
        return new Promise(function (resolve) {
            secureStorage
                .init()
                .then(function () {
                resolve(secureStorage);
            })
                .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_0__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_0__["ErrorCategory"].SECURE_STORAGE));
        });
    };
    SecureStorageServiceMock.prototype.wipe = function () {
        console.log("Deleting \"secure storage\" (browser).");
        localStorage.clear();
    };
    SecureStorageServiceMock.ɵfac = function SecureStorageServiceMock_Factory(t) { return new (t || SecureStorageServiceMock)(); };
    SecureStorageServiceMock.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SecureStorageServiceMock, factory: SecureStorageServiceMock.ɵfac, providedIn: 'root' });
    return SecureStorageServiceMock;
}());



/***/ }),

/***/ "j3ST":
/*!***********************************************************!*\
  !*** ./src/app/pages/introduction/introduction.module.ts ***!
  \***********************************************************/
/*! exports provided: IntroductionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionPageModule", function() { return IntroductionPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _introduction_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./introduction.page */ "DNNV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








var routes = [
    {
        path: '',
        component: _introduction_page__WEBPACK_IMPORTED_MODULE_5__["IntroductionPage"]
    }
];
var IntroductionPageModule = /** @class */ (function () {
    function IntroductionPageModule() {
    }
    IntroductionPageModule.ɵfac = function IntroductionPageModule_Factory(t) { return new (t || IntroductionPageModule)(); };
    IntroductionPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: IntroductionPageModule });
    IntroductionPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]] });
    return IntroductionPageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](IntroductionPageModule, { declarations: [_introduction_page__WEBPACK_IMPORTED_MODULE_5__["IntroductionPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "mqxi":
/*!*************************************************!*\
  !*** ./src/app/services/audio/audio.factory.ts ***!
  \*************************************************/
/*! exports provided: AudioServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioServiceFactory", function() { return AudioServiceFactory; });
/* harmony import */ var _audio_browser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio.browser.service */ "903B");
/* harmony import */ var _audio_native_servive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio.native.servive */ "n/+6");


function AudioServiceFactory(platform, permissionsService) {
    if (platform.is('hybrid')) {
        return new _audio_native_servive__WEBPACK_IMPORTED_MODULE_1__["AudioNativeService"](platform, permissionsService);
    }
    else {
        return new _audio_browser_service__WEBPACK_IMPORTED_MODULE_0__["AudioBrowserService"]();
    }
}


/***/ }),

/***/ "muji":
/*!**********************************************************!*\
  !*** ./src/app/services/camera/camera.native.service.ts ***!
  \**********************************************************/
/*! exports provided: CameraNativeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraNativeService", function() { return CameraNativeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/workers/entropyCalculatorWorker */ "PdrP");
/* harmony import */ var _entropy_IEntropyGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entropy/IEntropyGenerator */ "DT0N");
/* harmony import */ var _error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../error-handler/error-handler.service */ "626a");
/* harmony import */ var src_app_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/capacitor-plugins/injection-tokens */ "Bpmc");












var blobURL = window.URL.createObjectURL(new Blob([_assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_5__["default"]]));
var entropyCalculatorWorker = new Worker(blobURL);
var CameraNativeService = /** @class */ (function () {
    function CameraNativeService(platform, rendererFactory, permissionsService, cameraPreview) {
        var _this = this;
        this.platform = platform;
        this.rendererFactory = rendererFactory;
        this.permissionsService = permissionsService;
        this.cameraPreview = cameraPreview;
        this.disabled = false;
        this.cameraIsRunning = false; // Prevent multiple start/stops of camera
        this.cameraIsTakingPhoto = false; // Prevent stopping camera while picture is being taken
        // entropy settings
        this.VIDEO_SIZE = 50;
        this.VIDEO_QUALITY = 100;
        this.VIDEO_FREQUENCY = 2000;
        this.transparentHTMLClass = 'transparent';
        this.transparentTags = [];
        this.collectedEntropyPercentage = 0;
        this.renderer = this.rendererFactory.createRenderer(null, null);
        this.entropyObservable = rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            entropyCalculatorWorker.onmessage = function (event) {
                _this.collectedEntropyPercentage += event.data.entropyMeasure;
                observer.next({ entropyHex: event.data.entropyHex });
            };
            _this.handler = function (base64ImagePayload) {
                var buffer1 = _this.arrayBufferFromBase64(base64ImagePayload);
                entropyCalculatorWorker.postMessage({
                    entropyBuffer: buffer1
                }, [buffer1]);
            };
        });
    }
    Object.defineProperty(CameraNativeService.prototype, "transparentElements", {
        get: function () {
            var elementsByTags = this.transparentTags
                .map(function (tag) { return Array.from(document.getElementsByTagName(tag)); })
                .reduce(function (flatten, toFlatten) { return flatten.concat(toFlatten); });
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(elementsByTags, [
                document.body // fallback if no tags
            ]);
        },
        enumerable: false,
        configurable: true
    });
    CameraNativeService.prototype.setTransparentElementsByTags = function () {
        var tags = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tags[_i] = arguments[_i];
        }
        this.transparentTags = tags;
    };
    CameraNativeService.prototype.setCameraOptions = function (opts) {
        this.cameraOptions = opts;
    };
    CameraNativeService.prototype.viewWillLeave = function () {
        this.disabled = true;
        this.uninjectCSS();
    };
    CameraNativeService.prototype.viewWillEnter = function () {
        this.disabled = false;
    };
    CameraNativeService.prototype.start = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var permissionStatus;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disabled = false;
                        this.collectedEntropyPercentage = 0;
                        return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.permissionsService.hasCameraPermission()];
                    case 2:
                        permissionStatus = _a.sent();
                        if (permissionStatus !== _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["PermissionStatus"].GRANTED) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, this.initCamera()];
                }
            });
        });
    };
    CameraNativeService.prototype.getCollectedEntropyPercentage = function () {
        return this.collectedEntropyPercentage / 6;
    };
    CameraNativeService.prototype.setVideoElement = function (element) {
        console.log('only used in browser', element);
    };
    CameraNativeService.prototype.stop = function () {
        var _this = this;
        if (!this.cameraIsRunning) {
            console.log('CAMERA ALREADY STOPPED, ABORTING');
            this.uninjectCSS();
            return Promise.reject(null);
        }
        // We need to delay the stopCamera call because it crashes on iOS
        // if it is called while taking a photo
        if (this.cameraIsTakingPhoto) {
            this.uninjectCSS();
            return new Promise(function (resolve) {
                setTimeout(function () {
                    console.log('CAMERA IS TAKING PHOTO, DELAYING');
                    resolve(_this.stop());
                }, 200);
            });
        }
        this.uninjectCSS();
        if (this.cameraInterval) {
            clearInterval(this.cameraInterval);
        }
        return new Promise(function (_resolve, reject) {
            _this.cameraPreview.stop().then(function () {
                _this.cameraIsRunning = false;
                console.log('camera stopped.');
            }, function (error) {
                console.log('camera could not be stopped.');
                reject(error);
            });
        });
    };
    CameraNativeService.prototype.getEntropyUpdateObservable = function () {
        return this.entropyObservable;
    };
    CameraNativeService.prototype.initCamera = function () {
        var _this = this;
        console.log('initCamera');
        return new Promise(function (resolve) {
            _this.cameraPreview
                .start(Object.assign({
                camera: 'back',
                disableExifHeaderStripping: true
            }, _this.cameraOptions))
                .then(function () {
                _this.cameraIsRunning = true;
                return Promise.resolve();
            })
                .then(function () {
                if (_this.disabled) {
                    console.log('not starting, disabled');
                    if (_this.cameraIsRunning) {
                        _this.stop().catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["ErrorCategory"].CORDOVA_PLUGIN));
                    }
                    return;
                }
                console.log('camera started.');
                // inject css now
                _this.injectCSS();
                // start camera interval
                _this.cameraInterval = window.setInterval(function () {
                    _this.cameraIsTakingPhoto = true;
                    _this.cameraPreview
                        .capture({
                        width: _this.VIDEO_SIZE,
                        height: _this.VIDEO_SIZE,
                        quality: _this.VIDEO_QUALITY
                    })
                        .then(function (result) {
                        _this.cameraIsTakingPhoto = false;
                        if (_this.handler) {
                            _this.handler(result.value);
                        }
                    })
                        .catch(function (err) {
                        if (err === 'Camera not started') {
                            if (_this.cameraInterval) {
                                clearInterval(_this.cameraInterval);
                            }
                        }
                    });
                }, _this.VIDEO_FREQUENCY);
                resolve();
            }, function (error) {
                console.warn('startCamera error: ', error);
                if (error === 'Camera already started!') {
                    _this.stop()
                        .then(function () {
                        return _this.initCamera();
                    })
                        .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["ErrorCategory"].CORDOVA_PLUGIN));
                }
            });
        });
    };
    CameraNativeService.prototype.arrayBufferFromBase64 = function (base64) {
        var raw = window.atob(base64);
        var buffer = new ArrayBuffer(raw.length * 2);
        var bufView = new Uint8Array(buffer);
        for (var i = 0; i < raw.length; i++) {
            bufView[i] = raw.charCodeAt(i);
        }
        return buffer;
    };
    CameraNativeService.prototype.injectCSS = function () {
        var _this = this;
        // inject css
        this.transparentElements.forEach(function (element) { return _this.renderer.addClass(element, _this.transparentHTMLClass); });
    };
    CameraNativeService.prototype.uninjectCSS = function () {
        var _this = this;
        // removes injected css
        this.transparentElements.forEach(function (element) { return _this.renderer.removeClass(element, _this.transparentHTMLClass); });
    };
    CameraNativeService.ɵfac = function CameraNativeService_Factory(t) { return new (t || CameraNativeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_8__["CAMERA_PREVIEW_PLUGIN"])); };
    CameraNativeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CameraNativeService, factory: CameraNativeService.ɵfac, providedIn: 'root' });
    return CameraNativeService;
}());



/***/ }),

/***/ "n/+6":
/*!********************************************************!*\
  !*** ./src/app/services/audio/audio.native.servive.ts ***!
  \********************************************************/
/*! exports provided: AudioNativeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioNativeService", function() { return AudioNativeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/workers/entropyCalculatorWorker */ "PdrP");
/* harmony import */ var _entropy_IEntropyGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entropy/IEntropyGenerator */ "DT0N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");









var blobURL = window.URL.createObjectURL(new Blob([_assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_4__["default"]]));
var entropyCalculatorWorker = new Worker(blobURL);
var AudioNativeService = /** @class */ (function () {
    function AudioNativeService(platform, permissionsService) {
        var _this = this;
        this.platform = platform;
        this.permissionsService = permissionsService;
        this.ENTROPY_SIZE = 4096;
        this.collectedEntropyPercentage = 0;
        this.entropyObservable = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            entropyCalculatorWorker.onmessage = function (event) {
                _this.collectedEntropyPercentage += event.data.entropyMeasure;
                observer.next({
                    entropyHex: event.data.entropyHex
                });
            };
            _this.handler = function (audioStream) {
                var buffer1 = _this.arrayBufferFromIntArray(audioStream.data);
                entropyCalculatorWorker.postMessage({
                    entropyBuffer: buffer1
                }, [buffer1]);
            };
        });
    }
    AudioNativeService.prototype.start = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var permissionStatus;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.collectedEntropyPercentage = 0;
                        return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.permissionsService.hasMicrophonePermission()];
                    case 2:
                        permissionStatus = _a.sent();
                        if (permissionStatus !== _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["PermissionStatus"].GRANTED) {
                            return [2 /*return*/];
                        }
                        window.audioinput.start({
                            bufferSize: this.ENTROPY_SIZE
                        });
                        setTimeout(function () {
                            window.addEventListener('audioinput', _this.handler);
                        }, 1000);
                        console.log('audioinput created.');
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioNativeService.prototype.stop = function () {
        var _this = this;
        return new Promise(function (resolve) {
            console.log('removed audioinput listener');
            window.audioinput.stop();
            window.removeEventListener('audioinput', _this.handler);
            resolve();
        });
    };
    AudioNativeService.prototype.getEntropyUpdateObservable = function () {
        return this.entropyObservable;
    };
    AudioNativeService.prototype.arrayBufferFromIntArray = function (array) {
        var buffer = new ArrayBuffer(array.length * 2);
        var bufView = new Uint8Array(buffer);
        for (var i = 0; i < array.length; i++) {
            bufView[i] = Math.abs(array[i] * 10000);
        }
        return buffer;
    };
    AudioNativeService.prototype.getCollectedEntropyPercentage = function () {
        return this.collectedEntropyPercentage / 150;
    };
    AudioNativeService.ɵfac = function AudioNativeService_Factory(t) { return new (t || AudioNativeService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["PermissionsService"])); };
    AudioNativeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AudioNativeService, factory: AudioNativeService.ɵfac, providedIn: 'root' });
    return AudioNativeService;
}());



/***/ }),

/***/ "n7uL":
/*!******************************************!*\
  !*** ./src/assets/workers/hashWorker.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// self.importScripts('sha3.min.js') replaced to work in blob
var hashWorkerJS = "!function(){\"use strict\";function t(t,e,r){this.blocks=[],this.s=[],this.padding=e,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n)this.s[n]=0}function e(e,r,n){t.call(this,e,r,n)}var r=\"input is invalid type\",n=\"object\"==typeof window,i=n?window:{};i.JS_SHA3_NO_WINDOW&&(n=!1);var o=!n&&\"object\"==typeof self;!i.JS_SHA3_NO_NODE_JS&&\"object\"==typeof process&&process.versions&&process.versions.node?i=global:o&&(i=self);var s=!i.JS_SHA3_NO_COMMON_JS&&\"object\"==typeof module&&module.exports,a=\"function\"==typeof define&&define.amd,u=!i.JS_SHA3_NO_ARRAY_BUFFER&&\"undefined\"!=typeof ArrayBuffer,f=\"0123456789abcdef\".split(\"\"),c=[4,1024,262144,67108864],h=[0,8,16,24],p=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],d=[224,256,384,512],l=[128,256],y=[\"hex\",\"buffer\",\"arrayBuffer\",\"array\",\"digest\"],b={128:168,256:136};!i.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return\"[object Array]\"===Object.prototype.toString.call(t)}),!u||!i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return\"object\"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});for(var A=function(e,r,n){return function(i){return new t(e,r,e).update(i)[n]()}},v=function(e,r,n){return function(i,o){return new t(e,r,o).update(i)[n]()}},B=function(t,e,r){return function(e,n,i,o){return S[\"cshake\"+t].update(e,n,i,o)[r]()}},g=function(t,e,r){return function(e,n,i,o){return S[\"kmac\"+t].update(e,n,i,o)[r]()}},w=function(t,e,r,n){for(var i=0;i<y.length;++i){var o=y[i];t[o]=e(r,n,o)}return t},_=function(e,r){var n=A(e,r,\"hex\");return n.create=function(){return new t(e,r,e)},n.update=function(t){return n.create().update(t)},w(n,A,e,r)},k=[{name:\"keccak\",padding:[1,256,65536,16777216],bits:d,createMethod:_},{name:\"sha3\",padding:[6,1536,393216,100663296],bits:d,createMethod:_},{name:\"shake\",padding:[31,7936,2031616,520093696],bits:l,createMethod:function(e,r){var n=v(e,r,\"hex\");return n.create=function(n){return new t(e,r,n)},n.update=function(t,e){return n.create(e).update(t)},w(n,v,e,r)}},{name:\"cshake\",padding:c,bits:l,createMethod:function(e,r){var n=b[e],i=B(e,0,\"hex\");return i.create=function(i,o,s){return o||s?new t(e,r,i).bytepad([o,s],n):S[\"shake\"+e].create(i)},i.update=function(t,e,r,n){return i.create(e,r,n).update(t)},w(i,B,e,r)}},{name:\"kmac\",padding:c,bits:l,createMethod:function(t,r){var n=b[t],i=g(t,0,\"hex\");return i.create=function(i,o,s){return new e(t,r,o).bytepad([\"KMAC\",s],n).bytepad([i],n)},i.update=function(t,e,r,n){return i.create(t,r,n).update(e)},w(i,g,t,r)}}],S={},C=[],x=0;x<k.length;++x)for(var m=k[x],O=m.bits,z=0;z<O.length;++z){var N=m.name+\"_\"+O[z];if(C.push(N),S[N]=m.createMethod(O[z],m.padding),\"sha3\"!==m.name){var j=m.name+O[z];C.push(j),S[j]=S[N]}}t.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if(\"string\"!==n){if(\"object\"!==n)throw r;if(null===t)throw r;if(u&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||u&&ArrayBuffer.isView(t)))throw r;e=!0}for(var i,o,s=this.blocks,a=this.byteCount,f=t.length,c=this.blockCount,p=0,d=this.s;p<f;){if(this.reset)for(this.reset=!1,s[0]=this.block,i=1;i<c+1;++i)s[i]=0;if(e)for(i=this.start;p<f&&i<a;++p)s[i>>2]|=t[p]<<h[3&i++];else for(i=this.start;p<f&&i<a;++p)(o=t.charCodeAt(p))<128?s[i>>2]|=o<<h[3&i++]:o<2048?(s[i>>2]|=(192|o>>6)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):o<55296||o>=57344?(s[i>>2]|=(224|o>>12)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++p)),s[i>>2]|=(240|o>>18)<<h[3&i++],s[i>>2]|=(128|o>>12&63)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]);if(this.lastByteIndex=i,i>=a){for(this.start=i-a,this.block=s[c],i=0;i<c;++i)d[i]^=s[i];J(d),this.reset=!0}else this.start=i}return this}},t.prototype.encode=function(t,e){var r=255&t,n=1,i=[r];for(r=255&(t>>=8);r>0;)i.unshift(r),r=255&(t>>=8),++n;return e?i.push(n):i.unshift(n),this.update(i),i.length},t.prototype.encodeString=function(t){var e,n=typeof t;if(\"string\"!==n){if(\"object\"!==n)throw r;if(null===t)throw r;if(u&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||u&&ArrayBuffer.isView(t)))throw r;e=!0}var i=0,o=t.length;if(e)i=o;else for(var s=0;s<t.length;++s){var a=t.charCodeAt(s);a<128?i+=1:a<2048?i+=2:a<55296||a>=57344?i+=3:(a=65536+((1023&a)<<10|1023&t.charCodeAt(++s)),i+=4)}return i+=this.encode(8*i),this.update(t),i},t.prototype.bytepad=function(t,e){for(var r=this.encode(e),n=0;n<t.length;++n)r+=this.encodeString(t[n]);var i=e-r%e,o=[];return o.length=i,this.update(o),this},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex,r=this.blockCount,n=this.s;if(t[e>>2]|=this.padding[3&e],this.lastByteIndex===this.byteCount)for(t[0]=t[r],e=1;e<r+1;++e)t[e]=0;for(t[r-1]|=2147483648,e=0;e<r;++e)n[e]^=t[e];J(n)}},t.prototype.toString=t.prototype.hex=function(){this.finalize();for(var t,e=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a=\"\";s<n;){for(o=0;o<e&&s<n;++o,++s)t=r[o],a+=f[t>>4&15]+f[15&t]+f[t>>12&15]+f[t>>8&15]+f[t>>20&15]+f[t>>16&15]+f[t>>28&15]+f[t>>24&15];s%e==0&&(J(r),o=0)}return i&&(t=r[o],a+=f[t>>4&15]+f[15&t],i>1&&(a+=f[t>>12&15]+f[t>>8&15]),i>2&&(a+=f[t>>20&15]+f[t>>16&15])),a},t.prototype.arrayBuffer=function(){this.finalize();var t,e=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a=this.outputBits>>3;t=i?new ArrayBuffer(n+1<<2):new ArrayBuffer(a);for(var u=new Uint32Array(t);s<n;){for(o=0;o<e&&s<n;++o,++s)u[s]=r[o];s%e==0&&J(r)}return i&&(u[o]=r[o],t=t.slice(0,a)),t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.digest=t.prototype.array=function(){this.finalize();for(var t,e,r=this.blockCount,n=this.s,i=this.outputBlocks,o=this.extraBytes,s=0,a=0,u=[];a<i;){for(s=0;s<r&&a<i;++s,++a)t=a<<2,e=n[s],u[t]=255&e,u[t+1]=e>>8&255,u[t+2]=e>>16&255,u[t+3]=e>>24&255;a%r==0&&J(n)}return o&&(t=a<<2,e=n[s],u[t]=255&e,o>1&&(u[t+1]=e>>8&255),o>2&&(u[t+2]=e>>16&255)),u},(e.prototype=new t).finalize=function(){return this.encode(this.outputBits,!0),t.prototype.finalize.call(this)};var J=function(t){var e,r,n,i,o,s,a,u,f,c,h,d,l,y,b,A,v,B,g,w,_,k,S,C,x,m,O,z,N,j,J,M,H,I,R,E,U,V,F,D,W,Y,K,q,G,L,P,Q,T,X,Z,$,tt,et,rt,nt,it,ot,st,at,ut,ft,ct;for(n=0;n<48;n+=2)i=t[0]^t[10]^t[20]^t[30]^t[40],o=t[1]^t[11]^t[21]^t[31]^t[41],s=t[2]^t[12]^t[22]^t[32]^t[42],a=t[3]^t[13]^t[23]^t[33]^t[43],u=t[4]^t[14]^t[24]^t[34]^t[44],f=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],h=t[7]^t[17]^t[27]^t[37]^t[47],e=(d=t[8]^t[18]^t[28]^t[38]^t[48])^(s<<1|a>>>31),r=(l=t[9]^t[19]^t[29]^t[39]^t[49])^(a<<1|s>>>31),t[0]^=e,t[1]^=r,t[10]^=e,t[11]^=r,t[20]^=e,t[21]^=r,t[30]^=e,t[31]^=r,t[40]^=e,t[41]^=r,e=i^(u<<1|f>>>31),r=o^(f<<1|u>>>31),t[2]^=e,t[3]^=r,t[12]^=e,t[13]^=r,t[22]^=e,t[23]^=r,t[32]^=e,t[33]^=r,t[42]^=e,t[43]^=r,e=s^(c<<1|h>>>31),r=a^(h<<1|c>>>31),t[4]^=e,t[5]^=r,t[14]^=e,t[15]^=r,t[24]^=e,t[25]^=r,t[34]^=e,t[35]^=r,t[44]^=e,t[45]^=r,e=u^(d<<1|l>>>31),r=f^(l<<1|d>>>31),t[6]^=e,t[7]^=r,t[16]^=e,t[17]^=r,t[26]^=e,t[27]^=r,t[36]^=e,t[37]^=r,t[46]^=e,t[47]^=r,e=c^(i<<1|o>>>31),r=h^(o<<1|i>>>31),t[8]^=e,t[9]^=r,t[18]^=e,t[19]^=r,t[28]^=e,t[29]^=r,t[38]^=e,t[39]^=r,t[48]^=e,t[49]^=r,y=t[0],b=t[1],L=t[11]<<4|t[10]>>>28,P=t[10]<<4|t[11]>>>28,z=t[20]<<3|t[21]>>>29,N=t[21]<<3|t[20]>>>29,at=t[31]<<9|t[30]>>>23,ut=t[30]<<9|t[31]>>>23,Y=t[40]<<18|t[41]>>>14,K=t[41]<<18|t[40]>>>14,I=t[2]<<1|t[3]>>>31,R=t[3]<<1|t[2]>>>31,A=t[13]<<12|t[12]>>>20,v=t[12]<<12|t[13]>>>20,Q=t[22]<<10|t[23]>>>22,T=t[23]<<10|t[22]>>>22,j=t[33]<<13|t[32]>>>19,J=t[32]<<13|t[33]>>>19,ft=t[42]<<2|t[43]>>>30,ct=t[43]<<2|t[42]>>>30,et=t[5]<<30|t[4]>>>2,rt=t[4]<<30|t[5]>>>2,E=t[14]<<6|t[15]>>>26,U=t[15]<<6|t[14]>>>26,B=t[25]<<11|t[24]>>>21,g=t[24]<<11|t[25]>>>21,X=t[34]<<15|t[35]>>>17,Z=t[35]<<15|t[34]>>>17,M=t[45]<<29|t[44]>>>3,H=t[44]<<29|t[45]>>>3,C=t[6]<<28|t[7]>>>4,x=t[7]<<28|t[6]>>>4,nt=t[17]<<23|t[16]>>>9,it=t[16]<<23|t[17]>>>9,V=t[26]<<25|t[27]>>>7,F=t[27]<<25|t[26]>>>7,w=t[36]<<21|t[37]>>>11,_=t[37]<<21|t[36]>>>11,$=t[47]<<24|t[46]>>>8,tt=t[46]<<24|t[47]>>>8,q=t[8]<<27|t[9]>>>5,G=t[9]<<27|t[8]>>>5,m=t[18]<<20|t[19]>>>12,O=t[19]<<20|t[18]>>>12,ot=t[29]<<7|t[28]>>>25,st=t[28]<<7|t[29]>>>25,D=t[38]<<8|t[39]>>>24,W=t[39]<<8|t[38]>>>24,k=t[48]<<14|t[49]>>>18,S=t[49]<<14|t[48]>>>18,t[0]=y^~A&B,t[1]=b^~v&g,t[10]=C^~m&z,t[11]=x^~O&N,t[20]=I^~E&V,t[21]=R^~U&F,t[30]=q^~L&Q,t[31]=G^~P&T,t[40]=et^~nt&ot,t[41]=rt^~it&st,t[2]=A^~B&w,t[3]=v^~g&_,t[12]=m^~z&j,t[13]=O^~N&J,t[22]=E^~V&D,t[23]=U^~F&W,t[32]=L^~Q&X,t[33]=P^~T&Z,t[42]=nt^~ot&at,t[43]=it^~st&ut,t[4]=B^~w&k,t[5]=g^~_&S,t[14]=z^~j&M,t[15]=N^~J&H,t[24]=V^~D&Y,t[25]=F^~W&K,t[34]=Q^~X&$,t[35]=T^~Z&tt,t[44]=ot^~at&ft,t[45]=st^~ut&ct,t[6]=w^~k&y,t[7]=_^~S&b,t[16]=j^~M&C,t[17]=J^~H&x,t[26]=D^~Y&I,t[27]=W^~K&R,t[36]=X^~$&q,t[37]=Z^~tt&G,t[46]=at^~ft&et,t[47]=ut^~ct&rt,t[8]=k^~y&A,t[9]=S^~b&v,t[18]=M^~C&m,t[19]=H^~x&O,t[28]=Y^~I&E,t[29]=K^~R&U,t[38]=$^~q&L,t[39]=tt^~G&P,t[48]=ft^~et&nt,t[49]=ct^~rt&it,t[0]^=p[n],t[1]^=p[n+1]};if(s)module.exports=S;else{for(x=0;x<C.length;++x)i[C[x]]=S[C[x]];a&&define(function(){return S})}}();\nlet hashHex = ''\n\nself.onmessage = function (event) {\n  let hash = sha3_256.create()\n  hash.update(hashHex)\n\n  if (event.data.call === 'init') {\n    console.log('init hash...', event.data.secureRandom.length)\n    hash.update(event.data.secureRandom)\n  }\n\n  if (event.data.call === 'update') {\n    hash.update(event.data.entropyHex)\n  }\n\n  if (event.data.call === 'digest') {\n    console.log('digesting hash...')\n    self.postMessage({hash: hash.hex()})\n  }\n\n  hashHex = hash.hex()\n}\n";
/* harmony default export */ __webpack_exports__["default"] = (hashWorkerJS);


/***/ }),

/***/ "ngeE":
/*!*********************************************************!*\
  !*** ./src/app/services/share-url/share-url.service.ts ***!
  \*********************************************************/
/*! exports provided: ShareUrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareUrlService", function() { return ShareUrlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _airgap_coinlib_core_serializer_v3_utils_generateId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @airgap/coinlib-core/serializer-v3/utils/generateId */ "0wz9");
/* harmony import */ var _airgap_coinlib_core_serializer_v3_utils_generateId__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_serializer_v3_utils_generateId__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _secrets_secrets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../secrets/secrets.service */ "ZxHC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







var ShareUrlService = /** @class */ (function () {
    function ShareUrlService(secretsService) {
        this.secretsService = secretsService;
        //
    }
    ShareUrlService.prototype.generateShareWalletURL = function (wallet) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var secret, accountShareResponse, deserializedTxSigningRequest;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                secret = this.secretsService.findByPublicKey(wallet.publicKey);
                accountShareResponse = {
                    publicKey: wallet.publicKey,
                    isExtendedPublicKey: wallet.isExtendedPublicKey,
                    derivationPath: wallet.derivationPath,
                    masterFingerprint: wallet.masterFingerprint,
                    isActive: wallet.status === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE,
                    groupId: (_a = secret.fingerprint) !== null && _a !== void 0 ? _a : '',
                    groupLabel: (_b = secret.label) !== null && _b !== void 0 ? _b : ''
                };
                deserializedTxSigningRequest = {
                    id: Object(_airgap_coinlib_core_serializer_v3_utils_generateId__WEBPACK_IMPORTED_MODULE_3__["generateId"])(8),
                    protocol: wallet.protocol.identifier,
                    type: _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].AccountShareResponse,
                    payload: accountShareResponse
                };
                if (deserializedTxSigningRequest.type === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].AccountShareResponse) {
                    deserializedTxSigningRequest.payload;
                }
                return [2 /*return*/, [deserializedTxSigningRequest]];
            });
        });
    };
    ShareUrlService.prototype.generateShareSecretsURL = function (secrets) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var deserializedTxSigningRequests;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                deserializedTxSigningRequests = Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["flattened"])(secrets.map(function (secret) {
                    return secret.wallets
                        .filter(function (wallet) { return wallet.status !== _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].DELETED; })
                        .map(function (wallet) {
                        var accountShareResponse = {
                            publicKey: wallet.publicKey,
                            isExtendedPublicKey: wallet.isExtendedPublicKey,
                            derivationPath: wallet.derivationPath,
                            masterFingerprint: wallet.masterFingerprint,
                            isActive: wallet.status === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE,
                            groupId: secret.fingerprint,
                            groupLabel: secret.label
                        };
                        return {
                            id: Object(_airgap_coinlib_core_serializer_v3_utils_generateId__WEBPACK_IMPORTED_MODULE_3__["generateId"])(8),
                            protocol: wallet.protocol.identifier,
                            type: _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].AccountShareResponse,
                            payload: accountShareResponse
                        };
                    });
                }));
                return [2 /*return*/, deserializedTxSigningRequests];
            });
        });
    };
    ShareUrlService.ɵfac = function ShareUrlService_Factory(t) { return new (t || ShareUrlService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_4__["SecretsService"])); };
    ShareUrlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ShareUrlService, factory: ShareUrlService.ɵfac, providedIn: 'root' });
    return ShareUrlService;
}());



/***/ }),

/***/ "o0it":
/*!***************************************************!*\
  !*** ./src/app/services/camera/camera.factory.ts ***!
  \***************************************************/
/*! exports provided: CameraFactoryDepHolder, CameraFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraFactoryDepHolder", function() { return CameraFactoryDepHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraFactory", function() { return CameraFactory; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _camera_browser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera.browser.service */ "8koN");
/* harmony import */ var _camera_native_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camera.native.service */ "muji");
/* harmony import */ var src_app_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/capacitor-plugins/injection-tokens */ "Bpmc");









var CameraFactoryDepHolder = /** @class */ (function () {
    function CameraFactoryDepHolder(platform, rendererFactory, permissionsService, cameraPreview) {
        this.platform = platform;
        this.rendererFactory = rendererFactory;
        this.permissionsService = permissionsService;
        this.cameraPreview = cameraPreview;
    }
    CameraFactoryDepHolder.ɵfac = function CameraFactoryDepHolder_Factory(t) { return new (t || CameraFactoryDepHolder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_5__["CAMERA_PREVIEW_PLUGIN"])); };
    CameraFactoryDepHolder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CameraFactoryDepHolder, factory: CameraFactoryDepHolder.ɵfac });
    return CameraFactoryDepHolder;
}());

function CameraFactory(depHolder) {
    if (depHolder.platform.is('hybrid')) {
        return new _camera_native_service__WEBPACK_IMPORTED_MODULE_4__["CameraNativeService"](depHolder.platform, depHolder.rendererFactory, depHolder.permissionsService, depHolder.cameraPreview);
    }
    else {
        return new _camera_browser_service__WEBPACK_IMPORTED_MODULE_3__["CameraBrowserService"]();
    }
}


/***/ }),

/***/ "oCjk":
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/*! exports provided: generateGUID, to, partition, parseIACUrl, serializedDataToUrlString, toBoolean, assertNever, toHexString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGUID", function() { return generateGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to", function() { return to; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseIACUrl", function() { return parseIACUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializedDataToUrlString", function() { return serializedDataToUrlString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return toBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return assertNever; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHexString", function() { return toHexString; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

// https://stackoverflow.com/a/8472700/4790610
function generateGUID() {
    // tslint:disable
    if (typeof window.crypto !== 'undefined' && typeof window.crypto.getRandomValues !== 'undefined') {
        // If we have a cryptographically secure PRNG, use that
        // https://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
        var buf = new Uint16Array(8);
        window.crypto.getRandomValues(buf);
        var S4 = function (num) {
            var ret = num.toString(16);
            while (ret.length < 4) {
                ret = '0' + ret;
            }
            return ret;
        };
        return S4(buf[0]) + S4(buf[1]) + '-' + S4(buf[2]) + '-' + S4(buf[3]) + '-' + S4(buf[4]) + '-' + S4(buf[5]) + S4(buf[6]) + S4(buf[7]);
    }
    else {
        // Otherwise, just use Math.random
        // https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0;
            var v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    // tslint:enable
}
function to(promise, errorExt) {
    return promise
        .then(function (data) { return [null, data]; })
        .catch(function (err) {
        if (errorExt) {
            Object.assign(err, errorExt);
        }
        return [err, undefined];
    });
}
function partition(array, isValid) {
    var pass = [];
    var fail = [];
    array.forEach(function (element) {
        if (isValid(element)) {
            pass.push(element);
        }
        else {
            fail.push(element);
        }
    });
    return [pass, fail];
}
function readParameterFromUrl(url, parameter) {
    try {
        var parsedUrl = new URL(url);
        return parsedUrl.searchParams.get(parameter) || '';
    }
    catch (error) {
        return url;
    }
}
function parseIACUrl(url, parameter) {
    var result;
    if (Array.isArray(url)) {
        result = url.map(function (chunk) { return readParameterFromUrl(chunk, parameter); });
    }
    else {
        try {
            result = readParameterFromUrl(url, parameter).split(',');
        }
        catch (error) {
            result = url.split(',');
        }
    }
    // In case one of the elements contains a chunked string, we have to flatten it.
    result = result.reduce(function (pv, cv) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(pv, cv.split(',')); }, []);
    return result.filter(function (el) { return el !== ''; });
}
function serializedDataToUrlString(data, host, parameter) {
    if (host === void 0) { host = 'airgap-wallet://'; }
    if (parameter === void 0) { parameter = 'd'; }
    return host + "?" + parameter + "=" + (Array.isArray(data) ? data.join(',') : data);
}
function toBoolean(value) {
    // All falsy and truthy values can be converted to a real boolean by using a double negative (!!)
    return !!value;
}
function assertNever(name, arg) {
    throw new Error(name + " " + arg);
}
var toHexString = function (bytes) { return bytes.reduce(function (str, byte) { return str + byte.toString(16).padStart(2, '0'); }, ''); };


/***/ }),

/***/ "r+JB":
/*!***********************************************************!*\
  !*** ./src/app/services/navigation/navigation.service.ts ***!
  \***********************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");








var NavigationService = /** @class */ (function () {
    function NavigationService(router, location, navCtrl) {
        this.router = router;
        this.location = location;
        this.navCtrl = navCtrl;
        this.state = {};
    }
    NavigationService.prototype.routeWithIdentifiableObject = function (router, route, object) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, router.navigate([route, object.getIdentifier()])];
            });
        });
    };
    NavigationService.prototype.route = function (route) {
        return this.router.navigateByUrl(route);
    };
    NavigationService.prototype.routeWithState = function (route, object, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.state = object;
                return [2 /*return*/, this.router.navigateByUrl(route, options)];
            });
        });
    };
    NavigationService.prototype.back = function () {
        this.location.back();
    };
    NavigationService.prototype.routeBack = function (route) {
        this.navCtrl.navigateBack(route);
    };
    NavigationService.prototype.getState = function () {
        return this.state;
    };
    NavigationService.prototype.routeToAccountsTab = function (clearStack) {
        if (clearStack === void 0) { clearStack = false; }
        return this.router.navigateByUrl('/tabs/tab-accounts', { replaceUrl: clearStack });
    };
    NavigationService.prototype.routeToScanTab = function (clearStack) {
        if (clearStack === void 0) { clearStack = false; }
        return this.router.navigateByUrl('/tabs/tab-scan', { replaceUrl: clearStack });
    };
    NavigationService.prototype.routeToSettingsTab = function (clearStack) {
        if (clearStack === void 0) { clearStack = false; }
        return this.router.navigateByUrl('/tabs/tab-settings', { replaceUrl: clearStack });
    };
    NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"])); };
    NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });
    return NavigationService;
}());



/***/ }),

/***/ "rYTG":
/*!*************************************************************!*\
  !*** ./src/app/services/interaction/interaction.service.ts ***!
  \*************************************************************/
/*! exports provided: InteractionCommunicationType, InteractionOperationType, InteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionCommunicationType", function() { return InteractionCommunicationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionOperationType", function() { return InteractionOperationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionService", function() { return InteractionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "oCjk");
/* harmony import */ var _error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-handler/error-handler.service */ "626a");
/* harmony import */ var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation/navigation.service */ "r+JB");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage/storage.service */ "E2f4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");










var InteractionCommunicationType;
(function (InteractionCommunicationType) {
    InteractionCommunicationType["QR"] = "qr";
    InteractionCommunicationType["DEEPLINK"] = "deeplink";
})(InteractionCommunicationType || (InteractionCommunicationType = {}));
var InteractionOperationType;
(function (InteractionOperationType) {
    InteractionOperationType["WALLET_SYNC"] = "walletSync";
    InteractionOperationType["TRANSACTION_BROADCAST"] = "transactionBroadcast";
    InteractionOperationType["MESSAGE_SIGN_REQUEST"] = "messageSignRequest";
})(InteractionOperationType || (InteractionOperationType = {}));
var InteractionService = /** @class */ (function () {
    function InteractionService(navigationService, deepLinkService, storageService) {
        this.navigationService = navigationService;
        this.deepLinkService = deepLinkService;
        this.storageService = storageService;
    }
    InteractionService.prototype.startInteraction = function (interactionOptions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var interactionType;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.get(_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["VaultStorageKey"].INTERACTION_TYPE)];
                    case 1:
                        interactionType = _a.sent();
                        if (interactionOptions.communicationType) {
                            if (interactionType === _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["InteractionType"].UNDETERMINED) {
                                this.goToInteractionSelectionSettingsPage(interactionOptions);
                            }
                            if (interactionOptions.communicationType === InteractionCommunicationType.DEEPLINK) {
                                this.startDeeplink(interactionOptions.iacMessage);
                            }
                            else if (interactionOptions.communicationType === InteractionCommunicationType.QR) {
                                this.navigateToPageByOperationType(interactionOptions);
                            }
                        }
                        else {
                            switch (interactionType) {
                                case _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["InteractionType"].UNDETERMINED:
                                    this.goToInteractionSelectionPage(interactionOptions);
                                    break;
                                case _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["InteractionType"].ALWAYS_ASK:
                                    this.goToInteractionSelectionPage(interactionOptions);
                                    break;
                                case _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["InteractionType"].DEEPLINK:
                                    this.startDeeplink(interactionOptions.iacMessage);
                                    break;
                                case _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["InteractionType"].QR_CODE:
                                    this.navigateToPageByOperationType(interactionOptions);
                                    break;
                                default:
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InteractionService.prototype.goToInteractionSelectionPage = function (interactionOptions) {
        this.navigationService
            .routeWithState('/interaction-selection', { interactionOptions: interactionOptions })
            .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
    };
    InteractionService.prototype.goToInteractionSelectionSettingsPage = function (interactionOptions) {
        this.navigationService
            .routeWithState('/interaction-selection-settings', { interactionOptions: interactionOptions })
            .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
    };
    InteractionService.prototype.navigateToPageByOperationType = function (interactionOptions) {
        if (interactionOptions.operationType === InteractionOperationType.WALLET_SYNC) {
            this.navigationService
                .routeWithState('/account-share', { interactionUrl: interactionOptions.iacMessage })
                .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
        }
        else if (interactionOptions.operationType === InteractionOperationType.TRANSACTION_BROADCAST) {
            this.navigationService
                .routeWithState('/transaction-signed', {
                interactionUrl: interactionOptions.iacMessage,
                wallets: interactionOptions.wallets,
                signedTxs: interactionOptions.signedTxs,
                transactions: interactionOptions.transactions,
                translationKey: 'transaction-signed'
            })
                .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
        }
        else if (interactionOptions.operationType === InteractionOperationType.MESSAGE_SIGN_REQUEST) {
            this.navigationService
                .routeWithState('/transaction-signed', {
                interactionUrl: interactionOptions.iacMessage,
                translationKey: 'message-signing-request',
                messageSignResponse: interactionOptions.messageSignResponse
            })
                .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
        }
        else {
            return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["assertNever"])('INVALID_OPERATION_TYPE', interactionOptions.operationType);
        }
    };
    InteractionService.prototype.startDeeplink = function (iacMessage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.deepLinkService
                    .sameDeviceDeeplink(iacMessage)
                    .then(function () {
                    _this.navigationService.routeToAccountsTab().catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
                })
                    .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].DEEPLINK_SERVICE));
                return [2 /*return*/];
            });
        });
    };
    InteractionService.ɵfac = function InteractionService_Factory(t) { return new (t || InteractionService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["DeeplinkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["VaultStorageService"])); };
    InteractionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: InteractionService, factory: InteractionService.ɵfac, providedIn: 'root' });
    return InteractionService;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



var routes = [
    { path: '', loadChildren: function () { return __webpack_require__.e(/*! import() | pages-tabs-tabs-module */ "pages-tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./pages/tabs/tabs.module */ "qiIP")).then(function (m) { return m.TabsPageModule; }); } },
    { path: 'tab-accounts', loadChildren: function () { return Promise.all(/*! import() | pages-tab-accounts-tab-accounts-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("default~pages-account-address-account-address-module~pages-account-share-select-account-share-select~034b9848"), __webpack_require__.e("default~pages-secret-edit-secret-edit-module~tab-accounts-tab-accounts-module"), __webpack_require__.e("tab-accounts-tab-accounts-module")]).then(__webpack_require__.bind(null, /*! ./pages/tab-accounts/tab-accounts.module */ "06lq")).then(function (m) { return m.TabAccountsPageModule; }); } },
    { path: 'tab-scan', loadChildren: function () { return __webpack_require__.e(/*! import() | pages-tab-scan-tab-scan-module */ "tab-scan-tab-scan-module").then(__webpack_require__.bind(null, /*! ./pages/tab-scan/tab-scan.module */ "MQ1u")).then(function (m) { return m.TabScanPageModule; }); } },
    { path: 'tab-settings', loadChildren: function () { return Promise.all(/*! import() | pages-tab-settings-tab-settings-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("tab-settings-tab-settings-module")]).then(__webpack_require__.bind(null, /*! ./pages/tab-settings/tab-settings.module */ "T2rt")).then(function (m) { return m.TabSettingsPageModule; }); } },
    { path: 'account-add', loadChildren: function () { return Promise.all(/*! import() | pages-account-add-account-add-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("pages-account-add-account-add-module")]).then(__webpack_require__.bind(null, /*! ./pages/account-add/account-add.module */ "+hnQ")).then(function (m) { return m.AccountAddPageModule; }); } },
    { path: 'secret-setup', loadChildren: function () { return __webpack_require__.e(/*! import() | pages-secret-setup-secret-setup-module */ "pages-secret-setup-secret-setup-module").then(__webpack_require__.bind(null, /*! ./pages/secret-setup/secret-setup.module */ "xijH")).then(function (m) { return m.SecretSetupPageModule; }); } },
    {
        path: 'secret-setup/initial',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-secret-setup-secret-setup-module */ "pages-secret-setup-secret-setup-module").then(__webpack_require__.bind(null, /*! ./pages/secret-setup/secret-setup.module */ "xijH")).then(function (m) { return m.SecretSetupPageModule; }); },
        data: { initial: true }
    },
    { path: 'secret-import', loadChildren: function () { return __webpack_require__.e(/*! import() | pages-secret-import-secret-import-module */ "pages-secret-import-secret-import-module").then(__webpack_require__.bind(null, /*! ./pages/secret-import/secret-import.module */ "JVMs")).then(function (m) { return m.SecretImportPageModule; }); } },
    { path: 'secret-add', loadChildren: function () { return Promise.all(/*! import() | pages-secret-add-secret-add-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("pages-secret-add-secret-add-module")]).then(__webpack_require__.bind(null, /*! ./pages/secret-add/secret-add.module */ "MjgD")).then(function (m) { return m.SecretAddPageModule; }); } },
    { path: 'secret-edit', loadChildren: function () { return Promise.all(/*! import() | pages-secret-edit-secret-edit-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("default~pages-secret-edit-secret-edit-module~tab-accounts-tab-accounts-module"), __webpack_require__.e("pages-secret-edit-secret-edit-module")]).then(__webpack_require__.bind(null, /*! ./pages/secret-edit/secret-edit.module */ "4WpI")).then(function (m) { return m.SecretEditPageModule; }); } },
    { path: 'warning-modal', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/warning-modal/warning-modal.module */ "bZdr")).then(function (m) { return m.WarningModalPageModule; }); } },
    { path: 'introduction', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/introduction/introduction.module */ "j3ST")).then(function (m) { return m.IntroductionPageModule; }); } },
    {
        path: 'distribution-onboarding',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/distribution-onboarding/distribution-onboarding.module */ "1hK3")).then(function (m) { return m.DistributionOnboardingPageModule; });
        }
    },
    { path: 'account-share', loadChildren: function () { return Promise.all(/*! import() | pages-account-share-account-share-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("pages-account-share-account-share-module")]).then(__webpack_require__.bind(null, /*! ./pages/account-share/account-share.module */ "TO0U")).then(function (m) { return m.AccountSharePageModule; }); } },
    {
        path: 'account-share-select',
        loadChildren: function () { return Promise.all(/*! import() | pages-account-share-select-account-share-select-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("default~pages-account-address-account-address-module~pages-account-share-select-account-share-select~034b9848"), __webpack_require__.e("pages-account-share-select-account-share-select-module")]).then(__webpack_require__.bind(null, /*! ./pages/account-share-select/account-share-select.module */ "dval")).then(function (m) { return m.AccountShareSelectPageModule; }); }
    },
    {
        path: 'account-address',
        loadChildren: function () { return Promise.all(/*! import() | pages-account-address-account-address-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("default~pages-account-address-account-address-module~pages-account-share-select-account-share-select~034b9848"), __webpack_require__.e("pages-account-address-account-address-module")]).then(__webpack_require__.bind(null, /*! ./pages/account-address/account-address.module */ "9MgY")).then(function (m) { return m.AccountAddressPageModule; }); }
    },
    {
        path: 'secret-generate',
        loadChildren: function () { return Promise.all(/*! import() | pages-secret-generate-secret-generate-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("pages-secret-generate-secret-generate-module")]).then(__webpack_require__.bind(null, /*! ./pages/secret-generate/secret-generate.module */ "mM4E")).then(function (m) { return m.SecretGeneratePageModule; }); }
    },
    { path: 'secret-rules', loadChildren: function () { return __webpack_require__.e(/*! import() | pages-secret-rules-secret-rules-module */ "pages-secret-rules-secret-rules-module").then(__webpack_require__.bind(null, /*! ./pages/secret-rules/secret-rules.module */ "BWF1")).then(function (m) { return m.SecretRulesPageModule; }); } },
    { path: 'secret-show', loadChildren: function () { return __webpack_require__.e(/*! import() | pages-secret-show-secret-show-module */ "pages-secret-show-secret-show-module").then(__webpack_require__.bind(null, /*! ./pages/secret-show/secret-show.module */ "2brG")).then(function (m) { return m.SecretShowPageModule; }); } },
    {
        path: 'secret-validate',
        loadChildren: function () { return Promise.all(/*! import() | pages-secret-validate-secret-validate-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("pages-secret-validate-secret-validate-module")]).then(__webpack_require__.bind(null, /*! ./pages/secret-validate/secret-validate.module */ "kq/g")).then(function (m) { return m.SecretValidatePageModule; }); }
    },
    { path: 'secret-edit', loadChildren: function () { return Promise.all(/*! import() | pages-secret-edit-secret-edit-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("default~pages-secret-edit-secret-edit-module~tab-accounts-tab-accounts-module"), __webpack_require__.e("pages-secret-edit-secret-edit-module")]).then(__webpack_require__.bind(null, /*! ./pages/secret-edit/secret-edit.module */ "4WpI")).then(function (m) { return m.SecretEditPageModule; }); } },
    { path: 'about', loadChildren: function () { return __webpack_require__.e(/*! import() | pages-about-about-module */ "pages-about-about-module").then(__webpack_require__.bind(null, /*! ./pages/about/about.module */ "UoYK")).then(function (m) { return m.AboutPageModule; }); } },
    {
        path: 'interaction-selection',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-interaction-selection-interaction-selection-module */ "pages-interaction-selection-interaction-selection-module").then(__webpack_require__.bind(null, /*! ./pages/interaction-selection/interaction-selection.module */ "bh/N")).then(function (m) { return m.InteractionSelectionPageModule; }); }
    },
    {
        path: 'interaction-selection-settings',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | pages-interaction-selection-settings-interaction-selection-settings-module */ "pages-interaction-selection-settings-interaction-selection-settings-module").then(__webpack_require__.bind(null, /*! ./pages/interaction-selection-settings/interaction-selection-settings.module */ "EeFB")).then(function (m) { return m.InteractionSelectionSettingsPageModule; });
        }
    },
    {
        path: 'local-authentication-onboarding',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/local-authentication-onboarding/local-authentication-onboarding.module */ "hElH")).then(function (m) { return m.LocalAuthenticationOnboardingPageModule; });
        }
    },
    {
        path: 'secret-generate-onboarding',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | pages-secret-generate-onboarding-secret-generate-onboarding-module */ "pages-secret-generate-onboarding-secret-generate-onboarding-module").then(__webpack_require__.bind(null, /*! ./pages/secret-generate-onboarding/secret-generate-onboarding.module */ "IH1m")).then(function (m) { return m.SecretGenerateOnboardingPageModule; });
        }
    },
    {
        path: 'social-recovery-import',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-social-recovery-import-social-recovery-import-module */ "pages-social-recovery-import-social-recovery-import-module").then(__webpack_require__.bind(null, /*! ./pages/social-recovery-import/social-recovery-import.module */ "CyH1")).then(function (m) { return m.SocialRecoveryImportPageModule; }); }
    },
    {
        path: 'social-recovery-setup',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-social-recovery-setup-social-recovery-setup-module */ "pages-social-recovery-setup-social-recovery-setup-module").then(__webpack_require__.bind(null, /*! ./pages/social-recovery-setup/social-recovery-setup.module */ "xc5B")).then(function (m) { return m.SocialRecoverySetupPageModule; }); }
    },
    {
        path: 'social-recovery-show-share',
        loadChildren: function () {
            return Promise.all(/*! import() | pages-social-recovery-show-share-social-recovery-show-share-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("pages-social-recovery-show-share-social-recovery-show-share-module")]).then(__webpack_require__.bind(null, /*! ./pages/social-recovery-show-share/social-recovery-show-share.module */ "FTY+")).then(function (m) { return m.SocialRecoveryShowSharePageModule; });
        }
    },
    {
        path: 'social-recovery-validate-share',
        loadChildren: function () {
            return Promise.all(/*! import() | pages-social-recovery-validate-share-social-recovery-validate-share-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("pages-social-recovery-validate-share-social-recovery-validate-share-module")]).then(__webpack_require__.bind(null, /*! ./pages/social-recovery-validate-share/social-recovery-validate-share.module */ "PPkV")).then(function (m) { return m.SocialRecoveryValidateSharePageModule; });
        }
    },
    {
        path: 'deserialized-detail',
        loadChildren: function () { return Promise.all(/*! import() | pages-deserialized-detail-deserialized-detail-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("common"), __webpack_require__.e("pages-deserialized-detail-deserialized-detail-module")]).then(__webpack_require__.bind(null, /*! ./pages/deserialized-detail/deserialized-detail.module */ "ob9J")).then(function (m) { return m.DeserializedDetailPageModule; }); }
    },
    {
        path: 'transaction-signed',
        loadChildren: function () { return Promise.all(/*! import() | pages-transaction-signed-transaction-signed-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("pages-transaction-signed-transaction-signed-module")]).then(__webpack_require__.bind(null, /*! ./pages/transaction-signed/transaction-signed.module */ "uMJp")).then(function (m) { return m.TransactionSignedPageModule; }); }
    },
    {
        path: 'bip85-generate',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-bip85-generate-bip85-generate-module */ "pages-bip85-generate-bip85-generate-module").then(__webpack_require__.bind(null, /*! ./pages/bip85-generate/bip85-generate.module */ "6bb3")).then(function (m) { return m.Bip85GeneratePageModule; }); }
    },
    {
        path: 'bip85-show',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-bip85-show-bip85-show-module */ "pages-bip85-show-bip85-show-module").then(__webpack_require__.bind(null, /*! ./pages/bip85-show/bip85-show.module */ "e0f4")).then(function (m) { return m.Bip85ShowPageModule; }); }
    },
    {
        path: 'select-account',
        loadChildren: function () { return Promise.all(/*! import() | pages-select-account-select-account-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("common"), __webpack_require__.e("pages-select-account-select-account-module")]).then(__webpack_require__.bind(null, /*! ./pages/select-account/select-account.module */ "SyBA")).then(function (m) { return m.SelectAccountPageModule; }); }
    },
    {
        path: 'qr-settings',
        loadChildren: function () { return Promise.all(/*! import() | pages-qr-settings-qr-settings-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("pages-qr-settings-qr-settings-module")]).then(__webpack_require__.bind(null, /*! ./pages/qr-settings/qr-settings.module */ "Fdfl")).then(function (m) { return m.QrSettingsPageModule; }); }
    },
    {
        path: 'migration',
        loadChildren: function () { return Promise.all(/*! import() | pages-migration-migration-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("default~pages-account-address-account-address-module~pages-account-share-select-account-share-select~034b9848"), __webpack_require__.e("pages-migration-migration-module")]).then(__webpack_require__.bind(null, /*! ./pages/migration/migration.module */ "VKpk")).then(function (m) { return m.MigrationPageModule; }); }
    },
    {
        path: 'danger-zone',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-danger-zone-danger-zone-module */ "pages-danger-zone-danger-zone-module").then(__webpack_require__.bind(null, /*! ./pages/danger-zone/danger-zone.module */ "fmil")).then(function (m) { return m.DangerZonePageModule; }); }
    },
    {
        path: 'secret-generate-dice',
        loadChildren: function () { return Promise.all(/*! import() | pages-secret-generate-dice-secret-generate-dice-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("pages-secret-generate-dice-secret-generate-dice-module")]).then(__webpack_require__.bind(null, /*! ./pages/secret-generate-dice/secret-generate-dice.module */ "05Nj")).then(function (m) { return m.SecretGenerateDicePageModule; }); }
    },
    {
        path: 'secret-generate-coin-flip',
        loadChildren: function () {
            return Promise.all(/*! import() | pages-secret-generate-coin-flip-secret-generate-coin-flip-module */[__webpack_require__.e("default~pages-account-add-account-add-module~pages-account-address-account-address-module~pages-acco~9c9be9b6"), __webpack_require__.e("pages-secret-generate-coin-flip-secret-generate-coin-flip-module")]).then(__webpack_require__.bind(null, /*! ./pages/secret-generate-coin-flip/secret-generate-coin-flip.module */ "tZ5r")).then(function (m) { return m.SecretGenerateCoinFlipPageModule; });
        }
    },
    {
        path: 'error-history',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-error-history-error-history-module */ "pages-error-history-error-history-module").then(__webpack_require__.bind(null, /*! ./pages/error-history/error-history.module */ "W5pq")).then(function (m) { return m.ErrorHistoryPageModule; }); }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"], relativeLinkResolution: 'corrected' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vgt4":
/*!*********************************************************!*\
  !*** ./src/app/services/gyroscope/gyroscope.factory.ts ***!
  \*********************************************************/
/*! exports provided: GyroscopeServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GyroscopeServiceFactory", function() { return GyroscopeServiceFactory; });
/* harmony import */ var _entropy_dummy_entropy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entropy/dummy.entropy.service */ "WwTs");
/* harmony import */ var _gyroscope_native_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gyroscope.native.service */ "zb04");


function GyroscopeServiceFactory(platform, deviceMotion) {
    if (platform.is('hybrid')) {
        return new _gyroscope_native_service__WEBPACK_IMPORTED_MODULE_1__["GyroscopeNativeService"](platform, deviceMotion);
    }
    else {
        return new _entropy_dummy_entropy_service__WEBPACK_IMPORTED_MODULE_0__["DummyEntropyService"]();
    }
}


/***/ }),

/***/ "wTY4":
/*!*********************************************!*\
  !*** ./src/app/services/iac/iac.service.ts ***!
  \*********************************************/
/*! exports provided: IACService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IACService", function() { return IACService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-handler/error-handler.service */ "626a");
/* harmony import */ var _interaction_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interaction/interaction.service */ "rYTG");
/* harmony import */ var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.service */ "r+JB");
/* harmony import */ var _secrets_secrets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../secrets/secrets.service */ "ZxHC");
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bitcoinjs-lib */ "WdoV");
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");













var IACService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IACService, _super);
    function IACService(uiEventService, uiEventElementsService, deeplinkService, protocolService, clipboard, navigationService, secretsService, interactionService, appConfig) {
        var _this = _super.call(this, uiEventElementsService, clipboard, secretsService.isReady(), [], deeplinkService, appConfig) || this;
        _this.uiEventService = uiEventService;
        _this.uiEventElementsService = uiEventElementsService;
        _this.deeplinkService = deeplinkService;
        _this.protocolService = protocolService;
        _this.clipboard = clipboard;
        _this.navigationService = navigationService;
        _this.secretsService = secretsService;
        _this.interactionService = interactionService;
        _this.serializerMessageHandlers[_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignRequest] = _this.handleUnsignedTransactions.bind(_this);
        _this.serializerMessageHandlers[_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].MessageSignRequest] = _this.handleMessageSignRequest.bind(_this);
        return _this;
    }
    IACService.prototype.relay = function (data) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                this.interactionService.startInteraction({
                    operationType: _interaction_interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionOperationType"].WALLET_SYNC,
                    iacMessage: (_a = data.messages) !== null && _a !== void 0 ? _a : data.rawString // TODO: Fix types
                });
                return [2 /*return*/];
            });
        });
    };
    IACService.prototype.handleUnsignedTransactions = function (signTransactionRequests, _transport, scanAgainCallback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var transactionInfos, cancelButton;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(signTransactionRequests.map(function (signTransactionRequest) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var unsignedTransaction, correctWallet, transaction, decodedPSBT, _a, _b, input, _c, _d, derivation, masterFingerprint, baseWallet, protocol;
                            var e_1, _e, e_2, _f;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_g) {
                                switch (_g.label) {
                                    case 0:
                                        unsignedTransaction = signTransactionRequest.payload;
                                        correctWallet = this.secretsService.findWalletByPublicKeyAndProtocolIdentifier(unsignedTransaction.publicKey, signTransactionRequest.protocol);
                                        if (!correctWallet && signTransactionRequest.protocol === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].BTC_SEGWIT) {
                                            transaction = unsignedTransaction.transaction;
                                            decodedPSBT = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__["Psbt"].fromHex(transaction.psbt);
                                            try {
                                                for (_a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(decodedPSBT.data.inputs), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                    input = _b.value;
                                                    try {
                                                        for (_c = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(input.bip32Derivation)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                                            derivation = _d.value;
                                                            masterFingerprint = derivation.masterFingerprint.toString('hex');
                                                            correctWallet = this.secretsService.findWalletByFingerprintDerivationPathAndProtocolIdentifier(masterFingerprint, signTransactionRequest.protocol, derivation.path, derivation.pubkey);
                                                            if (correctWallet) {
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                                    finally {
                                                        try {
                                                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                                                        }
                                                        finally { if (e_2) throw e_2.error; }
                                                    }
                                                    if (correctWallet) {
                                                        break;
                                                    }
                                                }
                                            }
                                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                            finally {
                                                try {
                                                    if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                                                }
                                                finally { if (e_1) throw e_1.error; }
                                            }
                                            if (correctWallet && !unsignedTransaction.publicKey) {
                                                unsignedTransaction.publicKey = correctWallet.publicKey; // PSBT txs don't include a public key, so we need to set it
                                            }
                                        }
                                        if (!correctWallet) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.activateWallet(correctWallet)];
                                    case 1:
                                        _g.sent();
                                        _g.label = 2;
                                    case 2:
                                        if (!!correctWallet) return [3 /*break*/, 5];
                                        baseWallet = this.secretsService.findBaseWalletByPublicKeyAndProtocolIdentifier(unsignedTransaction.publicKey, signTransactionRequest.protocol);
                                        if (!baseWallet) return [3 /*break*/, 5];
                                        return [4 /*yield*/, this.activateWallet(baseWallet)
                                            // If the protocol is not supported, use the base protocol for signing
                                        ];
                                    case 3:
                                        _g.sent();
                                        return [4 /*yield*/, this.protocolService.getProtocol(signTransactionRequest.protocol)];
                                    case 4:
                                        protocol = _g.sent();
                                        try {
                                            correctWallet = new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWallet"](protocol, baseWallet.publicKey, baseWallet.isExtendedPublicKey, baseWallet.derivationPath, baseWallet.masterFingerprint, baseWallet.status);
                                            correctWallet.addresses = baseWallet.addresses;
                                        }
                                        catch (e) {
                                            if (e.message === 'PROTOCOL_NOT_SUPPORTED') {
                                                correctWallet = baseWallet;
                                            }
                                        }
                                        _g.label = 5;
                                    case 5: return [2 /*return*/, {
                                            wallet: correctWallet,
                                            signTransactionRequest: signTransactionRequest
                                        }];
                                }
                            });
                        }); }))];
                    case 1:
                        transactionInfos = (_a.sent()).filter(function (signTransactionDetails) { return signTransactionDetails.wallet !== undefined; });
                        if (transactionInfos.length > 0) {
                            if (transactionInfos.length !== signTransactionRequests.length) {
                                // TODO: probably show error
                            }
                            this.navigationService
                                .routeWithState('deserialized-detail', {
                                transactionInfos: transactionInfos,
                                type: _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignRequest
                            })
                                .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
                            return [2 /*return*/, true];
                        }
                        else {
                            cancelButton = {
                                text: 'tab-wallets.no-secret_alert.okay_label',
                                role: 'cancel',
                                handler: function () {
                                    scanAgainCallback();
                                }
                            };
                            this.uiEventService.showTranslatedAlert({
                                header: 'tab-wallets.no-secret_alert.title',
                                message: 'tab-wallets.no-secret_alert.text',
                                buttons: [cancelButton]
                            });
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IACService.prototype.handleMessageSignRequest = function (messageDefinitionObjects, _transport, _scanAgainCallback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var transactionInfos;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(messageDefinitionObjects.map(function (messageDefinitionObject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var messageSignRequest, correctWallet, baseWallet, protocol;
                            var _a;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        messageSignRequest = messageDefinitionObject.payload;
                                        correctWallet = this.secretsService.findWalletByPublicKeyAndProtocolIdentifier(messageSignRequest.publicKey, messageDefinitionObject.protocol);
                                        if (!correctWallet) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.activateWallet(correctWallet)];
                                    case 1:
                                        _b.sent();
                                        _b.label = 2;
                                    case 2:
                                        if (!!correctWallet) return [3 /*break*/, 5];
                                        baseWallet = this.secretsService.findBaseWalletByPublicKeyAndProtocolIdentifier(messageSignRequest.publicKey, messageDefinitionObject.protocol);
                                        if (!baseWallet) return [3 /*break*/, 5];
                                        return [4 /*yield*/, this.activateWallet(baseWallet)
                                            // If the protocol is not supported, use the base protocol for signing
                                        ];
                                    case 3:
                                        _b.sent();
                                        return [4 /*yield*/, this.protocolService.getProtocol(messageDefinitionObject.protocol)];
                                    case 4:
                                        protocol = _b.sent();
                                        try {
                                            correctWallet = new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWallet"](protocol, baseWallet.publicKey, baseWallet.isExtendedPublicKey, baseWallet.derivationPath, baseWallet.masterFingerprint, baseWallet.status);
                                            correctWallet.addresses = baseWallet.addresses;
                                        }
                                        catch (e) {
                                            if (e.message === 'PROTOCOL_NOT_SUPPORTED') {
                                                correctWallet = baseWallet;
                                            }
                                        }
                                        _b.label = 5;
                                    case 5: return [2 /*return*/, {
                                            wallet: correctWallet,
                                            signTransactionRequest: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, messageDefinitionObject), { payload: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, messageSignRequest), { publicKey: (_a = correctWallet === null || correctWallet === void 0 ? void 0 : correctWallet.publicKey) !== null && _a !== void 0 ? _a : '' // ignore public key if no account has been found
                                                 }) })
                                        }];
                                }
                            });
                        }); }))];
                    case 1:
                        transactionInfos = _a.sent();
                        this.navigationService
                            .routeWithState('deserialized-detail', {
                            transactionInfos: transactionInfos,
                            type: _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].MessageSignRequest
                        })
                            .catch(Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorCategory"].IONIC_NAVIGATION));
                        return [2 /*return*/, true];
                }
            });
        });
    };
    IACService.prototype.activateWallet = function (wallet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (wallet.status === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE) {
                            return [2 /*return*/];
                        }
                        wallet.status = _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE;
                        return [4 /*yield*/, this.secretsService.updateWallet(wallet)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    IACService.ɵfac = function IACService_Factory(t) { return new (t || IACService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UiEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UiEventElementsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["DeeplinkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ProtocolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_6__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])); };
    IACService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: IACService, factory: IACService.ɵfac, providedIn: 'root' });
    return IACService;
}(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["BaseIACService"]));



/***/ }),

/***/ "xxnn":
/*!*********************************!*\
  !*** ./src/app/app.reducers.ts ***!
  \*********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");

var reducers = {};
function logger(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('previous state', state);
        console.log('action', action);
        console.log('next state', newState);
        console.groupEnd();
        return newState;
    };
}
var metaReducers = !src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [logger] : [];


/***/ }),

/***/ "yGLx":
/*!***************************************!*\
  !*** ./src/app/models/BIP39Signer.ts ***!
  \***************************************/
/*! exports provided: BIPSigner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BIPSigner", function() { return BIPSigner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bip39 */ "KckP");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-sha3 */ "HFX+");
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_sha3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var secrets_js_grempe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! secrets.js-grempe */ "Pn+L");
/* harmony import */ var secrets_js_grempe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(secrets_js_grempe__WEBPACK_IMPORTED_MODULE_3__);




var BIPSigner = /** @class */ (function () {
    function BIPSigner() {
        this.checkSumLength = 10;
    }
    BIPSigner.prototype.getOffsetMapping = function (share) {
        var shareWordCount = share.split(' ').length;
        switch (shareWordCount) {
            case 48:
                return { offset: 99, seedOffset: 64 };
            case 36:
                return { offset: 67, seedOffset: 42 };
            case 24:
                return { offset: 67, seedOffset: 32 };
            default:
                throw new Error('Currently only recovery of secrets with 48, 36 or 24 words are supported');
        }
    };
    BIPSigner.prototype.getRandomIntInclusive = function (min, max) {
        var randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        var randomNumber = randomBuffer[0] / (0xffffffff + 1);
        var ceilMin = Math.ceil(min);
        var floorMax = Math.floor(max);
        return Math.floor(randomNumber * (floorMax - ceilMin + 1)) + ceilMin;
    };
    BIPSigner.prototype.entropyToMnemonic = function (entropy) {
        return bip39__WEBPACK_IMPORTED_MODULE_1__["entropyToMnemonic"](entropy);
    };
    BIPSigner.prototype.mnemonicToEntropy = function (mnemonic) {
        var usedList = BIPSigner.determineWordList(mnemonic);
        if (!usedList) {
            throw Error('non-compatible secret');
        }
        return bip39__WEBPACK_IMPORTED_MODULE_1__["mnemonicToEntropy"](mnemonic, usedList);
    };
    BIPSigner.prototype.mnemonicToSeedSync = function (mnemonic, passphrase) {
        return bip39__WEBPACK_IMPORTED_MODULE_1__["mnemonicToSeedSync"](mnemonic, passphrase);
    };
    BIPSigner.prepareMnemonic = function (mnemonic) {
        return mnemonic.trim().toLowerCase();
    };
    BIPSigner.validateMnemonic = function (mnemonic) {
        var preparedMnemonic = BIPSigner.prepareMnemonic(mnemonic);
        var wordList = BIPSigner.determineWordList(preparedMnemonic);
        return bip39__WEBPACK_IMPORTED_MODULE_1__["validateMnemonic"](preparedMnemonic, wordList);
    };
    BIPSigner.determineWordList = function (mnemonic) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(BIPSigner.wordLists()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var list = _c.value;
                if (bip39__WEBPACK_IMPORTED_MODULE_1__["validateMnemonic"](BIPSigner.prepareMnemonic(mnemonic), list)) {
                    return list;
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
        return undefined;
    };
    BIPSigner.wordLists = function () {
        return [
            bip39__WEBPACK_IMPORTED_MODULE_1__["wordlists"].english
            /*
                  bip39.wordlists.chinese_simplified,
                  bip39.wordlists.chinese_traditional,
                  bip39.wordlists.french,
                  bip39.wordlists.italian,
                  bip39.wordlists.japanese,
                  bip39.wordlists.korean,
                  bip39.wordlists.spanish
                  */
        ];
    };
    BIPSigner.prototype.generateSocialRecover = function (secret, numberOfShares, threshold) {
        var _this = this;
        if (threshold > numberOfShares) {
            throw new Error('The threshold needs to be smaller or equal to the number or shares');
        }
        else if (numberOfShares < 2) {
            throw new Error('At least two shares are needed');
        }
        var secretDigester = js_sha3__WEBPACK_IMPORTED_MODULE_2__["sha3_256"].create();
        // TODO check if mnemoinc or secret
        var seed = bip39__WEBPACK_IMPORTED_MODULE_1__["mnemonicToEntropy"](secret);
        secretDigester.update(seed);
        var shares = secrets_js_grempe__WEBPACK_IMPORTED_MODULE_3___default.a.share(seed + secretDigester.hex().slice(0, this.checkSumLength), numberOfShares, threshold);
        var calculatedShares = [];
        for (var i = 0; i < shares.length; i++) {
            var paddedShare = shares[i].concat(Array(29)
                .fill(0)
                .map(function () { return _this.getRandomIntInclusive(0, 9); })
                .join(''));
            calculatedShares[i] = bip39__WEBPACK_IMPORTED_MODULE_1__["entropyToMnemonic"](paddedShare.slice(0, 64)) + " " + bip39__WEBPACK_IMPORTED_MODULE_1__["entropyToMnemonic"](paddedShare.slice(64, 128));
        }
        return calculatedShares;
    };
    BIPSigner.prototype.recoverKey = function (shares) {
        var offset = this.getOffsetMapping(shares[0]);
        var translatedShares = [];
        for (var i = 0; i < shares.length; i++) {
            var words = shares[i].split(' ');
            var firstHalf = words.slice(0, 24);
            var secondHalf = words.slice(24, words.length);
            translatedShares[i] = ("" + bip39__WEBPACK_IMPORTED_MODULE_1__["mnemonicToEntropy"](firstHalf.join(' ')) + bip39__WEBPACK_IMPORTED_MODULE_1__["mnemonicToEntropy"](secondHalf.join(' '))).substr(0, offset.offset);
        }
        var secretDigester = js_sha3__WEBPACK_IMPORTED_MODULE_2__["sha3_256"].create();
        var combine = secrets_js_grempe__WEBPACK_IMPORTED_MODULE_3___default.a.combine(translatedShares);
        var seed = combine.slice(0, -this.checkSumLength);
        secretDigester.update(seed);
        var checksum = secretDigester.hex().slice(0, this.checkSumLength);
        var checksum2 = combine.substr(-this.checkSumLength);
        if (checksum !== checksum2) {
            throw new Error('Checksum error, either the passed shares were generated for different secrets or the amount of shares is below the threshold');
        }
        return bip39__WEBPACK_IMPORTED_MODULE_1__["entropyToMnemonic"](seed);
    };
    return BIPSigner;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/compiler */ "1uSB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");

 // TODO: It looks like an incompatible dependency forces us to import this



if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "zb04":
/*!****************************************************************!*\
  !*** ./src/app/services/gyroscope/gyroscope.native.service.ts ***!
  \****************************************************************/
/*! exports provided: GyroscopeNativeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GyroscopeNativeService", function() { return GyroscopeNativeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/device-motion/ngx */ "sxZc");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/workers/entropyCalculatorWorker */ "PdrP");
/* harmony import */ var _entropy_IEntropyGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entropy/IEntropyGenerator */ "DT0N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");









var blobURL = window.URL.createObjectURL(new Blob([_assets_workers_entropyCalculatorWorker__WEBPACK_IMPORTED_MODULE_4__["default"]]));
var entropyCalculatorWorker = new Worker(blobURL);
var GyroscopeNativeService = /** @class */ (function () {
    function GyroscopeNativeService(platform, deviceMotion) {
        this.platform = platform;
        this.deviceMotion = deviceMotion;
        this.collectedEntropyPercentage = 0;
    }
    GyroscopeNativeService.prototype.start = function () {
        var _this = this;
        this.collectedEntropyPercentage = 0;
        return new Promise(function (resolve) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        this.entropyObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                            entropyCalculatorWorker.onmessage = function (event) {
                                _this.collectedEntropyPercentage += event.data.entropyMeasure;
                                observer.next({
                                    entropyHex: event.data.entropyHex
                                });
                            };
                            _this.gyroSubscription = _this.deviceMotion
                                .watchAcceleration({ frequency: 500 })
                                .subscribe(function (acceleration) {
                                var entropyBuffer = _this.arrayBufferFromIntArray([acceleration.x, acceleration.y, acceleration.z]);
                                entropyCalculatorWorker.postMessage({ entropyBuffer: entropyBuffer }, [entropyBuffer]);
                            });
                        });
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    GyroscopeNativeService.prototype.stop = function () {
        this.gyroSubscription.unsubscribe();
        return Promise.resolve();
    };
    GyroscopeNativeService.prototype.getEntropyUpdateObservable = function () {
        return this.entropyObservable;
    };
    GyroscopeNativeService.prototype.arrayBufferFromIntArray = function (array) {
        var buffer = new ArrayBuffer(array.length * 2);
        var bufView = new Uint8Array(buffer);
        for (var i = 0; i < array.length; i++) {
            bufView[i] = Math.abs(array[i] * 10000);
        }
        return buffer;
    };
    GyroscopeNativeService.prototype.getCollectedEntropyPercentage = function () {
        return this.collectedEntropyPercentage / 25;
    };
    GyroscopeNativeService.ɵfac = function GyroscopeNativeService_Factory(t) { return new (t || GyroscopeNativeService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_1__["DeviceMotion"])); };
    GyroscopeNativeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: GyroscopeNativeService, factory: GyroscopeNativeService.ɵfac, providedIn: 'root' });
    return GyroscopeNativeService;
}());



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map