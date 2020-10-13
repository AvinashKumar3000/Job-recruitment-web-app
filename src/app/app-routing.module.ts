import { StudentSearchComponent } from './student-search/student-search.component';
import { CompanyYourInfoComponent } from './company-your-info/company-your-info.component';
import { DescriptionComponent } from './description/description.component';
import { ProcessComponent } from './process/process.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { CompanyuiComponent } from './companyui/companyui.component';
import { HomeCompanyComponent } from './home-company/home-company.component';
import { YourInfoComponent } from './your-info/your-info.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NotificationComponent } from './notification/notification.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { JobsStudentComponent } from './jobs-student/jobs-student.component';
import { CompanyformComponent } from './companyform/companyform.component';
import { StudentformComponent } from './studentform/studentform.component';
import { HomeComponent } from './home/home.component';
import { StudentuiComponent } from './studentui/studentui.component';
import { CreateTestQuestionsComponent } from './create-test-questions/create-test-questions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:"",component:HomeComponent},
  { path:"create-test-questions/:id",component:CreateTestQuestionsComponent},
  { path:"studentform",component:StudentformComponent},
  { path:"companyform",component:CompanyformComponent},
  { path:"recruitment",component:RecruitmentComponent,
  children:[
    {path:'',redirectTo:'process',pathMatch:'full'},
    {path:"process",component:ProcessComponent},
    {path:"description",component:DescriptionComponent}
  ]},
  { path:"studentui",component:StudentuiComponent,
  children: [
    { path: '', redirectTo: 'homeStudent', pathMatch: 'full' },
    { path:"jobsStudent",component:JobsStudentComponent},
    { path:"homeStudent",component:HomeStudentComponent},
    { path:"notification",component:NotificationComponent},
    { path:"authentication",component:AuthenticationComponent},
    { path:"yourInfo",component:YourInfoComponent}
  ]},
  { path:"companyui",component:CompanyuiComponent,
  children: [
    { path: '', redirectTo: 'homeCompany', pathMatch: 'full' },
    { path:"homeCompany",component:HomeCompanyComponent},
    { path:"authentication",component:AuthenticationComponent},
    { path:"companyYourInfo",component:CompanyYourInfoComponent},
    { path:"studentSearch",component:StudentSearchComponent},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
