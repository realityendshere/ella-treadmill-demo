import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { get, set, computed } from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  queryParams: ['search'],

  search: null,

  problems: alias('model'),

  actions: {
    applySearch(term) {
      this.updateFilter.perform(term);
    }
  },

  updateFilter: task(function* (term) {
    set(this, 'search', term);

    yield timeout(500);

    let model = this.model;

    model.filterBy({ q: this.search })

    return true;
  }).restartable(),
});
