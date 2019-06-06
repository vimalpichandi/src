import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../../../Shared/Services/user.service';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,DxButtonModule } from 'devextreme-angular';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {

  tab: number;
  randomuserList: any;
  constructor(public UserService: UserService) { }

  step1:any;
  step2:any;

  setFormValue(myaddform){
    if(this.tab==1)
      this.step1 = myaddform;
      else
      this.step2 = myaddform;
  }

  open: any='A';
  getDatamode(event, mode) {
    this.open=mode; 
    if (mode == 'A') {
      alert("mode : " + mode)
    } else if (mode == 'male') { 
      this.getDataByMode(mode)
      alert("mode : " + mode)
    } else {
      alert("mode : " + mode)
      this.getDataByMode(mode)

    }
  }
  getDataByMode(mode) {
    this.UserService.getrandomeuserData(mode).subscribe(
      data => {
        this.randomuserList = data;
        console.log(JSON.stringify(this.randomuserList));
      });
  }


  





  
  
  createUser:any={} 
  ngOnInit() {
  }

  setTab(tab){
    this.tab = tab;
  }

  closeForm(myaddform){
    this.createUser = {} // dummy data
    //myaddform.resetForm() 
  }
}
