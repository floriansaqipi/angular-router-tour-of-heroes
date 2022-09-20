import { Component } from '@angular/core';

import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  // title = 'angular-router-tour-of-heroes';

  constructor(private contexts: ChildrenOutletContexts) {}

  getAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
