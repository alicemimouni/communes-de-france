import { Component, OnInit } from '@angular/core';
import { SearchCommuneService } from 'src/services/search-commune.service';
import { Commune } from 'src/model/commune';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-search-commune',
  templateUrl: './search-commune.component.html',
  styleUrls: ['./search-commune.component.scss']
})
export class SearchCommuneComponent implements OnInit {

  
  communes: Commune[] =[];
  commune: string = '';

  constructor(private searchCommuneService: SearchCommuneService, private router:Router) { }

  ngOnInit(): void { }

  getCommunesSearch(name: any) {
    const keyword = name.target.value;
    const search = this.searchCommuneService.getSearchCommune(keyword).subscribe((commune) => {
      this.communes = commune;
      console.log(this.communes);
    });
  }

  getDetailPage(result: any) {
    console.log(result);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        result: JSON.stringify(result)
      }
    }
    this.router.navigate(['commune-detail'], navigationExtras);
  }
  
}


