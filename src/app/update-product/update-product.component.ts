import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../home/home.component';
import { AdminRegisterService } from '../service/admin-register.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:number
  message=''
  data:Product
  constructor(private router:ActivatedRoute,
    private service:AdminRegisterService,
    private route:Router) { }

  ngOnInit(): void {
    this.id= this.router.snapshot.params['id'];
    this.service.updateProduct(this.id).subscribe(
      response=> {this.data=response}
    )
  }
  editProduct(){
    this.service.updatedProduct(this.data).subscribe(
      response=>{this.message="updated successfully"}
    );
    }
  
    view(){
      this.route.navigate(['home'])
    }

  }

