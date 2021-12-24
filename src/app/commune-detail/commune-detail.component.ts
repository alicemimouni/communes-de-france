import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-communes',
  templateUrl: './commune-detail.component.html',
  styleUrls: ['./commune-detail.component.scss']
})

export class CommuneDetailComponent implements OnInit {

  communeDetail: any = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((response) => {
      const paramsData = JSON.parse(response['result']);
      this.communeDetail = paramsData;
    });
   }

  ngOnInit(): void {
    
  }

}
