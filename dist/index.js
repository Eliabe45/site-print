"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSite = void 0;
var puppeteer_1 = __importDefault(require("puppeteer"));
var defaultDefaultViewport = {
    width: 1366,
    height: 768,
};
var defaultPath = './image.png';
/**
 * @param {PrintSiteParams} params
 * @param path path to save the image to, should have .png extension
 */
function printSite(_a) {
    var url = _a.url, _b = _a.path, path = _b === void 0 ? defaultPath : _b, _c = _a.defaultViewport, defaultViewport = _c === void 0 ? defaultDefaultViewport : _c, _d = _a.fullPage, fullPage = _d === void 0 ? false : _d, mobile = _a.mobile;
    return __awaiter(this, void 0, void 0, function () {
        var userAgent, browser, page;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    userAgent = mobile
                        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
                        : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36';
                    return [4 /*yield*/, puppeteer_1.default.launch({
                            defaultViewport: defaultViewport,
                        })];
                case 1:
                    browser = _e.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _e.sent();
                    page.setUserAgent(userAgent);
                    return [4 /*yield*/, page.goto(url)];
                case 3:
                    _e.sent();
                    return [4 /*yield*/, page.screenshot({ path: path, type: 'png', fullPage: true })];
                case 4:
                    _e.sent();
                    return [4 /*yield*/, browser.close()];
                case 5:
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.printSite = printSite;
//# sourceMappingURL=index.js.map