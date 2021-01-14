import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class AdminRegisterService {

  constructor(private http: HttpClient) { }

  public registerAdmin(admin :Admin):Observable<Admin>{
    return this.http.post<Admin>('http://localhost:8080/grocery/register',admin)
  } 

  public loginAdmin(admin: Admin){
    return this.http.post<Admin>('http://localhost:8080/grocery/login',admin)
  }

  public getAllProducts(){
    return this.http.get<Product[]>('http://localhost:8080/grocery/allProducts')
  }

  public updateProduct(id){
    return this.http.get<Product>(`http://localhost:8080/grocery/editProduct/${id}`)
  }

  public updatedProduct(data:Product){
    return this.http.put('http://localhost:8080/grocery/updatedProduct',data)
  }

  public deleteProduct(id){
    return this.http.delete(`http://localhost:8080/grocery/deleteProduct/${id}`)
  }

  public addProducts(product: Product):Observable<Product>{
    return this.http.post<Product>('http://localhost:8080/grocery/addProduct',product)
  }
}
