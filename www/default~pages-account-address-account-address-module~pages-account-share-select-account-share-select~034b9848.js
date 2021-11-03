(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-account-address-account-address-module~pages-account-share-select-account-share-select~034b9848"],{

/***/ "RYuY":
/*!************************************!*\
  !*** ./src/app/utils/migration.ts ***!
  \************************************/
/*! exports provided: isSecretMigrated, isWalletMigrated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSecretMigrated", function() { return isSecretMigrated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWalletMigrated", function() { return isWalletMigrated; });
function isSecretMigrated(secret) {
    return secret.fingerprint && secret.wallets.every(isWalletMigrated);
}
function isWalletMigrated(wallet) {
    return !!wallet.masterFingerprint;
}


/***/ }),

/***/ "RzJf":
/*!*********************************************************!*\
  !*** ./src/app/services/migration/migration.service.ts ***!
  \*********************************************************/
/*! exports provided: MigrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigrationService", function() { return MigrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bip32__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bip32 */ "sHUq");
/* harmony import */ var bip32__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bip32__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bip39 */ "KckP");
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bip39__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_secret__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/secret */ "C2ta");
/* harmony import */ var _utils_migration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/migration */ "RYuY");
/* harmony import */ var _error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error-handler/error-handler.service */ "626a");
/* harmony import */ var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navigation/navigation.service */ "r+JB");
/* harmony import */ var _secrets_secrets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../secrets/secrets.service */ "ZxHC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");












