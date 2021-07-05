import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;  //Importing Input at the top and using @Input() decorator allows binding selectedHero from parent component to hero property of the child component. Binding is done in html.
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  getHero(): void {
    // The route.snapshot is a static image of the route information shortly after the component was created. The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch. The JavaScript Number function converts the string to a number, which is what a hero id should be.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  
  goBack(): void {
    this.location.back();
  }
  
  ngOnInit(): void {
    this.getHero();
  }



}
