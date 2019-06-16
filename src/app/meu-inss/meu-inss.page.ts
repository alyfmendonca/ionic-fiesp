import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meu-inss',
  templateUrl: './meu-inss.page.html',
  styleUrls: ['./meu-inss.page.scss'],
})
export class MeuInssPage implements OnInit {
  myId = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
  }

}
