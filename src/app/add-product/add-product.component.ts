import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../home/home.component';
import { AdminRegisterService } from '../service/admin-register.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product= new Product()
  message=''
  constructor(private service:AdminRegisterService,
    private route:Router) { }

  ngOnInit(): void {
  }

  editProduct(){
    this.service.addProducts(this.product).subscribe(
      response=>{this.message="product added successfully"}
    );
  }
  view(){
    this.route.navigate(['home'])
  }

}
