import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Departement } from 'src/model/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementsService {

  static urlDepartements = 'https://geo.api.gouv.fr/departements';

  constructor(private httpClient: HttpClient) { }

  getDepartements(): Observable<Array<Departement>> {
    return this.httpClient.get<Array<Departement>>(DepartementsService.urlDepartements);
  }
}
