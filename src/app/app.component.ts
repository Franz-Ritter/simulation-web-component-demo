import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'simulator-client',
  template: `
      <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  title = 'simulator client';

  @Input('state')
  set state(state: string) {
      console.log('simulator client received state', state);
  }

  @Output() message = new EventEmitter<any>();

  constructor(private router: Router) {}

  ngOnInit() {

    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?

    // Standalone mode
    if (environment.standalone) {
      this.router.navigate(['/simulator']);
    }

    // just for demonstration!
    setTimeout(() => {
      this.message.next('simulator initialized!');
    }, 2000);

  }
}
