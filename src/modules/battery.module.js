"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var battery_component_1 = require('../components/battery.component');
var batteries_details_component_1 = require('../components/batteries-details.component');
var BatteryModule = (function () {
    function BatteryModule() {
    }
    BatteryModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
            declarations: [battery_component_1.BatteryComponent, batteries_details_component_1.BatteryDetailsComponent],
            bootstrap: [battery_component_1.BatteryComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], BatteryModule);
    return BatteryModule;
}());
exports.BatteryModule = BatteryModule;
//# sourceMappingURL=battery.module.js.map