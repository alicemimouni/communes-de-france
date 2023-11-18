import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Departement} from "../model/departement";
import {sprintf} from "sprintf-js";


@Injectable({
  providedIn: 'root'
})
export class DepartementsByRegionService {

  static urlDepartementsByRegion = 'https://geo.api.gouv.fr/regions/%s/departements';

  constructor(private httpClient: HttpClient) { }

  getdepartementsByCodeRegion(codeRegion: string): Observable<Array<Departement>> {
    return this.httpClient.get<Array<Departement>>(
      sprintf(DepartementsByRegionService.urlDepartementsByRegion, codeRegion)
    );
  }
}

