import { Injectable } from '@angular/core';
import { observable, computed, action } from 'mobx';
import * as faker from 'faker';

@Injectable()
export class StateService {
  @observable filter = '';
  @observable items = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.items.push(faker.company.catchPhrase());
    }
  }

  @computed get filteredItems() {
    const regexp = new RegExp(this.filter, 'i');
    return this.items.filter(item => regexp.test(item));
  }

  @action setFilter(value) {
    this.filter = value;
  }
}
