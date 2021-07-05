import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
// Import mock-heroes source.
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
// Upon service creation Angular CLI automatically registers HeroService as a provider at the app's root level - all component classes within the app will have access to this service.
  
export class HeroService {

  // Using constructor to inject HeroService with MessageService.
  constructor(private messageService: MessageService) { }

  // of() returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  getHeroes(): Observable<Hero[]> {
    const heroes = HEROES;
    this.messageService.add('HeroService: fetched heroes');
    return of(heroes);
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
