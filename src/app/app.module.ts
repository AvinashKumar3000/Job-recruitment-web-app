import { QuestionService } from './service/question.service';
import { CompanyService } from './service/company.service';
import { StudentService } from './service/student.service';
import { RecruitmentService } from './service/recruitment.service';
import { AuthService } from './service/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTestQuestionsComponent } from './create-test-questions/create-test-questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentuiComponent } from './studentui/studentui.component';
import { StudentformComponent } from './studentform/studentform.component';
import { CompanyformComponent } from './companyform/companyform.component';
import { CompanyuiComponent } from './companyui/companyui.component';
import { HomeComponent } from './home/home.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeCompanyComponent } from './home-company/home-company.component';
import { NotificationComponent } from './notification/notification.component';
import { YourInfoComponent } from './your-info/your-info.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { JobsStudentComponent } from './jobs-student/jobs-student.component';
import { ProcessComponent } from './process/process.component';
import { DescriptionComponent } from './description/description.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { CompanyYourInfoComponent } from './company-your-info/company-your-info.component';
import { StudentSearchComponent } from './student-search/student-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTestQuestionsComponent,
    StudentuiComponent,
    StudentformComponent,
    CompanyformComponent,
    CompanyuiComponent,
    HomeComponent,
    HomeStudentComponent,
    HomeCompanyComponent,
    NotificationComponent,
    YourInfoComponent,
    AuthenticationComponent,
    JobsStudentComponent,
    ProcessComponent,
    DescriptionComponent,
    RecruitmentComponent,
    CompanyYourInfoComponent,
    StudentSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
    
  ],
  providers: [AuthService,RecruitmentService,StudentService,CompanyService,QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
