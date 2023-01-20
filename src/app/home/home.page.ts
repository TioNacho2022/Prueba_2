import { Component } from '@angular/core';
import { ApiDummyJsonService } from '../service/api-dummy-json.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public api: ApiDummyJsonService) {}

  ionViewWillEnter(){
    this.api.products();
    this.api.productsMas();
  }

}
