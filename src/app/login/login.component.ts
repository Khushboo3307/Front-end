import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { AdminRegisterService } from '../service/admin-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin= new Admin()
  email=""
  password=""
  invalidLogin=false

  constructor(private service:AdminRegisterService,
    private route: Router) { }

  ngOnInit(): void {
  }

  handleLogin(admin){
    this.service.loginAdmin(this.admin).subscribe(
      data=>console.log("logged in"),
      error=>console.log("invalid data")
    );
    this.route.navigate(['home'])
  }
}
