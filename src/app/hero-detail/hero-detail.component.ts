import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;  //Importing Input at the top and using @Input() decorator allows binding selectedHero from parent component to hero property of the child component. Binding is done in html.
  
  constructor() { }

  ngOnInit(): void {
  }

}
