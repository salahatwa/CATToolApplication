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
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var Angular5_csv_1 = require("angular5-csv/Angular5-csv");
var application_service_1 = require("../application/application.service");
var ReportComponent = /** @class */ (function () {
    function ReportComponent(router, applicationService, http) {
        this.router = router;
        this.applicationService = applicationService;
        this.http = http;
        this.application = [];
        this.AllData = [];
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.applicationService.CollectData().subscribe(function (result) {
            _this.AllData = result;
            console.log(JSON.stringify(_this.AllData));
        });
    };
    ReportComponent.prototype.exportCsv = function () {
        var csvRows = [];
        console.log(this.AllData);
        var filename = "Application";
        var dateNow = new Date();
        console.log(dateNow.getDate().toString + " Date");
        console.log(dateNow.getDay().toString + " day");
        console.log(dateNow.getMonth().toString + " month");
        console.log(dateNow.getFullYear().toString + " year");
        for (var index = 0; index < this.AllData.length; index++) {
            console.log(this.AllData[index].applicationId + "id");
            this.application[index] = this.AllData[index];
        }
        console.log(this.application);
        var options = {
            headers: ["ApplicationId", "Application Name", "Application Description", "IsCloudable", "MigrationPattern",
                "CloudProvider", "IsAssessment", "IsFinalized", "IsDeleted", "IsDeactivated", "DeleteDateAndTime",
                "Isverified", "CreatedDate", "ModifiedDateTime", "CreatedBy", "ModifiedBy", "UserId", "IsSaved"]
        };
        new Angular5_csv_1.Angular5Csv(this.application, filename, options);
    };
    ReportComponent = __decorate([
        core_1.Component({
            selector: 'app-report',
            templateUrl: './report.component.html',
            styleUrls: ['./report.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router, application_service_1.ApplicationService, http_1.HttpClient])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=report.component.js.map