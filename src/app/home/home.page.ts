import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: Router) {}

  auth = {}

  logForm(){
    console.log(this.auth);
    this.navCtrl.navigateByUrl('principais-servicos');
  }
  validaCpf(cpf){
    console.log(cpf);
  }

}
