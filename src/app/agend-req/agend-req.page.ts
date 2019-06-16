import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agend-req',
  templateUrl: './agend-req.page.html',
  styleUrls: ['./agend-req.page.scss'],
})
export class AgendReqPage implements OnInit {
  myId = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
  }

}
