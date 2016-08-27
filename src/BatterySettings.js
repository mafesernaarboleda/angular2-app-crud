"use strict";
var BatterySettings = (function () {
    function BatterySettings() {
    }
    Object.defineProperty(BatterySettings, "API_ENDPOINT", {
        get: function () { return 'http://localhost:8080/batteries911/battery/'; },
        enumerable: true,
        configurable: true
    });
    return BatterySettings;
}());
exports.BatterySettings = BatterySettings;
//# sourceMappingURL=batterySettings.js.map