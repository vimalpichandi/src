import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Layout/header/header.component'; 
import { SidemenuComponent } from './Layout/sidemenu/sidemenu.component';
import { LayoutComponent } from './Layout/layout.component';
import { LoginComponent } from './View/login/login.component';
import { PasswordComponent } from './View/password/password.component';
import { ForgotpasswordComponent } from './View/forgotpassword/forgotpassword.component';
import { AdminhomeComponent } from './View/pages/admin/adminhome/adminhome.component';
import { UserhomeComponent } from './View/pages/user/userhome/userhome.component';
import { RecoverpasswordComponent } from './View/recoverpassword/recoverpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidemenuComponent,
    LayoutComponent,
    LoginComponent,
    PasswordComponent,
    ForgotpasswordComponent,
    AdminhomeComponent,
    UserhomeComponent,
    RecoverpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
