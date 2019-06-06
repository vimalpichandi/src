import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService,private router:Router) { }
  apiUrl: String = environment.api_url;
  ngOnInit() {
  }

  logout(){
    this.userService.clientMasterId = 0;
    this.userService.clearSession();
    window.localStorage.removeItem('cmid');
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }
  

}
