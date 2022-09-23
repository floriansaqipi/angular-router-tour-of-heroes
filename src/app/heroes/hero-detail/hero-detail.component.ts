import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$!: Observable<Hero>;
  id! : number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  ngOnInit() {
    // when it won't be reused
    // const id = this.route.snapshot.paramMap.get('id')!;
    // this.hero$ = this.service.getHero(id);
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = +params.get('id')!;
        return this.service.getHero(this.id);
      })
    );
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

  previousHero(){
    this.hero$ = this.service.getHero(--this.id!);      
  }

  nextHero(){
    this.hero$ = this.service.getHero(++this.id!);      
  }

}