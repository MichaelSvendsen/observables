import { Component, OnInit } from '@angular/core';
import { ObservableComponent } from '../observable/observable.component';
import { NamesService } from '../names.service';

@Component({
  selector: 'observable-three',
  templateUrl: '../observable/observable.component.html',
  styleUrls: ['../observable/observable.component.scss']
})
export class ObservableThreeComponent extends ObservableComponent {
  constructor(protected nameService: NamesService) {
    super(nameService, 3);
  }
}
