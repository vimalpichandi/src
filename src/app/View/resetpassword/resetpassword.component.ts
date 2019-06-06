import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/services/user.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  randomid: any = {};
  public fors: any = {}
  public timealert = environment.timelimit;
  failure: boolean = true;
  message: any;
  mask: boolean = true;
  constructor(private router: ActivatedRoute, private userService: UserService, private toast: ToastrService, private nav: Router) { }


  ngOnInit() {
    this.router.params.subscribe(params => {
      this.randomid = params.randomid
      console.log(this.randomid)
    });

  }
  
  eyemask() {
    var pw = document.getElementsByClassName("input-password")[0];
    var em = document.getElementById("eyemask");

    if (this.mask === true) {
      this.mask = false;
      pw.setAttribute("type", "text");
      em.setAttribute("class", "fas fa-eye-slash open-close-eye");

    } else {
      this.mask = true;
      pw.setAttribute("type", "password");
      em.setAttribute("class", "fas fa-eye-slash open-close-eye");
    }
  };
  eyemasks() {
    var pw = document.getElementsByClassName("input-conpassword")[0];
    var em = document.getElementById("eyemask");

    if (this.mask === true) {
      this.mask = false;
      pw.setAttribute("type", "text");
      em.setAttribute("class", "fas fa-eye open-close-eye");

    } else {
      this.mask = true;
      pw.setAttribute("type", "password");
      em.setAttribute("class", "fas fa-eye-slash open-close-eye");
    }
  };
  setpwd: any;
  btnGenerate(pass) {
    this.setpwd = pass.changepasswords;
    this.userService.userChangepassword(this.randomid, this.setpwd.newPassword, this.setpwd.confirmPassword).subscribe(
      data => {
        if (data.userInfo.status == "success") {
          this.toast.success(data.userInfo.message, '', { timeOut: this.timealert, progressBar: true })
          this.nav.navigate(['/login']);
        }
        else if (data.userInfo.status == "failure") {
          if (pass.password && pass.confirmPassword) {
            this.failure = false
            // this.toast.error(data.userInfo.message,  '', {timeOut: this.timealert,progressBar:true})
            this.message = data.userInfo.message
          }
          else {
            this.failure = false
            this.message = "Kindly enter new password and confirm password"
          }
        }
      }
    )
  }

  ///////////// password changes

  passval: boolean = true;
  passval1: boolean = true;
  passval2: boolean = true;
  passval3: boolean = true;
  passval4: boolean = true;
  passkey: boolean = true;
  passkey1: boolean = true;
  passkey2: boolean = true;
  passkey3: boolean = true;
  passkey4: boolean = true;
  passlast: boolean = true;
  passlast1: boolean = true;
  passlast2: boolean = true;
  passlast3: boolean = true;
  passlast4: boolean = true;

  onKey(event: any) {
    console.log(event.target.value)
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var special = /[#$^+=!*()@%&]/g;
    if (event.target.value.match(lowerCaseLetters)) {
      this.passval = true;

    }
    else {
      this.passval = false
    }
    if (event.target.value.match(upperCaseLetters)) {
      this.passval1 = true
    }
    else {
      this.passval1 = false
    }
    if (event.target.value.match(numbers)) {
      this.passval2 = true
    }
    else {
      this.passval2 = false
    }
    if (event.target.value.length >= 8) {
      this.passval3 = true
    }
    else {
      this.passval3 = false
    }
    if (event.target.value.match(special)) {
      this.passval4 = true
    }
    else {
      this.passval4 = false
    }

  }
  onKey1(event: any) {
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var special = /[#$^+=!*()@%&]/g;
    if (event.target.value.match(lowerCaseLetters)) {
      this.passkey = true
    }
    else {
      this.passkey = false
    }
    if (event.target.value.match(upperCaseLetters)) {
      this.passkey1 = true
    }
    else {
      this.passkey1 = false
    }
    if (event.target.value.match(numbers)) {
      this.passkey2 = true
    }
    else {
      this.passkey2 = false
    }
    if (event.target.value.length >= 8) {
      this.passkey3 = true
    }
    else {
      this.passkey3 = false
    }
    if (event.target.value.match(special)) {
      this.passkey4 = true
    }
    else {
      this.passkey4 = false
    }


  }
  onKey2(event: any) {
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var special = /[#$^+=!*()@%&]/g;
    if (event.target.value.match(lowerCaseLetters)) {
      this.passlast = true
    }
    else {
      this.passlast = false
    }
    if (event.target.value.match(upperCaseLetters)) {
      this.passlast1 = true
    }
    else {
      this.passlast1 = false
    }
    if (event.target.value.match(numbers)) {
      this.passlast2 = true
    }
    else {
      this.passlast2 = false
    }
    if (event.target.value.length >= 8) {
      this.passlast3 = true
    }
    else {
      this.passlast3 = false
    }
    if (event.target.value.match(special)) {
      this.passlast4 = true
    }
    else {
      this.passlast4 = false
    }
  }
}


