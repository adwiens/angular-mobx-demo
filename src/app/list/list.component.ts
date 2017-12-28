import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { StateService } from './../state.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  @Input() enableMobX = true;

  constructor(public state: StateService) { }

}
