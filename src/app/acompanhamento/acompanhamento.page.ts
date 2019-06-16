import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.page.html',
  styleUrls: ['./acompanhamento.page.scss'],
})
export class AcompanhamentoPage implements OnInit {
  myId = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
  }

}
