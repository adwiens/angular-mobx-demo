import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { StateService } from './../state.service';

@Component({
  selector: 'app-list-default',
  templateUrl: './list-default.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListDefaultComponent {

  @Input() enableMobX = true;

  constructor(public state: StateService) { }

}
