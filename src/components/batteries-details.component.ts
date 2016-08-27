import { Component, OnInit, Input} from '@angular/core';
import { Battery } from './battery';

@Component({
  selector: 'battery-details',
  template: '<div *ngIf="battery"><h2>{{battery.cdBattery}} details!</h2></div>'
})

export class BatteryDetailsComponent{
@Input() battery: Battery;
}
