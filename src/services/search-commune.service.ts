import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commune} from "../model/commune";
import {sprintf} from "sprintf-js";

@Injectable({
  providedIn: 'root'
})
export class SearchCommuneService {

  static urlSearchCommune = 'https://geo.api.gouv.fr/communes?nom=%s&fields=departement&boost=population&limit=5';

  constructor(private httpClient: HttpClient) { }

  getSearchCommune(nom: string): Observable<Array<Commune>> {
    return this.httpClient.get<Array<Commune>>(sprintf(SearchCommuneService.urlSearchCommune, nom));
  }

}
