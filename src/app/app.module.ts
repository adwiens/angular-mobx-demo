import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StateService } from './state.service';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { ListDefaultComponent } from './list-default/list-default.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    ListDefaultComponent
  ],
  imports: [
    BrowserModule,
    MobxAngularModule,
    ReactiveFormsModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
