import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    return this.store.peekAll('problem');
  },

  afterModel() {
    this.fetchAll();

    return;
  },

  fetchAll(offset = 0, limit = 200) {
    let query = { page: { offset: offset, limit: limit } };
    let loaded = this.store.peekAll('problem');

    return this.store.query('problem', query).then((results) => {
      if (get(loaded, 'length') < get(results, 'meta.total')) {
        return this.fetchAll(offset + limit, limit);
      } else {
        return this.store.peekAll('problem');
      }
    });
  }
});
