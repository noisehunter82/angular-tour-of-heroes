import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
  
export class HeroesComponent implements OnInit {

  //The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site. When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instances of the service.
  constructor(private heroService: HeroService) { }
  
  heroes: Hero[] = [];
 

  // The subscribe() method waits for the Observable to emit the array of heroes—which could happen now or several minutes from now, and then passes the emitted array to the callback, which sets the component's heroes property.
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroesArray => this.heroes = heroesArray); 
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.heroService.addHero({ name } as Hero)
      .subscribe(() => {
        //this.heroes.push(hero);
        this.getHeroes();
      });
  }

  delete(hero: Hero): void {
    //this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
    this.getHeroes();
  }

  // While you could call getHeroes() in the constructor, that's not the best practice. Instead, calling getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
  ngOnInit(): void {
    this.getHeroes();
  }

}
