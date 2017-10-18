import Controller from '@ember/controller';
import { get, set, computed } from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  queryParams: ['search'],

  search: null,

  problems: computed.alias('model'),

  actions: {
    applySearch(term) {
      get(this, 'updateFilter').perform(term);
    }
  },

  updateFilter: task(function* (term) {
    set(this, 'search', term);

    yield timeout(500);

    let model = get(this, 'model');

    model.filterBy({ q: get(this, 'search') })

    return true;
  }).restartable(),
});
