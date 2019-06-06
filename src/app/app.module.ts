import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import {AuthGuard} from './AuthGuard/auth-guard.service.guard';
import {NoAuthGuard}from './AuthGuard/no-auth-guard.service.guard';

import { MustMatchDirective } from './Helper/must-match.directive';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//Services
import { UserService } from './shared/services/user.service';
import { ApiService } from './shared/services/api.service';
import { JwtService } from './shared/services/jwt.service'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Layout/header/header.component'; 
import { SidemenuComponent } from './Layout/sidemenu/sidemenu.component';
import { LayoutComponent } from './Layout/layout.component';
import { LoginComponent } from './View/login/login.component';
import { ChangepasswordComponent } from './View/changepassword/changepassword.component';
import { ForgotpasswordComponent } from './View/forgotpassword/forgotpassword.component';
import { AdminhomeComponent } from './View/pages/admin/adminhome/adminhome.component';
import { UserhomeComponent } from './View/pages/user/userhome/userhome.component';
import { RecoverpasswordComponent } from './View/recoverpassword/recoverpassword.component';
import { ProfileComponent } from './View/profile/profile.component';
import { ResetpasswordComponent } from './View/resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidemenuComponent,
    LayoutComponent,
    LoginComponent,
    MustMatchDirective,
    AdminhomeComponent,
    UserhomeComponent,

    ChangepasswordComponent,
    ForgotpasswordComponent,
    RecoverpasswordComponent,
    ProfileComponent,
    ChangepasswordComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule,
    HttpModule,
    FormsModule,ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot()

  ],
  providers: [
    ApiService,
    UserService,
    AuthGuard,
    NoAuthGuard,
    JwtService, {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
      
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
