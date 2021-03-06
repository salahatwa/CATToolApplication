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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
    }
    ServiceService.prototype.CollectData = function () {
        var reassessUrl = 'http://localhost:8090/application/getAllReassessment';
        return this.http.get(reassessUrl);
    };
    ServiceService.prototype.cloudProvider = function (applicationId) {
        var cloudProviderUrl = 'http://localhost:8090/application/cloudProviderCheck';
        console.log(cloudProviderUrl + "/" + applicationId);
        return this.http.get(cloudProviderUrl + "/" + applicationId);
    };
    ServiceService.prototype.migrationPattern = function (applicationId) {
        var migrationPatternUrl = 'http://localhost:8090/application/migrationCheck';
        console.log(migrationPatternUrl + "/" + applicationId);
        return this.http.get(migrationPatternUrl + "/" + applicationId);
    };
    ServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ServiceService);
    return ServiceService;
}());
exports.ServiceService = ServiceService;
//# sourceMappingURL=reassessment.service.js.map