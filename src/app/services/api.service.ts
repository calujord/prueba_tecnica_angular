import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public httpClient: HttpClient) {}

  public getData(): Observable<any> {
    console.log('trying to get data');
    return this.httpClient
      .get(
        'https://services.odata.org/TripPinRESTierService/%28S%28j1rncy232ruwwt3enbdp2ajy%29%29/People'
      )
      .pipe(map((data: any) => data.value));
  }
}
