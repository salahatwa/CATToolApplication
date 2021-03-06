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
var AssessmentQuestionsService = /** @class */ (function () {
    function AssessmentQuestionsService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8090/assessmentQuestions/deleteQuestions';
        this.updateUrl = 'http://localhost:8090/assessmentQuestions/updateQuestions/update';
        this.addUrl = 'http://localhost:8090/assessmentQuestions/saveAssessmentQuestions';
        // private addUrl1 ='http://localhost:8090/option/save';
        this.addUrl1 = 'http://localhost:8090/assessmentQuestions/saveAssessmentQuestions';
        this.comptransfer = new rxjs_1.BehaviorSubject("Hello");
        this.question = this.comptransfer.asObservable();
    }
    AssessmentQuestionsService.prototype.CollectData = function () {
        var url = 'http://localhost:8090/assessmentQuestions/getAllQuestions';
        return this.http.get(url);
    };
    AssessmentQuestionsService.prototype.deleteQuestion = function (questionId) {
        return this.http.delete(this.baseUrl + "/" + questionId, { responseType: 'text' });
    };
    AssessmentQuestionsService.prototype.updateQuestions = function (question) {
        return this.http.put("" + this.updateUrl, +"/update", question);
    };
    AssessmentQuestionsService.prototype.sendMsgtoOtherComponent = function (messsage) {
        this.comptransfer.next(messsage);
    };
    AssessmentQuestionsService.prototype.getMigrationData = function () {
        var url = 'http://localhost:8090/migrationRule/getAll';
        return this.http.get(url);
    };
    AssessmentQuestionsService.prototype.getCloudProviderData = function () {
        var url = 'http://localhost:8090/cloudProvider/getAll';
        return this.http.get(url);
    };
    AssessmentQuestionsService.prototype.createQuestionn = function (question) {
        // return this.http.post(`${this.addUrl}` + `/create`, question);
        var headers = new http_1.HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        //return this.http.post(`${this.addUrl1}` + `/create`, JSON.stringify(question),{headers:headers});
        return this.http.post("" + this.addUrl1 + "/create", question);
    };
    AssessmentQuestionsService.prototype.updateAssessmentQuestions = function (value) {
        console.log('################assessmentQuestions.service.');
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~' + ("" + this.updateUrl) + '~~~~~~~~~~~~~~~~~~~~~~~');
        return this.http.put("" + this.updateUrl, value);
    };
    AssessmentQuestionsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AssessmentQuestionsService);
    return AssessmentQuestionsService;
}());
exports.AssessmentQuestionsService = AssessmentQuestionsService;
//# sourceMappingURL=assessment-questions.service.js.map