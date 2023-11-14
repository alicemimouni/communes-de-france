
import { SearchCommuneService } from 'src/services/search-commune.service';
import { Commune } from 'src/model/commune';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    });
  }

  getDetailPage(result: any) {
    // console.log(result);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        result: JSON.stringify(result)
      }
    }
    this.router.navigate(['commune-detail'], navigationExtras);

    // scroll to detail commune
    setTimeout(() => {
      const detailCommuneElement = document.getElementById('detail-commune');
      if (detailCommuneElement) {
        detailCommuneElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);

     // Reset the communes table
     this.communes = [];
  }
}


