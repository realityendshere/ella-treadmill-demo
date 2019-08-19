import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  ellaSparse: service('ella-sparse'),

  queryParams: {
    search: {
      replace: true
    }
  },

  model() {
    let store = this.store;

    return this.ellaSparse.array((range = {}, query = {}) => {
      let page = { limit: get(range, 'length'), offset: get(range, 'start') };
      let filter = { q: get(query, 'q') };

      return store.query('problem', { page: page, filter: filter }).then((result) => {
        return {
          data: result,
          total: get(result, 'meta.total')
        }
      });
    }, {
      ttl: 600000, //Time to live for fetched content
      limit: 25 //"Page size" for fetch queries
    });
  },

  setupController(controller, model) {
    model.filterBy({ q: get(controller, 'search') });

    set(controller, 'problems', model);

    this._super(controller, model);
  },

  actions: {
    handleScrollStart() {
      // Don't fetch data while scrolling
      set(this, 'controller.model.enabled', false);
    },

    handleScrollEnd() {
      set(this, 'controller.model.enabled', true);
    }
  }
});

