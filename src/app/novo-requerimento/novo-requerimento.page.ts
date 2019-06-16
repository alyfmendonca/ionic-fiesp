import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novo-requerimento',
  templateUrl: './novo-requerimento.page.html',
  styleUrls: ['./novo-requerimento.page.scss'],
})
export class NovoRequerimentoPage implements OnInit {
  myId = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
  }

}
