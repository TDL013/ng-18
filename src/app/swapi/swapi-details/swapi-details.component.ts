import { Component, Input } from '@angular/core';
import { SwapiService } from '../services/swapi/swapi.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-swapi-details',
  standalone: true,
  imports: [],
  templateUrl: './swapi-details.component.html',
  styleUrl: './swapi-details.component.scss'
})
export class SwapiDetailsComponent {

  swapi: string = '';

  constructor(
    private swapiService: SwapiService
  ) { }

  @Input()
  set id(swapiId: string) {
    this.swapiService.getSwapi(swapiId).subscribe((result: string) => {
      this.swapi = result;
    });
  }

}
