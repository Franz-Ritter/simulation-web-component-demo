import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { EmptyComponent } from './empty/empty.component';
import { SimulationsComponent } from './simulations/simulations.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { BatteryComponent } from './simulations/battery/battery.component';
import { SatelliteComponent } from './simulations/satellite/satellite.component';
import {ButtonModule} from 'primeng/button';
import {TreeModule} from 'primeng/tree';
import {TableModule} from 'primeng/table';
import { DataSimulationService } from './simulations/data-simulation.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    SimulationsComponent,
    BatteryComponent,
    SatelliteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    TabMenuModule,
    ButtonModule,
    TreeModule,
    TableModule,
    RouterModule.forRoot([
      { path: 'simulator', component: SimulationsComponent, children: [
        { path: 'battery', component: BatteryComponent },
        { path: 'satellite', component: SatelliteComponent },
      ]},
      { path: '**', component: EmptyComponent }
    ], { useHash: true }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DataSimulationService],
  bootstrap: [AppComponent]
  // entryComponents: [ AppComponent ]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  // ngDoBootstrap() {
  //   const appElement = createCustomElement(AppComponent, { injector: this.injector});
  //   customElements.define('simulator-client', appElement);
  // }
}
