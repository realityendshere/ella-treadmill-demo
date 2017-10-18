import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  ellaSparse: service('ella-sparse'),

  model() {
    let store = get(this, 'store');

    return get(this, 'ellaSparse').array((range = {}, query = {}) => {
      let page = { limit: get(range, 'length'), offset: get(range, 'start') };
      let filter = { q: get(query, 'q') };

      return store.query('problem', { page: page, filter: filter }).then((result) => {
        return {
          data: result,
          total: get(result, 'meta.total')
        }
      });
    });
  }
});
