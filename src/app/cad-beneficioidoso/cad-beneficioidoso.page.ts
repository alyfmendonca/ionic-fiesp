import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cad-beneficioidoso',
  templateUrl: './cad-beneficioidoso.page.html',
  styleUrls: ['./cad-beneficioidoso.page.scss'],
})
export class CadBeneficioidosoPage implements OnInit {

  constructor(public nav: Router) { }

  ngOnInit() {
  }
  logForm(){
    this.nav.navigateByUrl('termos');
  }
}
