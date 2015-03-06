Email.EmailController = Ember.ObjectController.extend({
  isShowing: false,
  actions: {
    delete: function() {
      if (confirm('Delete Email?')) {
        this.get('model').destroyRecord();
      }
    },
    details: function() {
      this.set('isShowing', !this.isShowing);
    }
  }
});
