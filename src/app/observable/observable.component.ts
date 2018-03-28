import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  constructor(protected namesService: NamesService, protected selection: number) { }

  ngOnInit() { }

  selectionName(): string {
    switch(this.selection) {
      case 1: return 'One';
      case 2: return 'Two';
      case 3: return 'Three';
      default: return 'Unknown';
    }
  }

  onSelect() { 
    this.namesService.setNames(this.selectionName());
    console.log(this.selectionName() + ' Clicked!');
  }
}
