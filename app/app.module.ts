import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './components/app.component';
import {ClockComponent} from "./components/clock.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
      AppComponent,
      ClockComponent
  ],
  bootstrap:    [ AppComponent ],
  entryComponents: [
      ClockComponent,
  ]
})
export class AppModule { }
