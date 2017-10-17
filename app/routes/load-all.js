import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
  model() {
    return this.store.peekAll('problem');
  },

  afterModel() {
    this.fetchAll();

    return;
  },

  fetchAll(offset = 0, limit = 200) {
    return this.store.query('problem', { page: { offset: offset, limit: limit } }).then((results) => {
      set(this, 'total', get(results, 'meta.total'));

      if (get(this.store.peekAll('problem'), 'length') < get(results, 'meta.total')) {
        return this.fetchAll(offset + limit, limit);
      }
    });
  }
});
