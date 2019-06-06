import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './View/login/login.component';
import { ChangepasswordComponent } from './View/changepassword/changepassword.component';
import { ForgotpasswordComponent } from './View/forgotpassword/forgotpassword.component';
import { RecoverpasswordComponent } from './View/recoverpassword/recoverpassword.component';
import { ResetpasswordComponent } from './View/resetpassword/resetpassword.component';

import { ProfileComponent } from './View/profile/profile.component';

import { AdminhomeComponent } from './View/pages/admin/adminhome/adminhome.component';
import { UserhomeComponent } from './View/pages/user/userhome/userhome.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,
    data: { title: 'login' }
  },
  { path: 'changepassword', component: ChangepasswordComponent,
    data: { title: 'Change Password' }
  },
  { path: 'forgotpassword', component: ForgotpasswordComponent,
    data: { title: 'Forgot Password' }
  },
  { path: 'recoverpassword', component: RecoverpasswordComponent,
  data: { title: 'Recover Password' }
  },
  { path: 'resetpassword', component: ResetpasswordComponent,
  data: { title: 'Reset Password' }
  },
  { path: 'profile', component: ProfileComponent,
    data: { title: 'Profile Page' }
  },
  { path: 'admin/home', component: AdminhomeComponent,
  data: { title: 'Admin Page' }
  },
  { path: 'user/home', component: UserhomeComponent,
   data: { title: 'User Page' }
  },
  
  { path: '**', redirectTo: 'login', },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }