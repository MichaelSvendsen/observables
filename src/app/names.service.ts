import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NamesService {

  private _names: Subject<string> = new Subject<string>();
  public names$: Observable<string>;

  constructor() { 
    this.names$ = this._names.asObservable();
  }

  setNames(names: string) {
    this._names.next(names);
  }
}
