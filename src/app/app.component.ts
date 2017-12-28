import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  onPush: FormControl;
  enableMobX: FormControl;
  constructor() {
    this.onPush = new FormControl(true);
    this.enableMobX = new FormControl(true);
  }
}
