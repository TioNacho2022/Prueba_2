import { Component, OnInit } from '@angular/core';
import { ApiDummyJsonService } from '../service/api-dummy-json.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public api: ApiDummyJsonService) { }

  ngOnInit() {
    console.log(this.api.obtenerDatosUser()?.image ,'este')

  }
}
