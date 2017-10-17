import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('no-help');
  this.route('treadmill');
  this.route('sparse');
  this.route('sparse-better');
  this.route('preload-all');
  this.route('load-all');
});

export default Router;
