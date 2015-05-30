if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Router.route('/', function () {
	  this.layout('MainLayout');
	  this.render('setup');
	});
Router.route('/shopfront', function () {
  this.layout('MainLayout');
	this.render('shopfront');
});
