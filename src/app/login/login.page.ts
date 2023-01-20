import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiDummyJsonService } from '../service/api-dummy-json.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formulario:FormGroup;

  constructor(private builder : FormBuilder, private api:ApiDummyJsonService) {
    this.formulario = this.builder.group({
      username : [''],
      password : [''],
      recuerdame : [false]
    })
  }

  ngOnInit() {
  }

  public iniciar (){
    this.api.authUser({
      username: this.formulario.value.username,
      password:this.formulario.value.password
    })
  }

}
