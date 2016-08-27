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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var BatteryService = (function () {
    function BatteryService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/batteries911/battery';
    }
    BatteryService.prototype.getBatteries = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BatteryService.prototype.getBatteryDetails = function (cdBattery) {
        var bodyPost = JSON.stringify({ "cdBattery": cdBattery });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.url + "/getById", bodyPost, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BatteryService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    BatteryService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    BatteryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BatteryService);
    return BatteryService;
}());
exports.BatteryService = BatteryService;
//# sourceMappingURL=battery.service.js.map