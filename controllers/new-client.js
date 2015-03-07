Email.NewClientController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newClient = this.store.createRecord('client', {
        name: this.get('name'),
        email: this.get('email')
      });
      newClient.save();
      this.transitionToRoute('clients');
    }
  }
});
