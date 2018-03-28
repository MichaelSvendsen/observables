import { Component, OnInit } from '@angular/core';
import { ObservableComponent } from '../observable/observable.component';
import { NamesService } from '../names.service';

@Component({
  selector: 'observable-one',
  templateUrl: '../observable/observable.component.html',
  styleUrls: ['../observable/observable.component.scss']
})
export class ObservableOneComponent extends ObservableComponent {
  constructor(protected nameService: NamesService) {
    super(nameService, 1);
  }
}
