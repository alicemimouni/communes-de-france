import { Component } from '@angular/core';
import { Commune } from 'src/model/commune';
import { CommunesService } from 'src/services/communes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'regions-france';
  communes: Array<Commune> = [];
  selectedName: string = '';

  constructor(private communesService: CommunesService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this;this.route.params.subscribe(param => {
      this.communesService.getCommunes().subscribe((communes) => {
        this.communes = communes;
      });
    });
  }

  
}
