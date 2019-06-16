import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termos',
  templateUrl: './termos.page.html',
  styleUrls: ['./termos.page.scss'],
})
export class TermosPage implements OnInit {

  constructor(public nav: Router) { }

  ngOnInit() {
  }

  aceitaTermo(){
    this.nav.navigateByUrl('/principais-servicos');
  }

}
