import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { ObservableOneComponent } from './observable-one/observable-one.component';
import { ObservableTwoComponent } from './observable-two/observable-two.component';
import { ObservableThreeComponent } from './observable-three/observable-three.component';
import { NamesService } from './names.service';


@NgModule({
  declarations: [
    AppComponent,
    ObservableOneComponent,
    ObservableTwoComponent,
    ObservableThreeComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
