import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { People } from '../interfaces/addressInfo';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public httpClient: HttpClient) {}

  /**
   *  Call API and return list of People in the response, as an Observable.
   */
  public getData(): Observable<People[]> {
    return this.httpClient
      .get(
        'https://services.odata.org/TripPinRESTierService/%28S%28j1rncy232ruwwt3enbdp2ajy%29%29/People'
      )
      .pipe(map((data: any) => data.value));
  }
}
