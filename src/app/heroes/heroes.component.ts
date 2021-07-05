import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
  
export class HeroesComponent implements OnInit {

  //The parameter simultaneously defines a private heroService and messageService properties and identifies them as a HeroService and MessageService injection site. When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService and messageService parameter to the singleton instances of both services.
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  
  heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`);
  }

  // The subscribe() method waits for the Observable to emit the array of heroes—which could happen now or several minutes from now, and then passes the emitted array to the callback, which sets the component's heroes property.
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroesArray => this.heroes = heroesArray);
    
  }

  // While you could call getHeroes() in the constructor, that's not the best practice. Instead, calling getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
  ngOnInit(): void {
    this.getHeroes();
  }

}
