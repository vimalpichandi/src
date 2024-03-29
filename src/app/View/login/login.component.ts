	import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  loginform: boolean =true;
  userName: string = "";
  password: string ="";
  mask: boolean = true;
  ngOnInit() {
  }
  eyemask(){
    var pw   = document.getElementsByClassName("input-password")[0];
    var em   = document.getElementById("eyemask");

    if(this.mask === true){
      this.mask = false;
      pw.setAttribute("type", "text");
      em.setAttribute("class", "fa fa-eye open-close-eye");
      
    } else {
      this.mask = true;
      pw.setAttribute("type", "password");
      em.setAttribute("class", "fa fa-eye-slash open-close-eye");
    } 
  };
  
  btnLogin(){
    //alert("login");
    if (this.userName == "a@a.c" && this.password == "demo"){
      this.router.navigate(['admin/home']);}
      else if (this.userName == "u@u.c" && this.password == "demo"){
        // window.location.reload()
        this.router.navigate(['user/home']);
      }
      else{ 
        alert("Enter Username and Password")
        // this.errorMsg = !!this.userName && !!this.password ?
        //                   "Invalid Login": "Enter Username and Password";
      }
      // this.errors = new Errors();
      // const credentials = {
      //   'username': this.userName,
      //   'password': this.password
      // }
      // this.userService
      // .attemptAuth(credentials)
      // .subscribe(
        
      //   data => {
      //     this.userid = data;
      //     // console.log(this.userid)
          
      //     if(this.userid.item.userGroupId === "1"){
      //       this.router.navigate(['/admin/home']);
      //     }else if(this.userid.item.userGroupId === "3"){
      //       this.router.navigate(['/admin']);
      //     }else
      //     {
      //       this.router.navigate(['/user/home']);
      //     }
      //     // console.log("ReturnDate", this.userid.item.userGroupId);
      //   },
      //   err => {
      //     this.errors = err;
      //    this.errorMsg = "Authentication Failed";
      //     /* this.errors.message.replace('Authentication Failed:','') */
      //   }
      // );
  }
  forgot(){
    this.loginform = false;
  }
  login(){
    this.loginform = true;
  }
}
