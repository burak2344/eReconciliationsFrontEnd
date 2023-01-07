import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

jwtHelper:JwtHelperService = new JwtHelperService;






isAuthenticated:boolean = false;

  updateForm:FormGroup;

  companyId:string;
  companyName:string;
  userId:string;
  styleClass = "";
  isDark:boolean = false;


  constructor(
    @Inject("validHatasi") private validHatasi:string,
    private authService:AuthService,
    private toastr:ToastrService,
    private router:Router,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.refresh();
  }


  refresh() {
    this.isAuthenticated = this.authService.isAuthenticated();
    if (this.isAuthenticated) {
      let token = localStorage.getItem("token");
      let decode = this.jwtHelper.decodeToken(token);
      //console.log(decode)
      let companyId = Object.keys(decode).filter(x => x.endsWith("/anonymous"))[0];
      let userId = Object.keys(decode).filter(x => x.endsWith("/nameidentifier"))[0];
      let companyName = Object.keys(decode).filter(x => x.endsWith("/ispersistent"))[0];
      this.companyId = decode[companyId];
      this.companyName = decode[companyName];
      this.userId = decode[userId];
    }
  }

}
