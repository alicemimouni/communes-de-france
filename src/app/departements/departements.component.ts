import { Component, OnInit } from '@angular/core';
import { DepartementsService } from 'src/services/departements.service';
import { Departement } from 'src/model/departement';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.scss']
})
export class DepartementsComponent implements OnInit {

  departements: Array<Departement> = [];
  selectedCodeDepartement: string = '';


  constructor(private departementsService: DepartementsService) { }

  ngOnInit(): void {
    this.departementsService.getDepartements().subscribe((departements) => {
      this.departements = departements;
    });
  }

}
