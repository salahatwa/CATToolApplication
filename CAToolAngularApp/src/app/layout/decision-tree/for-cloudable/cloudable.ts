export class CloudableRule{
    cloudableRuleId:number;
    questionId:number;
    cloudableRule:String;
    executionOrder:number;
    questionText:String;
    CloudableRule(executionOrder){
        this.executionOrder=executionOrder;
    }
}