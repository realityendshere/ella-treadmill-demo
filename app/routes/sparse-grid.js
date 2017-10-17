import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  ellaSparse: service('ella-sparse'),

  model() {
    let store = get(this, 'store');

    return get(this, 'ellaSparse').array((range = {}, query = {}) => {
      let page = {
        limit: get(range, 'length'),
        offset: get(range, 'start')
      };

      let filter = {
        q: get(query, 'q')
      }

      let handler = (result) => {
        return {
          data: result,
          total: get(result, 'meta.total')
        }
      };

      return store.query('problem', { page: page, filter: filter }).then(handler);
    }, {
      ttl: 600000,
      limit: 25
    });
  },

  actions: {
    handleScrollStart() {
      set(this, 'controller.model.enabled', false);
    },

    handleScrollEnd() {
      set(this, 'controller.model.enabled', true);
    }
  }
});

