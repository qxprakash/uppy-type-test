"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@uppy/core");
var dashboard_1 = require("@uppy/dashboard");
var uppy = new core_1.default();
uppy.use(dashboard_1.default);
var dashboard = (_a = uppy.getPlugin('Dashboard')) === null || _a === void 0 ? void 0 : _a.openModal();
// Hover over dashboard to see its type
