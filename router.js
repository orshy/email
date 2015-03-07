Email.Router.map(function() {
  this.resource('clients', {path: '/'});
  this.resource('client', {path: ':client_id'}, function() {
  this.resource('new-email');
  });
  this.resource('new-client');
});
