import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commune} from "../model/commune";
// sprintf return a formatted string
import {sprintf} from "sprintf-js";

@Injectable({
  providedIn: 'root'
})
export class CommunesByDepartementService {

  static urlCommunesByDepartement = 'https://geo.api.gouv.fr/departements/%s/communes';

  constructor(private httpClient: HttpClient) { }

  getCommunesByCodeDepartement(codeDepartement: string): Observable<Array<Commune>> {
    return this.httpClient.get<Array<Commune>>(
      sprintf(CommunesByDepartementService.urlCommunesByDepartement, codeDepartement) //takes as parameters the text concerned and the word to replace instead of %s
    );
}
}
