import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { StateService } from './../state.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
  filter: FormControl;
  constructor(state: StateService) {
    this.filter = new FormControl('');
    this.filter.valueChanges.subscribe(value => state.setFilter(value));
  }
}
