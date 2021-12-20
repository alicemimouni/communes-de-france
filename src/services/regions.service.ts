import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Region } from 'src/model/region';
@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  static urlRegions = 'https://geo.api.gouv.fr/regions';

  constructor(private httpClient: HttpClient) { }

  getRegions(): Observable<Array<Region>> {
    return this.httpClient.get<Array<Region>>(RegionsService.urlRegions);
  }
}
