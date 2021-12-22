import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { SearchCommuneService } from 'src/services/search-commune.service';
import { Commune } from 'src/model/commune';

@Component({
  selector: 'app-search-commune',
  templateUrl: './search-commune.component.html',
  styleUrls: ['./search-commune.component.scss']
})
export class SearchCommuneComponent implements OnChanges {

  @Input()
  name: string = '';

  communes: Commune[] =[];

  constructor(private searchCommuneService: SearchCommuneService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const oldValue = changes['name'].previousValue;
    const newValue = changes['name'].currentValue;
    if (oldValue !== newValue) {
      this.name = newValue;
      this.searchCommuneService.getSearchCommune(
        this.name
      ).subscribe((communes) => {
        this.communes = communes;
      });
    }
  }
  
}


