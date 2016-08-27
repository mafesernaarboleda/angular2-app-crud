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
var battery_service_1 = require('../services/battery.service');
var BatteryComponent = (function () {
    function BatteryComponent(batteryService) {
        this.batteryService = batteryService;
        this.mode = 'Observable';
    }
    BatteryComponent.prototype.onSelect = function (cdBattery) {
        this.getBatteryDetails(cdBattery);
    };
    BatteryComponent.prototype.ngOnInit = function () { this.getBatteries(); };
    BatteryComponent.prototype.getBatteries = function () {
        var _this = this;
        this.batteryService.getBatteries()
            .subscribe(function (batteries) { return _this.batteries = batteries; }, function (error) { return _this.errorMessage = error; });
    };
    BatteryComponent.prototype.getBatteryDetails = function (cdBattery) {
        var _this = this;
        this.batteryService.getBatteryDetails(cdBattery)
            .subscribe(function (batteryDetails) { return _this.batteryDetails = batteryDetails; }, function (error) { return _this.errorMessage = error; });
    };
    BatteryComponent = __decorate([
        core_1.Component({
            selector: 'battery',
            template: '<ul><li *ngFor="let battery of batteries" [class.selected]="battery === selectBattery"><a  (click)="onSelect(battery.cdBattery)">{{ battery.dsBrand }}</a></li></ul><battery-details [battery]="batteryDetails"></battery-details>',
            providers: [battery_service_1.BatteryService]
        }), 
        __metadata('design:paramtypes', [battery_service_1.BatteryService])
    ], BatteryComponent);
    return BatteryComponent;
}());
exports.BatteryComponent = BatteryComponent;
//# sourceMappingURL=battery.component.js.map