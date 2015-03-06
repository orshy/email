Email.Item = DS.Model.extend({
  to: DS.attr(),
  subject: DS.attr(),
  email: DS.attr(),
  client: DS.belongsTo('client', {async: true})
});
