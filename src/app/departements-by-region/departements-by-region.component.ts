import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DepartementsByRegionService } from 'src/services/departementsByRegion.service';
import { Departement } from 'src/model/departement';


@Component({
  selector: 'app-departements-by-region',
  templateUrl: './departements-by-region.component.html',
  styleUrls: ['./departements-by-region.component.scss']
})
export class DepartementsByRegionComponent implements OnChanges {

  
  @Input()
  codeRegion: string = '';
  
  departements: Departement[] = [];

  constructor(private departementsByRegionService: DepartementsByRegionService) { }

// ngOnChanges : called when a property is modified
  ngOnChanges(changes: SimpleChanges): void {
    const oldValue = changes['codeRegion'].previousValue;
    const newValue = changes['codeRegion'].currentValue;
    if (oldValue !== newValue) {
      this.codeRegion = newValue;
      this.departementsByRegionService.getdepartementsByCodeRegion(
        this.codeRegion
      ).subscribe((departements) => {
        this.departements = departements;
      });
    }
  }
}