var MigrationService = /** @class */ (function () {
    function MigrationService(secretsService, navigationService) {
        this.secretsService = secretsService;
        this.navigationService = navigationService;
    }
    MigrationService.prototype.runSecretsMigration = function (secrets) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (secrets.every(_utils_migration__WEBPACK_IMPORTED_MODULE_5__["isSecretMigrated"])) {
                            resolve();
                        }
                        else {
                            _this.navigateToMigrationPage({ secrets: secrets }).then(resolve).catch(reject);
                        }
                    })];
            });
        });
    };
    MigrationService.prototype.runWalletsMigration = function (wallets) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (wallets.every(_utils_migration__WEBPACK_IMPORTED_MODULE_5__["isWalletMigrated"])) {
                            resolve();
                        }
                        else {
                            _this.navigateToMigrationPage({ wallets: wallets }).then(resolve).catch(reject);
                        }
                    })];
            });
        });
    };
    MigrationService.prototype.navigateToMigrationPage = function (navigationData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.navigationService
                            .routeWithState('/migration', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, navigationData), { onSuccess: resolve, onError: reject }))
                            .catch(function (error) {
                            Object(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["handleErrorLocal"])(_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorCategory"].IONIC_NAVIGATION)(error);
                            reject(error);
                        });
                    })];
            });
        });
    };
    MigrationService.prototype.filterMigratedSecrets = function (secrets) {
        // the migration is a one-time event, after it's run on every secret, they will stabilize on this condition
        if (secrets.every(_utils_migration__WEBPACK_IMPORTED_MODULE_5__["isSecretMigrated"])) {
            return [secrets, true];
        }
        return [secrets.filter(_utils_migration__WEBPACK_IMPORTED_MODULE_5__["isSecretMigrated"]), false];
    };
    MigrationService.prototype.filterMigratedWallets = function (wallets) {
        // the migration is a one-time event, after it's run on every wallet, they will stabilize on this condition
        if (wallets.every(_utils_migration__WEBPACK_IMPORTED_MODULE_5__["isWalletMigrated"])) {
            return [wallets, true];
        }
        return [wallets.filter(_utils_migration__WEBPACK_IMPORTED_MODULE_5__["isWalletMigrated"]), false];
    };
    MigrationService.prototype.deepFilterMigratedSecretsAndWallets = function (secrets) {
        var _this = this;
        // the migration is a one-time event, after it's run on every secret, they will stabilize on this condition
        if (secrets.every(_utils_migration__WEBPACK_IMPORTED_MODULE_5__["isSecretMigrated"])) {
            return [secrets, true];
        }
        // create a new array of migrated secrets with filtered wallets
        return [
            secrets
                .map(function (secret) {
                if (!secret.fingerprint) {
                    return undefined;
                }
                var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_this.filterMigratedWallets(secret.wallets), 1), migratedWallets = _a[0];
                if (migratedWallets.length === 0) {
                    return undefined;
                }
                var newSecret = _models_secret__WEBPACK_IMPORTED_MODULE_4__["MnemonicSecret"].init(secret);
                newSecret.wallets = migratedWallets;
                return newSecret;
            })
                .filter(function (secret) { return secret !== undefined; }),
            false
        ];
    };
    MigrationService.prototype.migrateSecret = function (secret, options) {
        if (options === void 0) { options = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var defaultOptions, resolvedOptions, mnemonic, entropy, seed, bip32Node, fingerprint;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        defaultOptions = {
                            persist: false
                        };
                        resolvedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultOptions), options);
                        if (!(secret.fingerprint === undefined)) return [3 /*break*/, 4];
                        mnemonic = resolvedOptions.mnemonic;
                        if (!(mnemonic === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.secretsService.retrieveEntropyForSecret(secret)];
                    case 1:
                        entropy = _a.sent();
                        mnemonic = Object(bip39__WEBPACK_IMPORTED_MODULE_3__["entropyToMnemonic"])(entropy);
                        _a.label = 2;
                    case 2: return [4 /*yield*/, Object(bip39__WEBPACK_IMPORTED_MODULE_3__["mnemonicToSeed"])(mnemonic)];
                    case 3:
                        seed = _a.sent();
                        bip32Node = Object(bip32__WEBPACK_IMPORTED_MODULE_2__["fromSeed"])(seed);
                        fingerprint = bip32Node.fingerprint.toString('hex');
                        secret.fingerprint = fingerprint;
                        _a.label = 4;
                    case 4:
                        if (!resolvedOptions.persist) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.secretsService.addOrUpdateSecret(secret, { setActive: false })];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    MigrationService.prototype.migrateWallet = function (wallet, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var defaultOptions, resolvedOptions, mnemonic, secret, entropy, publicKey, seed, bip32Node, fingerprint;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        defaultOptions = {
                            bip39Passphrase: '',
                            persist: false
                        };
                        resolvedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultOptions), options);
                        if (wallet.masterFingerprint && !resolvedOptions.persist) {
                            return [2 /*return*/];
                        }
                        mnemonic = resolvedOptions.mnemonic;
                        if (mnemonic === undefined || resolvedOptions.persist) {
                            secret = this.secretsService.findByPublicKey(wallet.publicKey);
                        }
                        if (!(mnemonic === undefined && secret !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.secretsService.retrieveEntropyForSecret(secret)];
                    case 1:
                        entropy = _a.sent();
                        mnemonic = Object(bip39__WEBPACK_IMPORTED_MODULE_3__["entropyToMnemonic"])(entropy);
                        return [3 /*break*/, 3];
                    case 2:
                        if (mnemonic === undefined) {
                            return [2 /*return*/];
                        }
                        _a.label = 3;
                    case 3: return [4 /*yield*/, wallet.protocol.getPublicKeyFromMnemonic(mnemonic, wallet.derivationPath, resolvedOptions.bip39Passphrase)];
                    case 4:
                        publicKey = _a.sent();
                        if (publicKey !== wallet.publicKey) {
                            throw new Error('Invalid BIP-39 Passphrase');
                        }
                        return [4 /*yield*/, Object(bip39__WEBPACK_IMPORTED_MODULE_3__["mnemonicToSeed"])(mnemonic, resolvedOptions.bip39Passphrase)];
                    case 5:
                        seed = _a.sent();
                        bip32Node = Object(bip32__WEBPACK_IMPORTED_MODULE_2__["fromSeed"])(seed);
                        fingerprint = bip32Node.fingerprint.toString('hex');
                        wallet.masterFingerprint = fingerprint;
                        wallet.status = _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["AirGapWalletStatus"].ACTIVE;
                        if (!(resolvedOptions.persist && secret !== undefined)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.migrateSecret(secret, { mnemonic: resolvedOptions.mnemonic, persist: resolvedOptions.persist })];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    MigrationService.ɵfac = function MigrationService_Factory(t) { return new (t || MigrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_secrets_secrets_service__WEBPACK_IMPORTED_MODULE_8__["SecretsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"])); };
    MigrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: MigrationService, factory: MigrationService.ɵfac, providedIn: 'root' });
    return MigrationService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-account-address-account-address-module~pages-account-share-select-account-share-select~034b9848.js.map