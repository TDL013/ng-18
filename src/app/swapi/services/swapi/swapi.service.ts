import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor() { }

  getSwapi(swapiId: string): Observable<string> {
    return of(`https://swapi.dev/api/${swapiId}/`);
  }
}
