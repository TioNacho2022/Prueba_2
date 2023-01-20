import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Auth, AuthResponse } from '../models/auth';
import { ProductReponse } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ApiDummyJsonService {

  private urlLogin :string='https://dummyjson.com/auth/login';
  private urlProducts :string='https://dummyjson.com/auth/products'

  private datosUser!: AuthResponse;
  private datosProducts!:ProductReponse;
  private token:string='';

  private skip: number = 0;

  constructor(private http: HttpClient) { }


  public authUser({username,password}:Auth){
    this.http.post<AuthResponse>(this.urlLogin,{username,password},{headers:{
      'Content-Type': 'application/json'
    }}).subscribe(res =>{
      this.datosUser = res;
      console.log(this.datosUser.image)
      this.token=res.token;
      localStorage.setItem('token', this.token)
    })
  }

  public products(){
    this.http.get<ProductReponse>(this.urlProducts+`?skip=${this.skip}`,{headers:{
      'Authorization': 'Bearer '+ localStorage.getItem('token'),
      'Content-Type': 'application/json'
    }}).subscribe(res =>{
      this.datosProducts = res;
    })

  }

  public productsMas(){
    this.skip++
    this.products();
  }

  public productsMenos(){
    this.skip--
    this.products();
  }


  public obtenerDatosUser(){
    return  this.datosUser;
  }

  public obtenerToken(){
    return this.token;
  }

  public obtenerDatosProducts(){
    return this.datosProducts;
  }


}

