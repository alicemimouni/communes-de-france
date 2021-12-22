import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Commune } from 'src/model/commune';


@Injectable({
  providedIn: 'root'
})
export class CommunesService {

  static urlCommunes = 'https://geo.api.gouv.fr/communes';
// httpClient allows to make http requests to an api
  constructor(private httpClient: HttpClient) { }

  getCommunes(): Observable<Array<Commune>> {
    return this.httpClient.get<Array<Commune>>(CommunesService.urlCommunes);
  }

}
