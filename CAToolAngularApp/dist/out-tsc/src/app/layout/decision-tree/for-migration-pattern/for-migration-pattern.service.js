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
var rxjs_1 = require("rxjs");
var ForMigrationPatternService = /** @class */ (function () {
    function ForMigrationPatternService(http) {
        this.http = http;
        this.migrationUrl = 'http://localhost:8090/migrationRule/setExceutionOrder';
        this.updateMigrationRuleUrl = 'http://localhost:8090/migrationRule/updateMigrationRule';
        this.comptransfer = new rxjs_1.BehaviorSubject("Hello");
        this.question = this.comptransfer.asObservable();
    }
    ForMigrationPatternService.prototype.CollectData = function () {
        var url = 'http://localhost:8090/migrationRule/getAll';
        return this.http.get(url);
    };
    ForMigrationPatternService.prototype.getAssessmentQuestions = function () {
        var url = 'http://localhost:8090/assessmentQuestions/getAllQuestions';
        return this.http.get(url);
    };
    ForMigrationPatternService.prototype.getMigrationQuestions = function (migrationId) {
        return this.http.get("http://localhost:8090/assessmentQuestions/getAllMigrationPattern/" + migrationId);
    };
    ForMigrationPatternService.prototype.updateMigrationRule = function (value) {
        return this.http.put("" + this.updateMigrationRuleUrl, value);
    };
    ForMigrationPatternService.prototype.saveEvaluationOrder = function (migration) {
        return this.http.post("" + this.migrationUrl + "/create", migration);
    };
    ForMigrationPatternService.prototype.sendMsgtoOtherComponent = function (messsage) {
        this.comptransfer.next(messsage);
    };
    ForMigrationPatternService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ForMigrationPatternService);
    return ForMigrationPatternService;
}());
exports.ForMigrationPatternService = ForMigrationPatternService;
//# sourceMappingURL=for-migration-pattern.service.js.map