import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis$!: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}

  ngOnInit() {
    // when it won't be reused
    // const id = this.route.snapshot.paramMap.get('id')!;
    // this.crisis$ = this.service.getCrisis(id);
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCrisis(params.get('id')!))
    );
  }


  gotoCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    // Pass along the Crisis id if available
    // so that the CrisisList component can select that Crisis.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], {relativeTo: this.route});
  }
}