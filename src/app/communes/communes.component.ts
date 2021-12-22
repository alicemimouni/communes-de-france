import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Commune } from 'src/model/commune';
import { CommunesService } from 'src/services/communes.service';
@Component({
  selector: 'app-communes',
  templateUrl: './communes.component.html',
  styleUrls: ['./communes.component.scss']
})
export class CommunesComponent implements OnInit {

  communes: Array<Commune> = [];

  constructor(private communesService: CommunesService) { }

  ngOnInit(): void {
    this.communesService.getCommunes().subscribe((communes) => {
      this.communes = communes;
      });

  }

}
