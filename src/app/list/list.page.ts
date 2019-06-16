import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  constructor(public nav: Router) {
  }
  usuario = "Joao";
  ngOnInit() {
  }

  meuInss(){
    this.nav.navigateByUrl('/meu-inss');
  }
  // add back when alpha.4 is out font melhor e solucao mais simples e rapida
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
