Email.Client = DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  emails: DS.hasMany('email', {async: true})
});
