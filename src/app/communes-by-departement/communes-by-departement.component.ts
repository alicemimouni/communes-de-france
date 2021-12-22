import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { CommunesByDepartementService } from 'src/services/communes-by-departement.service';
import { Commune } from 'src/model/commune';

@Component({
  selector: 'app-communes-by-departement',
  templateUrl: './communes-by-departement.component.html',
  styleUrls: ['./communes-by-departement.component.scss']
})
export class CommunesByDepartementComponent implements OnChanges {

  @Input()
  codeDepartement: string = '';

  communes: Array<Commune> = [];

  constructor(private communesByDepartementService: CommunesByDepartementService) { }

// ngOnChanges : called when a property is modified
  ngOnChanges(changes: SimpleChanges): void {

    const oldValue = changes['codeDepartement'].previousValue;
    const newValue = changes['codeDepartement'].currentValue;
    if (oldValue !== newValue) {
      this.codeDepartement = newValue;
      this.communesByDepartementService.getCommunesByCodeDepartement(
        this.codeDepartement
      ).subscribe((communes) => {
        this.communes = communes;
      });
    }

  }

}
