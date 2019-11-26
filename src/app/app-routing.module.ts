 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LayoutComponent } from './Layout/layout.component';

import { LoginComponent } from './View/login/login.component';
import { PasswordComponent } from './View/password/password.component';
import { ForgotpasswordComponent } from './View/forgotpassword/forgotpassword.component';
import { RecoverpasswordComponent } from './View/recoverpassword/recoverpassword.component';


import { AdminhomeComponent } from './View/pages/admin/adminhome/adminhome.component';
import { UserhomeComponent } from './View/pages/user/userhome/userhome.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,
    data: { title: 'login' }
  },
  { path: 'changepassword', component: PasswordComponent,
    data: { title: 'Change Password' }
  },
  { path: 'forgotpassword', component: ForgotpasswordComponent,
    data: { title: 'Forgot Password' }
  },
  { path: 'admin',   component: LayoutComponent,
        children:[
		 
			  { path: 'home', component: AdminhomeComponent,
				data: { title: 'Admin Page' }
			  },
	    ]
  },
  { path: 'user',   component: LayoutComponent,
        children:[
		 
			  { path: 'home', component: UserhomeComponent,
				data: { title: 'User Page' }
			  },
	    ]
  }, 
  { path: '**', redirectTo: 'login', },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
