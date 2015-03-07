Email.ClientRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('client', params.client_id);
  }
});
