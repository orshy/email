Email.NewEmailRoute = Ember.Route.extend({
  model: function(params) {
    var client = this.modelFor('client');
    var email = this.store.createRecord('email');
    client.get('emails').then(function(emails) {
      emails.pushObject(email);
    });
    return email;
  }
});
