"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
// print site full page
_1.printSite({
    url: 'https://www.facebook.com',
    defaultViewport: { width: 320, height: 480 },
    mobile: true,
    fullPage: true,
    path: './facebook.png',
});
_1.printSite({
    url: 'https://www.google.com',
    defaultViewport: { width: 320, height: 480 },
    mobile: true,
    fullPage: true,
    path: './google.png',
});
//# sourceMappingURL=example.js.map