if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.splash.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.splash.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}
