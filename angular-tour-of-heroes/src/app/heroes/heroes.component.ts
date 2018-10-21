import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // seletedHero: Hero;
  heroes: Hero[];


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.seletedHero = hero;
  // }
  // 없애고 라우터로 연결

  getHeroes(): void {

    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
