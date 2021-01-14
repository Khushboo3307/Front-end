import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRegisterService } from '../service/admin-register.service';
export class Product{
  constructor(){
    id:Number;
    pname:String;
    category:String;
    weight:Number;
    quantity:Number;
    dateOfRegistration:String;
  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  product: Product[]
  message=''
  constructor(private service:AdminRegisterService,
    private route:Router) { }

  ngOnInit(): void {
    this.getProducts()
  }

  addProduct(){
    this.route.navigate(['addProduct'])
  }

  getProducts(){
    this.service.getAllProducts().subscribe(
      response=>{ this.product= response;}
    )
  }
  updateP(id:number){
    this.route.navigate(['updateProduct',id])
  }

  deleteP(id){
    this.service.deleteProduct(id).subscribe(
      response=>{ this.message="deleted";
    this.getProducts()}
    );
  }

}
