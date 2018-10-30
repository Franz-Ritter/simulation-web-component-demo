import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { SimulationData, DataSimulationService } from '../data-simulation.service';
import { Subscription } from 'rxjs';

const data = [];

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent implements OnInit {

  simulationData: SimulationData[] = [];
  subscribtion: Subscription;
  simulationTime = 2;

  treeData: TreeNode[] = [
    {
        'label': 'Space Craft',
        'data': 'Space Craft Data',
        'expandedIcon': 'fa fa-space-shuttle',
        'collapsedIcon': 'fa fa-folder',
        'expanded': true,
        'children': [
          {
          'label': 'Battery A',
          'data': 'Battery A Data',
          'expandedIcon': 'fa fa-battery-quarter',
          'collapsedIcon': 'fa fa-battery-full',
          'expanded': true,
          'children': [
            {
              'label': 'Capacity',
              'icon': 'fa fa-signal',
              'data': 'Current_In Data'
            }, {
              'label': 'Current_Out',
              'icon': 'fa fa-signal',
              'data': 'Current_out data'
            }]
        },
        {
          'label': 'Battery B',
          'data': 'Battery A Data',
          'expandedIcon': 'fa fa-battery-quarter',
          'collapsedIcon': 'fa fa-battery-full',
          'children': [
            {
              'label': 'Capacity',
              'icon': 'fa fa-signal',
              'data': 'Current_In Data'
            }, {
              'label': 'Current_Out',
              'icon': 'fa fa-signal',
              'data': 'Current_out data'
            }]
        }
        ]
    }];

  constructor(private  dataSimulationService: DataSimulationService) { }

  ngOnInit() {
  }

  startSimulation() {
    this.subscribtion = this.dataSimulationService.start(this.simulationTime ? this.simulationTime : 2)
      .subscribe((value: SimulationData) => this.simulationData.unshift(value));
  }

  stopSimulation() {
    if (this.subscribtion != null) {
      this.subscribtion.unsubscribe();
    }
  }

  applyTimeChange() {
    this.stopSimulation();
    this.startSimulation();
  }

  clear() {
    this.simulationData.length = 0;
  }

}
