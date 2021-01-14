import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin';
import { AdminRegisterService } from '../service/admin-register.service';

@Component({
  selector: 'app-newregistration',
  templateUrl: './newregistration.component.html',
  styleUrls: ['./newregistration.component.css']
})
export class NewregistrationComponent implements OnInit {
  
  admin= new Admin();
  message='Please enter the details ';
  invalidData=false;
  message1=''

  constructor(private adminR:AdminRegisterService,
    private route: Router) { }

  ngOnInit(): void {
   
  }

  registerAdmin(){
    this.adminR.registerAdmin(this.admin).subscribe(
      response=>{this.message1="Registered successfully"}
    );
    this.refreshRegister()
}
refreshRegister(){
  this.route.navigate([''])
}
  
  loginAdmin(){
    this.route.navigate(['login']);
  }
}
