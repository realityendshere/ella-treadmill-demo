import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sparse grid', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sparse-grid');
    assert.ok(route);
  });
});
