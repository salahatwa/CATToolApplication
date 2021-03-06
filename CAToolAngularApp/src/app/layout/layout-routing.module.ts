import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from '../login/login.component';
// import { AuthGuard } from './shared';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'application', loadChildren: './application/application.module#ApplicationModule' },
            { path: 'assessment-questions', loadChildren: './assessment-questions/assessment-questions.module#AssessmentQuestionsModule' },
            { path: 'import-questions', loadChildren: './import-questions/import-questions.module#ImportQuestionsModule' },
            { path: 'report', loadChildren: './report/report.module#ReportModule' },
            { path: 'for-cloud-provider', loadChildren: './decision-tree/for-cloud-provider/for-cloud-provider.module#ForCloudProviderModule' },
            { path: 'for-cloudable', loadChildren: './decision-tree/for-cloudable/for-cloudable.module#ForCloudableModule' },
            { path: 'for-migration-pattern', loadChildren: './decision-tree/for-migration-pattern/for-migration-pattern.module#ForMigrationPatternModule' },
            { path: 'reassessment', loadChildren: './decision-tree/reassessment/reassessment.module#ReassessmentModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
