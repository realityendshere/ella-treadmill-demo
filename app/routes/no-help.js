import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('problem');
  },

  actions: {
    loadMore() {
      // Example: Maybe load another page
    },

    loadAll() {
      // Example: Maybe load the rest of the records
    }
  }
});
