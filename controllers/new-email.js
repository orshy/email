Email.NewEmailController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var email = this.get('model');
      email.save();

      var controller = this;
      email.get('client').then(function(client) {
        client.save();
        controller.transitionToRoute('client', client);
      });
    }
  }
});
