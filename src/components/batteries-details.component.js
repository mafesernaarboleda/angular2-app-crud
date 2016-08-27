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
var battery_1 = require('./battery');
var BatteryDetailsComponent = (function () {
    function BatteryDetailsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', battery_1.Battery)
    ], BatteryDetailsComponent.prototype, "battery", void 0);
    BatteryDetailsComponent = __decorate([
        core_1.Component({
            selector: 'battery-details',
            template: '<div *ngIf="battery"><h2>{{battery.cdBattery}} details!</h2></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], BatteryDetailsComponent);
    return BatteryDetailsComponent;
}());
exports.BatteryDetailsComponent = BatteryDetailsComponent;
//# sourceMappingURL=batteries-details.component.js.map