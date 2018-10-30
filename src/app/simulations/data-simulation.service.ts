import { Injectable } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

export interface SimulationData {
  source: string;
  severity: string;
  type: string;
  time: Date;
  message: string;
}

@Injectable()
export class DataSimulationService {

  sources: string [] = ['Battery_A', 'Battery_B', 'SloarPanel_A' ];
  messages: string [] = ['Message A', 'Message B', 'Message C' ];
  severities: string [] = ['INT', 'NORMAL', 'WARNING' ];
  types: string [] = ['INFO', 'STAUS', 'DEBUG' ];

  constructor() {
  }

  public start(time: number): Observable<SimulationData> {
    return interval(time * 1000).pipe(map(val => {
      return {
        source: this.sources[Math.floor(Math.random() * 3)] ,
        severity: this.severities[Math.floor(Math.random() * 3)],
        type: this.types[Math.floor(Math.random() * 3)],
        time: new Date(),
        message: this.messages[Math.floor(Math.random() * 3)],
      };
    }));
  }

}
