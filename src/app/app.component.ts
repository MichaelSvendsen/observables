import { Component } from '@angular/core';
import { NamesService } from './names.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observables';

  public names: Observable<string>;

  constructor(private namesServiceService: NamesService) {
    this.names = this.namesServiceService.names$;
  }
}
